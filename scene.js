import {addStoneFragments} from './stone-fragments.js?v=R47';
import {finishMacroSurface} from './macro-surface.js?v=R47';
import * as THREE from 'three';
import {renderBottleLayers} from './bottle-render.js?v=R47';
import {compositionPose} from './hero-choreography.js?v=R47';
import {createLiquidMotion} from './liquid-motion.js?v=R47';
import {createFragranceWorld} from './fragrance-worlds.js?v=R47';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

import {loadStudioEnvironment,bottleGlass,perfumeLiquid,finishSurface,addPaperEdge} from './bottle-materials.js?v=R47';

let disposeCurrent=()=>{};
export function disposeScene(){disposeCurrent();disposeCurrent=()=>{}}
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};
const mix=THREE.MathUtils.lerp;
const modelSlugs=['forgive'];
export function mountExperience(){const host=document.querySelector('#scene-host');if(host)createScene(host,{experience:true})}
export function mountFeature(){const host=document.querySelector('.inline-three');if(host)createScene(host,{slug:'forgive'})}
export function mountProduct(slug){const host=document.querySelector('.detail-art');if(!host)return;host.classList.remove('rotate-view');host.removeAttribute('role');host.removeAttribute('aria-valuenow');host.innerHTML='<div class="product-3d-host"></div><span class="rotation-hint">TRASCINA PER RUOTARE · USA ANCHE LE FRECCE ← →</span>';createScene(host.querySelector('.product-3d-host'),{slug})}
export function mountRailBottle(host,slug,rotation={x:0,y:0}){return createScene(host,{slug,rail:true,rotation})}
export function mountCatalogBottle(host,slug,rotation){return createScene(host,{slug,rail:true,catalog:true,rotation})}
function createScene(host,options){
 const isCatalog=!!options.catalog,isHome=options.experience,isRail=!!options.rail,root=isHome?document.querySelector('.experience'):host.parentElement;
 let renderer,dead=false,prepared=false,resizePending=true,renderWidth=0,renderHeight=0,raf=0,drag=options.rotation?.y||0,dragY=options.rotation?.x||0,down=false,lastX=0,lastY=0,progress=0,targetProgress=0,visible=true,frames=0,railStart=null,railPhase=0,railSelected=host.dataset.selected!=='false',railSpin=0,railElapsed=0,railAmbient=0;
 const cleanup=[],reduced=matchMedia('(prefers-reduced-motion: reduce)');
 delete host.dataset.presented;delete host.dataset.ready;
 const scene=new THREE.Scene();scene.background=new THREE.Color('#f0eee7');
 const camera=new THREE.PerspectiveCamera(32,1,.05,60);camera.position.set(0,.12,3.15);camera.layers.enable(1);
 const fluids=[],groups=[],atmospheres=[],glassMeshes=[],liquidMeshes=[],labelMeshes=[],geometries=new Set(),materials=new Set(),textures=new Set();
 const on=(el,event,fn,opts)=>{el.addEventListener(event,fn,opts);cleanup.push(()=>el.removeEventListener(event,fn,opts))};
 function fallback(){root.querySelector('.scene-loading')?.remove();const el=root.querySelector('.scene-fallback');if(el)el.hidden=false;else host.innerHTML='<p class="empty">La vista 3D non è disponibile. Consulta la scheda ufficiale sotto.</p>'}
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch{fallback();return}
 const handheld=innerWidth<700||matchMedia('(pointer:coarse)').matches;renderer.setPixelRatio(handheld?Math.min(devicePixelRatio,isHome?1.9:1.7):isHome?Math.min(Math.max(devicePixelRatio,2),2.5):Math.min(Math.max(devicePixelRatio,1.5),2.25));renderer.info.autoReset=false;renderer.transmissionResolutionScale=handheld?.65:1;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;renderer.shadowMap.enabled=!isRail;renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Flacone 3D: trascina o usa le frecce per ruotarlo');renderer.domElement.style.touchAction='pan-y';
 if(isRail){renderer.domElement.setAttribute('aria-label','Ruota il flacone selezionato trascinando o usando le frecce')}
 const interiorSize=new THREE.Vector2(1,1),interior=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,depthBuffer:true});interior.texture.generateMipmaps=false;interior.texture.minFilter=THREE.LinearFilter;
 const background=interior.clone();
 let env;const environmentReady=loadStudioEnvironment().then(texture=>{if(dead){texture.dispose();return}env=texture;scene.environment=env;scene.environmentIntensity=.85;scene.environmentRotation.y=.65;host.dataset.lighting='photographic-studio';host.dataset.renderMode='interactive'});
 scene.add(new THREE.HemisphereLight(0xfffbef,0xbab0a0,.12));
 const key=new THREE.DirectionalLight(0xfff9ed,.3);key.position.set(-3,5,4);key.castShadow=true;key.shadow.mapSize.set(handheld?1024:2048,handheld?1024:2048);key.shadow.camera.left=-4;key.shadow.camera.right=4;key.shadow.camera.top=3;key.shadow.camera.bottom=-3;key.shadow.normalBias=.025;key.shadow.bias=-.0003;key.shadow.radius=4;scene.add(key);
 const rim=new THREE.DirectionalLight(0xf1e9dc,.1);rim.position.set(3,1,-2);scene.add(rim);
 if(isHome){
  const studioWall=new THREE.Mesh(new THREE.PlaneGeometry(30,20),new THREE.ShaderMaterial({depthWrite:false,toneMapped:false,uniforms:{},vertexShader:'varying vec3 localPoint;void main(){localPoint=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 localPoint;void main(){vec2 p=localPoint.xy;float pool=exp(-dot((p-vec2(.9,.6))*vec2(.5,.55),(p-vec2(.9,.6))*vec2(.5,.55)));float sweep=exp(-pow((p.x+p.y*.5-1.2)*.65,2.));vec3 color=mix(vec3(.79,.75,.68),vec3(.96,.95,.91),clamp(pool*.8+sweep*.2,.0,1.));gl_FragColor=vec4(color,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));studioWall.position.z=-2.5;scene.add(studioWall);
 }
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.06}));floor.rotation.x=-Math.PI/2;floor.position.y=-1.05;floor.receiveShadow=true;floor.visible=false;scene.add(floor);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(1.12,.009,12,140),new THREE.MeshStandardMaterial({color:'#b5a28b',roughness:.3,metalness:.6}));ring.rotation.set(.3,.45,.2);ring.position.set(.55,.07,-.65);ring.scale.set(1,1.13,1);if(isHome)scene.add(ring);ring.visible=false;
 const satellites=[];if(isHome){for(let i=0;i<0;i++){const stone=new THREE.Mesh(new THREE.IcosahedronGeometry(.035+i*.01,2),new THREE.MeshStandardMaterial({color:i%2?'#b6a99f':'#d7c8bd',roughness:.6}));stone.position.set(Math.cos(i*1.3)*1.4,Math.sin(i*1.3)*.8,-.35);stone.castShadow=true;scene.add(stone);satellites.push(stone)}}
 const pointer=new THREE.Vector2(),clock=new THREE.Clock();let currentSlug=options.slug||'forgive';
 function resize(){if(dead)return;resizePending=true;if(!raf)raf=requestAnimationFrame(tick)}
 function applyResize(){if(!resizePending)return;resizePending=false;const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;if(w===renderWidth&&h===renderHeight)return;renderWidth=w;renderHeight=h;renderer.setSize(w,h,false);const dpr=renderer.getPixelRatio();interiorSize.set(Math.round(w*dpr),Math.round(h*dpr));interior.setSize(interiorSize.x,interiorSize.y);background.setSize(interiorSize.x,interiorSize.y);camera.aspect=w/h;camera.updateProjectionMatrix()}

 const ro=new ResizeObserver(resize);ro.observe(host);resize();
 const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!raf)raf=requestAnimationFrame(tick)},{rootMargin:'150px'});io.observe(host);
 function readScroll(){if(!isHome)return;targetProgress=reduced.matches?1:clamp(-root.getBoundingClientRect().top/Math.max(1,root.offsetHeight-root.querySelector('.experience-stage').offsetHeight))}
 on(window,'scroll',readScroll,{passive:true});on(window,'resize',readScroll);on(reduced,'change',()=>{readScroll();if(!raf)raf=requestAnimationFrame(tick)});
 on(renderer.domElement,'pointerdown',e=>{if(isRail){e.stopPropagation();drag+=railSpin;railSpin=0;railElapsed=.85}down=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)});
 on(renderer.domElement,'pointermove',e=>{const rect=host.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width-.5,(e.clientY-rect.top)/rect.height-.5);if(down){drag+=(e.clientX-lastX)*.009;dragY=clamp(dragY+(e.clientY-lastY)*.004,-.6,.6);lastX=e.clientX;lastY=e.clientY}});
 on(renderer.domElement,'pointerup',()=>down=false);on(renderer.domElement,'pointercancel',()=>down=false);on(renderer.domElement,'pointerleave',()=>pointer.set(0,0));
 on(renderer.domElement,'keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key)){e.preventDefault();if(isRail)e.stopPropagation();if(e.key==='Home'){drag=0;dragY=0}else if(e.key==='ArrowUp'||e.key==='ArrowDown')dragY=clamp(dragY+(e.key==='ArrowUp'?-.12:.12),-.6,.6);else drag+=e.key==='ArrowRight'?.2:-.2}});
 on(renderer.domElement,'webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);raf=0;fallback()});
 if(isHome)on(root.querySelector('[data-show-fragrances]'),'click',()=>document.querySelector('.fragrance-showcase')?.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'}));
 const loader=new GLTFLoader();
 const needed=isHome?modelSlugs:[options.slug];
 Promise.all([environmentReady,...needed.map(async(slug,i)=>{const gltf=await loader.loadAsync(`assets/models/${slug}.glb`);if(dead){release(gltf.scene);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());return}const model=gltf.scene;model.position.y=-.615;model.traverse(ob=>{if(!ob.isMesh)return;const name=ob.name.toLowerCase();ob.castShadow=name.includes('tappo');ob.receiveShadow=false;const mat=ob.material;mat.envMapIntensity=1.15;if(name.includes('flacone')){ob.material=bottleGlass(interior,interiorSize);glassMeshes.push(ob);mat.dispose()}else if(name.includes('essenza')){ob.material=perfumeLiquid(slug,background,interiorSize);ob.visible=true;liquidMeshes.push(ob);mat.dispose();}else if(name.includes('etichetta')){labelMeshes.push(ob);addPaperEdge(ob)}finishSurface(ob.material,name,slug,renderer);if(isHome)finishMacroSurface(ob.material,name,renderer)});const pivot=new THREE.Group();pivot.add(model);pivot.userData.slug=slug;groups[i]=pivot;scene.add(pivot);let liquid,glass;model.traverse(o=>{if(o.isMesh&&o.name.toLowerCase().includes('essenza'))liquid=o;if(o.isMesh&&o.name.toLowerCase().includes('flacone'))glass=o});if(liquid&&glass)fluids.push({motion:createLiquidMotion(liquid,glass),pivot});const world=createFragranceWorld(slug,{lightSmoke:isRail});model.userData.fragranceSlug=slug;addStoneFragments(world,model);if(isRail){world.entranceMaterials=new Set();world.group.traverse(ob=>{if(ob.material&&!ob.material.isShaderMaterial){ob.material.transparent=true;ob.material.forceSinglePass=true;world.entranceMaterials.add(ob.material)}})}if(isHome){world.group.traverse(ob=>{if(ob.material?.uniforms?.field)ob.visible=false;if(ob.material?.uniforms?.densityBoost)ob.material.uniforms.densityBoost.value=3;if(ob.geometry?.isInstancedBufferGeometry)ob.visible=true;if(ob.isInstancedMesh)ob.count=Math.max(1,Math.ceil(ob.count*1.0));if(ob.isPoints)ob.geometry.setDrawRange(0,Math.ceil(ob.geometry.attributes.position.count*.40))})}world.group.traverse(ob=>{if(ob.material)for(const key of ['map','normalMap','roughnessMap','bumpMap'])if(ob.material[key])ob.material[key].anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy())});atmospheres[i]=world;scene.add(world.group);scene.add(world.setting.group);await world.setting.ready})]).then(async()=>{if(dead)return;applyResize();if(isRail){const visibility=atmospheres.map(w=>w.group.visible);atmospheres.forEach(w=>w.group.visible=true);const compiled=renderer.compileAsync(scene,camera);atmospheres.forEach((w,i)=>w.group.visible=visibility[i]);await compiled;if(dead)return}prepared=true;if(!isHome&&!isRail){const note=document.createElement('span');note.className='fragrance-atmosphere-note';const title=document.createElement('span');title.className='fragrance-setting-title';title.textContent=atmospheres[0]?.setting.title||'';note.append(title,document.createTextNode(atmospheres[0]?.label||''));host.parentElement.append(note)}readScroll();if(!raf)raf=requestAnimationFrame(tick)}).catch(e=>{if(!dead){console.error('Unable to load 3D model',e);fallback()}});

 function tick(){raf=0;if(dead||!visible||document.hidden||!prepared)return;applyResize();const dt=Math.min(clock.getDelta(),.05),elapsed=clock.elapsedTime,mobile=host.clientWidth<700;progress=mix(progress,targetProgress,reduced.matches?1:1-Math.exp(-dt*9));if(Math.abs(progress-targetProgress)<.0001)progress=targetProgress;if(isRail&&host.dataset.ready==='true'&&railStart===null)railStart=performance.now();if(isRail&&railSelected&&railStart!==null)railElapsed+=dt;if(isRail&&railSelected&&!reduced.matches&&host.dataset.ready==='true')railAmbient+=dt;const railT=railStart===null?0:clamp(railElapsed/.85);railPhase=isCatalog?1:isRail?(railSelected?(reduced.matches?1:railT*railT*(3-2*railT)):0):1;railSpin=isRail&&!isCatalog&&!reduced.matches?-Math.PI*.42*(1-railPhase):0;const p=progress,weights=[1];const activeIndex=weights.indexOf(Math.max(...weights));const bg=atmospheres[activeIndex]?.setting.color||new THREE.Color('#f0eee7');scene.background.copy(bg);camera.position.x=mix(camera.position.x,reduced.matches?0:pointer.x*.09,.06);camera.position.y=mix(camera.position.y,mobile?.05:.1+pointer.y*.07,.06);const closeup=0;camera.position.z=mobile?(isHome?3.8-closeup:3.0):(isHome?3.08-closeup:2.8);if(isRail)camera.position.set(0,.03,2.95);camera.lookAt(0,0,0);
 groups.forEach((g,i)=>{if(!g)return;if(!isHome){g.position.set(0,0,0);g.rotation.set(dragY,drag+railSpin,-.045);g.scale.setScalar(1);return}const pose=compositionPose(p,i,mobile,reduced.matches?0:elapsed,camera.aspect);g.userData.chapter=p;g.position.set(pose.x,pose.y,pose.z);g.rotation.set(dragY*.35+pose.pitch,drag*.35+pose.rotation,pose.tilt);g.scale.setScalar(pose.scale);g.visible=true;
 });ring.rotation.y=.45+p*2+(reduced.matches?0:elapsed*.035);ring.rotation.z=.2-p*.7;ring.position.x=.55-p*.6;ring.material.color.set(p>.7?'#ad975f':'#b5a28b');satellites.forEach((s,i)=>{s.rotation.set(elapsed*.08+i,elapsed*.12,0);s.position.y=Math.sin(i*1.3+p*5)*.8;s.position.z=-.35+Math.sin(p*4+i)*.2});
 scene.updateMatrixWorld(true);fluids.forEach(({motion,pivot})=>{if(pivot.visible)motion.update(dt,elapsed,reduced.matches)});host.dataset.fluid=JSON.stringify(fluids.find(f=>f.pivot.visible)?.motion.mesh.userData.fluid||{});
 atmospheres.forEach((world,i)=>{if(!world||!groups[i])return;world.group.position.copy(groups[i].position);world.group.scale.copy(groups[i].scale);if(mobile){world.group.scale.x*=.87;world.group.scale.y*=.7}const materialProgress=isHome?clamp(.30+p*.25+(reduced.matches?0:.10*Math.sin(elapsed*.24+i*2.094))):isRail?.43+(reduced.matches?0:.16*Math.sin(railAmbient*.5)):clamp(.2+drag/(Math.PI*2));world.group.rotation.set(.04*Math.sin(materialProgress*Math.PI),drag*.2-materialProgress*.45,-.18+materialProgress*.36);const railAtmosphere=isRail?Number(host.dataset.atmosphereWeight??(railSelected?1:0)):1;world.group.visible=groups[i].visible&&railAtmosphere>0;
 if(isHome){
  // Ingredients occupy a separate rear plane, outside the enlarged bottle.
  world.group.position.set(groups[i].position.x+.10,-.12,-1.10);
  world.group.scale.setScalar(mobile?1.0:1.48);
  world.group.rotation.y+=reduced.matches?0:.10*Math.sin(elapsed*.22);
 }

if(isRail){if(!reduced.matches){world.group.rotation.y+=.22*Math.sin(railAmbient*.32);world.group.rotation.z+=.045*Math.sin(railAmbient*.41);world.group.position.y+=.018*Math.sin(railAmbient*.6)}world.group.scale.x*=.9;// Counteract the carousel translation and CSS scale for the rear atmosphere.
 if(!isCatalog){const track=host.closest('.fragrance-rail'),rect=host.getBoundingClientRect(),bounds=track.getBoundingClientRect();
 const cssScale=rect.width/host.clientWidth,depth=camera.position.z+.75;
 const unitsPerPixel=2*Math.tan(THREE.MathUtils.degToRad(camera.fov*.5))*depth/rect.height;
 world.group.scale.multiplyScalar(1/cssScale);
 world.group.position.x+=(bounds.left+bounds.width/2-(rect.left+rect.width/2))*unitsPerPixel;
 const item=host.parentElement.getBoundingClientRect(),anchorY=item.top+host.offsetTop+host.clientHeight/2;
 world.group.position.y-=(anchorY-(rect.top+rect.height/2))*unitsPerPixel;
 host.dataset.atmosphereAnchor=String(bounds.left+bounds.width/2);}
 }const atmosphereVisibility=isRail?railAtmosphere:isHome?.85:1;world.setVisibility(atmosphereVisibility);world.entranceMaterials?.forEach(m=>m.opacity=atmosphereVisibility);world.setting.group.visible=i===activeIndex;world.setting.setPresentation(isHome&&!mobile);world.setting.group.position.set(isHome&&!mobile?.48:0,mobile&&isHome?-.18:.08,0);world.setting.group.scale.set(mobile?.58:1,mobile?.85:1,1);world.update(elapsed,reduced.matches,materialProgress)});
 function renderWorld(index,target){
  atmospheres.forEach((world,i)=>world.setting.group.visible=i===index);
  scene.background.copy(atmospheres[index]?.setting.color||bg);
  renderBottleLayers({renderer,scene,camera,bottles:groups,glassMeshes,liquidMeshes,labelMeshes,background,interior,target,surroundings:atmospheres.flatMap(w=>[w.group,w.setting.group])});
 }
 renderer.info.reset();renderWorld(activeIndex,null);host.dataset.presented='true';host.dataset.ready='true';root.querySelector('.scene-loading')?.classList.add('loaded');

 host.dataset.entrance=String(railPhase);host.dataset.heroStage=isHome?(p<.7?'macro':'portrait'):'fragrance';if(isHome)root.style.setProperty('--hero-reveal',p.toFixed(3));host.dataset.ensembles=JSON.stringify(groups.map((g,i)=>({slug:g.userData.slug,visible:g.visible,sharedPosition:atmospheres[i]?.group.position.distanceTo(g.position)<1e-8,chapter:g.userData.chapter,rotation:g.rotation.y,effect:atmospheres[i]?.group.visible})));host.dataset.particleMotion=JSON.stringify(atmospheres[activeIndex]?.group.userData.motion||{});host.dataset.setting=atmospheres[activeIndex]?.setting.title||'';host.dataset.optics='nested-glass-liquid';host.dataset.transmission='smoke-background-liquid-glass';host.dataset.atmosphere=atmospheres.map(a=>a?.label).filter(Boolean).join(' / ');host.dataset.renderWidth=String(host.clientWidth);host.dataset.frames=String(++frames);host.dataset.triangles=String(renderer.info.render.triangles);host.dataset.drawCalls=String(renderer.info.render.calls);host.dataset.atmospherePasses='2';host.dataset.pixelRatio=String(renderer.getPixelRatio());host.dataset.userRotation=JSON.stringify({x:dragY,y:drag});host.dataset.rotation=groups[0]?.rotation.y.toFixed(4)||'0';host.dataset.progress=p.toFixed(4);if((!reduced.matches&&(!isRail||railSelected))||down||Math.abs(progress-targetProgress)>.0001)raf=requestAnimationFrame(tick);
 }
 on(host,'atmospherechange',()=>{if(!raf)raf=requestAnimationFrame(tick)});
 on(host,'presentationchange',()=>{const selected=host.dataset.selected!=='false';if(selected!==railSelected){railSelected=selected;railElapsed=0;railStart=selected?performance.now():null}if(!raf)raf=requestAnimationFrame(tick)});
 on(document,'visibilitychange',()=>{if(!document.hidden&&!raf)raf=requestAnimationFrame(tick)});on(renderer.domElement,'pointermove',()=>{if(!raf)raf=requestAnimationFrame(tick)});on(renderer.domElement,'keydown',()=>{if(!raf)raf=requestAnimationFrame(tick)});
 function release(object){object.traverse(ob=>{if(ob.isLight)ob.shadow?.map?.dispose();if(ob.geometry)geometries.add(ob.geometry);for(const mat of Array.isArray(ob.material)?ob.material:[ob.material]){if(!mat)continue;materials.add(mat);Object.values(mat.uniforms||{}).forEach(u=>{if(u.value?.isTexture)textures.add(u.value)});Object.values(mat).forEach(value=>{if(value?.isTexture)textures.add(value)})}})}
 const dispose=()=>{dead=true;cancelAnimationFrame(raf);cleanup.forEach(f=>f());ro.disconnect();io.disconnect();release(scene);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());env?.dispose();interior.dispose();background.dispose();key.shadow.map?.dispose();renderer.dispose();if(isCatalog)renderer.forceContextLoss();renderer.domElement.remove()};
 if(!isRail)disposeCurrent=dispose;return dispose;
}
