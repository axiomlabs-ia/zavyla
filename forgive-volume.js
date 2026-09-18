import * as THREE from 'three';
// A genuine 3D density field, ray-marched in bottle-local space. No billboard smoke.
export function createForgiveVolume(slug='forgive'){
 const palette={forgive:'#b9a48c',give:'#c4a369',sylind:'#96aa94'};
 const profile={forgive:'spice-curls',give:'citrus-diagonal',sylind:'botanical-plumes'}[slug]||'spice-curls';
 const shapes={
  forgive:`
   // A dense, asymmetric curl on the lower left; broken counter-curls on the right.
   float a=h*11.-time*.22;
   vec2 left=vec2(-.49+.10*sin(h*6.+time*.16),-.27);
   vec2 curl=vec2(cos(a),sin(a))*(.065+.025*sin(h*4.));
   envelope=tube(p.xz,left+curl,.037+.023*h);
   envelope+=.48*tube(p.xz,left-curl*.65,.021+.018*h);
   vec2 right=vec2(.53+.075*sin(h*9.-time*.19),-.30+.04*cos(a));
   envelope+=.50*tube(p.xz,right,.027+.025*h)*smoothstep(.05,.35,h)*(1.-smoothstep(.68,.96,h));
  `,
  give:`
   // Broad swept zest trail: lower left to upper right, with an open upper eddy.
   float diagonal=mix(-.72,.69,h)+.09*sin(h*5.-time*.24);
   vec2 center=vec2(diagonal,-.32+.06*sin(h*5.+time*.13));
   envelope=.83*tube(p.xz,center,.048+.047*h);
   vec2 high=vec2(.55+.12*cos(h*8.-time*.25),-.29+.08*sin(h*8.-time*.25));
   envelope+=.7*tube(p.xz,high,.027+.03*h)*smoothstep(.38,.64,h);
   envelope+=.35*tube(p.xz,center+vec2(-.085,.035),.026+.025*h);
  `,
  sylind:`
   // Two airy upward fans, offset in height, which split above the shoulders.
   float spread=.34+.24*pow(h,.8),wave=.047*sin(h*10.-time*.12);
   for(int k=0;k<3;k++){
    float f=float(k),offset=(f-1.)*(.02+.045*h);
    vec2 right=vec2(spread+offset+wave,-.30+.05*sin(h*7.+f*2.-time*.1));
    envelope+=.36*tube(p.xz,right,.023+.022*h)*smoothstep(.15,.48,h);
    vec2 left=vec2(-spread-offset+wave*.6,-.32+.04*cos(h*6.+f));
    envelope+=.26*tube(p.xz,left,.02+.018*h)*smoothstep(.37,.63,h);
   }
  `
 };
 const n=64,data=new Uint8Array(n*n*n);let seed=173;
 const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
 const lattice=Array.from({length:16*16*16},rand),smooth=t=>t*t*(3-2*t);
 function noise(x,y,z,period){const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z),fx=smooth(x-ix),fy=smooth(y-iy),fz=smooth(z-iz);let value=0;for(let a=0;a<2;a++)for(let b=0;b<2;b++)for(let c=0;c<2;c++)value+=lattice[((ix+a)%period)+16*(((iy+b)%period)+16*((iz+c)%period))]*(a?fx:1-fx)*(b?fy:1-fy)*(c?fz:1-fz);return value}
 for(let z=0;z<n;z++)for(let y=0;y<n;y++)for(let x=0;x<n;x++){let value=0,amp=.58;for(let k=0;k<3;k++){const scale=4*(2**k)/n;value+=amp*noise(x*scale,y*scale,z*scale,4*(2**k));amp*=.5}data[x+n*(y+n*z)]=Math.round(value*255)}
 const field=new THREE.Data3DTexture(data,n,n,n);field.format=THREE.RedFormat;field.minFilter=field.magFilter=THREE.LinearFilter;field.wrapS=field.wrapT=field.wrapR=THREE.RepeatWrapping;field.unpackAlignment=1;field.needsUpdate=true;
 const material=new THREE.ShaderMaterial({glslVersion:THREE.GLSL3,side:THREE.BackSide,transparent:true,depthWrite:false,uniforms:{field:{value:field},time:{value:0},visibility:{value:1},tint:{value:new THREE.Color(palette[slug]||'#b9a48c')}},vertexShader:`out vec3 origin;out vec3 ray;void main(){origin=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;ray=position-origin;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`precision highp sampler3D;
out vec4 outColor;
#define gl_FragColor outColor
uniform sampler3D field;uniform float time,visibility;uniform vec3 tint;in vec3 origin;in vec3 ray;
 float tube(vec2 p,vec2 center,float width){vec2 v=(p-center)/width;return exp(-dot(v,v));}
 float density(vec3 p){
 if(abs(p.x)>.86||p.y<-.94||p.y>.96||p.z>.08||p.z<-.51)return 0.;
 vec3 adv=p*1.7+vec3(time*.016,-time*.055,time*.012);
 vec3 warp=vec3(texture(field,adv).r,texture(field,adv+vec3(.31,.67,.13)).r,texture(field,adv+vec3(.71,.23,.49)).r)-.5;
 p+=warp*.13;
 float h=clamp((p.y+.92)/1.85,0.,1.);
 float envelope=0.;
 ${shapes[slug]||shapes.forgive}
 envelope*=smoothstep(-.94,-.67,p.y)*(1.-smoothstep(.65,.96,p.y));
 // A fine rear wisp crosses the transparent body. The paper label occludes it.
 float rearX=${slug==='give'?'.32*sin(h*4.-time*.16)':slug==='sylind'?'.13+.13*sin(h*6.+time*.12)':'-.14+.20*sin(h*7.-time*.18)'};
 envelope+=.34*tube(p.xz,vec2(rearX,-.41),.030+.019*h)*smoothstep(.35,.55,h)*(1.-smoothstep(.83,.97,h));
 if(envelope<.004)return 0.;
 float billow=texture(field,adv+warp*.5).r;
 float detail=texture(field,adv*3.7+warp*.8).r;
 float fine=texture(field,adv*8.1+warp).r;
 return envelope*smoothstep(.24,.66,billow*.52+detail*.33+fine*.15);
 }

 void main(){vec3 direction=normalize(ray);vec3 inv=1./direction;vec3 a=(-vec3(.9,1.1,.55)-origin)*inv,b=(vec3(.9,1.1,.55)-origin)*inv;vec3 near=min(a,b),far=max(a,b);float start=max(max(near.x,near.y),near.z),end=min(min(far.x,far.y),far.z);start=max(start,0.);if(start>end)discard;float stepSize=(end-start)/80.;vec4 acc=vec4(0.);for(int i=0;i<80;i++){vec3 p=origin+direction*(start+(float(i)+.5)*stepSize);float d=density(p);if(d<.001)continue;float alpha=1.-exp(-d*stepSize*21.*visibility);float shade=exp(-d*2.5);vec3 color=mix(tint*.82,tint*1.10,shade);acc.rgb+=(1.-acc.a)*alpha*color;acc.a+=(1.-acc.a)*alpha;if(acc.a>.94)break;}if(acc.a<.002)discard;gl_FragColor=vec4(acc.rgb/max(acc.a,.001),acc.a);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(1.8,2.2,1.1),material);mesh.name=slug+' fragrance veil';mesh.frustumCulled=false;
 return {mesh,profile,update(time,visibility){material.uniforms.time.value=time;material.uniforms.visibility.value=visibility}};
}
