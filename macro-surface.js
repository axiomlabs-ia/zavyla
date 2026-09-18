// Object-space mineral detail remains sharp as the camera approaches the cap.
// Applied only to the opening macro; catalog materials retain their approved finish.
export function finishMacroSurface(material,name,renderer){
 const anisotropy=Math.min(16,renderer.capabilities.getMaxAnisotropy());
 for(const key of ['map','normalMap','roughnessMap','metalnessMap','bumpMap'])if(material[key])material[key].anisotropy=anisotropy;
 if(!name.includes('tappo'))return;
 material.roughness=.48;material.normalScale?.set(.095,.095);
 material.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 mineralPosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nmineralPosition=position;');
  shader.fragmentShader=`varying vec3 mineralPosition;
 float mineralHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float mineralNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(mineralHash(i),mineralHash(i+vec3(1,0,0)),f.x),mix(mineralHash(i+vec3(0,1,0)),mineralHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(mineralHash(i+vec3(0,0,1)),mineralHash(i+vec3(1,0,1)),f.x),mix(mineralHash(i+vec3(0,1,1)),mineralHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
 vec3 mp=mineralPosition;float large=mineralNoise(mp*9.);float small=mineralNoise(mp*38.);
 float stratum=sin(mp.x*165.+mp.y*92.+mp.z*79.+large*27.+small*5.3);
 float vein=smoothstep(.72,.98,stratum);float mineralGrain=mineralNoise(mp*420.);
 vec3 mineralTint=mix(vec3(.085,.034,.093),vec3(.24,.15,.25),large);
 mineralTint=mix(mineralTint,vec3(.39,.32,.41),vein*.16);
 diffuseColor.rgb=mix(diffuseColor.rgb,mineralTint,.20);
 `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 roughnessFactor=clamp(roughnessFactor+.035*(mineralGrain-.5)+vein*.018,.24,.56);
 `);
 };
 material.customProgramCacheKey=()=> 'zavyla-macro-mineral-1';material.needsUpdate=true;
}
