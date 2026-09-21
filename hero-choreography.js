export const clamp=x=>Math.max(0,Math.min(1,x));
export const ease=x=>{x=clamp(x);return x*x*(3-2*x)};
// One viewport, no pinned chapters. Slow shared motion plus a small scroll response.
export function compositionPose(p,i,mobile=false,time=0,aspect=1.5){
 const halfWidth=Math.tan(16*Math.PI/180)*(mobile?3.8:3.08)*aspect;
 // Tre tempi in un viewport: la pietra da sola, il montaggio, il ritratto.
 const reveal=ease(p),drift=Math.sin(time*.22)*.018;
 // Il corpo arriva dopo la pietra e ruota di piu' di mezzo giro mentre sale,
 // cosi' lo scorrimento e' un movimento e non uno zoom.
 const turn=ease(clamp((p-.18)/.66));
 return {x:halfWidth*(mobile?.20:.39)*(1-reveal*.14),
  y:(mobile?-1.72:-.91)*(1-reveal)+(mobile?-.20:-.10)*reveal,
  z:0,scale:(mobile?2.62:2.65)*(1-reveal)+(mobile?.86:1.04)*reveal,
  rotation:-.30*(1-reveal)+(1-turn)*-1.95+drift,pitch:.025*(1-reveal),
  tilt:-.32*(1-reveal)-.10*reveal};
}

// Il montaggio: la pietra resta sospesa e gira su se stessa, poi scende sul
// collo con un piccolo assestamento. Il resto del flacone la raggiunge da sotto.
const easeOutBack=x=>{const c=1.7;return 1+ (c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
export function assemblyPose(p,mobile=false){
 const seat=clamp((p-.26)/.52);
 const settle=seat>=1?1:easeOutBack(seat);
 const rise=ease(clamp(p/.42));
 return {
  // quota della pietra sopra il collo, in unita' del modello
  capY:(1-settle)*(mobile?.30:.34),
  // poco piu' di mezzo giro mentre scende, poi ferma
  capSpin:(1-ease(seat))*2.1,
  // il corpo entra da sotto nel primo tempo
  bodyY:(1-rise)*-.16,
  // il pulviscolo parte largo e si raccoglie attorno al flacone
  spread:1.52-.52*ease(p),
  // la luce dello studio scorre sulla materia mentre si compone
  light:.65+ease(p)*.85,
  // l'essenza sale nel flacone mentre il corpo si monta
  fill:.08+.92*ease(clamp((p-.10)/.56)),
 };
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
