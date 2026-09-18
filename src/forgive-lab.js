import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {loadStudioEnvironment,bottleGlass,perfumeLiquid,finishSurface,addPaperEdge} from '../bottle-materials.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { WebGLPathTracer, DenoiseMaterial } from 'three-gpu-pathtracer';
const host=document.querySelector('#stage'), status=document.querySelector('#status');
const params=new URLSearchParams(location.search), test=params.has('test');
let setMode=()=>{},interior;
let renderer,tracer,controls,scene,camera,raf,denoise,disposed=false,quality=false,dirty=true;
const initial=new THREE.Vector3(.95,.88,2.8),target=new THREE.Vector3(0,.59,0);
function fit(){dirty=true;renderer.setSize(host.clientWidth,host.clientHeight);camera.aspect=host.clientWidth/host.clientHeight;camera.fov=innerWidth>700?32:43;camera.setViewOffset(host.clientWidth,host.clientHeight,host.clientWidth*(innerWidth>700?-.14:0),innerWidth>700?0:-host.clientHeight*.12,host.clientWidth,host.clientHeight);camera.updateProjectionMatrix();if(quality)setMode(false);interior?.setSize(Math.round(host.clientWidth*renderer.getPixelRatio()),Math.round(host.clientHeight*renderer.getPixelRatio()))}
function podGeometry(){
 const g=new THREE.SphereGeometry(1,96,64),p=g.attributes.position,uv=g.attributes.uv;
 for(let i=0;i<p.count;i++){
  const v=uv.getY(i),u=uv.getX(i),a=u*Math.PI*2;
  const taper=.9+.1*Math.cos(v*Math.PI),r=1+.045*Math.cos(a*9+v*.8)+.018*Math.sin(v*75+a*4);
  p.setXYZ(i,p.getX(i)*.023*r*taper,p.getY(i)*.065,p.getZ(i)*.018*r*taper);
  uv.setXY(i,v,.08+.84*(.5+.5*Math.sin(a)));
 }g.computeVertexNormals();return g;
}
async function start(){
 renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(test?1:Math.min(devicePixelRatio,1.5));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
 host.append(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Ruota il profumo con il trascinamento o i tasti freccia');
 scene=new THREE.Scene();scene.background=new THREE.Color('#efede7');
 camera=new THREE.PerspectiveCamera(32,1,.01,30);camera.position.copy(initial);
 controls=new OrbitControls(camera,renderer.domElement);controls.target.copy(target);controls.enableDamping=false;controls.enablePan=false;controls.minDistance=1.5;controls.maxDistance=4.4;controls.maxPolarAngle=Math.PI*.49;controls.listenToKeyEvents(renderer.domElement);controls.update();fit();
 const [gltf,env,texture]=await Promise.all([new GLTFLoader().loadAsync('assets/models/forgive.glb'),loadStudioEnvironment(),new THREE.TextureLoader().loadAsync('assets/forgive-study/cardamom-surface.jpg')]);
 env.mapping=THREE.EquirectangularReflectionMapping;scene.environment=env;scene.environmentIntensity=.85;scene.environmentRotation.y=.65;
 const glass=[],liquid=[],labels=[];
 gltf.scene.traverse(o=>{if(!o.isMesh)return;const n=o.name.toLowerCase();let m=o.material;
 if(n.includes('flacone'))o.material=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,roughness:.018,ior:1.47,thickness:.02,attenuationColor:new THREE.Color('#eff5ed'),attenuationDistance:2});
 else if(n.includes('essenza'))o.material=perfumeLiquid('forgive');
 finishSurface(o.material,n,'forgive',renderer);
 if(n.includes('flacone'))glass.push(o);if(n.includes('essenza'))liquid.push(o);if(n.includes('etichetta')){labels.push(o);addPaperEdge(o)}
 });scene.add(gltf.scene);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:'#e4dfd4',roughness:.7}));floor.rotation.x=-Math.PI/2;floor.position.y=.006;scene.add(floor);
 const profile=[];for(let i=0;i<=32;i++){const a=i/32*Math.PI/2;profile.push(new THREE.Vector2(-1.5-1.5*Math.sin(a),.006+1.5*(1-Math.cos(a))))}profile.push(new THREE.Vector2(-3,10));const pts=[],idx=[];profile.forEach(p=>{pts.push(-100,p.y,p.x,100,p.y,p.x)});for(let i=0;i<profile.length-1;i++){const j=i*2;idx.push(j,j+1,j+2,j+1,j+3,j+2)}const bgGeo=new THREE.BufferGeometry();bgGeo.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));bgGeo.setIndex(idx);bgGeo.computeVertexNormals();const backdrop=new THREE.Mesh(bgGeo,floor.material);scene.add(backdrop);

 texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=8;
 const podMat=new THREE.MeshStandardMaterial({map:texture,roughness:.76,bumpMap:texture,bumpScale:.0012});const podGeo=podGeometry();
 [[-.38,.03,.18,1.1,.6],[.39,.027,-.06,.9,-.4],[.47,.028,.07,1.3,1.4],[-.44,.029,.29,1,-.7]].forEach(([x,y,z,s,a])=>{const p=new THREE.Mesh(podGeo,podMat);p.position.set(x,y,z);p.scale.setScalar(s);p.rotation.set(Math.PI/2,a,.3);scene.add(p)});
 const size=renderer.getDrawingBufferSize(new THREE.Vector2());
 interior=new THREE.WebGLRenderTarget(size.x,size.y,{type:THREE.HalfFloatType});
 const physicalGlass=glass.map(o=>o.material),interactiveGlass=glass.map(()=>bottleGlass(interior,size));
 function renderInteractive(){
  renderer.getDrawingBufferSize(size);
  glass.forEach(o=>o.visible=false);labels.forEach(o=>o.visible=false);liquid.forEach(o=>o.visible=true);
  renderer.setRenderTarget(interior);renderer.render(scene,camera);renderer.setRenderTarget(null);
  glass.forEach((o,i)=>{o.visible=true;o.material=interactiveGlass[i]});labels.forEach(o=>o.visible=true);liquid.forEach(o=>o.visible=false);
  renderer.render(scene,camera);
  glass.forEach((o,i)=>o.material=physicalGlass[i]);liquid.forEach(o=>o.visible=true);
 }
 function prepareTracer(){
  if(tracer){tracer.updateCamera();return}
  tracer=new WebGLPathTracer(renderer);tracer.renderScale=test?.5:1;tracer.bounces=16;tracer.filterGlossyFactor=.35;tracer.tiles.set(test?1:2,test?1:2);tracer.renderDelay=200;tracer.minSamples=1;tracer.fadeDuration=250;tracer.textureSize.set(2048,2048);tracer.setScene(scene,camera);
  tracer.rasterizeSceneCallback=renderInteractive;
  denoise=new FullScreenQuad(new DenoiseMaterial({sigma:2,threshold:.22,kSigma:1}));
  tracer.renderToCanvasCallback=(target,render,quad)=>{if(tracer.samples<8){const a=render.autoClear;render.autoClear=false;quad.render(render);render.autoClear=a}else{denoise.material.map=target.texture;denoise.render(render)}};
 }
 const mode=q=>{dirty=true;quality=q;if(q)prepareTracer();if(tracer){tracer.enablePathTracing=q;tracer.reset()}document.querySelector('#quality').setAttribute('aria-pressed',q);document.querySelector('#preview').setAttribute('aria-pressed',!q)};
 setMode=mode;
 controls.addEventListener('change',()=>{dirty=true;if(quality)mode(false)});
 document.querySelector('#reset').onclick=()=>{mode(false);camera.position.copy(initial);controls.target.copy(target);controls.update()};
 document.querySelector('#quality').onclick=()=>mode(true);document.querySelector('#preview').onclick=()=>mode(false);
 window.addEventListener('pagehide',()=>interactiveGlass.forEach(m=>m.dispose()),{once:true});
 renderer.domElement.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const d=camera.position.clone().sub(controls.target);d.applyAxisAngle(new THREE.Vector3(0,1,0),e.key==='ArrowLeft'?-.12:.12);camera.position.copy(controls.target).add(d);controls.update()});
 window.addEventListener('resize',fit);document.querySelector('#loading').hidden=true;host.dataset.ready='true';
 window.forgiveStudy={get samples(){return tracer?.samples||0},get quality(){return quality},get position(){return camera.position.toArray()},mode,reset:()=>{dirty=true;tracer?.reset()},scene,camera,renderer,get tracer(){return tracer}};
 let last=-1;
 function tick(){if(disposed)return;raf=requestAnimationFrame(tick);if(document.hidden||(!dirty&&(!quality||tracer.samples>=512)))return;dirty=false;if(!quality){renderInteractive();host.dataset.samples='0';host.dataset.mode='raster';status.textContent='3D interattivo · ruota liberamente';return}tracer.pausePathTracing=tracer.samples>=512;tracer.renderSample();const n=Math.floor(tracer.samples);host.dataset.samples=n;host.dataset.mode=quality?'pathtracing':'raster';if(n!==last||!quality){status.textContent=quality?(tracer.isCompiling?'Preparazione della luce fisica…':n<8?'La luce prende forma…':`Luce fisica · ${n<512?'affinamento in corso':'immagine stabilizzata'}`):'Anteprima fluida';last=n}}
 tick();
}
start().catch(e=>{console.error(e);document.querySelector('#loading').textContent='La scena non è disponibile su questo dispositivo. Torna alla pagina della fragranza.';status.textContent='Impossibile inizializzare lo studio 3D';host.dataset.error=e.message});
window.addEventListener('pagehide',()=>{disposed=true;cancelAnimationFrame(raf);controls?.dispose();tracer?.dispose();interior?.dispose();denoise?.material.dispose();denoise?.dispose();scene?.traverse(o=>{o.geometry?.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){if(!m)continue;Object.values(m).forEach(v=>{if(v?.isTexture)v.dispose()});m.dispose()}});scene?.environment?.dispose();renderer?.dispose()},{once:true});
