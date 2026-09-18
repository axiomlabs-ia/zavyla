import {random} from './hero-choreography.js?v=R35';
// Seed, spread, offset and density vary per fragrance; no geometric paths.
export const fragranceLayouts={
 forgive:[11,1,.95,-.04,.02,.42],give:[37,1.06,.88,.04,.06,.28],trust:[73,.98,1.06,-.06,-.03,.54],
 speak:[109,.94,1.06,.03,.02,.36],promise:[151,.95,1.10,-.02,.06,.48],listen:[193,1.04,.94,.02,-.04,.32],
 enjoy:[239,1.08,.94,-.04,.03,.26],share:[283,1.06,.96,.05,.01,.44],
 'irish-whiskey':[331,1.10,.92,-.03,-.05,.52],silky:[379,1.08,.90,.03,.04,.24],
 'occhio-di-tigre':[431,.98,1.08,-.05,.01,.56],amund:[487,1.02,1.02,.05,-.05,.46],sylind:[541,1.04,1.04,-.02,.04,.34]
};
const cached=new Map();
function placement(slug,id){
 const key=slug+':'+id;if(cached.has(key))return cached.get(key);
 const [seed,sx,sy,bx,by,clumping]=fragranceLayouts[slug]||fragranceLayouts.forgive;
 const n=id+seed*997;let x=0,y=0;
 // Broad, irregular density patches, mixed with uniform scatter. Rejection is
 // probabilistic: no rings, hard cutouts, rows or mirrored halves are formed.
 for(let attempt=0;attempt<12;attempt++){
  x=(random(n+attempt*157+19)*2-1)*.79;
  y=(random(n+attempt*157+43)*2-1)*.80;
  let density=.60;
  for(let j=0;j<3;j++){
   const cx=(random(seed+j*83)*2-1)*.58,cy=(random(seed+j*83+7)*2-1)*.60;
   const dx=(x-cx)/(.25+random(seed+j*83+13)*.30),dy=(y-cy)/(.24+random(seed+j*83+29)*.32);
   density+=clumping*.38*Math.exp(-dx*dx-dy*dy);
  }
  density*=1-.62*Math.exp(-x*x/.065-y*y/.23);
  if(random(n+attempt*157+101)<density)break;
 }
 const value={x:x*sx+bx,y:y*sy+by,n,r:random(n+71),a:random(n+97)};cached.set(key,value);return value;
}
export function fragrancePose(slug,q,id){
 const {x,y,n,r,a}=placement(slug,id),phase=q*(1.4+random(n+33)*1.4),angle=a*Math.PI*2;
 return {x:x+.018*Math.sin(phase+angle),y:y+.024*Math.cos(phase*(.6+r*.5)+r*6),
  z:-.62-r*.24+.025*Math.sin(phase+a*6),angle:angle+phase*(r>.5?1:-1),
  size:.7+random(n+7)*.6,fade:1,age:.25+.12*Math.sin(phase)};
}
