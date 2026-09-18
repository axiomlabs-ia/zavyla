import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {ingredientPose,random} from './hero-choreography.js?v=R20';

const reliefPixels=new Map();
// Sculpted spice studies. The existing licensed cardamom photograph supplies
// colour; relief, silhouettes and the other surfaces are procedural geometry.
export function createForgiveIngredients(poseAt=ingredientPose){
 const group=new THREE.Group(),batches=[],dummy=new THREE.Object3D();let lastChapter=-1;
 group.name='Forgive detailed spices';
 function relief(kind){
  const n=1024,data=reliefPixels.get(kind)||new Uint8Array(n*n*4);
  if(!reliefPixels.has(kind)){
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){
   const u=x/n,v=y/n;
   const warp=u+.009*Math.sin(v*35)+.003*Math.sin(v*103+u*12);
   let value;
   if(kind==='pepper'){
    // Unequal sun-dried cells, with creases between them and fine skin pores.
    const px=u*28,py=v*28,ix=Math.floor(px),iy=Math.floor(py);let a=10,b=10;
    for(let j=-1;j<=1;j++)for(let i=-1;i<=1;i++){
     const id=((ix+i+28)%28)+28*((iy+j+28)%28);
     const dx=ix+i+.18+.64*random(id+83)-px,dy=iy+j+.18+.64*random(id+913)-py,d=dx*dx+dy*dy;
     if(d<a){b=a;a=d}else if(d<b)b=d;
    }
    value=.23+.5*Math.min(1,(Math.sqrt(b)-Math.sqrt(a))*4)+random(x+y*n)*.08;
   }else{
    const wrinkles=Math.pow(.5+.5*Math.cos(warp*Math.PI*(kind==='vanilla'?94:70)),5);
    value=.4+.28*wrinkles+.08*Math.sin(warp*600+v*17)+random(x+y*n)*.09;
   }
   const shade=Math.round(255*value);data.set([shade,shade,shade,255],(y*n+x)*4);
  }
  reliefPixels.set(kind,data);}
  const map=new THREE.DataTexture(data,n,n);map.wrapS=map.wrapT=THREE.RepeatWrapping;
  map.generateMipmaps=true;map.minFilter=THREE.LinearMipmapLinearFilter;map.magFilter=THREE.LinearFilter;map.needsUpdate=true;return map;
 }
 function skinGeometry(kind,variant){
  const rings=kind==='vanilla'?72:36,sides=kind==='vanilla'?24:64;
  const positions=[],uv=[],colors=[],indices=[];
  for(let j=0;j<=rings;j++)for(let i=0;i<=sides;i++){
   const t=j/rings,a=i/sides*Math.PI*2,phase=variant*1.73;
   let x,y,z,shade;
   if(kind==='cardamom'){
    const profile=Math.pow(Math.sin(Math.PI*t),.68)*(.89+.18*t);
    const lobe=1+.12*Math.cos(a*3+phase);
    const seam=1-.13*Math.pow(.5+.5*Math.cos(a*3+phase+Math.PI),22);
    const ridge=1+.045*Math.sin(a*24+.28*Math.sin(t*14+phase))+.012*Math.sin(t*93+a*39);
    const radius=.0145*profile*lobe*seam*ridge;
    x=Math.cos(a)*radius+.0025*Math.sin(t*Math.PI)*Math.sin(phase+t*3);
    y=(t-.5)*(.057+variant*.003);z=Math.sin(a)*radius;
    shade=.79+.16*seam+.06*Math.sin(t*19+a*9+phase);
   }else{
    const profile=.12+.88*Math.pow(Math.sin(Math.PI*t),.3),hook=Math.pow(t,9)*.017;
    const groove=1-.27*Math.pow(.5+.5*Math.cos(a*2+.2*Math.sin(t*9)),20);
    const ridge=1+.035*Math.sin(a*17+t*13)+.025*Math.sin(a*29-t*8);
    const radius=.0042*profile*groove*ridge*(1+.035*Math.sin(t*137+a*17));
    x=Math.cos(a)*radius+.013*Math.sin(t*3.5+phase)*Math.sin(t*Math.PI)+hook;
    y=(t-.5)*(.20+variant*.023);z=Math.sin(a)*radius*.67+.008*Math.sin(t*4+phase);
    shade=.65+.25*groove+.09*Math.sin(t*41+a*4);
   }
   positions.push(x,y,z);uv.push(i/sides,t);colors.push(shade,shade,shade);
   if(j<rings&&i<sides){const k=j*(sides+1)+i;indices.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2)}
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();return g;
 }
 function pepperGeometry(variant){
  const g=new THREE.SphereGeometry(.011,64,48),p=g.attributes.position,colors=[];
  for(let i=0;i<p.count;i++){
   const x=p.getX(i)/.011,y=p.getY(i)/.011,z=p.getZ(i)/.011;
   const folds=Math.sin(x*17+Math.sin(z*11)+variant)*Math.sin(y*19+z*3);
   const creases=Math.pow(Math.abs(folds),.35);
   const r=.90+.065*creases+.045*Math.sin(x*7+y*5+variant)*Math.cos(z*8)+.015*Math.sin(x*61+z*31)*Math.cos(y*57);
   p.setXYZ(i,x*.011*r,y*.011*r*(.94+variant*.045),z*.011*r);
   const c=new THREE.Color('#6b5847').lerp(new THREE.Color('#29211a'),.30+.5*(1-creases));colors.push(c.r,c.g,c.b);
  }
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();return g;
 }
 const cardamom=new THREE.MeshPhysicalMaterial({color:'#d7d6b4',vertexColors:true,roughness:.82,bumpMap:relief('cardamom'),bumpScale:.00032,sheen:.12,sheenColor:new THREE.Color('#b6ad87')});
 const pepperRelief=relief('pepper');
 const pepper=new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.90,bumpMap:pepperRelief,bumpScale:.00030,clearcoat:.035,clearcoatRoughness:.7});
 const vanilla=new THREE.MeshPhysicalMaterial({color:'#352219',vertexColors:true,roughness:.52,bumpMap:relief('vanilla'),bumpScale:.00028,clearcoat:.10,clearcoatRoughness:.48});
 const ready=new THREE.TextureLoader().loadAsync('assets/forgive-study/cardamom-surface.jpg').then(map=>{
  map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.MirroredRepeatWrapping;
  // Keep the photographic black background outside the sampled crop.
  map.center.set(.5,.5);map.repeat.set(.55,.55);map.rotation=Math.PI/2;
  cardamom.map=map;cardamom.needsUpdate=true;
 });
 function add(name,geometry,material,count,offset){
  const mesh=new THREE.InstancedMesh(geometry,material,count);mesh.name=name;mesh.frustumCulled=false;
  for(let i=0;i<count;i++){const warm=.85+random(i+offset)*.15;mesh.setColorAt(i,new THREE.Color(warm,warm*.98,warm*.92))}
  group.add(mesh);batches.push({mesh,name,count,offset});
 }
 for(let v=0;v<3;v++){
  const body=skinGeometry('cardamom',v);
  // The dry calyx has a pinched base, a short stalk and a darker cut end.
  const stem=new THREE.CylinderGeometry(.0012,.0023,.006,9,3);stem.translate(0,-(.057+v*.003)/2-.0015,0);
  stem.setAttribute('color',new THREE.Float32BufferAttribute(Array.from({length:stem.attributes.position.count*3},()=>.55),3));
  const joined=mergeGeometries([body,stem]);body.dispose();stem.dispose();
  add('Cardamomo',joined,cardamom,17,4000+v*137);
  add('Pepe nero',pepperGeometry(v),pepper,37,6000+v*137);
  add('Vaniglia',skinGeometry('vanilla',v),vanilla,6,8000+v*137);
 }
 return {group,ready,names:['Cardamomo','Pepe nero','Vaniglia'],counts:{Cardamomo:51,'Pepe nero':111,Vaniglia:18},update(q){
  if(q===lastChapter)return;lastChapter=q;
  for(const batch of batches){for(let i=0;i<batch.count;i++){
   const pose=poseAt(q,i+batch.offset),size=1.0+random(i+batch.offset+9)*.65;
   dummy.position.set(pose.x,pose.y,pose.z);
   dummy.rotation.set(.35*Math.sin(i*3+q),pose.angle*.55,i*2.399+q*(batch.name==='Vaniglia'?-.5:.65));
   dummy.scale.setScalar(size);dummy.updateMatrix();batch.mesh.setMatrixAt(i,dummy.matrix);
  }batch.mesh.instanceMatrix.needsUpdate=true;}
 }};
}
