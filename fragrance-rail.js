import {mountRailBottle} from './scene.js?v=R47';
export function mountFragranceRail(products){
 const section=document.querySelector('.fragrance-showcase');if(!section)return ()=>{};
 const track=section.querySelector('.fragrance-rail'),items=[...track.querySelectorAll('[data-fragrance-index]')],previous=section.querySelector('[data-rail-prev]'),next=section.querySelector('[data-rail-next]');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),events=new AbortController();let active=-1,raf=0,down=false,startX=0,startScroll=0,dragged=false;
 const viewers=new Map(),orientations=new Map();let viewerTimer=0,inView=false,dead=false,usage=0;
 function removeViewer(index){const v=viewers.get(index);if(!v)return;orientations.set(index,JSON.parse(v.host.dataset.userRotation||'{"x":0,"y":0}'));cancelAnimationFrame(v.frame);v.dispose();v.host.remove();items[index].classList.remove('has-live');viewers.delete(index)}
 function showViewer(){
  clearTimeout(viewerTimer);
  viewers.forEach((v,i)=>{v.host.dataset.selected=String(i===active);v.host.inert=i!==active;v.host.dispatchEvent(new Event('presentationchange'))});
  if(!inView||active<0||dead)return;
  const wanted=[active-1,active,active+1].filter(i=>i>=0&&i<items.length);
  [...viewers.keys()].filter(i=>!wanted.includes(i)).forEach(removeViewer);
  function prepareNeighbours(){
  if(dead||!inView)return;
  wanted.forEach(index=>{
   if(viewers.has(index))return;
   const host=document.createElement('span');host.className='rail-live';host.dataset.selected=String(index===active);host.dataset.atmosphereWeight=items[index].dataset.atmosphereWeight||'0';host.inert=index!==active;items[index].append(host);
   const viewer={host,dispose:mountRailBottle(host,products[index].slug,orientations.get(index))||(()=>{}),frame:0,used:++usage};viewers.set(index,viewer);
   function ready(){if(dead||!viewers.has(index))return;if(host.dataset.ready==='true'&&+host.dataset.frames>0){items[index].classList.add('has-live');return}viewer.frame=requestAnimationFrame(ready)}ready();
  });
 }
 // Keep model construction and shader work out of the selection gesture.
 function afterGesture(){if(dead||!inView)return;const central=viewers.get(active)?.host;if(central&&central.dataset.entrance!=='1'){viewerTimer=setTimeout(afterGesture,150);return}prepareNeighbours()}
 if(viewers.has(active)&&!reduced.matches)viewerTimer=setTimeout(afterGesture,1000);else prepareNeighbours();
 }
 const on=(el,name,fn,opts={})=>el.addEventListener(name,fn,{...opts,signal:events.signal});
 function select(i){
  if(active===i)return;active=i;const p=products[i];section.dataset.active=p.slug;
  items.forEach((item,j)=>{item.classList.toggle('is-active',j===i);item.setAttribute('aria-pressed',String(i===j));item.tabIndex=i===j?0:-1});
  section.querySelector('[data-rail-name]').textContent=p.name;
  section.querySelector('[data-rail-family]').textContent=p.family;
  section.querySelector('[data-rail-description]').textContent=p.tagline;
  section.querySelector('[data-rail-notes]').textContent=p.notes[0];
  section.querySelector('[data-rail-link]').href='#/profumo/'+p.slug;
  section.querySelector('[data-rail-price]').textContent=new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(p.price)+' · 100 ml';
  section.querySelector('[data-rail-count]').textContent=String(i+1).padStart(2,'0')+' / '+products.length;
  previous.disabled=i===0;next.disabled=i===items.length-1;showViewer();
 }
 function update(){raf=0;const center=track.scrollLeft+track.clientWidth/2;let nearest=0,best=Infinity;
  items.forEach((item,i)=>{const distance=Math.abs(item.offsetLeft+item.offsetWidth/2-center),d=Math.min(1,distance/item.offsetWidth);item.style.setProperty('--distance',d);const spacing=items[1]?items[1].offsetLeft-items[0].offsetLeft:item.offsetWidth;const t=Math.max(0,Math.min(1,1-distance/spacing));const weight=(t<.005?0:t>.995?1:t*t*(3-2*t)).toFixed(4);item.dataset.atmosphereWeight=weight;const host=viewers.get(i)?.host;if(host&&host.dataset.atmosphereWeight!==weight){host.dataset.atmosphereWeight=weight;host.dispatchEvent(new Event('atmospherechange'))}if(distance<best){best=distance;nearest=i}});select(nearest);
 }
 function go(i,instant=false){i=Math.max(0,Math.min(items.length-1,i));const item=items[i];track.scrollTo({left:item.offsetLeft+item.offsetWidth/2-track.clientWidth/2,behavior:instant||reduced.matches?'instant':'smooth'});if(instant)update()}
 on(track,'scroll',()=>{if(!raf)raf=requestAnimationFrame(update)},{passive:true});
 on(previous,'click',()=>go(active-1));on(next,'click',()=>go(active+1));
 on(track,'keydown',e=>{const targets={ArrowLeft:active-1,ArrowRight:active+1,Home:0,End:items.length-1};if(e.key in targets){e.preventDefault();go(targets[e.key])}});
 on(track,'pointerdown',e=>{if(e.target.closest('.rail-live'))return;if(e.pointerType!=='mouse'||e.button!==0)return;down=true;dragged=false;startX=e.clientX;startScroll=track.scrollLeft});
 on(track,'pointermove',e=>{if(!down)return;if(Math.abs(e.clientX-startX)>6&&!dragged){dragged=true;track.setPointerCapture(e.pointerId);track.classList.add('is-dragging')}if(dragged){e.preventDefault();track.scrollLeft=startScroll-(e.clientX-startX)}});
 function end(){if(!down)return;down=false;track.classList.remove('is-dragging');if(dragged){update();go(active)}}
 on(window,'pointerup',end);on(track,'pointercancel',end);on(track,'lostpointercapture',end);
 on(track,'click',e=>{if(e.target.closest('.rail-live'))return;if(dragged){e.preventDefault();dragged=false;return}const item=e.target.closest('[data-fragrance-index]');if(item)go(Number(item.dataset.fragranceIndex))});
 on(track,'dragstart',e=>e.preventDefault());
 const ro=new ResizeObserver(()=>go(active<0?4:active,true));ro.observe(track);go(4,true);
 const visibility=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)showViewer();else clearTimeout(viewerTimer)},{rootMargin:'100px'});visibility.observe(section);
 return ()=>{dead=true;visibility.disconnect();clearTimeout(viewerTimer);[...viewers.keys()].forEach(removeViewer);events.abort();ro.disconnect();cancelAnimationFrame(raf)};
}
