import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {random} from './hero-choreography.js?v=R20';

const reliefData=new Map(),albedoData=new Map();
// Code-native botanical studies: relief maps and modeled anatomy, not scans.
export function createBotanicalLibrary(){
 const maps=new Map(),materials=new Map();
 function relief(kind){
  if(maps.has(kind))return maps.get(kind);
  const n=1024,data=reliefData.get(kind)||new Uint8Array(n*n*4);
  if(!reliefData.has(kind)){
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){
   const u=x/n,v=y/n,grain=random(x+y*n),warp=u+.012*Math.sin(v*21);
   let h=.5;
   if(kind==='leaf'){
    const mid=Math.exp(-Math.abs(u-.5)*170),branch=Math.pow(.5+.5*Math.cos(v*70-Math.abs(u-.5)*42),24);
    h=.32+.34*mid+.19*branch+.04*Math.sin(u*370+v*160)+grain*.06;
   }else if(kind==='peel'){
    const px=u*74,py=v*74,ix=Math.floor(px),iy=Math.floor(py);let d=9;
    for(let j=-1;j<=1;j++)for(let i=-1;i<=1;i++){const id=(ix+i+74)%74+74*((iy+j+74)%74),dx=ix+i+random(id+91)-px,dy=iy+j+random(id+811)-py;d=Math.min(d,dx*dx+dy*dy)}
    h=.68-.35*Math.exp(-d*17)+grain*.07;
   }else if(kind==='wood'||kind==='nut'){
    h=.5+.19*Math.sin(warp*310+Math.sin(v*16)*2)+.12*Math.sin(warp*720+v*9)+grain*.1;
   }else if(kind==='petal'){
    h=.5+.09*Math.sin((u-.5)*(130+v*120))+.035*Math.sin(v*270+u*110)+grain*.035;
   }else h=.36+grain*.35+.08*Math.sin(u*160)*Math.cos(v*170);
   const c=Math.round(255*THREE.MathUtils.clamp(h,0,1));data.set([c,c,c,255],(y*n+x)*4);
  }
  reliefData.set(kind,data);}
  const texture=new THREE.DataTexture(data,n,n);texture.generateMipmaps=true;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.magFilter=THREE.LinearFilter;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.needsUpdate=true;maps.set(kind,texture);return texture;
 }
 function albedo(kind){
  const key='color-'+kind;if(maps.has(key))return maps.get(key);
  const source=relief(kind),data=albedoData.get(kind)||new Uint8Array(source.image.data.length),strength=kind==='wood'||kind==='nut'?.65:kind==='peel'?.55:.32;
  if(!albedoData.has(kind))for(let i=0;i<data.length;i+=4){const v=Math.round(255*(1-strength)+source.image.data[i]*strength);data.set([v,v,v,255],i)}
  albedoData.set(kind,data);const map=new THREE.DataTexture(data,1024,1024);map.generateMipmaps=true;map.minFilter=THREE.LinearMipmapLinearFilter;map.magFilter=THREE.LinearFilter;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.needsUpdate=true;maps.set(key,map);return map;
 }
 function material(kind){
  if(materials.has(kind))return materials.get(kind);
  const specs={
   petal:{map:albedo('petal'),roughness:.72,bumpMap:relief('petal'),bumpScale:.00027,sheen:.4,sheenColor:new THREE.Color('#f2d9d1')},
   leaf:{map:albedo('leaf'),roughness:.64,bumpMap:relief('leaf'),bumpScale:.00046,clearcoat:.07,clearcoatRoughness:.65},
   peel:{map:albedo('peel'),roughness:.55,bumpMap:relief('peel'),bumpScale:.00046,clearcoat:.12,clearcoatRoughness:.5},
   wood:{map:albedo('wood'),roughness:.88,bumpMap:relief('wood'),bumpScale:.0004},
   nut:{map:albedo('nut'),roughness:.82,bumpMap:relief('nut'),bumpScale:.00028},
   resin:{map:albedo('grain'),roughness:.62,bumpMap:relief('grain'),bumpScale:.00023,clearcoat:.16,clearcoatRoughness:.45},
   fruit:{map:albedo('grain'),roughness:.57,bumpMap:relief('grain'),bumpScale:.00012,sheen:.25,sheenColor:new THREE.Color('#a85748')}
  };
  const mat=new THREE.MeshPhysicalMaterial({vertexColors:true,side:THREE.DoubleSide,...specs[kind]});if(kind==='petal'){mat.sheen=.65;mat.sheenRoughness=.85;mat.thickness=.00018;mat.ior=1.38}materials.set(kind,mat);return mat;
 }
 function paint(g,hex,variation=.08){
  const c=new THREE.Color(hex),p=g.attributes.position,colors=[];
  for(let i=0;i<p.count;i++){const shade=1-variation*.5+variation*.5*Math.sin(p.getX(i)*380+p.getY(i)*240+p.getZ(i)*180);colors.push(c.r*shade,c.g*shade,c.b*shade)}
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));return g;
 }
 function join(parts){
  const indexed=parts.every(g=>g.index);const inputs=indexed?parts:parts.map(g=>g.index?g.toNonIndexed():g);
  const geometry=mergeGeometries(inputs);new Set([...inputs,...parts]).forEach(g=>g.dispose());return geometry;
 }
 function tube(points,radius,color,segments=24,radial=8){return paint(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),segments,radius,radial,false),color)}
 function petal({length=.08,width=.034,cup=.009,color='#ba7180',variant=0,leaf=false,heart=false,lobed=false,res=40,rows=48}={}){
  const g=new THREE.PlaneGeometry(1,1,res,rows),p=g.attributes.position;
  for(let i=0;i<p.count;i++){
   const u=p.getX(i)*2,t=p.getY(i)+.5;
   let outline=Math.pow(Math.max(0,Math.sin(Math.PI*t)),leaf?.65:.48);
   if(heart)outline*=1.32-.72*t;
   if(lobed)outline*=.78+.22*Math.cos(t*18);
   const serration=leaf?1+.022*Math.sin(t*150):1+.045*Math.sin(t*21+variant);
   const xx=u*width*outline*serration*(1+.08*u+.07*Math.sin(t*7+variant))+.003*Math.sin(t*3+variant)*t;
   const yy=t*length-(heart?.026*Math.abs(u)**1.6*outline*Math.exp(-Math.pow((t-.18)/.21,2)):0);
   const zz=Math.min(1,length/.08)*(.00012*Math.sin(u*85+t*39)*Math.abs(u)**2+cup*u*u+.006*Math.sin(t*4+variant*.4)+.0012*Math.abs(u)**3*Math.sin(t*19+variant)+.003*u*Math.sin(t*5+variant)+.009*Math.pow(t,7)*Math.sin(variant+1));
   p.setXYZ(i,xx,yy,zz);
  }
  g.computeVertexNormals();paint(g,color,.16);
  const colors=g.attributes.color;for(let i=0;i<p.count;i++){const edge=Math.abs(g.attributes.uv.getX(i)*2-1),tip=g.attributes.uv.getY(i);const mottling=.035*(1+Math.sin(p.getX(i)*430+Math.sin(p.getY(i)*157))*Math.sin(p.getY(i)*293));const warmth=Math.pow(edge,5)*.10+Math.pow(tip,8)*.035+mottling;colors.setXYZ(i,colors.getX(i)*(1-warmth*.3),colors.getY(i)*(1-warmth),colors.getZ(i)*(1-warmth*.7))}
  // Closed paper-thin rim and separate back normals make edge-on views tangible.
  const back=g.clone();const bp=back.attributes.position,bi=back.index;
  for(let i=0;i<bp.count;i++)bp.setZ(i,bp.getZ(i)-(leaf?.00025:.00016));
  for(let i=0;i<bi.count;i+=3){const a=bi.getX(i);bi.setX(i,bi.getX(i+2));bi.setX(i+2,a)}back.computeVertexNormals();
  const bc=back.attributes.color;for(let i=0;i<bc.count;i++)bc.setXYZ(i,bc.getX(i)*.94,bc.getY(i)*(leaf?1.04:.95),bc.getZ(i)*.96);
  const rimPositions=[],rimUV=[],rimIndices=[];
  const edge=[];for(let x=0;x<=res;x++)edge.push(x);for(let y=1;y<=rows;y++)edge.push(y*(res+1)+res);for(let x=res-1;x>=0;x--)edge.push(rows*(res+1)+x);for(let y=rows-1;y>0;y--)edge.push(y*(res+1));
  edge.push(edge[0]);edge.forEach((id,j)=>{rimPositions.push(p.getX(id),p.getY(id),p.getZ(id),bp.getX(id),bp.getY(id),bp.getZ(id));rimUV.push(j/edge.length,0,j/edge.length,1);if(j<edge.length-1){const k=j*2;rimIndices.push(k,k+1,k+2,k+1,k+3,k+2)}});
  const rim=new THREE.BufferGeometry();rim.setAttribute('position',new THREE.Float32BufferAttribute(rimPositions,3));rim.setAttribute('uv',new THREE.Float32BufferAttribute(rimUV,2));rim.setIndex(rimIndices);rim.computeVertexNormals();paint(rim,color,.08);
  if(!leaf)return join([g,back,rim]);
  const parts=[g,back,rim],mid=[];
  for(let j=0;j<=6;j++){const t=j/6;mid.push([0,t*length,.006*Math.sin(t*4+variant*.4)+.0005])}
  parts.push(tube(mid,.00065,'#b0af76',28,6));
  for(let j=1;j<6;j++)for(const side of [-1,1]){
   const t=j/7,w=width*Math.sin(Math.PI*t)*.78;
   parts.push(tube([[0,t*length,.006*Math.sin(t*4+variant*.4)+.0006],[side*w*.55,(t+.04)*length,cup*.25+.006*Math.sin((t+.04)*4+variant*.4)],[side*w,(t+.08)*length,cup*.64+.006*Math.sin((t+.08)*4+variant*.4)]],.00023,'#9eab6a',10,5));
  }
  parts.push(tube([[0,-.023,0],[.002,-.01,.001],[0,0,.002]],.0009,'#786c43',14,6));return join(parts);
 }
 function blossom(kind,variant=0){
  const linden=kind==='linden',violet=kind==='violet',ylang=kind==='ylang',tuberose=kind==='tuberose';
  const parts=[],count=tuberose||ylang?6:5,length=linden?.024:ylang?.065:violet?.027:tuberose?.032:.035;
  for(let k=0;k<count;k++){
   const color=linden?'#e8d894':ylang?'#d4bc57':violet?'#8771ab':'#f3eadb';
   const g=petal({length:length*(.94+random(k+variant*20)*.12),width:ylang?.007:linden?.007:.012,cup:ylang?.014:.004,color,variant:variant+k*.3,res:24,rows:28});
   g.rotateX(ylang?.55:tuberose?.35:.12);g.rotateZ(k*Math.PI*2/count+variant*.18);if(tuberose)g.translate(0,0,.023);parts.push(g);
  }
  const stamens=linden?18:kind==='orange'?16:5;
  for(let k=0;k<stamens;k++){
   const a=k*2.399,r=linden?.013:.005,end=[Math.cos(a)*r,Math.sin(a)*r,.010+(tuberose?.023:0)];
   parts.push(tube([[0,0,tuberose?.023:0],[end[0]*.6,end[1]*.6,end[2]*.85],end],.00045,'#d5bd65',6,5));
   const tip=paint(new THREE.SphereGeometry(.0014,9,6),'#c39b3d');tip.translate(...end);parts.push(tip);
  }
  if(tuberose){const stem=paint(new THREE.CylinderGeometry(.004,.002,.03,18,12,true),'#dfdebd');stem.rotateX(Math.PI/2);stem.translate(0,0,.009);parts.push(stem)}
  for(let k=0;k<5;k++){const sepal=petal({length:.012,width:.003,cup:.002,color:'#879260',res:8,rows:12});sepal.rotateX(.5);sepal.rotateZ(k*Math.PI*2/5);sepal.translate(0,0,-.008);parts.push(sepal)}
  return join(parts);
 }
 function peel(color,variant){
  const parts=[];
  function point(t,u,depth){const a=t*(3.8+variant*.6)-.6,pores=(1-depth)*.00035*Math.sin(t*371+u*83)*Math.sin(u*137-t*211),r=.033+.004*Math.sin(t*8+variant)-depth*.003+pores,w=.013*(.5+.5*Math.sin(t*Math.PI))*(1+.09*Math.sin(t*24));return [Math.cos(a)*r,u*w+Math.sin(t*3+variant)*.009,Math.sin(a)*r]}
  for(const inside of [0,1]){const g=new THREE.PlaneGeometry(1,1,40,96),p=g.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...point(p.getY(i)+.5,p.getX(i)*2,inside));g.computeVertexNormals();parts.push(paint(g,inside?'#eadbc0':color,.18))}
  for(const side of [-1,1]){const g=new THREE.PlaneGeometry(1,1,3,64),p=g.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...point(p.getY(i)+.5,side,p.getX(i)+.5));g.computeVertexNormals();parts.push(paint(g,'#d9c69d'))}
  for(const t of [0,1]){const g=new THREE.PlaneGeometry(1,1,20,3),p=g.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...point(t,p.getX(i)*2,p.getY(i)+.5));g.computeVertexNormals();parts.push(paint(g,'#e8d5ad'))}
  return join(parts);
 }
 function saffron(variant){
  const parts=[];
  for(let k=0;k<3;k++){
   const path=new THREE.CatmullRomCurve3([new THREE.Vector3(0,-.045,0),new THREE.Vector3(.007,-.008,.005),new THREE.Vector3((k-1)*.009,.025,.009+k*.003),new THREE.Vector3((k-1)*.013,.044+variant*.004,.012)]);
   const g=new THREE.TubeGeometry(path,40,.0011,10,false),p=g.attributes.position;
   for(let i=0;i<p.count;i++){const t=g.attributes.uv.getX(i),center=path.getPointAt(t),r=.7+.7*t*t;p.setXYZ(i,center.x+(p.getX(i)-center.x)*r,center.y+(p.getY(i)-center.y)*r,center.z+(p.getZ(i)-center.z)*r)}
   g.computeVertexNormals();parts.push(paint(g,k===1?'#b14222':'#852819',.22));
  }return join(parts);
 }
 function lavender(variant){
  const parts=[tube([[0,-.065,0],[.003,0,0],[0,.06,.003]],.0009,'#727753',28,7)];
  for(let j=0;j<6;j++)for(let k=0;k<4;k++){
   const a=k*Math.PI/2+j*.75+variant*.3,r=.0045*(1-j*.08),x=Math.cos(a)*r,y=-.005+j*.011,z=Math.sin(a)*r;
   const calyx=paint(new THREE.SphereGeometry(.0032,12,10),'#7b7981',.22);calyx.scale(.8,1.65,.8);calyx.translate(x,y,z);parts.push(calyx);
   for(let lip=0;lip<3;lip++){
    const g=petal({length:.008,width:.0028,cup:.0012,color:lip===1?'#a79abc':'#87709f',variant:variant+k+lip,res:8,rows:10});
    g.rotateX(.6+lip*.3);g.rotateZ(a+(lip-1)*.8);g.translate(x,y+.003,z+.002);parts.push(g);
   }
  }return join(parts);
 }
 function wood(kind,variant){
  const cinnamon=kind==='cinnamon',parts=[];
  // Rolled bark has an exposed layered cut, rather than a solid cylinder.
  if(cinnamon){
   for(const layer of [0,1]){const g=new THREE.PlaneGeometry(1,1,64,28),p=g.attributes.position;for(let i=0;i<p.count;i++){const u=p.getX(i)+.5,t=p.getY(i)+.5,a=u*7.9,r=.003+u*.01+layer*.0013;p.setXYZ(i,Math.cos(a)*r,(t-.5)*(.105+variant*.01)+.001*Math.sin(u*43),Math.sin(a)*r+.003*Math.sin(t*4))}g.computeVertexNormals();parts.push(paint(g,layer?'#9c6340':'#805132',.25))}
   for(const t of [0,1]){const g=new THREE.PlaneGeometry(1,1,64,2),p=g.attributes.position;for(let i=0;i<p.count;i++){const u=p.getX(i)+.5,d=p.getY(i)+.5,a=u*7.9,r=.003+u*.01+d*.0013;p.setXYZ(i,Math.cos(a)*r,(t-.5)*(.105+variant*.01)+.001*Math.sin(u*43),Math.sin(a)*r+.003*Math.sin(t*4))}g.computeVertexNormals();parts.push(paint(g,'#b17b50'))}
  }else{
   const g=new THREE.SphereGeometry(1,28,40),p=g.attributes.position;
   for(let i=0;i<p.count;i++){
    const x=p.getX(i),y=p.getY(i),z=p.getZ(i),t=(y+1)/2;
    p.setXYZ(i,x*.011*(1+.12*Math.sin(t*23+variant)),y*(.050+variant*.006),z*.002+.008*Math.sin(t*4+variant));
   }g.computeVertexNormals();parts.push(paint(g,kind==='cedar'?'#9c7653':'#b19668',.23));for(let k=0;k<9;k++){const x=(k-4)*.0022,end=.04+random(k+variant*31)*.035;parts.push(tube([[x,-.04,.002],[x+.001,.014,.008],[x+.002*Math.sin(k),end,.002]],.00025,kind==='cedar'?'#c4a27d':'#cdbb91',14,5))}
  }return join(parts);
 }
 function nugget(kind,variant){
  const almond=kind==='almond',resin=kind==='resin';
  const g=new THREE.SphereGeometry(1,almond?40:24,almond?32:18),p=g.attributes.position;
  for(let i=0;i<p.count;i++){
   const x=p.getX(i),y=p.getY(i),z=p.getZ(i),r=1+.13*Math.sin(x*9+variant)*Math.sin(y*8+z*7);
   if(almond)p.setXYZ(i,x*.015*(.9-.15*y)*(1+.025*Math.sin(Math.atan2(z,x)*28)),y*.028,z*.008);
   else {const cut=Math.min(r,.78/Math.max(.001,x*.7+y*.45+z*.55));const pit=.035*Math.pow(.5+.5*Math.sin(x*41+y*29+variant)*Math.sin(z*37),6);p.setXYZ(i,x*.015*(cut-pit),y*.020*(cut-pit),z*.012*(cut-pit));}
  }g.computeVertexNormals();return paint(g,almond?'#a67d50':resin?'#d2aa67':kind==='praline'?'#a87847':'#624536',.32);
 }
 function raspberry(variant){
  const parts=[];
  for(let j=0;j<5;j++)for(let k=0;k<9;k++){
   const a=(k+j*.45)*Math.PI*2/9,r=.015*Math.sin((j+.8)/6*Math.PI),g=paint(new THREE.SphereGeometry(.0048,12,10),'#a34c4c',.15);g.scale(1,.9,1);g.translate(Math.cos(a)*r,(j-2)*.007,Math.sin(a)*r);parts.push(g);
  }return join(parts);
 }
 function coconut(variant){
  const parts=[];for(const inner of [0,1]){const g=new THREE.SphereGeometry(inner?.039:.045,36,24,.25,1.5,.55,1.15);g.rotateZ(variant*.3);parts.push(paint(g,inner?'#f0e5ce':'#684b37',.18))}
  for(let k=0;k<24;k++){
   const a=.3+random(k+variant*97)*1.35,t0=.57+random(k+31)*.8,points=[];
   for(let j=0;j<5;j++){const t=t0+j*.055,r=.0455+.0007*Math.sin(j+k);points.push([-r*Math.cos(a)*Math.sin(t),r*Math.cos(t),r*Math.sin(a)*Math.sin(t)])}
   const fiber=tube(points,.00024,k%3?'#907254':'#b99d79',12,4);fiber.rotateZ(variant*.3);parts.push(fiber);
  }
  // Cut rims join fibrous shell and white flesh.
  for(const a of [.25,1.75]){const g=new THREE.PlaneGeometry(1,1,4,28),p=g.attributes.position;for(let i=0;i<p.count;i++){const r=.039+(p.getX(i)+.5)*.006,t=.55+(p.getY(i)+.5)*1.15;p.setXYZ(i,-r*Math.cos(a)*Math.sin(t),r*Math.cos(t),r*Math.sin(a)*Math.sin(t))}g.rotateZ(variant*.3);g.computeVertexNormals();parts.push(paint(g,'#dfceb1'))}return join(parts);
 }
 function vetiver(variant){const parts=[];for(let k=0;k<7;k++)parts.push(tube([[(k-3)*.001,-.055,0],[(k-3)*.003,-.02,.003*Math.sin(k)],[.008*Math.sin(k*2+variant),.02,.004*Math.cos(k)],[.014*Math.sin(k+variant),.065,.006*Math.cos(k)]],.0006,'#a28b61',36,6));return join(parts)}
 function build(type,variant=0){
  let geometry,kind='petal';
  if(['mandarin','lemon'].includes(type)){geometry=peel(type==='mandarin'?'#d38b27':'#d4bb49',variant);kind='peel'}
  else if(type==='rose'||type==='iris')geometry=petal({color:type==='rose'?'#bd7681':'#9b8ab7',length:type==='iris'?.095:.079,width:type==='iris'?.028:.034,cup:.013,variant});
  else if(['linden-leaf','geranium','tobacco'].includes(type)){geometry=petal({length:type==='tobacco'?.14:.12,width:type==='tobacco'?.029:.045,cup:.007,color:type==='tobacco'?'#987748':'#7b9056',variant,leaf:true,heart:type==='linden-leaf',lobed:type==='geranium',res:40});kind=type==='tobacco'?'wood':'leaf'}
  else if(['jasmine','linden','orange','violet','tuberose','ylang','white'].includes(type))geometry=blossom(type,variant);
  else if(type==='saffron'){geometry=saffron(variant);kind='wood'}
  else if(type==='lavender')geometry=lavender(variant);
  else if(['cedar','sandalwood','cinnamon'].includes(type)){geometry=wood(type,variant);kind='wood'}
  else if(type==='raspberry'){geometry=raspberry(variant);kind='fruit'}
  else if(type==='coconut'){geometry=coconut(variant);kind='nut'}
  else if(type==='vetiver'){geometry=vetiver(variant);kind='wood'}
  else {geometry=nugget(type,variant);kind=type==='resin'?'resin':'nut'}
  return {geometry,material:material(kind)};
 }
 return {build};
}
