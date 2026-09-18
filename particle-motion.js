// Finite emission, drag and gravity. Analytic sampling is frame-rate independent.
export const cycle=8.5;
export const random=i=>{const n=Math.sin(i*127.1+19.7)*43758.5453;return n-Math.floor(n)};
export const emission=index=>random(index+103)*1.15+(index%2)*cycle/2;
export function flight(time,index,smoke=false){
 const r=random(index+31),birth=emission(index);
 const age=((time-birth)%cycle+cycle)%cycle,life=smoke?5.8:3.7+r*.7;
 const fade=Math.min(1,age/.22)*Math.max(0,Math.min(1,(life-age)/(smoke?2:.75)));
 const vx=.35+random(index+13)*.19,drag=smoke?.65:.13;
 const travel=(1-Math.exp(-drag*age))/drag;
 const x=-.66+vx*travel+(random(index+2)-.5)*.13;
 const y=smoke?-.55+.34*age+.08*Math.sin(age*1.6+r*3):-.55+(1.05+r*.23)*age-.5*.7*age*age;
 const z=-.34+(random(index+9)-.5)*.16+(smoke?.08*Math.sin(age*1.4+r*3):-.015*age);
 return {x,y,z,age,life,fade:age<life?fade:0};
}
