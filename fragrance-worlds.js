import {fragrancePose} from './fragrance-layout.js?v=R47';
import * as THREE from 'three';
import {createForgiveIngredients} from './forgive-ingredients.js?v=R47';
import {createFragranceIngredients} from './fragrance-ingredients.js?v=R47';
import {createForgiveVolume} from './forgive-volume.js?v=R20';
import {ingredientPose,random} from './hero-choreography.js?v=R20';
// Motifs follow the published note pyramids in data.js; not the names of the perfumes.
export const worlds={
 'forgive':{petals:'#f1e5da',leaf:'#7b8160',dust:'#a58a58',label:'Cardamomo · Pepe nero · Vaniglia',types:['petal','pod','pepper']},
 'promise':{petals:'#aaa0bf',leaf:'#897448',dust:'#c9a567',label:'Lavanda · Cannella · Tabacco',types:['lavender','bark','leaf']},
 'listen':{petals:'#e4b8b5',leaf:'#7a8462',dust:'#d9b999',label:'Rosa · Fiori d’arancio · Praliné',types:['petal','flower','petal']},
 'enjoy':{petals:'#ad9bb5',leaf:'#77734d',dust:'#bba079',label:'Lavanda · Rosa · Cedro',types:['lavender','petal','bark']},
 'give':{petals:'#edc181',leaf:'#76834e',dust:'#ca9b53',label:'Mandarino · Zafferano · Rosa',types:['peel','saffron','petal']},
 'trust':{petals:'#a75e65',leaf:'#7c6951',dust:'#aa8763',label:'Rosa · Zafferano · Incenso',types:['petal','saffron','resin']},
 'speak':{petals:'#afa0c6',leaf:'#706e50',dust:'#bc9e6d',label:'Iris · Rosa · Zafferano',types:['petal','petal','saffron']},
 'share':{petals:'#b7a5c9',leaf:'#7d8962',dust:'#cec0ab',label:'Violetta · Tuberosa · Geranio',types:['petal','flower','leaf']},
 'irish-whiskey':{petals:'#eee7cf',leaf:'#79784e',dust:'#b29b70',label:'Limone · Fiori bianchi · Vetiver',types:['peel','flower','leaf']},
 'silky':{petals:'#eee9de',leaf:'#998e78',dust:'#c9c4b6',label:'Cocco · Accordo limonata · Incenso',types:['coconut','peel','resin']},
 'occhio-di-tigre':{petals:'#d9c377',leaf:'#817b4f',dust:'#b59160',label:'Ylang ylang · Lampone · Sandalo',types:['petal','berry','bark']},
 'amund':{petals:'#b1926d',leaf:'#82644b',dust:'#a78962',label:'Mandorla · Tabacco · Cioccolato',types:['almond','leaf','resin']},
 'sylind':{petals:'#f0ead9',leaf:'#82935c',dust:'#c7bf8d',label:'Fiori di tiglio · Gelsomino · Foglie verdi',types:['leaf','flower','petal']}
};
export function createFragranceWorld(slug,options={}){
 const prototype=slug==='forgive',heroVolume=!options.lightSmoke&&['forgive','give','sylind'].includes(slug);
 const config=worlds[slug]||worlds.forgive,group=new THREE.Group();group.name='Directed smoke and earth '+slug;
 const tint=new THREE.Color(config.dust).lerp(new THREE.Color('#847c70'),.5),fades=[];
 const smokeGeometry=new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(1,1));
 const smokeCount=72,centers=new Float32Array(smokeCount*3),ages=new Float32Array(smokeCount),opacity=new Float32Array(smokeCount),seeds=new Float32Array(smokeCount);
 smokeGeometry.instanceCount=smokeCount;smokeGeometry.setAttribute('center',new THREE.InstancedBufferAttribute(centers,3));smokeGeometry.setAttribute('age',new THREE.InstancedBufferAttribute(ages,1));smokeGeometry.setAttribute('density',new THREE.InstancedBufferAttribute(opacity,1));for(let i=0;i<smokeCount;i++)seeds[i]=random(i+300);smokeGeometry.setAttribute('seed',new THREE.InstancedBufferAttribute(seeds,1));
 const smokeMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{tint:{value:tint},visibility:{value:1},densityBoost:{value:options.lightSmoke?3:1}},vertexShader:`attribute vec3 center;attribute float age,density,seed;varying vec2 v;varying float a,s,t;void main(){v=uv;a=density;s=seed;t=age;vec4 p=modelViewMatrix*vec4(center,1.);float size=.13+age*.105;p.xy+=position.xy*size*vec2(1.,1.25);gl_Position=projectionMatrix*p;}`,fragmentShader:`varying vec2 v;varying float a,s,t;uniform vec3 tint;uniform float visibility,densityBoost;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
 float fbm(vec2 p){float f=0.,w=.5;for(int i=0;i<4;i++){f+=w*noise(p);p=p*2.03+13.;w*=.5;}return f;}
 void main(){vec2 p=v-.5;float falloff=exp(-dot(p,p)*12.)*(1.-smoothstep(.32,.5,length(p)));vec2 q=v*3.+s*19.;q+=vec2(fbm(q+t*.16),fbm(q+9.-t*.12));float cloud=smoothstep(.28,.75,fbm(q*2.));float alpha=falloff*cloud*a*.095*visibility*densityBoost;if(alpha<.001)discard;gl_FragColor=vec4(tint,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});
 const smoke=new THREE.Mesh(smokeGeometry,smokeMaterial);smoke.frustumCulled=false;group.add(smoke);smoke.visible=!heroVolume;fades.push(smokeMaterial);const volume=heroVolume?createForgiveVolume(slug):null;if(volume)group.add(volume.mesh);
 const count=prototype?5400:heroVolume?1400:1100,positions=new Float32Array(count*3),alphas=new Float32Array(count),sizes=new Float32Array(count),dustGeometry=new THREE.BufferGeometry();
 dustGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));dustGeometry.setAttribute('alpha',new THREE.BufferAttribute(alphas,1));for(let i=0;i<count;i++)sizes[i]=.8+random(i+99)*2;dustGeometry.setAttribute('size',new THREE.BufferAttribute(sizes,1));
 const dustMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{tint:{value:tint},visibility:{value:1}},vertexShader:'attribute float alpha,size;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*3./-p.z,1.,5.);}',fragmentShader:`varying float a;uniform vec3 tint;uniform float visibility;void main(){float d=length(gl_PointCoord-.5);float alpha=(1.-smoothstep(.12,.5,d))*a*.24*visibility;if(alpha<.001)discard;gl_FragColor=vec4(tint,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});
 const dust=new THREE.Points(dustGeometry,dustMaterial);dust.frustumCulled=false;group.add(dust);fades.push(dustMaterial);
 const grainMat=new THREE.MeshStandardMaterial({color:config.dust,roughness:.95,transparent:true}),grains=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(prototype?.0038:.008,2),grainMat,prototype?240:85),dummy=new THREE.Object3D();grains.frustumCulled=false;group.add(grains);
 const pods=new THREE.InstancedMesh(new THREE.SphereGeometry(.015,32,24),new THREE.MeshStandardMaterial({color:slug==='forgive'?config.leaf:config.dust,roughness:.83,transparent:true}),prototype?32:9);pods.frustumCulled=false;group.add(pods);
 const extra=[],pending=[];
 const named=prototype?createForgiveIngredients((q,i)=>fragrancePose(slug,q,i)):createFragranceIngredients(slug);
 if(named){group.add(named.group);grains.visible=false;pods.visible=false;if(named.ready)pending.push(named.ready)}
 let visibility=1,lastChapter=null;
 // Empty setting maintains the scene API; no landscape models or textures are loaded.
 const setting={group:new THREE.Group(),ready:Promise.all(pending),title:'Fumo e materia',color:new THREE.Color('#f0eee7'),kind:'directed-particles',setPresentation(){},update(){}};
 return {group,setting,label:config.label,setVisibility(value){visibility=value;fades.forEach(m=>m.uniforms.visibility.value=value);grainMat.opacity=value;pods.material.opacity=value},update(time,reduced,chapter=.2){const q=chapter,t=q*5;if(q===lastChapter){if(group.userData.motion)group.userData.motion.visibility=visibility;return}lastChapter=q;const pose=i=>fragrancePose(slug,q,i);volume?.update(t,visibility);named?.update(q);
  for(let i=0;i<smokeCount;i++){const f=pose(i);centers.set([f.x,f.y,f.z],i*3);ages[i]=.6+q*1.2;opacity[i]=f.fade}for(const n of ['center','age','density'])smokeGeometry.attributes[n].needsUpdate=true;
  for(let i=0;i<count;i++){const f=pose(i+90),spread=(prototype?.14:.025)+f.age*(prototype?.065:.024);positions.set([f.x+(random(i+500)-.5)*spread,f.y+(random(i+800)-.5)*spread,f.z+(random(i+1300)-.5)*spread],i*3);alphas[i]=f.fade}dustGeometry.attributes.position.needsUpdate=true;dustGeometry.attributes.alpha.needsUpdate=true;
  for(const [objects,offset,isPod] of [[grains,2000,false],[pods,4000,true],...extra]){if(!objects.visible)continue;for(let i=0;i<objects.count;i++){const f=pose(i+offset);dummy.position.set(f.x,f.y,f.z);dummy.rotation.set(q*.5+i*.3,f.angle,i+q*(isPod?.8:-.5));const size=f.fade*(.5+random(i+4)*.8);dummy.scale.set(size*(isPod?.65:1),size*(isPod?1.7:.7),size*(isPod?.65:.9));dummy.updateMatrix();objects.setMatrixAt(i,dummy.matrix)}objects.instanceMatrix.needsUpdate=true}
  group.userData.motion={type:'scroll-choreography',veil:volume?'volumetric':'particles',veilProfile:volume?.profile,veilColor:slug==='give'?'gold':slug==='sylind'?'sage':'warm',time:t,chapter:q,visibility,sample:pose(2000),ingredients:prototype?['Cardamomo','Pepe nero','Vaniglia']:named?named.names:config.label.split(' · '),ingredientCounts:named?.counts||{},genericSeeds:grains.visible||pods.visible};
 }};
}
