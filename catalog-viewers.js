import {mountCatalogBottle} from './scene.js?v=R47';
export function mountCatalogViewers(){
 const hosts=[...document.querySelectorAll('#catalog-grid .catalog-live')],live=new Map(),rotations=new Map(),visible=new Set(),events=new AbortController();let dead=false,timer=0;
 function remove(host){const v=live.get(host);if(!v)return;rotations.set(host,JSON.parse(host.dataset.userRotation||'{"x":0,"y":0}'));v.dispose();live.delete(host);delete host.dataset.ready;host.dataset.frames='0'}
 function animate(host,value){host.dataset.selected=String(value);host.dispatchEvent(new Event('presentationchange'))}
 function pump(){clearTimeout(timer);if(dead)return;
  const ordered=[...visible].sort((a,b)=>Math.abs(a.getBoundingClientRect().top-innerHeight*.35)-Math.abs(b.getBoundingClientRect().top-innerHeight*.35)).slice(0,innerWidth<700||matchMedia('(pointer:coarse)').matches?2:6);
  for(const host of live.keys())if(!ordered.includes(host))remove(host);
  // Stagger compilation so entering a row does not build several scenes at once.
  if([...live.keys()].some(h=>h.dataset.ready!=='true')){timer=setTimeout(pump,120);return}
  const host=ordered.find(h=>!live.has(h));if(!host)return;
  live.set(host,{dispose:mountCatalogBottle(host,host.dataset.slug,rotations.get(host))});timer=setTimeout(pump,120);
 }
 const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)visible.add(e.target);else{visible.delete(e.target);animate(e.target,false)}}pump()},{threshold:0});
 for(const host of hosts){observer.observe(host);for(const name of ['pointerenter','focusin','pointerdown'])host.addEventListener(name,()=>{for(const other of live.keys())animate(other,other===host)},{signal:events.signal});for(const name of ['pointerleave','focusout'])host.addEventListener(name,()=>animate(host,false),{signal:events.signal})}
 return ()=>{dead=true;clearTimeout(timer);observer.disconnect();events.abort();[...live.keys()].forEach(remove)};
}
