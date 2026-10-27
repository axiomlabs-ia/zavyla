var op="R167";function rh(){let i=[...document.querySelectorAll("#catalog-grid .catalog-live")];for(let e of i){let t=e.dataset.slug;if(!t)continue;let n=new Image;n.src=`assets/vetrina/${t}.webp?v=${op}`,n.alt="",n.setAttribute("aria-hidden","true"),n.loading="lazy",n.decoding="async",n.addEventListener("load",()=>{e.dataset.ready="true"},{once:!0}),n.addEventListener("error",()=>{e.dataset.ready="true"},{once:!0}),e.replaceChildren(n),e.dataset.ready="true"}return()=>{for(let e of i)e.replaceChildren()}}var Ft=i=>{let e=Math.sin(i*127.1+19.7)*43758.5453;return e-Math.floor(e)};var pa={forgive:[11,1,.95,-.04,.02,.42],give:[37,1.06,.88,.04,.06,.28],trust:[73,.98,1.06,-.06,-.03,.54],speak:[109,.94,1.06,.03,.02,.36],promise:[151,.95,1.1,-.02,.06,.48],listen:[193,1.04,.94,.02,-.04,.32],enjoy:[239,1.08,.94,-.04,.03,.26],share:[283,1.06,.96,.05,.01,.44],"irish-whiskey":[331,1.1,.92,-.03,-.05,.52],silky:[379,1.08,.9,.03,.04,.24],"occhio-di-tigre":[431,.98,1.08,-.05,.01,.56],amund:[487,1.02,1.02,.05,-.05,.46],sylind:[541,1.04,1.04,-.02,.04,.34]},Il=new Map;function lp(i,e){let t=i+":"+e;if(Il.has(t))return Il.get(t);let[n,r,s,a,o,l]=pa[i]||pa.forgive,c=e+n*997,u=0,h=0;for(let d=0;d<12;d++){u=(Ft(c+d*157+19)*2-1)*.79,h=(Ft(c+d*157+43)*2-1)*.8;let g=.6;for(let x=0;x<3;x++){let m=(Ft(n+x*83)*2-1)*.58,p=(Ft(n+x*83+7)*2-1)*.6,E=(u-m)/(.25+Ft(n+x*83+13)*.3),S=(h-p)/(.24+Ft(n+x*83+29)*.32);g+=l*.38*Math.exp(-E*E-S*S)}if(g*=1-.62*Math.exp(-u*u/.065-h*h/.23),Ft(c+d*157+101)<g)break}let f={x:u*r+a,y:h*s+o,n:c,r:Ft(c+71),a:Ft(c+97)};return Il.set(t,f),f}function Hi(i,e,t){let{x:n,y:r,n:s,r:a,a:o}=lp(i,t),l=e*(1.4+Ft(s+33)*1.4),c=o*Math.PI*2;return{x:n+.018*Math.sin(l+c),y:r+.024*Math.cos(l*(.6+a*.5)+a*6),z:-.62-a*.24+.025*Math.sin(l+o*6),angle:c+l*(a>.5?1:-1),size:.7+Ft(s+7)*.6,fade:1,age:.25+.12*Math.sin(l)}}var Vh=0,yc=1,Gh=2;var _c=1,Kr=2,ii=3,fn=0,nn=1,kt=2,bi=0,Xi=1,xc=2,Mc=3,bc=4,Wh=5,Li=100,qh=101,Xh=102,$h=103,Yh=104,Zh=200,Kh=201,Jh=202,jh=203,ka=204,Va=205,Qh=206,ed=207,td=208,nd=209,id=210,rd=211,sd=212,ad=213,od=214,po=0,mo=1,go=2,$i=3,vo=4,yo=5,_o=6,xo=7,Sc=0,ld=1,cd=2,Si=0,ud=1,hd=2,dd=3,Jr=4,fd=5,pd=6,md=7,oc="attached",gd="detached",Ec=300,ur=301,hr=302,jr=303,Mo=304,na=306,en=1e3,Nn=1001,Di=1002,tn=1003,bo=1004;var dr=1005;var ft=1006,Qr=1007;var rn=1008;var Kn=1009,Tc=1010,wc=1011,es=1012,So=1013,Ui=1014,on=1015,gn=1016,Eo=1017,To=1018,ts=1020,Ac=35902,Rc=35899,Cc=1021,Ic=1022,Pn=1023,Fr=1026,ns=1027,is=1028,wo=1029,Pc=1030,Ao=1031;var Ro=1033,ia=33776,ra=33777,sa=33778,aa=33779,Co=35840,Io=35841,Po=35842,Lo=35843,Do=36196,zo=37492,No=37496,Uo=37808,Fo=37809,Oo=37810,Bo=37811,Ho=37812,ko=37813,Vo=37814,Go=37815,Wo=37816,qo=37817,Xo=37818,$o=37819,Yo=37820,Zo=37821,Ko=36492,Jo=36494,jo=36495,Qo=36283,el=36284,tl=36285,nl=36286;var Yi=2300,Zi=2301,Ha=2302,lc=2400,cc=2401,uc=2402,vd=2500;var Lc=0,oa=1,rs=2,yd=3200,_d=3201;var Dc=0,xd=1,Ei="",Ct="srgb",Xt="srgb-linear",Ps="linear",It="srgb";var qi=7680;var hc=519,Md=512,bd=513,Sd=514,zc=515,Ed=516,Td=517,wd=518,Ad=519,Ga=35044,il=35048;var la="300 es",Vn=2e3,Ls=2001;var gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=1234567,As=Math.PI/180,Ki=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Nc(i,e){return(i%e+e)%e}function cp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function up(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function hp(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function dp(i,e=1){return e-Math.abs(Nc(i,e*2)-e)}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gp(i,e){return i+Math.random()*(e-i)}function vp(i){return i*(.5-Math.random())}function yp(i){i!==void 0&&(sh=i);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _p(i){return i*As}function xp(i){return i*Ki}function Mp(i){return(i&i-1)===0&&i!==0}function bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ep(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var En={DEG2RAD:As,RAD2DEG:Ki,generateUUID:Gn,clamp:dt,euclideanModulo:Nc,mapLinear:cp,inverseLerp:up,lerp:Rs,damp:hp,pingpong:dp,smoothstep:fp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:vp,seededRandom:yp,degToRad:_p,radToDeg:xp,isPowerOfTwo:Mp,ceilPowerOfTwo:bp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:Ep,normalize:Rt,denormalize:kn},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-o,p=l*f+c*d+u*g+h*x,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let M=Math.sqrt(S),b=Math.atan2(M,p*E);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}let v=o*E;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-o){let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new N,ah=new pn,ht=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=r[0],m=r[3],p=r[6],E=r[1],S=r[4],v=r[7],M=r[2],b=r[5],A=r[8];return s[0]=a*x+o*E+l*M,s[3]=a*m+o*S+l*b,s[6]=a*p+o*v+l*A,s[1]=c*x+u*E+h*M,s[4]=c*m+u*S+h*b,s[7]=c*p+u*v+h*A,s[2]=f*x+d*E+g*M,s[5]=f*m+d*S+g*b,s[8]=f*p+d*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new ht;function Uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){let i=Or("canvas");return i.style.display="block",i}var oh={};function Br(i){i in oh||(oh[i]=!0,console.warn(i))}function Cd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var lh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){let i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===It&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:It,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var yt=Tp();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var br,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Or("canvas")),br.width=e.width,br.height=e.height;let r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wp=0,Hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dl(r[a].image)):s.push(Dl(r[a]))}else s=Dl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ap=0,zl=new N,$t=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,r=Nn,s=ft,a=rn,o=Pn,l=Kn,c=i.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Gn(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Di:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Di:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Ec;$t.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,b=(u+f)/4,A=(h+x)/4,T=(g+m)/4;return S>v&&S>M?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=b/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=T/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=T/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new $t(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ds=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kr=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ga.subVectors(this.max,_s),Sr.subVectors(e.a,_s),Er.subVectors(e.b,_s),Tr.subVectors(e.c,_s),Ti.subVectors(Er,Sr),wi.subVectors(Tr,Er),ki.subVectors(Sr,Tr);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-ki.z,ki.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,ki.z,0,-ki.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-ki.y,ki.x,0];return!Nl(t,Sr,Er,Tr,ga)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Sr,Er,Tr,ga))?!1:(va.crossVectors(Ti,wi),t=[va.x,va.y,va.z],Nl(t,Sr,Er,Tr,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,ma=new Cn,Sr=new N,Er=new N,Tr=new N,Ti=new N,wi=new N,ki=new N,_s=new N,ga=new N,va=new N,Vi=new N;function Nl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vi.fromArray(i,s);let o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Rp=new Cn,xs=new N,Ul=new N,xn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Ul)),this.expandByPoint(xs.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ci=new N,Fl=new N,ya=new N,Ai=new N,Ol=new N,_a=new N,Bl=new N,Ji=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Fl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=Ai.dot(this.direction),l=-Ai.dot(ya),c=Ai.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fl).addScaledVector(ya,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){Ol.subVectors(t,e),_a.subVectors(n,e),Bl.crossVectors(Ol,_a);let a=this.direction.dot(Bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);let l=o*this.direction.dot(_a.crossVectors(Ai,_a));if(l<0)return null;let c=o*this.direction.dot(Ol.cross(Ai));if(c<0||l+c>a)return null;let u=-o*Ai.dot(Bl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,x,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Ip)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ri.crossVectors(n,An),Ri.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ri.crossVectors(n,An)),Ri.normalize(),xa.crossVectors(An,Ri),r[0]=Ri.x,r[4]=xa.x,r[8]=An.x,r[1]=Ri.y,r[5]=xa.y,r[9]=An.y,r[2]=Ri.z,r[6]=xa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],S=n[7],v=n[11],M=n[15],b=r[0],A=r[4],T=r[8],y=r[12],_=r[1],R=r[5],z=r[9],H=r[13],D=r[2],B=r[6],G=r[10],te=r[14],F=r[3],W=r[7],Z=r[11],ne=r[15];return s[0]=a*b+o*_+l*D+c*F,s[4]=a*A+o*R+l*B+c*W,s[8]=a*T+o*z+l*G+c*Z,s[12]=a*y+o*H+l*te+c*ne,s[1]=u*b+h*_+f*D+d*F,s[5]=u*A+h*R+f*B+d*W,s[9]=u*T+h*z+f*G+d*Z,s[13]=u*y+h*H+f*te+d*ne,s[2]=g*b+x*_+m*D+p*F,s[6]=g*A+x*R+m*B+p*W,s[10]=g*T+x*z+m*G+p*Z,s[14]=g*y+x*H+m*te+p*ne,s[3]=E*b+S*_+v*D+M*F,s[7]=E*A+S*R+v*B+M*W,s[11]=E*T+S*z+v*G+M*Z,s[15]=E*y+S*H+v*te+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+x*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=h*m*c-x*f*c+x*l*d-o*m*d-h*l*p+o*f*p,S=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,v=u*x*c-g*h*c+g*o*d-a*x*d-u*o*p+a*h*p,M=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,b=t*E+n*S+r*v+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=E*A,e[1]=(x*f*s-h*m*s-x*r*d+n*m*d+h*r*p-n*f*p)*A,e[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*p+n*l*p)*A,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*A,e[4]=S*A,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*A,e[8]=v*A,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*p-t*h*p)*A,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*m+t*h*m)*A,e[14]=(g*o*r-a*x*r-g*n*l+t*x*l+a*n*m-t*o*m)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,x=a*u,m=a*h,p=o*h,E=l*c,S=l*u,v=l*h,M=n.x,b=n.y,A=n.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(g-S)*M,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(f+p))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(g+S)*A,r[9]=(m-E)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=wr.set(r[0],r[1],r[2]).length(),a=wr.set(r[4],r[5],r[6]).length(),o=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let c=1/s,u=1/a,h=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Vn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Vn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ls)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Vn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Vn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ls)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wr=new N,Bn=new ut,Cp=new N(0,0,0),Ip=new N(1,1,1),Ri=new N,xa=new N,An=new N,uh=new ut,hh=new pn,Wn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pp=0,dh=new N,Ar=new pn,ui=new ut,Ma=new N,Ms=new N,Lp=new N,Dp=new pn,fh=new N(1,0,0),ph=new N(0,1,0),mh=new N(0,0,1),gh={type:"added"},zp={type:"removed"},Rr={type:"childadded",child:null},Hl={type:"childremoved",child:null},Tt=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Wn,n=new pn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ht}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ms,Ma,this.up):ui.lookAt(Ma,Ms,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ui),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zp),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new N,hi=new N,kl=new N,di=new N,Cr=new N,Ir=new N,vh=new N,Vl=new N,Gl=new N,Wl=new N,ql=new Et,Xl=new Et,$l=new Et,Pi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Hn.subVectors(e,t),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Hn.subVectors(r,t),hi.subVectors(n,t),kl.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(hi),l=Hn.dot(kl),c=hi.dot(hi),u=hi.dot(kl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ql.setScalar(0),Xl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,n),$l.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ql,s.x),a.addScaledVector(Xl,s.y),a.addScaledVector($l,s.z),a}static isFrontFacing(e,t,n,r){return Hn.subVectors(n,t),hi.subVectors(e,t),Hn.cross(hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Cr.subVectors(r,n),Ir.subVectors(s,n),Vl.subVectors(e,n);let l=Cr.dot(Vl),c=Ir.dot(Vl);if(l<=0&&c<=0)return t.copy(n);Gl.subVectors(e,r);let u=Cr.dot(Gl),h=Ir.dot(Gl);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Cr,a);Wl.subVectors(e,s);let d=Cr.dot(Wl),g=Ir.dot(Wl);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ir,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return vh.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(vh,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Cr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=Nc(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yl(a,s,e+1/3),this.g=Yl(a,s,e),this.b=Yl(a,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return yt.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(an.copy(this),t);let n=an.r,r=an.g,s=an.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ct){yt.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,r=an.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(ba);let n=Rs(Ci.h,ba.h,t),r=Rs(Ci.s,ba.s,t),s=Rs(Ci.l,ba.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Te;Te.NAMES=Id;var Np=0,mn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Xi,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Va,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qn=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=Up();function Up(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Fp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=dt(i,-65504,65504),pi.floatView[0]=i;let e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function Op(i){let e=i>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(i&1023)]+pi.exponentTable[e],pi.floatView[0]}var zi=class{static toHalfFloat(e){return Fp(e)}static fromHalfFloat(e){return Op(e)}},Wt=new N,Sa=new we,Bp=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}};var Ns=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Us=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hp=0,zn=new ut,Zl=new Tt,Pr=new N,Rn=new Cn,bs=new Cn,jt=new N,wt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uc(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Rn.min,bs.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,bs.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(bs.min),Rn.expandByPoint(bs.max))}Rn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),jt.add(Pr)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new N,l[T]=new N;let c=new N,u=new N,h=new N,f=new we,d=new we,g=new we,x=new N,m=new N;function p(T,y,_){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),f.fromBufferAttribute(s,T),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[T].add(x),o[y].add(x),o[_].add(x),l[T].add(m),l[y].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let T=0,y=E.length;T<y;++T){let _=E[T],R=_.start,z=_.count;for(let H=R,D=R+z;H<D;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new N,v=new N,M=new N,b=new N;function A(T){M.fromBufferAttribute(r,T),b.copy(M);let y=o[T];S.copy(y),S.sub(M.multiplyScalar(M.dot(y))).normalize(),v.crossVectors(b,y);let R=v.dot(l[T])<0?-1:1;a.setXYZW(T,S.x,S.y,S.z,R)}for(let T=0,y=E.length;T<y;++T){let _=E[T],R=_.start,z=_.count;for(let H=R,D=R+z;H<D;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Lt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new ut,Gi=new Ji,Ea=new xn,_h=new N,Ta=new N,wa=new N,Aa=new N,Kl=new N,Ra=new N,xh=new N,Ca=new N,xt=class extends Tt{constructor(e=new wt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Kl.fromBufferAttribute(h,e),a?Ra.addScaledVector(Kl,u):Ra.addScaledVector(Kl.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Ea.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ea,_h)===null||Gi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(yh.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,M=S;v<M;v+=3){let b=o.getX(v),A=o.getX(v+1),T=o.getX(v+2);r=Ia(this,p,e,n,c,u,h,b,A,T),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);r=Ia(this,a,e,n,c,u,h,E,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,M=S;v<M;v+=3){let b=v,A=v+1,T=v+2;r=Ia(this,p,e,n,c,u,h,b,A,T),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=m,S=m+1,v=m+2;r=Ia(this,a,e,n,c,u,h,E,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function kp(i,e,t,n,r,s,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===fn,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:i}}function Ia(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ta),i.getVertexPosition(l,wa),i.getVertexPosition(c,Aa);let u=kp(i,e,t,n,Ta,wa,Aa,xh);if(u){let h=new N;Pi.getBarycoord(xh,Ta,wa,Aa,h),r&&(u.uv=Pi.getInterpolatedAttribute(r,o,l,c,h,new we)),s&&(u.uv1=Pi.getInterpolatedAttribute(s,o,l,c,h,new we)),a&&(u.normal=Pi.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new N,materialIndex:0};Pi.getNormal(Ta,wa,Aa,f.normal),u.face=f,u.barycoord=h}return u}var Ni=class i extends wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(x,m,p,E,S,v,M,b,A,T,y){let _=v/A,R=M/T,z=v/2,H=M/2,D=b/2,B=A+1,G=T+1,te=0,F=0,W=new N;for(let Z=0;Z<G;Z++){let ne=Z*R-H;for(let le=0;le<B;le++){let ve=le*_-z;W[x]=ve*E,W[m]=ne*S,W[p]=D,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=b>0?1:-1,u.push(W.x,W.y,W.z),h.push(le/A),h.push(1-Z/T),te+=1}}for(let Z=0;Z<T;Z++)for(let ne=0;ne<A;ne++){let le=f+ne+B*Z,ve=f+ne+B*(Z+1),be=f+(ne+1)+B*(Z+1),He=f+(ne+1)+B*Z;l.push(le,ve,He),l.push(ve,be,He),F+=6}o.addGroup(d,F,y),d+=F,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function Vp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Pd={clone:fr,merge:ln},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fs=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new N,Mh=new we,bh=new we,Bt=class extends Fs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,bh),t.subVectors(bh,Mh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Dr=1,Xa=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Lr,Dr,e,t);r.layers=this.layers,this.add(r);let s=new Bt(Lr,Dr,e,t);s.layers=this.layers,this.add(s);let a=new Bt(Lr,Dr,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Lr,Dr,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Lr,Dr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Lr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Os=class extends $t{constructor(e=[],t=ur,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Os(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:bi});s.uniforms.tEquirect.value=t;let a=new xt(r,s),o=t.minFilter;return t.minFilter===rn&&(t.minFilter=ft),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ht=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ji=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new N,Wr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Sh=new N,Eh=new Et,Th=new Et,Xp=new N,wh=new ut,Pa=new N,Jl=new xn,Ah=new ut,jl=new Ji,Bs=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oc,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jl.copy(this.boundingSphere),Jl.applyMatrix4(r),e.ray.intersectsSphere(Jl)!==!1&&(Ah.copy(r).invert(),jl.copy(e.ray).applyMatrix4(Ah),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Eh.fromBufferAttribute(r.attributes.skinIndex,e),Th.fromBufferAttribute(r.attributes.skinWeight,e),Sh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Th.getComponent(s);if(a!==0){let o=Eh.getComponent(s);wh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xp.copy(Sh).applyMatrix4(wh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},qr=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xn=class extends $t{constructor(e=null,t=1,n=1,r,s,a,o,l,c=tn,u=tn,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rh=new ut,$p=new ut,Hs=class i{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:$p;Rh.multiplyMatrices(o,t[s]),Rh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xn(t,e,e,Pn,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new qr),this.bones.push(a),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},In=class extends Lt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new ut,Ch=new ut,La=[],Ih=new Cn,Yp=new ut,Ss=new xt,Es=new xn,Mn=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Yp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Ih.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Ih)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Es.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zr),Ch.multiplyMatrices(n,zr),Ss.matrixWorld=Ch,Ss.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=s,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xn(new Float32Array(r*this.count),r,this.count,is,on));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ql=new N,Zp=new N,Kp=new ht,Jn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ql.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ql),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kp.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new xn,Jp=new we(.5,.5),Da=new N,Xr=class{constructor(e=new Jn,t=new Jn,n=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],E=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-a,d-u,p-g,M-E).normalize(),r[1].setComponents(c+a,d+u,p+g,M+E).normalize(),r[2].setComponents(c+o,d+h,p+x,M+S).normalize(),r[3].setComponents(c-o,d-h,p-x,M-S).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,d-f,p-m,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-m,M-v).normalize(),t===Vn)r[5].setComponents(c+l,d+f,p+m,M+v).normalize();else if(t===Ls)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=Jp.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ya=new N,Za=new N,Ph=new ut,Ts=new Ji,za=new xn,ec=new N,Lh=new N,Qi=class extends Tt{constructor(e=new wt,t=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ya.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ya.distanceTo(Za);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;Ph.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Ph);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),E=u.getX(x+1),S=Na(this,e,Ts,l,p,E,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Na(this,e,Ts,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=Na(this,e,Ts,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Na(this,e,Ts,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Na(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Ya.fromBufferAttribute(o,r),Za.fromBufferAttribute(o,s),t.distanceSqToSegment(Ya,Za,ec,Lh)>n)return;ec.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ec);if(!(c<e.near||c>e.far))return{distance:c,point:Lh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Dh=new N,zh=new N,ks=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Dh.fromBufferAttribute(t,r),zh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dh.distanceTo(zh);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vs=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nh=new ut,dc=new Ji,Ua=new xn,Fa=new N,er=class extends Tt{constructor(e=new wt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;Nh.copy(r).invert(),dc.copy(e.ray).applyMatrix4(Nh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Fa.fromBufferAttribute(h,m),Uh(Fa,m,l,r,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Fa.fromBufferAttribute(h,g),Uh(Fa,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Uh(i,e,t,n,r,s,a){let o=dc.distanceSqToPoint(i);if(o<t){let l=new N;dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var vi=class extends $t{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gs=class extends $t{constructor(e,t,n=Ui,r,s,a,o=tn,l=tn,c,u=Fr,h=1){if(u!==Fr&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ws=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var tr=class i extends wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function E(){let v=new N,M=new N,b=0,A=(t-e)/n;for(let T=0;T<=s;T++){let y=[],_=T/s,R=_*(t-e)+e;for(let z=0;z<=r;z++){let H=z/r,D=H*l+o,B=Math.sin(D),G=Math.cos(D);M.x=R*B,M.y=-_*n+m,M.z=R*G,h.push(M.x,M.y,M.z),v.set(B,A,G).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-_),y.push(g++)}x.push(y)}for(let T=0;T<r;T++)for(let y=0;y<s;y++){let _=x[y][T],R=x[y+1][T],z=x[y+1][T+1],H=x[y][T+1];(e>0||y!==0)&&(u.push(_,R,H),b+=3),(t>0||y!==s-1)&&(u.push(R,z,H),b+=3)}c.addGroup(p,b,0),p+=b}function S(v){let M=g,b=new we,A=new N,T=0,y=v===!0?e:t,_=v===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let R=g;for(let z=0;z<=r;z++){let D=z/r*l+o,B=Math.cos(D),G=Math.sin(D);A.x=y*G,A.y=m*_,A.z=y*B,h.push(A.x,A.y,A.z),f.push(0,_,0),b.x=B*.5+.5,b.y=G*.5*_+.5,d.push(b.x,b.y),g++}for(let z=0;z<r;z++){let H=M+z,D=R+z;v===!0?u.push(D,D+1,H):u.push(D+1,D,H),T+=3}c.addGroup(p,T,v===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ka=class i extends wt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let S=new N,v=new N,M=new N;for(let b=0;b<t.length;b+=3)d(t[b+0],S),d(t[b+1],v),d(t[b+2],M),l(S,v,M,E)}function l(E,S,v,M){let b=M+1,A=[];for(let T=0;T<=b;T++){A[T]=[];let y=E.clone().lerp(v,T/b),_=S.clone().lerp(v,T/b),R=b-T;for(let z=0;z<=R;z++)z===0&&T===b?A[T][z]=y:A[T][z]=y.clone().lerp(_,z/R)}for(let T=0;T<b;T++)for(let y=0;y<2*(b-T)-1;y++){let _=Math.floor(y/2);y%2===0?(f(A[T][_+1]),f(A[T+1][_]),f(A[T][_])):(f(A[T][_+1]),f(A[T+1][_+1]),f(A[T+1][_]))}}function c(E){let S=new N;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(E),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){let E=new N;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];let v=m(E)/2/Math.PI+.5,M=p(E)/Math.PI+.5;a.push(v,1-M)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){let S=a[E+0],v=a[E+2],M=a[E+4],b=Math.max(S,v,M),A=Math.min(S,v,M);b>.9&&A<.1&&(S<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),M<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,S){let v=E*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let E=new N,S=new N,v=new N,M=new N,b=new we,A=new we,T=new we;for(let y=0,_=0;y<s.length;y+=9,_+=6){E.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),b.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),T.set(a[_+4],a[_+5]),M.copy(E).add(S).add(v).divideScalar(3);let R=m(M);x(b,_+0,E,R),x(A,_+2,S,R),x(T,_+4,v,R)}}function x(E,S,v,M){M<0&&E.x===1&&(a[S]=E.x-1),v.x===0&&v.z===0&&(a[S]=M/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new we:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,r=[],s=[],a=[],o=new N,l=new ut;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new N)}s[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(dt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(dt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends Un{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ja=class extends qs{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return i+e*s+t*a+n*o}}}var Oa=new N,tc=new Oc,nc=new Oc,ic=new Oc,nr=class extends Un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Oa.subVectors(r[0],r[1]).add(r[0]),c=Oa);let h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Oa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),tc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),nc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),ic.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),nc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ic.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(tc.calc(l),nc.calc(l),ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fh(i,e,t,n,r){let s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function jp(i,e){let t=1-i;return t*t*e}function Qp(i,e){return 2*(1-i)*i*e}function em(i,e){return i*i*e}function Cs(i,e,t,n){return jp(i,e)+Qp(i,t)+em(i,n)}function tm(i,e){let t=1-i;return t*t*t*e}function nm(i,e){let t=1-i;return 3*t*t*i*e}function im(i,e){return 3*(1-i)*i*i*e}function rm(i,e){return i*i*i*e}function Is(i,e,t,n,r){return tm(i,e)+nm(i,t)+im(i,n)+rm(i,r)}var ja=class extends Un{constructor(e=new we,t=new we,n=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new we){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,r.x,s.x,a.x,o.x),Is(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends Un{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,r.x,s.x,a.x,o.x),Is(e,r.y,s.y,a.y,o.y),Is(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends Un{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends Un{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends Un{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Cs(e,r.x,s.x,a.x),Cs(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends Un{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Cs(e,r.x,s.x,a.x),Cs(e,r.y,s.y,a.y),Cs(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Fh(o,l.x,c.x,u.x,h.x),Fh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new we().fromArray(r))}return this}},sm=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:nr,CubicBezierCurve:ja,CubicBezierCurve3:Qa,EllipseCurve:qs,LineCurve:eo,LineCurve3:to,QuadraticBezierCurve:no,QuadraticBezierCurve3:Xs,SplineCurve:io});var $n=class i extends Ka{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$s=class i extends wt{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=dt(r,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],u=1/t,h=new N,f=new we,d=new N,g=new N,x=new N,m=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){let S=n+E*u*r,v=Math.sin(S),M=Math.cos(S);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*v,h.y=e[b].y,h.z=e[b].x*M,a.push(h.x,h.y,h.z),f.x=E/t,f.y=b/(e.length-1),o.push(f.x,f.y);let A=l[3*b+0]*v,T=l[3*b+1],y=l[3*b+0]*M;c.push(A,T,y)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){let v=S+E*e.length,M=v,b=v+e.length,A=v+e.length+1,T=v+1;s.push(M,b,T),s.push(A,T,b)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Gt=class i extends wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let E=p*f-a;for(let S=0;S<c;S++){let v=S*h-s;g.push(v,-E,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let S=E+c*p,v=E+c*(p+1),M=E+1+c*(p+1),b=E+1+c*p;d.push(S,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bn=class i extends wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new N,f=new N,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],S=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let b=M/t;h.x=-e*Math.cos(r+b*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(r+b*s)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+v,1-S),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let S=u[p][E+1],v=u[p][E],M=u[p+1][E],b=u[p+1][E+1];(p!==0||a>0)&&d.push(S,v,b),(p!==n-1||l<Math.PI)&&d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ir=class i extends wt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],u=new N,h=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,E=(r+1)*d+g;a.push(x,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zr=class i extends wt{constructor(e=new Xs(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new we,u=new N,h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function x(){for(let S=0;S<t;S++)m(S);m(s===!1?t:0),E(),p()}function m(S){u=e.getPointAt(S/t,u);let v=a.normals[S],M=a.binormals[S];for(let b=0;b<=r;b++){let A=b/r*Math.PI*2,T=Math.sin(A),y=-Math.cos(A);l.x=y*v.x+T*M.x,l.y=y*v.y+T*M.y,l.z=y*v.z+T*M.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let v=1;v<=r;v++){let M=(r+1)*(S-1)+(v-1),b=(r+1)*S+(v-1),A=(r+1)*S+v,T=(r+1)*(S-1)+v;g.push(M,b,T),g.push(b,A,T)}}function E(){for(let S=0;S<=t;S++)for(let v=0;v<=r;v++)c.x=S/t,c.y=v/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new sm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var rr=class extends mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Qt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ba(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function om(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Oh(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Ld(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var yi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends yi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case cc:s=e,o=2*t-n;break;case uc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:a=e,l=2*n-t;break;case uc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let M=0;M!==o;++M)s[M]=p*a[u+M]+E*a[c+M]+S*a[l+M]+v*a[h+M];return s}},oo=class extends yi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}},lo=class extends yi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&am(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ha,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Zi;var _i=class extends Sn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Yi;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Ys.prototype.ValueTypeName="color";var Qn=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Qn.prototype.ValueTypeName="number";var co=class extends yi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(s,0,a,c-o,a,c,l);return s}},ei=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}};ei.prototype.ValueTypeName="quaternion";ei.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends Sn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Yi;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};ti.prototype.ValueTypeName="vector";var Zs=class{constructor(e="",t=-1,n=[],r=vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cm(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Sn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=om(l);l=Oh(l,1,u),c=Oh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Qn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];Ld(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){let S=f[g];m.push(S.time),p.push(S.morphTarget===x?1:0)}r.push(new Qn(".morphTargetInfluence["+x+"]",m,p))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(ti,d+".position",f,"pos",r),n(ei,d+".quaternion",f,"rot",r),n(ti,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function lm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qn;case"vector":case"vector2":case"vector3":case"vector4":return ti;case"color":return Ys;case"quaternion":return ei;case"bool":case"boolean":return _i;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lm(i.type);if(i.times===void 0){let t=[],n=[];Ld(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},uo=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Dd=new uo,Yn=class{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},fc=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends Yn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=jn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:r});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){E();function E(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let b=0,A=u.length;b<A;b++){let T=u[b];T.onProgress&&T.onProgress(M)}p.enqueue(v),E()}},S=>{p.error(S)})}}});return new Response(m)}else throw new fc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{jn.add(`file:${e}`,c);let u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Nr=new WeakMap,ho=class extends Yn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Nr.get(a);h===void 0&&(h=[],Nr.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Or("img");function l(){u(),t&&t(this);let h=Nr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Nr.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),jn.remove(`image:${e}`);let f=Nr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}Nr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ks=class extends Yn{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new Xn,o=new sr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Nn,a.wrapT=c.wrapT!==void 0?c.wrapT:Nn,a.magFilter=c.magFilter!==void 0?c.magFilter:ft,a.minFilter=c.minFilter!==void 0?c.minFilter:ft,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=rn),c.mipmapCount===1&&(a.minFilter=ft),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}},ni=class extends Yn{constructor(e){super(e)}load(e,t,n,r){let s=new $t,a=new ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ar=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},or=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rc=new ut,Bh=new N,Hh=new N,Js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pc=class extends Js{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ki*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},js=class extends ar{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kh=new ut,ws=new N,sc=new N,mc=class extends Js{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),sc.copy(n.position),sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sc),n.updateMatrixWorld(),r.makeTranslation(-ws.x,-ws.y,-ws.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,n.coordinateSystem,n.reversedDepth)}},Qs=class extends ar{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lr=class extends Fs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gc=class extends Js{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zn=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Mi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ea=class extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ac=new WeakMap,ta=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=jn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(ac.has(a)===!0)r&&r(ac.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return jn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ac.set(l,c),jn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Bc="\\[\\]\\.:\\/",um=new RegExp("["+Bc+"]","g"),Hc="[^"+Bc+"]",hm="[^"+Bc.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Hc),fm=/(WCOD+)?/.source.replace("WCOD",hm),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),gm=new RegExp("^"+dm+fm+pm+mm+"$"),vm=["material","materials","bones","map"],vc=class{constructor(e,t,n){let r=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(um,"")}static parseTrackName(e){let t=gm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);vm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=vc;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);function kc(i,e,t,n){let r=ym(n);switch(t){case Cc:return i*e;case is:return i*e/r.components*r.byteLength;case wo:return i*e/r.components*r.byteLength;case Pc:return i*e*2/r.components*r.byteLength;case Ao:return i*e*2/r.components*r.byteLength;case Ic:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case Ro:return i*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Po:return Math.max(i,8)*Math.max(e,8)/2;case Do:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Jo:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ym(i){switch(i){case Kn:case Tc:return{byteLength:1,components:1};case es:case wc:case gn:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case Ui:case So:case on:return{byteLength:4,components:1};case Ac:case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function rf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function xm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_g=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Mm,alphahash_pars_fragment:bm,alphamap_fragment:Sm,alphamap_pars_fragment:Em,alphatest_fragment:Tm,alphatest_pars_fragment:wm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Im,begin_vertex:Pm,beginnormal_vertex:Lm,bsdfs:Dm,iridescence_fragment:zm,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Bm,color_fragment:Hm,color_pars_fragment:km,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Xm,displacementmap_pars_vertex:$m,displacementmap_vertex:Ym,emissivemap_fragment:Zm,emissivemap_pars_fragment:Km,colorspace_fragment:Jm,colorspace_pars_fragment:jm,envmap_fragment:Qm,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:rg,fog_pars_vertex:sg,fog_fragment:ag,fog_pars_fragment:og,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:_g,lights_fragment_begin:xg,lights_fragment_maps:Mg,lights_fragment_end:bg,logdepthbuf_fragment:Sg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:wg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Dg,morphcolor_vertex:zg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Ug,morphtarget_vertex:Fg,normal_fragment_begin:Og,normal_fragment_maps:Bg,normal_pars_fragment:Hg,normal_pars_vertex:kg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Xg,iridescence_pars_fragment:$g,opaque_fragment:Yg,packing:Zg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:s0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:v0,uv_vertex:y0,worldpos_vertex:_0,background_vert:x0,background_frag:M0,backgroundCube_vert:b0,backgroundCube_frag:S0,cube_vert:E0,cube_frag:T0,depth_vert:w0,depth_frag:A0,distanceRGBA_vert:R0,distanceRGBA_frag:C0,equirect_vert:I0,equirect_frag:P0,linedashed_vert:L0,linedashed_frag:D0,meshbasic_vert:z0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:O0,meshmatcap_frag:B0,meshnormal_vert:H0,meshnormal_frag:k0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:q0,meshtoon_vert:X0,meshtoon_frag:$0,points_vert:Y0,points_frag:Z0,shadow_vert:K0,shadow_frag:J0,sprite_vert:j0,sprite_frag:Q0},Ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ri={basic:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ln([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ln([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ln([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ln([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ln([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ln([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:ln([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:ln([Ae.lights,Ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ri.physical={uniforms:ln([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var rl={r:0,b:0,g:0},pr=new Wn,ev=new ut;function tv(i,e,t,n,r,s,a){let o=new Te(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1,M=g(S);M===null?p(o,l):M&&M.isColor&&(p(M,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){let M=g(v);M&&(M.isCubeTexture||M.mapping===na)?(u===void 0&&(u=new xt(new Ni(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:fr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(pr)),u.material.toneMapped=yt.getTransfer(M.colorSpace)!==It,(h!==M||f!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xt(new Gt(2,2),new qt({name:"BackgroundMaterial",uniforms:fr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(rl,Fc(i)),n.buffers.color.setClear(rl.r,rl.g,rl.b,v,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:m,dispose:E}}function nv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(_,R,z,H,D){let B=!1,G=h(H,z,R);s!==G&&(s=G,c(s.object)),B=d(_,H,z,D),B&&g(_,H,z,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(_,R,z,H),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,R,z){let H=z.wireframe===!0,D=n[_.id];D===void 0&&(D={},n[_.id]=D);let B=D[R.id];B===void 0&&(B={},D[R.id]=B);let G=B[H];return G===void 0&&(G=f(l()),B[H]=G),G}function f(_){let R=[],z=[],H=[];for(let D=0;D<t;D++)R[D]=0,z[D]=0,H[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:H,object:_,attributes:{},index:null}}function d(_,R,z,H){let D=s.attributes,B=R.attributes,G=0,te=z.getAttributes();for(let F in te)if(te[F].location>=0){let Z=D[F],ne=B[F];if(ne===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function g(_,R,z,H){let D={},B=R.attributes,G=0,te=z.getAttributes();for(let F in te)if(te[F].location>=0){let Z=B[F];Z===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor));let ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),D[F]=ne,G++}s.attributes=D,s.attributesNum=G,s.index=H}function x(){let _=s.newAttributes;for(let R=0,z=_.length;R<z;R++)_[R]=0}function m(_){p(_,0)}function p(_,R){let z=s.newAttributes,H=s.enabledAttributes,D=s.attributeDivisors;z[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),D[_]!==R&&(i.vertexAttribDivisor(_,R),D[_]=R)}function E(){let _=s.newAttributes,R=s.enabledAttributes;for(let z=0,H=R.length;z<H;z++)R[z]!==_[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function S(_,R,z,H,D,B,G){G===!0?i.vertexAttribIPointer(_,R,z,D,B):i.vertexAttribPointer(_,R,z,H,D,B)}function v(_,R,z,H){x();let D=H.attributes,B=z.getAttributes(),G=R.defaultAttributeValues;for(let te in B){let F=B[te];if(F.location>=0){let W=D[te];if(W===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(W=_.instanceColor)),W!==void 0){let Z=W.normalized,ne=W.itemSize,le=e.get(W);if(le===void 0)continue;let ve=le.buffer,be=le.type,He=le.bytesPerElement,j=be===i.INT||be===i.UNSIGNED_INT||W.gpuType===So;if(W.isInterleavedBufferAttribute){let se=W.data,k=se.stride,oe=W.offset;if(se.isInstancedInterleavedBuffer){for(let Q=0;Q<F.locationSize;Q++)p(F.location+Q,se.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Q=0;Q<F.locationSize;Q++)S(F.location+Q,ne/F.locationSize,be,Z,k*He,(oe+ne/F.locationSize*Q)*He,j)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)p(F.location+se,W.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<F.locationSize;se++)m(F.location+se);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let se=0;se<F.locationSize;se++)S(F.location+se,ne/F.locationSize,be,Z,ne*He,ne/F.locationSize*se*He,j)}}else if(G!==void 0){let Z=G[te];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(F.location,Z);break;case 3:i.vertexAttrib3fv(F.location,Z);break;case 4:i.vertexAttrib4fv(F.location,Z);break;default:i.vertexAttrib1fv(F.location,Z)}}}}E()}function M(){T();for(let _ in n){let R=n[_];for(let z in R){let H=R[z];for(let D in H)u(H[D].object),delete H[D];delete R[z]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let z in R){let H=R[z];for(let D in H)u(H[D].object),delete H[D];delete R[z]}delete n[_.id]}function A(_){for(let R in n){let z=n[R];if(z[_.id]===void 0)continue;let H=z[_.id];for(let D in H)u(H[D].object),delete H[D];delete z[_.id]}}function T(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function iv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let T=A===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:M,maxSamples:b}}function sv(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Jn,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let E=s?0:n,S=E*4,v=p.clippingState||null;l.value=v,v=u(g,f,S,d);for(let M=0;M!==S;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function av(i){let e=new WeakMap;function t(a,o){return o===jr?a.mapping=ur:o===Mo&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jr||o===Mo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var as=4,zd=[.125,.215,.35,.446,.526,.582],vr=20,Vc=new lr,Nd=new Te,Gc=null,Wc=0,qc=0,Xc=!1,gr=(1+Math.sqrt(5))/2,ss=1/gr,Ud=[new N(-gr,ss,0),new N(gr,ss,0),new N(-ss,0,gr),new N(ss,0,gr),new N(0,gr,-ss),new N(0,gr,ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ov=new N,ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=ov}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,qc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:gn,format:Pn,colorSpace:Xt,depthBuffer:!1},r=Fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lv(s)),this._blurMaterial=cv(s,e,t)}return r}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,r,s){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Nd),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new qn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new xt(new Ni,x),p=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,p=!0):(x.color.copy(Nd),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let M=this._cubeSize;sl(r,v*M,S>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ur||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ud[(r-s-1)%Ud.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new xt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);let p=[],E=0;for(let A=0;A<vr;++A){let T=A/x,y=Math.exp(-T*T/2);p.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let v=this._sizeLods[r],M=3*v*(r>S-as?r-S+as:0),b=4*(this._cubeSize-v);sl(t,M,b,3*v,2*v),l.setRenderTarget(t),l.render(h,Vc)}};function lv(i){let e=[],t=[],n=[],r=i,s=i-as+1+zd.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>i-as?l=zd[a-i+as-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){let A=b%3*2/3-1,T=b>2?0:-1,y=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];E.set(y,x*g*b),S.set(f,m*g*b);let _=[b,b,b,b,b,b];v.set(_,p*g*b)}let M=new wt;M.setAttribute("position",new Lt(E,x)),M.setAttribute("uv",new Lt(S,m)),M.setAttribute("faceIndex",new Lt(v,p)),e.push(M),r>as&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fd(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cv(i,e,t){let n=new Float32Array(vr),r=new N(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Od(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bd(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===jr||l===Mo,u=l===ur||l===hr;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ol(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ol(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dv(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let S=0,v=E.length;S<v;S+=3){let M=E[S+0],b=E[S+1],A=E[S+2];f.push(M,b,b,A,A,M)}}else if(g!==void 0){let E=g.array;x=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){let M=S+0,b=S+1,A=S+2;f.push(M,b,b,A,A,M)}}else return;let m=new(Uc(f)?Us:Ns)(f,1);m.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function fv(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*x[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mv(i,e,t){let n=new WeakMap,r=new Et;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*M*4*h),A=new Ds(b,v,M,h);A.type=on,A.needsUpdate=!0;let T=S*4;for(let _=0;_<h;_++){let R=m[_],z=p[_],H=E[_],D=v*M*4*_;for(let B=0;B<R.count;B++){let G=B*T;d===!0&&(r.fromBufferAttribute(R,B),b[D+G+0]=r.x,b[D+G+1]=r.y,b[D+G+2]=r.z,b[D+G+3]=0),g===!0&&(r.fromBufferAttribute(z,B),b[D+G+4]=r.x,b[D+G+5]=r.y,b[D+G+6]=r.z,b[D+G+7]=0),x===!0&&(r.fromBufferAttribute(H,B),b[D+G+8]=r.x,b[D+G+9]=r.y,b[D+G+10]=r.z,b[D+G+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new we(v,M)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function gv(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var sf=new $t,Hd=new Gs(1,1),af=new Ds,of=new kr,lf=new Os,kd=[],Vd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),qd=new Float32Array(4);function cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=kd[r];if(s===void 0&&(s=new Float32Array(r),kd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ll(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;qd.set(n),i.uniformMatrix2fv(this.addr,!1,qd),Zt(t,n)}}function bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Zt(t,n)}}function Sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),Zt(t,n)}}function Ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hd.compareFunction=zc,s=Hd):s=sf,t.setTexture2D(e||s,r)}function Dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||of,r)}function zv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lf,r)}function Nv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||af,r)}function Uv(i){switch(i){case 5126:return vv;case 35664:return yv;case 35665:return _v;case 35666:return xv;case 35674:return Mv;case 35675:return bv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(i,e){i.uniform1fv(this.addr,e)}function Ov(i,e){let t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){let t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function Hv(i,e){let t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function kv(i,e){let t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vv(i,e){let t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){let t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wv(i,e){i.uniform1iv(this.addr,e)}function qv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function $v(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function Kv(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function jv(i,e,t){let n=this.cache,r=e.length,s=ll(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sf,s[a])}function Qv(i,e,t){let n=this.cache,r=e.length,s=ll(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||of,s[a])}function ey(i,e,t){let n=this.cache,r=e.length,s=ll(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||lf,s[a])}function ty(i,e,t){let n=this.cache,r=e.length,s=ll(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||af,s[a])}function ny(i){switch(i){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return Hv;case 35674:return kv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return qv;case 35668:case 35672:return Xv;case 35669:case 35673:return $v;case 5125:return Yv;case 36294:return Zv;case 36295:return Kv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function Xd(i,e){i.seq.push(e),i.map[e.id]=e}function iy(i,e,t){let n=i.name,r=n.length;for($c.lastIndex=0;;){let s=$c.exec(n),a=$c.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xd(t,c===void 0?new Yc(o,i,e):new Zc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Kc(o),Xd(t,h)),t=h}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);iy(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ry=37297,sy=0;function ay(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yd=new ht;function oy(i){yt._getMatrix(Yd,yt.workingColorSpace,i);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ay(i.getShaderSource(e),o)}else return s}function ly(i,e){let t=oy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cy(i,e){let t;switch(e){case ud:t="Linear";break;case hd:t="Reinhard";break;case dd:t="Cineon";break;case Jr:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var al=new N;function uy(){yt.getLuminanceCoefficients(al);let i=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function dy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function Kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(py,gy)}var my=new Map;function gy(i,e){let t=st[e];if(t===void 0){let n=my.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(vy,yy)}function yy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case hr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function My(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hr&&(e="ENVMAP_MODE_REFRACTION"),e}function by(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function Sy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ey(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_y(t),c=xy(t),u=My(t),h=by(t),f=Sy(t),d=hy(t),g=dy(s),x=r.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?st.tonemapping_pars_fragment:"",t.toneMapping!==Si?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ly("linearToOutputTexel",t.outputColorSpace),uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=Jc(a),a=Kd(a,t),a=Jd(a,t),o=Jc(o),o=Kd(o,t),o=Jd(o,t),a=jd(a),o=jd(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=E+m+a,v=E+p+o,M=$d(r,r.VERTEX_SHADER,S),b=$d(r,r.FRAGMENT_SHADER,v);r.attachShader(x,M),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(M)||"",D=r.getShaderInfoLog(b)||"",B=z.trim(),G=H.trim(),te=D.trim(),F=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,b);else{let Z=Zd(r,M,"vertex"),ne=Zd(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Z+`
`+ne)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||te==="")&&(W=!1);W&&(R.diagnostics={runnable:F,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(M),r.deleteShader(b),T=new os(r,x),y=fy(r,x)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,ry)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=b,this}var Ty=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qc(e),t.set(e,n)),n}},Qc=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};function wy(i,e,t,n,r,s,a){let o=new zs,l=new jc,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,_,R,z,H){let D=z.fog,B=H.geometry,G=y.isMeshStandardMaterial?z.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),F=te&&te.mapping===na?te.image.height:null,W=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Z!==void 0?Z.length:0,le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let ve,be,He,j;if(W){let Se=ri[W];ve=Se.vertexShader,be=Se.fragmentShader}else ve=y.vertexShader,be=y.fragmentShader,l.update(y),He=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);let se=i.getRenderTarget(),k=i.state.buffers.depth.getReversed(),oe=H.isInstancedMesh===!0,Q=H.isBatchedMesh===!0,ce=!!y.map,Je=!!y.matcap,U=!!te,Ge=!!y.aoMap,We=!!y.lightMap,Ce=!!y.bumpMap,Ie=!!y.normalMap,lt=!!y.displacementMap,Le=!!y.emissiveMap,ke=!!y.metalnessMap,Qe=!!y.roughnessMap,je=y.anisotropy>0,L=y.clearcoat>0,w=y.dispersion>0,X=y.iridescence>0,ee=y.sheen>0,ae=y.transmission>0,K=je&&!!y.anisotropyMap,Fe=L&&!!y.clearcoatMap,pe=L&&!!y.clearcoatNormalMap,ze=L&&!!y.clearcoatRoughnessMap,Ve=X&&!!y.iridescenceMap,de=X&&!!y.iridescenceThicknessMap,Me=ee&&!!y.sheenColorMap,Ke=ee&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,xe=!!y.specularColorMap,et=!!y.specularIntensityMap,q=ae&&!!y.transmissionMap,ye=ae&&!!y.thicknessMap,ue=!!y.gradientMap,De=!!y.alphaMap,fe=y.alphaTest>0,I=!!y.alphaHash,O=!!y.extensions,ie=Si;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=i.toneMapping);let me={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:ve,fragmentShader:be,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Q,batchingColor:Q&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xt,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:Je,envMap:U,envMapMode:U&&te.mapping,envMapCubeUVHeight:F,aoMap:Ge,lightMap:We,bumpMap:Ce,normalMap:Ie,displacementMap:f&&lt,emissiveMap:Le,normalMapObjectSpace:Ie&&y.normalMapType===xd,normalMapTangentSpace:Ie&&y.normalMapType===Dc,metalnessMap:ke,roughnessMap:Qe,anisotropy:je,anisotropyMap:K,clearcoat:L,clearcoatMap:Fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:ze,dispersion:w,iridescence:X,iridescenceMap:Ve,iridescenceThicknessMap:de,sheen:ee,sheenColorMap:Me,sheenRoughnessMap:Ke,specularMap:Oe,specularColorMap:xe,specularIntensityMap:et,transmission:ae,transmissionMap:q,thicknessMap:ye,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:fe,alphaHash:I,combine:y.combine,mapUv:ce&&x(y.map.channel),aoMapUv:Ge&&x(y.aoMap.channel),lightMapUv:We&&x(y.lightMap.channel),bumpMapUv:Ce&&x(y.bumpMap.channel),normalMapUv:Ie&&x(y.normalMap.channel),displacementMapUv:lt&&x(y.displacementMap.channel),emissiveMapUv:Le&&x(y.emissiveMap.channel),metalnessMapUv:ke&&x(y.metalnessMap.channel),roughnessMapUv:Qe&&x(y.roughnessMap.channel),anisotropyMapUv:K&&x(y.anisotropyMap.channel),clearcoatMapUv:Fe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&x(y.sheenRoughnessMap.channel),specularMapUv:Oe&&x(y.specularMap.channel),specularColorMapUv:xe&&x(y.specularColorMap.channel),specularIntensityMapUv:et&&x(y.specularIntensityMap.channel),transmissionMapUv:q&&x(y.transmissionMap.channel),thicknessMapUv:ye&&x(y.thicknessMap.channel),alphaMapUv:De&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ie||je),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(ce||De),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:k,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===It,decodeVideoTextureEmissive:Le&&y.emissiveMap.isVideoTexture===!0&&yt.getTransfer(y.emissiveMap.colorSpace)===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:O&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O&&y.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)_.push(R),_.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(_,y),S(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function E(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function S(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let _=g[y.type],R;if(_){let z=ri[_];R=Pd.clone(z.uniforms)}else R=y.uniforms;return R}function M(y,_){let R;for(let z=0,H=u.length;z<H;z++){let D=u[z];if(D.cacheKey===_){R=D,++R.usedTimes;break}}return R===void 0&&(R=new Ey(i,_,y,s),u.push(R)),R}function b(y){if(--y.usedTimes===0){let _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:T}}function Ay(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,f,d,g,x,m){let p=a(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=a(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Ry),n.length>1&&n.sort(f||ef),r.length>1&&r.sort(f||ef)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Cy(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new tf,i.set(n,[a])):r>=s.length?(a=new tf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Iy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ly=0;function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zy(i){let e=new Iy,t=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let r=new N,s=new ut,a=new ut;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,E=0,S=0,v=0,M=0,b=0,A=0;c.sort(Dy);for(let y=0,_=c.length;y<_;y++){let R=c[y],z=R.color,H=R.intensity,D=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*H,h+=z.g*H,f+=z.b*H;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],H);A++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,F=t.get(R);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=R.shadow.matrix,E++}n.directional[d]=G,d++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(z).multiplyScalar(H),G.distance=D,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;let te=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,te.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=te.matrix,R.castShadow){let F=t.get(R);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=B,v++}x++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(z).multiplyScalar(H),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let te=R.shadow,F=t.get(R);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,F.shadowCameraNear=te.camera.near,F.shadowCameraFar=te.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=G,g++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(H),G.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==E||T.numPointShadows!==S||T.numSpotShadows!==v||T.numSpotMaps!==M||T.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=E,T.numPointShadows=S,T.numSpotShadows=v,T.numSpotMaps=M,T.numLightProbes=A,n.version=Ly++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let S=c[p];if(S.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(S.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function nf(i){let e=new zy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ny(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new nf(i),e.set(r,[o])):s>=a.length?(o=new nf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(i,e,t){let n=new Xr,r=new we,s=new we,a=new Et,o=new ro({depthPacking:_d}),l=new so,c={},u=t.maxTextureSize,h={[fn]:nn,[nn]:fn,[kt]:kt},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(b,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=p!==ii&&this.type===ii,D=p===ii&&this.type!==ii;for(let B=0,G=b.length;B<G;B++){let te=b[B],F=te.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let W=F.getFrameExtents();if(r.multiply(W),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,F.mapSize.y=s.y)),F.map===null||H===!0||D===!0){let ne=this.type!==ii?{minFilter:tn,magFilter:tn}:{};F.map!==null&&F.map.dispose(),F.map=new _n(r.x,r.y,ne),F.map.texture.name=te.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let Z=F.getViewportCount();for(let ne=0;ne<Z;ne++){let le=F.getViewport(ne);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),z.viewport(a),F.updateMatrices(te,ne),n=F.getFrustum(),v(A,T,F.camera,te,this.type)}F.isPointLightShadow!==!0&&this.type===ii&&E(F,T),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,_,R)};function E(b,A){let T=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _n(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,T,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,T,d,x,null)}function S(b,A,T,y){let _=null,R=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)_=R;else if(_=T.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let z=_.uuid,H=A.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let B=D[H];B===void 0&&(B=_.clone(),D[H]=B,A.addEventListener("dispose",M)),_=B}if(_.visible=A.visible,_.wireframe=A.wireframe,y===ii?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=i.properties.get(_);z.light=T}return _}function v(b,A,T,y,_){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===ii)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let H=e.update(b),D=b.material;if(Array.isArray(D)){let B=H.groups;for(let G=0,te=B.length;G<te;G++){let F=B[G],W=D[F.materialIndex];if(W&&W.visible){let Z=S(b,W,y,_);b.onBeforeShadow(i,b,A,T,H,Z,F),i.renderBufferDirect(T,null,H,Z,b,F),b.onAfterShadow(i,b,A,T,H,Z,F)}}}else if(D.visible){let B=S(b,D,y,_);b.onBeforeShadow(i,b,A,T,H,B,null),i.renderBufferDirect(T,null,H,B,b,null),b.onAfterShadow(i,b,A,T,H,B,null)}}let z=b.children;for(let H=0,D=z.length;H<D;H++)v(z[H],A,T,y,_)}function M(b){b.target.removeEventListener("dispose",M);for(let T in c){let y=c[T],_=b.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var By={[po]:mo,[go]:_o,[vo]:xo,[$i]:yo,[mo]:po,[_o]:go,[xo]:vo,[yo]:$i};function Hy(i,e){function t(){let q=!1,ye=new Et,ue=null,De=new Et(0,0,0,0);return{setMask:function(fe){ue!==fe&&!q&&(i.colorMask(fe,fe,fe,fe),ue=fe)},setLocked:function(fe){q=fe},setClear:function(fe,I,O,ie,me){me===!0&&(fe*=ie,I*=ie,O*=ie),ye.set(fe,I,O,ie),De.equals(ye)===!1&&(i.clearColor(fe,I,O,ie),De.copy(ye))},reset:function(){q=!1,ue=null,De.set(-1,0,0,0)}}}function n(){let q=!1,ye=!1,ue=null,De=null,fe=null;return{setReversed:function(I){if(ye!==I){let O=e.get("EXT_clip_control");I?O.clipControlEXT(O.LOWER_LEFT_EXT,O.ZERO_TO_ONE_EXT):O.clipControlEXT(O.LOWER_LEFT_EXT,O.NEGATIVE_ONE_TO_ONE_EXT),ye=I;let ie=fe;fe=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(I){I?se(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(I){ue!==I&&!q&&(i.depthMask(I),ue=I)},setFunc:function(I){if(ye&&(I=By[I]),De!==I){switch(I){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=I}},setLocked:function(I){q=I},setClear:function(I){fe!==I&&(ye&&(I=1-I),i.clearDepth(I),fe=I)},reset:function(){q=!1,ue=null,De=null,fe=null,ye=!1}}}function r(){let q=!1,ye=null,ue=null,De=null,fe=null,I=null,O=null,ie=null,me=null;return{setTest:function(Se){q||(Se?se(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(Se){ye!==Se&&!q&&(i.stencilMask(Se),ye=Se)},setFunc:function(Se,Xe,_e){(ue!==Se||De!==Xe||fe!==_e)&&(i.stencilFunc(Se,Xe,_e),ue=Se,De=Xe,fe=_e)},setOp:function(Se,Xe,_e){(I!==Se||O!==Xe||ie!==_e)&&(i.stencilOp(Se,Xe,_e),I=Se,O=Xe,ie=_e)},setLocked:function(Se){q=Se},setClear:function(Se){me!==Se&&(i.clearStencil(Se),me=Se)},reset:function(){q=!1,ye=null,ue=null,De=null,fe=null,I=null,O=null,ie=null,me=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,S=null,v=null,M=null,b=null,A=new Te(0,0,0),T=0,y=!1,_=null,R=null,z=null,H=null,D=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=te>=1):F.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=te>=2);let W=null,Z={},ne=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ve=new Et().fromArray(ne),be=new Et().fromArray(le);function He(q,ye,ue,De){let fe=new Uint8Array(4),I=i.createTexture();i.bindTexture(q,I),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let O=0;O<ue;O++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ye+O,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return I}let j={};j[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc($i),Ce(!1),Ie(yc),se(i.CULL_FACE),Ge(bi);function se(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function k(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function oe(q,ye){return h[q]!==ye?(i.bindFramebuffer(q,ye),h[q]=ye,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Q(q,ye){let ue=d,De=!1;if(q){ue=f.get(ye),ue===void 0&&(ue=[],f.set(ye,ue));let fe=q.textures;if(ue.length!==fe.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let I=0,O=fe.length;I<O;I++)ue[I]=i.COLOR_ATTACHMENT0+I;ue.length=fe.length,De=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,De=!0);De&&i.drawBuffers(ue)}function ce(q){return g!==q?(i.useProgram(q),g=q,!0):!1}let Je={[Li]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Xh]:i.FUNC_REVERSE_SUBTRACT};Je[$h]=i.MIN,Je[Yh]=i.MAX;let U={[Zh]:i.ZERO,[Kh]:i.ONE,[Jh]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[ed]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(q,ye,ue,De,fe,I,O,ie,me,Se){if(q===bi){x===!0&&(k(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),q!==Wh){if(q!==m||Se!==y){if((p!==Li||v!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,v=Li),Se)switch(q){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}E=null,S=null,M=null,b=null,A.set(0,0,0),T=0,m=q,y=Se}return}fe=fe||ye,I=I||ue,O=O||De,(ye!==p||fe!==v)&&(i.blendEquationSeparate(Je[ye],Je[fe]),p=ye,v=fe),(ue!==E||De!==S||I!==M||O!==b)&&(i.blendFuncSeparate(U[ue],U[De],U[I],U[O]),E=ue,S=De,M=I,b=O),(ie.equals(A)===!1||me!==T)&&(i.blendColor(ie.r,ie.g,ie.b,me),A.copy(ie),T=me),m=q,y=!1}function We(q,ye){q.side===kt?k(i.CULL_FACE):se(i.CULL_FACE);let ue=q.side===nn;ye&&(ue=!ue),Ce(ue),q.blending===Xi&&q.transparent===!1?Ge(bi):Ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let De=q.stencilWrite;o.setTest(De),De&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Le(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(q){_!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),_=q)}function Ie(q){q!==Vh?(se(i.CULL_FACE),q!==R&&(q===yc?i.cullFace(i.BACK):q===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),R=q}function lt(q){q!==z&&(G&&i.lineWidth(q),z=q)}function Le(q,ye,ue){q?(se(i.POLYGON_OFFSET_FILL),(H!==ye||D!==ue)&&(i.polygonOffset(ye,ue),H=ye,D=ue)):k(i.POLYGON_OFFSET_FILL)}function ke(q){q?se(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function Qe(q){q===void 0&&(q=i.TEXTURE0+B-1),W!==q&&(i.activeTexture(q),W=q)}function je(q,ye,ue){ue===void 0&&(W===null?ue=i.TEXTURE0+B-1:ue=W);let De=Z[ue];De===void 0&&(De={type:void 0,texture:void 0},Z[ue]=De),(De.type!==q||De.texture!==ye)&&(W!==ue&&(i.activeTexture(ue),W=ue),i.bindTexture(q,ye||j[q]),De.type=q,De.texture=ye)}function L(){let q=Z[W];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ve(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(q){ve.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function Ke(q){be.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),be.copy(q))}function Oe(q,ye){let ue=c.get(ye);ue===void 0&&(ue=new WeakMap,c.set(ye,ue));let De=ue.get(q);De===void 0&&(De=i.getUniformBlockIndex(ye,q.name),ue.set(q,De))}function xe(q,ye){let De=c.get(ye).get(q);l.get(ye)!==De&&(i.uniformBlockBinding(ye,De,q.__bindingPointIndex),l.set(ye,De))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,Z={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,S=null,v=null,M=null,b=null,A=new Te(0,0,0),T=0,y=!1,_=null,R=null,z=null,H=null,D=null,ve.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:k,bindFramebuffer:oe,drawBuffers:Q,useProgram:ce,setBlending:Ge,setMaterial:We,setFlipSided:Ce,setCullFace:Ie,setLineWidth:lt,setPolygonOffset:Le,setScissorTest:ke,activeTexture:Qe,bindTexture:je,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:Ve,texImage3D:de,updateUBOMapping:Oe,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:ze,texSubImage2D:ee,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:Fe,scissor:Me,viewport:Ke,reset:et}}function ky(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return d?new OffscreenCanvas(L,w):Or("canvas")}function x(L,w,X){let ee=1,ae=je(L);if((ae.width>X||ae.height>X)&&(ee=X/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let K=Math.floor(ee*ae.width),Fe=Math.floor(ee*ae.height);h===void 0&&(h=g(K,Fe));let pe=w?g(K,Fe):h;return pe.width=K,pe.height=Fe,pe.getContext("2d").drawImage(L,0,0,K,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+Fe+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,w,X,ee,ae=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=w;if(w===i.RED&&(X===i.FLOAT&&(K=i.R32F),X===i.HALF_FLOAT&&(K=i.R16F),X===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.R8UI),X===i.UNSIGNED_SHORT&&(K=i.R16UI),X===i.UNSIGNED_INT&&(K=i.R32UI),X===i.BYTE&&(K=i.R8I),X===i.SHORT&&(K=i.R16I),X===i.INT&&(K=i.R32I)),w===i.RG&&(X===i.FLOAT&&(K=i.RG32F),X===i.HALF_FLOAT&&(K=i.RG16F),X===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RG8UI),X===i.UNSIGNED_SHORT&&(K=i.RG16UI),X===i.UNSIGNED_INT&&(K=i.RG32UI),X===i.BYTE&&(K=i.RG8I),X===i.SHORT&&(K=i.RG16I),X===i.INT&&(K=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGB8UI),X===i.UNSIGNED_SHORT&&(K=i.RGB16UI),X===i.UNSIGNED_INT&&(K=i.RGB32UI),X===i.BYTE&&(K=i.RGB8I),X===i.SHORT&&(K=i.RGB16I),X===i.INT&&(K=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),X===i.UNSIGNED_INT&&(K=i.RGBA32UI),X===i.BYTE&&(K=i.RGBA8I),X===i.SHORT&&(K=i.RGBA16I),X===i.INT&&(K=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),w===i.RGBA){let Fe=ae?Ps:yt.getTransfer(ee);X===i.FLOAT&&(K=i.RGBA32F),X===i.HALF_FLOAT&&(K=i.RGBA16F),X===i.UNSIGNED_BYTE&&(K=Fe===It?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(L,w){let X;return L?w===null||w===Ui||w===ts?X=i.DEPTH24_STENCIL8:w===on?X=i.DEPTH32F_STENCIL8:w===es&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===ts?X=i.DEPTH_COMPONENT24:w===on?X=i.DEPTH_COMPONENT32F:w===es&&(X=i.DEPTH_COMPONENT16),X}function M(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==tn&&L.minFilter!==ft?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function b(L){let w=L.target;w.removeEventListener("dispose",b),T(w),w.isVideoTexture&&u.delete(w)}function A(L){let w=L.target;w.removeEventListener("dispose",A),_(w)}function T(L){let w=n.get(L);if(w.__webglInit===void 0)return;let X=L.source,ee=f.get(X);if(ee){let ae=ee[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(L),Object.keys(ee).length===0&&f.delete(X)}n.remove(L)}function y(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let X=L.source,ee=f.get(X);delete ee[w.__cacheKey],a.memory.textures--}function _(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ae=0;ae<w.__webglFramebuffer[ee].length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ee][ae]);else i.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)i.deleteFramebuffer(w.__webglFramebuffer[ee]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=L.textures;for(let ee=0,ae=X.length;ee<ae;ee++){let K=n.get(X[ee]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(X[ee])}n.remove(L)}let R=0;function z(){R=0}function H(){let L=R;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),R+=1,L}function D(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function B(L,w){let X=n.get(L);if(L.isVideoTexture&&ke(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,L,w);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function G(L,w){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){j(X,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function te(L,w){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){j(X,L,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function F(L,w){let X=n.get(L);if(L.version>0&&X.__version!==L.version){se(X,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let W={[en]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Di]:i.MIRRORED_REPEAT},Z={[tn]:i.NEAREST,[bo]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[ft]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},ne={[Md]:i.NEVER,[Ad]:i.ALWAYS,[bd]:i.LESS,[zc]:i.LEQUAL,[Sd]:i.EQUAL,[wd]:i.GEQUAL,[Ed]:i.GREATER,[Td]:i.NOTEQUAL};function le(L,w){if(w.type===on&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ft||w.magFilter===Qr||w.magFilter===dr||w.magFilter===rn||w.minFilter===ft||w.minFilter===Qr||w.minFilter===dr||w.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,W[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,W[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,W[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Z[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===tn||w.minFilter!==dr&&w.minFilter!==rn||w.type===on&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ve(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",b));let ee=w.source,ae=f.get(ee);ae===void 0&&(ae={},f.set(ee,ae));let K=D(w);if(K!==L.__cacheKey){ae[K]===void 0&&(ae[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[K].usedTimes++;let Fe=ae[L.__cacheKey];Fe!==void 0&&(ae[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&y(w)),L.__cacheKey=K,L.__webglTexture=ae[K].texture}return X}function be(L,w,X){return Math.floor(Math.floor(L/X)/w)}function He(L,w,X,ee){let K=L.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,ee,w.data);else{K.sort((de,Me)=>de.start-Me.start);let Fe=0;for(let de=1;de<K.length;de++){let Me=K[Fe],Ke=K[de],Oe=Me.start+Me.count,xe=be(Ke.start,w.width,4),et=be(Me.start,w.width,4);Ke.start<=Oe+1&&xe===et&&be(Ke.start+Ke.count-1,w.width,4)===xe?Me.count=Math.max(Me.count,Ke.start+Ke.count-Me.start):(++Fe,K[Fe]=Ke)}K.length=Fe+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let de=0,Me=K.length;de<Me;de++){let Ke=K[de],Oe=Math.floor(Ke.start/4),xe=Math.ceil(Ke.count/4),et=Oe%w.width,q=Math.floor(Oe/w.width),ye=xe,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,et,q,ye,ue,X,ee,w.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ve)}}function j(L,w,X){let ee=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=i.TEXTURE_3D);let ae=ve(L,w),K=w.source;t.bindTexture(ee,L.__webglTexture,i.TEXTURE0+X);let Fe=n.get(K);if(K.version!==Fe.__version||ae===!0){t.activeTexture(i.TEXTURE0+X);let pe=yt.getPrimaries(yt.workingColorSpace),ze=w.colorSpace===Ei?null:yt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Ei||pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let de=x(w.image,!1,r.maxTextureSize);de=Qe(w,de);let Me=s.convert(w.format,w.colorSpace),Ke=s.convert(w.type),Oe=S(w.internalFormat,Me,Ke,w.colorSpace,w.isVideoTexture);le(ee,w);let xe,et=w.mipmaps,q=w.isVideoTexture!==!0,ye=Fe.__version===void 0||ae===!0,ue=K.dataReady,De=M(w,de);if(w.isDepthTexture)Oe=v(w.format===ns,w.type),ye&&(q?t.texStorage2D(i.TEXTURE_2D,1,Oe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Me,Ke,null));else if(w.isDataTexture)if(et.length>0){q&&ye&&t.texStorage2D(i.TEXTURE_2D,De,Oe,et[0].width,et[0].height);for(let fe=0,I=et.length;fe<I;fe++)xe=et[fe],q?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ke,xe.data):t.texImage2D(i.TEXTURE_2D,fe,Oe,xe.width,xe.height,0,Me,Ke,xe.data);w.generateMipmaps=!1}else q?(ye&&t.texStorage2D(i.TEXTURE_2D,De,Oe,de.width,de.height),ue&&He(w,de,Me,Ke)):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Me,Ke,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){q&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,et[0].width,et[0].height,de.depth);for(let fe=0,I=et.length;fe<I;fe++)if(xe=et[fe],w.format!==Pn)if(Me!==null)if(q){if(ue)if(w.layerUpdates.size>0){let O=kc(xe.width,xe.height,w.format,w.type);for(let ie of w.layerUpdates){let me=xe.data.subarray(ie*O/xe.data.BYTES_PER_ELEMENT,(ie+1)*O/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,ie,xe.width,xe.height,1,Me,me)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Oe,xe.width,xe.height,de.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,Ke,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Oe,xe.width,xe.height,de.depth,0,Me,Ke,xe.data)}else{q&&ye&&t.texStorage2D(i.TEXTURE_2D,De,Oe,et[0].width,et[0].height);for(let fe=0,I=et.length;fe<I;fe++)xe=et[fe],w.format!==Pn?Me!==null?q?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ke,xe.data):t.texImage2D(i.TEXTURE_2D,fe,Oe,xe.width,xe.height,0,Me,Ke,xe.data)}else if(w.isDataArrayTexture)if(q){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,de.width,de.height,de.depth),ue)if(w.layerUpdates.size>0){let fe=kc(de.width,de.height,w.format,w.type);for(let I of w.layerUpdates){let O=de.data.subarray(I*fe/de.data.BYTES_PER_ELEMENT,(I+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,de.width,de.height,1,Me,Ke,O)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Ke,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Me,Ke,de.data);else if(w.isData3DTexture)q?(ye&&t.texStorage3D(i.TEXTURE_3D,De,Oe,de.width,de.height,de.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Ke,de.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Me,Ke,de.data);else if(w.isFramebufferTexture){if(ye)if(q)t.texStorage2D(i.TEXTURE_2D,De,Oe,de.width,de.height);else{let fe=de.width,I=de.height;for(let O=0;O<De;O++)t.texImage2D(i.TEXTURE_2D,O,Oe,fe,I,0,Me,Ke,null),fe>>=1,I>>=1}}else if(et.length>0){if(q&&ye){let fe=je(et[0]);t.texStorage2D(i.TEXTURE_2D,De,Oe,fe.width,fe.height)}for(let fe=0,I=et.length;fe<I;fe++)xe=et[fe],q?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me,Ke,xe):t.texImage2D(i.TEXTURE_2D,fe,Oe,Me,Ke,xe);w.generateMipmaps=!1}else if(q){if(ye){let fe=je(de);t.texStorage2D(i.TEXTURE_2D,De,Oe,fe.width,fe.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ke,de)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,Ke,de);m(w)&&p(ee),Fe.__version=K.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function se(L,w,X){if(w.image.length!==6)return;let ee=ve(L,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);let K=n.get(ae);if(ae.version!==K.__version||ee===!0){t.activeTexture(i.TEXTURE0+X);let Fe=yt.getPrimaries(yt.workingColorSpace),pe=w.colorSpace===Ei?null:yt.getPrimaries(w.colorSpace),ze=w.colorSpace===Ei||Fe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Ve=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let I=0;I<6;I++)!Ve&&!de?Me[I]=x(w.image[I],!0,r.maxCubemapSize):Me[I]=de?w.image[I].image:w.image[I],Me[I]=Qe(w,Me[I]);let Ke=Me[0],Oe=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),et=S(w.internalFormat,Oe,xe,w.colorSpace),q=w.isVideoTexture!==!0,ye=K.__version===void 0||ee===!0,ue=ae.dataReady,De=M(w,Ke);le(i.TEXTURE_CUBE_MAP,w);let fe;if(Ve){q&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,Ke.width,Ke.height);for(let I=0;I<6;I++){fe=Me[I].mipmaps;for(let O=0;O<fe.length;O++){let ie=fe[O];w.format!==Pn?Oe!==null?q?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O,0,0,ie.width,ie.height,Oe,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O,et,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O,0,0,ie.width,ie.height,Oe,xe,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O,et,ie.width,ie.height,0,Oe,xe,ie.data)}}}else{if(fe=w.mipmaps,q&&ye){fe.length>0&&De++;let I=je(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,I.width,I.height)}for(let I=0;I<6;I++)if(de){q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Me[I].width,Me[I].height,Oe,xe,Me[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,et,Me[I].width,Me[I].height,0,Oe,xe,Me[I].data);for(let O=0;O<fe.length;O++){let me=fe[O].image[I].image;q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O+1,0,0,me.width,me.height,Oe,xe,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O+1,et,me.width,me.height,0,Oe,xe,me.data)}}else{q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Oe,xe,Me[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,et,Oe,xe,Me[I]);for(let O=0;O<fe.length;O++){let ie=fe[O];q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O+1,0,0,Oe,xe,ie.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,O+1,et,Oe,xe,ie.image[I])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),K.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function k(L,w,X,ee,ae,K){let Fe=s.convert(X.format,X.colorSpace),pe=s.convert(X.type),ze=S(X.internalFormat,Fe,pe,X.colorSpace),Ve=n.get(w),de=n.get(X);if(de.__renderTarget=w,!Ve.__hasExternalTextures){let Me=Math.max(1,w.width>>K),Ke=Math.max(1,w.height>>K);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,K,ze,Me,Ke,w.depth,0,Fe,pe,null):t.texImage2D(ae,K,ze,Me,Ke,0,Fe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ae,de.__webglTexture,0,lt(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ae,de.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let ee=w.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,K=v(w.stencilBuffer,ae),Fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=lt(w);Le(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,K,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,L)}else{let ee=w.textures;for(let ae=0;ae<ee.length;ae++){let K=ee[ae],Fe=s.convert(K.format,K.colorSpace),pe=s.convert(K.type),ze=S(K.internalFormat,Fe,pe,K.colorSpace),Ve=lt(w);X&&Le(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,ze,w.width,w.height):Le(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,ze,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ze,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);let ae=ee.__webglTexture,K=lt(w);if(w.depthTexture.format===Fr)Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(w.depthTexture.format===ns)Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ce(L){let w=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let ee=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ee}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let ee=L.texture.mipmaps;ee&&ee.length>0?Q(w.__webglFramebuffer[0],L):Q(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[ee],L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,K)}}else{let ee=L.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(L,w,X){let ee=n.get(L);w!==void 0&&k(ee.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ce(L)}function U(L){let w=L.texture,X=n.get(L),ee=n.get(w);L.addEventListener("dispose",A);let ae=L.textures,K=L.isWebGLCubeRenderTarget===!0,Fe=ae.length>1;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=w.version,a.memory.textures++),K){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let ze=0;ze<w.mipmaps.length;ze++)X.__webglFramebuffer[pe][ze]=i.createFramebuffer()}else X.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)X.__webglFramebuffer[pe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let pe=0,ze=ae.length;pe<ze;pe++){let Ve=n.get(ae[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Le(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){let ze=ae[pe];X.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[pe]);let Ve=s.convert(ze.format,ze.colorSpace),de=s.convert(ze.type),Me=S(ze.internalFormat,Ve,de,ze.colorSpace,L.isXRRenderTarget===!0),Ke=lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,X.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),le(i.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)k(X.__webglFramebuffer[pe][ze],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze);else k(X.__webglFramebuffer[pe],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let pe=0,ze=ae.length;pe<ze;pe++){let Ve=ae[pe],de=n.get(Ve),Me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,de.__webglTexture),le(Me,Ve),k(X.__webglFramebuffer,L,Ve,i.COLOR_ATTACHMENT0+pe,Me,0),m(Ve)&&p(Me)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),le(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)k(X.__webglFramebuffer[ze],L,w,i.COLOR_ATTACHMENT0,pe,ze);else k(X.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,pe,0);m(w)&&p(pe),t.unbindTexture()}L.depthBuffer&&ce(L)}function Ge(L){let w=L.textures;for(let X=0,ee=w.length;X<ee;X++){let ae=w[X];if(m(ae)){let K=E(L),Fe=n.get(ae).__webglTexture;t.bindTexture(K,Fe),p(K),t.unbindTexture()}}}let We=[],Ce=[];function Ie(L){if(L.samples>0){if(Le(L)===!1){let w=L.textures,X=L.width,ee=L.height,ae=i.COLOR_BUFFER_BIT,K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(L),pe=w.length>1;if(pe)for(let Ve=0;Ve<w.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);let ze=L.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ve=0;Ve<w.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ve]);let de=n.get(w[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,X,ee,0,0,X,ee,ae,i.NEAREST),l===!0&&(We.length=0,Ce.length=0,We.push(i.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(We.push(K),Ce.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<w.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ve]);let de=n.get(w[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function lt(L){return Math.min(r.maxSamples,L.samples)}function Le(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(L){let w=a.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Qe(L,w){let X=L.colorSpace,ee=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Xt&&X!==Ei&&(yt.getTransfer(X)===It?(ee!==Pn||ae!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=te,this.setTextureCube=F,this.rebindTextures=Je,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Le}function Vy(i,e){function t(n,r=Ei){let s,a=yt.getTransfer(r);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===To)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===wc)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===Pn)return i.RGBA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===is)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===Pc)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===ia||n===ra||n===sa||n===aa)if(a===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Io||n===Po||n===Lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===zo||n===No)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Do||n===zo)return a===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===No)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo||n===Ho||n===ko||n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===$o||n===Yo||n===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Jo||n===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ko)return a===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends gi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new eu,p={},E=t.getContextAttributes(),S=null,v=null,M=[],b=[],A=new we,T=null,y=new Bt;y.viewport=new Et;let _=new Bt;_.viewport=new Et;let R=[y,_],z=new fo,H=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=M[j];return se===void 0&&(se=new Vr,M[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=M[j];return se===void 0&&(se=new Vr,M[j]=se),se.getGripSpace()},this.getHand=function(j){let se=M[j];return se===void 0&&(se=new Vr,M[j]=se),se.getHandSpace()};function B(j){let se=b.indexOf(j.inputSource);if(se===-1)return;let k=M[se];k!==void 0&&(k.update(j.inputSource,j.frame,c||a),k.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",te);for(let j=0;j<M.length;j++){let se=b[j];se!==null&&(b[j]=null,M[j].disconnect(se))}H=null,D=null,m.reset();for(let j in p)delete p[j];e.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,oe=null,Q=null;E.depth&&(Q=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=E.stencil?ns:Fr,oe=E.stencil?ts:Ui);let ce={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new _n(f.textureWidth,f.textureHeight,{format:Pn,type:Kn,depthTexture:new Gs(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let k={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _n(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let se=0;se<j.removed.length;se++){let k=j.removed[se],oe=b.indexOf(k);oe>=0&&(b[oe]=null,M[oe].disconnect(k))}for(let se=0;se<j.added.length;se++){let k=j.added[se],oe=b.indexOf(k);if(oe===-1){for(let ce=0;ce<M.length;ce++)if(ce>=b.length){b.push(k),oe=ce;break}else if(b[ce]===null){b[ce]=k,oe=ce;break}if(oe===-1)break}let Q=M[oe];Q&&Q.connect(k)}}let F=new N,W=new N;function Z(j,se,k){F.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(k.matrixWorld);let oe=F.distanceTo(W),Q=se.projectionMatrix.elements,ce=k.projectionMatrix.elements,Je=Q[14]/(Q[10]-1),U=Q[14]/(Q[10]+1),Ge=(Q[9]+1)/Q[5],We=(Q[9]-1)/Q[5],Ce=(Q[8]-1)/Q[0],Ie=(ce[8]+1)/ce[0],lt=Je*Ce,Le=Je*Ie,ke=oe/(-Ce+Ie),Qe=ke*-Ce;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qe),j.translateZ(ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Q[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let je=Je+ke,L=U+ke,w=lt-Qe,X=Le+(oe-Qe),ee=Ge*U/L*je,ae=We*U/L*je;j.projectionMatrix.makePerspective(w,X,ee,ae,je,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let se=j.near,k=j.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(k=m.depthFar)),z.near=_.near=y.near=se,z.far=_.far=y.far=k,(H!==z.near||D!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,D=z.far),z.layers.mask=j.layers.mask|6,y.layers.mask=z.layers.mask&3,_.layers.mask=z.layers.mask&5;let oe=j.parent,Q=z.cameras;ne(z,oe);for(let ce=0;ce<Q.length;ce++)ne(Q[ce],oe);Q.length===2?Z(z,y,_):z.projectionMatrix.copy(y.projectionMatrix),le(j,z,oe)};function le(j,se,k){k===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(k.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ki*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return p[j]};let ve=null;function be(j,se){if(u=se.getViewerPose(c||a),g=se,u!==null){let k=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let oe=!1;k.length!==z.cameras.length&&(z.cameras.length=0,oe=!0);for(let U=0;U<k.length;U++){let Ge=k[U],We=null;if(d!==null)We=d.getViewport(Ge);else{let Ie=h.getViewSubImage(f,Ge);We=Ie.viewport,U===0&&(e.setRenderTargetTextures(v,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(v))}let Ce=R[U];Ce===void 0&&(Ce=new Bt,Ce.layers.enable(U),Ce.viewport=new Et,R[U]=Ce),Ce.matrix.fromArray(Ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(We.x,We.y,We.width,We.height),U===0&&(z.matrix.copy(Ce.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),oe===!0&&z.cameras.push(Ce)}let Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let U=h.getDepthInformation(k[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let U=0;U<k.length;U++){let Ge=k[U].camera;if(Ge){let We=p[Ge];We||(We=new Ws,p[Ge]=We);let Ce=h.getCameraImage(Ge);We.sourceTexture=Ce}}}}for(let k=0;k<M.length;k++){let oe=b[k],Q=M[k];oe!==null&&Q!==void 0&&Q.update(oe,se,c||a)}ve&&ve(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let He=new rf;He.setAnimationLoop(be),this.setAnimationLoop=function(j){ve=j},this.dispose=function(){}}},mr=new Wn,qy=new ut;function Xy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,mr.copy(v),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(mr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $y(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));let M=S.program;n.updateUBOMapping(E,M);let b=e.render.frame;s[E.id]!==b&&(f(E),s[E.id]=b)}function u(E){let S=h();E.__bindingPointIndex=S;let v=i.createBuffer(),M=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=r[E.id],v=E.uniforms,M=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,A=v.length;b<A;b++){let T=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,_=T.length;y<_;y++){let R=T[y];if(d(R,b,y,M)===!0){let z=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],D=0;for(let B=0;B<H.length;B++){let G=H[B],te=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+D,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,S,v,M){let b=E.value,A=S+"_"+v;if(M[A]===void 0)return typeof b=="number"||typeof b=="boolean"?M[A]=b:M[A]=b.clone(),!0;{let T=M[A];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return M[A]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(E){let S=E.uniforms,v=0,M=16;for(let A=0,T=S.length;A<T;A++){let y=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,R=y.length;_<R;_++){let z=y[_],H=Array.isArray(z.value)?z.value:[z.value];for(let D=0,B=H.length;D<B;D++){let G=H[D],te=x(G),F=v%M,W=F%te.boundary,Z=F+W;v+=W,Z!==0&&M-Z<te.storage&&(v+=M-Z),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=te.storage}}}let b=v%M;return b>0&&(v+=M-b),E.__size=v,E.__cache={},this}function x(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var ls=class{constructor(e={}){let{canvas:t=Rd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,M=!1;this._outputColorSpace=Ct;let b=0,A=0,T=null,y=-1,_=null,R=new Et,z=new Et,H=null,D=new Te(0),B=0,G=t.width,te=t.height,F=1,W=null,Z=null,ne=new Et(0,0,G,te),le=new Et(0,0,G,te),ve=!1,be=new Xr,He=!1,j=!1,se=new ut,k=new N,oe=new Et,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Je(){return T===null?F:1}let U=n;function Ge(C,$){return t.getContext(C,$)}try{let C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){let $="webgl2";if(U=Ge($,C),U===null)throw Ge($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,Ce,Ie,lt,Le,ke,Qe,je,L,w,X,ee,ae,K,Fe,pe,ze,Ve,de,Me,Ke,Oe,xe,et;function q(){We=new hv(U),We.init(),Oe=new Vy(U,We),Ce=new rv(U,We,e,Oe),Ie=new Hy(U,We),Ce.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),lt=new pv(U),Le=new Ay,ke=new ky(U,We,Ie,Le,Ce,Oe,lt),Qe=new av(v),je=new uv(v),L=new xm(U),xe=new nv(U,L),w=new dv(U,L,lt,xe),X=new gv(U,w,L,lt),de=new mv(U,Ce,ke),pe=new sv(Le),ee=new wy(v,Qe,je,We,Ce,xe,pe),ae=new Xy(v,Le),K=new Cy,Fe=new Ny(We),Ve=new tv(v,Qe,je,Ie,X,d,l),ze=new Oy(v,X,Ce),et=new $y(U,lt,Ce,Ie),Me=new iv(U,We,lt),Ke=new fv(U,We,lt),lt.programs=ee.programs,v.capabilities=Ce,v.extensions=We,v.properties=Le,v.renderLists=K,v.shadowMap=ze,v.state=Ie,v.info=lt}q();let ye=new tu(v,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(G,te,!1))},this.getSize=function(C){return C.set(G,te)},this.setSize=function(C,$,J=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,te=$,t.width=Math.floor(C*F),t.height=Math.floor($*F),J===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(G*F,te*F).floor()},this.setDrawingBufferSize=function(C,$,J){G=C,te=$,F=J,t.width=Math.floor(C*J),t.height=Math.floor($*J),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,$,J,Y){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,$,J,Y),Ie.viewport(R.copy(ne).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(le)},this.setScissor=function(C,$,J,Y){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,$,J,Y),Ie.scissor(z.copy(le).multiplyScalar(F).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){Ie.setScissorTest(ve=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,J=!0){let Y=0;if(C){let V=!1;if(T!==null){let re=T.texture.format;V=re===Ro||re===Ao||re===wo}if(V){let re=T.texture.type,Ee=re===Kn||re===Ui||re===es||re===ts||re===Eo||re===To,Ue=Ve.getClearColor(),Re=Ve.getClearAlpha(),$e=Ue.r,Ye=Ue.g,Be=Ue.b;Ee?(g[0]=$e,g[1]=Ye,g[2]=Be,g[3]=Re,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=$e,x[1]=Ye,x[2]=Be,x[3]=Re,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}$&&(Y|=U.DEPTH_BUFFER_BIT),J&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ve.dispose(),K.dispose(),Fe.dispose(),Le.dispose(),Qe.dispose(),je.dispose(),X.dispose(),xe.dispose(),et.dispose(),ee.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",_e),ye.removeEventListener("sessionend",bt),ge.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=lt.autoReset,$=ze.enabled,J=ze.autoUpdate,Y=ze.needsUpdate,V=ze.type;q(),lt.autoReset=C,ze.enabled=$,ze.autoUpdate=J,ze.needsUpdate=Y,ze.type=V}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function I(C){let $=C.target;$.removeEventListener("dispose",I),O($)}function O(C){ie(C),Le.remove(C)}function ie(C){let $=Le.get(C).programs;$!==void 0&&($.forEach(function(J){ee.releaseProgram(J)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,J,Y,V,re){$===null&&($=Q);let Ee=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Vt(C,$,J,Y,V);Ie.setMaterial(Y,Ee);let Re=J.index,$e=1;if(Y.wireframe===!0){if(Re=w.getWireframeAttribute(J),Re===void 0)return;$e=2}let Ye=J.drawRange,Be=J.attributes.position,ot=Ye.start*$e,tt=(Ye.start+Ye.count)*$e;re!==null&&(ot=Math.max(ot,re.start*$e),tt=Math.min(tt,(re.start+re.count)*$e)),Re!==null?(ot=Math.max(ot,0),tt=Math.min(tt,Re.count)):Be!=null&&(ot=Math.max(ot,0),tt=Math.min(tt,Be.count));let it=tt-ot;if(it<0||it===1/0)return;xe.setup(V,Y,Ue,J,Re);let mt,Mt=Me;if(Re!==null&&(mt=L.get(Re),Mt=Ke,Mt.setIndex(mt)),V.isMesh)Y.wireframe===!0?(Ie.setLineWidth(Y.wireframeLinewidth*Je()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(V.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),Ie.setLineWidth(Ze*Je()),V.isLineSegments?Mt.setMode(U.LINES):V.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else V.isPoints?Mt.setMode(U.POINTS):V.isSprite&&Mt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ze=V._multiDrawStarts,At=V._multiDrawCounts,ct=V._multiDrawCount,Ut=Re?L.get(Re).bytesPerElement:1,Mr=Le.get(Y).currentProgram.getUniforms();for(let wn=0;wn<ct;wn++)Mr.setValue(U,"_gl_DrawID",wn),Mt.render(Ze[wn]/Ut,At[wn])}else if(V.isInstancedMesh)Mt.renderInstances(ot,it,V.count);else if(J.isInstancedBufferGeometry){let Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,At=Math.min(J.instanceCount,Ze);Mt.renderInstances(ot,it,At)}else Mt.render(ot,it)};function me(C,$,J){C.transparent===!0&&C.side===kt&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,at(C,$,J),C.side=fn,C.needsUpdate=!0,at(C,$,J),C.side=kt):at(C,$,J)}this.compile=function(C,$,J=null){J===null&&(J=C),p=Fe.get(J),p.init($),S.push(p),J.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==J&&C.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Y=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let re=V.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){let Ue=re[Ee];me(Ue,J,V),Y.add(Ue)}else me(re,J,V),Y.add(re)}),p=S.pop(),Y},this.compileAsync=function(C,$,J=null){let Y=this.compile(C,$,J);return new Promise(V=>{function re(){if(Y.forEach(function(Ee){Le.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){V(C);return}setTimeout(re,10)}We.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Se=null;function Xe(C){Se&&Se(C)}function _e(){ge.stop()}function bt(){ge.start()}let ge=new rf;ge.setAnimationLoop(Xe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(C){Se=C,ye.setAnimationLoop(C),C===null?ge.stop():ge.start()},ye.addEventListener("sessionstart",_e),ye.addEventListener("sessionend",bt),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera($),$=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,$,T),p=Fe.get(C,S.length),p.init($),S.push(p),se.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),be.setFromProjectionMatrix(se,Vn,$.reversedDepth),j=this.localClippingEnabled,He=pe.init(this.clippingPlanes,j),m=K.get(C,E.length),m.init(),E.push(m),ye.enabled===!0&&ye.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&Pe(re,$,-1/0,v.sortObjects)}Pe(C,$,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(W,Z),ce=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ce&&Ve.addToRenderList(m,C),this.info.render.frame++,He===!0&&pe.beginShadows();let J=p.state.shadowsArray;ze.render(J,C,$),He===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,V=m.transmissive;if(p.setupLights(),$.isArrayCamera){let re=$.cameras;if(V.length>0)for(let Ee=0,Ue=re.length;Ee<Ue;Ee++){let Re=re[Ee];he(Y,V,C,Re)}ce&&Ve.render(C);for(let Ee=0,Ue=re.length;Ee<Ue;Ee++){let Re=re[Ee];P(m,C,Re,Re.viewport)}}else V.length>0&&he(Y,V,C,$),ce&&Ve.render(C),P(m,C,$);T!==null&&A===0&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,$),xe.resetDefaultState(),y=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],He===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Pe(C,$,J,Y){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||be.intersectsSprite(C)){Y&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);let Ee=X.update(C),Ue=C.material;Ue.visible&&m.push(C,Ee,Ue,J,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||be.intersectsObject(C))){let Ee=X.update(C),Ue=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),oe.copy(Ee.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(se)),Array.isArray(Ue)){let Re=Ee.groups;for(let $e=0,Ye=Re.length;$e<Ye;$e++){let Be=Re[$e],ot=Ue[Be.materialIndex];ot&&ot.visible&&m.push(C,Ee,ot,J,oe.z,Be)}}else Ue.visible&&m.push(C,Ee,Ue,J,oe.z,null)}}let re=C.children;for(let Ee=0,Ue=re.length;Ee<Ue;Ee++)Pe(re[Ee],$,J,Y)}function P(C,$,J,Y){let V=C.opaque,re=C.transmissive,Ee=C.transparent;p.setupLightsView(J),He===!0&&pe.setGlobalState(v.clippingPlanes,J),Y&&Ie.viewport(R.copy(Y)),V.length>0&&Ne(V,$,J),re.length>0&&Ne(re,$,J),Ee.length>0&&Ne(Ee,$,J),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function he(C,$,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new _n(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?gn:Kn,minFilter:rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));let re=p.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||R;re.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);let Ue=v.getRenderTarget(),Re=v.getActiveCubeFace(),$e=v.getActiveMipmapLevel();v.setRenderTarget(re),v.getClearColor(D),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),ce&&Ve.render(J);let Ye=v.toneMapping;v.toneMapping=Si;let Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),He===!0&&pe.setGlobalState(v.clippingPlanes,Y),Ne(C,J,Y),ke.updateMultisampleRenderTarget(re),ke.updateRenderTargetMipmap(re),We.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let tt=0,it=$.length;tt<it;tt++){let mt=$[tt],Mt=mt.object,Ze=mt.geometry,At=mt.material,ct=mt.group;if(At.side===kt&&Mt.layers.test(Y.layers)){let Ut=At.side;At.side=nn,At.needsUpdate=!0,qe(Mt,J,Y,Ze,At,ct),At.side=Ut,At.needsUpdate=!0,ot=!0}}ot===!0&&(ke.updateMultisampleRenderTarget(re),ke.updateRenderTargetMipmap(re))}v.setRenderTarget(Ue,Re,$e),v.setClearColor(D,B),Be!==void 0&&(Y.viewport=Be),v.toneMapping=Ye}function Ne(C,$,J){let Y=$.isScene===!0?$.overrideMaterial:null;for(let V=0,re=C.length;V<re;V++){let Ee=C[V],Ue=Ee.object,Re=Ee.geometry,$e=Ee.group,Ye=Ee.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),Ue.layers.test(J.layers)&&qe(Ue,$,J,Re,Ye,$e)}}function qe(C,$,J,Y,V,re){C.onBeforeRender(v,$,J,Y,V,re),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(v,$,J,Y,C,re),V.transparent===!0&&V.side===kt&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,v.renderBufferDirect(J,$,Y,V,C,re),V.side=fn,V.needsUpdate=!0,v.renderBufferDirect(J,$,Y,V,C,re),V.side=kt):v.renderBufferDirect(J,$,Y,V,C,re),C.onAfterRender(v,$,J,Y,V,re)}function at(C,$,J){$.isScene!==!0&&($=Q);let Y=Le.get(C),V=p.state.lights,re=p.state.shadowsArray,Ee=V.state.version,Ue=ee.getParameters(C,V.state,re,$,J),Re=ee.getProgramCacheKey(Ue),$e=Y.programs;Y.environment=C.isMeshStandardMaterial?$.environment:null,Y.fog=$.fog,Y.envMap=(C.isMeshStandardMaterial?je:Qe).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",I),$e=new Map,Y.programs=$e);let Ye=$e.get(Re);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Ee)return gt(C,Ue),Ye}else Ue.uniforms=ee.getUniforms(C),C.onBeforeCompile(Ue,v),Ye=ee.acquireProgram(Ue,Re),$e.set(Re,Ye),Y.uniforms=Ue.uniforms;let Be=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=pe.uniform),gt(C,Ue),Y.needsLights=nt(C),Y.lightsStateVersion=Ee,Y.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function St(C){if(C.uniformsList===null){let $=C.currentProgram.getUniforms();C.uniformsList=os.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function gt(C,$){let J=Le.get(C);J.outputColorSpace=$.outputColorSpace,J.batching=$.batching,J.batchingColor=$.batchingColor,J.instancing=$.instancing,J.instancingColor=$.instancingColor,J.instancingMorph=$.instancingMorph,J.skinning=$.skinning,J.morphTargets=$.morphTargets,J.morphNormals=$.morphNormals,J.morphColors=$.morphColors,J.morphTargetsCount=$.morphTargetsCount,J.numClippingPlanes=$.numClippingPlanes,J.numIntersection=$.numClipIntersection,J.vertexAlphas=$.vertexAlphas,J.vertexTangents=$.vertexTangents,J.toneMapping=$.toneMapping}function Vt(C,$,J,Y,V){$.isScene!==!0&&($=Q),ke.resetTextureUnits();let re=$.fog,Ee=Y.isMeshStandardMaterial?$.environment:null,Ue=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xt,Re=(Y.isMeshStandardMaterial?je:Qe).get(Y.envMap||Ee),$e=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,tt=!!J.morphAttributes.color,it=Si;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(it=v.toneMapping);let mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=mt!==void 0?mt.length:0,Ze=Le.get(Y),At=p.state.lights;if(He===!0&&(j===!0||C!==_)){let hn=C===_&&Y.id===y;pe.setState(Y,C,hn)}let ct=!1;Y.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==At.state.version||Ze.outputColorSpace!==Ue||V.isBatchedMesh&&Ze.batching===!1||!V.isBatchedMesh&&Ze.batching===!0||V.isBatchedMesh&&Ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ze.instancing===!1||!V.isInstancedMesh&&Ze.instancing===!0||V.isSkinnedMesh&&Ze.skinning===!1||!V.isSkinnedMesh&&Ze.skinning===!0||V.isInstancedMesh&&Ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ze.instancingMorph===!1&&V.morphTexture!==null||Ze.envMap!==Re||Y.fog===!0&&Ze.fog!==re||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ye||Ze.morphTargets!==Be||Ze.morphNormals!==ot||Ze.morphColors!==tt||Ze.toneMapping!==it||Ze.morphTargetsCount!==Mt)&&(ct=!0):(ct=!0,Ze.__version=Y.version);let Ut=Ze.currentProgram;ct===!0&&(Ut=at(Y,$,V));let Mr=!1,wn=!1,ys=!1,Ot=Ut.getUniforms(),Ln=Ze.uniforms;if(Ie.useProgram(Ut.program)&&(Mr=!0,wn=!0,ys=!0),Y.id!==y&&(y=Y.id,wn=!0),Mr||_!==C){Ie.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ot.setValue(U,"projectionMatrix",C.projectionMatrix),Ot.setValue(U,"viewMatrix",C.matrixWorldInverse);let yn=Ot.map.cameraPosition;yn!==void 0&&yn.setValue(U,k.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&Ot.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ot.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,wn=!0,ys=!0)}if(V.isSkinnedMesh){Ot.setOptional(U,V,"bindMatrix"),Ot.setOptional(U,V,"bindMatrixInverse");let hn=V.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ot.setValue(U,"boneTexture",hn.boneTexture,ke))}V.isBatchedMesh&&(Ot.setOptional(U,V,"batchingTexture"),Ot.setValue(U,"batchingTexture",V._matricesTexture,ke),Ot.setOptional(U,V,"batchingIdTexture"),Ot.setValue(U,"batchingIdTexture",V._indirectTexture,ke),Ot.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Ot.setValue(U,"batchingColorTexture",V._colorsTexture,ke));let Dn=J.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&de.update(V,J,Ut),(wn||Ze.receiveShadow!==V.receiveShadow)&&(Ze.receiveShadow=V.receiveShadow,Ot.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=Re,Ln.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&$.environment!==null&&(Ln.envMapIntensity.value=$.environmentIntensity),wn&&(Ot.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&_t(Ln,ys),re&&Y.fog===!0&&ae.refreshFogUniforms(Ln,re),ae.refreshMaterialUniforms(Ln,Y,F,te,p.state.transmissionRenderTarget[C.id]),os.upload(U,St(Ze),Ln,ke)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(os.upload(U,St(Ze),Ln,ke),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ot.setValue(U,"center",V.center),Ot.setValue(U,"modelViewMatrix",V.modelViewMatrix),Ot.setValue(U,"normalMatrix",V.normalMatrix),Ot.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let hn=Y.uniformsGroups;for(let yn=0,Cl=hn.length;yn<Cl;yn++){let Bi=hn[yn];et.update(Bi,Ut),et.bind(Bi,Ut)}}return Ut}function _t(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function nt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,$,J){let Y=Le.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Le.get(C.texture).__webglTexture=$,Le.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){let J=Le.get(C);J.__webglFramebuffer=$,J.__useDefaultFramebuffer=$===void 0};let pt=U.createFramebuffer();this.setRenderTarget=function(C,$=0,J=0){T=C,b=$,A=J;let Y=!0,V=null,re=!1,Ee=!1;if(C){let Re=Le.get(C);if(Re.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)ke.setupRenderTarget(C);else if(Re.__hasExternalTextures)ke.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Be=C.depthTexture;if(Re.__boundDepthTexture!==Be){if(Be!==null&&Le.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(C)}}let $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ee=!0);let Ye=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?V=Ye[$][J]:V=Ye[$],re=!0):C.samples>0&&ke.useMultisampledRTT(C)===!1?V=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[J]:V=Ye,R.copy(C.viewport),z.copy(C.scissor),H=C.scissorTest}else R.copy(ne).multiplyScalar(F).floor(),z.copy(le).multiplyScalar(F).floor(),H=ve;if(J!==0&&(V=pt),Ie.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&Ie.drawBuffers(C,V),Ie.viewport(R),Ie.scissor(z),Ie.setScissorTest(H),re){let Re=Le.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,J)}else if(Ee){let Re=$;for(let $e=0;$e<C.textures.length;$e++){let Ye=Le.get(C.textures[$e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$e,Ye.__webglTexture,J,Re)}}else if(C!==null&&J!==0){let Re=Le.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(C,$,J,Y,V,re,Ee,Ue=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Ie.bindFramebuffer(U.FRAMEBUFFER,Re);try{let $e=C.textures[Ue],Ye=$e.format,Be=$e.type;if(!Ce.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-Y&&J>=0&&J<=C.height-V&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue),U.readPixels($,J,Y,V,Oe.convert(Ye),Oe.convert(Be),re))}finally{let $e=T!==null?Le.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,$,J,Y,V,re,Ee,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if($>=0&&$<=C.width-Y&&J>=0&&J<=C.height-V){Ie.bindFramebuffer(U.FRAMEBUFFER,Re);let $e=C.textures[Ue],Ye=$e.format,Be=$e.type;if(!Ce.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue),U.readPixels($,J,Y,V,Oe.convert(Ye),Oe.convert(Be),0);let tt=T!==null?Le.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,tt);let it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cd(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(ot),U.deleteSync(it),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,J=0){let Y=Math.pow(2,-J),V=Math.floor(C.image.width*Y),re=Math.floor(C.image.height*Y),Ee=$!==null?$.x:0,Ue=$!==null?$.y:0;ke.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Ee,Ue,V,re),Ie.unbindTexture()};let cn=U.createFramebuffer(),un=U.createFramebuffer();this.copyTextureToTexture=function(C,$,J=null,Y=null,V=0,re=null){re===null&&(V!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=V,V=0):re=0);let Ee,Ue,Re,$e,Ye,Be,ot,tt,it,mt=C.isCompressedTexture?C.mipmaps[re]:C.image;if(J!==null)Ee=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,$e=J.min.x,Ye=J.min.y,Be=J.isBox3?J.min.z:0;else{let Dn=Math.pow(2,-V);Ee=Math.floor(mt.width*Dn),Ue=Math.floor(mt.height*Dn),C.isDataArrayTexture?Re=mt.depth:C.isData3DTexture?Re=Math.floor(mt.depth*Dn):Re=1,$e=0,Ye=0,Be=0}Y!==null?(ot=Y.x,tt=Y.y,it=Y.z):(ot=0,tt=0,it=0);let Mt=Oe.convert($.format),Ze=Oe.convert($.type),At;$.isData3DTexture?(ke.setTexture3D($,0),At=U.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ke.setTexture2DArray($,0),At=U.TEXTURE_2D_ARRAY):(ke.setTexture2D($,0),At=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment);let ct=U.getParameter(U.UNPACK_ROW_LENGTH),Ut=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mr=U.getParameter(U.UNPACK_SKIP_PIXELS),wn=U.getParameter(U.UNPACK_SKIP_ROWS),ys=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);let Ot=C.isDataArrayTexture||C.isData3DTexture,Ln=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){let Dn=Le.get(C),hn=Le.get($),yn=Le.get(Dn.__renderTarget),Cl=Le.get(hn.__renderTarget);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let Bi=0;Bi<Re;Bi++)Ot&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(C).__webglTexture,V,Be+Bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get($).__webglTexture,re,it+Bi)),U.blitFramebuffer($e,Ye,Ee,Ue,ot,tt,Ee,Ue,U.DEPTH_BUFFER_BIT,U.NEAREST);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||Le.has(C)){let Dn=Le.get(C),hn=Le.get($);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,cn),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,un);for(let yn=0;yn<Re;yn++)Ot?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dn.__webglTexture,V,Be+yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dn.__webglTexture,V),Ln?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,re,it+yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,re),V!==0?U.blitFramebuffer($e,Ye,Ee,Ue,ot,tt,Ee,Ue,U.COLOR_BUFFER_BIT,U.NEAREST):Ln?U.copyTexSubImage3D(At,re,ot,tt,it+yn,$e,Ye,Ee,Ue):U.copyTexSubImage2D(At,re,ot,tt,$e,Ye,Ee,Ue);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(At,re,ot,tt,it,Ee,Ue,Re,Mt,Ze,mt.data):$.isCompressedArrayTexture?U.compressedTexSubImage3D(At,re,ot,tt,it,Ee,Ue,Re,Mt,mt.data):U.texSubImage3D(At,re,ot,tt,it,Ee,Ue,Re,Mt,Ze,mt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,re,ot,tt,Ee,Ue,Mt,Ze,mt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,re,ot,tt,mt.width,mt.height,Mt,mt.data):U.texSubImage2D(U.TEXTURE_2D,re,ot,tt,Ee,Ue,Mt,Ze,mt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mr),U.pixelStorei(U.UNPACK_SKIP_ROWS,wn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ys),re===0&&$.generateMipmaps&&U.generateMipmap(At),Ie.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&ke.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ke.setTextureCube(C,0):C.isData3DTexture?ke.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ke.setTexture2DArray(C,0):ke.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,Ie.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function cl(i,e){let t;if(e.traverse(c=>{c.isMesh&&c.name.toLowerCase().includes("tappo")&&(t=c)}),!t)return;let n=e.userData.fragranceSlug||"forgive",r=pa[n][0],s=[],a=new Tt,o=12;for(let c=0;c<6;c++){let u=new $n(1,12),h=u.attributes.position,f=[],d=r+c*79,g=[];for(let E=0;E<5;E++)g.push({normal:new N(Ft(d+E*17)*2-1,Ft(d+E*17+3)*2-1,Ft(d+E*17+8)*2-1).normalize(),distance:.62+Ft(d+E*31)*.27});let x=Array.from({length:7},(E,S)=>({direction:new N(Ft(d+S*41+1)*2-1,Ft(d+S*41+9)*2-1,Ft(d+S*41+21)*2-1).normalize(),width:.018+Ft(d+S*11)*.045,depth:.06+Ft(d+S*13)*.13}));for(let E=0;E<h.count;E++){let S=new N(h.getX(E),h.getY(E),h.getZ(E)).normalize(),v=1+.07*Math.sin(S.x*7+d)*Math.cos(S.y*9+S.z*5),M=!1;for(let y of g){let _=S.dot(y.normal);_>0&&y.distance/_<v&&(v=y.distance/_,M=!0)}let b=0;for(let y of x)b+=y.depth*Math.max(0,1-(1-S.dot(y.direction))/(y.width*2))**1.35;let A=.007*Math.sin(S.x*119+S.y*73+d)*Math.sin(S.z*97-S.x*43);v=Math.max(.38,v-b+A),h.setXYZ(E,S.x*v*.042,S.y*v*(.03+c*.002),S.z*v*(.023+c*.001));let T=(M?1.08:.9)-b*.7+A*4;f.push(T,T,T)}u.setAttribute("color",new rt(f,3)),u.computeVertexNormals();let m=t.material.clone();m.vertexColors=!0,m.flatShading=!1,m.normalScale?.set(.55,.55),m.onBeforeCompile=E=>{E.vertexShader=`varying vec3 stonePoint;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stonePoint=position;`),E.fragmentShader=`varying vec3 stonePoint;
   vec2 mineralHash(vec2 p){return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);}
   float mineralCrack(vec2 p){vec2 cell=floor(p),f=fract(p);float a=9.,b=9.;for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 q=vec2(float(x),float(y)),v=q+mineralHash(cell+q)-f;float d=dot(v,v);if(d<a){b=a;a=d;}else if(d<b)b=d;}return 1.-smoothstep(.008,.055,sqrt(b)-sqrt(a));}
   `+E.fragmentShader,E.fragmentShader=E.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
    float mineralGrain=sin(stonePoint.x*3100.+sin(stonePoint.z*470.))*sin(stonePoint.y*2600.+stonePoint.z*1800.);
    float crack=mineralCrack(stonePoint.xy*155.+stonePoint.z*31.);
    roughnessFactor=clamp(roughnessFactor+mineralGrain*.10+crack*.18,.40,.94);
    diffuseColor.rgb*=1.-crack*.24;`),E.fragmentShader=E.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
    float relief=-mineralCrack(stonePoint.xy*155.+stonePoint.z*31.)*.00009+sin(stonePoint.x*1700.+sin(stonePoint.y*630.))*sin(stonePoint.z*2100.+stonePoint.y*1900.)*.000055;
    vec3 sx=dFdx(vViewPosition),sy=dFdy(vViewPosition);
    vec3 rx=cross(sy,normal),ry=cross(normal,sx);
    float det=dot(sx,rx);
    normal=normalize(abs(det)*normal-sign(det)*(dFdx(relief)*rx+dFdy(relief)*ry));`)},m.customProgramCacheKey=()=>"fractured-stone-r42";let p=new Mn(u,m,2);p.name="Fragments of the cap "+c,p.frustumCulled=!1,i.group.add(p),s.push(p)}let l=i.update.bind(i);i.update=(c,u,h)=>{l(c,u,h);let f=u?0:h*2.5;for(let d=0;d<o;d++){let g=d+71+r,x=d*2.399+r,m=Hi(n,h,9e4+d*139);a.position.set(m.x,m.y,m.z-.12),a.rotation.set(x+f*.3,x*.7-f*.24,x*.4+f*.19);let p=.85+Ft(g+17)*.8;a.scale.set(p,p*(.8+Ft(g+31)*.6),p),a.updateMatrix(),s[d%6].setMatrixAt(Math.floor(d/6),a.matrix)}s.forEach(d=>d.instanceMatrix.needsUpdate=!0),i.group.userData.motion.stoneFragments=o}}function ul(i,e,t,n){let r=Math.min(16,t.capabilities.getMaxAnisotropy());for(let s of["map","normalMap","roughnessMap","metalnessMap","bumpMap"])i[s]&&(i[s].anisotropy=r);e.includes("tappo")&&(n==="amund"||n==="sylind"||(i.onBeforeCompile=s=>{s.vertexShader=`varying vec3 puntoResina;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
puntoResina=position;`),s.fragmentShader=`varying vec3 puntoResina;
 float granoHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float granoRumore(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(granoHash(i),granoHash(i+vec3(1,0,0)),f.x),mix(granoHash(i+vec3(0,1,0)),granoHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(granoHash(i+vec3(0,0,1)),granoHash(i+vec3(1,0,1)),f.x),mix(granoHash(i+vec3(0,1,1)),granoHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor=clamp(roughnessFactor+.022*(granoRumore(puntoResina*430.)-.5),.06,.20);
 `)},i.customProgramCacheKey=()=>"zavyla-macro-resina-2",i.needsUpdate=!0))}var Nt=[{slug:"forgive",name:"Forgive",collection:"love",price:250,variant:"45242848084233",url:"https://zavyla.com/products/forgive-100ml-1",available:!0,preorder:!0,tagline:"Un nuovo inizio, sulla pelle.",family:"Speziato e fruttato",description:"Un\u2019apertura vibrante di pepe nero e cardamomo incontra la dolcezza dell\u2019ananas. Ambra, patchouli e vaniglia lasciano una scia sensuale, come la possibilit\xE0 di ricominciare.",color:"#3d1f3c",stage:"#490f48",notes:["Pepe nero \xB7 Cardamomo \xB7 Frutti rossi","Gelsomino \xB7 Ananas \xB7 Fava tonka","Ambra \xB7 Patchouli \xB7 Vaniglia"],concentration:"Eau de Parfum"},{slug:"promise",name:"Promise",collection:"love",price:250,variant:"45242872037641",url:"https://zavyla.com/products/promise-100ml",available:!0,preorder:!1,tagline:"Le cose che restano.",family:"Ambrato e gourmand",description:"Agrumi e lavanda aprono un incontro caldo di miele e cannella. Tabacco, vaniglia e fava tonka ne custodiscono la profondit\xE0. Una promessa che si fa presenza.",color:"#0e0f12",stage:"#2f3649",notes:["Lavanda \xB7 Bergamotto \xB7 Limone","Miele \xB7 Cannella \xB7 Cashmeran \xB7 Gelsomino sambac","Tabacco \xB7 Vaniglia \xB7 Fava tonka"],concentration:"Eau de Parfum"},{slug:"listen",name:"Listen",collection:"love",price:250,variant:"45242865942793",url:"https://zavyla.com/products/listen-100ml-1",available:!0,preorder:!1,tagline:"Il primo istante di un incontro.",family:"Floreale e gourmand",description:"Mandarino e pesca introducono un cuore di fiori d\u2019arancio, rosa e vaniglia. Il fondo di pralin\xE9, sandalo e muschio si posa sulla pelle con dolcezza.",color:"#ab9e9f",stage:"#493638",notes:["Mandarino \xB7 Pesca","Fiori d\u2019arancio \xB7 Rosa \xB7 Vaniglia","Pralin\xE9 \xB7 Sandalo \xB7 Muschio"],concentration:"Eau de Parfum"},{slug:"enjoy",name:"Enjoy",collection:"love",price:250,variant:"45242443497737",url:"https://zavyla.com/products/enjoy-100ml",available:!0,preorder:!1,tagline:"La leggerezza di esserci.",family:"Morbido e legnoso",description:"Mela, lavanda e cannella incontrano rosa e cedro. Un fondo avvolgente di legni, ambra e vaniglia racconta il piacere delle cose condivise.",color:"#2e2f38",stage:"#343649",notes:["Legno di rosa \xB7 Lavanda \xB7 Cannella \xB7 Mela","Rosa \xB7 Cedro \xB7 Accordo floreale","Oud \xB7 Sandalo \xB7 Ambra \xB7 Vaniglia \xB7 Muschio"],concentration:"Eau de Parfum"},{slug:"give",name:"Give",collection:"love",price:250,variant:"45242851197193",url:"https://zavyla.com/products/give-100ml",available:!0,preorder:!1,tagline:"Un gesto, senza riserve.",family:"Agrumato e speziato",description:"Il mandarino siciliano incontra zenzero e zafferano. Fiori e legni accompagnano una scia di vaniglia e muschio bianco: luminosa, generosa, aperta.",color:"#006e72",stage:"#0e4749",notes:["Zafferano \xB7 Zenzero \xB7 Mandarino siciliano \xB7 Bergamotto","Legni ambrati \xB7 Rosa \xB7 Gelsomino \xB7 Patchouli","Vaniglia \xB7 Muschio bianco \xB7 Sandalo \xB7 Muschio di quercia"],concentration:"Eau de Parfum"},{slug:"trust",name:"Trust",collection:"love",price:250,variant:"45242856505609",url:"https://zavyla.com/products/trust-100ml-1",available:!0,preorder:!1,tagline:"Lasciarsi andare.",family:"Ambrato e speziato",description:"Oud, lampone e rosa si intrecciano a benzoino e betulla. Incenso e zafferano aggiungono profondit\xE0 a una fragranza intensa e avvolgente.",color:"#c18783",stage:"#492623",notes:["Oud \xB7 Geranio \xB7 Lampone \xB7 Rosa","Benzoino \xB7 Betulla","Incenso \xB7 Zafferano"],concentration:"Eau de Parfum"},{slug:"speak",name:"Speak",collection:"love",price:250,variant:"45242842284297",url:"https://zavyla.com/products/speak-100ml-1",available:!0,preorder:!1,tagline:"Le parole, prima delle parole.",family:"Floreale e legnoso",description:"Prugna, arancia e zafferano introducono un cuore di rosa, oud e iris. Miele bianco e vetiver raccontano una vicinanza che non ha bisogno di spiegazioni.",color:"#795d4f",stage:"#492e20",notes:["Prugna \xB7 Zafferano \xB7 Arancia","Rosa \xB7 Oud \xB7 Patchouli \xB7 Iris","Muschio \xB7 Miele bianco \xB7 Vetiver"],concentration:"Eau de Parfum"},{slug:"share",name:"Share",collection:"love",price:250,variant:"45242832716041",url:"https://zavyla.com/products/share-100ml",available:!0,preorder:!1,tagline:"La bellezza si moltiplica.",family:"Floreale e muschiato",description:"Bergamotto e tuberosa aprono una composizione luminosa. Cedro e violetta si distendono su muschio bianco e ambroxan, leggeri come l\u2019aria del mattino.",color:"#7f8d0f",stage:"#43490e",notes:["Tuberosa \xB7 Zafferano \xB7 Bergamotto","Cedro \xB7 Violetta \xB7 Foglie di geranio","Patchouli \xB7 Muschio bianco \xB7 Ambroxan"],concentration:"Eau de Parfum"},{slug:"irish-whiskey",name:"Irish Whiskey",collection:"intimacy",price:180,variant:"48848814768393",url:"https://zavyla.com/products/irish-whiskey",available:!0,preorder:!1,tagline:"Il calore di un momento sospeso.",family:"Fruttato e legnoso",description:"Limone e frutti tropicali si aprono su fiori bianchi e ambra grigia. Patchouli, oud e vetiver disegnano una scia profonda, calda e avvolgente.",color:"#703900",stage:"#492c0e",notes:["Limone \xB7 Frutti tropicali","Fiori bianchi \xB7 Muschio \xB7 Ambra grigia","Patchouli \xB7 Oud \xB7 Vetiver"],concentration:"Extrait de Parfum"},{slug:"silky",name:"Silky",collection:"intimacy",price:180,variant:"48848763977993",url:"https://zavyla.com/products/silky",available:!0,preorder:!1,tagline:"La delicatezza, sulla pelle.",family:"Acquatico e muschiato",description:"Limonata e cocco incontrano note acquatiche e incenso. Legni, muschio e ambra grigia evocano un\u2019atmosfera intima, morbida come seta.",color:"#714658",stage:"#491c2f",notes:["Accordo limonata \xB7 Cocco","Incenso \xB7 Note acquatiche \xB7 Note ozoniche","Muschio \xB7 Cedro \xB7 Patchouli \xB7 Ambra grigia"],concentration:"Extrait de Parfum"},{slug:"occhio-di-tigre",name:"Occhio di Tigre",collection:"intimacy",price:180,variant:"48848458383625",url:"https://zavyla.com/products/occhio-di-tigre",available:!0,preorder:!1,tagline:"Segui la tua natura.",family:"Fruttato e ambrato",description:"Il lampone apre un cuore di muschio e ambra grigia. Cedro, oud, sandalo e ylang ylang danno forma a una scia intensa e magnetica.",color:"#705010",stage:"#49360e",notes:["Lampone","Muschio \xB7 Ambra grigia","Cedro \xB7 Patchouli \xB7 Oud \xB7 Sandalo \xB7 Ylang ylang"],concentration:"Extrait de Parfum"},{slug:"amund",name:"Amund",collection:"doppio",price:180,variant:"56798840946953",url:"https://zavyla.com/products/amund",available:!0,preorder:!1,tagline:"Una presenza che rimane.",family:"Gourmand e legnoso",description:"Mandorla e tabacco aprono un accordo profondo. Vaniglia, tonka e cioccolato ne scaldano il cuore, mentre i legni e il tabacco secco danno carattere al finale.",color:"#6c5345",stage:"#492e1f",notes:["Olio di mandorla \xB7 Foglie di tabacco","Mallo di mandorla \xB7 Vaniglia \xB7 Tonka \xB7 Cioccolato","Legni aromatici \xB7 Tabacco secco"],concentration:"Extrait de Parfum"},{slug:"sylind",name:"Sylind",collection:"doppio",price:180,variant:"56798886756617",url:"https://zavyla.com/products/sylind",available:!0,preorder:!1,tagline:"Respira, ricomincia.",family:"Floreale e verde",description:"Fiori d\u2019arancio e foglie di tiglio introducono un cuore di mughetto e gelsomino. Il muschio verde chiude una fragranza luminosa, delicata ed essenziale.",color:"#756c30",stage:"#49420e",notes:["Fiori d\u2019arancio \xB7 Foglie di tiglio","Mughetto \xB7 Gelsomino \xB7 Fiori di tiglio","Muschio verde"],concentration:"Extrait de Parfum"}],iu=[{name:"Discovery set",handle:"discovery-set",variants:[{id:"55062825173257",name:"Default Title",price:40}],image:"https://cdn.shopify.com/s/files/1/0734/2873/0121/files/Discoveryset.jpg?v=1748433990"},{name:"The Love Collection Box",handle:"the-love-collection-box",variants:[{id:"48989599465737",name:"Basic Box",price:1440},{id:"48989599498505",name:"Standard Box",price:2040},{id:"48989599531273",name:"Premium Box",price:2560}],image:"https://cdn.shopify.com/s/files/1/0734/2873/0121/files/rose_gold_love_600x800_693a3e5c-51c8-4e98-b8e2-b637b9476b40.jpg?v=1747295755"},{name:"Wedding Gift Box",handle:"gift-box",variants:[{id:"45509125800201",name:"Default Title",price:500}],image:"https://cdn.shopify.com/s/files/1/0734/2873/0121/files/wedding-box1.jpg?v=1747312123"},{name:"Zavyla gift card",handle:"zavyla-gift-card",variants:[{id:"48848878207241",name:"\u20AC180",price:180},{id:"45425493639433",name:"\u20AC250",price:250},{id:"48848878240009",name:"\u20AC360",price:360},{id:"48848878272777",name:"\u20AC500",price:500}],image:"https://cdn.shopify.com/s/files/1/0734/2873/0121/files/1714574132697.jpg?v=1714574375"}];var hl=class extends Ks{constructor(e){super(e),this.type=gn}parse(e){let a=function(T,y){switch(T){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(y||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(y||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(y||""))}},h=function(T,y,_){y=y||1024;let z=T.pos,H=-1,D=0,B="",G=String.fromCharCode.apply(null,new Uint16Array(T.subarray(z,z+128)));for(;0>(H=G.indexOf(`
`))&&D<y&&z<T.byteLength;)B+=G,D+=G.length,z+=128,G+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(z,z+128)));return-1<H?(_!==!1&&(T.pos+=D+H+1),B+G.slice(0,H)):!1},f=function(T){let y=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,G;for((T.pos>=T.byteLength||!(B=h(T)))&&a(1,"no header found"),(G=B.match(y))||a(3,"bad initial token"),D.valid|=1,D.programtype=G[1],D.string+=B+`
`;B=h(T),B!==!1;){if(D.string+=B+`
`,B.charAt(0)==="#"){D.comments+=B+`
`;continue}if((G=B.match(_))&&(D.gamma=parseFloat(G[1])),(G=B.match(R))&&(D.exposure=parseFloat(G[1])),(G=B.match(z))&&(D.valid|=2,D.format=G[1]),(G=B.match(H))&&(D.valid|=4,D.height=parseInt(G[1],10),D.width=parseInt(G[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||a(3,"missing format specifier"),D.valid&4||a(3,"missing image size specifier"),D},d=function(T,y,_){let R=y;if(R<8||R>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);R!==(T[2]<<8|T[3])&&a(3,"wrong scanline width");let z=new Uint8Array(4*y*_);z.length||a(4,"unable to allocate buffer space");let H=0,D=0,B=4*R,G=new Uint8Array(4),te=new Uint8Array(B),F=_;for(;F>0&&D<T.byteLength;){D+4>T.byteLength&&a(1),G[0]=T[D++],G[1]=T[D++],G[2]=T[D++],G[3]=T[D++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=R)&&a(3,"bad rgbe scanline format");let W=0,Z;for(;W<B&&D<T.byteLength;){Z=T[D++];let le=Z>128;if(le&&(Z-=128),(Z===0||W+Z>B)&&a(3,"bad scanline data"),le){let ve=T[D++];for(let be=0;be<Z;be++)te[W++]=ve}else te.set(T.subarray(D,D+Z),W),W+=Z,D+=Z}let ne=R;for(let le=0;le<ne;le++){let ve=0;z[H]=te[le+ve],ve+=R,z[H+1]=te[le+ve],ve+=R,z[H+2]=te[le+ve],ve+=R,z[H+3]=te[le+ve],H+=4}F--}return z},g=function(T,y,_,R){let z=T[y+3],H=Math.pow(2,z-128)/255;_[R+0]=T[y+0]*H,_[R+1]=T[y+1]*H,_[R+2]=T[y+2]*H,_[R+3]=1},x=function(T,y,_,R){let z=T[y+3],H=Math.pow(2,z-128)/255;_[R+0]=zi.toHalfFloat(Math.min(T[y+0]*H,65504)),_[R+1]=zi.toHalfFloat(Math.min(T[y+1]*H,65504)),_[R+2]=zi.toHalfFloat(Math.min(T[y+2]*H,65504)),_[R+3]=zi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=f(m),E=p.width,S=p.height,v=d(m.subarray(m.pos),E,S),M,b,A;switch(this.type){case on:A=v.length/4;let T=new Float32Array(A*4);for(let _=0;_<A;_++)g(v,_*4,T,_*4);M=T,b=on;break;case gn:A=v.length/4;let y=new Uint16Array(A*4);for(let _=0;_<A;_++)x(v,_*4,y,_*4);M=y,b=gn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:E,height:S,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case on:case gn:a.colorSpace=Xt,a.minFilter=ft,a.magFilter=ft,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}};var Yy=i=>`assets/forgive-study/studio-glass-${i||typeof innerWidth=="number"&&(innerWidth<900||matchMedia("(pointer:coarse)").matches)?"1k":"2k"}.hdr?v=R50`,ru=new Map;function dl(i){let e=Yy(i);return ru.has(e)||ru.set(e,new hl().loadAsync(e)),ru.get(e).then(t=>{let n=t.clone();return n.mapping=jr,n.needsUpdate=!0,n})}function hf(i){return`uniform float otticaFondale;
`+i.replace("return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );",`if (otticaFondale > .5) return textureLod( transmissionSamplerMap, fragCoord.xy, 0.0 );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );`)}function df(i,e){for(let t of i){let n=t.material.userData.otticaFondale;n&&(n.value=e?1:0)}}function fl(i,e){let t=new zt({color:16777215,roughness:.022,metalness:0,transmission:1,thickness:.018,ior:1.47,attenuationColor:new Te("#eff5ef"),attenuationDistance:3,envMapIntensity:.48,side:fn}),n={value:0};t.userData.otticaFondale=n,t.onBeforeCompile=s=>{s.uniforms.otticaFondale=n,s.uniforms.interiorMap={value:i.texture},s.uniforms.interiorSize={value:e},s.vertexShader=`varying float bottleHeight;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
bottleHeight=position.y;`),s.fragmentShader=`varying float bottleHeight;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <transmission_pars_fragment>",hf(st.transmission_pars_fragment).replaceAll("transmissionSamplerMap","interiorMap").replaceAll("transmissionSamplerSize","interiorSize")),s.fragmentShader=s.fragmentShader.replace("#include <transmission_fragment>",st.transmission_fragment.replace("material.thickness = thickness;","material.thickness=mix(.09,thickness,smoothstep(.045,.105,bottleHeight));"))};let r=t.onBeforeCompile;return t.onBeforeCompile=s=>{r(s),s.fragmentShader=s.fragmentShader.replace("vec3 attenuatedColor = transmittance * transmittedLight.rgb;",`
#ifdef ENVMAP_TYPE_CUBE_UV
 vec3 direction = refract(-v,n,1.0/ior);
 // Una direzione degenere (riflessione totale, normale nulla) campiona fuori
 // dall'atlante dell'ambiente: da l\xEC i quadrati neri. Si ripiega sulla vista.
 direction = dot(direction,direction) > 1e-6 ? normalize(direction) : -v;
 vec3 studioTransmission = textureCubeUV(envMap,envMapRotation*direction,max(roughness,.06)).rgb;
 float baseWeight=1.0-smoothstep(.04,.13,bottleHeight);
 transmittedLight.rgb=mix(transmittedLight.rgb,studioTransmission, .28*baseWeight);
#endif
vec3 attenuatedColor = transmittance * transmittedLight.rgb;`)},t.customProgramCacheKey=()=>"zavyla-studio-refraction-v6-fondale",t}var Zy={forgive:"#c9b48d",promise:"#c39827",listen:"#c8983b",enjoy:"#bbab89",give:"#c6b39a",trust:"#d69e27",speak:"#c6a04c",share:"#c3b69b","irish-whiskey":"#e1bb52",silky:"#d3ccb8","occhio-di-tigre":"#d8ceaf",amund:"#d9d8c1",sylind:"#bdb88e"},cf=.45,Ky=.46,Jy=0,jy=1.5,Qy=.55;function pl(i,e=null,t=null){let n=new zt({color:16777215,metalness:0,roughness:.012,transmission:1,thickness:cf,ior:1.36,attenuationColor:new Te(Zy[i]||"#c9b48d"),attenuationDistance:cf,envMapIntensity:.4,side:fn}),r={value:0};return n.userData.otticaFondale=r,n.onBeforeCompile=s=>{s.uniforms.otticaFondale=r,s.vertexShader=`varying vec3 liquidAxisPoint;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
liquidAxisPoint=(modelMatrix*vec4(0.,position.y,0.,1.)).xyz;`),s.fragmentShader=`varying vec3 liquidAxisPoint;
`+s.fragmentShader,e&&(s.uniforms.surroundingsMap={value:e.texture},s.uniforms.surroundingsSize={value:t},s.fragmentShader=s.fragmentShader.replace("#include <transmission_pars_fragment>",hf(st.transmission_pars_fragment).replaceAll("transmissionSamplerMap","surroundingsMap").replaceAll("transmissionSamplerSize","surroundingsSize"))),e||(s.fragmentShader=`uniform float otticaFondale;
`+s.fragmentShader),s.fragmentShader=s.fragmentShader.replace("vec3 refractedRayExit = position + transmissionRay;",`vec3 refractedRayExit = position + transmissionRay;
   if(otticaFondale>.5){
    vec3 axis=modelMatrix[1].xyz;
    axis=dot(axis,axis)>1e-6 ? normalize(axis) : vec3(0.,1.,0.);
    vec3 radial=position-liquidAxisPoint;
    float radius=max(length(radial),.001);
    vec3 entryNormal=radial/radius;
    vec3 inside=refract(-v,entryNormal,1./ior);
    vec3 across=inside-axis*dot(inside,axis);
    float acrossLength=length(across);
    // Limite geometrico della corda obliqua; i raggi quasi assiali
    // ricadono sul percorso breve, senza cambiare quelli ordinari.
    float chord=clamp(-2.*dot(radial,across)/max(dot(across,across),.001),0.,2.*radius/max(acrossLength,.1));
    vec3 exitRadial=radial+across*chord;
    vec3 exitNormal=dot(exitRadial,exitRadial)>1e-6 ? normalize(exitRadial) : entryNormal;
    vec3 outside=refract(inside,-exitNormal,ior);
    // Le superfici quasi orizzontali (menisco/spalla) usano il percorso breve.
    float cylinder=1.-smoothstep(.25,.75,abs(dot(n,axis)));
    vec3 lensExit=position+inside*chord+outside*(7.0*radius);
    vec4 lensClip=projMatrix*viewMatrix*vec4(lensExit,1.);
    if(acrossLength>.1 && dot(inside,inside)>1e-6 && dot(outside,outside)>1e-6
       && !any(isnan(lensClip)) && !any(isinf(lensClip)) && lensClip.w>1e-5){
     refractedRayExit=mix(refractedRayExit,lensExit,cylinder);
    }
   }`),s.fragmentShader=s.fragmentShader.replace("#include <transmission_fragment>",st.transmission_fragment.replace("vec3 n = inverseTransformDirection( normal, viewMatrix );","vec3 n = inverseTransformDirection( normal, viewMatrix ); material.thickness *= mix(SPESSO_BORDO,SPESSO_CENTRO,abs(dot(n,v)));".replace("SPESSO_BORDO",jy.toFixed(2)).replace("SPESSO_CENTRO",Qy.toFixed(2)))),s.fragmentShader=s.fragmentShader.replace("vec3 attenuatedColor = transmittance * transmittedLight.rgb;",`
#ifdef ENVMAP_TYPE_CUBE_UV
 vec3 dir = refract(-v,n,1.0/ior);
 dir = dot(dir,dir) > 1e-6 ? normalize(dir) : -v;
 vec3 studio = textureCubeUV(envMap,envMapRotation*dir,max(roughness,SFOCA)).rgb;
 if (otticaFondale > .5) {
  float facing=abs(dot(n,v));
  vec3 axis=modelMatrix[1].xyz;
  axis=dot(axis,axis)>1e-6 ? normalize(axis) : vec3(0.,1.,0.);
  vec3 right=cross(axis,v);
  if(dot(right,right)<=1e-6) right=cross(axis,abs(axis.x)<.9 ? vec3(1.,0.,0.) : vec3(0.,0.,1.));
  right=normalize(right);
  float x=dot(n,right);
  // Softbox verticali rifratti: stretti, con bordi morbidi, non un velo.
  // pow(base negativa, 2.) e' indefinito in GLSL, anche con esponente intero.
  float stripLeft=(x+.38)/.065, stripRight=(x-.62)/.045;
  float strip=exp(-(stripLeft*stripLeft))+ .65*exp(-(stripRight*stripRight));
  float centro=pow(facing,5.);
  float luminanza=dot(studio,vec3(.2126,.7152,.0722));
  vec3 fasce=studio*max(luminanza-.35,0.)/max(luminanza,1e-4)/(1.+luminanza);
  transmittedLight.rgb += centro*(vec3(.20)+.32*fasce);
  transmittedLight.rgb += vec3(1.8)*strip*pow(facing,2.);
  transmittedLight.rgb *= smoothstep(.06,.35,facing);
 } else {
  transmittedLight.rgb = mix(transmittedLight.rgb, studio, LUCE_STUDIO);
 }
#endif
// Ultima barriera prima di scrivere interior: recupero del campione three
// lungo il percorso breve, solo se il risultato dedicato non e' finito.
if(otticaFondale>.5 && (any(isnan(transmittedLight)) || any(isinf(transmittedLight)))){
 vec3 shortRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);
 vec4 shortClip=projMatrix*viewMatrix*vec4(position+shortRay,1.);
 vec2 shortUV=vec2(.5);
 if(!any(isnan(shortClip)) && !any(isinf(shortClip)) && abs(shortClip.w)>1e-5)
  shortUV=clamp(shortClip.xy/shortClip.w*.5+.5,vec2(0.),vec2(1.));
 transmittedLight=getTransmissionSample(shortUV,roughness,ior);
 if(any(isnan(transmittedLight)) || any(isinf(transmittedLight))) transmittedLight=vec4(0.,0.,0.,1.);
}
vec3 attenuatedColor = transmittance * transmittedLight.rgb;`.replace("LUCE_STUDIO",Ky.toFixed(2)).replace("SFOCA",Jy.toFixed(3)))},n.customProgramCacheKey=()=>"zavyla-liquid-v10-finite-"+!!e,n}var uf=i=>()=>i.domElement.dispatchEvent(new Event("texturepronta"));function ml(i,e,t,n){if(e.includes("tappo")&&!["sylind","amund"].includes(t)){i.metalness=0,i.roughness=.1,i.envMapIntensity=.95,"clearcoat"in i&&(i.clearcoat=1,i.clearcoatRoughness=.03);let r=new ni().load(`assets/materials/tappi/${t}.jpg?v=R136`,uf(n));r.flipY=!1,r.colorSpace=Ct,r.anisotropy=Math.min(16,n.capabilities.getMaxAnisotropy()),i.map=r,i.color.set("#ffffff"),i.normalMap=null,i.roughnessMap=null,i.needsUpdate=!0}if(e.includes("tappo")&&["sylind","amund"].includes(t)&&(i.metalness=1,i.roughness=.1,i.roughnessMap=null,i.needsUpdate=!0),e.includes("etichetta")){let r=new ni,s=uf(n),a=r.load(`assets/materials/labels/${t}-foil.png?v=R167`,s),o=r.load(`assets/materials/labels/${t}-roughness.png?v=R167`,s);a.flipY=o.flipY=!1,i.roughness=1,i.roughnessMap=o,i.metalness=.92,i.metalnessMap=a,i.side=fn;let l=r.load("assets/materials/paper-grain.jpg");l.wrapS=l.wrapT=en,l.repeat.set(6,6),i.bumpMap=l,i.bumpScale=5e-4,i.userData.finish="matte-paper-polished-foil"}i.map&&(i.map.anisotropy=Math.min(16,n.capabilities.getMaxAnisotropy()))}function gl(i){if(i.children.some(u=>u.name==="Paper cut edge"))return;let e=i.geometry,t=e.attributes.position,n=e.attributes.normal,r=e.index?.array;if(!r)return;let s=Array.from({length:t.count},(u,h)=>[t.getX(h),t.getY(h),t.getZ(h)].map(f=>Math.round(f*1e6)).join(",")),a=new Map;for(let u=0;u<r.length;u+=3)for(let h=0;h<3;h++){let f=r[u+h],d=r[u+(h+1)%3],g=[s[f],s[d]].sort().join(":"),x=a.get(g);x?x.count++:a.set(g,{a:f,b:d,count:1})}let o=[];for(let{a:u,b:h,count:f}of a.values()){if(f!==1)continue;let d=new N().fromBufferAttribute(t,u),g=new N().fromBufferAttribute(t,h),x=d.clone().addScaledVector(new N().fromBufferAttribute(n,u),-.0014),m=g.clone().addScaledVector(new N().fromBufferAttribute(n,h),-.0014);for(let p of[d,g,x,g,m,x])o.push(p.x,p.y,p.z)}let l=new wt;l.setAttribute("position",new rt(o,3)),l.computeVertexNormals();let c=new xt(l,new Qt({color:"#d8d1bf",roughness:.95,side:kt}));c.name="Paper cut edge",i.add(c)}var ff=new WeakMap;function e_(i,e){if(!e||!e.length||!i.length)return null;let t=i[0],n=ff.get(t);if(n&&n.n===i.length)return n.m;let r=new Set(e),s=[];for(let a of i)a.traverse(o=>{o.isMesh&&!r.has(o)&&s.push(o)});return ff.set(t,{m:s,n:i.length}),s}function vl({renderer:i,scene:e,camera:t,bottles:n,glassMeshes:r,liquidMeshes:s,tubeMeshes:a=[],labelMeshes:o,background:l,interior:c,target:u=null,surroundings:h=[],fondaleOttico:f=null,otticaFondale:d=!1,fondaleScheda:g=null}){let x=n.map(M=>M.visible),m=e.background,p=a.map(M=>M.visible),E=e_(n,a),S=E?E.map(M=>M.visible):null,v=h.map(M=>M.visible);df([...r,...s],d),f?.userData?.aggiorna?.(),g?.userData?.aggiorna?.();try{g&&(e.background=g),d&&!m&&f&&h.forEach(M=>M.visible=!1),E?E.forEach(M=>M.visible=!1):n.forEach(M=>M.visible=!1),!m&&f&&(e.background=f),i.setRenderTarget(l),i.render(e,t),E?E.forEach((M,b)=>M.visible=S[b]):n.forEach((M,b)=>M.visible=x[b]),h.forEach(M=>M.visible=!1),h.length&&(e.background=l.texture),o.forEach(M=>M.visible=!1),r.forEach(M=>M.visible=!1),s.forEach(M=>M.visible=!0),a.forEach(M=>M.visible=!d),i.setRenderTarget(c),i.render(e,t),o.forEach(M=>M.visible=!0),r.forEach(M=>M.visible=!0),s.forEach(M=>M.visible=!1),a.forEach(M=>M.visible=!1),e.background=g||m,h.forEach((M,b)=>M.visible=v[b]),i.setRenderTarget(u),i.render(e,t)}finally{a.forEach((M,b)=>M.visible=p[b]),e.background=m,h.forEach((M,b)=>M.visible=v[b]),E?E.forEach((M,b)=>M.visible=S[b]):n.forEach((M,b)=>M.visible=x[b])}}var ua=i=>Math.max(0,Math.min(1,i)),yr=i=>(i=ua(i),i*i*(3-2*i));function yl(i,e,t=!1,n=0,r=1.5){let s=Math.tan(16*Math.PI/180)*(t?3.8:3.08)*r,a=yr(i),o=Math.sin(n*.22)*.018,l=yr(ua((i-.18)/.66));return{x:s*(t?.2:.39)*(1-a*.14),y:(t?-1.72:-.91)*(1-a)+(t?-.2:-.1)*a,z:0,scale:(t?2.62:2.65)*(1-a)+(t?.86:1.04)*a,rotation:-.3*(1-a)+(1-l)*-1.95+o,pitch:.025*(1-a),tilt:-.32*(1-a)-.1*a}}var t_=i=>1+(1.7+1)*Math.pow(i-1,3)+1.7*Math.pow(i-1,2);function _l(i,e=!1){let t=ua((i-.26)/.52),n=t>=1?1:t_(t),r=yr(ua(i/.42));return{capY:(1-n)*(e?.3:.34),capSpin:(1-yr(t))*2.1,bodyY:(1-r)*-.16,spread:1.52-.52*yr(i),light:.65+yr(i)*.85,fill:.08+.92*yr(ua((i-.1)/.56))}}function xl(i,e){let t=i.geometry;t.computeBoundingBox();let n=t.boundingBox.min.y,r=t.boundingBox.max.y,s=e.geometry.attributes.position,a=e.geometry.attributes.normal,o=new Map;for(let k=0;k<s.count;k++){let oe=s.getX(k),Q=s.getY(k),ce=s.getZ(k);if(oe*a.getX(k)+ce*a.getZ(k)>-.015||Q<n)continue;let Je=Math.round(Q*1e4);o.has(Je)||o.set(Je,[]),o.get(Je).push(Math.hypot(oe,ce))}let l=[...o].sort((k,oe)=>k[0]-oe[0]).map(([k,oe])=>new we(Math.max(.001,oe.reduce((Q,ce)=>Q+ce)/oe.length-.0012),k/1e4));if(l.length<3)throw new Error("Missing inner glass profile: "+i.name);l.unshift(new we(0,n),new we(l[0].x,n)),l.push(new we(l.at(-1).x,l.at(-1).y+.001),new we(0,l.at(-1).y+.001));let c=new $s(l,64);c.computeBoundingBox(),i.geometry=c,t.dispose();let u=c.attributes.position,h=c.index.array,f=[],d=new Set;for(let k=0;k<h.length;k+=3)for(let oe=0;oe<3;oe++){let Q=h[k+oe],ce=h[k+(oe+1)%3],Je=Math.min(Q,ce)+":"+Math.max(Q,ce);d.has(Je)||(d.add(Je),f.push([new N().fromBufferAttribute(u,Q),new N().fromBufferAttribute(u,ce)]))}let g=k=>{for(let oe=1;oe<l.length;oe++){let Q=l[oe-1],ce=l[oe];if(k<=ce.y&&ce.y>Q.y)return En.lerp(Q.x,ce.x,(k-Q.y)/(ce.y-Q.y))}return 0},x=l.at(-1).y,m=[],p=0;for(let k=0;k<64;k++){let oe=n+(k+.5)/64*(x-n),Q=g(oe),ce=Math.max(1,Math.round(72*Q*Q/.267**2));for(let Je=0;Je<ce;Je++){let U=Q*Math.sqrt((Je+.5)/ce),Ge=Je*2.399963+k*.371;m.push(new N(Math.cos(Ge)*U,oe,Math.sin(Ge)*U)),oe<r&&p++}}let E=new Float32Array(m.length),S=new N(0,1,0),v=new N(0,1,0),M=new N(0,1,0),b=new N,A=new pn,T=new pn,y=new N,_=new N,R=new N,z={fluidNormal:{value:v},fluidLevel:{value:r}},H=i.material.onBeforeCompile;i.material.onBeforeCompile=k=>{H(k),Object.assign(k.uniforms,z),k.vertexShader=`varying vec3 fluidLocal;
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
fluidLocal=position;`),k.fragmentShader=`varying vec3 fluidLocal;uniform vec3 fluidNormal;uniform float fluidLevel;
`+k.fragmentShader,k.fragmentShader=k.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(dot(fluidLocal,fluidNormal)>fluidLevel+.00001)discard;`)};let D=i.material.customProgramCacheKey;i.material.customProgramCacheKey=()=>"zavyla-liquid-free-surface-v1-"+(D?D.call(i.material):""),i.material.needsUpdate=!0;let B=new wt,G=new Float32Array(18e4),te=new Float32Array(18e4);B.setAttribute("position",new Lt(G,3).setUsage(il)),B.setAttribute("normal",new Lt(te,3).setUsage(il)),B.setDrawRange(0,0);let F=i.material.clone();F.roughness=.045,F.thickness=.012,F.envMapIntensity=.8,F.side=kt;let W={surfaceTime:{value:0},surfaceAmplitude:{value:0},surfaceCenter:{value:new N},surfaceU:{value:new N},surfaceV:{value:new N},surfaceNormal:{value:v},surfaceRadius:{value:.25}};F.onBeforeCompile=k=>{H(k),Object.assign(k.uniforms,W),k.vertexShader=`uniform float surfaceTime,surfaceAmplitude,surfaceRadius;uniform vec3 surfaceCenter,surfaceU,surfaceV,surfaceNormal;
 `+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 vec3 relativeSurface=position-surfaceCenter;float sx=dot(relativeSurface,surfaceU),sy=dot(relativeSurface,surfaceV),rr=surfaceRadius*surfaceRadius;
 float envelope=max(0.,1.-(sx*sx+sy*sy)/rr);float wa=sx*34.+sy*19.-surfaceTime*2.4,wb=-sx*23.+sy*47.+surfaceTime*1.8;
 float wave=(sin(wa)+.55*sin(wb))/1.55;
 float dx=surfaceAmplitude*(-2.*sx/rr*wave+envelope*(34.*cos(wa)-.55*23.*cos(wb))/1.55);
 float dy=surfaceAmplitude*(-2.*sy/rr*wave+envelope*(19.*cos(wa)+.55*47.*cos(wb))/1.55);
 objectNormal=normalize(objectNormal-surfaceU*dx-surfaceV*dy);
 `),k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed+=surfaceNormal*surfaceAmplitude*envelope*wave;`)},F.customProgramCacheKey=()=>"zavyla-liquid-surface-gpu-v3-"+(D?D.call(i.material):"");let Z=new xt(B,F);Z.name="Free liquid surface",Z.frustumCulled=!1,i.add(Z);let ne=!0,le=0,ve=NaN,be=new N,He=!1,j=-1;function se(k,oe){let Q=[],ce=new Set;for(let[Qe,je]of f){let L=Qe.dot(v)-k,w=je.dot(v)-k;if(L<0==w<0)continue;let X=Qe.clone().lerp(je,L/(L-w)),ee=[X.x,X.y,X.z].map(ae=>Math.round(ae*1e5)).join(",");ce.has(ee)||(ce.add(ee),Q.push(X))}if(Q.length<3){B.setDrawRange(0,0);return}let Je=Q.reduce((Qe,je)=>Qe.add(je),new N).multiplyScalar(1/Q.length),U=new N().crossVectors(v,Math.abs(v.y)<.9?S:new N(1,0,0)).normalize(),Ge=new N().crossVectors(v,U);Q.sort((Qe,je)=>Math.atan2(Qe.clone().sub(Je).dot(Ge),Qe.clone().sub(Je).dot(U))-Math.atan2(je.clone().sub(Je).dot(Ge),je.clone().sub(Je).dot(U))),W.surfaceCenter.value.copy(Je),W.surfaceU.value.copy(U),W.surfaceV.value.copy(Ge),W.surfaceRadius.value=Q.reduce((Qe,je)=>Qe+je.distanceTo(Je),0)/Q.length;let We=0,Ce=10,Ie=.0032,lt=.014,Le=0;function ke(Qe,je){let L=Qe.clone().sub(Je),w=L.length(),X=L.dot(U)*je,ee=L.dot(Ge)*je,ae=L.dot(U)/w,K=L.dot(Ge)/w,Fe=Math.exp(-(1-je)*w/lt),pe=X*34+ee*19-oe*2.4,ze=X*-23+ee*47+oe*1.8,Ve=(Math.sin(pe)+.55*Math.sin(ze))/1.55,de=1-je*je,Me=-Ie*(1-Fe)+Le*de*Ve,Ke=Ie/lt*Fe*ae+Le*(-2*je/w*ae*Ve+de*(34*Math.cos(pe)-.55*23*Math.cos(ze))/1.55),Oe=Ie/lt*Fe*K+Le*(-2*je/w*K*Ve+de*(19*Math.cos(pe)+.55*47*Math.cos(ze))/1.55),xe=Je.clone().addScaledVector(L,je).addScaledVector(v,Me),et=v.clone().addScaledVector(U,-Ke).addScaledVector(Ge,-Oe).normalize();G.set(xe.toArray(),We),te.set(et.toArray(),We),We+=3}for(let Qe=0;Qe<Ce;Qe++)for(let je=0;je<Q.length;je++){let L=Q[je],w=Q[(je+1)%Q.length],X=Qe/Ce,ee=(Qe+1)/Ce;Qe>0&&(ke(L,X),ke(L,ee),ke(w,X)),ke(L,ee),ke(w,ee),ke(w,X)}B.setDrawRange(0,We/3),B.attributes.position.needsUpdate=!0,B.attributes.normal.needsUpdate=!0}return{mesh:i,update(k,oe,Q=!1){He=Q,k=En.clamp(k,.001,.04),i.getWorldQuaternion(A),i.getWorldPosition(y);let ce=y.clone().sub(_).divideScalar(k),Je=ce.clone().sub(R).divideScalar(k);ne&&(T.copy(A),Je.set(0,0,0),ce.set(0,0,0));let U=S.clone().addScaledVector(Je.clampLength(0,5),Q?0:.045).normalize().applyQuaternion(A.clone().invert());le=Q?0:Math.min(1.5,le*Math.exp(-k*2.5)+A.angleTo(T)*2+Je.length()*k*.06),ne||Q?(v.copy(U),M.copy(U),b.set(0,0,0)):(b.addScaledVector(U.clone().sub(M),k*65).multiplyScalar(Math.exp(-k*8)),M.addScaledVector(b,k),M.lengthSq()>1e-8&&v.copy(M).normalize());let Ge=ve;if(ne||v.distanceToSquared(be)>1e-9||le>.002){for(let We=0;We<m.length;We++)E[We]=m[We].dot(v);E.sort(),Ge=E[Math.min(p,E.length-1)],z.fluidLevel.value=Ge,be.copy(v),ve=Ge,se(Ge,oe),j=oe}W.surfaceTime.value=oe,W.surfaceAmplitude.value=Q?0:65e-5+Math.min(1,le)*.003,_.copy(y),R.copy(ce),T.copy(A),ne=!1,i.userData.fluid={normal:v.toArray(),level:Ge,energy:le,fill:p/m.length,surface:"curved-meniscus-ripples",meniscusDepth:.0032,surfaceVertices:B.drawRange.count}}}}function Ml(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new wt,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=pf(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][f]);let g=pf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function pf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let a=new e(s),o=new Lt(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);o.setComponent(f+h,g,x)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function su(i,e){if(e===Lc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===rs||e===oa){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===rs)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Pt=i=>{let e=Math.sin(i*127.1+19.7)*43758.5453;return e-Math.floor(e)};function mf(i,e){let t=Pt(e+7),n=Pt(e+31),r=e%3===0?-1:1,s=i*2.1,a=(n-.5)*1.45+Math.sin(s+n*4)*.14,o=r*(.37+.22*t)+Math.sin(a*4+s)*.085,l=-.3-t*.16+Math.cos(s+n*5)*.065;return e%5===0&&(o=Math.sin(s+n*5)*.23,a=-.02+(n-.5)*.55+Math.sin(s+n*4)*.08,l=-.58-t*.08),{x:o,y:a,z:l,angle:n*6.28+s*(e%2?1:-1),size:.65+Pt(e+3)*.7,fade:1,age:i}}var au=new Map;function gf(i=mf){let e=new Ht,t=[],n=new Tt,r=-1;e.name="Forgive detailed spices";function s(g){let m=au.get(g)||new Uint8Array(4194304);if(!au.has(g)){for(let E=0;E<1024;E++)for(let S=0;S<1024;S++){let v=S/1024,M=E/1024,b=v+.009*Math.sin(M*35)+.003*Math.sin(M*103+v*12),A;if(g==="pepper"){let y=v*28,_=M*28,R=Math.floor(y),z=Math.floor(_),H=10,D=10;for(let B=-1;B<=1;B++)for(let G=-1;G<=1;G++){let te=(R+G+28)%28+28*((z+B+28)%28),F=R+G+.18+.64*Pt(te+83)-y,W=z+B+.18+.64*Pt(te+913)-_,Z=F*F+W*W;Z<H?(D=H,H=Z):Z<D&&(D=Z)}A=.23+.5*Math.min(1,(Math.sqrt(D)-Math.sqrt(H))*4)+Pt(S+E*1024)*.08}else A=.4+.28*Math.pow(.5+.5*Math.cos(b*Math.PI*(g==="vanilla"?94:70)),5)+.08*Math.sin(b*600+M*17)+Pt(S+E*1024)*.09;let T=Math.round(255*A);m.set([T,T,T,255],(E*1024+S)*4)}au.set(g,m)}let p=new Xn(m,1024,1024);return p.wrapS=p.wrapT=en,p.generateMipmaps=!0,p.minFilter=rn,p.magFilter=ft,p.needsUpdate=!0,p}function a(g,x){let m=g==="vanilla"?72:36,p=g==="vanilla"?24:64,E=[],S=[],v=[],M=[];for(let A=0;A<=m;A++)for(let T=0;T<=p;T++){let y=A/m,_=T/p*Math.PI*2,R=x*1.73,z,H,D,B;if(g==="cardamom"){let G=Math.pow(Math.sin(Math.PI*y),.68)*(.89+.18*y),te=1+.12*Math.cos(_*3+R),F=1-.13*Math.pow(.5+.5*Math.cos(_*3+R+Math.PI),22),W=1+.045*Math.sin(_*24+.28*Math.sin(y*14+R))+.012*Math.sin(y*93+_*39),Z=.0145*G*te*F*W;z=Math.cos(_)*Z+.0025*Math.sin(y*Math.PI)*Math.sin(R+y*3),H=(y-.5)*(.057+x*.003),D=Math.sin(_)*Z,B=.79+.16*F+.06*Math.sin(y*19+_*9+R)}else{let G=.12+.88*Math.pow(Math.sin(Math.PI*y),.3),te=Math.pow(y,9)*.017,F=1-.27*Math.pow(.5+.5*Math.cos(_*2+.2*Math.sin(y*9)),20),W=1+.035*Math.sin(_*17+y*13)+.025*Math.sin(_*29-y*8),Z=.0042*G*F*W*(1+.035*Math.sin(y*137+_*17));z=Math.cos(_)*Z+.013*Math.sin(y*3.5+R)*Math.sin(y*Math.PI)+te,H=(y-.5)*(.2+x*.023),D=Math.sin(_)*Z*.67+.008*Math.sin(y*4+R),B=.65+.25*F+.09*Math.sin(y*41+_*4)}if(E.push(z,H,D),S.push(T/p,y),v.push(B,B,B),A<m&&T<p){let G=A*(p+1)+T;M.push(G,G+p+1,G+1,G+1,G+p+1,G+p+2)}}let b=new wt;return b.setAttribute("position",new rt(E,3)),b.setAttribute("uv",new rt(S,2)),b.setAttribute("color",new rt(v,3)),b.setIndex(M),b.computeVertexNormals(),b}function o(g){let x=new bn(.011,64,48),m=x.attributes.position,p=[];for(let E=0;E<m.count;E++){let S=m.getX(E)/.011,v=m.getY(E)/.011,M=m.getZ(E)/.011,b=Math.sin(S*17+Math.sin(M*11)+g)*Math.sin(v*19+M*3),A=Math.pow(Math.abs(b),.35),T=.9+.065*A+.045*Math.sin(S*7+v*5+g)*Math.cos(M*8)+.015*Math.sin(S*61+M*31)*Math.cos(v*57);m.setXYZ(E,S*.011*T,v*.011*T*(.94+g*.045),M*.011*T);let y=new Te("#6b5847").lerp(new Te("#29211a"),.3+.5*(1-A));p.push(y.r,y.g,y.b)}return x.setAttribute("color",new rt(p,3)),x.computeVertexNormals(),x}let l=new zt({color:"#d7d6b4",vertexColors:!0,roughness:.82,bumpMap:s("cardamom"),bumpScale:32e-5,sheen:.12,sheenColor:new Te("#b6ad87")}),c=s("pepper"),u=new zt({vertexColors:!0,roughness:.9,bumpMap:c,bumpScale:3e-4,clearcoat:.035,clearcoatRoughness:.7}),h=new zt({color:"#352219",vertexColors:!0,roughness:.52,bumpMap:s("vanilla"),bumpScale:28e-5,clearcoat:.1,clearcoatRoughness:.48}),f=new ni().loadAsync("assets/forgive-study/cardamom-surface.jpg").then(g=>{g.colorSpace=Ct,g.wrapS=g.wrapT=Di,g.center.set(.5,.5),g.repeat.set(.55,.55),g.rotation=Math.PI/2,l.map=g,l.needsUpdate=!0});function d(g,x,m,p,E){let S=new Mn(x,m,p);S.name=g,S.frustumCulled=!1;for(let v=0;v<p;v++){let M=.85+Pt(v+E)*.15;S.setColorAt(v,new Te(M,M*.98,M*.92))}e.add(S),t.push({mesh:S,name:g,count:p,offset:E})}for(let g=0;g<3;g++){let x=a("cardamom",g),m=new tr(.0012,.0023,.006,9,3);m.translate(0,-(.057+g*.003)/2-.0015,0),m.setAttribute("color",new rt(Array.from({length:m.attributes.position.count*3},()=>.55),3));let p=Ml([x,m]);x.dispose(),m.dispose(),d("Cardamomo",p,l,17,4e3+g*137),d("Pepe nero",o(g),u,37,6e3+g*137),d("Vaniglia",a("vanilla",g),h,6,8e3+g*137)}return{group:e,ready:f,names:["Cardamomo","Pepe nero","Vaniglia"],counts:{Cardamomo:51,"Pepe nero":111,Vaniglia:18},update(g){if(g!==r){r=g;for(let x of t){for(let m=0;m<x.count;m++){let p=i(g,m+x.offset),E=1+Pt(m+x.offset+9)*.65;n.position.set(p.x,p.y,p.z),n.rotation.set(.35*Math.sin(m*3+g),p.angle*.55,m*2.399+g*(x.name==="Vaniglia"?-.5:.65)),n.scale.setScalar(E),n.updateMatrix(),x.mesh.setMatrixAt(m,n.matrix)}x.mesh.instanceMatrix.needsUpdate=!0}}}}}var ou=new Map,lu=new Map;function vf(){let i=new Map,e=new Map;function t(v){if(i.has(v))return i.get(v);let M=1024,b=ou.get(v)||new Uint8Array(M*M*4);if(!ou.has(v)){for(let T=0;T<M;T++)for(let y=0;y<M;y++){let _=y/M,R=T/M,z=Pt(y+T*M),H=_+.012*Math.sin(R*21),D=.5;if(v==="leaf"){let G=Math.exp(-Math.abs(_-.5)*170),te=Math.pow(.5+.5*Math.cos(R*70-Math.abs(_-.5)*42),24);D=.32+.34*G+.19*te+.04*Math.sin(_*370+R*160)+z*.06}else if(v==="peel"){let G=_*74,te=R*74,F=Math.floor(G),W=Math.floor(te),Z=9;for(let ne=-1;ne<=1;ne++)for(let le=-1;le<=1;le++){let ve=(F+le+74)%74+74*((W+ne+74)%74),be=F+le+Pt(ve+91)-G,He=W+ne+Pt(ve+811)-te;Z=Math.min(Z,be*be+He*He)}D=.68-.35*Math.exp(-Z*17)+z*.07}else v==="wood"||v==="nut"?D=.5+.19*Math.sin(H*310+Math.sin(R*16)*2)+.12*Math.sin(H*720+R*9)+z*.1:v==="petal"?D=.5+.09*Math.sin((_-.5)*(130+R*120))+.035*Math.sin(R*270+_*110)+z*.035:D=.36+z*.35+.08*Math.sin(_*160)*Math.cos(R*170);let B=Math.round(255*En.clamp(D,0,1));b.set([B,B,B,255],(T*M+y)*4)}ou.set(v,b)}let A=new Xn(b,M,M);return A.generateMipmaps=!0,A.minFilter=rn,A.magFilter=ft,A.wrapS=A.wrapT=en,A.needsUpdate=!0,i.set(v,A),A}function n(v){let M="color-"+v;if(i.has(M))return i.get(M);let b=t(v),A=lu.get(v)||new Uint8Array(b.image.data.length),T=v==="wood"||v==="nut"?.65:v==="peel"?.55:.32;if(!lu.has(v))for(let _=0;_<A.length;_+=4){let R=Math.round(255*(1-T)+b.image.data[_]*T);A.set([R,R,R,255],_)}lu.set(v,A);let y=new Xn(A,1024,1024);return y.generateMipmaps=!0,y.minFilter=rn,y.magFilter=ft,y.wrapS=y.wrapT=en,y.needsUpdate=!0,i.set(M,y),y}function r(v){if(e.has(v))return e.get(v);let M={petal:{map:n("petal"),roughness:.72,bumpMap:t("petal"),bumpScale:27e-5,sheen:.4,sheenColor:new Te("#f2d9d1")},leaf:{map:n("leaf"),roughness:.64,bumpMap:t("leaf"),bumpScale:46e-5,clearcoat:.07,clearcoatRoughness:.65},peel:{map:n("peel"),roughness:.55,bumpMap:t("peel"),bumpScale:46e-5,clearcoat:.12,clearcoatRoughness:.5},wood:{map:n("wood"),roughness:.88,bumpMap:t("wood"),bumpScale:4e-4},nut:{map:n("nut"),roughness:.82,bumpMap:t("nut"),bumpScale:28e-5},resin:{map:n("grain"),roughness:.62,bumpMap:t("grain"),bumpScale:23e-5,clearcoat:.16,clearcoatRoughness:.45},fruit:{map:n("grain"),roughness:.57,bumpMap:t("grain"),bumpScale:12e-5,sheen:.25,sheenColor:new Te("#a85748")}},b=new zt({vertexColors:!0,side:kt,...M[v]});return v==="petal"&&(b.sheen=.65,b.sheenRoughness=.85,b.thickness=18e-5,b.ior=1.38),e.set(v,b),b}function s(v,M,b=.08){let A=new Te(M),T=v.attributes.position,y=[];for(let _=0;_<T.count;_++){let R=1-b*.5+b*.5*Math.sin(T.getX(_)*380+T.getY(_)*240+T.getZ(_)*180);y.push(A.r*R,A.g*R,A.b*R)}return v.setAttribute("color",new rt(y,3)),v}function a(v){let b=v.every(T=>T.index)?v:v.map(T=>T.index?T.toNonIndexed():T),A=Ml(b);return new Set([...b,...v]).forEach(T=>T.dispose()),o(A)}function o(v){let M=v?.attributes?.normal;if(!M)return v;for(let b=0;b<M.count;b++){let A=M.getX(b),T=M.getY(b),y=M.getZ(b);A*A+T*T+y*y>1e-12||M.setXYZ(b,0,0,1)}return M.needsUpdate=!0,v}function l(v,M,b,A=24,T=8){return s(new Zr(new nr(v.map(y=>new N(...y))),A,M,T,!1),b)}function c({length:v=.08,width:M=.034,cup:b=.009,color:A="#ba7180",variant:T=0,leaf:y=!1,heart:_=!1,lobed:R=!1,res:z=40,rows:H=48}={}){let D=new Gt(1,1,z,H),B=D.attributes.position;for(let k=0;k<B.count;k++){let oe=B.getX(k)*2,Q=B.getY(k)+.5,ce=Math.pow(Math.max(0,Math.sin(Math.PI*Q)),y?.65:.48);_&&(ce*=1.32-.72*Q),R&&(ce*=.78+.22*Math.cos(Q*18));let Je=y?1+.022*Math.sin(Q*150):1+.045*Math.sin(Q*21+T),U=oe*M*ce*Je*(1+.08*oe+.07*Math.sin(Q*7+T))+.003*Math.sin(Q*3+T)*Q,Ge=Q*v-(_?.026*Math.abs(oe)**1.6*ce*Math.exp(-Math.pow((Q-.18)/.21,2)):0),We=Math.min(1,v/.08)*(12e-5*Math.sin(oe*85+Q*39)*Math.abs(oe)**2+b*oe*oe+.006*Math.sin(Q*4+T*.4)+.0012*Math.abs(oe)**3*Math.sin(Q*19+T)+.003*oe*Math.sin(Q*5+T)+.009*Math.pow(Q,7)*Math.sin(T+1));B.setXYZ(k,U,Ge,We)}D.computeVertexNormals(),s(D,A,.16);let G=D.attributes.color;for(let k=0;k<B.count;k++){let oe=Math.abs(D.attributes.uv.getX(k)*2-1),Q=D.attributes.uv.getY(k),ce=.035*(1+Math.sin(B.getX(k)*430+Math.sin(B.getY(k)*157))*Math.sin(B.getY(k)*293)),Je=Math.pow(oe,5)*.1+Math.pow(Q,8)*.035+ce;G.setXYZ(k,G.getX(k)*(1-Je*.3),G.getY(k)*(1-Je),G.getZ(k)*(1-Je*.7))}let te=D.clone(),F=te.attributes.position,W=te.index;for(let k=0;k<F.count;k++)F.setZ(k,F.getZ(k)-(y?25e-5:16e-5));for(let k=0;k<W.count;k+=3){let oe=W.getX(k);W.setX(k,W.getX(k+2)),W.setX(k+2,oe)}te.computeVertexNormals();let Z=te.attributes.color;for(let k=0;k<Z.count;k++)Z.setXYZ(k,Z.getX(k)*.94,Z.getY(k)*(y?1.04:.95),Z.getZ(k)*.96);let ne=[],le=[],ve=[],be=[];for(let k=0;k<=z;k++)be.push(k);for(let k=1;k<=H;k++)be.push(k*(z+1)+z);for(let k=z-1;k>=0;k--)be.push(H*(z+1)+k);for(let k=H-1;k>0;k--)be.push(k*(z+1));be.push(be[0]),be.forEach((k,oe)=>{if(ne.push(B.getX(k),B.getY(k),B.getZ(k),F.getX(k),F.getY(k),F.getZ(k)),le.push(oe/be.length,0,oe/be.length,1),oe<be.length-1){let Q=oe*2;ve.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}});let He=new wt;if(He.setAttribute("position",new rt(ne,3)),He.setAttribute("uv",new rt(le,2)),He.setIndex(ve),He.computeVertexNormals(),s(He,A,.08),!y)return a([D,te,He]);let j=[D,te,He],se=[];for(let k=0;k<=6;k++){let oe=k/6;se.push([0,oe*v,.006*Math.sin(oe*4+T*.4)+5e-4])}j.push(l(se,65e-5,"#b0af76",28,6));for(let k=1;k<6;k++)for(let oe of[-1,1]){let Q=k/7,ce=M*Math.sin(Math.PI*Q)*.78;j.push(l([[0,Q*v,.006*Math.sin(Q*4+T*.4)+6e-4],[oe*ce*.55,(Q+.04)*v,b*.25+.006*Math.sin((Q+.04)*4+T*.4)],[oe*ce,(Q+.08)*v,b*.64+.006*Math.sin((Q+.08)*4+T*.4)]],23e-5,"#9eab6a",10,5))}return j.push(l([[0,-.023,0],[.002,-.01,.001],[0,0,.002]],9e-4,"#786c43",14,6)),a(j)}function u(v,M=0){let b=v==="linden",A=v==="violet",T=v==="ylang",y=v==="tuberose",_=[],R=y||T?6:5,z=b?.024:T?.065:A?.027:y?.032:.035;for(let D=0;D<R;D++){let B=b?"#e8d894":T?"#d4bc57":A?"#8771ab":"#f3eadb",G=c({length:z*(.94+Pt(D+M*20)*.12),width:T||b?.007:.012,cup:T?.014:.004,color:B,variant:M+D*.3,res:24,rows:28});G.rotateX(T?.55:y?.35:.12),G.rotateZ(D*Math.PI*2/R+M*.18),y&&G.translate(0,0,.023),_.push(G)}let H=b?18:v==="orange"?16:5;for(let D=0;D<H;D++){let B=D*2.399,G=b?.013:.005,te=[Math.cos(B)*G,Math.sin(B)*G,.01+(y?.023:0)];_.push(l([[0,0,y?.023:0],[te[0]*.6,te[1]*.6,te[2]*.85],te],45e-5,"#d5bd65",6,5));let F=s(new bn(.0014,9,6),"#c39b3d");F.translate(...te),_.push(F)}if(y){let D=s(new tr(.004,.002,.03,18,12,!0),"#dfdebd");D.rotateX(Math.PI/2),D.translate(0,0,.009),_.push(D)}for(let D=0;D<5;D++){let B=c({length:.012,width:.003,cup:.002,color:"#879260",res:8,rows:12});B.rotateX(.5),B.rotateZ(D*Math.PI*2/5),B.translate(0,0,-.008),_.push(B)}return a(_)}function h(v,M){let b=[];function A(T,y,_){let R=T*(3.8+M*.6)-.6,z=(1-_)*35e-5*Math.sin(T*371+y*83)*Math.sin(y*137-T*211),H=.033+.004*Math.sin(T*8+M)-_*.003+z,D=.013*(.5+.5*Math.sin(T*Math.PI))*(1+.09*Math.sin(T*24));return[Math.cos(R)*H,y*D+Math.sin(T*3+M)*.009,Math.sin(R)*H]}for(let T of[0,1]){let y=new Gt(1,1,40,96),_=y.attributes.position;for(let R=0;R<_.count;R++)_.setXYZ(R,...A(_.getY(R)+.5,_.getX(R)*2,T));y.computeVertexNormals(),b.push(s(y,T?"#eadbc0":v,.18))}for(let T of[-1,1]){let y=new Gt(1,1,3,64),_=y.attributes.position;for(let R=0;R<_.count;R++)_.setXYZ(R,...A(_.getY(R)+.5,T,_.getX(R)+.5));y.computeVertexNormals(),b.push(s(y,"#d9c69d"))}for(let T of[0,1]){let y=new Gt(1,1,20,3),_=y.attributes.position;for(let R=0;R<_.count;R++)_.setXYZ(R,...A(T,_.getX(R)*2,_.getY(R)+.5));y.computeVertexNormals(),b.push(s(y,"#e8d5ad"))}return a(b)}function f(v){let M=[];for(let b=0;b<3;b++){let A=new nr([new N(0,-.045,0),new N(.007,-.008,.005),new N((b-1)*.009,.025,.009+b*.003),new N((b-1)*.013,.044+v*.004,.012)]),T=new Zr(A,40,.0011,10,!1),y=T.attributes.position;for(let _=0;_<y.count;_++){let R=T.attributes.uv.getX(_),z=A.getPointAt(R),H=.7+.7*R*R;y.setXYZ(_,z.x+(y.getX(_)-z.x)*H,z.y+(y.getY(_)-z.y)*H,z.z+(y.getZ(_)-z.z)*H)}T.computeVertexNormals(),M.push(s(T,b===1?"#b14222":"#852819",.22))}return a(M)}function d(v){let M=[l([[0,-.065,0],[.003,0,0],[0,.06,.003]],9e-4,"#727753",28,7)];for(let b=0;b<6;b++)for(let A=0;A<4;A++){let T=A*Math.PI/2+b*.75+v*.3,y=.0045*(1-b*.08),_=Math.cos(T)*y,R=-.005+b*.011,z=Math.sin(T)*y,H=s(new bn(.0032,12,10),"#7b7981",.22);H.scale(.8,1.65,.8),H.translate(_,R,z),M.push(H);for(let D=0;D<3;D++){let B=c({length:.008,width:.0028,cup:.0012,color:D===1?"#a79abc":"#87709f",variant:v+A+D,res:8,rows:10});B.rotateX(.6+D*.3),B.rotateZ(T+(D-1)*.8),B.translate(_,R+.003,z+.002),M.push(B)}}return a(M)}function g(v,M){let b=v==="cinnamon",A=[];if(b){for(let T of[0,1]){let y=new Gt(1,1,64,28),_=y.attributes.position;for(let R=0;R<_.count;R++){let z=_.getX(R)+.5,H=_.getY(R)+.5,D=z*7.9,B=.003+z*.01+T*.0013;_.setXYZ(R,Math.cos(D)*B,(H-.5)*(.105+M*.01)+.001*Math.sin(z*43),Math.sin(D)*B+.003*Math.sin(H*4))}y.computeVertexNormals(),A.push(s(y,T?"#9c6340":"#805132",.25))}for(let T of[0,1]){let y=new Gt(1,1,64,2),_=y.attributes.position;for(let R=0;R<_.count;R++){let z=_.getX(R)+.5,H=_.getY(R)+.5,D=z*7.9,B=.003+z*.01+H*.0013;_.setXYZ(R,Math.cos(D)*B,(T-.5)*(.105+M*.01)+.001*Math.sin(z*43),Math.sin(D)*B+.003*Math.sin(T*4))}y.computeVertexNormals(),A.push(s(y,"#b17b50"))}}else{let T=new bn(1,28,40),y=T.attributes.position;for(let _=0;_<y.count;_++){let R=y.getX(_),z=y.getY(_),H=y.getZ(_),D=(z+1)/2;y.setXYZ(_,R*.011*(1+.12*Math.sin(D*23+M)),z*(.05+M*.006),H*.002+.008*Math.sin(D*4+M))}T.computeVertexNormals(),A.push(s(T,v==="cedar"?"#9c7653":"#b19668",.23));for(let _=0;_<9;_++){let R=(_-4)*.0022,z=.04+Pt(_+M*31)*.035;A.push(l([[R,-.04,.002],[R+.001,.014,.008],[R+.002*Math.sin(_),z,.002]],25e-5,v==="cedar"?"#c4a27d":"#cdbb91",14,5))}}return a(A)}function x(v,M){let b=v==="almond",A=v==="resin",T=new bn(1,b?40:24,b?32:18),y=T.attributes.position;for(let _=0;_<y.count;_++){let R=y.getX(_),z=y.getY(_),H=y.getZ(_),D=1+.13*Math.sin(R*9+M)*Math.sin(z*8+H*7);if(b)y.setXYZ(_,R*.015*(.9-.15*z)*(1+.025*Math.sin(Math.atan2(H,R)*28)),z*.028,H*.008);else{let B=Math.min(D,.78/Math.max(.001,R*.7+z*.45+H*.55)),G=.035*Math.pow(.5+.5*Math.sin(R*41+z*29+M)*Math.sin(H*37),6);y.setXYZ(_,R*.015*(B-G),z*.02*(B-G),H*.012*(B-G))}}return T.computeVertexNormals(),s(T,b?"#a67d50":A?"#d2aa67":v==="praline"?"#a87847":"#624536",.32)}function m(v){let M=[];for(let b=0;b<5;b++)for(let A=0;A<9;A++){let T=(A+b*.45)*Math.PI*2/9,y=.015*Math.sin((b+.8)/6*Math.PI),_=s(new bn(.0048,12,10),"#a34c4c",.15);_.scale(1,.9,1),_.translate(Math.cos(T)*y,(b-2)*.007,Math.sin(T)*y),M.push(_)}return a(M)}function p(v){let M=[];for(let b of[0,1]){let A=new bn(b?.039:.045,36,24,.25,1.5,.55,1.15);A.rotateZ(v*.3),M.push(s(A,b?"#f0e5ce":"#684b37",.18))}for(let b=0;b<24;b++){let A=.3+Pt(b+v*97)*1.35,T=.57+Pt(b+31)*.8,y=[];for(let R=0;R<5;R++){let z=T+R*.055,H=.0455+7e-4*Math.sin(R+b);y.push([-H*Math.cos(A)*Math.sin(z),H*Math.cos(z),H*Math.sin(A)*Math.sin(z)])}let _=l(y,24e-5,b%3?"#907254":"#b99d79",12,4);_.rotateZ(v*.3),M.push(_)}for(let b of[.25,1.75]){let A=new Gt(1,1,4,28),T=A.attributes.position;for(let y=0;y<T.count;y++){let _=.039+(T.getX(y)+.5)*.006,R=.55+(T.getY(y)+.5)*1.15;T.setXYZ(y,-_*Math.cos(b)*Math.sin(R),_*Math.cos(R),_*Math.sin(b)*Math.sin(R))}A.rotateZ(v*.3),A.computeVertexNormals(),M.push(s(A,"#dfceb1"))}return a(M)}function E(v){let M=[];for(let b=0;b<7;b++)M.push(l([[(b-3)*.001,-.055,0],[(b-3)*.003,-.02,.003*Math.sin(b)],[.008*Math.sin(b*2+v),.02,.004*Math.cos(b)],[.014*Math.sin(b+v),.065,.006*Math.cos(b)]],6e-4,"#a28b61",36,6));return a(M)}function S(v,M=0){let b,A="petal";return["mandarin","lemon"].includes(v)?(b=h(v==="mandarin"?"#d38b27":"#d4bb49",M),A="peel"):v==="rose"||v==="iris"?b=c({color:v==="rose"?"#bd7681":"#9b8ab7",length:v==="iris"?.095:.079,width:v==="iris"?.028:.034,cup:.013,variant:M}):["linden-leaf","geranium","tobacco"].includes(v)?(b=c({length:v==="tobacco"?.14:.12,width:v==="tobacco"?.029:.045,cup:.007,color:v==="tobacco"?"#987748":"#7b9056",variant:M,leaf:!0,heart:v==="linden-leaf",lobed:v==="geranium",res:40}),A=v==="tobacco"?"wood":"leaf"):["jasmine","linden","orange","violet","tuberose","ylang","white"].includes(v)?b=u(v,M):v==="saffron"?(b=f(M),A="wood"):v==="lavender"?b=d(M):["cedar","sandalwood","cinnamon"].includes(v)?(b=g(v,M),A="wood"):v==="raspberry"?(b=m(M),A="fruit"):v==="coconut"?(b=p(M),A="nut"):v==="vetiver"?(b=E(M),A="wood"):(b=x(v,M),A=v==="resin"?"resin":"nut"),{geometry:b,material:r(A)}}return{build:S}}var n_={give:[["Scorza di mandarino","mandarin",34],["Petali di rosa","rose",44],["Stimmi di zafferano","saffron",52]],sylind:[["Foglie di tiglio","linden-leaf",34],["Fiori di gelsomino","jasmine",38],["Fiori di tiglio","linden",44]],promise:[["Lavanda","lavender",28],["Cannella","cinnamon",30],["Foglie di tabacco","tobacco",30]],listen:[["Petali di rosa","rose",38],["Fiori d\u2019arancio","orange",30],["Pralin\xE9","praline",36]],enjoy:[["Lavanda","lavender",28],["Petali di rosa","rose",38],["Cedro","cedar",32]],trust:[["Petali di rosa","rose",38],["Stimmi di zafferano","saffron",44],["Resina d\u2019incenso","resin",34]],speak:[["Petali di iris","iris",34],["Petali di rosa","rose",36],["Stimmi di zafferano","saffron",44]],share:[["Violetta","violet",32],["Tuberosa","tuberose",28],["Foglie di geranio","geranium",32]],"irish-whiskey":[["Scorza di limone","lemon",32],["Fiori bianchi","white",28],["Radici di vetiver","vetiver",36]],silky:[["Cocco","coconut",28],["Scorza di limone","lemon",32],["Resina d\u2019incenso","resin",36]],"occhio-di-tigre":[["Ylang ylang","ylang",28],["Lampone","raspberry",32],["Sandalo","sandalwood",34]],amund:[["Mandorla","almond",38],["Foglie di tabacco","tobacco",30],["Cioccolato","chocolate",36]]};function yf(i){let e=n_[i];if(!e)return null;let t=vf(),n=new Ht,r=[],s=new Tt;n.name=i+" detailed ingredients";let a=-1;return e.forEach(([o,l,c],u)=>{for(let h=0;h<3;h++){let{geometry:f,material:d}=t.build(l,h),g=Math.floor(c/3)+(h<c%3?1:0),x=new Mn(f,d,g),m=12e3+u*4e3+h*173;x.name=o,x.frustumCulled=!1;for(let p=0;p<g;p++){let E=.9+Pt(p+m+11)*.1;x.setColorAt(p,new Te(E,E*(.97+Pt(p+23)*.03),E*.97))}n.add(x),r.push({mesh:x,offset:m,type:l})}}),{group:n,names:e.map(o=>o[0]),counts:Object.fromEntries(e.map(o=>[o[0],o[2]])),update(o){if(o!==a){a=o;for(let{mesh:l,offset:c,type:u}of r){for(let h=0;h<l.count;h++){let f=Hi(i,o,h+c);s.position.set(f.x,f.y,f.z),s.rotation.set(.25*Math.sin(h*3+o),f.angle*.4,h*2.399+o*(c%3?-.7:.65));let g=(["mandarin","linden-leaf","lavender","orange","iris","violet","lemon","coconut","ylang","almond"].includes(u)?1.48:1.12)*(.85+Pt(h+c+5)*.5);s.scale.setScalar(g),s.updateMatrix(),l.setMatrixAt(h,s.matrix)}l.instanceMatrix.needsUpdate=!0}}}}}function _f(i="forgive"){let e={forgive:"#b9a48c",give:"#c4a369",sylind:"#96aa94"},t={forgive:"spice-curls",give:"citrus-diagonal",sylind:"botanical-plumes"}[i]||"spice-curls",n={forgive:`
   // A dense, asymmetric curl on the lower left; broken counter-curls on the right.
   float a=h*11.-time*.22;
   vec2 left=vec2(-.49+.10*sin(h*6.+time*.16),-.27);
   vec2 curl=vec2(cos(a),sin(a))*(.065+.025*sin(h*4.));
   envelope=tube(p.xz,left+curl,.037+.023*h);
   envelope+=.48*tube(p.xz,left-curl*.65,.021+.018*h);
   vec2 right=vec2(.53+.075*sin(h*9.-time*.19),-.30+.04*cos(a));
   envelope+=.50*tube(p.xz,right,.027+.025*h)*smoothstep(.05,.35,h)*(1.-smoothstep(.68,.96,h));
  `,give:`
   // Broad swept zest trail: lower left to upper right, with an open upper eddy.
   float diagonal=mix(-.72,.69,h)+.09*sin(h*5.-time*.24);
   vec2 center=vec2(diagonal,-.32+.06*sin(h*5.+time*.13));
   envelope=.83*tube(p.xz,center,.048+.047*h);
   vec2 high=vec2(.55+.12*cos(h*8.-time*.25),-.29+.08*sin(h*8.-time*.25));
   envelope+=.7*tube(p.xz,high,.027+.03*h)*smoothstep(.38,.64,h);
   envelope+=.35*tube(p.xz,center+vec2(-.085,.035),.026+.025*h);
  `,sylind:`
   // Two airy upward fans, offset in height, which split above the shoulders.
   float spread=.34+.24*pow(h,.8),wave=.047*sin(h*10.-time*.12);
   for(int k=0;k<3;k++){
    float f=float(k),offset=(f-1.)*(.02+.045*h);
    vec2 right=vec2(spread+offset+wave,-.30+.05*sin(h*7.+f*2.-time*.1));
    envelope+=.36*tube(p.xz,right,.023+.022*h)*smoothstep(.15,.48,h);
    vec2 left=vec2(-spread-offset+wave*.6,-.32+.04*cos(h*6.+f));
    envelope+=.26*tube(p.xz,left,.02+.018*h)*smoothstep(.37,.63,h);
   }
  `},r=64,s=new Uint8Array(r*r*r),a=173,o=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296),l=Array.from({length:256*16},o),c=g=>g*g*(3-2*g);function u(g,x,m,p){let E=Math.floor(g),S=Math.floor(x),v=Math.floor(m),M=c(g-E),b=c(x-S),A=c(m-v),T=0;for(let y=0;y<2;y++)for(let _=0;_<2;_++)for(let R=0;R<2;R++)T+=l[(E+y)%p+16*((S+_)%p+16*((v+R)%p))]*(y?M:1-M)*(_?b:1-b)*(R?A:1-A);return T}for(let g=0;g<r;g++)for(let x=0;x<r;x++)for(let m=0;m<r;m++){let p=0,E=.58;for(let S=0;S<3;S++){let v=4*2**S/r;p+=E*u(m*v,x*v,g*v,4*2**S),E*=.5}s[m+r*(x+r*g)]=Math.round(p*255)}let h=new kr(s,r,r,r);h.format=is,h.minFilter=h.magFilter=ft,h.wrapS=h.wrapT=h.wrapR=en,h.unpackAlignment=1,h.needsUpdate=!0;let f=new qt({glslVersion:la,side:nn,transparent:!0,depthWrite:!1,uniforms:{field:{value:h},time:{value:0},visibility:{value:1},tint:{value:new Te(e[i]||"#b9a48c")}},vertexShader:"out vec3 origin;out vec3 ray;void main(){origin=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;ray=position-origin;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`precision highp sampler3D;
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
 ${n[i]||n.forgive}
 envelope*=smoothstep(-.94,-.67,p.y)*(1.-smoothstep(.65,.96,p.y));
 // A fine rear wisp crosses the transparent body. The paper label occludes it.
 float rearX=${i==="give"?".32*sin(h*4.-time*.16)":i==="sylind"?".13+.13*sin(h*6.+time*.12)":"-.14+.20*sin(h*7.-time*.18)"};
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
 }`}),d=new xt(new Ni(1.8,2.2,1.1),f);return d.name=i+" fragrance veil",d.frustumCulled=!1,{mesh:d,profile:t,update(g,x){f.uniforms.time.value=g,f.uniforms.visibility.value=x}}}var xf={forgive:{petals:"#f1e5da",leaf:"#7b8160",dust:"#a58a58",label:"Cardamomo \xB7 Pepe nero \xB7 Vaniglia",types:["petal","pod","pepper"]},promise:{petals:"#aaa0bf",leaf:"#897448",dust:"#c9a567",label:"Lavanda \xB7 Cannella \xB7 Tabacco",types:["lavender","bark","leaf"]},listen:{petals:"#e4b8b5",leaf:"#7a8462",dust:"#d9b999",label:"Rosa \xB7 Fiori d\u2019arancio \xB7 Pralin\xE9",types:["petal","flower","petal"]},enjoy:{petals:"#ad9bb5",leaf:"#77734d",dust:"#bba079",label:"Lavanda \xB7 Rosa \xB7 Cedro",types:["lavender","petal","bark"]},give:{petals:"#edc181",leaf:"#76834e",dust:"#ca9b53",label:"Mandarino \xB7 Zafferano \xB7 Rosa",types:["peel","saffron","petal"]},trust:{petals:"#a75e65",leaf:"#7c6951",dust:"#aa8763",label:"Rosa \xB7 Zafferano \xB7 Incenso",types:["petal","saffron","resin"]},speak:{petals:"#afa0c6",leaf:"#706e50",dust:"#bc9e6d",label:"Iris \xB7 Rosa \xB7 Zafferano",types:["petal","petal","saffron"]},share:{petals:"#b7a5c9",leaf:"#7d8962",dust:"#cec0ab",label:"Violetta \xB7 Tuberosa \xB7 Geranio",types:["petal","flower","leaf"]},"irish-whiskey":{petals:"#eee7cf",leaf:"#79784e",dust:"#b29b70",label:"Limone \xB7 Fiori bianchi \xB7 Vetiver",types:["peel","flower","leaf"]},silky:{petals:"#eee9de",leaf:"#998e78",dust:"#c9c4b6",label:"Cocco \xB7 Accordo limonata \xB7 Incenso",types:["coconut","peel","resin"]},"occhio-di-tigre":{petals:"#d9c377",leaf:"#817b4f",dust:"#b59160",label:"Ylang ylang \xB7 Lampone \xB7 Sandalo",types:["petal","berry","bark"]},amund:{petals:"#b1926d",leaf:"#82644b",dust:"#a78962",label:"Mandorla \xB7 Tabacco \xB7 Cioccolato",types:["almond","leaf","resin"]},sylind:{petals:"#f0ead9",leaf:"#82935c",dust:"#c7bf8d",label:"Fiori di tiglio \xB7 Gelsomino \xB7 Foglie verdi",types:["leaf","flower","petal"]}};function bl(i,e={}){let t=i==="forgive",n=!e.lightSmoke&&["forgive","give","sylind"].includes(i),r=xf[i]||xf.forgive,s=new Ht;s.name="Directed smoke and earth "+i;let a=new Te(r.dust).lerp(new Te("#847c70"),.5),o=[],l=new ea().copy(new Gt(1,1)),c=72,u=new Float32Array(c*3),h=new Float32Array(c),f=new Float32Array(c),d=new Float32Array(c);l.instanceCount=c,l.setAttribute("center",new In(u,3)),l.setAttribute("age",new In(h,1)),l.setAttribute("density",new In(f,1));for(let F=0;F<c;F++)d[F]=Pt(F+300);l.setAttribute("seed",new In(d,1));let g=new qt({transparent:!0,depthWrite:!1,uniforms:{tint:{value:a},visibility:{value:1},densityBoost:{value:e.lightSmoke?3:1}},vertexShader:"attribute vec3 center;attribute float age,density,seed;varying vec2 v;varying float a,s,t;void main(){v=uv;a=density;s=seed;t=age;vec4 p=modelViewMatrix*vec4(center,1.);float size=.13+age*.105;p.xy+=position.xy*size*vec2(1.,1.25);gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec2 v;varying float a,s,t;uniform vec3 tint;uniform float visibility,densityBoost;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
 float fbm(vec2 p){float f=0.,w=.5;for(int i=0;i<4;i++){f+=w*noise(p);p=p*2.03+13.;w*=.5;}return f;}
 void main(){vec2 p=v-.5;float falloff=exp(-dot(p,p)*12.)*(1.-smoothstep(.32,.5,length(p)));vec2 q=v*3.+s*19.;q+=vec2(fbm(q+t*.16),fbm(q+9.-t*.12));float cloud=smoothstep(.28,.75,fbm(q*2.));float alpha=falloff*cloud*a*.095*visibility*densityBoost;if(alpha<.001)discard;gl_FragColor=vec4(tint,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),x=new xt(l,g);x.frustumCulled=!1,s.add(x),x.visible=!n,o.push(g);let m=n?_f(i):null;m&&s.add(m.mesh);let p=t?5400:n?1400:1100,E=new Float32Array(p*3),S=new Float32Array(p),v=new Float32Array(p),M=new wt;M.setAttribute("position",new Lt(E,3)),M.setAttribute("alpha",new Lt(S,1));for(let F=0;F<p;F++)v[F]=.8+Pt(F+99)*2;M.setAttribute("size",new Lt(v,1));let b=new qt({transparent:!0,depthWrite:!1,uniforms:{tint:{value:a},visibility:{value:1}},vertexShader:"attribute float alpha,size;varying float a;void main(){a=alpha>=0.?alpha:0.;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*3./-p.z,1.,5.);}",fragmentShader:`varying float a;uniform vec3 tint;uniform float visibility;void main(){float d=length(gl_PointCoord-.5);float alpha=(1.-smoothstep(.12,.5,d))*a*.24*visibility;if(!(alpha>.001))discard;gl_FragColor=vec4(tint,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),A=new er(M,b);A.frustumCulled=!1,s.add(A),o.push(b);let T=new Qt({color:r.dust,roughness:.95,transparent:!0}),y=new Mn(new $n(t?.0038:.008,2),T,t?240:85),_=new Tt;y.frustumCulled=!1,s.add(y);let R=new Mn(new bn(.015,32,24),new Qt({color:i==="forgive"?r.leaf:r.dust,roughness:.83,transparent:!0}),t?32:9);R.frustumCulled=!1,s.add(R);let z=[],H=[],D=t?gf((F,W)=>Hi(i,F,W)):yf(i);D&&(s.add(D.group),y.visible=!1,R.visible=!1,D.ready&&H.push(D.ready));let B=1,G=null,te={group:new Ht,ready:Promise.all(H),title:"Fumo e materia",color:new Te("#f0eee7"),kind:"directed-particles",setPresentation(){},update(){}};return{group:s,setting:te,label:r.label,setVisibility(F){B=F,o.forEach(W=>W.uniforms.visibility.value=F),T.opacity=F,R.material.opacity=F},update(F,W,Z=.2){let ne=Z,le=ne*5;if(ne===G){s.userData.motion&&(s.userData.motion.visibility=B);return}G=ne;let ve=be=>Hi(i,ne,be);m?.update(le,B),D?.update(ne);for(let be=0;be<c;be++){let He=ve(be);u.set([He.x,He.y,He.z],be*3),h[be]=.6+ne*1.2,f[be]=He.fade}for(let be of["center","age","density"])l.attributes[be].needsUpdate=!0;for(let be=0;be<p;be++){let He=ve(be+90),j=(t?.14:.025)+He.age*(t?.065:.024);E.set([He.x+(Pt(be+500)-.5)*j,He.y+(Pt(be+800)-.5)*j,He.z+(Pt(be+1300)-.5)*j],be*3),S[be]=He.fade}M.attributes.position.needsUpdate=!0,M.attributes.alpha.needsUpdate=!0;for(let[be,He,j]of[[y,2e3,!1],[R,4e3,!0],...z])if(be.visible){for(let se=0;se<be.count;se++){let k=ve(se+He);_.position.set(k.x,k.y,k.z),_.rotation.set(ne*.5+se*.3,k.angle,se+ne*(j?.8:-.5));let oe=k.fade*(.5+Pt(se+4)*.8);_.scale.set(oe*(j?.65:1),oe*(j?1.7:.7),oe*(j?.65:.9)),_.updateMatrix(),be.setMatrixAt(se,_.matrix)}be.instanceMatrix.needsUpdate=!0}s.userData.motion={type:"scroll-choreography",veil:m?"volumetric":"particles",veilProfile:m?.profile,veilColor:i==="give"?"gold":i==="sylind"?"sage":"warm",time:le,chapter:ne,visibility:B,sample:ve(2e3),ingredients:t?["Cardamomo","Pepe nero","Vaniglia"]:D?D.names:r.label.split(" \xB7 "),ingredientCounts:D?.counts||{},genericSeeds:y.visible||R.visible}}}}var hs=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Mi.extractUrlBase(e);a=Mi.resolveURL(c,this.path)}else a=Mi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tf){try{a[vt.KHR_BINARY_GLTF]=new Iu(e)}catch(h){r&&r(h);return}s=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:a[h]=new fu;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Pu(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[h]=new Lu;break;case vt.KHR_MESH_QUANTIZATION:a[h]=new Du;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function i_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},du=class{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qs(u),c.distance=h;break;case"spot":c=new js(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},fu=class{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){let r=[];e.color=new Te(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(o,o)}return Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},vu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],Xt),Promise.all(s)}},Mu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],Xt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Tu=class{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},wu=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Au=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ru=class{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Cu=class{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new ut,m=new N,p=new pn,E=new N(1,1,1),S=new Mn(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&E.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,x.compose(m,p,E));for(let v in l)if(v==="_COLOR_0"){let M=l[v];S.instanceColor=new In(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Tt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Tf="glTF",ha=12,Mf={JSON:1313821514,BIN:5130562},Iu=class{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ha,s=new DataView(e,ha),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Mf.JSON){let c=new Uint8Array(e,ha+a,o);this.content=n.decode(c)}else if(l===Mf.BIN){let c=ha+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Nu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Nu[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=us[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},o,c,Xt,f)})})}},Lu=class{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}},Sl=class extends yi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,E=1-m,S=p-f+h;for(let v=0;v!==o;v++){let M=a[x+v+o],b=a[x+v+l]*u,A=a[g+v+o],T=a[g+v]*u;s[v]=E*M+S*b+m*A+p*T}return s}},r_=new pn,zu=class extends Sl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return r_.fromArray(s).normalize().toArray(s),s}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bf={9728:tn,9729:ft,9984:bo,9985:Qr,9986:dr,9987:rn},Sf={33071:Nn,33648:Di,10497:en},cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s_={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Yi},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),i.DefaultMaterial}function _r(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o_(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function l_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c_(i){let e,t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=i.indices+":"+hu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+hu(i.targets[n]);return e}function hu(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Uu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function u_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var h_=new ut,Fu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new ni(this.options.manager):this.textureLoader=new ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return _r(s,o,r),ai(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Mi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=cu[r.type],o=us[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Lt(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=cu[r.type],c=us[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=t.cache.get(E);S||(x=new c(o,p*d,r.count*d/u),S=new Gr(x,d/u),t.cache.add(E,S)),m=new Wr(S,l,f%d/u,g)}else o===null?x=new c(r.count*l):x=new c(o,f,r.count*l),m=new Lt(x,l,g);if(r.sparse!==void 0){let p=cu.SCALAR,E=us[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,M=new E(a[1],S,r.sparse.count*p),b=new c(a[2],v,r.sparse.count*l);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,T=M.length;A<T;A++){let y=M[A];if(m.setX(y,b[A*l]),l>=2&&m.setY(y,b[A*l+1]),l>=3&&m.setZ(y,b[A*l+2]),l>=4&&m.setW(y,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=bf[f.magFilter]||ft,u.minFilter=bf[f.minFilter]||rn,u.wrapS=Sf[f.wrapS]||en,u.wrapT=Sf[f.wrapT]||en,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==ft,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new $t(x);m.needsUpdate=!0,f(m)}),t.load(Mi.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ai(h,a),h.userData.mimeType=a.mimeType||u_(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yr,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new $r,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qt}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){let h=r[vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Xt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=kt);let u=s.alphaMode||uu.OPAQUE;if(u===uu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===uu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==qn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==qn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==qn){let h=s.emissiveFactor;o.emissive=new Te().setRGB(h[0],h[1],h[2],Xt)}return s.emissiveTexture!==void 0&&a!==qn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),ai(h,s),t.associations.set(h,{materials:e}),s.extensions&&_r(r,h,s),h})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ef(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c_(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Ef(new wt,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?a_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=a[d],p,E=c[d];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Bs(x,E):new xt(x,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=su(p.geometry,oa):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=su(p.geometry,rs));else if(m.mode===Fn.LINES)p=new ks(x,E);else if(m.mode===Fn.LINE_STRIP)p=new Qi(x,E);else if(m.mode===Fn.LINE_LOOP)p=new Vs(x,E);else if(m.mode===Fn.POINTS)p=new er(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&l_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ai(p,s),m.extensions&&_r(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&_r(r,h[0],s),h[0];let f=new Ht;s.extensions&&_r(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(En.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new lr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new ut;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hs(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,E=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,v=f.length;S<v;S++){let M=f[S],b=d[S],A=g[S],T=x[S],y=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=n._createAnimationTracks(M,b,A,T,y);if(_)for(let R=0;R<_.length;R++)p.push(_[R])}let E=new Zs(s,void 0,p);return ai(E,r),E})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,h_)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new qr:c.length>1?u=new Ht:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),ai(u,s),s.extensions&&_r(n,u,s),s.matrix!==void 0){let h=new ut;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Ht;n.name&&(s.name=r.createUniqueName(n.name)),ai(s,n),n.extensions&&_r(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof mn||f instanceof $t)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Fi[s.path]){case Fi.weights:c=Qn;break;case Fi.rotation:c=ei;break;case Fi.translation:case Fi.scale:c=ti;break;default:n.itemSize===1?c=Qn:c=ti;break}let u=r.interpolation!==void 0?s_[r.interpolation]:Zi,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Fi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ei?zu:Sl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function d_(i,e,t){let n=e.attributes,r=new Cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){let u=Uu(us[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Uu(us[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new xn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Ef(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Nu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return yt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),ai(i,e),d_(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?o_(i,e.targets,t):i})}var f_="R167-logotipo",p_=()=>{};var ds=(i,e=0,t=1)=>Math.max(e,Math.min(t,i));var Ou=En.lerp,m_=["forgive"];function wf(i,e,t={x:0,y:0}){return g_(i,{slug:e,rail:!0,rotation:t})}function g_(i,e){let t=!!e.catalog,n=e.experience,r=!!e.rail,s=!!e.scheda,a=n?document.querySelector(".experience"):i.parentElement,o,l=!1,c=!1,u=!0,h=0,f=0,d=0,g=e.rotation?.y||0,x=e.rotation?.x||0,m=!1,p=0,E=0,S=0,v=0,M=!0,b=0,A=null,T=0,y=i.dataset.selected!=="false",_=0,R=0,z=0,H=[],D=matchMedia("(prefers-reduced-motion: reduce)");delete i.dataset.presented,delete i.dataset.ready;let B=s?new Te(Nt.find(I=>I.slug===e.slug)?.stage||"#2a2422"):null,G=(()=>{if(!s)return null;let I=document.createElement("canvas"),O=I.getContext("2d"),ie=new vi(I);ie.colorSpace=Ct,ie.generateMipmaps=!1,ie.minFilter=ft;let me=e.slug,Se={amund:["#1e1a18","#6f645b","#2a2522","#b9ada0","#3b342f","#8e8276","#221e1b","#5e554d"],sylind:["#2a210a","#9c8638","#3a2e0e","#e2cd84","#4d3e13","#b9a04e","#2c230b","#7d6a2a"]}[me],Xe=null,_e=!0,bt=()=>{let ge=Math.max(2,Math.round(i.clientWidth)),Pe=Math.max(2,Math.round(i.clientHeight));if(!_e&&I.width===ge&&I.height===Pe)return;if(I.width=ge,I.height=Pe,_e=!1,O.fillStyle="#"+B.getHexString(),O.fillRect(0,0,ge,Pe),Se){let at=O.createLinearGradient(0,Pe*.3,ge,Pe*.7);[0,.14,.27,.41,.55,.71,.86,1].forEach((St,gt)=>at.addColorStop(St,Se[gt])),O.fillStyle=at,O.fillRect(0,0,ge,Pe)}else if(Xe){let at=Math.max(ge/Xe.width,Pe/Xe.height);O.drawImage(Xe,(ge-Xe.width*at)/2,(Pe-Xe.height*at)/2,Xe.width*at,Xe.height*at)}let P=getComputedStyle(i),he=parseFloat(P.getPropertyValue("--venatura"))||.12;O.globalAlpha=1-he,O.fillStyle=`color-mix(in oklab, #${B.getHexString()} 70%, #120e10)`,O.fillRect(0,0,ge,Pe),O.globalAlpha=1;let Ne=parseFloat(P.getPropertyValue("--velo"))||.56;O.save(),O.translate(ge*.12,Pe*.45),O.scale(ge*1.3,Pe*1.1);let qe=O.createRadialGradient(0,0,0,0,0,.72);qe.addColorStop(0,`rgba(12,9,11,${Ne*.6+.1})`),qe.addColorStop(1,`rgba(12,9,11,${Math.max(0,Ne*.6-.2)})`),O.fillStyle=qe,O.fillRect(-2,-2,4,4),O.restore(),ie.needsUpdate=!0};if(!Se){let ge=new Image;ge.onload=()=>{l||(Xe=ge,_e=!0,o?.domElement.dispatchEvent(new Event("texturepronta")))},ge.src=`assets/fondi/${me}.webp`,H.push(()=>{ge.onload=null})}return ie.userData.aggiorna=bt,H.push(()=>ie.dispose()),ie})();function te(I){try{let gt=function(_t){if(!P.has(_t)){let pt=new Image;P.set(_t,pt),pt.onload=()=>{he="",I.querySelector("canvas")?.dispatchEvent(new Event("texturepronta"))},pt.src=_t}let nt=P.get(_t);return nt.complete&&nt.naturalWidth?nt:null},Vt=function(){let _t=performance.now();if(he&&_t-Ne<100)return;Ne=_t;let nt=ie.getBoundingClientRect(),pt=I.getBoundingClientRect();if(!nt.width||!nt.height||!pt.width||!pt.height)return;let cn=getComputedStyle(ie),un=cn.getPropertyValue("--palco").trim()||"#492e20",C=cn.getPropertyValue("--fragranza").trim()||un,$=(O?["::before","::after"]:["::after"]).map(tt=>{let it=getComputedStyle(ie,tt);return{url:it.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1],opacity:Number(it.opacity),transform:it.transform,filter:it.filter}}),J=JSON.stringify([nt.width,nt.height,pt.left-nt.left,pt.top-nt.top,pt.width,pt.height,un,C,$]);if(J===he)return;he=J;let Y=Math.min(1.5,2048/Math.max(nt.width,nt.height));Xe.width=Math.round(nt.width*Y),Xe.height=Math.round(nt.height*Y);let V=Xe.width,re=Xe.height,Ee=St(un,"#181516",O?.7:.68),Ue=(O?176:172)*Math.PI/180,Re=Math.sin(Ue),$e=-Math.cos(Ue),Ye=Math.abs(V*Re)+Math.abs(re*$e),Be=_e.createLinearGradient(V/2-Re*Ye/2,re/2-$e*Ye/2,V/2+Re*Ye/2,re/2+$e*Ye/2);Be.addColorStop(0,St(Ee,O?cn.getPropertyValue("--paper").trim()||"#f0eee7":"#0d0c0d",O?.28:.24)),Be.addColorStop(O?.06:.16,Ee),Be.addColorStop(O?.56:.64,St(un,"#1a1718",.42)),Be.addColorStop(1,Ee),_e.fillStyle=Be,_e.fillRect(0,0,V,re),_e.save(),_e.translate(V*.5,re*(O?.88:.84)),_e.scale(V*(O?.64:.72),re*(O?.46:.42));let ot=_e.createRadialGradient(0,0,0,0,0,1);ot.addColorStop(0,C),ot.addColorStop(O?.74:.76,"transparent"),_e.globalAlpha=O?.38:.44,_e.fillStyle=ot,_e.fillRect(-2,-3,4,6),_e.restore();for(let tt of $){if(!tt.url||!tt.opacity)continue;let it=gt(tt.url);if(!it)continue;bt.width=V,bt.height=re,ge.save(),ge.translate(V/2,re/2);let mt=new DOMMatrix(tt.transform==="none"?void 0:tt.transform);ge.transform(mt.a,mt.b,mt.c,mt.d,mt.e*Y,mt.f*Y),ge.translate(-V/2,-re/2),ge.filter=tt.filter;let Mt=Math.max(V/it.width,re/it.height),Ze=it.width*Mt,At=it.height*Mt;if(ge.drawImage(it,(V-Ze)/2,(re-At)/2,Ze,At),ge.filter="none",O){ge.globalCompositeOperation="destination-in",ge.save(),ge.translate(V*.5,re*.46),ge.scale(V*.5,re*.58);let ct=ge.createRadialGradient(0,0,0,0,0,1);ct.addColorStop(0,"transparent"),ct.addColorStop(.82,"#000"),ct.addColorStop(1,"#000"),ge.fillStyle=ct,ge.fillRect(-4,-4,8,8),ge.restore();let Ut=ge.createLinearGradient(0,0,0,re);Ut.addColorStop(0,"transparent"),Ut.addColorStop(.14,"#000"),Ut.addColorStop(.7,"#000"),Ut.addColorStop(.94,"transparent"),ge.fillStyle=Ut,ge.fillRect(0,0,V,re)}ge.restore(),_e.globalCompositeOperation="screen",_e.globalAlpha=tt.opacity,_e.drawImage(bt,0,0),_e.globalAlpha=1,_e.globalCompositeOperation="source-over"}me.width=Math.max(2,Math.round(I.clientWidth*1.5)),me.height=Math.max(2,Math.round(I.clientHeight*1.5)),Se.drawImage(Xe,(pt.left-nt.left)*Y,(pt.top-nt.top)*Y,pt.width*Y,pt.height*Y,0,0,me.width,me.height),Pe.needsUpdate=!0},O=I.closest(".fragrance-showcase"),ie=O||I.closest(".product-image")||I.parentElement,me=document.createElement("canvas"),Se=me.getContext("2d"),Xe=document.createElement("canvas"),_e=Xe.getContext("2d"),bt=document.createElement("canvas"),ge=bt.getContext("2d"),Pe=new vi(me);Pe.colorSpace=Ct,Pe.generateMipmaps=!1,Pe.minFilter=ft;let P=new Map,he="",Ne=0,qe=document.createElement("span");qe.style.display="none";let at=_t=>{qe.style.color=_t,ie.append(qe);let nt=getComputedStyle(qe).color;return qe.remove(),nt},St=(_t,nt,pt)=>at(`color-mix(in oklab, ${_t} ${(1-pt)*100}%, ${nt})`);return Pe.userData.aggiorna=Vt,Vt(),Pe}catch{return null}}let F=r?te(i):null,W=new ji;W.background=new Te(B||"#f0eee7"),r&&(W.background=null);let Z=new Bt(32,1,.05,60);Z.position.set(0,.12,3.15),Z.layers.enable(1);let ne=[],le=[],ve=[],be=[],He=[],j=[],se=[],k=new Set,oe=new Set,Q=new Set,ce=(I,O,ie,me)=>{I.addEventListener(O,ie,me),H.push(()=>I.removeEventListener(O,ie,me))};function Je(){a.querySelector(".scene-loading")?.remove();let I=a.querySelector(".scene-fallback");I?I.hidden=!1:i.innerHTML='<p class="empty">La vista 3D non \xE8 disponibile. Consulta la scheda ufficiale sotto.</p>',i.dataset.ready="true",i.dataset.failed="true"}try{o=new ls({antialias:!0,alpha:r,powerPreference:"high-performance"})}catch{return Je(),()=>{}}let U=location.search.includes("diag")||navigator.webdriver===!0&&!location.search.includes("nodiag"),Ge=innerWidth<700||matchMedia("(pointer:coarse)").matches,We=r?Ge?1.4:1.9:Ge?n?1.6:1.5:n?2:1.8,Ce=1,Ie=0,lt=[],Le=()=>Math.max(1,Math.min(Math.max(devicePixelRatio,1.25),We)*Ce);o.setPixelRatio(Le()),o.info.autoReset=!1,o.transmissionResolutionScale=r?Ge?.6:.9:Ge?.7:1,o.toneMapping=Jr,o.toneMappingExposure=1,o.shadowMap.enabled=!r,o.shadowMap.type=Kr,o.setClearColor(B?B.getHex():15789799,r?0:1),o.clear(),r||(o.domElement.style.background=B?"#"+B.getHexString():"#f0eee7"),i.append(o.domElement),ce(o.domElement,"webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(d),d=0,c=!1}),o.domElement.tabIndex=0,o.domElement.setAttribute("aria-label","Flacone 3D: trascina o usa le frecce per ruotarlo"),o.domElement.style.touchAction="pan-y",r&&o.domElement.setAttribute("aria-label","Ruota il flacone selezionato trascinando o usando le frecce");let ke=new we(1,1),Qe=new _n(1,1,{type:gn,minFilter:ft,magFilter:ft,depthBuffer:!0,samples:r?4:0});Qe.texture.generateMipmaps=!1,Qe.texture.minFilter=ft;let je=Qe.clone(),L,w=dl().then(I=>{if(l){I.dispose();return}L=I,W.environment=L,W.environmentIntensity=.85,W.environmentRotation.y=.65,i.dataset.lighting="photographic-studio",i.dataset.renderMode="interactive"});W.add(new or(16776175,12234912,.12));let X=new Zn(16775661,.3);X.position.set(-3,5,4),X.castShadow=!0,X.shadow.mapSize.set(Ge?1024:2048,Ge?1024:2048),X.shadow.camera.left=-4,X.shadow.camera.right=4,X.shadow.camera.top=3,X.shadow.camera.bottom=-3,X.shadow.normalBias=.025,X.shadow.bias=-3e-4,X.shadow.radius=4,W.add(X);let ee=new Zn(15854044,.1);if(ee.position.set(3,1,-2),W.add(ee),n){let I=new xt(new Gt(30,20),new qt({depthWrite:!1,toneMapped:!1,uniforms:{},vertexShader:"varying vec3 localPoint;void main(){localPoint=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 localPoint;void main(){vec2 p=localPoint.xy;float pool=exp(-dot((p-vec2(.9,.6))*vec2(.5,.55),(p-vec2(.9,.6))*vec2(.5,.55)));float sweep=exp(-pow((p.x+p.y*.5-1.2)*.65,2.));vec3 color=mix(vec3(.79,.75,.68),vec3(.96,.95,.91),clamp(pool*.8+sweep*.2,.0,1.));gl_FragColor=vec4(color,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));I.position.z=-2.5,W.add(I)}let ae=new xt(new Gt(200,200),new rr({opacity:.06}));ae.rotation.x=-Math.PI/2,ae.position.y=-1.05,ae.receiveShadow=!0,ae.visible=!1,W.add(ae);let K=new xt(new ir(1.12,.009,12,140),new Qt({color:"#b5a28b",roughness:.3,metalness:.6}));K.rotation.set(.3,.45,.2),K.position.set(.55,.07,-.65),K.scale.set(1,1.13,1),n&&W.add(K),K.visible=!1;let Fe=[];if(n)for(let I=0;I<0;I++){let O=new xt(new $n(.035+I*.01,2),new Qt({color:I%2?"#b6a99f":"#d7c8bd",roughness:.6}));O.position.set(Math.cos(I*1.3)*1.4,Math.sin(I*1.3)*.8,-.35),O.castShadow=!0,W.add(O),Fe.push(O)}let pe=new we,ze=new cr,Ve=e.slug||"forgive";function de(){l||(u=!0,d||(d=requestAnimationFrame(ue)))}function Me(){if(!u)return;u=!1;let I=i.clientWidth,O=i.clientHeight;if(!I||!O||I===h&&O===f)return;h=I,f=O,o.setSize(I,O,!1);let ie=o.getPixelRatio(),me=r?2:ie*(Ge?.78:1);ke.set(Math.max(2,Math.round(I*me)),Math.max(2,Math.round(O*me))),Qe.setSize(ke.x,ke.y),je.setSize(ke.x,ke.y),Z.aspect=I/O,Z.updateProjectionMatrix()}let Ke=new ResizeObserver(de);Ke.observe(i),de();let Oe=new IntersectionObserver(I=>{M=I[0].isIntersecting,M&&!d&&(d=requestAnimationFrame(ue))},{rootMargin:"150px"});Oe.observe(i);function xe(){n&&(v=D.matches?1:ds(-a.getBoundingClientRect().top/Math.max(1,a.offsetHeight-a.querySelector(".experience-stage").offsetHeight)))}ce(window,"scroll",xe,{passive:!0}),ce(window,"resize",xe),ce(D,"change",()=>{xe(),d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"pointerdown",I=>{r&&(I.stopPropagation(),g+=_,_=0,R=.85),m=!0,p=I.clientX,E=I.clientY,o.domElement.setPointerCapture(I.pointerId)}),ce(o.domElement,"pointermove",I=>{let O=i.getBoundingClientRect();pe.set((I.clientX-O.left)/O.width-.5,(I.clientY-O.top)/O.height-.5),m&&(g+=(I.clientX-p)*.009,x=ds(x+(I.clientY-E)*.004,-.6,.6),p=I.clientX,E=I.clientY)}),ce(o.domElement,"pointerup",()=>m=!1),ce(o.domElement,"pointercancel",()=>m=!1),ce(o.domElement,"pointerleave",()=>pe.set(0,0)),ce(o.domElement,"keydown",I=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(I.key)&&(I.preventDefault(),r&&I.stopPropagation(),I.key==="Home"?(g=0,x=0):I.key==="ArrowUp"||I.key==="ArrowDown"?x=ds(x+(I.key==="ArrowUp"?-.12:.12),-.6,.6):g+=I.key==="ArrowRight"?.2:-.2)}),ce(o.domElement,"webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(d),d=0,Je()});let et=n&&a.querySelector("[data-show-fragrances]");et&&ce(et,"click",()=>document.querySelector(".fragrance-showcase")?.scrollIntoView({behavior:D.matches?"instant":"smooth",block:"start"}));let q=new hs,ye=n?m_:[e.slug];Promise.all([w,...ye.map(async(I,O)=>{let ie=await q.loadAsync(`assets/models/${I}.glb?v=${f_}`);if(l){De(ie.scene),k.forEach(P=>P.dispose()),oe.forEach(P=>P.dispose()),Q.forEach(P=>P.dispose());return}let me=ie.scene;me.position.y=-.615;let Se=new Map;me.traverse(P=>{P.isMesh&&P.material&&Se.set(P.material,(Se.get(P.material)||0)+1)});let Xe=P=>{let he=(Se.get(P)||1)-1;Se.set(P,he),he<=0&&P.dispose()};me.traverse(P=>{if(!P.isMesh)return;let he=P.name.toLowerCase();P.castShadow=he.includes("tappo"),P.receiveShadow=!1;let Ne=P.material;Ne.envMapIntensity=1.15,he.includes("tubicino")?(P.material=new zt({color:"#e8e0cf",roughness:.45,metalness:0,envMapIntensity:.7,side:kt,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}),P.renderOrder=20,j.push(P),Xe(Ne)):he.includes("flacone")?(P.material=fl(Qe,ke),be.push(P),Xe(Ne)):he.includes("essenza")?(P.material=pl(I,je,ke),P.visible=!0,He.push(P),Xe(Ne)):he.includes("etichetta")&&(se.push(P),gl(P)),ml(P.material,he,I,o),n&&ul(P.material,he,o,I)});let _e=new Ht;_e.add(me),_e.userData.slug=I,n&&me.traverse(P=>{if(!P.isMesh)return;let he=P.name.toLowerCase();he.includes("tappo")?(_e.userData.cap=P,P.userData.baseY=P.position.y,P.userData.baseSpin=P.rotation.y):he.includes("essenza")?(_e.userData.liquid=P,P.userData.baseY=P.position.y,P.geometry.computeBoundingBox(),P.userData.floor=P.geometry.boundingBox.min.y,(_e.userData.body||(_e.userData.body=[])).push(P)):((_e.userData.body||(_e.userData.body=[])).push(P),P.userData.baseY=P.position.y)}),le[O]=_e,W.add(_e);let bt,ge;me.traverse(P=>{P.isMesh&&P.name.toLowerCase().includes("essenza")&&(bt=P),P.isMesh&&P.name.toLowerCase().includes("flacone")&&(ge=P)}),bt&&ge&&ne.push({motion:xl(bt,ge),pivot:_e});let Pe=bl(I,{lightSmoke:r});me.userData.fragranceSlug=I,cl(Pe,me),r&&(Pe.entranceMaterials=new Set,Pe.group.traverse(P=>{P.material&&!P.material.isShaderMaterial&&(P.material.transparent=!0,P.material.forceSinglePass=!0,Pe.entranceMaterials.add(P.material))})),r&&(Pe.group.visible=!1),n&&Pe.group.traverse(P=>{P.material?.uniforms?.field&&(P.visible=!1),P.material?.uniforms?.densityBoost&&(P.material.uniforms.densityBoost.value=3),P.geometry?.isInstancedBufferGeometry&&(P.visible=!0),P.isInstancedMesh&&(P.count=Math.max(1,Math.ceil(P.count*1))),P.isPoints&&P.geometry.setDrawRange(0,Math.ceil(P.geometry.attributes.position.count*.4))}),Pe.group.traverse(P=>{if(P.material)for(let he of["map","normalMap","roughnessMap","bumpMap"])P.material[he]&&(P.material[he].anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy()))}),ve[O]=Pe,W.add(Pe.group),W.add(Pe.setting.group),r&&(Pe.setting.group.visible=!1),await Pe.setting.ready})]).then(async()=>{if(!l){if(Me(),r){let I=ve.map(O=>O.group.visible);if(ve.forEach(O=>O.group.visible=!0),o.compile(W,Z),ve.forEach((O,ie)=>O.group.visible=I[ie]),l)return}if(c=!0,!n&&!r){let I=document.createElement("span");I.className="fragrance-atmosphere-note";let O=document.createElement("span");O.className="fragrance-setting-title",O.textContent=ve[0]?.setting.title||"",I.append(O,document.createTextNode(ve[0]?.label||"")),i.parentElement.append(I)}xe(),d||(d=requestAnimationFrame(ue))}}).catch(I=>{l||(console.error("Unable to load 3D model",I),Je())});function ue(){if(d=0,l||!M||document.hidden||!c)return;Me();let I=Math.min(ze.getDelta(),.05),O=ze.elapsedTime,ie=i.clientWidth<700;S=Ou(S,v,D.matches?1:1-Math.exp(-I*9)),Math.abs(S-v)<1e-4&&(S=v),r&&i.dataset.ready==="true"&&A===null&&(A=performance.now()),r&&y&&A!==null&&(R+=I),r&&y&&!D.matches&&i.dataset.ready==="true"&&(z+=I);let me=A===null?0:ds(R/.85);T=t?1:r?y?D.matches?1:me*me*(3-2*me):0:1,_=0;let Se=S,Xe=[1],_e=Xe.indexOf(Math.max(...Xe)),bt=B||ve[_e]?.setting.color||new Te("#f0eee7");W.background?.isColor&&W.background.copy(bt),Z.position.x=Ou(Z.position.x,D.matches?0:pe.x*.09,.06),Z.position.y=Ou(Z.position.y,ie?.05:.1+pe.y*.07,.06);let ge=0;Z.position.z=ie?n?3.8-ge:3:n?3.08-ge:2.8,r&&Z.position.set(0,.03,2.95),t&&Z.position.set(0,.02,2.68),Z.lookAt(0,0,0),le.forEach((P,he)=>{if(!P)return;if(!n){let gt=r&&!D.matches?z:0;P.position.set(0,gt?.022*Math.sin(gt*.4):0,0),P.rotation.set(x+(gt?.035*Math.sin(gt*.29):0),g+_+(gt?.15*Math.sin(gt*.23):0),-.045),P.scale.setScalar(1);return}let Ne=yl(Se,he,ie,D.matches?0:O,Z.aspect);P.userData.chapter=Se,P.position.set(Ne.x,Ne.y,Ne.z),P.rotation.set(x*.35+Ne.pitch,g*.35+Ne.rotation,Ne.tilt),P.scale.setScalar(Ne.scale),P.visible=!0;let qe=_l(Se,ie);P.userData.assembly=qe;let at=P.userData.cap;at&&(at.position.y=at.userData.baseY+qe.capY,at.rotation.y=at.userData.baseSpin+qe.capSpin),P.userData.body?.forEach(gt=>{gt.position.y=gt.userData.baseY+qe.bodyY});let St=P.userData.liquid;St&&(St.scale.y=qe.fill,St.position.y=St.userData.baseY+qe.bodyY+St.userData.floor*(1-qe.fill)),L&&(W.environmentRotation.y=qe.light)}),K.rotation.y=.45+Se*2+(D.matches?0:O*.035),K.rotation.z=.2-Se*.7,K.position.x=.55-Se*.6,K.material.color.set(Se>.7?"#ad975f":"#b5a28b"),Fe.forEach((P,he)=>{P.rotation.set(O*.08+he,O*.12,0),P.position.y=Math.sin(he*1.3+Se*5)*.8,P.position.z=-.35+Math.sin(Se*4+he)*.2}),W.updateMatrixWorld(!0),ne.forEach(({motion:P,pivot:he})=>{he.visible&&P.update(I,O,D.matches)}),i.dataset.fluid=JSON.stringify(ne.find(P=>P.pivot.visible)?.motion.mesh.userData.fluid||{}),ve.forEach((P,he)=>{if(!P||!le[he])return;P.group.position.copy(le[he].position),P.group.scale.copy(le[he].scale);let Ne=n?le[he].userData.assembly?.spread??1:1;Ne!==1&&P.group.scale.multiplyScalar(Ne),ie&&(P.group.scale.x*=.87,P.group.scale.y*=.7);let qe=n?ds(.3+Se*.25+(D.matches?0:.1*Math.sin(O*.24+he*2.094))):r?.43+(D.matches?0:.16*Math.sin(z*.5)):ds(.2+g/(Math.PI*2));P.group.rotation.set(.04*Math.sin(qe*Math.PI),g*.2-qe*.45,-.18+qe*.36);let at=r?Number(i.dataset.atmosphereWeight??(y?1:0)):1;if(P.group.visible=le[he].visible&&at>0,n&&(P.group.position.set(le[he].position.x+.1,-.12,-1.1),P.group.scale.setScalar(ie?1:1.48),P.group.rotation.y+=D.matches?0:.1*Math.sin(O*.22)),r&&(D.matches||(P.group.rotation.y+=.22*Math.sin(z*.32),P.group.rotation.z+=.045*Math.sin(z*.41),P.group.position.y+=.018*Math.sin(z*.6)),P.group.scale.x*=.9,!t)){let gt=i.closest(".fragrance-rail"),Vt=i.getBoundingClientRect(),_t=gt.getBoundingClientRect(),nt=Vt.width/i.clientWidth,pt=Z.position.z+.75,cn=2*Math.tan(En.degToRad(Z.fov*.5))*pt/Vt.height;P.group.scale.multiplyScalar(1/nt),P.group.position.x+=(_t.left+_t.width/2-(Vt.left+Vt.width/2))*cn;let un=i.parentElement.getBoundingClientRect(),C=un.top+i.offsetTop+i.clientHeight/2;P.group.position.y-=(C-(Vt.top+Vt.height/2))*cn,i.dataset.atmosphereAnchor=String(_t.left+_t.width/2)}let St=r?0:n?.85:1;P.setVisibility(St),P.entranceMaterials?.forEach(gt=>gt.opacity=St),P.setting.group.visible=!r&&he===_e,P.setting.setPresentation(n&&!ie),P.setting.group.position.set(n&&!ie?.48:0,ie&&n?-.18:.08,0),P.setting.group.scale.set(ie?.58:1,ie?.85:1,1),P.update(O,D.matches,qe)});function Pe(P,he){ve.forEach((Ne,qe)=>Ne.setting.group.visible=qe===P),W.background?.isColor&&W.background.copy(B||ve[P]?.setting.color||bt),vl({renderer:o,scene:W,camera:Z,bottles:le,glassMeshes:be,liquidMeshes:He,tubeMeshes:j,labelMeshes:se,background:je,interior:Qe,target:he,surroundings:ve.flatMap(Ne=>[Ne.group,Ne.setting.group]),fondaleOttico:F||bt,otticaFondale:r||s,fondaleScheda:G})}if(o.info.reset(),Pe(_e,null),i.dataset.presented="true",i.dataset.ready="true",a.querySelector(".scene-loading")?.classList.add("loaded"),i.dataset.entrance=String(T),i.dataset.heroStage=n?Se<.7?"macro":"portrait":"fragrance",n&&a.style.setProperty("--hero-reveal",Se.toFixed(3)),U&&(i.dataset.ensembles=JSON.stringify(le.map((P,he)=>({slug:P.userData.slug,visible:P.visible,sharedPosition:ve[he]?.group.position.distanceTo(P.position)<1e-8,chapter:P.userData.chapter,rotation:P.rotation.y,effect:ve[he]?.group.visible}))),i.dataset.particleMotion=JSON.stringify(ve[_e]?.group.userData.motion||{}),i.dataset.setting=ve[_e]?.setting.title||"",i.dataset.optics="nested-glass-liquid",i.dataset.transmission="smoke-background-liquid-glass",i.dataset.atmosphere=ve.map(P=>P?.label).filter(Boolean).join(" / "),i.dataset.renderWidth=String(i.clientWidth),i.dataset.frames=String(++b),i.dataset.triangles=String(o.info.render.triangles),i.dataset.drawCalls=String(o.info.render.calls),i.dataset.atmospherePasses="2",i.dataset.pixelRatio=String(o.getPixelRatio()),i.dataset.userRotation=JSON.stringify({x,y:g}),i.dataset.rotation=le[0]?.rotation.y.toFixed(4)||"0",i.dataset.progress=Se.toFixed(4)),!D.matches){let P=performance.now();if(Ie&&(lt.push(P-Ie),lt.length>=48)){lt.sort((qe,at)=>qe-at);let he=lt[lt.length>>1];lt.length=0;let Ne=Ce;he>21&&Ce>.55?Ne=Math.max(.55,Ce-.12):he<14&&Ce<1&&(Ne=Math.min(1,Ce+.06)),Ne!==Ce&&(Ce=Ne,o.setPixelRatio(Le()),h=f=0,u=!0,Me(),U&&(i.dataset.scalaQualita=Ce.toFixed(2)))}Ie=P}(!D.matches&&(!r||y)||m||Math.abs(S-v)>1e-4)&&(d=requestAnimationFrame(ue))}ce(i,"atmospherechange",()=>{d||(d=requestAnimationFrame(ue))}),ce(i,"presentationchange",()=>{let I=i.dataset.selected!=="false";I!==y&&(y=I,R=0,A=I?performance.now():null),d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"texturepronta",()=>{d||(d=requestAnimationFrame(ue))}),ce(document,"visibilitychange",()=>{!document.hidden&&!d&&(d=requestAnimationFrame(ue))}),ce(o.domElement,"pointermove",()=>{d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"keydown",()=>{d||(d=requestAnimationFrame(ue))});function De(I){I.traverse(O=>{O.isLight&&O.shadow?.map?.dispose(),O.geometry&&k.add(O.geometry);for(let ie of Array.isArray(O.material)?O.material:[O.material])ie&&(oe.add(ie),Object.values(ie.uniforms||{}).forEach(me=>{me.value?.isTexture&&Q.add(me.value)}),Object.values(ie).forEach(me=>{me?.isTexture&&Q.add(me)}))})}let fe=()=>{l=!0,cancelAnimationFrame(d),H.forEach(I=>I()),Ke.disconnect(),Oe.disconnect(),De(W),k.forEach(I=>I.dispose()),oe.forEach(I=>I.dispose()),Q.forEach(I=>I.dispose()),L?.dispose(),Qe.dispose(),je.dispose(),X.shadow.map?.dispose(),o.dispose(),t&&o.forceContextLoss(),o.domElement.remove()};return r||(p_=fe),fe}function Af(i){let e=document.querySelector(".fragrance-showcase");if(!e)return()=>{};let t=e.querySelector(".fragrance-rail"),n=[...t.querySelectorAll("[data-fragrance-index]")],r=e.querySelector("[data-rail-prev]"),s=e.querySelector("[data-rail-next]"),a=matchMedia("(prefers-reduced-motion: reduce)"),o=new AbortController,l=-1,c=0,u=!1,h=0,f=0,d=!1,g=-1,x=!1,m=0,p=new Map,E=new Map,S=0,v=!1,M=!1,b=0;function A(F){let W=p.get(F);W&&(E.set(F,JSON.parse(W.host.dataset.userRotation||'{"x":0,"y":0}')),cancelAnimationFrame(W.frame),W.dispose(),W.host.remove(),n[F].classList.remove("has-live"),p.delete(F))}function T(){if(clearTimeout(S),p.forEach((ne,le)=>{ne.host.dataset.selected=String(le===l),ne.host.inert=le!==l,ne.host.dispatchEvent(new Event("presentationchange"))}),!v||l<0||M)return;let F=[l].filter(ne=>ne>=0&&ne<n.length);[...p.keys()].filter(ne=>!F.includes(ne)).forEach(A);function W(){M||!v||F.forEach(ne=>{if(p.has(ne))return;let le=document.createElement("span");le.className="rail-live",le.dataset.selected=String(ne===l),le.dataset.atmosphereWeight=n[ne].dataset.atmosphereWeight||"0",le.inert=ne!==l,n[ne].append(le);let ve={host:le,dispose:wf(le,i[ne].slug,E.get(ne))||(()=>{}),frame:0,used:++b};p.set(ne,ve);function be(){if(!(M||!p.has(ne))){if(le.dataset.ready==="true"&&+le.dataset.frames>0){n[ne].classList.add("has-live");return}ve.frame=requestAnimationFrame(be)}}be()})}function Z(){if(M||!v)return;let ne=p.get(l)?.host;if(ne&&ne.dataset.entrance!=="1"){S=setTimeout(Z,150);return}W()}p.has(l)&&!a.matches?S=setTimeout(Z,1e3):W()}let y=(F,W,Z,ne={})=>F.addEventListener(W,Z,{...ne,signal:o.signal});function _(F){if(l===F)return;l=F;let W=i[F];e.dataset.active=W.slug,e.style.setProperty("--fragranza",W.color),e.style.setProperty("--palco",W.stage||W.color);let Z=e.dataset.strato==="a"?"b":"a";e.style.setProperty(`--aroma-${Z}`,`url(assets/aromi/${W.slug}.webp?v=R93)`),e.dataset.strato=Z,n.forEach((ne,le)=>{ne.classList.toggle("is-active",le===F),ne.setAttribute("aria-pressed",String(F===le)),ne.tabIndex=F===le?0:-1}),e.querySelector("[data-rail-name]").textContent=W.name,e.querySelector("[data-rail-family]").textContent=W.family,e.querySelector("[data-rail-description]").textContent=W.tagline,e.querySelector("[data-rail-descrizione]").textContent=W.description,e.querySelector("[data-rail-link]").href="#/profumo/"+W.slug,e.querySelector("[data-rail-count]").textContent=String(F+1).padStart(2,"0")+" / "+i.length,r.disabled=F===0,s.disabled=F===n.length-1,T()}function R(){c=0;let F=t.scrollLeft+t.clientWidth/2,W=0,Z=1/0;n.forEach((ne,le)=>{let ve=Math.abs(ne.offsetLeft+ne.offsetWidth/2-F),be=Math.min(1,ve/ne.offsetWidth);ne.style.setProperty("--distance",be);let He=n[1]?n[1].offsetLeft-n[0].offsetLeft:ne.offsetWidth,j=Math.max(0,Math.min(1,1-ve/He)),se=(j<.005?0:j>.995?1:j*j*(3-2*j)).toFixed(4);ne.dataset.atmosphereWeight=se;let k=p.get(le)?.host;k&&k.dataset.atmosphereWeight!==se&&(k.dataset.atmosphereWeight=se,k.dispatchEvent(new Event("atmospherechange"))),ve<Z&&(Z=ve,W=le)}),x||(g=W),_(W)}function z(F,W=!1){F=Math.max(0,Math.min(n.length-1,F)),g=F;let Z=n[F];m=Z.offsetLeft+Z.offsetWidth/2-t.clientWidth/2;let ne=!(W||a.matches);t.scrollTo({left:m,behavior:ne?"smooth":"instant"}),ne?x=!0:(x=!1,R())}let H=0;y(t,"scroll",()=>{c||(c=requestAnimationFrame(R));let F=Math.abs(t.scrollLeft-m)<2||t.scrollLeft<=0||t.scrollLeft>=t.scrollWidth-t.clientWidth-1;x&&F&&(x=!1),clearTimeout(H),H=setTimeout(()=>{if(M||u)return;if(x){z(g);return}if(l<0)return;let W=n[l],Z=W.offsetLeft+W.offsetWidth/2-t.clientWidth/2;Math.abs(t.scrollLeft-Z)>8&&z(l)},170)},{passive:!0});let D=()=>g<0?l:g;y(r,"click",()=>z(D()-1)),y(s,"click",()=>z(D()+1)),y(t,"keydown",F=>{let W={ArrowLeft:D()-1,ArrowRight:D()+1,Home:0,End:n.length-1};F.key in W&&(F.preventDefault(),z(W[F.key]))}),y(t,"pointerdown",F=>{F.target.closest(".rail-live")||F.pointerType!=="mouse"||F.button!==0||(u=!0,d=!1,h=F.clientX,f=t.scrollLeft)}),y(t,"pointermove",F=>{u&&(Math.abs(F.clientX-h)>6&&!d&&(d=!0,t.setPointerCapture(F.pointerId),t.classList.add("is-dragging")),d&&(F.preventDefault(),t.scrollLeft=f-(F.clientX-h)))});function B(){u&&(u=!1,t.classList.remove("is-dragging"),d&&(R(),z(l)))}y(window,"pointerup",B),y(t,"pointercancel",B),y(t,"lostpointercapture",B),y(t,"click",F=>{if(F.target.closest(".rail-live"))return;if(d){F.preventDefault(),d=!1;return}let W=F.target.closest("[data-fragrance-index]");W&&z(Number(W.dataset.fragranceIndex))}),y(t,"dragstart",F=>F.preventDefault());let G=new ResizeObserver(()=>z(l<0?4:l,!0));G.observe(t),z(4,!0);let te=new IntersectionObserver(F=>{v=F[0].isIntersecting,v?T():clearTimeout(S)},{rootMargin:"100px"});return te.observe(e),()=>{M=!0,te.disconnect(),clearTimeout(S),clearTimeout(H),[...p.keys()].forEach(A),o.abort(),G.disconnect(),cancelAnimationFrame(c)}}var v_="R167-logotipo",Hu=()=>{};function Rf(){Hu(),Hu=()=>{}}var fs=(i,e=0,t=1)=>Math.max(e,Math.min(t,i));var Bu=En.lerp,y_=["forgive"];function Cf(){let i=document.querySelector("#scene-host");i&&ku(i,{experience:!0})}function If(i="forgive"){let e=document.querySelector(".inline-three");if(e)return ku(e,{slug:i})}function Pf(i){let e=document.querySelector(".detail-art");e&&(e.classList.remove("rotate-view"),e.removeAttribute("role"),e.removeAttribute("aria-valuenow"),e.innerHTML='<div class="product-3d-host"></div><span class="rotation-hint">TRASCINA PER RUOTARE<span class="solo-tastiera"> \xB7 USA ANCHE LE FRECCE \u2190 \u2192</span></span>',ku(e.querySelector(".product-3d-host"),{slug:i,scheda:!0}))}function ku(i,e){let t=!!e.catalog,n=e.experience,r=!!e.rail,s=!!e.scheda,a=n?document.querySelector(".experience"):i.parentElement,o,l=!1,c=!1,u=!0,h=0,f=0,d=0,g=e.rotation?.y||0,x=e.rotation?.x||0,m=!1,p=0,E=0,S=0,v=0,M=!0,b=0,A=null,T=0,y=i.dataset.selected!=="false",_=0,R=0,z=0,H=[],D=matchMedia("(prefers-reduced-motion: reduce)");delete i.dataset.presented,delete i.dataset.ready;let B=s?new Te(Nt.find(I=>I.slug===e.slug)?.stage||"#2a2422"):null,G=(()=>{if(!s)return null;let I=document.createElement("canvas"),O=I.getContext("2d"),ie=new vi(I);ie.colorSpace=Ct,ie.generateMipmaps=!1,ie.minFilter=ft;let me=e.slug,Se={amund:["#1e1a18","#6f645b","#2a2522","#b9ada0","#3b342f","#8e8276","#221e1b","#5e554d"],sylind:["#2a210a","#9c8638","#3a2e0e","#e2cd84","#4d3e13","#b9a04e","#2c230b","#7d6a2a"]}[me],Xe=null,_e=!0,bt=()=>{let ge=Math.max(2,Math.round(i.clientWidth)),Pe=Math.max(2,Math.round(i.clientHeight));if(!_e&&I.width===ge&&I.height===Pe)return;if(I.width=ge,I.height=Pe,_e=!1,O.fillStyle="#"+B.getHexString(),O.fillRect(0,0,ge,Pe),Se){let at=O.createLinearGradient(0,Pe*.3,ge,Pe*.7);[0,.14,.27,.41,.55,.71,.86,1].forEach((St,gt)=>at.addColorStop(St,Se[gt])),O.fillStyle=at,O.fillRect(0,0,ge,Pe)}else if(Xe){let at=Math.max(ge/Xe.width,Pe/Xe.height);O.drawImage(Xe,(ge-Xe.width*at)/2,(Pe-Xe.height*at)/2,Xe.width*at,Xe.height*at)}let P=getComputedStyle(i),he=parseFloat(P.getPropertyValue("--venatura"))||.12;O.globalAlpha=1-he,O.fillStyle=`color-mix(in oklab, #${B.getHexString()} 70%, #120e10)`,O.fillRect(0,0,ge,Pe),O.globalAlpha=1;let Ne=parseFloat(P.getPropertyValue("--velo"))||.56;O.save(),O.translate(ge*.12,Pe*.45),O.scale(ge*1.3,Pe*1.1);let qe=O.createRadialGradient(0,0,0,0,0,.72);qe.addColorStop(0,`rgba(12,9,11,${Ne*.6+.1})`),qe.addColorStop(1,`rgba(12,9,11,${Math.max(0,Ne*.6-.2)})`),O.fillStyle=qe,O.fillRect(-2,-2,4,4),O.restore(),ie.needsUpdate=!0};if(!Se){let ge=new Image;ge.onload=()=>{l||(Xe=ge,_e=!0,o?.domElement.dispatchEvent(new Event("texturepronta")))},ge.src=`assets/fondi/${me}.webp`,H.push(()=>{ge.onload=null})}return ie.userData.aggiorna=bt,H.push(()=>ie.dispose()),ie})();function te(I){try{let gt=function(_t){if(!P.has(_t)){let pt=new Image;P.set(_t,pt),pt.onload=()=>{he="",I.querySelector("canvas")?.dispatchEvent(new Event("texturepronta"))},pt.src=_t}let nt=P.get(_t);return nt.complete&&nt.naturalWidth?nt:null},Vt=function(){let _t=performance.now();if(he&&_t-Ne<100)return;Ne=_t;let nt=ie.getBoundingClientRect(),pt=I.getBoundingClientRect();if(!nt.width||!nt.height||!pt.width||!pt.height)return;let cn=getComputedStyle(ie),un=cn.getPropertyValue("--palco").trim()||"#492e20",C=cn.getPropertyValue("--fragranza").trim()||un,$=(O?["::before","::after"]:["::after"]).map(tt=>{let it=getComputedStyle(ie,tt);return{url:it.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1],opacity:Number(it.opacity),transform:it.transform,filter:it.filter}}),J=JSON.stringify([nt.width,nt.height,pt.left-nt.left,pt.top-nt.top,pt.width,pt.height,un,C,$]);if(J===he)return;he=J;let Y=Math.min(1.5,2048/Math.max(nt.width,nt.height));Xe.width=Math.round(nt.width*Y),Xe.height=Math.round(nt.height*Y);let V=Xe.width,re=Xe.height,Ee=St(un,"#181516",O?.7:.68),Ue=(O?176:172)*Math.PI/180,Re=Math.sin(Ue),$e=-Math.cos(Ue),Ye=Math.abs(V*Re)+Math.abs(re*$e),Be=_e.createLinearGradient(V/2-Re*Ye/2,re/2-$e*Ye/2,V/2+Re*Ye/2,re/2+$e*Ye/2);Be.addColorStop(0,St(Ee,O?cn.getPropertyValue("--paper").trim()||"#f0eee7":"#0d0c0d",O?.28:.24)),Be.addColorStop(O?.06:.16,Ee),Be.addColorStop(O?.56:.64,St(un,"#1a1718",.42)),Be.addColorStop(1,Ee),_e.fillStyle=Be,_e.fillRect(0,0,V,re),_e.save(),_e.translate(V*.5,re*(O?.88:.84)),_e.scale(V*(O?.64:.72),re*(O?.46:.42));let ot=_e.createRadialGradient(0,0,0,0,0,1);ot.addColorStop(0,C),ot.addColorStop(O?.74:.76,"transparent"),_e.globalAlpha=O?.38:.44,_e.fillStyle=ot,_e.fillRect(-2,-3,4,6),_e.restore();for(let tt of $){if(!tt.url||!tt.opacity)continue;let it=gt(tt.url);if(!it)continue;bt.width=V,bt.height=re,ge.save(),ge.translate(V/2,re/2);let mt=new DOMMatrix(tt.transform==="none"?void 0:tt.transform);ge.transform(mt.a,mt.b,mt.c,mt.d,mt.e*Y,mt.f*Y),ge.translate(-V/2,-re/2),ge.filter=tt.filter;let Mt=Math.max(V/it.width,re/it.height),Ze=it.width*Mt,At=it.height*Mt;if(ge.drawImage(it,(V-Ze)/2,(re-At)/2,Ze,At),ge.filter="none",O){ge.globalCompositeOperation="destination-in",ge.save(),ge.translate(V*.5,re*.46),ge.scale(V*.5,re*.58);let ct=ge.createRadialGradient(0,0,0,0,0,1);ct.addColorStop(0,"transparent"),ct.addColorStop(.82,"#000"),ct.addColorStop(1,"#000"),ge.fillStyle=ct,ge.fillRect(-4,-4,8,8),ge.restore();let Ut=ge.createLinearGradient(0,0,0,re);Ut.addColorStop(0,"transparent"),Ut.addColorStop(.14,"#000"),Ut.addColorStop(.7,"#000"),Ut.addColorStop(.94,"transparent"),ge.fillStyle=Ut,ge.fillRect(0,0,V,re)}ge.restore(),_e.globalCompositeOperation="screen",_e.globalAlpha=tt.opacity,_e.drawImage(bt,0,0),_e.globalAlpha=1,_e.globalCompositeOperation="source-over"}me.width=Math.max(2,Math.round(I.clientWidth*1.5)),me.height=Math.max(2,Math.round(I.clientHeight*1.5)),Se.drawImage(Xe,(pt.left-nt.left)*Y,(pt.top-nt.top)*Y,pt.width*Y,pt.height*Y,0,0,me.width,me.height),Pe.needsUpdate=!0},O=I.closest(".fragrance-showcase"),ie=O||I.closest(".product-image")||I.parentElement,me=document.createElement("canvas"),Se=me.getContext("2d"),Xe=document.createElement("canvas"),_e=Xe.getContext("2d"),bt=document.createElement("canvas"),ge=bt.getContext("2d"),Pe=new vi(me);Pe.colorSpace=Ct,Pe.generateMipmaps=!1,Pe.minFilter=ft;let P=new Map,he="",Ne=0,qe=document.createElement("span");qe.style.display="none";let at=_t=>{qe.style.color=_t,ie.append(qe);let nt=getComputedStyle(qe).color;return qe.remove(),nt},St=(_t,nt,pt)=>at(`color-mix(in oklab, ${_t} ${(1-pt)*100}%, ${nt})`);return Pe.userData.aggiorna=Vt,Vt(),Pe}catch{return null}}let F=r?te(i):null,W=new ji;W.background=new Te(B||"#f0eee7"),r&&(W.background=null);let Z=new Bt(32,1,.05,60);Z.position.set(0,.12,3.15),Z.layers.enable(1);let ne=[],le=[],ve=[],be=[],He=[],j=[],se=[],k=new Set,oe=new Set,Q=new Set,ce=(I,O,ie,me)=>{I.addEventListener(O,ie,me),H.push(()=>I.removeEventListener(O,ie,me))};function Je(){a.querySelector(".scene-loading")?.remove();let I=a.querySelector(".scene-fallback");I?I.hidden=!1:i.innerHTML='<p class="empty">La vista 3D non \xE8 disponibile. Consulta la scheda ufficiale sotto.</p>',i.dataset.ready="true",i.dataset.failed="true"}try{o=new ls({antialias:!0,alpha:r,powerPreference:"high-performance"})}catch{return Je(),()=>{}}let U=location.search.includes("diag")||navigator.webdriver===!0&&!location.search.includes("nodiag"),Ge=innerWidth<700||matchMedia("(pointer:coarse)").matches,We=r?Ge?1.4:1.9:Ge?n?1.6:1.5:n?2:1.8,Ce=1,Ie=0,lt=[],Le=()=>Math.max(1,Math.min(Math.max(devicePixelRatio,1.25),We)*Ce);o.setPixelRatio(Le()),o.info.autoReset=!1,o.transmissionResolutionScale=r?Ge?.6:.9:Ge?.7:1,o.toneMapping=Jr,o.toneMappingExposure=1,o.shadowMap.enabled=!r,o.shadowMap.type=Kr,o.setClearColor(B?B.getHex():15789799,r?0:1),o.clear(),r||(o.domElement.style.background=B?"#"+B.getHexString():"#f0eee7"),i.append(o.domElement),ce(o.domElement,"webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(d),d=0,c=!1}),o.domElement.tabIndex=0,o.domElement.setAttribute("aria-label","Flacone 3D: trascina o usa le frecce per ruotarlo"),o.domElement.style.touchAction="pan-y",r&&o.domElement.setAttribute("aria-label","Ruota il flacone selezionato trascinando o usando le frecce");let ke=new we(1,1),Qe=new _n(1,1,{type:gn,minFilter:ft,magFilter:ft,depthBuffer:!0,samples:r?4:0});Qe.texture.generateMipmaps=!1,Qe.texture.minFilter=ft;let je=Qe.clone(),L,w=dl().then(I=>{if(l){I.dispose();return}L=I,W.environment=L,W.environmentIntensity=.85,W.environmentRotation.y=.65,i.dataset.lighting="photographic-studio",i.dataset.renderMode="interactive"});W.add(new or(16776175,12234912,.12));let X=new Zn(16775661,.3);X.position.set(-3,5,4),X.castShadow=!0,X.shadow.mapSize.set(Ge?1024:2048,Ge?1024:2048),X.shadow.camera.left=-4,X.shadow.camera.right=4,X.shadow.camera.top=3,X.shadow.camera.bottom=-3,X.shadow.normalBias=.025,X.shadow.bias=-3e-4,X.shadow.radius=4,W.add(X);let ee=new Zn(15854044,.1);if(ee.position.set(3,1,-2),W.add(ee),n){let I=new xt(new Gt(30,20),new qt({depthWrite:!1,toneMapped:!1,uniforms:{},vertexShader:"varying vec3 localPoint;void main(){localPoint=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 localPoint;void main(){vec2 p=localPoint.xy;float pool=exp(-dot((p-vec2(.9,.6))*vec2(.5,.55),(p-vec2(.9,.6))*vec2(.5,.55)));float sweep=exp(-pow((p.x+p.y*.5-1.2)*.65,2.));vec3 color=mix(vec3(.79,.75,.68),vec3(.96,.95,.91),clamp(pool*.8+sweep*.2,.0,1.));gl_FragColor=vec4(color,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));I.position.z=-2.5,W.add(I)}let ae=new xt(new Gt(200,200),new rr({opacity:.06}));ae.rotation.x=-Math.PI/2,ae.position.y=-1.05,ae.receiveShadow=!0,ae.visible=!1,W.add(ae);let K=new xt(new ir(1.12,.009,12,140),new Qt({color:"#b5a28b",roughness:.3,metalness:.6}));K.rotation.set(.3,.45,.2),K.position.set(.55,.07,-.65),K.scale.set(1,1.13,1),n&&W.add(K),K.visible=!1;let Fe=[];if(n)for(let I=0;I<0;I++){let O=new xt(new $n(.035+I*.01,2),new Qt({color:I%2?"#b6a99f":"#d7c8bd",roughness:.6}));O.position.set(Math.cos(I*1.3)*1.4,Math.sin(I*1.3)*.8,-.35),O.castShadow=!0,W.add(O),Fe.push(O)}let pe=new we,ze=new cr,Ve=e.slug||"forgive";function de(){l||(u=!0,d||(d=requestAnimationFrame(ue)))}function Me(){if(!u)return;u=!1;let I=i.clientWidth,O=i.clientHeight;if(!I||!O||I===h&&O===f)return;h=I,f=O,o.setSize(I,O,!1);let ie=o.getPixelRatio(),me=r?2:ie*(Ge?.78:1);ke.set(Math.max(2,Math.round(I*me)),Math.max(2,Math.round(O*me))),Qe.setSize(ke.x,ke.y),je.setSize(ke.x,ke.y),Z.aspect=I/O,Z.updateProjectionMatrix()}let Ke=new ResizeObserver(de);Ke.observe(i),de();let Oe=new IntersectionObserver(I=>{M=I[0].isIntersecting,M&&!d&&(d=requestAnimationFrame(ue))},{rootMargin:"150px"});Oe.observe(i);function xe(){n&&(v=D.matches?1:fs(-a.getBoundingClientRect().top/Math.max(1,a.offsetHeight-a.querySelector(".experience-stage").offsetHeight)))}ce(window,"scroll",xe,{passive:!0}),ce(window,"resize",xe),ce(D,"change",()=>{xe(),d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"pointerdown",I=>{r&&(I.stopPropagation(),g+=_,_=0,R=.85),m=!0,p=I.clientX,E=I.clientY,o.domElement.setPointerCapture(I.pointerId)}),ce(o.domElement,"pointermove",I=>{let O=i.getBoundingClientRect();pe.set((I.clientX-O.left)/O.width-.5,(I.clientY-O.top)/O.height-.5),m&&(g+=(I.clientX-p)*.009,x=fs(x+(I.clientY-E)*.004,-.6,.6),p=I.clientX,E=I.clientY)}),ce(o.domElement,"pointerup",()=>m=!1),ce(o.domElement,"pointercancel",()=>m=!1),ce(o.domElement,"pointerleave",()=>pe.set(0,0)),ce(o.domElement,"keydown",I=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(I.key)&&(I.preventDefault(),r&&I.stopPropagation(),I.key==="Home"?(g=0,x=0):I.key==="ArrowUp"||I.key==="ArrowDown"?x=fs(x+(I.key==="ArrowUp"?-.12:.12),-.6,.6):g+=I.key==="ArrowRight"?.2:-.2)}),ce(o.domElement,"webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(d),d=0,Je()});let et=n&&a.querySelector("[data-show-fragrances]");et&&ce(et,"click",()=>document.querySelector(".fragrance-showcase")?.scrollIntoView({behavior:D.matches?"instant":"smooth",block:"start"}));let q=new hs,ye=n?y_:[e.slug];Promise.all([w,...ye.map(async(I,O)=>{let ie=await q.loadAsync(`assets/models/${I}.glb?v=${v_}`);if(l){De(ie.scene),k.forEach(P=>P.dispose()),oe.forEach(P=>P.dispose()),Q.forEach(P=>P.dispose());return}let me=ie.scene;me.position.y=-.615;let Se=new Map;me.traverse(P=>{P.isMesh&&P.material&&Se.set(P.material,(Se.get(P.material)||0)+1)});let Xe=P=>{let he=(Se.get(P)||1)-1;Se.set(P,he),he<=0&&P.dispose()};me.traverse(P=>{if(!P.isMesh)return;let he=P.name.toLowerCase();P.castShadow=he.includes("tappo"),P.receiveShadow=!1;let Ne=P.material;Ne.envMapIntensity=1.15,he.includes("tubicino")?(P.material=new zt({color:"#e8e0cf",roughness:.45,metalness:0,envMapIntensity:.7,side:kt,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}),P.renderOrder=20,j.push(P),Xe(Ne)):he.includes("flacone")?(P.material=fl(Qe,ke),be.push(P),Xe(Ne)):he.includes("essenza")?(P.material=pl(I,je,ke),P.visible=!0,He.push(P),Xe(Ne)):he.includes("etichetta")&&(se.push(P),gl(P)),ml(P.material,he,I,o),n&&ul(P.material,he,o,I)});let _e=new Ht;_e.add(me),_e.userData.slug=I,n&&me.traverse(P=>{if(!P.isMesh)return;let he=P.name.toLowerCase();he.includes("tappo")?(_e.userData.cap=P,P.userData.baseY=P.position.y,P.userData.baseSpin=P.rotation.y):he.includes("essenza")?(_e.userData.liquid=P,P.userData.baseY=P.position.y,P.geometry.computeBoundingBox(),P.userData.floor=P.geometry.boundingBox.min.y,(_e.userData.body||(_e.userData.body=[])).push(P)):((_e.userData.body||(_e.userData.body=[])).push(P),P.userData.baseY=P.position.y)}),le[O]=_e,W.add(_e);let bt,ge;me.traverse(P=>{P.isMesh&&P.name.toLowerCase().includes("essenza")&&(bt=P),P.isMesh&&P.name.toLowerCase().includes("flacone")&&(ge=P)}),bt&&ge&&ne.push({motion:xl(bt,ge),pivot:_e});let Pe=bl(I,{lightSmoke:r});me.userData.fragranceSlug=I,cl(Pe,me),r&&(Pe.entranceMaterials=new Set,Pe.group.traverse(P=>{P.material&&!P.material.isShaderMaterial&&(P.material.transparent=!0,P.material.forceSinglePass=!0,Pe.entranceMaterials.add(P.material))})),r&&(Pe.group.visible=!1),n&&Pe.group.traverse(P=>{P.material?.uniforms?.field&&(P.visible=!1),P.material?.uniforms?.densityBoost&&(P.material.uniforms.densityBoost.value=3),P.geometry?.isInstancedBufferGeometry&&(P.visible=!0),P.isInstancedMesh&&(P.count=Math.max(1,Math.ceil(P.count*1))),P.isPoints&&P.geometry.setDrawRange(0,Math.ceil(P.geometry.attributes.position.count*.4))}),Pe.group.traverse(P=>{if(P.material)for(let he of["map","normalMap","roughnessMap","bumpMap"])P.material[he]&&(P.material[he].anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy()))}),ve[O]=Pe,W.add(Pe.group),W.add(Pe.setting.group),r&&(Pe.setting.group.visible=!1),await Pe.setting.ready})]).then(async()=>{if(!l){if(Me(),r){let I=ve.map(O=>O.group.visible);if(ve.forEach(O=>O.group.visible=!0),o.compile(W,Z),ve.forEach((O,ie)=>O.group.visible=I[ie]),l)return}if(c=!0,!n&&!r){let I=document.createElement("span");I.className="fragrance-atmosphere-note";let O=document.createElement("span");O.className="fragrance-setting-title",O.textContent=ve[0]?.setting.title||"",I.append(O,document.createTextNode(ve[0]?.label||"")),i.parentElement.append(I)}xe(),d||(d=requestAnimationFrame(ue))}}).catch(I=>{l||(console.error("Unable to load 3D model",I),Je())});function ue(){if(d=0,l||!M||document.hidden||!c)return;Me();let I=Math.min(ze.getDelta(),.05),O=ze.elapsedTime,ie=i.clientWidth<700;S=Bu(S,v,D.matches?1:1-Math.exp(-I*9)),Math.abs(S-v)<1e-4&&(S=v),r&&i.dataset.ready==="true"&&A===null&&(A=performance.now()),r&&y&&A!==null&&(R+=I),r&&y&&!D.matches&&i.dataset.ready==="true"&&(z+=I);let me=A===null?0:fs(R/.85);T=t?1:r?y?D.matches?1:me*me*(3-2*me):0:1,_=0;let Se=S,Xe=[1],_e=Xe.indexOf(Math.max(...Xe)),bt=B||ve[_e]?.setting.color||new Te("#f0eee7");W.background?.isColor&&W.background.copy(bt),Z.position.x=Bu(Z.position.x,D.matches?0:pe.x*.09,.06),Z.position.y=Bu(Z.position.y,ie?.05:.1+pe.y*.07,.06);let ge=0;Z.position.z=ie?n?3.8-ge:3:n?3.08-ge:2.8,r&&Z.position.set(0,.03,2.95),t&&Z.position.set(0,.02,2.68),Z.lookAt(0,0,0),le.forEach((P,he)=>{if(!P)return;if(!n){let gt=r&&!D.matches?z:0;P.position.set(0,gt?.022*Math.sin(gt*.4):0,0),P.rotation.set(x+(gt?.035*Math.sin(gt*.29):0),g+_+(gt?.15*Math.sin(gt*.23):0),-.045),P.scale.setScalar(1);return}let Ne=yl(Se,he,ie,D.matches?0:O,Z.aspect);P.userData.chapter=Se,P.position.set(Ne.x,Ne.y,Ne.z),P.rotation.set(x*.35+Ne.pitch,g*.35+Ne.rotation,Ne.tilt),P.scale.setScalar(Ne.scale),P.visible=!0;let qe=_l(Se,ie);P.userData.assembly=qe;let at=P.userData.cap;at&&(at.position.y=at.userData.baseY+qe.capY,at.rotation.y=at.userData.baseSpin+qe.capSpin),P.userData.body?.forEach(gt=>{gt.position.y=gt.userData.baseY+qe.bodyY});let St=P.userData.liquid;St&&(St.scale.y=qe.fill,St.position.y=St.userData.baseY+qe.bodyY+St.userData.floor*(1-qe.fill)),L&&(W.environmentRotation.y=qe.light)}),K.rotation.y=.45+Se*2+(D.matches?0:O*.035),K.rotation.z=.2-Se*.7,K.position.x=.55-Se*.6,K.material.color.set(Se>.7?"#ad975f":"#b5a28b"),Fe.forEach((P,he)=>{P.rotation.set(O*.08+he,O*.12,0),P.position.y=Math.sin(he*1.3+Se*5)*.8,P.position.z=-.35+Math.sin(Se*4+he)*.2}),W.updateMatrixWorld(!0),ne.forEach(({motion:P,pivot:he})=>{he.visible&&P.update(I,O,D.matches)}),i.dataset.fluid=JSON.stringify(ne.find(P=>P.pivot.visible)?.motion.mesh.userData.fluid||{}),ve.forEach((P,he)=>{if(!P||!le[he])return;P.group.position.copy(le[he].position),P.group.scale.copy(le[he].scale);let Ne=n?le[he].userData.assembly?.spread??1:1;Ne!==1&&P.group.scale.multiplyScalar(Ne),ie&&(P.group.scale.x*=.87,P.group.scale.y*=.7);let qe=n?fs(.3+Se*.25+(D.matches?0:.1*Math.sin(O*.24+he*2.094))):r?.43+(D.matches?0:.16*Math.sin(z*.5)):fs(.2+g/(Math.PI*2));P.group.rotation.set(.04*Math.sin(qe*Math.PI),g*.2-qe*.45,-.18+qe*.36);let at=r?Number(i.dataset.atmosphereWeight??(y?1:0)):1;if(P.group.visible=le[he].visible&&at>0,n&&(P.group.position.set(le[he].position.x+.1,-.12,-1.1),P.group.scale.setScalar(ie?1:1.48),P.group.rotation.y+=D.matches?0:.1*Math.sin(O*.22)),r&&(D.matches||(P.group.rotation.y+=.22*Math.sin(z*.32),P.group.rotation.z+=.045*Math.sin(z*.41),P.group.position.y+=.018*Math.sin(z*.6)),P.group.scale.x*=.9,!t)){let gt=i.closest(".fragrance-rail"),Vt=i.getBoundingClientRect(),_t=gt.getBoundingClientRect(),nt=Vt.width/i.clientWidth,pt=Z.position.z+.75,cn=2*Math.tan(En.degToRad(Z.fov*.5))*pt/Vt.height;P.group.scale.multiplyScalar(1/nt),P.group.position.x+=(_t.left+_t.width/2-(Vt.left+Vt.width/2))*cn;let un=i.parentElement.getBoundingClientRect(),C=un.top+i.offsetTop+i.clientHeight/2;P.group.position.y-=(C-(Vt.top+Vt.height/2))*cn,i.dataset.atmosphereAnchor=String(_t.left+_t.width/2)}let St=r?0:n?.85:1;P.setVisibility(St),P.entranceMaterials?.forEach(gt=>gt.opacity=St),P.setting.group.visible=!r&&he===_e,P.setting.setPresentation(n&&!ie),P.setting.group.position.set(n&&!ie?.48:0,ie&&n?-.18:.08,0),P.setting.group.scale.set(ie?.58:1,ie?.85:1,1),P.update(O,D.matches,qe)});function Pe(P,he){ve.forEach((Ne,qe)=>Ne.setting.group.visible=qe===P),W.background?.isColor&&W.background.copy(B||ve[P]?.setting.color||bt),vl({renderer:o,scene:W,camera:Z,bottles:le,glassMeshes:be,liquidMeshes:He,tubeMeshes:j,labelMeshes:se,background:je,interior:Qe,target:he,surroundings:ve.flatMap(Ne=>[Ne.group,Ne.setting.group]),fondaleOttico:F||bt,otticaFondale:r||s,fondaleScheda:G})}if(o.info.reset(),Pe(_e,null),i.dataset.presented="true",i.dataset.ready="true",a.querySelector(".scene-loading")?.classList.add("loaded"),i.dataset.entrance=String(T),i.dataset.heroStage=n?Se<.7?"macro":"portrait":"fragrance",n&&a.style.setProperty("--hero-reveal",Se.toFixed(3)),U&&(i.dataset.ensembles=JSON.stringify(le.map((P,he)=>({slug:P.userData.slug,visible:P.visible,sharedPosition:ve[he]?.group.position.distanceTo(P.position)<1e-8,chapter:P.userData.chapter,rotation:P.rotation.y,effect:ve[he]?.group.visible}))),i.dataset.particleMotion=JSON.stringify(ve[_e]?.group.userData.motion||{}),i.dataset.setting=ve[_e]?.setting.title||"",i.dataset.optics="nested-glass-liquid",i.dataset.transmission="smoke-background-liquid-glass",i.dataset.atmosphere=ve.map(P=>P?.label).filter(Boolean).join(" / "),i.dataset.renderWidth=String(i.clientWidth),i.dataset.frames=String(++b),i.dataset.triangles=String(o.info.render.triangles),i.dataset.drawCalls=String(o.info.render.calls),i.dataset.atmospherePasses="2",i.dataset.pixelRatio=String(o.getPixelRatio()),i.dataset.userRotation=JSON.stringify({x,y:g}),i.dataset.rotation=le[0]?.rotation.y.toFixed(4)||"0",i.dataset.progress=Se.toFixed(4)),!D.matches){let P=performance.now();if(Ie&&(lt.push(P-Ie),lt.length>=48)){lt.sort((qe,at)=>qe-at);let he=lt[lt.length>>1];lt.length=0;let Ne=Ce;he>21&&Ce>.55?Ne=Math.max(.55,Ce-.12):he<14&&Ce<1&&(Ne=Math.min(1,Ce+.06)),Ne!==Ce&&(Ce=Ne,o.setPixelRatio(Le()),h=f=0,u=!0,Me(),U&&(i.dataset.scalaQualita=Ce.toFixed(2)))}Ie=P}(!D.matches&&(!r||y)||m||Math.abs(S-v)>1e-4)&&(d=requestAnimationFrame(ue))}ce(i,"atmospherechange",()=>{d||(d=requestAnimationFrame(ue))}),ce(i,"presentationchange",()=>{let I=i.dataset.selected!=="false";I!==y&&(y=I,R=0,A=I?performance.now():null),d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"texturepronta",()=>{d||(d=requestAnimationFrame(ue))}),ce(document,"visibilitychange",()=>{!document.hidden&&!d&&(d=requestAnimationFrame(ue))}),ce(o.domElement,"pointermove",()=>{d||(d=requestAnimationFrame(ue))}),ce(o.domElement,"keydown",()=>{d||(d=requestAnimationFrame(ue))});function De(I){I.traverse(O=>{O.isLight&&O.shadow?.map?.dispose(),O.geometry&&k.add(O.geometry);for(let ie of Array.isArray(O.material)?O.material:[O.material])ie&&(oe.add(ie),Object.values(ie.uniforms||{}).forEach(me=>{me.value?.isTexture&&Q.add(me.value)}),Object.values(ie).forEach(me=>{me?.isTexture&&Q.add(me)}))})}let fe=()=>{l=!0,cancelAnimationFrame(d),H.forEach(I=>I()),Ke.disconnect(),Oe.disconnect(),De(W),k.forEach(I=>I.dispose()),oe.forEach(I=>I.dispose()),Q.forEach(I=>I.dispose()),L?.dispose(),Qe.dispose(),je.dispose(),X.shadow.map?.dispose(),o.dispose(),t&&o.forceContextLoss(),o.domElement.remove()};return r||(Hu=fe),fe}var oi={storia:{occhiello:"MANIFESTO",titolo:"Arte attraverso le fragranze",apertura:"Un nuovo modo di vivere, espresso attraverso l\u2019arte del profumo. La nostra storia si dispiega attraverso luoghi, emozioni e passione. L\u2019essenza dello stile Zavyla \xE8 un intreccio vivo di colori, libert\xE0, espressione artistica e percorso creativo. L\u2019arte \xE8 il filo che unisce i nostri mondi personali e li trasforma in una lingua universale.",capitoli:[{chiave:"storia",soprattitolo:"Storia e valori",titolo:"L\u2019arte della profumeria italiana",foto:"story_2",alt:"Victoria e Giancarlo, i fondatori di Zavyla, a cavallo",testo:["Nel 2011 Victoria, irlandese, e Giancarlo, sardo, si incontrano per la prima volta a Roma.","La passione che condividono per l\u2019arte e per le fragranze accende un viaggio che li trasforma: l\u2019amore, e una rinascita psichedelica che cambia le loro vite.","Le collezioni Zavyla sono autentica eccellenza made in Italy: artigianato e creazioni olfattive uniche, che danno forma a un mondo di profumo nuovo.","Arte psichedelica, libert\xE0, anticonformismo, multiculturalit\xE0, sogni e fantasie: da qui nascono le prime due collezioni."]},{chiave:"nome",soprattitolo:"Il nome",titolo:"Una storia di sogni",foto:"name_2",alt:"Opera d\u2019arte incorniciata, ispirazione del nome Zavyla",testo:["Giancarlo e Victoria amano profondamente le loro due figlie, i cui nomi evocano mondi lontani e sogni incantati. Nel loro cuore, per\xF2, c\u2019\xE8 sempre stato un posto speciale per un altro nome: Zavyla.","Era un sussurro di possibilit\xE0, un sogno che li accompagnava nelle notti stellate e nelle passeggiate al tramonto. Zavyla era pi\xF9 di un nome: era un\u2019essenza, un\u2019idea di bellezza e libert\xE0 che non si poteva contenere.","Cos\xEC Zavyla \xE8 diventato il nome del loro marchio: un omaggio a quella terza figlia immaginata e a tutte le possibilit\xE0 che la vita offre. Un simbolo di creativit\xE0 e di trasformazione, il modo in cui Giancarlo e Victoria hanno portato un sogno nel mondo."]},{chiave:"visione",soprattitolo:"La visione",titolo:"L\u2019essenza di ci\xF2 che sei",foto:"vision_2",alt:"Flacone Zavyla illuminato dal sole",testo:["Curiosit\xE0, gioco e ricerca minuziosa di materiali fuori dal comune: da qui nascono sinfonie olfattive che portano in un luogo oltre il tempo e lo spazio, dove quello che sei davvero pu\xF2 fiorire.","Ogni fragranza \xE8 un pezzo unico, la prova di un\u2019individualit\xE0. Osiamo uscire dalle convenzioni, cercando sempre oltre il confine dell\u2019ordinario."]},{chiave:"collezioni",soprattitolo:"Le collezioni",titolo:"Una sinfonia di sensi",foto:"our_collection2",alt:"Il laboratorio del profumiere, con gli oli essenziali",testo:["Le collezioni Zavyla nascono dalla sintonia creativa fra i fondatori e la maestra profumiera Rosa Vaia.","Ogni creazione \xE8 una prova di fantasia, libert\xE0 e espressione artistica. Sono elementi intrecciati nel tessuto stesso delle fragranze, pensate per risvegliare i desideri pi\xF9 profondi. \xC8 la cura del dettaglio a distinguerci: ogni flacone, e il suo tappo, diventano un\u2019opera."]},{chiave:"tappi",soprattitolo:"I tappi",titolo:"Ogni tappo \xE8 un pezzo unico",foto:"tappi-lastre",alt:"I tappi in resina lavorati a mano, uno diverso dall\u2019altro",testo:["Ogni fragranza Zavyla comincia dal tatto: il tappo. Lavorati con maestria artigianale, sono vere sculture in resina pregiata, ognuna con un effetto marmorizzato irripetibile. Ogni sfumatura, ogni venatura, \xE8 il frammento di un universo astratto.","Non esistono due tappi Zavyla uguali. La tecnica artigianale crea texture marmorizzate uniche, e fa di ogni pezzo un\u2019opera a s\xE9. Come gemme, trasformano il flacone in un oggetto da collezione: la loro esclusivit\xE0 sta nel fatto di essere insostituibili."]},{chiave:"italia",soprattitolo:"Made in Italy",titolo:"Il cuore delle nostre fragranze",foto:"zavyla2025-8",alt:"La mappa d\u2019Italia con le tappe della lavorazione Zavyla",testo:["Un viaggio attraverso l\u2019Italia, dalle materie prime alla creazione finale, per un profumo che racconta una storia."]}]},filosofia:{titolo:"L\u2019arte come lingua comune",testo:"La nostra storia e le nostre fragranze parlano di luoghi, di sentimenti, di passione. Colori, libert\xE0, arte: \xE8 questa la sintesi del modo di vivere Zavyla, e il percorso creativo che lo attraversa. L\u2019arte \xE8 il filo che unisce i nostri mondi personali e diventa una lingua che tutti possono capire."},instagram:{titolo:"Dove continuiamo a raccontarci",testo:"Scatti dal laboratorio, dalle fiere e dalle giornate in cui un profumo prende forma.",profilo:"zavylaperfumes",link:"https://instagram.com/zavylaperfumes"},matrimonio:{titolo:"Un profumo per quel giorno",sottotitolo:"Una scatola per due, i sacchetti per gli invitati, un\u2019essenza su misura.",testo:"La scatola per due si personalizza con i due profumi che scegli e con il messaggio che vuoi lasciare. Nasce come regalo per gli sposi, ma \xE8 anche un modo di far entrare una fragranza nella giornata: nel momento della promessa, sulla pelle di chi la pronuncia, nel ricordo che resta dopo.",servizi:[["La scatola per due","Due profumi a tua scelta e un messaggio personalizzato."],["I sacchetti per gli invitati","Una piccola fragranza da portare a casa dopo la festa."],["Il profumo su misura","Un\u2019essenza creata su richiesta, soltanto per voi."]],invito:"Raccontaci che cosa hai in mente: ti rispondiamo con una proposta per la tua giornata."},business:{titolo:"Zavyla nella tua boutique",testo:"Immagini Zavyla sui tuoi scaffali? Le nostre fragranze nascono in Italia, dalla profumeria artigianale, e si raccontano meglio di persona: il flacone, la pietra sul tappo, la scia che resta. Se hai una profumeria o una boutique e vuoi parlarne, il primo passo \xE8 scriverci.",invito:"Lasciaci due righe sulla tua attivit\xE0 e ti ricontattiamo noi."},affinita:{titolo:"Trova la tua fragranza",testo:"Quattro domande, nessuna risposta sbagliata. Servono a capire da che parte ti muovi: che cosa ti attira al primo istante, dove ti porta un profumo, che cosa vuoi lasciare dietro di te.",risultato:"Per come hai risposto, la fragranza pi\xF9 vicina a te \xE8",indietro:"Domanda precedente",avanzamento:"Domanda {n} di {tot}",vicine:"Altre due molto vicine",ricomincia:"Ricomincia da capo",domande:[["Che cosa ti cattura per primo?",[["La scorza di un agrume appena aperta",["agrumato","acquatico","verde"]],["Un fiore, nel momento in cui si apre",["floreale"]],["Un frutto maturo",["fruttato"]],["Una spezia pestata",["speziato"]]]],["Dove vorresti essere?",[["All\u2019aria aperta, dopo la pioggia",["verde","acquatico"]],["In una stanza di legno, al caldo",["legnoso"]],["In cucina, mentre qualcosa cuoce",["gourmand"]],["Fuori la sera, quando la luce cala",["ambrato"]]]],["Che scia vuoi lasciare?",[["Discreta, che si avverte da vicino",["muschiato"]],["Calda e avvolgente",["ambrato"]],["Profonda, che resta nei tessuti",["legnoso"]],["Dolce, riconoscibile",["gourmand","fruttato"]]]],["Come vuoi sentirti addosso?",[["Morbido",["morbido","muschiato","acquatico"]],["Acceso",["speziato"]],["In fiore",["floreale"]],["Solido",["legnoso"]]]]]}};var Lf={amund:"linear-gradient(112deg,#1e1a18 0%,#6f645b 14%,#2a2522 27%,#b9ada0 41%,#3b342f 55%,#8e8276 71%,#221e1b 86%,#5e554d 100%)",sylind:"linear-gradient(112deg,#2a210a 0%,#9c8638 14%,#3a2e0e 27%,#e2cd84 41%,#4d3e13 55%,#b9a04e 71%,#2c230b 86%,#7d6a2a 100%)"},da=(i,e=!1)=>Lf[i]?`--marmo:${Lf[i]};--marmo-misura:100% 100%`:`--marmo:url(assets/fondi/${i}${e?"-piccolo":""}.webp?v=R149)`;var ps=i=>{let e=Nt.find(t=>t.slug===i);return`--fragranza:${e.color};--palco:${e.stage||e.color};${da(i)}`},Oi=(i,e="",t="")=>`<img${t?` class="${t}"`:""} src="assets/zavyla/${i}.webp" alt="${e}" loading="lazy" decoding="async">`,Df=i=>oi.storia.capitoli.find(e=>e.chiave===i),__=()=>`<ol class="hz-pietre" aria-label="Le tredici fragranze">${Nt.map((i,e)=>`<li style="--i:${e};--fragranza:${i.color}"><a href="#/profumo/${i.slug}"><img src="assets/stones/${i.slug}.webp?v=R147" alt="" width="360" height="360" loading="lazy" decoding="async"><span>${i.name}</span></a></li>`).join("")}</ol>`,x_=()=>`<section class="hz hz-manifesto marmo" style="${ps("forgive")}" aria-labelledby="hz-manifesto-titolo">
 <div class="hz-dentro">
  <span class="eyebrow">${oi.storia.occhiello}</span>
  <h2 id="hz-manifesto-titolo">L\u2019arte come<br><em>lingua comune</em></h2>
  <p>${oi.filosofia.testo}</p>
 </div>
 ${__()}
</section>`,M_=()=>{let i=Df("tappi");return`<section class="hz hz-tappi marmo" style="${ps("promise")}" aria-labelledby="hz-tappi-titolo">
 <div class="hz-dentro">
  <figure class="hz-tappi-grande">${Oi("tappi-lastre",i.alt)}</figure>
  <figure class="hz-tappi-piccola">${Oi("tappi-cubo")}</figure>
  <div class="hz-tappi-testo">
   <span class="eyebrow">${i.soprattitolo}</span>
   <h2 id="hz-tappi-titolo">Ogni tappo \xE8<br><em>un pezzo unico</em></h2>
   ${i.testo.map(e=>`<p>${e}</p>`).join("")}
   <a class="text-link" href="#/catalogo">Esplora le fragranze \u2197</a>
  </div>
 </div>
</section>`},b_=()=>{let i=Df("storia");return`<section class="hz hz-maison marmo" style="${ps("give")}" aria-labelledby="hz-maison-titolo">
 <figure class="hz-maison-foto">${Oi(i.foto,i.alt)}</figure>
 <div class="hz-maison-testo">
  <p class="hz-anno" aria-label="Irlanda e Sardegna, 2011, l\u2019incontro a Roma"><span>IRLANDA \xB7 SARDEGNA</span><b>2011</b><span>L\u2019INCONTRO, A ROMA</span></p>
  <h2 id="hz-maison-titolo">Due origini.<br>Un incontro.<br><em>Un mondo da sentire.</em></h2>
  <p>Victoria, irlandese, e Giancarlo, sardo, si incontrano a Roma nel 2011. La passione per l\u2019arte e le fragranze diventa un percorso comune, da cui prende forma Zavyla.</p>
  <p>Il nome \xE8 dedicato a una terza figlia immaginata: un sogno di bellezza e libert\xE0. L\u2019ispirazione psichedelica incontra la cura della profumeria artigianale italiana.</p>
  <a class="text-link" href="#/maison">Entra nella nostra storia \u2197</a>
 </div>
</section>`},S_=()=>`<section class="hz hz-incontro marmo" style="${ps("trust")}" aria-labelledby="hz-incontro-titolo">
 <div class="hz-dentro">
  <div class="hz-incontro-testo">
   <span class="eyebrow">Il primo passo</span>
   <h2 id="hz-incontro-titolo">Inizia da<br><em>un incontro.</em></h2>
   <a class="btn" href="#/regali">Discovery & regali <span>\u2197</span></a>
  </div>
  <figure>${Oi("discovery","Discovery set Zavyla")}</figure>
 </div>
</section>`,E_=()=>`<section class="hz hz-instagram" aria-labelledby="hz-instagram-titolo">
 <div class="hz-dentro">
  <div class="hz-instagram-testa">
   <div><span class="eyebrow">INSTAGRAM</span><h2 id="hz-instagram-titolo">${oi.instagram.titolo}</h2><p>${oi.instagram.testo}</p></div>
   <a class="text-link" href="${oi.instagram.link}" target="_blank" rel="noopener">@${oi.instagram.profilo} \u2197</a>
  </div>
  <a class="hz-instagram-foto" href="${oi.instagram.link}" target="_blank" rel="noopener" aria-label="Apri il profilo Instagram @${oi.instagram.profilo}">
   ${Oi("our_collection2")}${Oi("vision_2")}${Oi("name_2")}${Oi("zavyla2025-2","","hz-a-sinistra")}
  </a>
 </div>
</section>`,T_=[["love","Love","Collection","Otto emozioni","forgive"],["intimacy","Intimacy","Collection","Sulla pelle","silky"],["doppio","Doppio","Respiro","Due anime","sylind"]],Vu=(i=!1)=>`<section class="hz hz-collezioni marmo${i?" hz-collezioni-pagina":""}" style="${ps("promise")}" aria-labelledby="hz-collezioni-titolo">
 <div class="hz-collezioni-testa">
  ${i?'<div><span class="eyebrow">LE COLLEZIONI</span><h1 id="hz-collezioni-titolo">Tre modi di sentire.</h1><p>L\u2019amore, l\u2019intimit\xE0, il respiro. Tre universi per dare forma alla tua sensibilit\xE0.</p></div>':`<h2 id="hz-collezioni-titolo">Tre modi di sentire.</h2>
  <a class="text-link" href="#/collezioni">Tutte le collezioni \u2197</a>`}
 </div>
 <div class="hz-trittico">${T_.map(([e,t,n,r,s])=>{let a=Nt.filter(o=>o.collection===e);return`
  <article class="hz-pannello marmo" style="${ps(s)}">
   <a class="hz-pannello-tutto" href="#/catalogo/${e}" aria-label="${t} ${n}"></a>
   <div class="hz-pannello-testa"><span class="eyebrow">${r}</span><h3>${t}<br><em>${n}</em></h3></div>
   <img src="assets/flaconi/${s}.webp?v=R167" alt="" width="491" height="979" loading="lazy" decoding="async">
   <ul>${a.map(o=>`<li><a href="#/profumo/${o.slug}">${o.name}</a></li>`).join("")}</ul>
  </article>`}).join("")}
 </div>
</section>`,zf=()=>x_()+M_()+Vu()+b_()+S_()+E_();var Gu={forgive:{nome:"Forgive",titolo:"Forgive: L'Eleganza del Perdono e della Rinascita",intro:`Benvenuti nel mondo di *Forgive, una fragranza che racconta la forza del perdono, il coraggio di ricominciare e la bellezza di lasciare andare ci\xF2 che appesantisce l'anima. Intensa, avvolgente e sorprendente, Forgive \xE8 un profumo pensato per chi sceglie di trasformare ogni esperienza in una nuova opportunit\xE0.
La sua evoluzione olfattiva \xE8 un viaggio ricco di contrasti: un'apertura speziata e vivace, un cuore morbido e seducente, fino a una base calda e persistente che lascia una scia indimenticabile.`,sezioni:[{titolo:"Note di testa",testo:"Un Inizio Audace e Coinvolgente L'apertura di Forgive cattura immediatamente l'attenzione grazie all'incontro tra spezie pregiate e frutti succosi. Pepe Nero: Considerato una delle spezie pi\xF9 nobili della profumeria, il pepe nero dona una vivacit\xE0 elegante con sfumature secche, calde e leggermente legnose. \xC8 la nota che imprime carattere e dinamismo fin dal primo istante. Cardamomo: Con il suo profumo fresco, aromatico e delicatamente agrumato, il cardamomo \xE8 una delle spezie pi\xF9 apprezzate nella profumeria artistica. Regala luminosit\xE0 e raffinatezza, creando un perfetto equilibrio con le note pi\xF9 intense. Frutti Rossi: Succosi, vivaci e irresistibili, i frutti rossi donano una dolcezza moderna impreziosita da leggere sfumature acidule. La loro energia rende l'apertura luminosa, seducente e ricca di personalit\xE0."},{titolo:"Note di cuore",testo:`Il Fascino della Trasformazione Il cuore di Forgive unisce eleganza floreale, sfumature tropicali e calore gourmand, creando un accordo sorprendente e armonioso. Gelsomino: Conosciuto come il "Re della Profumeria", il gelsomino regala sensualit\xE0 e raffinatezza. Il suo profumo intenso e luminoso dona profondit\xE0 alla composizione, esaltandone il carattere elegante. Ananas:*Fresco, esotico e leggermente zuccherino, l'ananas introduce una sfumatura fruttata originale che illumina il cuore della fragranza con una vivacit\xE0 sofisticata. Fava Tonka: Preziosa e avvolgente, la fava tonka diffonde un aroma caldo con accenti di vaniglia, mandorla e leggeri richiami al tabacco. \xC8 l'ingrediente che dona morbidezza e una sensualit\xE0 irresistibile all'intera composizione.`},{titolo:"Note di fondo",testo:"Una Scia Calda e Indimenticabile Il fondo di Forgive \xE8 intenso, elegante e costruito per lasciare un ricordo duraturo sulla pelle. Ambra: Simbolo di calore e raffinatezza, l'ambra avvolge la fragranza con sfumature morbide, resinose e leggermente dolci. Dona profondit\xE0 e una sensazione di comfort che accompagna la pelle per ore. Patchouli: Autentica icona della profumeria artistica, il patchouli offre sfaccettature terrose, legnose e leggermente speziate. La sua intensit\xE0 conferisce carattere e una persistenza straordinaria, completando la composizione con un'eleganza senza tempo. Se desideri una fragranza intensa, sofisticata e ricca di emozioni, Forgive \xE8 la scelta ideale. L'incontro tra spezie preziose, frutti luminosi, un cuore avvolgente e un fondo caldo e persistente crea una firma olfattiva capace di trasmettere forza, equilibrio ed eleganza in ogni occasione."},{titolo:"Il consiglio di Zavyla",testo:"Per valorizzare al massimo la scia di Forgive, applicalo sui punti di pulsazione - polsi, collo, dietro le orecchie e all'interno dei gomiti. Il calore naturale della pelle accompagner\xE0 l'evoluzione della fragranza, rivelando gradualmente tutte le sue sfumature e regalando una persistenza intensa e raffinata durante tutta la giornata. Forgive"}]},trust:{nome:"Trust",titolo:"Trust: L'Essenza della Fiducia e dell'Autenticit\xE0",intro:`Benvenuti nel mondo di Trust, una fragranza che celebra la forza della fiducia, l'eleganza della semplicit\xE0 e il fascino delle emozioni autentiche. Pensato per chi desidera esprimere sicurezza e carattere senza ostentazione, Trust \xE8 un profumo che conquista con discrezione e lascia un ricordo indelebile.
La sua evoluzione olfattiva unisce la vivacit\xE0 delle note fruttate alla raffinatezza dei fiori e alla profondit\xE0 di una base moderna e avvolgente, creando un perfetto equilibrio tra energia e comfort.`,sezioni:[{titolo:"Note di testa",testo:`Un'Accoglienza Vivace e Sofisticata L'apertura di Trust sorprende con un incontro armonioso tra la dolcezza del frutto e la freschezza aromatica delle note verdi. Lampone: Tra i frutti pi\xF9 apprezzati nella profumeria contemporanea, il lampone regala una dolcezza vellutata e succosa, illuminata da una delicata sfumatura acidula. La sua vivacit\xE0 dona alla fragranza un'apertura elegante, luminosa e irresistibilmente moderna. Geranio: Conosciuto come la "rosa al maschile", il geranio offre un profilo aromatico unico, dove accenti verdi, floreali e leggermente speziati si fondono in perfetto equilibrio. \xC8 la nota che aggiunge freschezza e personalit\xE0 fin dal primo istante.`},{titolo:"Note di cuore",testo:"Il Carattere Prende Forma Il cuore di Trust rivela una composizione armoniosa che unisce forza, eleganza e delicatezza. Legno di Cedro: Nobile e raffinato, il cedro diffonde un aroma caldo, asciutto e leggermente balsamico. Dona struttura alla fragranza e trasmette una sensazione di solidit\xE0 e sicurezza. Geranio: Riprendendo la sua presenza nel cuore della composizione, il geranio crea continuit\xE0 tra le note iniziali e quelle di fondo, rafforzando il carattere fresco ed elegante del profumo. Violetta: Delicata e sofisticata, la violetta impreziosisce il cuore della fragranza con le sue sfumature cipriate, morbide e leggermente verdi. \xC8 il tocco che dona armonia e una raffinata eleganza senza tempo."},{titolo:"Note di fondo",testo:"Una Firma Elegante e Contemporanea Il fondo \xE8 costruito su due ingredienti iconici della profumeria moderna, capaci di creare una scia pulita, sensuale e incredibilmente persistente. Muschio Bianco: Simbolo di comfort ed eleganza, avvolge la pelle con una sensazione vellutata e luminosa. La sua delicatezza rende la fragranza intima, raffinata e perfettamente equilibrata. Ambroxan: Una delle molecole pi\xF9 apprezzate della profumeria contemporanea, l'Ambroxan dona sfumature ambrate, minerali e leggermente legnose. La sua capacit\xE0 di fondersi con la pelle rende la fragranza estremamente persistente, creando una firma olfattiva moderna e riconoscibile. Se desideri una fragranza elegante, versatile e ricca di personalit\xE0, Trust \xE8 la scelta perfetta. L'incontro tra la dolcezza del lampone, la freschezza aromatica del geranio, la raffinatezza dei legni e la morbidezza del muschio bianco d\xE0 vita a una composizione equilibrata, contemporanea e capace di accompagnarti con stile in ogni occasione. Per valorizzare al massimo la persistenza di Trust, applicalo sui punti di pulsazione - polsi, collo, dietro le orecchie e all'interno dei gomiti. Il calore naturale della pelle accompagner\xE0 l'evoluzione della fragranza, rivelando nel tempo tutte le sue sfumature e regalando una scia elegante e memorabile. Trust"}]},share:{nome:"Share",titolo:"Share: L'Armonia che Unisce Eleganza e Carisma",intro:`Benvenuti nel mondo di Share, una fragranza che celebra l'incontro tra luce e profondit\xE0, freschezza e sensualit\xE0. Pensato per chi ama lasciare un ricordo autentico; Share \xE8 un profumo che racconta il valore delle connessioni, trasformando ogni nota in un'esperienza olfattiva raffinata e contemporanea.
La sua evoluzione sulla pelle \xE8 un perfetto equilibrio tra accordi agrumati, sfumature floreali e una base morbida e avvolgente, capace di accompagnarti con eleganza in ogni momento della giornata.`,sezioni:[{titolo:"Note di testa",testo:"Un Inizio Luminoso e Raffinato L'apertura di Share \xE8 vibrante e ricca di sfaccettature, dove la freschezza degli agrumi incontra la sensualit\xE0 dei fiori e il fascino delle spezie. Bergamotto: Considerato il principe degli agrumi in profumeria, il bergamotto regala una freschezza brillante con leggere sfumature floreali. La sua vivacit\xE0 illumina la composizione e dona una sensazione immediata di energia ed eleganza. Tuberosa: Regina dei fiori bianchi, \xE8 celebre per il suo profumo intenso, cremoso e irresistibilmente seducente. Da secoli \xE8 protagonista della profumeria artistica grazie alla sua capacit\xE0 di rendere ogni fragranza sofisticata e avvolgente. Zafferano: Tra le spezie pi\xF9 preziose al mondo, lo zafferano conferisce una sfumatura calda, leggermente cuoiata e delicatamente speziata. \xC8 l'ingrediente che dona carattere e un'impronta esclusiva fin dalle prime note."},{titolo:"Note di cuore",testo:`L'Equilibrio tra Natura ed Eleganza Il cuore di Share esprime forza e delicatezza in una perfetta armonia di accordi floreali e legnosi. Legno di Cedro: Elegante, asciutto e leggermente balsamico, il cedro dona struttura alla composizione e trasmette una sensazione di stabilit\xE0 e raffinatezza. Geranio: Spesso definito la "rosa al maschile", il geranio unisce sfumature verdi, aromatiche e floreali, regalando freschezza e un equilibrio naturale che rende il cuore della fragranza moderno e sofisticato. Violetta: Delicata e inconfondibile, la violetta diffonde un profumo morbido, leggermente cipriato e verde. Le sue sfumature romantiche aggiungono eleganza e leggerezza, armonizzando perfettamente l'intera composizione.`},{titolo:"Note di fondo",testo:"Una Scia Moderna e Avvolgente Il fondo di Share \xE8 essenziale ma straordinariamente persistente, grazie all'incontro di due grandi protagonisti della profumeria contemporanea. Muschio Bianco: Simbolo di pulizia, comfort ed eleganza, avvolge la pelle con una morbidezza vellutata, creando una scia discreta ma estremamente raffinata. Ambroxan: Considerato una delle molecole pi\xF9 iconiche della profumeria moderna, l'Ambroxan offre sfumature ambrate, minerali e leggermente legnose. Ha la straordinaria capacit\xE0 di fondersi con la pelle, amplificando la persistenza della fragranza e creando una firma olfattiva unica e irresistibile."},{titolo:"Perch\xE9 sceglierlo",testo:"Se cerchi una fragranza versatile, elegante e dal fascino contemporaneo, Share \xE8 la scelta ideale. La luminosit\xE0 del bergamotto, la sensualit\xE0 della tuberosa, il carattere dello zafferano e la morbidezza dell'Ambroxan danno vita a una composizione sofisticata, perfetta per chi desidera distinguersi con naturalezza e stile."},{titolo:"Il consiglio di Zavyla",testo:"Per esaltare al massimo la persistenza di Share, applicalo sui punti di pulsazione - polsi, collo, dietro le orecchie e all'interno dei gomiti. Il calore naturale della pelle accompagner\xE0 l'evoluzione della fragranza, rivelando nel tempo tutte le sue sfumature, dalla freschezza iniziale alla scia elegante e avvolgente. Share"}]},"occhio-di-tigre":{nome:"Occhio di Tigre",titolo:"Occhio di Tigre: Il Fascino della Forza e del Mistero",intro:"Ispirata all'omonima pietra, simbolo di coraggio, protezione e determinazione, questa creazione racchiude un carattere deciso e sofisticato, capace di lasciare un ricordo indelebile. \xC8 un profumo che evolve sulla pelle con eleganza, rivelando sfumature sempre nuove e trasformando ogni vaporizzazione in un autentico viaggio sensoriale.",sezioni:[{titolo:"Note di testa",testo:"L'Accensione dei Sensi L'apertura di Occhio di Tigre conquista fin dal primo istante con una nota fruttata intensa e luminosa. Lampone: Considerato uno dei frutti pi\xF9 raffinati della profumeria moderna, il lampone dona una dolcezza vivace e vellutata, bilanciata da una delicata sfumatura acidula. Il suo carattere succoso illumina la composizione, regalando un'apertura irresistibile e ricca di energia."},{titolo:"Note di cuore",testo:"L'Equilibrio tra Eleganza e Sensualit\xE0 Il cuore della fragranza rivela una combinazione avvolgente che esprime calore, morbidezza e profondit\xE0. Muschio: Da sempre protagonista della profumeria di alta gamma, il muschio dona una sensazione di pelle pulita e vellutata. La sua delicatezza crea un'aura elegante e sensuale, rendendo la fragranza armoniosa e persistente. Ambra Grigia: Tra gli ingredienti pi\xF9 affascinanti della storia della profumeria, oggi viene ricreata attraverso sofisticate molecole aromatiche. Il suo profilo caldo, minerale e leggermente salino amplifica la profondit\xE0 della composizione, conferendole una scia raffinata e di grande fascino."},{titolo:"Note di fondo",testo:`La Firma di un Carattere Unico Il fondo \xE8 l'anima pi\xF9 intensa di Occhio di Tigre, dove i legni nobili incontrano l'eleganza orientale, dando vita a una persistenza straordinaria. Legno di Cedro: Caldo, secco e leggermente balsamico, trasmette solidit\xE0 ed equilibrio, donando struttura all'intera composizione. Patchouli: Icona della profumeria artistica, regala sfumature terrose, legnose e leggermente speziate che aggiungono profondit\xE0 e personalit\xE0. Oud: Definito "l'oro liquido della profumeria", \xE8 uno degli ingredienti pi\xF9 preziosi al mondo. Il suo carattere intenso, misterioso e avvolgente conferisce alla fragranza un'eleganza orientale senza tempo. Legno di Sandalo: Morbido e cremoso, avvolge la pelle con un calore vellutato che rende la scia armoniosa e incredibilmente raffinata. Ylang Ylang: Conosciuto come il "fiore dei fiori", aggiunge un tocco esotico e sensuale con le sue sfumature floreali, cremose e leggermente speziate, creando un perfetto equilibrio con le note legnose.`},{titolo:"Perch\xE9 sceglierlo",testo:"Se ami le fragranze eleganti, persistenti e ricche di carattere, Occhio di Tigre \xE8 la scelta ideale. L'incontro tra la dolcezza luminosa del lampone, il calore dell'ambra e del muschio e la profondit\xE0 dei legni preziosi crea una firma olfattiva sofisticata, pensata per chi desidera distinguersi con classe e lasciare un ricordo indelebile."},{titolo:"Il consiglio di Zavyla",testo:"Per esaltare al massimo la scia di Occhio di Tigre, applicalo sui punti di pulsazione - polsi, collo, dietro le orecchie e all'interno dei gomiti. Il calore naturale della pelle accompagner\xE0 l'evoluzione della fragranza, permettendo a ogni nota di esprimersi con intensit\xE0 e armonia durante tutta la giornata. Occhio di tigre"}]},speak:{nome:"Speak",titolo:"Speak: La Fragranza che Racconta la tua Eleganza",intro:"Esistono profumi che non hanno bisogno di presentazioni, perch\xE9 la loro scia parla per loro. Speak \xE8 esattamente questo: un manifesto olfattivo di forza, raffinatezza e mistero. In questa creazione, la profumeria artistica incontra materie prime leggendarie, dando vita a un\u2019esperienza sensoriale che evolve sulla pelle con una complessit\xE0 magnetica.",sezioni:[{titolo:"Note di testa",testo:`Un Esordio Regale e Solare L'apertura di Speak \xE8 un invito immediato al lusso, grazie a un accostamento di spezie nobili e frutti luminosi. Zafferano e Arancia: Definito spesso l'"oro rosso", lo zafferano \xE8 una delle spezie pi\xF9 costose e pregiate al mondo. Utilizzato fin dall'antichit\xE0 per i profumi dei reali, regala una nota calda e lievemente cuoiata. L\u2019arancia bilancia questa profondit\xE0 con un tocco fresco e solare, catturando l\u2019attenzione fin dal primo spruzzo.`},{titolo:"Note di cuore",testo:`L\u2019Anima Preziose e Cipriata Il cuore di Speak \xE8 un trionfo di ingredienti d'eccellenza, dove la forza del legno incontra la delicatezza dei fiori nobili. Oud (Legno di Agar): Conosciuto come l'"oro liquido" della profumeria, l'Oud \xE8 una resina rarissima che si forma nel legno di Agar. Dona alla fragranza un carattere profondo, legnoso e misterioso, tipico dei profumi di nicchia pi\xF9 ricercati. Rosa, Iris e Note Cipriate: La rosa aggiunge un\u2019eleganza senza tempo, ma \xE8 l\u2019Iris a rendere tutto straordinario. Essendo una delle materie prime pi\xF9 costose della profumeria, l'iris regala una sfumatura cipriata e sofisticata, creando un equilibrio perfetto tra forza e morbidezza.`},{titolo:"Note di fondo",testo:"Persistenza e Sensualit\xE0 Il segreto di un profumo persistente risiede nella qualit\xE0 delle sue note di fondo, capaci di fissarsi sulla pelle per ore. Miele Bianco, Vetiver e Muschio: A differenza del miele tradizionale, il miele bianco offre una dolcezza vellutata e discreta. Il Vetiver, pilastro delle fragranze di lusso, aggiunge una nota terrosa e leggermente affumicata che dona carattere. Infine, il muschio avvolge il tutto con una sensazione di pulito sensuale, garantendo una scia (sillage) memorabile e duratura."},{titolo:"Perch\xE9 sceglierlo",testo:`Se cerchi un profumo che sappia "parlare" di te senza bisogno di parole, Speak \xE8 la scelta definitiva. \xC8 una fragranza unisex intensa, perfetta per chi ama il fascino dell'Oriente reinterpretato con il gusto della profumeria europea. Su Zavyla.com selezioniamo solo essenze che garantiscono una qualit\xE0 superiore e una durata estrema.`},{titolo:"Il consiglio di Zavyla",testo:"Per esaltare le note cipriate dell'Iris e la profondit\xE0 dell'Oud, vaporizza Speak sui polsi e dietro la nuca. Evita di strofinare i polsi tra loro: cos\xEC facendo, permetterai alle molecole di zafferano di evaporare nel modo corretto, mantenendo intatta la magia della fragranza. Speak"}]},silky:{nome:"Silky",titolo:"Silky: Il Profumo di Nicchia che Unisce il Tropico al Sacro",intro:"Nella ricerca della fragranza perfetta, spesso ci si trova divisi tra il desiderio di freschezza e la necessit\xE0 di profondit\xE0. Silky, risolve questo paradosso. \xC8 una fragranza di nicchia che, come suggerisce il nome, accarezza la pelle con la delicatezza della seta, pur nascondendo un cuore mistico e una persistenza straordinaria.",sezioni:[{titolo:"Note di testa",testo:"Un\u2019Esplosione Solare ed Energizzante L'apertura di Silky \xE8 un invito al buon umore. Se cerchi un profumo estivo che non sia banale, queste note ti conquisteranno subito. Limonata e Cocco: Dimentica i soliti agrumati. Qui, la vivacit\xE0 della limonata si sposa con la cremosit\xE0 del cocco, creando un effetto energizzante e tropicale. \xC8 la sensazione di un cocktail ghiacciato sorseggiato al tramonto: fresco, solare e assolutamente irresistibile."},{titolo:"Note di cuore",testo:"L\u2019Anima Aria e Fuoco Il cuore di Silky \xE8 dove la profumeria artistica moderna mostra tutto il suo fascino, giocando con elementi quasi impalpabili. Note Acquatiche e Ozoniche: Queste molecole innovative ricreano l\u2019odore dell\u2019acqua pura e dell\u2019aria carica di elettricit\xE0 dopo un temporale. Donano alla fragranza una leggerezza incredibile. Incenso: Per contrastare la trasparenza delle note ozoniche, l'incenso aggiunge un tocco antico e sacrale. Questo contrasto rende il cuore di Silky unico: una sensazione di pulito che vibra di un mistero senza tempo."},{titolo:"Note di fondo",testo:'Una Persistenza Magnetica e Terrosa Il "dry down" di Silky \xE8 ci\xF2 che garantisce un sillage (la scia) indimenticabile e una durata che accompagna per tutta la giornata. Patchouli e Legno di Cedro: Il patchouli richiama lo spirito libero e vibrante degli anni \u201970, mentre il cedro dona una struttura legnosa e nobile. Ambra Grigia e Muschio: L\u2019Ambra Grigia, storicamente uno degli ingredienti pi\xF9 preziosi della profumeria, si unisce al muschio per fissare la fragranza sulla pelle. Il risultato \xE8 un fondo caldo, leggermente salino e profondamente sensuale che richiama le note terrose della natura incontaminata.'},{titolo:"Perch\xE9 sceglierlo",testo:"Silky non \xE8 solo un profumo; \xE8 un\u2019esperienza sensoriale che evolve. \xC8 la fragranza unisex definitiva per chi ama distinguersi: fresca all'inizio, profonda nel finale, sempre elegante. Che tu sia in ufficio o a una cena elegante, la sua scia sapr\xE0 raccontare la tua personalit\xE0 senza mai risultare eccessiva."},{titolo:"Il consiglio di Zavyla",testo:"Essendo un profumo ricco di note ozoniche e muschiate, Silky ama l'umidit\xE0. Applica una lozione corpo neutra prima di vaporizzarlo: le molecole di Ambra Grigia e Patchouli si legheranno alla base idratante, raddoppiando la persistenza della fragranza. Silky"}]},enjoy:{nome:"Enjoy",titolo:"Enjoy: L\u2019Arte dei Contrasti in una Fragranza Indimenticabile",intro:"Nella ricerca del profumo perfetto, spesso cerchiamo qualcosa che sappia emozionare e stupire. Enjoy \xE8 la risposta per chi non vuole scegliere tra freschezza e intensit\xE0. Questa fragranza di nicchia \xE8 un inno alla gioia di vivere, un equilibrio magistrale di note che evolve sulla pelle trasformandosi in un accessorio invisibile di pura eleganza.",sezioni:[{titolo:"Note di testa",testo:"Un\u2019Apertura Vibrante e Speziata Il primo spruzzo di Enjoy \xE8 una sorpresa sensoriale che cattura immediatamente l'attenzione grazie a un mix sapientemente bilanciato. Lavanda, Cannella e Mela: La freschezza aromatica della lavanda incontra il calore avvolgente della cannella, creando un contrasto magnetico. Il tocco succoso e croccante della mela addolcisce l'esordio, regalando un\u2019energia immediata che non rinuncia al comfort. \xC8 l'apertura ideale per chi ama i profumi speziati e freschi."},{titolo:"Note di cuore",testo:"L\u2019Anima Elegante e Strutturata Dopo i primi minuti, Enjoy rivela il suo lato pi\xF9 sofisticato, dove la delicatezza floreale incontra il rigore dei legni nobili. Rosa e Legno di Cedro: La regina dei fiori, la rosa, dona una sfumatura raffinata e vellutata, evocando un senso di lusso discreto. Il Legno di Cedro interviene per dare struttura e profondit\xE0 alla composizione, garantendo quel carattere deciso che rende questa fragranza unisex adatta a ogni occasione."},{titolo:"Note di fondo",testo:"Un Sillage Avvolgente e Misterioso La vera magia di Enjoy si compie nel finale. La sua persistenza sulla pelle \xE8 garantita da una selezione di fissativi naturali e materie prime tra le pi\xF9 pregiate al mondo. Oud (Legno di Agar), Sandalo e Ambra: L\u2019Oud aggiunge un tocco misterioso e prezioso, tipico delle fragranze orientali d'alta classe. Il sandalo e l'ambra creano un fondo caldo e cremoso, quasi liquoroso. Muschio e Vaniglia: Il muschio accarezza la pelle con sensualit\xE0, mentre una punta di vaniglia rende la scia (sillage) assolutamente irresistibile e seducente."},{titolo:"Perch\xE9 sceglierlo",testo:"Enjoy non \xE8 un profumo statico; \xE8 una storia che cambia ogni ora. \xC8 la scelta perfetta per chi cerca un profumo persistente che sappia essere audace all'inizio e rassicurante nel finale. Se ami le composizioni che giocano sui contrasti - luce e ombra, dolce e speziato - questa creazione diventer\xE0 la tua nuova firma olfattiva."},{titolo:"Il consiglio di Zavyla",testo:"Per esaltare le note di Oud e Sandalo, vaporizza Enjoy subito dopo la doccia sulla pelle ancora calda. Le molecole di ambra e vaniglia si legheranno ai tuoi oli naturali, creando un\u2019aura profumata che ti accompagner\xE0 per tutto il giorno e la notte. Enjoy"}]},"irish-whiskey":{nome:"Irish Whiskey",titolo:"Irish Whiskey: L\u2019Essenza Inebriante del Lusso e del Mistero",intro:`Se cerchi una fragranza che sappia di audacia, calore e distinzione, Irish Whiskey \xE8 il capolavoro della collezione Zavyla.com che fa per te. Non lasciarti ingannare dal nome: non \xE8 solo un profumo, \xE8 un\u2019evocazione sensoriale che unisce l'ebbrezza di un distillato pregiato alla profondit\xE0 dei legni pi\xF9 rari.
Questa fragranza unisex \xE8 perfetta per chi desidera un profumo persistente e carismatico, capace di raccontare una storia di eleganza senza tempo.`,sezioni:[{titolo:"Note di testa",testo:"Un\u2019Energia Agrumata ed Esotica L'apertura di Irish Whiskey \xE8 una vera esplosione di luce, progettata per catturare l'attenzione fin dal primo spruzzo. Bergamotto, Lime e Frutti Tropicali: Il mix agrumato di Bergamotto e Lime dona una freschezza frizzante e immediata. La vera magia, per\xF2, risiede nelle note di frutti tropicali: una sfumatura succosa ed esotica che smorza l'acidit\xE0 degli agrumi, creando un impatto solare e vibrante che prepara la pelle all'evoluzione del cuore."},{titolo:"Note di cuore",testo:`L\u2019Anima Inebriante e Sofisticata Entriamo nel cuore pulsante del profumo, dove la struttura si fa densa, "boozy" e incredibilmente magnetica. Note Liquorose e Fiori Bianchi: Le note liquorose infondono quel calore tipico di un distillato d'autore, regalando profondit\xE0 alla composizione. A bilanciare questa intensit\xE0 intervengono i fiori bianchi, che aggiungono un tocco di eleganza vellutata. Muschio e Ambra Grigia: Il muschio pulisce la fragranza rendendola morbida, mentre l'Ambra Grigia - ingrediente nobile della profumeria artistica - arricchisce il bouquet con il suo carattere sofisticato, leggermente salino e animale, garantendo un\u2019aderenza perfetta alla pelle.`},{titolo:"Note di fondo",testo:"Una Scia Legnosa e Primordiale Il dry down (il finale) di Irish Whiskey \xE8 ci\xF2 che lo rende un profumo indimenticabile, grazie a una selezione di materie prime leggendarie. Patchouli, Oud e Vetiver: Il Patchouli apporta una sfaccettatura terrosa e scura, tipica delle fragranze di lusso. L\u2019Oud, l'oro nero della profumeria, aggiunge una ricchezza resinosa, fumosa e misteriosa che ne amplifica il carattere. Infine, il Vetiver chiude la piramide con un tocco legnoso secco e pulito, prolungando il sillage (la scia) per ore e ore."},{titolo:"Perch\xE9 sceglierlo",testo:"A differenza delle fragranze, Irish Whiskey su Zavyla gioca con il contrasto tra la freschezza tropicale e il calore dell'Oud. \xC8 la scelta ideale per chi cerca un profumo autunnale o invernale dalla persistenza estrema, capace di lasciare il segno in ogni ambiente."},{titolo:"Il consiglio di Zavyla",testo:'Le note liquorose e legnose come quelle di Irish Whiskey danno il meglio di s\xE9 se vaporizzate sui "pulse points" (collo e polsi) ma anche sulla fodera interna della giacca o del cappotto. Il calore trattenuto dal tessuto permetter\xE0 all\u2019Oud e al Patchouli di sprigionarsi lentamente, garantendo una scia magnetica per tutta la serata. Irish Whiskey'}]},promise:{nome:"Promise",titolo:"Promise: L\u2019Essenza della Determinazione tra Luce e Mistero",intro:"Esiste una fragranza che non accetta compromessi: Promise. Questo profumo \xE8 un viaggio sensoriale che fonde la freschezza degli agrumi italiani con la profondit\xE0 magnetica delle resine e del tabacco. Una fragranza unisex intensa, pensata per chi desidera una firma olfattiva che sia, appunto, una promessa di stile e carattere.",sezioni:[{titolo:"Note di testa",testo:`Un\u2019Esplosione di Luce e Benessere L'apertura di Promise \xE8 studiata per colpire i sensi con una luminosit\xE0 immediata e aristocratica. Limone, Bergamotto e Lavanda: Il Bergamotto \xE8 stato selezionato per il suo alto contenuto di limonene, che agisce come un vero e proprio "booster" di brillantezza. La Lavanda, celebre per le sue propriet\xE0 rilassanti e aromatiche, funge da ponte olfattivo, collegando con eleganza la freschezza agrumata iniziale alle note pi\xF9 calde del cuore.`},{titolo:"Note di cuore",testo:'L\u2019Anima Sofisticata e "Gourmand" Il cuore di Promise rivela una struttura complessa, dove la scienza molecolare incontra la natura pi\xF9 preziosa. Cashmeran e Gelsomino Sambac: Il Cashmeran \xE8 una nota preziosa che simula la sensazione tattile del velluto, unendo sfumature legnose, muschiate e ambrate. A differenza del comune gelsomino, il Gelsomino Sambac regala sfaccettature molto pi\xF9 solari e opulente. Miele e Cannella: Questi due ingredienti creano un accordo gourmand tecnico. La loro densit\xE0 liquorosa bilancia la volatilit\xE0 dei fiori, donando al profumo una struttura solida e una dolcezza mai stucchevole.'},{titolo:"Note di fondo",testo:"I Fissativi Naturali per una Persistenza Estrema Il vero segreto di un profumo persistente risiede nelle sue note di coda, capaci di ancorarsi alla pelle per ore. Foglie di Tabacco: Apportano molecole fenoliche che evocano il cuoio, donando una profondit\xE0 maschile e terrosa che contrasta la dolcezza del cuore. Fava Tonka: Ricca di cumarina, \xE8 il pilastro della famiglia olfattiva Foug\xE8re. La sua funzione principale \xE8 quella di fissare la fragranza, garantendo una durata eccezionale. Vaniglia: Oltre al suo aroma inconfondibile, la vaniglia \xE8 uno dei migliori fissativi naturali esistenti. La sua struttura molecolare rallenta l\u2019evaporazione delle note pi\xF9 leggere, mantenendo il profumo vivo e vibrante per tutta la giornata. Se cerchi una fragranza che unisca un sillage magnetico a una complessit\xE0 aromatica d'altri tempi, Promise \xE8 la risposta. \xC8 il profumo di chi ha smesso di seguire le mode per iniziare a dettarle."},{titolo:"Il consiglio di Zavyla",testo:`Per esaltare le note di Tabacco e Fava Tonka, vaporizza Promise sui "punti di calore" come il collo e l'incavo delle braccia. La temperatura corporea permetter\xE0 alla Vaniglia di agire come scudo, rilasciando lentamente le note agrumate e floreali durante il giorno. Promise`}]},listen:{nome:"Listen",titolo:"Listen: Il Profumo Vellutato che Incanta i Sensi",intro:"Esistono fragranze che non si limitano a profumare, ma sussurrano una storia. Listen, \xE8 un invito a fermarsi e ascoltare l'emozione di una composizione olfattiva magistrale. Questa fragranza di nicchia combina sapientemente freschezza fruttata, nobilt\xE0 floreale e un tocco goloso.",sezioni:[{titolo:"Note di testa",testo:`Un\u2019Energia Vellutata L'apertura di Listen \xE8 un equilibrio perfetto tra vivacit\xE0 agrumata e morbidezza tattile. Mandarino e Pesca: La nota di Pesca \xE8 un grande classico della profumeria artistica. Poich\xE9 l'essenza non si pu\xF2 estrarre direttamente dal frutto, viene ricreata attraverso una molecola iconica: l'Aldeide C14. Questo ingrediente "magico" regala sulla pelle un incredibile effetto vellutato, simile alla buccia di una pesca matura, rendendo il primo spruzzo fresco e sofisticato.`},{titolo:"Note di cuore",testo:"L\u2019Anima Preziosa Il cuore di Listen batte al ritmo delle materie prime pi\xF9 nobili della profumeria mondiale. Fiori d\u2019Arancio, Vaniglia e Rosa: Il vero protagonista qui \xE8 l\u2019olio essenziale di Rosa. Sapevi che per produrre un solo kg di questa essenza preziosissima occorrono circa 4 tonnellate di petali, raccolti rigorosamente a mano alle prime luci dell\u2019alba? Insieme alla cremosit\xE0 della vaniglia e alla luminosit\xE0 dei fiori d'arancio, la rosa dona a Listen un'eleganza senza tempo."},{titolo:"Note di fondo",testo:"Una Scia Irresistibile La chiusura del profumo \xE8 ci\xF2 che determina la sua persistenza e il ricordo che lascerai al tuo passaggio. Praline, Legno di Sandalo e Muschio: Entriamo nel mondo delle note gourmand con l'accordo Praline, che rende la fragranza dolce e assolutamente irresistibile. Il Legno di Sandalo, nobile e profondo, funge da fissativo naturale: \xE8 l'ingrediente segreto che garantisce una scia (sillage) intensa e duratura, mantenendo il profumo vivo sulla pelle per ore."},{titolo:"Perch\xE9 sceglierlo",testo:"Se sei alla ricerca di un profumo persistente che unisca la dolcezza delle note zuccherine alla classe dei fiori bianchi, Listen \xE8 la tua firma olfattiva ideale. Una fragranza pensata per chi vuole distinguersi con delicatezza e carattere. Il segreto per un profumo che dura tutto il giorno Applica Listen non solo sui polsi, ma anche sui capelli. Le note di sandalo e muschio si scalderanno con il movimento del corpo, sprigionando la loro magia in modo costante e discreto. Listen"}]},amund:{nome:"Amund",titolo:"Amund: L\u2019Essenza Gourmand che Celebra il Coraggio",intro:"Esiste un momento preciso in cui la paura svanisce e lasciamo spazio alla nostra vera essenza. Amund \xE8 il racconto olfattivo di questo istante. Una fragranza di nicchia audace, che gioca con i contrasti per regalare un\u2019esperienza sensoriale magnetica e fuori dagli schemi.",sezioni:[{titolo:"Note di testa",testo:`Un\u2019Apertura Fresca e Aristocratica L'impatto iniziale di Amund \xE8 un perfetto equilibrio tra dolcezza e carattere, ideale per chi cerca una fragranza unisex che non passi inosservata. Olio di Mandorla, Cardamomo e Foglie di Tabacco: Il cuore della testa \xE8 il pregiato olio di mandorla, la cui densit\xE0 viene magistralmente "spezzata" dal cardamomo. Questa spezia fredda evita l'effetto sintetico, regalando un\u2019apertura aristocratica che oscilla tra il dolce-amaro e il vegetale. Le foglie di tabacco aggiungono una prima sfumatura scura e sofisticata.`},{titolo:"Note di cuore",testo:"L\u2019Anima Gourmand e Avvolgente Il cuore di Amund evolve in una texture densa e calda, che richiama l\u2019atmosfera di una pasticceria di lusso parigina, senza mai diventare eccessiva. Mallo di Mandorla, Vaniglia, Fava Tonka e Cioccolato: Qui la fragranza rivela il suo lato gourmand. Il segreto? Il mallo di mandorla. Questa nota terrosa bilancia la dolcezza del cioccolato e della vaniglia, impedendo al bouquet di risultare stucchevole. Il risultato \xE8 una cremosit\xE0 avvolgente, profonda e incredibilmente sofisticata."},{titolo:"Note di fondo",testo:"Scia Magnetica e Persistenza Estrema Il vero carattere di un profumo persistente si vede nel dry down, ovvero la scia che rimane sulla pelle dopo ore. Legni Aromatici e Tabacco Secco: Nella coda di Amund avviene la vera trasformazione. La dolcezza del cuore sfuma lentamente, lasciando spazio a note di tabacco secco e legni nobili. Questo finale asciutto e fumoso garantisce una scia intensa e una persistenza che abbraccia la pelle per l'intera giornata, rendendolo perfetto sia come profumo maschile che femminile."},{titolo:"Perch\xE9 sceglierlo",testo:"Se sei un amante dei profumi caldi e legnosi ma non vuoi rinunciare a un tocco di dolcezza magnetica, Amund \xE8 la scelta definitiva. Non \xE8 solo un profumo, \xE8 un manifesto: il momento in cui smetti di avere paura e scegli davvero te stesso."},{titolo:"Il consiglio di Zavyla",testo:"Le fragranze con note di fava tonka e tabacco rendono al meglio se vaporizzate sui tessuti naturali (come lana o seta) oltre che sulla pelle. Questo permetter\xE0 alla scia di Amund di proiettarsi con ancora pi\xF9 eleganza in ogni ambiente. Amund"}]},sylind:{nome:"Sylind",titolo:"Sylind: Il Viaggio Olfattivo tra Natura e Leggenda",intro:`Benvenuti nel mondo di Sylind, una delle creazioni pi\xF9 affascinanti della nostra collezione su Zavyla. Questa fragranza non \xE8 solo un profumo, ma un\u2019esperienza sensoriale che evolve sulla pelle, raccontando una storia di nobilt\xE0, botanica e maestria artigianale.
Scopriamo insieme la sua piramide olfattiva e i segreti delle sue materie prime pregiate.`,sezioni:[{titolo:"Note di testa",testo:`L\u2019Energia Vibrante L'apertura di Sylind \xE8 una sferzata di freschezza naturale, pensata per chi ama le fragranze verdi e agrumate. Fiori d\u2019Arancio (Neroli): Sapevi che l'essenza di Neroli deve il suo nome alla principessa di Nerola? Questa nota iconica della profumeria artistica ha il potere di rilassare la mente al primo soffio, regalando un\u2019aura di eleganza senza tempo. Foglie di Tiglio: A differenza del fiore, la foglia sprigiona l\u2019odore ancestrale della linfa. \xC8 l\u2019ingrediente segreto che rende l\u2019apertura di questo profumo incredibilmente "viva" e rigenerante.`},{titolo:"Note di cuore",testo:"L\u2019Anima Floreale Il cuore di Sylind \xE8 un bouquet floreale complesso e sofisticato, dove la chimica incontra la poesia. Mughetto: Definito un \u201Cfiore muto\u201D perch\xE9 non \xE8 possibile estrarne l'essenza direttamente in natura. Il suo profumo cristallino \xE8 un capolavoro di ricostruzione molecolare che dona purezza e luce alla composizione. Gelsomino: Il \u201CRe della profumeria\u201D. Immancabile nei profumi di nicchia, il gelsomino conferisce struttura, intensit\xE0 e una sensualit\xE0 magnetica che rende la scia indimenticabile. Fiori di Tiglio: Il vero cuore pulsante della fragranza. Con le sue note mielate e lievemente polverose, evoca la magia di una passeggiata nei viali alberati a giugno."},{titolo:"Note di fondo",testo:`Una Persistenza Avvolgente Il fondo del profumo \xE8 ci\xF2 che garantisce la durata e la persistenza sulla pelle, lasciando un ricordo indelebile. Muschio Verde: Molto diverso dal classico muschio bianco "effetto pulito", il muschio verde richiama l'odore del sottobosco e della terra umida. Agisce come un fissativo naturale, ancorando le note floreali alla tua pelle e creando un contrasto profondo e terroso.`},{titolo:"Perch\xE9 sceglierlo",testo:"Se cerchi un profumo persistente che sappia distinguersi dalla massa, Sylind \xE8 la scelta ideale. Perfetto per chi desidera una fragranza che sappia di natura incontaminata e di lusso discreto."},{titolo:"Il consiglio di Zavyla",testo:'Per massimizzare la scia del tuo profumo, applica Sylind sui "punti di pulsazione": polsi, dietro le orecchie e alla base del collo. La sua evoluzione olfattiva ti accompagner\xE0 per tutta la giornata. Sylind'}]}};var Tn={storia:{occhiello:"MANIFESTO",titolo:"Arte attraverso le fragranze",apertura:"Un nuovo modo di vivere, espresso attraverso l\u2019arte del profumo. La nostra storia si dispiega attraverso luoghi, emozioni e passione. L\u2019essenza dello stile Zavyla \xE8 un intreccio vivo di colori, libert\xE0, espressione artistica e percorso creativo. L\u2019arte \xE8 il filo che unisce i nostri mondi personali e li trasforma in una lingua universale.",capitoli:[{chiave:"storia",soprattitolo:"Storia e valori",titolo:"L\u2019arte della profumeria italiana",foto:"story_2",alt:"Victoria e Giancarlo, i fondatori di Zavyla, a cavallo",testo:["Nel 2011 Victoria, irlandese, e Giancarlo, sardo, si incontrano per la prima volta a Roma.","La passione che condividono per l\u2019arte e per le fragranze accende un viaggio che li trasforma: l\u2019amore, e una rinascita psichedelica che cambia le loro vite.","Le collezioni Zavyla sono autentica eccellenza made in Italy: artigianato e creazioni olfattive uniche, che danno forma a un mondo di profumo nuovo.","Arte psichedelica, libert\xE0, anticonformismo, multiculturalit\xE0, sogni e fantasie: da qui nascono le prime due collezioni."]},{chiave:"nome",soprattitolo:"Il nome",titolo:"Una storia di sogni",foto:"name_2",alt:"Opera d\u2019arte incorniciata, ispirazione del nome Zavyla",testo:["Giancarlo e Victoria amano profondamente le loro due figlie, i cui nomi evocano mondi lontani e sogni incantati. Nel loro cuore, per\xF2, c\u2019\xE8 sempre stato un posto speciale per un altro nome: Zavyla.","Era un sussurro di possibilit\xE0, un sogno che li accompagnava nelle notti stellate e nelle passeggiate al tramonto. Zavyla era pi\xF9 di un nome: era un\u2019essenza, un\u2019idea di bellezza e libert\xE0 che non si poteva contenere.","Cos\xEC Zavyla \xE8 diventato il nome del loro marchio: un omaggio a quella terza figlia immaginata e a tutte le possibilit\xE0 che la vita offre. Un simbolo di creativit\xE0 e di trasformazione, il modo in cui Giancarlo e Victoria hanno portato un sogno nel mondo."]},{chiave:"visione",soprattitolo:"La visione",titolo:"L\u2019essenza di ci\xF2 che sei",foto:"vision_2",alt:"Flacone Zavyla illuminato dal sole",testo:["Curiosit\xE0, gioco e ricerca minuziosa di materiali fuori dal comune: da qui nascono sinfonie olfattive che portano in un luogo oltre il tempo e lo spazio, dove quello che sei davvero pu\xF2 fiorire.","Ogni fragranza \xE8 un pezzo unico, la prova di un\u2019individualit\xE0. Osiamo uscire dalle convenzioni, cercando sempre oltre il confine dell\u2019ordinario."]},{chiave:"collezioni",soprattitolo:"Le collezioni",titolo:"Una sinfonia di sensi",foto:"our_collection2",alt:"Il laboratorio del profumiere, con gli oli essenziali",testo:["Le collezioni Zavyla nascono dalla sintonia creativa fra i fondatori e la maestra profumiera Rosa Vaia.","Ogni creazione \xE8 una prova di fantasia, libert\xE0 e espressione artistica. Sono elementi intrecciati nel tessuto stesso delle fragranze, pensate per risvegliare i desideri pi\xF9 profondi. \xC8 la cura del dettaglio a distinguerci: ogni flacone, e il suo tappo, diventano un\u2019opera."]},{chiave:"tappi",soprattitolo:"I tappi",titolo:"Ogni tappo \xE8 un pezzo unico",foto:"tappi-lastre",alt:"I tappi in resina lavorati a mano, uno diverso dall\u2019altro",testo:["Ogni fragranza Zavyla comincia dal tatto: il tappo. Lavorati con maestria artigianale, sono vere sculture in resina pregiata, ognuna con un effetto marmorizzato irripetibile. Ogni sfumatura, ogni venatura, \xE8 il frammento di un universo astratto.","Non esistono due tappi Zavyla uguali. La tecnica artigianale crea texture marmorizzate uniche, e fa di ogni pezzo un\u2019opera a s\xE9. Come gemme, trasformano il flacone in un oggetto da collezione: la loro esclusivit\xE0 sta nel fatto di essere insostituibili."]},{chiave:"italia",soprattitolo:"Made in Italy",titolo:"Il cuore delle nostre fragranze",foto:"zavyla2025-8",alt:"La mappa d\u2019Italia con le tappe della lavorazione Zavyla",testo:["Un viaggio attraverso l\u2019Italia, dalle materie prime alla creazione finale, per un profumo che racconta una storia."]}]},filosofia:{titolo:"L\u2019arte come lingua comune",testo:"La nostra storia e le nostre fragranze parlano di luoghi, di sentimenti, di passione. Colori, libert\xE0, arte: \xE8 questa la sintesi del modo di vivere Zavyla, e il percorso creativo che lo attraversa. L\u2019arte \xE8 il filo che unisce i nostri mondi personali e diventa una lingua che tutti possono capire."},instagram:{titolo:"Dove continuiamo a raccontarci",testo:"Scatti dal laboratorio, dalle fiere e dalle giornate in cui un profumo prende forma.",profilo:"zavylaperfumes",link:"https://instagram.com/zavylaperfumes"},matrimonio:{titolo:"Un profumo per quel giorno",sottotitolo:"Una scatola per due, i sacchetti per gli invitati, un\u2019essenza su misura.",testo:"La scatola per due si personalizza con i due profumi che scegli e con il messaggio che vuoi lasciare. Nasce come regalo per gli sposi, ma \xE8 anche un modo di far entrare una fragranza nella giornata: nel momento della promessa, sulla pelle di chi la pronuncia, nel ricordo che resta dopo.",servizi:[["La scatola per due","Due profumi a tua scelta e un messaggio personalizzato."],["I sacchetti per gli invitati","Una piccola fragranza da portare a casa dopo la festa."],["Il profumo su misura","Un\u2019essenza creata su richiesta, soltanto per voi."]],invito:"Raccontaci che cosa hai in mente: ti rispondiamo con una proposta per la tua giornata."},business:{titolo:"Zavyla nella tua boutique",testo:"Immagini Zavyla sui tuoi scaffali? Le nostre fragranze nascono in Italia, dalla profumeria artigianale, e si raccontano meglio di persona: il flacone, la pietra sul tappo, la scia che resta. Se hai una profumeria o una boutique e vuoi parlarne, il primo passo \xE8 scriverci.",invito:"Lasciaci due righe sulla tua attivit\xE0 e ti ricontattiamo noi."},affinita:{titolo:"Trova la tua fragranza",testo:"Quattro domande, nessuna risposta sbagliata. Servono a capire da che parte ti muovi: che cosa ti attira al primo istante, dove ti porta un profumo, che cosa vuoi lasciare dietro di te.",risultato:"Per come hai risposto, la fragranza pi\xF9 vicina a te \xE8",indietro:"Domanda precedente",avanzamento:"Domanda {n} di {tot}",vicine:"Altre due molto vicine",ricomincia:"Ricomincia da capo",domande:[["Che cosa ti cattura per primo?",[["La scorza di un agrume appena aperta",["agrumato","acquatico","verde"]],["Un fiore, nel momento in cui si apre",["floreale"]],["Un frutto maturo",["fruttato"]],["Una spezia pestata",["speziato"]]]],["Dove vorresti essere?",[["All\u2019aria aperta, dopo la pioggia",["verde","acquatico"]],["In una stanza di legno, al caldo",["legnoso"]],["In cucina, mentre qualcosa cuoce",["gourmand"]],["Fuori la sera, quando la luce cala",["ambrato"]]]],["Che scia vuoi lasciare?",[["Discreta, che si avverte da vicino",["muschiato"]],["Calda e avvolgente",["ambrato"]],["Profonda, che resta nei tessuti",["legnoso"]],["Dolce, riconoscibile",["gourmand","fruttato"]]]],["Come vuoi sentirti addosso?",[["Morbido",["morbido","muschiato","acquatico"]],["Acceso",["speziato"]],["In fiore",["floreale"]],["Solido",["legnoso"]]]]]}};var ms=(i,e,t="")=>`<img class="${t}" src="assets/zavyla/${i}.webp?v=R116" alt="${e}" loading="lazy" decoding="async">`;var Zu="--palco:#490f48;--fragranza:#3d1f3c;"+da("forgive"),Wu=(i,e)=>`<div class="filatura">
  <span class="brand-place">${i}</span><span class="brand-year">${e}</span>
 </div>`,El=i=>{let e=Nt.find(t=>t.slug===i);return e?` style="--fragranza:${e.color};--palco:${e.stage||e.color};${da(i,!0)}"`:""},w_=i=>Nt.find(e=>e.slug===i)?.notes?.[0]||"";function Uf(){return`<section class="page-intro">
  <span class="eyebrow">LE SCHEDE OLFATTIVE</span>
  <h1>Che cosa senti,<br><em>nota per nota.</em></h1>
  <p>La piramide di ogni fragranza raccontata dalla maison: come si apre, come batte il cuore, che cosa resta sulla pelle.</p>
 </section>
 <section class="section"><div class="note-indice">${Object.entries(Gu).map(([e,t])=>`
   <a class="note-voce reveal" href="#/note/${e}"${El(e)}>
    <img src="assets/stones/${e}.webp?v=R147" alt="" width="200" height="200" loading="lazy">
    <div><h2>${t.nome}</h2><p>${w_(e)||t.sezioni.filter(n=>n.titolo.startsWith("Note")).map(n=>n.titolo.replace("Note di ","")).join(" \xB7 ")}</p></div>
    <span aria-hidden="true">\u2197</span>
   </a>`).join("")}</div></section>`}function Ff(i){let e=Gu[i];if(!e)return'<section class="section"><h1>Scheda non trovata.</h1><a class="text-link" href="#/note">Torna alle schede \u2197</a></section>';let t=Nt.find(s=>s.slug===i),n=e.sezioni.filter(s=>s.titolo.startsWith("Note")),r=e.sezioni.filter(s=>!s.titolo.startsWith("Note"));return`<section class="nota-testa">
  <a class="breadcrumb" href="#/note">\u2190 Le schede olfattive</a>
  <span class="eyebrow">${t?t.family:""}</span>
  <h1>${e.nome}</h1>
  <p class="nota-occhiello">${e.titolo}</p>
  <p class="nota-intro">${e.intro}</p>
 </section>
 <section class="section"><div class="piramide">${n.map((s,a)=>`
   <article class="reveal"><span class="piramide-grado">0${a+1}</span><div><h2>${s.titolo}</h2><p>${s.testo}</p></div></article>`).join("")}</div></section>
 ${r.length?`<section class="section nota-coda">${r.map(s=>`
   <div class="reveal"><h3>${s.titolo}</h3><p>${s.testo}</p></div>`).join("")}</section>`:""}
 ${t?`<section class="nota-chiusura"><div><span class="eyebrow">LA FRAGRANZA</span><h2>${t.name}</h2><p>${t.tagline}</p></div>
   <a class="btn" href="#/profumo/${t.slug}">Vai alla pagina prodotto <span>\u2197</span></a></section>`:""}`}var A_=[{titolo:"WWD",testo:"Zavyla Takes the Stage: Italy on Madison 2026 We are delighted to announce that Zavyla will be featured in the fourth edition of Italy on Madison! From May 12th to 15th, the headquarters of the Italian Trade Agency, located at 33 E. 67th St., New York, will be transformed into a true \u201CTheater of Excellence\u201D - an immersive experience celebrating the finest of Made in Italy. Zavyla is proud to be among more than 200 selected companies representing the very best of Italian fashion, design, and lifestyle, in collaboration with Gilda Bojardi and Paola Navone. A multisensory journey through fashion, beauty, wellness, and design in the heart of New York City."},{titolo:"Vanity Fair",testo:"Love is in the air, ma anche nelle fragranze liberamente ispirate all'amore."},{titolo:"Zavyla, fragranze artigianali di alta qualit\xE0",testo:"Fragranze di nicchia Zavyla che raccontano arte, passione e amore"},{titolo:"From Glamour to Vogue",testo:"Our perfumes conquer the pages of the most prestigious fashion and lifestyle magazines, celebrating luxury, style and uniqueness."},{titolo:"Scopri l\u2019eleganza olfattiva di Zavyla Perfumes",testo:"Un viaggio sensoriale ed emotivo"},{titolo:"Diva e Donna",testo:"Featured in the prestigious pages of the famous Italian magazine."},{titolo:"Zavyla: arte, passione e amore",testo:"Fragranze uniche ed esclusive che nascono da un\u2019attenta ricerca di ingredienti naturali pregiati, selezionati con cura da esperti essenzieri che li lavorano, in Italia, ricorrendo alle pi\xF9 classiche tecniche di produzione artigianale"},{titolo:"La nuova linea di profumi dedicata all'amore",testo:"Nuova linea di profumi le cui parole chiare sono originalit\xE0, arte, passione ma soprattutto amore"}],qu={WWD:"stampa-madison","Vanity Fair":"stampa-vanityfair","From Glamour to Vogue":"stampa-vogue","Diva e Donna":"stampa-divaedonna","Zavyla, fragranze artigianali di alta qualit\xE0":"stampa-beautytudine","Scopri l\u2019eleganza olfattiva di Zavyla Perfumes":"stampa-montenapoleone","Zavyla: arte, passione e amore":"stampa-vanitymilan"};function Of(){let[i,...e]=A_,t=i.testo.indexOf("2026 "),n=t>0?i.testo.slice(0,t+4):i.titolo,r=t>0?i.testo.slice(t+5):i.testo;return`<section class="page-intro">
  <span class="eyebrow">HANNO SCRITTO DI NOI</span>
  <h1>Zavyla,<br><em>sulla carta.</em></h1>
 </section>
 <section class="banda-scura reveal" style="${Zu}">
  <div>
   <div class="filatura"><span class="brand-place">${i.titolo}</span><span class="brand-year">2026</span></div>
   <p class="citazione">${n}</p>
   <p>${r}</p>
  </div>
  <figure>${ms(qu[i.titolo]||"stampa-madison","Zavyla su "+i.titolo)}</figure>
 </section>
 <section class="section"><div class="stampa-griglia">${e.map(s=>`
   <article class="reveal">${qu[s.titolo]?`<figure>${ms(qu[s.titolo],"Zavyla su "+s.titolo)}</figure>`:""}<span class="stampa-testata">${s.titolo}</span><p>${s.testo}</p></article>`).join("")}</div></section>`}var R_="https://zavyla.com/pages/wedding";function Bf(){let i=Tn.matrimonio;return`<section class="page-intro">
  <span class="eyebrow">MATRIMONIO</span>
  <h1>${i.titolo}</h1>
  <p>${i.sottotitolo}</p>
 </section>
 <figure class="servizio-foto reveal">${ms("matrimonio-box","Il cofanetto matrimonio Zavyla, con due flaconi e il fiocco")}</figure>
 <section class="section servizio">
  <p class="servizio-testo reveal">${i.testo}</p>
  <ol class="servizio-elenco">${i.servizi.map(([e,t],n)=>`
   <li class="reveal"><span>0${n+1}</span><h2>${e}</h2><p>${t}</p></li>`).join("")}</ol>
 </section>
 ${kf(i.invito,R_)}`}function Hf(){let i=Tn.business;return`<section class="page-intro">
  <span class="eyebrow">PER I RIVENDITORI</span>
  <h1>${i.titolo}</h1>
 </section>
 <section class="section servizio">
  <p class="servizio-testo reveal">${i.testo}</p>
 </section>
 ${kf(i.invito,"https://zavyla.com/pages/b2b")}`}function kf(i,e){return`<section class="banda-scura distesa" style="${Zu}">
  <p class="citazione">${i}</p>
  <a class="btn" href="${e}" target="_blank" rel="noopener">Scrivi a Zavyla <span>\u2197</span></a>
 </section>`}var C_={agrumato:["limone","bergamotto","mandarino","arancia","limonata"],floreale:["rosa","gelsomino","fiori","iris","tuberosa","violetta","mughetto","ylang","floreale"],fruttato:["frutti","ananas","pesca","mela","prugna","lampone","cocco"],speziato:["pepe","cardamomo","cannella","zafferano","zenzero"],legnoso:["legn","cedro","sandalo","oud","vetiver","betulla","quercia"],ambrato:["ambra","benzoino","incenso"],gourmand:["vaniglia","tonka","pralin\xE9","miele","cioccolato","mandorla"],muschiato:["muschio","cashmeran","ambroxan"],acquatico:["acquatic","ozonic"],verde:["foglie","verde","tiglio","geranio"]};function I_(i){let e={};i.family.toLowerCase().split(" e ").map(n=>n.trim()).forEach((n,r)=>e[n]=(e[n]||0)+(r===0?1:.85));let t=(i.notes||[]).join(" \xB7 ").toLowerCase();for(let[n,r]of Object.entries(C_)){let s=r.reduce((a,o)=>a+(t.split(o).length-1),0);s&&(e[n]=(e[n]||0)+Math.min(.5,.18*s))}return e}var P_=(i,e)=>{let t=0,n=0,r=0;for(let s in i)n+=i[s]*i[s],e[s]&&(t+=i[s]*e[s]);for(let s in e)r+=e[s]*e[s];return n&&r?t/Math.sqrt(n*r):0};function L_(i){let e={};return i.forEach(t=>t.forEach((n,r)=>e[n]=(e[n]||0)+(r===0?1:.55))),Nt.map(t=>({p:t,punti:P_(e,I_(t))})).sort((t,n)=>n.punti-t.punti).map(t=>t.p)}function Vf(){let i=Tn.affinita,e=i.domande.length;return`<section class="page-intro">
  <span class="eyebrow">UN PERCORSO IN QUATTRO PASSI</span>
  <h1>${i.titolo}</h1>
  <p>${i.testo}</p>
 </section>
 <section class="section quiz-sezione"><form class="quiz" id="quiz" novalidate>
  <div class="quiz-palco marmo"${El(Nf[0])} data-passo="0">
   <div class="quiz-testa">
    <ol class="quiz-barre" aria-hidden="true">${i.domande.map((t,n)=>`<li${n?"":' class="fatto"'}></li>`).join("")}</ol>
    <p class="quiz-avanzamento" aria-live="polite">${i.avanzamento.replace("{n}",1).replace("{tot}",e)}</p>
    <button type="button" class="quiz-indietro" data-quiz-indietro hidden><span aria-hidden="true">\u2190</span> ${i.indietro}</button>
   </div>
   ${i.domande.map(([t,n],r)=>`
   <fieldset class="quiz-passo" data-tinta="${Nf[r]}"${r?" hidden":""} tabindex="-1">
    <legend><span>0${r+1}</span>${t}</legend>
    <div class="quiz-scelte">${n.map(([s,a])=>`
      <label><input type="radio" name="d${r}" value="${a.join(",")}"><span>${s}</span></label>`).join("")}</div>
   </fieldset>`).join("")}
   <p class="quiz-avviso" id="quiz-avviso" role="alert" hidden>Scegli una risposta per ogni domanda.</p>
   <div class="quiz-esito" id="quiz-esito" aria-live="polite" hidden></div>
  </div>
 </form></section>`}var Nf=["give","speak","irish-whiskey","silky"];function D_([i,...e]){let t=Tn.affinita;return`<div class="quiz-esito-flacone"><img src="assets/flaconi/${i.slug}.webp?v=R167" alt="${i.name}, flacone Zavyla" width="420" height="840"></div>
  <div class="quiz-esito-testo">
   <span class="brand-place">${t.risultato}</span>
   <h2 tabindex="-1">${i.name}</h2>
   <p class="quiz-esito-famiglia">${i.family}</p>
   <p class="quiz-esito-tagline">${i.tagline}</p>
   <dl class="quiz-esito-note">${(i.notes||[]).slice(0,3).map((n,r)=>`<div><dt>${["Il primo incontro","Il cuore","Il ricordo"][r]}</dt><dd>${n}</dd></div>`).join("")}</dl>
   <div class="quiz-esito-azioni"><a class="btn" href="#/profumo/${i.slug}">Vai alla pagina prodotto <span>\u2197</span></a><button type="button" class="text-link" data-quiz-ricomincia>${t.ricomincia}</button></div>
   <div class="quiz-vicine"><span class="brand-place">${t.vicine}</span>
    <ul>${e.slice(0,2).map(n=>`<li><a href="#/profumo/${n.slug}"><img src="assets/flaconi/${n.slug}.webp?v=R167" alt="" width="60" height="120" loading="lazy"><span><b>${n.name}</b><small>${n.family}</small></span></a></li>`).join("")}</ul>
   </div>
  </div>`}var Xu=!1;function Yu(i,e){let t=i.querySelector(".quiz-palco"),n=[...i.querySelectorAll(".quiz-passo")],r=Tn.affinita,s=i.querySelector("#quiz-esito");n.forEach((a,o)=>a.hidden=o!==e),s.hidden=!0,s.innerHTML="",t.dataset.passo=e,t.classList.remove("con-esito"),t.setAttribute("style",El(n[e].dataset.tinta).replace(/^ style="|"$/g,"")),i.querySelectorAll(".quiz-barre li").forEach((a,o)=>a.classList.toggle("fatto",o<=e)),i.querySelector(".quiz-avanzamento").textContent=r.avanzamento.replace("{n}",e+1).replace("{tot}",n.length),i.querySelector(".quiz-avanzamento").hidden=!1,i.querySelector("[data-quiz-indietro]").hidden=e===0,i.querySelector("#quiz-avviso").hidden=!0,n[e].classList.remove("entra"),n[e].offsetWidth,n[e].classList.add("entra"),t.getBoundingClientRect().top<0&&t.scrollIntoView({block:"start"})}function z_(i){let e=[...i.querySelectorAll(".quiz-passo")],t=e.map(o=>o.querySelector("input:checked")?.value.split(","));if(t.some(o=>!o)){i.querySelector("#quiz-avviso").hidden=!1;return}let n=L_(t),r=n[0],s=i.querySelector(".quiz-palco"),a=i.querySelector("#quiz-esito");e.forEach(o=>o.hidden=!0),s.setAttribute("style",El(r.slug).replace(/^ style="|"$/g,"")),s.classList.add("con-esito"),s.dataset.passo="esito",i.querySelectorAll(".quiz-barre li").forEach(o=>o.classList.add("fatto")),i.querySelector(".quiz-avanzamento").hidden=!0,i.querySelector("[data-quiz-indietro]").hidden=!1,a.innerHTML=D_(n),a.hidden=!1,a.querySelector("h2").focus({preventScroll:!0}),s.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"})}var Gf=i=>[...i.querySelectorAll(".quiz-passo")].findIndex(e=>!e.hidden);function $u(i){let e=[...i.querySelectorAll(".quiz-passo")],t=Gf(i);if(!(t<0)){if(!e[t].querySelector("input:checked")){i.querySelector("#quiz-avviso").hidden=!1;return}t<e.length-1?(Yu(i,t+1),e[t+1].focus({preventScroll:!0})):z_(i)}}function Wf(){document.addEventListener("pointerdown",i=>{i.target.closest("#quiz .quiz-scelte label")&&(Xu=!0)},!0),document.addEventListener("change",i=>{let e=i.target.closest("#quiz");if(!e||i.target.type!=="radio"||(e.querySelector("#quiz-avviso").hidden=!0,!Xu))return;Xu=!1;let t=i.target.closest(".quiz-passo");setTimeout(()=>{t.hidden||$u(e)},360)}),document.addEventListener("submit",i=>{i.target.id==="quiz"&&(i.preventDefault(),$u(i.target))}),document.addEventListener("keydown",i=>{if(i.key!=="Enter"||i.target.type!=="radio")return;let e=i.target.closest("#quiz");e&&(i.preventDefault(),$u(e))}),document.addEventListener("click",i=>{let e=i.target.closest("#quiz");if(e){if(i.target.closest("[data-quiz-indietro]")){let t=Gf(e),n=t<0?e.querySelectorAll(".quiz-passo").length-1:t-1;n>=0&&(Yu(e,n),e.querySelectorAll(".quiz-passo")[n].focus({preventScroll:!0}))}i.target.closest("[data-quiz-ricomincia]")&&(e.reset(),Yu(e,0),e.querySelector(".quiz-palco").scrollIntoView({block:"start"}),e.querySelector(".quiz-passo").focus({preventScroll:!0}))}})}var Ku=()=>`<section class="filosofia">
 <h2>${Tn.filosofia.titolo}</h2>
 <p>${Tn.filosofia.testo}</p>
</section>`,Ju=()=>`<section class="instagram">
 <div><span class="eyebrow">INSTAGRAM</span><h2>${Tn.instagram.titolo}</h2><p>${Tn.instagram.testo}</p></div>
 <a class="text-link" href="${Tn.instagram.link}" target="_blank" rel="noopener">@${Tn.instagram.profilo} \u2197</a>
</section>`;function qf(){let i=Tn.storia,e=i.capitoli,t=a=>a.testo.map(o=>`<p>${o}</p>`).join(""),n=(a,o,l)=>`<section class="storia-capitolo reveal${l?" invertito":""}" id="${a.chiave}">
  <figure>${ms(a.foto,a.alt)}</figure>
  <div>${Wu(a.soprattitolo,o)}<h2>${a.titolo}</h2>${t(a)}</div>
 </section>`,r=(a,o)=>`<section class="storia-capitolo ampio reveal" id="${a.chiave}">
  <figure>${ms(a.foto,a.alt)}</figure>
  <div class="ampio-testo">${Wu(a.soprattitolo,o)}<h2>${a.titolo}</h2><div>${t(a)}</div></div>
 </section>`,s=(a,o)=>`<section class="banda-scura reveal" id="${a.chiave}" style="${Zu}">
  <div>${Wu(a.soprattitolo,o)}<h2>${a.titolo}</h2>${t(a)}</div>
  <figure>${ms(a.foto,a.alt)}</figure>
 </section>`;return`<section class="storia-apertura">
  <span class="eyebrow">${i.occhiello}</span>
  <h1>${i.titolo}</h1>
  <p>${i.apertura}</p>
 </section>
 ${n(e[0],"01")}
 ${n(e[1],"02",!0)}
 ${r(e[2],"03")}
 ${n(e[3],"04")}
 ${s(e[4],"05")}
 ${n(e[5],"06",!0)}
 <section class="storia-chiusura">
  <p>Zavyla, arte attraverso le fragranze.</p>
  <a class="btn" href="#/catalogo">Esplora le fragranze <span>\u2197</span></a>
 </section>`}var N_=[["love","Love Collection"],["intimacy","Intimacy Collection"],["doppio","Doppio Respiro"]];function Xf(){return`<div class="menu-collezioni">${N_.map(([i,e])=>`
  <div>
   <a class="menu-titolo" href="#/catalogo/${i}">${e}</a>
   <ul>${Nt.filter(t=>t.collection===i).map(t=>`
     <li><a href="#/profumo/${t.slug}">${t.name}</a></li>`).join("")}</ul>
  </div>`).join("")}</div>
 <div class="menu-pagine">
  <a href="#/affinita">Trova la tua fragranza</a>
  <a href="#/maison">La nostra storia</a>
  <a href="#/note">Le schede olfattive</a>
  <a href="#/stampa">Hanno scritto di noi</a>
  <a href="#/matrimonio">Matrimonio</a>
  <a href="#/regali">Discovery e gift card</a>
  <a href="#/business">Per i rivenditori</a>
  <a href="${Tn.instagram.link}" target="_blank" rel="noopener">Instagram \u2197</a>
 </div>`}var Kt=i=>document.querySelector(i),vn=Kt("#main"),vs=i=>new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(i),gs={love:"Love Collection",intimacy:"Intimacy Collection",doppio:"Doppio Respiro"},Jf=i=>`assets/flaconi/${i.slug}.webp?v=R167`,eh=(i,e="",t=!1)=>`<img class="${e}" src="${Jf(i)}" alt="${i.name}, flacone Zavyla" loading="${t?"eager":"lazy"}" width="491" height="979">`,U_=i=>`<div class="catalog-live" data-ready="true"><img src="assets/vetrina/${i.slug}.webp?v=R167" alt="" loading="lazy" decoding="async" width="1120" height="1248"></div>`,Jt=[];try{Jt=JSON.parse(localStorage.getItem("zavyla-bag")||"[]"),Array.isArray(Jt)||(Jt=[])}catch{}Jt=Jt.filter(i=>i&&typeof i.id=="string"&&Number.isInteger(i.qty)&&i.qty>0);var xr="all",wl="featured",F_=0,$f,jf=i=>`--fragranza:${i.color};--palco:${i.stage||i.color};--aroma:url(assets/aromi/${i.slug}.webp)`,Qf=(i,e=!1)=>`<article class="product-card reveal"><div class="product-image" style="${jf(i)}"><span class="catalog-collection">${gs[i.collection]}</span>${e?`<div class="catalog-live" data-slug="${i.slug}" data-selected="false" data-atmosphere-weight="1"><span class="catalog-loading">Prepariamo ${i.name}\u2026</span></div>`:`<a href="#/profumo/${i.slug}" aria-label="Scopri ${i.name}">${U_(i)}</a>`}<button class="quick" data-add="${i.variant}" aria-label="Aggiungi ${i.name} alla bag">+</button></div><a class="product-info" href="#/profumo/${i.slug}"><div><span class="catalog-family">${i.family}</span><h3>${i.name}</h3><p class="catalog-tagline">${i.tagline}</p></div><span class="price">${vs(i.price)}</span></a><div class="catalog-card-foot"><span>${i.concentration} \xB7 100 ml</span><a href="#/profumo/${i.slug}">Esplora \u2197</a></div></article>`,O_=()=>`<div class="collection-grid">${[["love","forgive","Otto emozioni"],["intimacy","silky","Sulla pelle"],["doppio","sylind","Due anime"]].map(([i,e,t])=>`<a class="collection-card reveal" href="#/catalogo/${i}" style="${jf(Nt.find(n=>n.slug===e))}"><span class="eyebrow">${t}</span>${eh(Nt.find(n=>n.slug===e))}<div class="card-bottom"><h3>${gs[i]}</h3><span>\u2197</span></div></a>`).join("")}</div>`;function B_(i="all"){return xr=gs[i]?i:"all",`<section class="profumi-apertura"><div class="profumi-apertura-testo"><span class="eyebrow">IL MONDO OLFATTIVO DI ZAVYLA</span><h1>${gs[xr]||"Una fragranza.<br>Mille modi di essere."}</h1><p>Esplora le nostre creazioni. Lascia che siano le tue emozioni a guidarti.</p></div></section><section class="catalog-section"><div class="filters"><div class="tabs" aria-label="Filtra per collezione">${[["all","Tutti i profumi"],...Object.entries(gs)].map(([e,t])=>`<button data-filter="${e}" class="${xr===e?"active":""}" aria-pressed="${xr===e}">${t}</button>`).join("")}</div><label> <select id="sort" aria-label="Ordina profumi"><option value="featured">Ordine della collezione</option><option value="price">Prezzo crescente</option><option value="name">Nome A\u2013Z</option></select></label></div><div id="catalog-grid" class="product-grid"></div><p class="small" id="result-count"></p></section>`}var Al=()=>{};function th(){Al();let i=Nt.filter(e=>xr==="all"||e.collection===xr);wl==="price"&&i.sort((e,t)=>e.price-t.price),wl==="name"&&i.sort((e,t)=>e.name.localeCompare(t.name)),Kt("#catalog-grid").innerHTML=i.map(e=>Qf(e,!0)).join(""),Kt("#result-count").textContent=`${i.length} fragranze \xB7 100 ml`,ep(),Al=rh()}function H_(i){return`<section class="detail"><div class="detail-art" style="--tint:${i.color};--palco:${i.stage||i.color}">${eh(i,"",!0)}</div><div class="detail-copy"><a class="breadcrumb" href="#/catalogo/${i.collection}">\u2190 ${gs[i.collection]}</a><span class="eyebrow">${i.family}</span><h1>${i.name}</h1><p class="tagline">${i.tagline}</p><p>${i.description}</p><div class="detail-meta"><span>${i.concentration} \xB7 100 ml</span><span>${vs(i.price)}</span></div><div class="quantity"><button data-detail-qty="-1" aria-label="Diminuisci quantit\xE0">\u2212</button><output id="detail-qty">1</output><button data-detail-qty="1" aria-label="Aumenta quantit\xE0">+</button></div><button class="btn" data-add="${i.variant}">${i.preorder?"Preordina":"Aggiungi alla bag"} <span>\u2197</span></button><p class="small">${i.preorder?"Disponibile in preordine. Tempi da verificare sul sito ufficiale.":"Prezzo IVA inclusa. Disponibilit\xE0 e spedizione confermate sul sito ufficiale."}</p><details><summary>Il mondo olfattivo</summary><p>${i.notes.join("<br>")}</p></details><details><summary>Acquisto e assistenza</summary><p>Il checkout prosegue in sicurezza su Zavyla.com, dove potrai verificare disponibilit\xE0, consegna e condizioni di acquisto.</p><a class="text-link" href="${i.url}" target="_blank" rel="noopener">Scheda ufficiale \u2197</a></details></div></section><section class="section"><h2>La sua scia.</h2><div class="notes">${i.notes.map((e,t)=>`<div class="reveal"><span>0${t+1}</span><h3>${["Il primo incontro","Il cuore","Il ricordo"][t]}</h3><p>${e}</p></div>`).join("")}</div></section><section class="section"><div class="section-head"><h2>Altre affinit\xE0.</h2><a class="text-link" href="#/catalogo">Esplora tutte \u2197</a></div><div class="product-grid">${Nt.filter(e=>e.slug!==i.slug&&e.collection===i.collection).slice(0,4).map(e=>Qf(e)).join("")}</div></section>`}function k_(){return`<section class="page-intro"><span class="eyebrow">IL PIACERE DI SCOPRIRE, IL GESTO DI DONARE</span><h1>Un pensiero.<br><em>Infinite emozioni.</em></h1><p>Discovery set, cofanetti e gift card: un invito a entrare nel mondo Zavyla.</p></section><section class="section gift-grid">${iu.map((i,e)=>`<article class="gift-card">${i.image?`<div><img src="${i.image}" alt="${i.name}" loading="lazy"></div>`:""}<h2>${i.name}</h2><p>${["Un primo viaggio tra le fragranze Zavyla.","La Love Collection, da custodire e condividere.","Un ricordo speciale per un giorno da ricordare.","La libert\xE0 di scegliere la propria emozione."][e]||""}</p><label class="small" for="gift-${e}">Scegli un\u2019opzione</label><select id="gift-${e}">${i.variants.map(t=>`<option value="${t.id}">${t.name==="Default Title"?i.name:t.name} \xB7 ${vs(t.price)}</option>`).join("")}</select><button class="btn" data-gift="${e}">Aggiungi alla bag <span>\u2197</span></button></article>`).join("")}</section>`}var ju=()=>{},Tl;function ep(){Tl?.disconnect(),Tl=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),Tl.unobserve(e.target))}),{threshold:.06}),document.querySelectorAll(".reveal").forEach(i=>Tl.observe(i))}function tp(){Al(),Al=()=>{},ju(),ju=()=>{},Rf(),document.querySelectorAll("dialog[open]").forEach(n=>n.close());let[i,e]=(location.hash.startsWith("#/")?location.hash.slice(2):"").split("/");if(wl="featured",F_=0,!i)vn.innerHTML=V_();else if(i==="catalogo")vn.innerHTML=B_(e),th();else if(i==="profumo"){let n=Nt.find(r=>r.slug===e);vn.innerHTML=n?H_(n):'<section class="section"><h1>Fragranza non trovata.</h1><a href="#/catalogo">Torna ai profumi</a></section>'}else i==="collezioni"?vn.innerHTML=Vu(!0):i==="maison"?vn.innerHTML=qf():i==="regali"?vn.innerHTML=k_():i==="note"?vn.innerHTML=e?Ff(e):Uf():i==="stampa"?vn.innerHTML=Of():i==="matrimonio"?vn.innerHTML=Bf():i==="business"?vn.innerHTML=Hf():i==="affinita"?vn.innerHTML=Vf():vn.innerHTML='<section class="section"><h1>Una strada nuova.</h1><a href="#/">Torna alla home \u2197</a></section>';document.title=`${i==="profumo"?Nt.find(n=>n.slug===e)?.name||"Profumi":{catalogo:"Le fragranze",collezioni:"Le collezioni",maison:"La nostra storia",regali:"Discovery & regali",note:"Le schede olfattive",stampa:"Hanno scritto di noi",matrimonio:"Matrimonio",business:"Per i rivenditori",affinita:"Trova la tua fragranza"}[i]||"L\u2019invisibile prende forma"} \u2014 Zavyla`,window.scrollTo({top:0,behavior:"instant"});let t=i?"":ip();document.body.dataset.home=t,document.body.classList.toggle("immersive-home",!i&&t!=="pietre"),ep(),i?i==="profumo"&&Nt.some(n=>n.slug===e)?Pf(e):If():(Cf(),ju=Af(Nt))}function fa(i){let e=Nt.find(t=>t.variant===i);if(e)return{id:i,name:e.name,price:e.price,image:Jf(e),url:`#/profumo/${e.slug}`};for(let t of iu){let n=t.variants.find(r=>String(r.id)===i);if(n)return{id:i,name:t.name+(n.name==="Default Title"?"":` \xB7 ${n.name}`),price:Number(n.price),image:t.image,url:"#/regali"}}}function nh(){Jt=Jt.filter(i=>fa(i.id)&&i.qty>0&&i.qty<=99);try{localStorage.setItem("zavyla-bag",JSON.stringify(Jt))}catch{}Kt("#count").textContent=Jt.reduce((i,e)=>i+e.qty,0)}function Yf(i,e=1){if(!fa(i))return;let t=Jt.find(n=>n.id===i);t?t.qty=Math.min(99,t.qty+e):Jt.push({id:i,qty:e}),nh(),Kt("#toast").textContent=`${fa(i).name} aggiunto alla bag`,Kt("#toast").classList.add("show"),clearTimeout($f),$f=setTimeout(()=>Kt("#toast").classList.remove("show"),2800)}function Qu(){nh(),Kt("#bag-count").textContent=`(${Jt.reduce((i,e)=>i+e.qty,0)})`,Kt("#cart-body").innerHTML=Jt.length?`${Jt.map(i=>{let e=fa(i.id);return`<div class="cart-row">${e.image?`<img src="${e.image}" alt="${e.name}">`:"<span></span>"}<div><a href="${e.url}"><h3>${e.name}</h3></a><div class="quantity"><button data-change="${i.id}" data-delta="-1" aria-label="Diminuisci ${e.name}">\u2212</button><span>${i.qty}</span><button data-change="${i.id}" data-delta="1" aria-label="Aumenta ${e.name}">+</button></div></div><div>${vs(e.price*i.qty)}<button class="remove" data-remove="${i.id}">Rimuovi</button></div></div>`}).join("")}<div class="cart-total"><span>Totale</span><span>${vs(Jt.reduce((i,e)=>i+fa(e.id).price*e.qty,0))}</span></div><a class="btn checkout" href="https://zavyla.com/cart/${Jt.map(i=>`${i.id}:${i.qty}`).join(",")}">Continua su Zavyla.com <span>\u2197</span></a><p class="small">IVA inclusa. Spese di spedizione e disponibilit\xE0 verificate al checkout sul sito ufficiale. Il carrello di questa anteprima \xE8 salvato solo in questo browser.</p>`:'<p class="empty">La tua bag aspetta una nuova emozione.</p><a class="btn" href="#/catalogo">Esplora le fragranze \u2197</a>'}function np(){let i=Kt("#query").value.trim().toLocaleLowerCase("it"),e=Nt.filter(t=>[t.name,t.family,t.description,...t.notes].join(" ").toLocaleLowerCase("it").includes(i));Kt("#search-results").innerHTML=e.length?e.map(t=>`<a class="search-item" href="#/profumo/${t.slug}">${eh(t)}<div><h3>${t.name}</h3><small>${t.family} \xB7 ${vs(t.price)}</small></div></a>`).join(""):'<p class="empty">Nessuna fragranza trovata. Prova un\u2019altra nota o un nome.</p>'}document.addEventListener("click",i=>{let e=i.target.closest("button");if(e){if(e.hasAttribute("data-cart")&&(Qu(),Kt("#cart").showModal()),e.hasAttribute("data-search")&&(Kt("#search").showModal(),np(),Kt("#query").focus()),e.hasAttribute("data-menu")&&Kt("#menu").showModal(),e.hasAttribute("data-close")&&e.closest("dialog").close(),e.dataset.add&&Yf(e.dataset.add,e.classList.contains("quick")?1:Number(Kt("#detail-qty")?.value||1)),e.dataset.gift!==void 0&&Yf(Kt(`#gift-${e.dataset.gift}`).value),e.dataset.change){let t=Jt.find(n=>n.id===e.dataset.change);t.qty=Math.min(99,t.qty+Number(e.dataset.delta)),Qu()}if(e.dataset.remove&&(Jt=Jt.filter(t=>t.id!==e.dataset.remove),Qu()),e.dataset.detailQty){let t=Kt("#detail-qty");t.value=Math.max(1,Math.min(99,Number(t.value)+Number(e.dataset.detailQty)))}e.dataset.filter&&(xr=e.dataset.filter,document.querySelectorAll("[data-filter]").forEach(t=>{t.classList.toggle("active",t===e),t.setAttribute("aria-pressed",t===e)}),th())}});Wf();document.addEventListener("change",i=>{i.target.id==="sort"&&(wl=i.target.value,th())});Kt("#query").addEventListener("input",np);document.querySelectorAll("dialog").forEach(i=>i.addEventListener("click",e=>{e.target===i&&e.clientX<i.getBoundingClientRect().left&&i.close()}));document.addEventListener("click",i=>{i.target.closest("dialog a")&&document.querySelectorAll("dialog[open]").forEach(e=>e.close())});var Zf=document.querySelector("#menu nav");Zf&&(Zf.outerHTML='<div class="menu-corpo">'+Xf()+"</div>");window.addEventListener("hashchange",()=>{location.hash&&!location.hash.startsWith("#/")||(tp(),vn.focus({preventScroll:!0}))});document.querySelector(".skip")?.addEventListener("click",i=>{i.preventDefault(),vn.focus(),vn.scrollIntoView({block:"start"})});nh();var Kf="atelier";function ip(){let i=new URLSearchParams(location.search).get("home");if(i){try{sessionStorage.setItem("zavyla-home",i)}catch{}return i}try{return sessionStorage.getItem("zavyla-home")||Kf}catch{return Kf}}var ih=()=>`<section class="fragrance-showcase" aria-label="Le tredici fragranze"><div class="rail-palco"><div class="fragrance-rail" aria-label="Scegli una delle tredici fragranze">${Nt.map((i,e)=>`<button class="rail-bottle" style="--fragranza:${i.color};--palco:${i.stage||i.color}" data-fragrance-index="${e}" aria-label="Seleziona ${i.name}" aria-pressed="false" tabindex="-1"><span class="rail-placeholder" aria-hidden="true"></span><img class="rail-stone" src="assets/stones/${i.slug}.webp?v=R147" alt="" width="360" height="360" loading="lazy"><span>${i.name}</span></button>`).join("")}</div><div class="rail-information" aria-live="polite" aria-atomic="true"><div class="rail-identity"><span class="eyebrow" data-rail-family></span><h3 data-rail-name></h3></div><div class="rail-story"><p class="rail-tagline" data-rail-description></p><p class="rail-descrizione" data-rail-descrizione></p></div><div class="rail-detail"><a class="text-link" data-rail-link href="#/profumo/give">Vai alla pagina prodotto \u2197</a></div></div></div><div class="rail-navigation"><button data-rail-prev aria-label="Profumo precedente">\u2190</button><span data-rail-count>05 / 13</span><button data-rail-next aria-label="Profumo successivo">\u2192</button></div></section>`;function V_(){let i=ip();return i==="pietre"?G_():i==="materie"?W_():q_()}function G_(){return`<section class="stones-hero" id="experience"><div class="stones-copy"><span class="eyebrow">Tredici pietre, tredici fragranze</span><h1>Scegli<br><em>la tua pietra.</em></h1><p>Ogni tappo \xE8 un minerale diverso, scolpito e lucidato uno per uno. Tocca una pietra: il flacone si apre, e con lui la sua storia olfattiva.</p></div>${ih()}</section>${Ku()}${rp()}${sp()}${Ju()}${ap()}`}function W_(){return`<section class="experience" id="experience"><div class="experience-stage"><div class="scene-backdrop"></div><div id="scene-host" role="img" aria-label="Dettaglio tridimensionale di pietra, vetro ed essenza: scorri per rivelare il flacone"></div><div class="exp-intro"><span class="eyebrow">L\u2019invisibile, reso indimenticabile.</span><h1>Oltre <br><em>la pelle.</em></h1><div class="intro-bottom"><p>Un incontro tra materia e immaginazione.</p></div></div><ol class="materie" aria-label="Le tre materie"><li><span>La pietra</span><p>Un minerale diverso per ogni fragranza, scolpito a mano.</p></li><li><span>Il vetro</span><p>Parete cava, spessa alla base: la luce ci entra e resta.</p></li><li><span>L\u2019essenza</span><p>Concentrazioni alte, materie prime italiane.</p></li></ol><div class="scene-loading" role="status">Prepariamo il tuo incontro<span></span></div><div class="scene-fallback" hidden><p>La scena 3D non \xE8 disponibile su questo dispositivo.</p><a class="text-link" href="#/catalogo">Esplora le fragranze \u2197</a></div></div></section>${ih()}${Ku()}${rp()}${sp()}${Ju()}${ap()}`}var rp=()=>`<section class="section hz-collezioni"><div class="section-head"><h2>Tre modi di sentire.</h2><a class="text-link" href="#/collezioni">Tutte le collezioni \u2197</a></div>${O_()}</section>`,sp=()=>'<section class="brand-story" aria-labelledby="brand-story-title"><div class="brand-story-heading"><h2 id="brand-story-title">Due origini.<br>Un incontro.<br><em>Un mondo da sentire.</em></h2></div><div class="brand-story-origin"><span class="brand-place">IRLANDA \xB7 SARDEGNA</span><span class="brand-year">2011</span><span class="brand-place">L\u2019INCONTRO, A ROMA</span></div><div class="brand-story-copy"><h3>Prima di un profumo,<br>una storia condivisa.</h3><p>Victoria, irlandese, e Giancarlo, sardo, si incontrano a Roma nel 2011. La passione per l\u2019arte e le fragranze diventa un percorso comune, da cui prende forma Zavyla.</p><p>Il nome \xE8 dedicato a una terza figlia immaginata: un sogno di bellezza e libert\xE0. L\u2019ispirazione psichedelica incontra la cura della profumeria artigianale italiana.</p><a class="text-link" href="#/maison">Entra nella nostra storia \u2197</a></div><div class="brand-story-foot"><span>Due sensibilit\xE0, una visione.</span><span>ARTE \xB7 LIBERT\xC0 \xB7 PROFUMERIA ITALIANA</span></div></section>',ap=()=>'<section class="discovery"><div><span class="eyebrow">Il primo passo</span><h2>Inizia da un incontro.</h2></div><a class="btn" href="#/regali">Discovery & regali \u2197</a></section>';function q_(){return`<section class="experience" id="experience"><div class="experience-stage"><div class="scene-backdrop"></div><div id="scene-host" role="img" aria-label="Dettaglio tridimensionale di pietra, vetro ed essenza: scorri per rivelare il flacone"></div><div class="exp-intro"><span class="eyebrow">L\u2019INVISIBILE, RESO INDIMENTICABILE.</span><h1>Oltre <br><em>la pelle.</em></h1><div class="intro-bottom"><p>Un incontro tra materia e immaginazione.</p><a class="btn-ghost exp-cta" href="#/catalogo">Esplora le fragranze <span>\u2197</span></a></div></div><div class="scene-loading" role="status">Prepariamo il tuo incontro<span></span></div><div class="scene-fallback" hidden><p>La scena 3D non \xE8 disponibile su questo dispositivo.</p><a class="text-link" href="#/catalogo">Esplora le fragranze \u2197</a></div></div></section>${ih()}${zf()}`}var Rl=document.createElement("div");Rl.setAttribute("aria-hidden","true");Rl.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none";document.body.prepend(Rl);new IntersectionObserver(([i])=>document.body.classList.toggle("scrolled",!i.isIntersecting)).observe(Rl);tp();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
