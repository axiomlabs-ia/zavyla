export const clamp=x=>Math.max(0,Math.min(1,x));
export const ease=x=>{x=clamp(x);return x*x*(3-2*x)};
// One viewport, no pinned chapters. Slow shared motion plus a small scroll response.
export function compositionPose(p,i,mobile=false,time=0,aspect=1.5){
 const halfWidth=Math.tan(16*Math.PI/180)*(mobile?3.8:3.08)*aspect;
 // A macro shot of the stone cap opens into the complete bottle in half a viewport.
 const reveal=ease(p),drift=Math.sin(time*.22)*.018;
 return {x:halfWidth*(mobile?.20:.39)*(1-reveal*.14),
  y:(mobile?-1.72:-.91)*(1-reveal)+(mobile?-.20:-.10)*reveal,
  z:0,scale:(mobile?2.62:2.65)*(1-reveal)+(mobile?.86:1.04)*reveal,
  rotation:-.30*(1-reveal)+drift,pitch:.025*(1-reveal),
  tilt:-.32*(1-reveal)-.10*reveal};
}
export const random=i=>{const n=Math.sin(i*127.1+19.7)*43758.5453;return n-Math.floor(n)};
// Two asymmetric streams of ingredients. No clock, emission, resets or ballistic launches.
export function ingredientPose(q,i){const r=random(i+7),a=random(i+31),side=i%3===0?-1:1,phase=q*2.1;
 let y=(a-.5)*1.45+Math.sin(phase+a*4)*.14;
 let x=side*(.37+.22*r)+Math.sin(y*4+phase)*.085;
 let z=-.3-r*.16+Math.cos(phase+a*5)*.065;
 // A minority cross behind the transparent shoulder/body, rather than all
 // staying outside its silhouette. They remain behind the bottle at every phase.
 if(i%5===0){x=Math.sin(phase+a*5)*.23;y=-.02+(a-.5)*.55+Math.sin(phase+a*4)*.08;z=-.58-r*.08}
 return {x,y,z,angle:a*6.28+phase*(i%2?1:-1),size:.65+random(i+3)*.7,fade:1,age:q};
}
