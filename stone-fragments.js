import {fragrancePose,fragranceLayouts} from './fragrance-layout.js?v=R50';
import * as THREE from 'three';
import {random} from './hero-choreography.js?v=R35';

export function addStoneFragments(world,model){
 let cap;model.traverse(o=>{if(o.isMesh&&o.name.toLowerCase().includes('tappo'))cap=o});if(!cap)return;
 const slug=model.userData.fragranceSlug||'forgive',seedOffset=fragranceLayouts[slug][0];
 // Six fractured silhouettes, with chipped edges and mineral surface relief.
 const batches=[],dummy=new THREE.Object3D(),count=12;
 for(let variant=0;variant<6;variant++){
  const geometry=new THREE.IcosahedronGeometry(1,12),p=geometry.attributes.position,colors=[];
  const seed=seedOffset+variant*79,planes=[];
  for(let j=0;j<5;j++)planes.push({normal:new THREE.Vector3(random(seed+j*17)*2-1,random(seed+j*17+3)*2-1,random(seed+j*17+8)*2-1).normalize(),distance:.62+random(seed+j*31)*.27});
  const chips=Array.from({length:7},(_,j)=>({direction:new THREE.Vector3(random(seed+j*41+1)*2-1,random(seed+j*41+9)*2-1,random(seed+j*41+21)*2-1).normalize(),width:.018+random(seed+j*11)*.045,depth:.06+random(seed+j*13)*.13}));
  for(let i=0;i<p.count;i++){
   const d=new THREE.Vector3(p.getX(i),p.getY(i),p.getZ(i)).normalize();
   let radius=1+.07*Math.sin(d.x*7+seed)*Math.cos(d.y*9+d.z*5),broken=false;
   for(const plane of planes){const dot=d.dot(plane.normal);if(dot>0&&plane.distance/dot<radius){radius=plane.distance/dot;broken=true}}
   let chipDepth=0;for(const chip of chips)chipDepth+=chip.depth*Math.max(0,1-(1-d.dot(chip.direction))/(chip.width*2))**1.35;
   const grain=.007*Math.sin(d.x*119+d.y*73+seed)*Math.sin(d.z*97-d.x*43);
   radius=Math.max(.38,radius-chipDepth+grain);
   p.setXYZ(i,d.x*radius*.042,d.y*radius*(.030+variant*.002),d.z*radius*(.023+variant*.001));
   const shade=(broken?1.08:.90)-chipDepth*.7+grain*4;colors.push(shade,shade,shade);
  }geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();
  const material=cap.material.clone();material.vertexColors=true;material.flatShading=false;material.roughness=Math.max(.53,material.roughness);material.normalScale?.set(.55,.55);
  material.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 stonePoint;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nstonePoint=position;');
   shader.fragmentShader=`varying vec3 stonePoint;
   vec2 mineralHash(vec2 p){return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);}
   float mineralCrack(vec2 p){vec2 cell=floor(p),f=fract(p);float a=9.,b=9.;for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 q=vec2(float(x),float(y)),v=q+mineralHash(cell+q)-f;float d=dot(v,v);if(d<a){b=a;a=d;}else if(d<b)b=d;}return 1.-smoothstep(.008,.055,sqrt(b)-sqrt(a));}
   `+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
    float mineralGrain=sin(stonePoint.x*3100.+sin(stonePoint.z*470.))*sin(stonePoint.y*2600.+stonePoint.z*1800.);
    float crack=mineralCrack(stonePoint.xy*155.+stonePoint.z*31.);
    roughnessFactor=clamp(roughnessFactor+mineralGrain*.10+crack*.18,.40,.94);
    diffuseColor.rgb*=1.-crack*.24;`);
   shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
    float relief=-mineralCrack(stonePoint.xy*155.+stonePoint.z*31.)*.00009+sin(stonePoint.x*1700.+sin(stonePoint.y*630.))*sin(stonePoint.z*2100.+stonePoint.y*1900.)*.000055;
    vec3 sx=dFdx(vViewPosition),sy=dFdy(vViewPosition);
    vec3 rx=cross(sy,normal),ry=cross(normal,sx);
    float det=dot(sx,rx);
    normal=normalize(abs(det)*normal-sign(det)*(dFdx(relief)*rx+dFdy(relief)*ry));`);
  };
  material.customProgramCacheKey=()=> 'fractured-stone-r42';
  const fragments=new THREE.InstancedMesh(geometry,material,2);
  fragments.name='Fragments of the cap '+variant;fragments.frustumCulled=false;world.group.add(fragments);batches.push(fragments);
 }
 const update=world.update.bind(world);
 world.update=(time,reduced,chapter)=>{
  update(time,reduced,chapter);
  const t=reduced?0:chapter*2.5;
  for(let i=0;i<count;i++){
   const seed=i+71+seedOffset,phase=i*2.399+seedOffset,pose=fragrancePose(slug,chapter,90000+i*139);
   dummy.position.set(pose.x,pose.y,pose.z-.12);
   dummy.rotation.set(phase+t*.3,phase*.7-t*.24,phase*.4+t*.19);
   const size=.85+random(seed+17)*.8;dummy.scale.set(size,size*(.8+random(seed+31)*.6),size);dummy.updateMatrix();batches[i%6].setMatrixAt(Math.floor(i/6),dummy.matrix);
  }
  batches.forEach(mesh=>mesh.instanceMatrix.needsUpdate=true);world.group.userData.motion.stoneFragments=count;
 };
}
