import * as THREE from 'three';

// A free surface inside a closed bottle cavity. Volume is held with a deterministic
// volume sample distribution. A damped inertial normal approximates slosh; no fluid solver.
export function createLiquidMotion(mesh, glass) {
 const original=mesh.geometry;original.computeBoundingBox();
 const minY=original.boundingBox.min.y,maxY=original.boundingBox.max.y;
 const gp=glass.geometry.attributes.position,gn=glass.geometry.attributes.normal,rings=new Map();
 for(let i=0;i<gp.count;i++){
  const x=gp.getX(i),y=gp.getY(i),z=gp.getZ(i);
  if(x*gn.getX(i)+z*gn.getZ(i)>-.015||y<minY)continue;
  const key=Math.round(y*10000);if(!rings.has(key))rings.set(key,[]);rings.get(key).push(Math.hypot(x,z));
 }
 let profile=[...rings].sort((a,b)=>a[0]-b[0]).map(([y,rs])=>new THREE.Vector2(Math.max(.001,rs.reduce((a,b)=>a+b)/rs.length-.0012),y/10000));
 if(profile.length<3)throw new Error('Missing inner glass profile: '+mesh.name);
 profile.unshift(new THREE.Vector2(0,minY),new THREE.Vector2(profile[0].x,minY));
 profile.push(new THREE.Vector2(profile.at(-1).x,profile.at(-1).y+.001),new THREE.Vector2(0,profile.at(-1).y+.001));
 const body=new THREE.LatheGeometry(profile,64);body.computeBoundingBox();mesh.geometry=body;original.dispose();
 const p=body.attributes.position,indices=body.index.array,edges=[],seen=new Set();
 for(let i=0;i<indices.length;i+=3)for(let j=0;j<3;j++){const a=indices[i+j],b=indices[i+(j+1)%3],key=Math.min(a,b)+':'+Math.max(a,b);if(!seen.has(key)){seen.add(key);edges.push([new THREE.Vector3().fromBufferAttribute(p,a),new THREE.Vector3().fromBufferAttribute(p,b)])}}
 const radiusAt=y=>{for(let i=1;i<profile.length;i++){const a=profile[i-1],b=profile[i];if(y<=b.y&&b.y>a.y)return THREE.MathUtils.lerp(a.x,b.x,(y-a.y)/(b.y-a.y))}return 0};
 const top=profile.at(-1).y,samples=[];let filled=0;
 // Equal-volume cells, not points spaced uniformly along the radius.
 for(let iy=0;iy<64;iy++){const y=minY+(iy+.5)/64*(top-minY),r=radiusAt(y);const radialCount=Math.max(1,Math.round(72*r*r/.267**2));for(let j=0;j<radialCount;j++){const rr=r*Math.sqrt((j+.5)/radialCount),a=j*2.399963+iy*.371;samples.push(new THREE.Vector3(Math.cos(a)*rr,y,Math.sin(a)*rr));if(y<maxY)filled++}}
 const dots=new Float32Array(samples.length),up=new THREE.Vector3(0,1,0),normal=new THREE.Vector3(0,1,0),surfaceState=new THREE.Vector3(0,1,0),velocity=new THREE.Vector3(),q=new THREE.Quaternion(),lastQ=new THREE.Quaternion(),position=new THREE.Vector3(),lastPosition=new THREE.Vector3(),lastVelocity=new THREE.Vector3();
 const uniforms={fluidNormal:{value:normal},fluidLevel:{value:maxY}};
 const compile=mesh.material.onBeforeCompile;
 mesh.material.onBeforeCompile=shader=>{compile(shader);Object.assign(shader.uniforms,uniforms);shader.vertexShader='varying vec3 fluidLocal;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfluidLocal=position;');shader.fragmentShader='varying vec3 fluidLocal;uniform vec3 fluidNormal;uniform float fluidLevel;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(dot(fluidLocal,fluidNormal)>fluidLevel+.00001)discard;')};
 mesh.material.customProgramCacheKey=()=> 'zavyla-liquid-free-surface-v1';mesh.material.needsUpdate=true;
 const capGeometry=new THREE.BufferGeometry(),capPositions=new Float32Array(180000),capNormals=new Float32Array(180000);
 capGeometry.setAttribute('position',new THREE.BufferAttribute(capPositions,3).setUsage(THREE.DynamicDrawUsage));capGeometry.setAttribute('normal',new THREE.BufferAttribute(capNormals,3).setUsage(THREE.DynamicDrawUsage));capGeometry.setDrawRange(0,0);
 const capMaterial=mesh.material.clone();capMaterial.roughness=.045;capMaterial.thickness=.012;capMaterial.envMapIntensity=.8;capMaterial.side=THREE.DoubleSide;const waveUniforms={surfaceTime:{value:0},surfaceAmplitude:{value:0},surfaceCenter:{value:new THREE.Vector3()},surfaceU:{value:new THREE.Vector3()},surfaceV:{value:new THREE.Vector3()},surfaceNormal:{value:normal},surfaceRadius:{value:.25}};
 capMaterial.onBeforeCompile=shader=>{compile(shader);Object.assign(shader.uniforms,waveUniforms);shader.vertexShader=`uniform float surfaceTime,surfaceAmplitude,surfaceRadius;uniform vec3 surfaceCenter,surfaceU,surfaceV,surfaceNormal;
 `+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
 vec3 relativeSurface=position-surfaceCenter;float sx=dot(relativeSurface,surfaceU),sy=dot(relativeSurface,surfaceV),rr=surfaceRadius*surfaceRadius;
 float envelope=max(0.,1.-(sx*sx+sy*sy)/rr);float wa=sx*34.+sy*19.-surfaceTime*2.4,wb=-sx*23.+sy*47.+surfaceTime*1.8;
 float wave=(sin(wa)+.55*sin(wb))/1.55;
 float dx=surfaceAmplitude*(-2.*sx/rr*wave+envelope*(34.*cos(wa)-.55*23.*cos(wb))/1.55);
 float dy=surfaceAmplitude*(-2.*sy/rr*wave+envelope*(19.*cos(wa)+.55*47.*cos(wb))/1.55);
 objectNormal=normalize(objectNormal-surfaceU*dx-surfaceV*dy);
 `);shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed+=surfaceNormal*surfaceAmplitude*envelope*wave;');};capMaterial.customProgramCacheKey=()=> 'zavyla-liquid-surface-gpu-v2';
 const cap=new THREE.Mesh(capGeometry,capMaterial);cap.name='Free liquid surface';cap.frustumCulled=false;mesh.add(cap);
 let first=true,energy=0,lastLevel=NaN,lastNormal=new THREE.Vector3(),surfaceReduced=false,lastSurfaceTime=-1;
 function rebuild(level,time){
  const points=[],keys=new Set();
  for(const [a,b] of edges){const da=a.dot(normal)-level,db=b.dot(normal)-level;if((da<0)===(db<0))continue;const v=a.clone().lerp(b,da/(da-db));const key=[v.x,v.y,v.z].map(v=>Math.round(v*100000)).join(',');if(!keys.has(key)){keys.add(key);points.push(v)}}
  if(points.length<3){capGeometry.setDrawRange(0,0);return}
  const center=points.reduce((a,b)=>a.add(b),new THREE.Vector3()).multiplyScalar(1/points.length),u=new THREE.Vector3().crossVectors(normal,Math.abs(normal.y)<.9?up:new THREE.Vector3(1,0,0)).normalize(),v=new THREE.Vector3().crossVectors(normal,u);
  points.sort((a,b)=>Math.atan2(a.clone().sub(center).dot(v),a.clone().sub(center).dot(u))-Math.atan2(b.clone().sub(center).dot(v),b.clone().sub(center).dot(u)));
  waveUniforms.surfaceCenter.value.copy(center);waveUniforms.surfaceU.value.copy(u);waveUniforms.surfaceV.value.copy(v);waveUniforms.surfaceRadius.value=points.reduce((sum,p)=>sum+p.distanceTo(center),0)/points.length;
  let cursor=0;const radialSteps=10,depth=.0032,width=.014,amplitude=0;
  // Radial tessellation makes a curved meniscus, rather than a flat triangle fan.
  // The rim remains on the body clipping plane, so glass and liquid have no gap.
  function vertex(edge,r){
   const delta=edge.clone().sub(center),radius=delta.length(),x=delta.dot(u)*r,y=delta.dot(v)*r;
   const ex=delta.dot(u)/radius,ey=delta.dot(v)/radius;
   const wet=Math.exp(-(1-r)*radius/width),a=x*34+y*19-time*2.4,b=x*-23+y*47+time*1.8;
   const wave=(Math.sin(a)+.55*Math.sin(b))/1.55,envelope=1-r*r;
   const height=-depth*(1-wet)+amplitude*envelope*wave;
   const dx=depth/width*wet*ex+amplitude*(-2*r/radius*ex*wave+envelope*(34*Math.cos(a)-.55*23*Math.cos(b))/1.55);
   const dy=depth/width*wet*ey+amplitude*(-2*r/radius*ey*wave+envelope*(19*Math.cos(a)+.55*47*Math.cos(b))/1.55);
   const pos=center.clone().addScaledVector(delta,r).addScaledVector(normal,height);
   const n=normal.clone().addScaledVector(u,-dx).addScaledVector(v,-dy).normalize();
   capPositions.set(pos.toArray(),cursor);capNormals.set(n.toArray(),cursor);cursor+=3;
  }
  for(let ring=0;ring<radialSteps;ring++)for(let i=0;i<points.length;i++){
   const a=points[i],b=points[(i+1)%points.length],r0=ring/radialSteps,r1=(ring+1)/radialSteps;
   if(ring>0){vertex(a,r0);vertex(a,r1);vertex(b,r0)}
   vertex(a,r1);vertex(b,r1);vertex(b,r0);
  }
  capGeometry.setDrawRange(0,cursor/3);capGeometry.attributes.position.needsUpdate=true;capGeometry.attributes.normal.needsUpdate=true;
 }
 return {mesh,update(dt,time,reduced=false){
  surfaceReduced=reduced;dt=THREE.MathUtils.clamp(dt,.001,.04);mesh.getWorldQuaternion(q);mesh.getWorldPosition(position);
  const linear=position.clone().sub(lastPosition).divideScalar(dt),acceleration=linear.clone().sub(lastVelocity).divideScalar(dt);
  if(first){lastQ.copy(q);acceleration.set(0,0,0);linear.set(0,0,0)}
  const target=up.clone().addScaledVector(acceleration.clampLength(0,5),reduced?0:.045).normalize().applyQuaternion(q.clone().invert());
  energy=reduced?0:Math.min(1.5,energy*Math.exp(-dt*2.5)+q.angleTo(lastQ)*2+acceleration.length()*dt*.06);
  if(first||reduced){normal.copy(target);surfaceState.copy(target);velocity.set(0,0,0)}else{velocity.addScaledVector(target.clone().sub(surfaceState),dt*65).multiplyScalar(Math.exp(-dt*8));surfaceState.addScaledVector(velocity,dt);if(surfaceState.lengthSq()>1e-8)normal.copy(surfaceState).normalize()}
  let level=lastLevel;
  if(first||normal.distanceToSquared(lastNormal)>1e-9||energy>.002){
   for(let i=0;i<samples.length;i++)dots[i]=samples[i].dot(normal);dots.sort();level=dots[Math.min(filled,dots.length-1)];uniforms.fluidLevel.value=level;lastNormal.copy(normal);lastLevel=level;rebuild(level,time);lastSurfaceTime=time;
  }
  waveUniforms.surfaceTime.value=time;waveUniforms.surfaceAmplitude.value=reduced?0:.00065+Math.min(1,energy)*.003;
  lastPosition.copy(position);lastVelocity.copy(linear);lastQ.copy(q);first=false;
  mesh.userData.fluid={normal:normal.toArray(),level,energy,fill:filled/samples.length,surface:'curved-meniscus-ripples',meniscusDepth:.0032,surfaceVertices:capGeometry.drawRange.count};
 }};
}
