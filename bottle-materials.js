import * as THREE from 'three';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';

// Shared by the catalog and Forgive study; no progressive rendering here.
// R47: l'HDRI pesa quanto un'intera pagina. Sui telefoni basta 1k, sul desktop 2k.
export const studioEnvironmentUrl=()=>{const small=typeof innerWidth==='number'&&(innerWidth<900||matchMedia('(pointer:coarse)').matches);return `assets/forgive-study/studio-glass-${small?'1k':'2k'}.hdr?v=R47`};
export function loadStudioEnvironment(){return new HDRLoader().loadAsync(studioEnvironmentUrl()).then(texture=>{texture.mapping=THREE.EquirectangularReflectionMapping;return texture})}

export function bottleGlass(interior,size){
 const mat=new THREE.MeshPhysicalMaterial({color:0xffffff,roughness:.022,metalness:0,transmission:1,thickness:.018,ior:1.47,attenuationColor:new THREE.Color('#eff5ef'),attenuationDistance:3,envMapIntensity:.48,side:THREE.FrontSide});
 mat.onBeforeCompile=shader=>{
  shader.uniforms.interiorMap={value:interior.texture};shader.uniforms.interiorSize={value:size};
  shader.vertexShader='varying float bottleHeight;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nbottleHeight=position.y;');
  shader.fragmentShader='varying float bottleHeight;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_pars_fragment>',THREE.ShaderChunk.transmission_pars_fragment.replaceAll('transmissionSamplerMap','interiorMap').replaceAll('transmissionSamplerSize','interiorSize'));
  shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_fragment>',THREE.ShaderChunk.transmission_fragment.replace('material.thickness = thickness;','material.thickness=mix(.09,thickness,smoothstep(.045,.105,bottleHeight));'));
 };
 const compile=mat.onBeforeCompile;mat.onBeforeCompile=shader=>{compile(shader);shader.fragmentShader=shader.fragmentShader.replace('vec3 attenuatedColor = transmittance * transmittedLight.rgb;',`
#ifdef ENVMAP_TYPE_CUBE_UV
 vec3 direction = refract(-v,n,1.0/ior);
 // Una direzione degenere (riflessione totale, normale nulla) campiona fuori
 // dall'atlante dell'ambiente: da lì i quadrati neri. Si ripiega sulla vista.
 direction = dot(direction,direction) > 1e-6 ? normalize(direction) : -v;
 vec3 studioTransmission = textureCubeUV(envMap,envMapRotation*direction,max(roughness,.06)).rgb;
 float baseWeight=1.0-smoothstep(.04,.13,bottleHeight);
 transmittedLight.rgb=mix(transmittedLight.rgb,studioTransmission, .28*baseWeight);
#endif
vec3 attenuatedColor = transmittance * transmittedLight.rgb;`)};
 mat.customProgramCacheKey=()=> 'zavyla-studio-refraction-v5';return mat;
}

export function perfumeLiquid(slug,background=null,size=null){
 const warm=['promise','trust','irish-whiskey','amund','occhio-di-tigre'].includes(slug);
 const material=new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.012,transmission:1,thickness:.45,ior:1.36,attenuationColor:new THREE.Color(warm?'#c49443':'#dfbc70'),attenuationDistance:warm?.85:1.05,envMapIntensity:.4,side:THREE.FrontSide});
 material.onBeforeCompile=shader=>{
  if(background){
   shader.uniforms.surroundingsMap={value:background.texture};shader.uniforms.surroundingsSize={value:size};
   shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_pars_fragment>',THREE.ShaderChunk.transmission_pars_fragment.replaceAll('transmissionSamplerMap','surroundingsMap').replaceAll('transmissionSamplerSize','surroundingsSize'));
  }
  shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_fragment>',THREE.ShaderChunk.transmission_fragment.replace('vec3 n = inverseTransformDirection( normal, viewMatrix );','vec3 n = inverseTransformDirection( normal, viewMatrix ); material.thickness *= mix(.65,1.0,abs(dot(n,v)));'))};
 material.customProgramCacheKey=()=> 'zavyla-liquid-optical-depth-v3-'+Boolean(background);return material;
}
export function finishSurface(material,name,slug,renderer){
 if(name.includes('tappo')&&!['sylind','amund'].includes(slug)){material.metalness=0;material.roughness=.62;material.normalScale?.set(.23,.23)}
 if(name.includes('etichetta')){
  const loader=new THREE.TextureLoader(),foil=loader.load(`assets/materials/labels/${slug}-foil.png`),rough=loader.load(`assets/materials/labels/${slug}-roughness.png`);
  foil.flipY=rough.flipY=false;
  material.roughness=1;material.roughnessMap=rough;material.metalness=.92;material.metalnessMap=foil;material.side=THREE.FrontSide;
  const grain=loader.load('assets/materials/paper-grain.jpg');grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(6,6);material.bumpMap=grain;material.bumpScale=.0005;
  material.userData.finish='matte-paper-polished-foil';
 }

 if(material.map)material.map.anisotropy=Math.min(16,renderer.capabilities.getMaxAnisotropy());
}

export function addPaperEdge(mesh){
 if(mesh.children.some(o=>o.name==='Paper cut edge'))return;
 const geometry=mesh.geometry,p=geometry.attributes.position,n=geometry.attributes.normal,index=geometry.index?.array;
 if(!index)return;
 const positionKeys=Array.from({length:p.count},(_,i)=>[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v*1000000)).join(','));
 const edges=new Map();for(let i=0;i<index.length;i+=3)for(let j=0;j<3;j++){const a=index[i+j],b=index[i+(j+1)%3],key=[positionKeys[a],positionKeys[b]].sort().join(':');const e=edges.get(key);if(e)e.count++;else edges.set(key,{a,b,count:1})}
 const vertices=[];for(const {a,b,count} of edges.values()){if(count!==1)continue;const pa=new THREE.Vector3().fromBufferAttribute(p,a),pb=new THREE.Vector3().fromBufferAttribute(p,b),qa=pa.clone().addScaledVector(new THREE.Vector3().fromBufferAttribute(n,a),-.0014),qb=pb.clone().addScaledVector(new THREE.Vector3().fromBufferAttribute(n,b),-.0014);for(const v of [pa,pb,qa,pb,qb,qa])vertices.push(v.x,v.y,v.z)}
 const edgeGeometry=new THREE.BufferGeometry();edgeGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));edgeGeometry.computeVertexNormals();const edge=new THREE.Mesh(edgeGeometry,new THREE.MeshStandardMaterial({color:'#d8d1bf',roughness:.95,side:THREE.DoubleSide}));edge.name='Paper cut edge';mesh.add(edge);
}
