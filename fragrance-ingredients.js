import {fragrancePose} from './fragrance-layout.js?v=R50';
import * as THREE from 'three';
import {createBotanicalLibrary} from './botanical-library.js?v=R50';
import {ingredientPose,random} from './hero-choreography.js?v=R20';

// Three selected motifs from each note pyramid in data.js. Gourmand accords
// are represented by food fragments; these are modeled interpretations.
export const ingredientRecipes={
 give:[['Scorza di mandarino','mandarin',34],['Petali di rosa','rose',44],['Stimmi di zafferano','saffron',52]],
 sylind:[['Foglie di tiglio','linden-leaf',34],['Fiori di gelsomino','jasmine',38],['Fiori di tiglio','linden',44]],
 promise:[['Lavanda','lavender',28],['Cannella','cinnamon',30],['Foglie di tabacco','tobacco',30]],
 listen:[['Petali di rosa','rose',38],['Fiori d’arancio','orange',30],['Praliné','praline',36]],
 enjoy:[['Lavanda','lavender',28],['Petali di rosa','rose',38],['Cedro','cedar',32]],
 trust:[['Petali di rosa','rose',38],['Stimmi di zafferano','saffron',44],['Resina d’incenso','resin',34]],
 speak:[['Petali di iris','iris',34],['Petali di rosa','rose',36],['Stimmi di zafferano','saffron',44]],
 share:[['Violetta','violet',32],['Tuberosa','tuberose',28],['Foglie di geranio','geranium',32]],
 'irish-whiskey':[['Scorza di limone','lemon',32],['Fiori bianchi','white',28],['Radici di vetiver','vetiver',36]],
 silky:[['Cocco','coconut',28],['Scorza di limone','lemon',32],['Resina d’incenso','resin',36]],
 'occhio-di-tigre':[['Ylang ylang','ylang',28],['Lampone','raspberry',32],['Sandalo','sandalwood',34]],
 amund:[['Mandorla','almond',38],['Foglie di tabacco','tobacco',30],['Cioccolato','chocolate',36]]
};
export function createFragranceIngredients(slug){
 const recipe=ingredientRecipes[slug];if(!recipe)return null;
 const library=createBotanicalLibrary(),group=new THREE.Group(),batches=[],dummy=new THREE.Object3D();
 group.name=slug+' detailed ingredients';let lastChapter=-1;
 recipe.forEach(([name,type,count],ingredient)=>{
  for(let variant=0;variant<3;variant++){
   const {geometry,material}=library.build(type,variant),n=Math.floor(count/3)+(variant<count%3?1:0);
   const mesh=new THREE.InstancedMesh(geometry,material,n),offset=12000+ingredient*4000+variant*173;
   mesh.name=name;mesh.frustumCulled=false;
   for(let i=0;i<n;i++){const shade=.90+random(i+offset+11)*.10;mesh.setColorAt(i,new THREE.Color(shade,shade*(.97+random(i+23)*.03),shade*.97))}
   group.add(mesh);batches.push({mesh,offset,type});
  }
 });
 return {group,names:recipe.map(r=>r[0]),counts:Object.fromEntries(recipe.map(r=>[r[0],r[2]])),update(q){
  if(q===lastChapter)return;lastChapter=q;
  for(const {mesh,offset,type} of batches){
   for(let i=0;i<mesh.count;i++){
    const pose=fragrancePose(slug,q,i+offset);dummy.position.set(pose.x,pose.y,pose.z);
    dummy.rotation.set(.25*Math.sin(i*3+q),pose.angle*.4,i*2.399+q*(offset%3?-.7:.65));
    const signature=['mandarin','linden-leaf','lavender','orange','iris','violet','lemon','coconut','ylang','almond'].includes(type);const size=(signature?1.48:1.12)*(.85+random(i+offset+5)*.5);dummy.scale.setScalar(size);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);
   }mesh.instanceMatrix.needsUpdate=true;
  }
 }};
}
