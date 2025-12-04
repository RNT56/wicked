(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="169",Vm=0,qf=1,Wm=2,Cd=1,Xm=2,Ci=3,ur=0,En=1,ci=2,rr=0,Or=1,Ls=2,$f=3,Kf=4,Ym=5,Dr=100,qm=101,$m=102,Km=103,Zm=104,jm=200,Jm=201,Qm=202,e_=203,kc=204,Gc=205,t_=206,n_=207,i_=208,r_=209,s_=210,o_=211,a_=212,l_=213,c_=214,Hc=0,Vc=1,Wc=2,Is=3,Xc=4,Yc=5,qc=6,$c=7,Rd=0,u_=1,f_=2,sr=0,h_=1,d_=2,p_=3,Pd=4,m_=5,__=6,g_=7,Dd=300,Us=301,Ns=302,Kc=303,Zc=304,Dl=306,jc=1e3,Ir=1001,Jc=1002,Jn=1003,v_=1004,ta=1005,ui=1006,Hl=1007,Ur=1008,Bi=1009,Ld=1010,Id=1011,Ro=1012,sf=1013,Xr=1014,Ii=1015,Go=1016,of=1017,af=1018,Fs=1020,Ud=35902,Nd=1021,Fd=1022,hi=1023,Od=1024,Bd=1025,Ts=1026,Os=1027,zd=1028,lf=1029,kd=1030,cf=1031,uf=1033,za=33776,ka=33777,Ga=33778,Ha=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,ou=37808,au=37809,lu=37810,cu=37811,uu=37812,fu=37813,hu=37814,du=37815,pu=37816,mu=37817,_u=37818,gu=37819,vu=37820,xu=37821,Va=36492,Mu=36494,Su=36495,Gd=36283,yu=36284,Eu=36285,Tu=36286,x_=3200,M_=3201,S_=0,y_=1,ji="",di="srgb",mr="srgb-linear",ff="display-p3",Ll="display-p3-linear",sl="linear",Et="srgb",ol="rec709",al="p3",ts=7680,Zf=519,E_=512,T_=513,b_=514,Hd=515,w_=516,A_=517,C_=518,R_=519,jf=35044,Jf="300 es",Ui=2e3,ll=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,bu=180/Math.PI;function Ho(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function yn(r,e,t){return Math.max(e,Math.min(t,r))}function P_(r,e){return(r%e+e)%e}function Wl(r,e,t){return(1-t)*r+t*e}function Js(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],x=i[4],S=i[7],C=i[2],w=i[5],E=i[8];return s[0]=o*_+a*M+l*C,s[3]=o*p+a*x+l*w,s[6]=o*m+a*S+l*E,s[1]=c*_+u*M+f*C,s[4]=c*p+u*x+f*w,s[7]=c*m+u*S+f*E,s[2]=d*_+h*M+g*C,s[5]=d*p+h*x+g*w,s[8]=d*m+h*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new $e;function Vd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function D_(){const r=cl("canvas");return r.style.display="block",r}const Qf={};function Wa(r){r in Qf||(Qf[r]=!0,console.warn(r))}function L_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function I_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function U_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const eh=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),th=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[mr]:{transfer:sl,primaries:ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[di]:{transfer:Et,primaries:ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ll]:{transfer:sl,primaries:al,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(th),fromReference:r=>r.applyMatrix3(eh)},[ff]:{transfer:Et,primaries:al,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(th),fromReference:r=>r.applyMatrix3(eh).convertLinearToSRGB()}},N_=new Set([mr,Ll]),dt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!N_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Qs[e].toReference,i=Qs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Qs[r].primaries},getTransfer:function(r){return r===ji?sl:Qs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Qs[e].luminanceCoefficients)}};function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ns;class F_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=cl("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O_=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ql(i[o].image)):s.push(ql(i[o]))}else s=ql(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ql(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?F_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;class Tn extends $s{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Ir,i=Ir,s=ui,o=Ur,a=hi,l=Bi,c=Tn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ho(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Dd;Tn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(h+1)/2,C=(m+1)/2,w=(u+d)/4,E=(f+_)/4,R=(g+p)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):S>C?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z_ extends $s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends z_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,m*M);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const S=a*M;if(l=l*p+d*S,c=c*p+h*S,u=u*p+g*S,f=f*p+_*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new z,nh=new Vo;class Wo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),ia.subVectors(this.max,eo),is.subVectors(e.a,eo),rs.subVectors(e.b,eo),ss.subVectors(e.c,eo),Wi.subVectors(rs,is),Xi.subVectors(ss,rs),gr.subVectors(is,ss);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-gr.z,gr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,gr.z,0,-gr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-gr.y,gr.x,0];return!Kl(t,is,rs,ss,ia)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,is,rs,ss,ia))?!1:(ra.crossVectors(Wi,Xi),t=[ra.x,ra.y,ra.z],Kl(t,is,rs,ss,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new z,new z,new z,new z,new z,new z,new z,new z],si=new z,na=new Wo,is=new z,rs=new z,ss=new z,Wi=new z,Xi=new z,gr=new z,eo=new z,ia=new z,ra=new z,vr=new z;function Kl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vr.fromArray(r,s);const a=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const G_=new Wo,to=new z,Zl=new z;class Xo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Zl)),this.expandByPoint(to.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new z,jl=new z,sa=new z,Yi=new z,Jl=new z,oa=new z,Ql=new z;class hf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Yi.dot(this.direction),l=-Yi.dot(sa),c=Yi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(jl).addScaledVector(sa,d),h}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){Jl.subVectors(t,e),oa.subVectors(n,e),Ql.crossVectors(Jl,oa);let o=this.direction.dot(Ql),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(Yi,oa));if(l<0)return null;const c=a*this.direction.dot(Jl.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Ql);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H_,e,V_)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),qi.crossVectors(n,In),qi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),qi.crossVectors(n,In)),qi.normalize(),aa.crossVectors(In,qi),i[0]=qi.x,i[4]=aa.x,i[8]=In.x,i[1]=qi.y,i[5]=aa.y,i[9]=In.y,i[2]=qi.z,i[6]=aa.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],S=n[11],C=n[15],w=i[0],E=i[4],R=i[8],I=i[12],v=i[1],T=i[5],L=i[9],k=i[13],X=i[2],K=i[6],H=i[10],Y=i[14],W=i[3],se=i[7],P=i[11],ae=i[15];return s[0]=o*w+a*v+l*X+c*W,s[4]=o*E+a*T+l*K+c*se,s[8]=o*R+a*L+l*H+c*P,s[12]=o*I+a*k+l*Y+c*ae,s[1]=u*w+f*v+d*X+h*W,s[5]=u*E+f*T+d*K+h*se,s[9]=u*R+f*L+d*H+h*P,s[13]=u*I+f*k+d*Y+h*ae,s[2]=g*w+_*v+p*X+m*W,s[6]=g*E+_*T+p*K+m*se,s[10]=g*R+_*L+p*H+m*P,s[14]=g*I+_*k+p*Y+m*ae,s[3]=M*w+x*v+S*X+C*W,s[7]=M*E+x*T+S*K+C*se,s[11]=M*R+x*L+S*H+C*P,s[15]=M*I+x*k+S*Y+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*h-n*l*h)+_*(+t*l*h-t*c*d+s*o*d-i*o*h+i*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,x=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,S=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,C=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,w=t*M+n*x+i*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=M*E,e[1]=(_*d*s-f*p*s-_*i*h+n*p*h+f*i*m-n*d*m)*E,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*h-n*l*h)*E,e[4]=x*E,e[5]=(u*p*s-g*d*s+g*i*h-t*p*h-u*i*m+t*d*m)*E,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*h+t*l*h)*E,e[8]=S*E,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*m-t*f*m)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*E,e[12]=C*E,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*p+t*f*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,p=o*f,m=a*f,M=l*c,x=l*u,S=l*f,C=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*C,i[1]=(h+S)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(h-S)*w,i[5]=(1-(d+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+x)*E,i[9]=(p-M)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/s,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ui){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let h,g;if(a===Ui)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ll)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ui){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),d=(t+e)*c,h=(n+i)*u;let g,_;if(a===Ui)g=(o+s)*f,_=-2*f;else if(a===ll)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new z,oi=new Pt,H_=new z(0,0,0),V_=new z(1,1,1),qi=new z,aa=new z,In=new z,ih=new Pt,rh=new Vo;class zi{constructor(e=0,t=0,n=0,i=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const sh=new z,as=new Vo,bi=new Pt,la=new z,no=new z,X_=new z,Y_=new Vo,oh=new z(1,0,0),ah=new z(0,1,0),lh=new z(0,0,1),ch={type:"added"},q_={type:"removed"},ls={type:"childadded",child:null},ec={type:"childremoved",child:null};class xn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new z,t=new zi,n=new Vo,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(no,la,this.up):bi.lookAt(la,no,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),as.setFromRotationMatrix(bi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xn.DEFAULT_UP=new z(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new z,wi=new z,tc=new z,Ai=new z,cs=new z,us=new z,uh=new z,nc=new z,ic=new z,rc=new z,sc=new Nt,oc=new Nt,ac=new Nt;class fi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ai.subVectors(i,t),wi.subVectors(n,t),tc.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(wi),l=ai.dot(tc),c=wi.dot(wi),u=wi.dot(tc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),wi.subVectors(e,t),ai.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ai.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;cs.subVectors(i,n),us.subVectors(s,n),nc.subVectors(e,n);const l=cs.dot(nc),c=us.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,i);const u=cs.dot(ic),f=us.dot(ic);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(cs,o);rc.subVectors(e,s);const h=cs.dot(rc),g=us.dot(rc);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(us,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return uh.subVectors(s,i),a=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(uh,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ca={h:0,s:0,l:0};function lc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=P_(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=di){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return dt.fromWorkingColorSpace(sn.copy(this),e),Math.round(yn(sn.r*255,0,255))*65536+Math.round(yn(sn.g*255,0,255))*256+Math.round(yn(sn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,i=sn.g,s=sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=di){dt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,i=sn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(ca);const n=Wl($i.h,ca.h,t),i=Wl($i.s,ca.s,t),s=Wl($i.l,ca.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ut;ut.NAMES=qd;let $_=0;class Ks extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Or,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(n.blending=this.blending),this.side!==ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class df extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new z,ua=new at;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Js(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}}class $d extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K_=0;const qn=new Pt,cc=new xn,fs=new z,Un=new Wo,io=new Wo,Yt=new z;class Pn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Kd:$d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Un.min,io.min),Un.expandByPoint(Yt),Yt.addVectors(Un.max,io.max),Un.expandByPoint(Yt)):(Un.expandByPoint(io.min),Un.expandByPoint(io.max))}Un.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Yt.add(fs)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;const c=new z,u=new z,f=new z,d=new at,h=new at,g=new at,_=new z,p=new z;function m(R,I,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,I),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(T),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[R].add(_),a[I].add(_),a[v].add(_),l[R].add(p),l[I].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,I=M.length;R<I;++R){const v=M[R],T=v.start,L=v.count;for(let k=T,X=T+L;k<X;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new z,S=new z,C=new z,w=new z;function E(R){C.fromBufferAttribute(i,R),w.copy(C);const I=a[R];x.copy(I),x.sub(C.multiplyScalar(C.dot(I))).normalize(),S.crossVectors(w,I);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,I=M.length;R<I;++R){const v=M[R],T=v.start,L=v.count;for(let k=T,X=T+L;k<X;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new Kt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new Pt,xr=new hf,fa=new Xo,hh=new z,ha=new z,da=new z,pa=new z,uc=new z,ma=new z,dh=new z,_a=new z;class Qt extends xn{constructor(e=new Pn,t=new df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(uc.fromBufferAttribute(f,e),o?ma.addScaledVector(uc,u):ma.addScaledVector(uc.sub(t),u))}t.add(ma)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(fa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(fa,hh)===null||xr.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(fh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,h.start),x=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,C=x;S<C;S+=3){const w=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);i=ga(this,m,e,n,c,u,f,w,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=ga(this,o,e,n,c,u,f,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,h.start),x=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,C=x;S<C;S+=3){const w=S,E=S+1,R=S+2;i=ga(this,m,e,n,c,u,f,w,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,S=p+2;i=ga(this,o,e,n,c,u,f,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Z_(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ur,a),l===null)return null;_a.copy(a),_a.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:r}}function ga(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ha),r.getVertexPosition(l,da),r.getVertexPosition(c,pa);const u=Z_(r,e,t,n,ha,da,pa,dh);if(u){const f=new z;fi.getBarycoord(dh,ha,da,pa,f),i&&(u.uv=fi.getInterpolatedAttribute(i,a,l,c,f,new at)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};fi.getNormal(ha,da,pa,d.normal),u.face=d,u.barycoord=f}return u}class Yo extends Pn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(f,2));function g(_,p,m,M,x,S,C,w,E,R,I){const v=S/E,T=C/R,L=S/2,k=C/2,X=w/2,K=E+1,H=R+1;let Y=0,W=0;const se=new z;for(let P=0;P<H;P++){const ae=P*T-k;for(let Oe=0;Oe<K;Oe++){const Ve=Oe*v-L;se[_]=Ve*M,se[p]=ae*x,se[m]=X,c.push(se.x,se.y,se.z),se[_]=0,se[p]=0,se[m]=w>0?1:-1,u.push(se.x,se.y,se.z),f.push(Oe/E),f.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let ae=0;ae<E;ae++){const Oe=d+ae+K*P,Ve=d+ae+K*(P+1),q=d+(ae+1)+K*(P+1),Q=d+(ae+1)+K*P;l.push(Oe,Ve,Q),l.push(Ve,q,Q),W+=6}a.addGroup(h,W,I),h+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=Bs(r[t]);for(const i in n)e[i]=n[i]}return e}function j_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const J_={clone:Bs,merge:dn};var Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jd extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new z,ph=new at,mh=new at;class Kn extends jd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bu*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class tg extends xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kn(hs,ds,e,t);i.layers=this.layers,this.add(i);const s=new Kn(hs,ds,e,t);s.layers=this.layers,this.add(s);const o=new Kn(hs,ds,e,t);o.layers=this.layers,this.add(o);const a=new Kn(hs,ds,e,t);a.layers=this.layers,this.add(a);const l=new Kn(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Kn(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jd extends Tn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yo(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:rr});s.uniforms.tEquirect.value=t;const o=new Qt(i,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=ui),new tg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const fc=new z,ig=new z,rg=new $e;class wr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fc.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rg.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Xo,va=new z;class Qd{constructor(e=new wr,t=new wr,n=new wr,i=new wr,s=new wr,o=new wr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-h,S-m).normalize(),n[1].setComponents(l+s,d+c,p+h,S+m).normalize(),n[2].setComponents(l+o,d+u,p+g,S+M).normalize(),n[3].setComponents(l-o,d-u,p-g,S-M).normalize(),n[4].setComponents(l-a,d-f,p-_,S-x).normalize(),t===Ui)n[5].setComponents(l+a,d+f,p+_,S+x).normalize();else if(t===ll)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(va.x=i.normal.x>0?e.max.x:e.min.x,va.y=i.normal.y>0?e.max.y:e.min.y,va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sg(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Hi extends Pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let x=0;x<c;x++){const S=x*f-s;g.push(S,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,S=M+c*(m+1),C=M+1+c*(m+1),w=M+1+c*m;h.push(x,S,w),h.push(S,C,w)}this.setIndex(h),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dv=`#define DISTANCE
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
}`,pv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,yv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Av=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Rv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Dv=`#define TOON
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
}`,Lv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Fv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:fg,aomap_fragment:hg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:_g,beginnormal_vertex:gg,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Tg,color_fragment:bg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Cg,common:Rg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Ig,emissivemap_fragment:Ug,emissivemap_pars_fragment:Ng,colorspace_fragment:Fg,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:kg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Jg,envmap_vertex:Hg,fog_vertex:Vg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:Yg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:$g,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Zg,lights_pars_begin:jg,lights_toon_fragment:Qg,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:f0,map_fragment:h0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:g0,morphinstance_vertex:v0,morphcolor_vertex:x0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:y0,normal_fragment_begin:E0,normal_fragment_maps:T0,normal_pars_fragment:b0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:L0,opaque_fragment:I0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:F0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:Y0,skinning_vertex:q0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:j0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:rv,background_vert:sv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:fv,depth_frag:hv,distanceRGBA_vert:dv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:_v,linedashed_vert:gv,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:yv,meshmatcap_vert:Ev,meshmatcap_frag:Tv,meshnormal_vert:bv,meshnormal_frag:wv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Rv,meshphysical_frag:Pv,meshtoon_vert:Dv,meshtoon_frag:Lv,points_vert:Iv,points_frag:Uv,shadow_vert:Nv,shadow_frag:Fv,sprite_vert:Ov,sprite_frag:Bv},me={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},_i={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ut(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ut(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};_i.physical={uniforms:dn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const xa={r:0,b:0,g:0},Sr=new zi,zv=new Pt;function kv(r,e,t,n,i,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const S=g(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Dl)?(u===void 0&&(u=new Qt(new Yo(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Bs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Sr.copy(x.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Sr)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,(f!==S||d!==S.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,h=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qt(new Hi(2,2),new Zt({name:"BackgroundMaterial",uniforms:Bs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(xa,Zd(r)),n.buffers.color.setClear(xa.r,xa.g,xa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function Gv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,T,L,k,X){let K=!1;const H=f(k,L,T);s!==H&&(s=H,c(s.object)),K=h(v,k,L,X),K&&g(v,k,L,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(v,T,L,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,T,L){const k=L.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let K=X[T.id];K===void 0&&(K={},X[T.id]=K);let H=K[k];return H===void 0&&(H=d(l()),K[k]=H),H}function d(v){const T=[],L=[],k=[];for(let X=0;X<t;X++)T[X]=0,L[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:k,object:v,attributes:{},index:null}}function h(v,T,L,k){const X=s.attributes,K=T.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){const P=X[W];let ae=K[W];if(ae===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),P===void 0||P.attribute!==ae||ae&&P.data!==ae.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(v,T,L,k){const X={},K=T.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){let P=K[W];P===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ae={};ae.attribute=P,P&&P.data&&(ae.data=P.data),X[W]=ae,H++}s.attributes=X,s.attributesNum=H,s.index=k}function _(){const v=s.newAttributes;for(let T=0,L=v.length;T<L;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const L=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;L[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),X[v]!==T&&(r.vertexAttribDivisor(v,T),X[v]=T)}function M(){const v=s.newAttributes,T=s.enabledAttributes;for(let L=0,k=T.length;L<k;L++)T[L]!==v[L]&&(r.disableVertexAttribArray(L),T[L]=0)}function x(v,T,L,k,X,K,H){H===!0?r.vertexAttribIPointer(v,T,L,X,K):r.vertexAttribPointer(v,T,L,k,X,K)}function S(v,T,L,k){_();const X=k.attributes,K=L.getAttributes(),H=T.defaultAttributeValues;for(const Y in K){const W=K[Y];if(W.location>=0){let se=X[Y];if(se===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const P=se.normalized,ae=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const Ve=Oe.buffer,q=Oe.type,Q=Oe.bytesPerElement,he=q===r.INT||q===r.UNSIGNED_INT||se.gpuType===sf;if(se.isInterleavedBufferAttribute){const oe=se.data,be=oe.stride,ye=se.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)m(W.location+He,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<W.locationSize;He++)p(W.location+He);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let He=0;He<W.locationSize;He++)x(W.location+He,ae/W.locationSize,q,P,be*Q,(ye+ae/W.locationSize*He)*Q,he)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let oe=0;oe<W.locationSize;oe++)x(W.location+oe,ae/W.locationSize,q,P,ae*Q,ae/W.locationSize*oe*Q,he)}}else if(H!==void 0){const P=H[Y];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(W.location,P);break;case 3:r.vertexAttrib3fv(W.location,P);break;case 4:r.vertexAttrib4fv(W.location,P);break;default:r.vertexAttrib1fv(W.location,P)}}}}M()}function C(){R();for(const v in n){const T=n[v];for(const L in T){const k=T[L];for(const X in k)u(k[X].object),delete k[X];delete T[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const L in T){const k=T[L];for(const X in k)u(k[X].object),delete k[X];delete T[L]}delete n[v.id]}function E(v){for(const T in n){const L=n[T];if(L[v.id]===void 0)continue;const k=L[v.id];for(const X in k)u(k[X].object),delete k[X];delete L[v.id]}}function R(){I(),o=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Hv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==hi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ii&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function Wv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new wr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let S=m.clippingState||null;l.value=S,S=u(g,d,x,h);for(let C=0;C!==x;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=h;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Xv(r){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=Us:a===Zc&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kc||a===Zc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ng(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yv extends jd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,_h=[.125,.215,.35,.446,.526,.582],Lr=20,hc=new Yv,gh=new ut;let dc=null,pc=0,mc=0,_c=!1;const Ar=(1+Math.sqrt(5))/2,ps=1/Ar,vh=[new z(-Ar,ps,0),new z(Ar,ps,0),new z(-ps,0,Ar),new z(ps,0,Ar),new z(0,Ar,-ps),new z(0,Ar,ps),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=_c,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Go,format:hi,colorSpace:mr,depthBuffer:!1},i=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(s)),this._blurMaterial=$v(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,n,i){const a=new Kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(gh),u.toneMapping=sr,u.autoClear=!1;const h=new df({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Qt(new Yo,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(gh),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ma(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vh[(i-s-1)%vh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Lr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Lr;p>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Lr}`);const m=[];let M=0;for(let E=0;E<Lr;++E){const R=E/_,I=Math.exp(-R*R/2);m.push(I),E===0?M+=I:E<p&&(M+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[i],C=3*S*(i>x-Ms?i-x+Ms:0),w=4*(this._cubeSize-S);Ma(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(f,hc)}}function qv(r){const e=[],t=[],n=[];let i=r;const s=r-Ms+1+_h.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ms?l=_h[o-r+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*h),x=new Float32Array(p*g*h),S=new Float32Array(m*g*h);for(let w=0;w<h;w++){const E=w%3*2/3-1,R=w>2?0:-1,I=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(I,_*g*w),x.set(d,p*g*w);const v=[w,w,w,w,w,w];S.set(v,m*g*w)}const C=new Pn;C.setAttribute("position",new Kt(M,_)),C.setAttribute("uv",new Kt(x,p)),C.setAttribute("faceIndex",new Kt(S,m)),e.push(C),i>Ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(r,e,t){const n=new Yr(r,e,t);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $v(r,e,t){const n=new Float32Array(Lr),i=new z(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Sh(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function yh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function pf(){return`

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
	`}function Kv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kc||l===Zc,u=l===Us||l===Ns;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new xh(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jv(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let x=0,S=M.length;x<S;x+=3){const C=M[x+0],w=M[x+1],E=M[x+2];d.push(C,w,w,E,E,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const C=x+0,w=x+1,E=x+2;d.push(C,w,w,E,E,C)}}else return;const p=new(Vd(d)?Kd:$d)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*o,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,n,1)}function f(d,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=h[M];for(let M=0;M<_.length;M++)t.update(m,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ex(r,e,t){const n=new WeakMap,i=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var h=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*f),R=new Xd(E,C,w,f);R.type=Ii,R.needsUpdate=!0;const I=S*4;for(let T=0;T<f;T++){const L=m[T],k=M[T],X=x[T],K=C*w*4*T;for(let H=0;H<L.count;H++){const Y=H*I;g===!0&&(i.fromBufferAttribute(L,H),E[K+Y+0]=i.x,E[K+Y+1]=i.y,E[K+Y+2]=i.z,E[K+Y+3]=0),_===!0&&(i.fromBufferAttribute(k,H),E[K+Y+4]=i.x,E[K+Y+5]=i.y,E[K+Y+6]=i.z,E[K+Y+7]=0),p===!0&&(i.fromBufferAttribute(X,H),E[K+Y+8]=i.x,E[K+Y+9]=i.y,E[K+Y+10]=i.z,E[K+Y+11]=X.itemSize===4?i.w:1)}}d={count:f,texture:R,size:new at(C,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function tx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class tp extends Tn{constructor(e,t,n,i,s,o,a,l,c,u=Ts){if(u!==Ts&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ts&&(n=Xr),n===void 0&&u===Os&&(n=Fs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jn,this.minFilter=l!==void 0?l:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const np=new Tn,Eh=new tp(1,1),ip=new Xd,rp=new k_,sp=new Jd,Th=[],bh=[],wh=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function Zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Th[i];if(s===void 0&&(s=new Float32Array(i),Th[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Il(r,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function nx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ch.set(n),r.uniformMatrix2fv(this.addr,!1,Ch),Wt(t,n)}}function ax(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ah.set(n),r.uniformMatrix3fv(this.addr,!1,Ah),Wt(t,n)}}function lx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;wh.set(n),r.uniformMatrix4fv(this.addr,!1,wh),Wt(t,n)}}function cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function dx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function _x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function gx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eh.compareFunction=Hd,s=Eh):s=np,t.setTexture2D(e||s,i)}function vx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rp,i)}function xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sp,i)}function Mx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ip,i)}function Sx(r){switch(r){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return fx;case 35669:case 35673:return hx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return Mx}}function yx(r,e){r.uniform1fv(this.addr,e)}function Ex(r,e){const t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Tx(r,e){const t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function bx(r,e){const t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function wx(r,e){const t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ax(r,e){const t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cx(r,e){const t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rx(r,e){r.uniform1iv(this.addr,e)}function Px(r,e){r.uniform2iv(this.addr,e)}function Dx(r,e){r.uniform3iv(this.addr,e)}function Lx(r,e){r.uniform4iv(this.addr,e)}function Ix(r,e){r.uniform1uiv(this.addr,e)}function Ux(r,e){r.uniform2uiv(this.addr,e)}function Nx(r,e){r.uniform3uiv(this.addr,e)}function Fx(r,e){r.uniform4uiv(this.addr,e)}function Ox(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||np,s[o])}function Bx(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rp,s[o])}function zx(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sp,s[o])}function kx(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ip,s[o])}function Gx(r){switch(r){case 5126:return yx;case 35664:return Ex;case 35665:return Tx;case 35666:return bx;case 35674:return wx;case 35675:return Ax;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Lx;case 5125:return Ix;case 36294:return Ux;case 36295:return Nx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sx(t.type)}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Rh(r,e){r.seq.push(e),r.map[e.id]=e}function Xx(r,e,t){const n=r.name,i=n.length;for(gc.lastIndex=0;;){const s=gc.exec(n),o=gc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rh(t,c===void 0?new Hx(a,r,e):new Vx(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Wx(a),Rh(t,f)),t=f}}}class Xa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Xx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ph(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Yx=37297;let qx=0;function $x(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Kx(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===al&&t===ol?n="LinearDisplayP3ToLinearSRGB":e===ol&&t===al&&(n="LinearSRGBToLinearDisplayP3"),r){case mr:case Ll:return[n,"LinearTransferOETF"];case di:case ff:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$x(r.getShaderSource(e),o)}else return i}function Zx(r,e){const t=Kx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jx(r,e){let t;switch(e){case h_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="Cineon";break;case Pd:t="ACESFilmic";break;case __:t="AgX";break;case g_:t="Neutral";break;case m_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sa=new z;function Jx(){dt.getLuminanceCoefficients(Sa);const r=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function eM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lo(r){return r!==""}function Lh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(r){return r.replace(nM,rM)}const iM=new Map;function rM(r,e){let t=qe[e];if(t===void 0){const n=iM.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(r){return r.replace(sM,oM)}function oM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case f_:e="ENVMAP_BLENDING_ADD";break}return e}function fM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aM(t),c=lM(t),u=cM(t),f=uM(t),d=fM(t),h=Qx(t),g=eM(s),_=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(p=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?qe.tonemapping_pars_fragment:"",t.toneMapping!==sr?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),Jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=wu(o),o=Lh(o,t),o=Ih(o,t),a=wu(a),a=Lh(a,t),a=Ih(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,S=M+m+a,C=Ph(i,i.VERTEX_SHADER,x),w=Ph(i,i.FRAGMENT_SHADER,S);i.attachShader(_,C),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(T){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(w).trim();let K=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const Y=Dh(i,C,"vertex"),W=Dh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+Y+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||X==="")&&(H=!1);H&&(T.diagnostics={runnable:K,programLog:L,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(C),i.deleteShader(w),R=new Xa(i,_),I=tM(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let I;this.getAttributes=function(){return I===void 0&&E(this),I};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Yx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let dM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mM(e),t.set(e,n)),n}}class mM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function _M(r,e,t,n,i,s,o){const a=new Yd,l=new pM,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,h=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,L,k,X){const K=k.fog,H=X.geometry,Y=v.isMeshStandardMaterial?k.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),se=W&&W.mapping===Dl?W.image.height:null,P=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Oe=ae!==void 0?ae.length:0;let Ve=0;H.morphAttributes.position!==void 0&&(Ve=1),H.morphAttributes.normal!==void 0&&(Ve=2),H.morphAttributes.color!==void 0&&(Ve=3);let q,Q,he,oe;if(P){const Ae=_i[P];q=Ae.vertexShader,Q=Ae.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const be=r.getRenderTarget(),ye=X.isInstancedMesh===!0,He=X.isBatchedMesh===!0,Ge=!!v.map,Fe=!!v.matcap,D=!!W,it=!!v.aoMap,Ue=!!v.lightMap,Be=!!v.bumpMap,O=!!v.normalMap,Ke=!!v.displacementMap,Pe=!!v.emissiveMap,A=!!v.metalnessMap,y=!!v.roughnessMap,V=v.anisotropy>0,j=v.clearcoat>0,te=v.dispersion>0,Z=v.iridescence>0,Me=v.sheen>0,ie=v.transmission>0,de=V&&!!v.anisotropyMap,ke=j&&!!v.clearcoatMap,ne=j&&!!v.clearcoatNormalMap,ve=j&&!!v.clearcoatRoughnessMap,xe=Z&&!!v.iridescenceMap,Le=Z&&!!v.iridescenceThicknessMap,ge=Me&&!!v.sheenColorMap,We=Me&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,rt=!!v.specularColorMap,U=!!v.specularIntensityMap,ee=ie&&!!v.transmissionMap,$=ie&&!!v.thicknessMap,J=!!v.gradientMap,le=!!v.alphaMap,ce=v.alphaTest>0,Xe=!!v.alphaHash,_t=!!v.extensions;let Tt=sr;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Tt=r.toneMapping);const tt={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:He,batchingColor:He&&X._colorsTexture!==null,instancing:ye,instancingColor:ye&&X.instanceColor!==null,instancingMorph:ye&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:mr,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:Fe,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:se,aoMap:it,lightMap:Ue,bumpMap:Be,normalMap:O,displacementMap:h&&Ke,emissiveMap:Pe,normalMapObjectSpace:O&&v.normalMapType===y_,normalMapTangentSpace:O&&v.normalMapType===S_,metalnessMap:A,roughnessMap:y,anisotropy:V,anisotropyMap:de,clearcoat:j,clearcoatMap:ke,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:te,iridescence:Z,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:ge,sheenRoughnessMap:We,specularMap:Ne,specularColorMap:rt,specularIntensityMap:U,transmission:ie,transmissionMap:ee,thicknessMap:$,gradientMap:J,opaque:v.transparent===!1&&v.blending===Or&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ce,alphaHash:Xe,combine:v.combine,mapUv:Ge&&p(v.map.channel),aoMapUv:it&&p(v.aoMap.channel),lightMapUv:Ue&&p(v.lightMap.channel),bumpMapUv:Be&&p(v.bumpMap.channel),normalMapUv:O&&p(v.normalMap.channel),displacementMapUv:Ke&&p(v.displacementMap.channel),emissiveMapUv:Pe&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:ke&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(v.sheenRoughnessMap.channel),specularMapUv:Ne&&p(v.specularMap.channel),specularColorMapUv:rt&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:ee&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:le&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(O||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(Ge||le),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ci,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function M(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)T.push(L),T.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const T=_[v.type];let L;if(T){const k=_i[T];L=J_.clone(k.uniforms)}else L=v.uniforms;return L}function w(v,T){let L;for(let k=0,X=u.length;k<X;k++){const K=u[k];if(K.cacheKey===T){L=K,++L.usedTimes;break}}return L===void 0&&(L=new hM(r,T,v,s),u.push(L)),L}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:I}}function gM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function vM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||vM),n.length>1&&n.sort(d||Fh),i.length>1&&i.sort(d||Fh)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function xM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Oh,r.set(n,[o])):i>=s.length?(o=new Oh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function MM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ut};break;case"SpotLight":t={position:new z,direction:new z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function SM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yM=0;function EM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TM(r){const e=new MM,t=SM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new Pt,o=new Pt;function a(c){let u=0,f=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,M=0,x=0,S=0,C=0,w=0,E=0;c.sort(EM);for(let I=0,v=c.length;I<v;I++){const T=c[I],L=T.color,k=T.intensity,X=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=L.r*k,f+=L.g*k,d+=L.b*k;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],k);E++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,W=t.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[h]=W,n.directionalShadowMap[h]=K,n.directionalShadowMatrix[h]=T.shadow.matrix,M++}n.directional[h]=H,h++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(L).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[_]=H;const Y=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,T.castShadow){const W=t.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=K,S++}_++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(L).multiplyScalar(k),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=H,p++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const Y=T.shadow,W=t.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(k),H.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=E,n.version=yM++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Bh(r){const e=new TM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Bh(r),e.set(i,[a])):s>=o.length?(a=new Bh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wM extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RM=`uniform sampler2D shadow_pass;
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
}`;function PM(r,e,t){let n=new Qd;const i=new at,s=new at,o=new Nt,a=new wM({depthPacking:M_}),l=new AM,c={},u=t.maxTextureSize,f={[ur]:En,[En]:ur,[ci]:ci},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:CM,fragmentShader:RM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let m=this.type;this.render=function(w,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const I=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),L=r.state;L.setBlending(rr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=m!==Ci&&this.type===Ci,X=m===Ci&&this.type!==Ci;for(let K=0,H=w.length;K<H;K++){const Y=w[K],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const se=W.getFrameExtents();if(i.multiply(se),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,W.mapSize.y=s.y)),W.map===null||k===!0||X===!0){const ae=this.type!==Ci?{minFilter:Jn,magFilter:Jn}:{};W.map!==null&&W.map.dispose(),W.map=new Yr(i.x,i.y,ae),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const P=W.getViewportCount();for(let ae=0;ae<P;ae++){const Oe=W.getViewport(ae);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),L.viewport(o),W.updateMatrices(Y,ae),n=W.getFrustum(),S(E,R,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ci&&M(W,R),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(I,v,T)};function M(w,E){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,R,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,R,h,_,null)}function x(w,E,R,I){let v=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=v.uuid,k=E.uuid;let X=c[L];X===void 0&&(X={},c[L]=X);let K=X[k];K===void 0&&(K=v.clone(),X[k]=K,E.addEventListener("dispose",C)),v=K}if(v.visible=E.visible,v.wireframe=E.wireframe,I===Ci?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=r.properties.get(v);L.light=R}return v}function S(w,E,R,I,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ci)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=e.update(w),X=w.material;if(Array.isArray(X)){const K=k.groups;for(let H=0,Y=K.length;H<Y;H++){const W=K[H],se=X[W.materialIndex];if(se&&se.visible){const P=x(w,se,I,v);w.onBeforeShadow(r,w,E,R,k,P,W),r.renderBufferDirect(R,null,k,P,w,W),w.onAfterShadow(r,w,E,R,k,P,W)}}}else if(X.visible){const K=x(w,X,I,v);w.onBeforeShadow(r,w,E,R,k,K,null),r.renderBufferDirect(R,null,k,K,w,null),w.onAfterShadow(r,w,E,R,k,K,null)}}const L=w.children;for(let k=0,X=L.length;k<X;k++)S(L[k],E,R,I,v)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const I=c[R],v=w.target.uuid;v in I&&(I[v].dispose(),delete I[v])}}}const DM={[Hc]:Vc,[Wc]:qc,[Xc]:$c,[Is]:Yc,[Vc]:Hc,[qc]:Wc,[$c]:Xc,[Yc]:Is};function LM(r){function e(){let U=!1;const ee=new Nt;let $=null;const J=new Nt(0,0,0,0);return{setMask:function(le){$!==le&&!U&&(r.colorMask(le,le,le,le),$=le)},setLocked:function(le){U=le},setClear:function(le,ce,Xe,_t,Tt){Tt===!0&&(le*=_t,ce*=_t,Xe*=_t),ee.set(le,ce,Xe,_t),J.equals(ee)===!1&&(r.clearColor(le,ce,Xe,_t),J.copy(ee))},reset:function(){U=!1,$=null,J.set(-1,0,0,0)}}}function t(){let U=!1,ee=!1,$=null,J=null,le=null;return{setReversed:function(ce){ee=ce},setTest:function(ce){ce?he(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ce){$!==ce&&!U&&(r.depthMask(ce),$=ce)},setFunc:function(ce){if(ee&&(ce=DM[ce]),J!==ce){switch(ce){case Hc:r.depthFunc(r.NEVER);break;case Vc:r.depthFunc(r.ALWAYS);break;case Wc:r.depthFunc(r.LESS);break;case Is:r.depthFunc(r.LEQUAL);break;case Xc:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case qc:r.depthFunc(r.GREATER);break;case $c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){U=ce},setClear:function(ce){le!==ce&&(r.clearDepth(ce),le=ce)},reset:function(){U=!1,$=null,J=null,le=null}}}function n(){let U=!1,ee=null,$=null,J=null,le=null,ce=null,Xe=null,_t=null,Tt=null;return{setTest:function(tt){U||(tt?he(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!U&&(r.stencilMask(tt),ee=tt)},setFunc:function(tt,Ae,Ee){($!==tt||J!==Ae||le!==Ee)&&(r.stencilFunc(tt,Ae,Ee),$=tt,J=Ae,le=Ee)},setOp:function(tt,Ae,Ee){(ce!==tt||Xe!==Ae||_t!==Ee)&&(r.stencilOp(tt,Ae,Ee),ce=tt,Xe=Ae,_t=Ee)},setLocked:function(tt){U=tt},setClear:function(tt){Tt!==tt&&(r.clearStencil(tt),Tt=tt)},reset:function(){U=!1,ee=null,$=null,J=null,le=null,ce=null,Xe=null,_t=null,Tt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,M=null,x=null,S=null,C=null,w=new ut(0,0,0),E=0,R=!1,I=null,v=null,T=null,L=null,k=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=H>=2);let W=null,se={};const P=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Oe=new Nt().fromArray(P),Ve=new Nt().fromArray(ae);function q(U,ee,$,J){const le=new Uint8Array(4),ce=r.createTexture();r.bindTexture(U,ce),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<$;Xe++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ee+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ce}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(r.DEPTH_TEST),s.setFunc(Is),Ue(!1),Be(qf),he(r.CULL_FACE),D(rr);function he(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function oe(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function be(U,ee){return u[U]!==ee?(r.bindFramebuffer(U,ee),u[U]=ee,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ee),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function ye(U,ee){let $=d,J=!1;if(U){$=f.get(ee),$===void 0&&($=[],f.set(ee,$));const le=U.textures;if($.length!==le.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Xe=le.length;ce<Xe;ce++)$[ce]=r.COLOR_ATTACHMENT0+ce;$.length=le.length,J=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,J=!0);J&&r.drawBuffers($)}function He(U){return h!==U?(r.useProgram(U),h=U,!0):!1}const Ge={[Dr]:r.FUNC_ADD,[qm]:r.FUNC_SUBTRACT,[$m]:r.FUNC_REVERSE_SUBTRACT};Ge[Km]=r.MIN,Ge[Zm]=r.MAX;const Fe={[jm]:r.ZERO,[Jm]:r.ONE,[Qm]:r.SRC_COLOR,[kc]:r.SRC_ALPHA,[s_]:r.SRC_ALPHA_SATURATE,[i_]:r.DST_COLOR,[t_]:r.DST_ALPHA,[e_]:r.ONE_MINUS_SRC_COLOR,[Gc]:r.ONE_MINUS_SRC_ALPHA,[r_]:r.ONE_MINUS_DST_COLOR,[n_]:r.ONE_MINUS_DST_ALPHA,[o_]:r.CONSTANT_COLOR,[a_]:r.ONE_MINUS_CONSTANT_COLOR,[l_]:r.CONSTANT_ALPHA,[c_]:r.ONE_MINUS_CONSTANT_ALPHA};function D(U,ee,$,J,le,ce,Xe,_t,Tt,tt){if(U===rr){g===!0&&(oe(r.BLEND),g=!1);return}if(g===!1&&(he(r.BLEND),g=!0),U!==Ym){if(U!==_||tt!==R){if((p!==Dr||x!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,x=Dr),tt)switch(U){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ls:r.blendFunc(r.ONE,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ls:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,M=null,S=null,C=null,w.set(0,0,0),E=0,_=U,R=tt}return}le=le||ee,ce=ce||$,Xe=Xe||J,(ee!==p||le!==x)&&(r.blendEquationSeparate(Ge[ee],Ge[le]),p=ee,x=le),($!==m||J!==M||ce!==S||Xe!==C)&&(r.blendFuncSeparate(Fe[$],Fe[J],Fe[ce],Fe[Xe]),m=$,M=J,S=ce,C=Xe),(_t.equals(w)===!1||Tt!==E)&&(r.blendColor(_t.r,_t.g,_t.b,Tt),w.copy(_t),E=Tt),_=U,R=!1}function it(U,ee){U.side===ci?oe(r.CULL_FACE):he(r.CULL_FACE);let $=U.side===En;ee&&($=!$),Ue($),U.blending===Or&&U.transparent===!1?D(rr):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ke(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){I!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),I=U)}function Be(U){U!==Vm?(he(r.CULL_FACE),U!==v&&(U===qf?r.cullFace(r.BACK):U===Wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),v=U}function O(U){U!==T&&(K&&r.lineWidth(U),T=U)}function Ke(U,ee,$){U?(he(r.POLYGON_OFFSET_FILL),(L!==ee||k!==$)&&(r.polygonOffset(ee,$),L=ee,k=$)):oe(r.POLYGON_OFFSET_FILL)}function Pe(U){U?he(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function A(U){U===void 0&&(U=r.TEXTURE0+X-1),W!==U&&(r.activeTexture(U),W=U)}function y(U,ee,$){$===void 0&&(W===null?$=r.TEXTURE0+X-1:$=W);let J=se[$];J===void 0&&(J={type:void 0,texture:void 0},se[$]=J),(J.type!==U||J.texture!==ee)&&(W!==$&&(r.activeTexture($),W=$),r.bindTexture(U,ee||Q[U]),J.type=U,J.texture=ee)}function V(){const U=se[W];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){Oe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function ge(U){Ve.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function We(U,ee){let $=l.get(ee);$===void 0&&($=new WeakMap,l.set(ee,$));let J=$.get(U);J===void 0&&(J=r.getUniformBlockIndex(ee,U.name),$.set(U,J))}function Ne(U,ee){const J=l.get(ee).get(U);a.get(ee)!==J&&(r.uniformBlockBinding(ee,J,U.__bindingPointIndex),a.set(ee,J))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,se={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,M=null,x=null,S=null,C=null,w=new ut(0,0,0),E=0,R=!1,I=null,v=null,T=null,L=null,k=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:he,disable:oe,bindFramebuffer:be,drawBuffers:ye,useProgram:He,setBlending:D,setMaterial:it,setFlipSided:Ue,setCullFace:Be,setLineWidth:O,setPolygonOffset:Ke,setScissorTest:Pe,activeTexture:A,bindTexture:y,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:ve,texImage3D:xe,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:ke,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Le,viewport:ge,reset:rt}}function zh(r,e,t,n){const i=IM(n);switch(t){case Nd:return r*e;case Od:return r*e;case Bd:return r*e*2;case zd:return r*e/i.components*i.byteLength;case lf:return r*e/i.components*i.byteLength;case kd:return r*e*2/i.components*i.byteLength;case cf:return r*e*2/i.components*i.byteLength;case Fd:return r*e*3/i.components*i.byteLength;case hi:return r*e*4/i.components*i.byteLength;case uf:return r*e*4/i.components*i.byteLength;case za:case ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(r,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(r,8)*Math.max(e,8)/2;case iu:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Va:case Mu:case Su:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gd:case yu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IM(r){switch(r){case Bi:case Ld:return{byteLength:1,components:1};case Ro:case Id:case Go:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case Xr:case sf:case Ii:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function UM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return h?new OffscreenCanvas(A,y):cl("canvas")}function _(A,y,V){let j=1;const te=Pe(A);if((te.width>V||te.height>V)&&(j=V/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(j*te.width),Me=Math.floor(j*te.height);f===void 0&&(f=g(Z,Me));const ie=y?g(Z,Me):f;return ie.width=Z,ie.height=Me,ie.getContext("2d").drawImage(A,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Me+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Jn&&A.minFilter!==ui}function m(A){r.generateMipmap(A)}function M(A,y,V,j,te=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),y===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),y===r.RGBA){const Me=te?sl:dt.getTransfer(j);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=Me===Et?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(A,y){let V;return A?y===null||y===Xr||y===Fs?V=r.DEPTH24_STENCIL8:y===Ii?V=r.DEPTH32F_STENCIL8:y===Ro&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xr||y===Fs?V=r.DEPTH_COMPONENT24:y===Ii?V=r.DEPTH_COMPONENT32F:y===Ro&&(V=r.DEPTH_COMPONENT16),V}function S(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jn&&A.minFilter!==ui?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),I(y)}function E(A){const y=n.get(A);if(y.__webglInit===void 0)return;const V=A.source,j=d.get(V);if(j){const te=j[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(j).length===0&&d.delete(V)}n.remove(A)}function R(A){const y=n.get(A);r.deleteTexture(y.__webglTexture);const V=A.source,j=d.get(V);delete j[y.__cacheKey],o.memory.textures--}function I(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let te=0;te<y.__webglFramebuffer[j].length;te++)r.deleteFramebuffer(y.__webglFramebuffer[j][te]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=A.textures;for(let j=0,te=V.length;j<te;j++){const Z=n.get(V[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(A)}let v=0;function T(){v=0}function L(){const A=v;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),v+=1,A}function k(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const V=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(V,A,y);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function K(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Ve(V,A,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function H(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Ve(V,A,y);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function Y(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const W={[jc]:r.REPEAT,[Ir]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},se={[Jn]:r.NEAREST,[v_]:r.NEAREST_MIPMAP_NEAREST,[ta]:r.NEAREST_MIPMAP_LINEAR,[ui]:r.LINEAR,[Hl]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},P={[E_]:r.NEVER,[R_]:r.ALWAYS,[T_]:r.LESS,[Hd]:r.LEQUAL,[b_]:r.EQUAL,[C_]:r.GEQUAL,[w_]:r.GREATER,[A_]:r.NOTEQUAL};function ae(A,y){if(y.type===Ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ui||y.magFilter===Hl||y.magFilter===ta||y.magFilter===Ur||y.minFilter===ui||y.minFilter===Hl||y.minFilter===ta||y.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,W[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,W[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,W[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,se[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jn||y.minFilter!==ta&&y.minFilter!==Ur||y.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const j=y.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const Z=k(y);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[Z].usedTimes++;const Me=te[A.__cacheKey];Me!==void 0&&(te[A.__cacheKey].usedTimes--,Me.usedTimes===0&&R(y)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return V}function Ve(A,y,V){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);const te=Oe(A,y),Z=y.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+V);const Me=n.get(Z);if(Z.version!==Me.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const ie=dt.getPrimaries(dt.workingColorSpace),de=y.colorSpace===ji?null:dt.getPrimaries(y.colorSpace),ke=y.colorSpace===ji||ie===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ne=_(y.image,!1,i.maxTextureSize);ne=Ke(y,ne);const ve=s.convert(y.format,y.colorSpace),xe=s.convert(y.type);let Le=M(y.internalFormat,ve,xe,y.colorSpace,y.isVideoTexture);ae(j,y);let ge;const We=y.mipmaps,Ne=y.isVideoTexture!==!0,rt=Me.__version===void 0||te===!0,U=Z.dataReady,ee=S(y,ne);if(y.isDepthTexture)Le=x(y.format===Os,y.type),rt&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,ve,xe,null));else if(y.isDataTexture)if(We.length>0){Ne&&rt&&t.texStorage2D(r.TEXTURE_2D,ee,Le,We[0].width,We[0].height);for(let $=0,J=We.length;$<J;$++)ge=We[$],Ne?U&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,$,Le,ge.width,ge.height,0,ve,xe,ge.data);y.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(r.TEXTURE_2D,ee,Le,ne.width,ne.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,xe,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,ve,xe,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Le,We[0].width,We[0].height,ne.depth);for(let $=0,J=We.length;$<J;$++)if(ge=We[$],y.format!==hi)if(ve!==null)if(Ne){if(U)if(y.layerUpdates.size>0){const le=zh(ge.width,ge.height,y.format,y.type);for(const ce of y.layerUpdates){const Xe=ge.data.subarray(ce*le/ge.data.BYTES_PER_ELEMENT,(ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ce,ge.width,ge.height,1,ve,Xe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,ne.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Le,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,ne.depth,ve,xe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Le,ge.width,ge.height,ne.depth,0,ve,xe,ge.data)}else{Ne&&rt&&t.texStorage2D(r.TEXTURE_2D,ee,Le,We[0].width,We[0].height);for(let $=0,J=We.length;$<J;$++)ge=We[$],y.format!==hi?ve!==null?Ne?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,$,Le,ge.width,ge.height,0,ve,xe,ge.data)}else if(y.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Le,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){const $=zh(ne.width,ne.height,y.format,y.type);for(const J of y.layerUpdates){const le=ne.data.subarray(J*$/ne.data.BYTES_PER_ELEMENT,(J+1)*$/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,xe,le)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(y.isData3DTexture)Ne?(rt&&t.texStorage3D(r.TEXTURE_3D,ee,Le,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(y.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(r.TEXTURE_2D,ee,Le,ne.width,ne.height);else{let $=ne.width,J=ne.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,Le,$,J,0,ve,xe,null),$>>=1,J>>=1}}else if(We.length>0){if(Ne&&rt){const $=Pe(We[0]);t.texStorage2D(r.TEXTURE_2D,ee,Le,$.width,$.height)}for(let $=0,J=We.length;$<J;$++)ge=We[$],Ne?U&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ve,xe,ge):t.texImage2D(r.TEXTURE_2D,$,Le,ve,xe,ge);y.generateMipmaps=!1}else if(Ne){if(rt){const $=Pe(ne);t.texStorage2D(r.TEXTURE_2D,ee,Le,$.width,$.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,xe,ne)}else t.texImage2D(r.TEXTURE_2D,0,Le,ve,xe,ne);p(y)&&m(j),Me.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function q(A,y,V){if(y.image.length!==6)return;const j=Oe(A,y),te=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+V);const Z=n.get(te);if(te.version!==Z.__version||j===!0){t.activeTexture(r.TEXTURE0+V);const Me=dt.getPrimaries(dt.workingColorSpace),ie=y.colorSpace===ji?null:dt.getPrimaries(y.colorSpace),de=y.colorSpace===ji||Me===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!ke&&!ne?ve[J]=_(y.image[J],!0,i.maxCubemapSize):ve[J]=ne?y.image[J].image:y.image[J],ve[J]=Ke(y,ve[J]);const xe=ve[0],Le=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),We=M(y.internalFormat,Le,ge,y.colorSpace),Ne=y.isVideoTexture!==!0,rt=Z.__version===void 0||j===!0,U=te.dataReady;let ee=S(y,xe);ae(r.TEXTURE_CUBE_MAP,y);let $;if(ke){Ne&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,We,xe.width,xe.height);for(let J=0;J<6;J++){$=ve[J].mipmaps;for(let le=0;le<$.length;le++){const ce=$[le];y.format!==hi?Le!==null?Ne?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Le,ge,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,ce.width,ce.height,0,Le,ge,ce.data)}}}else{if($=y.mipmaps,Ne&&rt){$.length>0&&ee++;const J=Pe(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,We,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Ne?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,ge,ve[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ve[J].width,ve[J].height,0,Le,ge,ve[J].data);for(let le=0;le<$.length;le++){const Xe=$[le].image[J].image;Ne?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Xe.width,Xe.height,Le,ge,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Xe.width,Xe.height,0,Le,ge,Xe.data)}}else{Ne?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,ge,ve[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Le,ge,ve[J]);for(let le=0;le<$.length;le++){const ce=$[le];Ne?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Le,ge,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Le,ge,ce.image[J])}}}p(y)&&m(r.TEXTURE_CUBE_MAP),Z.__version=te.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Q(A,y,V,j,te,Z){const Me=s.convert(V.format,V.colorSpace),ie=s.convert(V.type),de=M(V.internalFormat,Me,ie,V.colorSpace);if(!n.get(y).__hasExternalTextures){const ne=Math.max(1,y.width>>Z),ve=Math.max(1,y.height>>Z);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,de,ne,ve,y.depth,0,Me,ie,null):t.texImage2D(te,Z,de,ne,ve,0,Me,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,te,n.get(V).__webglTexture,0,Ue(y)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,te,n.get(V).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(A,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=x(y.stencilBuffer,te),Me=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=Ue(y);Be(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Z,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,A)}else{const j=y.textures;for(let te=0;te<j.length;te++){const Z=j[te],Me=s.convert(Z.format,Z.colorSpace),ie=s.convert(Z.type),de=M(Z.internalFormat,Me,ie,Z.colorSpace),ke=Ue(y);V&&Be(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,de,y.width,y.height):Be(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,de,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,de,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const j=n.get(y.depthTexture).__webglTexture,te=Ue(y);if(y.depthTexture.format===Ts)Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(y.depthTexture.format===Os)Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function be(A){const y=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(y.__webglFramebuffer,A)}else if(V){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=r.createRenderbuffer(),he(y.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),he(y.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(A,y,V){const j=n.get(A);y!==void 0&&Q(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&be(A)}function He(A){const y=A.texture,V=n.get(A),j=n.get(y);A.addEventListener("dispose",w);const te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let de=0;de<y.mipmaps.length;de++)V.__webglFramebuffer[ie][de]=r.createFramebuffer()}else V.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)V.__webglFramebuffer[ie]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Me)for(let ie=0,de=te.length;ie<de;ie++){const ke=n.get(te[ie]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Be(A)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){const de=te[ie];V.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);const ke=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),ve=M(de.internalFormat,ke,ne,de.colorSpace,A.isXRRenderTarget===!0),xe=Ue(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),he(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ae(r.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)Q(V.__webglFramebuffer[ie][de],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(V.__webglFramebuffer[ie],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,de=te.length;ie<de;ie++){const ke=te[ie],ne=n.get(ke);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ae(r.TEXTURE_2D,ke),Q(V.__webglFramebuffer,A,ke,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(ke)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,j.__webglTexture),ae(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)Q(V.__webglFramebuffer[de],A,y,r.COLOR_ATTACHMENT0,ie,de);else Q(V.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,ie,0);p(y)&&m(ie),t.unbindTexture()}A.depthBuffer&&be(A)}function Ge(A){const y=A.textures;for(let V=0,j=y.length;V<j;V++){const te=y[V];if(p(te)){const Z=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Me=n.get(te).__webglTexture;t.bindTexture(Z,Me),m(Z),t.unbindTexture()}}}const Fe=[],D=[];function it(A){if(A.samples>0){if(Be(A)===!1){const y=A.textures,V=A.width,j=A.height;let te=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(A),ie=y.length>1;if(ie)for(let de=0;de<y.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<y.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ke=n.get(y[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,V,j,0,0,V,j,te,r.NEAREST),l===!0&&(Fe.length=0,D.length=0,Fe.push(r.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<y.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ke=n.get(y[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ue(A){return Math.min(i.maxSamples,A.samples)}function Be(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Ke(A,y){const V=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==mr&&V!==ji&&(dt.getTransfer(V)===Et?(j!==hi||te!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=ye,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Be}function NM(r,e){function t(n,i=ji){let s;const o=dt.getTransfer(i);if(n===Bi)return r.UNSIGNED_BYTE;if(n===of)return r.UNSIGNED_SHORT_4_4_4_4;if(n===af)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return r.BYTE;if(n===Id)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===sf)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Ii)return r.FLOAT;if(n===Go)return r.HALF_FLOAT;if(n===Nd)return r.ALPHA;if(n===Fd)return r.RGB;if(n===hi)return r.RGBA;if(n===Od)return r.LUMINANCE;if(n===Bd)return r.LUMINANCE_ALPHA;if(n===Ts)return r.DEPTH_COMPONENT;if(n===Os)return r.DEPTH_STENCIL;if(n===zd)return r.RED;if(n===lf)return r.RED_INTEGER;if(n===kd)return r.RG;if(n===cf)return r.RG_INTEGER;if(n===uf)return r.RGBA_INTEGER;if(n===za||n===ka||n===Ga||n===Ha)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===iu||n===ru)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===su)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ou||n===au||n===lu||n===cu||n===uu||n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ou)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Mu||n===Su)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Va)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===yu||n===Eu||n===Tu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class FM extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zM=`
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

}`;class kM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zt({vertexShader:BM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GM extends $s{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new kM,p=t.getContextAttributes();let m=null,M=null;const x=[],S=[],C=new at;let w=null;const E=new Kn;E.layers.enable(1),E.viewport=new Nt;const R=new Kn;R.layers.enable(2),R.viewport=new Nt;const I=[E,R],v=new FM;v.layers.enable(1),v.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new vc,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new vc,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new vc,x[q]=Q),Q.getHandSpace()};function k(q){const Q=S.indexOf(q.inputSource);if(Q===-1)return;const he=x[Q];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const Q=S[q];Q!==null&&(S[q]=null,x[q].disconnect(Q))}T=null,L=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,i=null,M=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Yr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,he=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Os:Ts,he=p.stencil?Fs:Xr);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Yr(d.textureWidth,d.textureHeight,{format:hi,type:Bi,depthTexture:new tp(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let Q=0;Q<q.removed.length;Q++){const he=q.removed[Q],oe=S.indexOf(he);oe>=0&&(S[oe]=null,x[oe].disconnect(he))}for(let Q=0;Q<q.added.length;Q++){const he=q.added[Q];let oe=S.indexOf(he);if(oe===-1){for(let ye=0;ye<x.length;ye++)if(ye>=S.length){S.push(he),oe=ye;break}else if(S[ye]===null){S[ye]=he,oe=ye;break}if(oe===-1)break}const be=x[oe];be&&be.connect(he)}}const H=new z,Y=new z;function W(q,Q,he){H.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const oe=H.distanceTo(Y),be=Q.projectionMatrix.elements,ye=he.projectionMatrix.elements,He=be[14]/(be[10]-1),Ge=be[14]/(be[10]+1),Fe=(be[9]+1)/be[5],D=(be[9]-1)/be[5],it=(be[8]-1)/be[0],Ue=(ye[8]+1)/ye[0],Be=He*it,O=He*Ue,Ke=oe/(-it+Ue),Pe=Ke*-it;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=He+Ke,y=Ge+Ke,V=Be-Pe,j=O+(oe-Pe),te=Fe*Ge/y*A,Z=D*Ge/y*A;q.projectionMatrix.makePerspective(V,j,te,Z,A,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,he=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(he=_.depthFar)),v.near=R.near=E.near=Q,v.far=R.far=E.far=he,(T!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,L=v.far);const oe=q.parent,be=v.cameras;se(v,oe);for(let ye=0;ye<be.length;ye++)se(be[ye],oe);be.length===2?W(v,E,R):v.projectionMatrix.copy(E.projectionMatrix),P(q,v,oe)};function P(q,Q,he){he===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ae=null;function Oe(q,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let oe=!1;he.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let ye=0;ye<he.length;ye++){const He=he[ye];let Ge=null;if(h!==null)Ge=h.getViewport(He);else{const D=f.getViewSubImage(d,He);Ge=D.viewport,ye===0&&(e.setRenderTargetTextures(M,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(M))}let Fe=I[ye];Fe===void 0&&(Fe=new Kn,Fe.layers.enable(ye),Fe.viewport=new Nt,I[ye]=Fe),Fe.matrix.fromArray(He.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(He.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ye===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Fe)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const ye=f.getDepthInformation(he[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,i.renderState)}}for(let he=0;he<x.length;he++){const oe=S[he],be=x[he];oe!==null&&be!==void 0&&be.update(oe,Q,c||o)}ae&&ae(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ve=new ep;Ve.setAnimationLoop(Oe),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const yr=new zi,HM=new Pt;function VM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,S=M.envMapRotation;x&&(p.envMap.value=x,yr.copy(S),yr.x*=-1,yr.y*=-1,yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),p.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(yr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(M,C);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const x=f();M.__bindingPointIndex=x;const S=r.createBuffer(),C=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],S=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=S.length;w<E;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,v=R.length;I<v;I++){const T=R[I];if(h(T,w,I,C)===!0){const L=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let K=0;K<k.length;K++){const H=k[K],Y=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,L+X,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,x,S,C){const w=M.value,E=x+"_"+S;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const R=C[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(M){const x=M.uniforms;let S=0;const C=16;for(let E=0,R=x.length;E<R;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=I.length;v<T;v++){const L=I[v],k=Array.isArray(L.value)?L.value:[L.value];for(let X=0,K=k.length;X<K;X++){const H=k[X],Y=_(H),W=S%C,se=W%Y.boundary,P=W+se;S+=se,P!==0&&C-P<Y.storage&&(S+=C-P),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Y.storage}}}const w=S%C;return w>0&&(S+=C-w),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class XM{constructor(e={}){const{canvas:t=D_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,E=null,R=-1,I=null;const v=new Nt,T=new Nt;let L=null;const k=new ut(0);let X=0,K=t.width,H=t.height,Y=1,W=null,se=null;const P=new Nt(0,0,K,H),ae=new Nt(0,0,K,H);let Oe=!1;const Ve=new Qd;let q=!1,Q=!1;const he=new Pt,oe=new Pt,be=new z,ye=new Nt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Fe(){return E===null?Y:1}let D=n;function it(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rf}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const F="webgl2";if(D=it(F,b),D===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Be,O,Ke,Pe,A,y,V,j,te,Z,Me,ie,de,ke,ne,ve,xe,Le,ge,We,Ne,rt,U;function ee(){Ue=new Zv(D),Ue.init(),Ne=new NM(D,Ue),Be=new Vv(D,Ue,e,Ne),O=new LM(D),Be.reverseDepthBuffer&&O.buffers.depth.setReversed(!0),Ke=new Qv(D),Pe=new gM,A=new UM(D,Ue,O,Pe,Be,Ne,Ke),y=new Xv(x),V=new Kv(x),j=new sg(D),rt=new Gv(D,j),te=new jv(D,j,Ke,rt),Z=new tx(D,te,j,Ke),Le=new ex(D,Be,A),ne=new Wv(Pe),Me=new _M(x,y,V,Ue,Be,rt,ne),ie=new VM(x,Pe),de=new xM,ke=new bM(Ue),xe=new kv(x,y,V,O,Z,d,l),ve=new PM(x,Z,Be),U=new WM(D,Ke,Be,O),ge=new Hv(D,Ue,Ke),We=new Jv(D,Ue,Ke),Ke.programs=Me.programs,x.capabilities=Be,x.extensions=Ue,x.properties=Pe,x.renderLists=de,x.shadowMap=ve,x.state=O,x.info=Ke}ee();const $=new GM(x,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,F,B=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=F,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),B===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(K*Y,H*Y).floor()},this.setDrawingBufferSize=function(b,F,B){K=b,H=F,Y=B,t.width=Math.floor(b*B),t.height=Math.floor(F*B),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,F,B,G){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,F,B,G),O.viewport(v.copy(P).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,F,B,G){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,F,B,G),O.scissor(T.copy(ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){O.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(b=!0,F=!0,B=!0){let G=0;if(b){let N=!1;if(E!==null){const re=E.texture.format;N=re===uf||re===cf||re===lf}if(N){const re=E.texture.type,_e=re===Bi||re===Xr||re===Ro||re===Fs||re===of||re===af,fe=xe.getClearColor(),ue=xe.getClearAlpha(),we=fe.r,Ie=fe.g,Te=fe.b;_e?(h[0]=we,h[1]=Ie,h[2]=Te,h[3]=ue,D.clearBufferuiv(D.COLOR,0,h)):(g[0]=we,g[1]=Ie,g[2]=Te,g[3]=ue,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),ke.dispose(),Pe.dispose(),y.dispose(),V.dispose(),Z.dispose(),rt.dispose(),U.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",lt),$.removeEventListener("sessionend",pe),De.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Ke.autoReset,F=ve.enabled,B=ve.autoUpdate,G=ve.needsUpdate,N=ve.type;ee(),Ke.autoReset=b,ve.enabled=F,ve.autoUpdate=B,ve.needsUpdate=G,ve.type=N}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const F=b.target;F.removeEventListener("dispose",Xe),_t(F)}function _t(b){Tt(b),Pe.remove(b)}function Tt(b){const F=Pe.get(b).programs;F!==void 0&&(F.forEach(function(B){Me.releaseProgram(B)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,B,G,N,re){F===null&&(F=He);const _e=N.isMesh&&N.matrixWorld.determinant()<0,fe=pt(b,F,B,G,N);O.setMaterial(G,_e);let ue=B.index,we=1;if(G.wireframe===!0){if(ue=te.getWireframeAttribute(B),ue===void 0)return;we=2}const Ie=B.drawRange,Te=B.attributes.position;let st=Ie.start*we,nt=(Ie.start+Ie.count)*we;re!==null&&(st=Math.max(st,re.start*we),nt=Math.min(nt,(re.start+re.count)*we)),ue!==null?(st=Math.max(st,0),nt=Math.min(nt,ue.count)):Te!=null&&(st=Math.max(st,0),nt=Math.min(nt,Te.count));const mt=nt-st;if(mt<0||mt===1/0)return;rt.setup(N,G,fe,B,ue);let Xt,Ze=ge;if(ue!==null&&(Xt=j.get(ue),Ze=We,Ze.setIndex(Xt)),N.isMesh)G.wireframe===!0?(O.setLineWidth(G.wireframeLinewidth*Fe()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(N.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),O.setLineWidth(Re*Fe()),N.isLineSegments?Ze.setMode(D.LINES):N.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else N.isPoints?Ze.setMode(D.POINTS):N.isSprite&&Ze.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,Jt=N._multiDrawCounts,ft=N._multiDrawCount,ri=ue?j.get(ue).bytesPerElement:1,es=Pe.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<ft;Ln++)es.setValue(D,"_gl_DrawID",Ln),Ze.render(Re[Ln]/ri,Jt[Ln])}else if(N.isInstancedMesh)Ze.renderInstances(st,mt,N.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jt=Math.min(B.instanceCount,Re);Ze.renderInstances(st,mt,Jt)}else Ze.render(st,mt)};function tt(b,F,B){b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Lt(b,F,B),b.side=ur,b.needsUpdate=!0,Lt(b,F,B),b.side=ci):Lt(b,F,B)}this.compile=function(b,F,B=null){B===null&&(B=b),p=ke.get(B),p.init(F),M.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let _e=0;_e<re.length;_e++){const fe=re[_e];tt(fe,B,N),G.add(fe)}else tt(re,B,N),G.add(re)}),M.pop(),p=null,G},this.compileAsync=function(b,F,B=null){const G=this.compile(b,F,B);return new Promise(N=>{function re(){if(G.forEach(function(_e){Pe.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){N(b);return}setTimeout(re,10)}Ue.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ae=null;function Ee(b){Ae&&Ae(b)}function lt(){De.stop()}function pe(){De.start()}const De=new ep;De.setAnimationLoop(Ee),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(b){Ae=b,$.setAnimationLoop(b),b===null?De.stop():De.start()},$.addEventListener("sessionstart",lt),$.addEventListener("sessionend",pe),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,E),p=ke.get(b,M.length),p.init(F),M.push(p),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,q=ne.init(this.clippingPlanes,Q),_=de.get(b,m.length),_.init(),m.push(_),$.enabled===!0&&$.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Ce(re,F,-1/0,x.sortObjects)}Ce(b,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,se),Ge=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ge&&xe.addToRenderList(_,b),this.info.render.frame++,q===!0&&ne.beginShadows();const B=p.state.shadowsArray;ve.render(B,b,F),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(N.length>0)for(let _e=0,fe=re.length;_e<fe;_e++){const ue=re[_e];Dt(G,N,b,ue)}Ge&&xe.render(b);for(let _e=0,fe=re.length;_e<fe;_e++){const ue=re[_e];ze(_,b,ue,ue.viewport)}}else N.length>0&&Dt(G,N,b,F),Ge&&xe.render(b),ze(_,b,F);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,F),rt.resetDefaultState(),R=-1,I=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ce(b,F,B,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ve.intersectsSprite(b)){G&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);const _e=Z.update(b),fe=b.material;fe.visible&&_.push(b,_e,fe,B,ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ve.intersectsObject(b))){const _e=Z.update(b),fe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ye.copy(_e.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(oe)),Array.isArray(fe)){const ue=_e.groups;for(let we=0,Ie=ue.length;we<Ie;we++){const Te=ue[we],st=fe[Te.materialIndex];st&&st.visible&&_.push(b,_e,st,B,ye.z,Te)}}else fe.visible&&_.push(b,_e,fe,B,ye.z,null)}}const re=b.children;for(let _e=0,fe=re.length;_e<fe;_e++)Ce(re[_e],F,B,G)}function ze(b,F,B,G){const N=b.opaque,re=b.transmissive,_e=b.transparent;p.setupLightsView(B),q===!0&&ne.setGlobalState(x.clippingPlanes,B),G&&O.viewport(v.copy(G)),N.length>0&&Ye(N,F,B),re.length>0&&Ye(re,F,B),_e.length>0&&Ye(_e,F,B),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Dt(b,F,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Yr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Go:Bi,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],_e=G.viewport||v;re.setSize(_e.z,_e.w);const fe=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(k),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&xe.render(B);const ue=x.toneMapping;x.toneMapping=sr;const we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&ne.setGlobalState(x.clippingPlanes,G),Ye(b,B,G),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Te=0,st=F.length;Te<st;Te++){const nt=F[Te],mt=nt.object,Xt=nt.geometry,Ze=nt.material,Re=nt.group;if(Ze.side===ci&&mt.layers.test(G.layers)){const Jt=Ze.side;Ze.side=En,Ze.needsUpdate=!0,bt(mt,B,G,Xt,Ze,Re),Ze.side=Jt,Ze.needsUpdate=!0,Ie=!0}}Ie===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}x.setRenderTarget(fe),x.setClearColor(k,X),we!==void 0&&(G.viewport=we),x.toneMapping=ue}function Ye(b,F,B){const G=F.isScene===!0?F.overrideMaterial:null;for(let N=0,re=b.length;N<re;N++){const _e=b[N],fe=_e.object,ue=_e.geometry,we=G===null?_e.material:G,Ie=_e.group;fe.layers.test(B.layers)&&bt(fe,F,B,ue,we,Ie)}}function bt(b,F,B,G,N,re){b.onBeforeRender(x,F,B,G,N,re),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,F,B,G,b,re),N.transparent===!0&&N.side===ci&&N.forceSinglePass===!1?(N.side=En,N.needsUpdate=!0,x.renderBufferDirect(B,F,G,N,b,re),N.side=ur,N.needsUpdate=!0,x.renderBufferDirect(B,F,G,N,b,re),N.side=ci):x.renderBufferDirect(B,F,G,N,b,re),b.onAfterRender(x,F,B,G,N,re)}function Lt(b,F,B){F.isScene!==!0&&(F=He);const G=Pe.get(b),N=p.state.lights,re=p.state.shadowsArray,_e=N.state.version,fe=Me.getParameters(b,N.state,re,F,B),ue=Me.getProgramCacheKey(fe);let we=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",Xe),we=new Map,G.programs=we);let Ie=we.get(ue);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===_e)return gt(b,fe),Ie}else fe.uniforms=Me.getUniforms(b),b.onBeforeCompile(fe,x),Ie=Me.acquireProgram(fe,ue),we.set(ue,Ie),G.uniforms=fe.uniforms;const Te=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=ne.uniform),gt(b,fe),G.needsLights=yt(b),G.lightsStateVersion=_e,G.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function St(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Xa.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function gt(b,F){const B=Pe.get(b);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function pt(b,F,B,G,N){F.isScene!==!0&&(F=He),A.resetTextureUnits();const re=F.fog,_e=G.isMeshStandardMaterial?F.environment:null,fe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:mr,ue=(G.isMeshStandardMaterial?V:y).get(G.envMap||_e),we=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!B.morphAttributes.position,st=!!B.morphAttributes.normal,nt=!!B.morphAttributes.color;let mt=sr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(mt=x.toneMapping);const Xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=Xt!==void 0?Xt.length:0,Re=Pe.get(G),Jt=p.state.lights;if(q===!0&&(Q===!0||b!==I)){const Yn=b===I&&G.id===R;ne.setState(G,b,Yn)}let ft=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Jt.state.version||Re.outputColorSpace!==fe||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==ue||G.fog===!0&&Re.fog!==re||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==we||Re.vertexTangents!==Ie||Re.morphTargets!==Te||Re.morphNormals!==st||Re.morphColors!==nt||Re.toneMapping!==mt||Re.morphTargetsCount!==Ze)&&(ft=!0):(ft=!0,Re.__version=G.version);let ri=Re.currentProgram;ft===!0&&(ri=Lt(G,F,N));let es=!1,Ln=!1,zl=!1;const It=ri.getUniforms(),Vi=Re.uniforms;if(O.useProgram(ri.program)&&(es=!0,Ln=!0,zl=!0),G.id!==R&&(R=G.id,Ln=!0),es||I!==b){Be.reverseDepthBuffer?(he.copy(b.projectionMatrix),I_(he),U_(he),It.setValue(D,"projectionMatrix",he)):It.setValue(D,"projectionMatrix",b.projectionMatrix),It.setValue(D,"viewMatrix",b.matrixWorldInverse);const Yn=It.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,be.setFromMatrixPosition(b.matrixWorld)),Be.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&It.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Ln=!0,zl=!0)}if(N.isSkinnedMesh){It.setOptional(D,N,"bindMatrix"),It.setOptional(D,N,"bindMatrixInverse");const Yn=N.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),It.setValue(D,"boneTexture",Yn.boneTexture,A))}N.isBatchedMesh&&(It.setOptional(D,N,"batchingTexture"),It.setValue(D,"batchingTexture",N._matricesTexture,A),It.setOptional(D,N,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",N._indirectTexture,A),It.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",N._colorsTexture,A));const kl=B.morphAttributes;if((kl.position!==void 0||kl.normal!==void 0||kl.color!==void 0)&&Le.update(N,B,ri),(Ln||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,It.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vi.envMap.value=ue,Vi.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Vi.envMapIntensity.value=F.environmentIntensity),Ln&&(It.setValue(D,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Dn(Vi,zl),re&&G.fog===!0&&ie.refreshFogUniforms(Vi,re),ie.refreshMaterialUniforms(Vi,G,Y,H,p.state.transmissionRenderTarget[b.id]),Xa.upload(D,St(Re),Vi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xa.upload(D,St(Re),Vi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&It.setValue(D,"center",N.center),It.setValue(D,"modelViewMatrix",N.modelViewMatrix),It.setValue(D,"normalMatrix",N.normalMatrix),It.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Yn=G.uniformsGroups;for(let Gl=0,Hm=Yn.length;Gl<Hm;Gl++){const Yf=Yn[Gl];U.update(Yf,ri),U.bind(Yf,ri)}}return ri}function Dn(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function yt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,F,B){Pe.get(b.texture).__webglTexture=F,Pe.get(b.depthTexture).__webglTexture=B;const G=Pe.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const B=Pe.get(b);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,B=0){E=b,C=F,w=B;let G=!0,N=null,re=!1,_e=!1;if(b){const ue=Pe.get(b);if(ue.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ue.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(ue.__hasExternalTextures)A.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Te=b.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&Pe.has(Te)&&(b.width!==Te.image.width||b.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const Ie=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?N=Ie[F][B]:N=Ie[F],re=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?N=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[B]:N=Ie,v.copy(b.viewport),T.copy(b.scissor),L=b.scissorTest}else v.copy(P).multiplyScalar(Y).floor(),T.copy(ae).multiplyScalar(Y).floor(),L=Oe;if(O.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&O.drawBuffers(b,N),O.viewport(v),O.scissor(T),O.setScissorTest(L),re){const ue=Pe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,B)}else if(_e){const ue=Pe.get(b.texture),we=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.__webglTexture,B||0,we)}R=-1},this.readRenderTargetPixels=function(b,F,B,G,N,re,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(fe=fe[_e]),fe){O.bindFramebuffer(D.FRAMEBUFFER,fe);try{const ue=b.texture,we=ue.format,Ie=ue.type;if(!Be.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&B>=0&&B<=b.height-N&&D.readPixels(F,B,G,N,Ne.convert(we),Ne.convert(Ie),re)}finally{const ue=E!==null?Pe.get(E).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(b,F,B,G,N,re,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(fe=fe[_e]),fe){const ue=b.texture,we=ue.format,Ie=ue.type;if(!Be.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-G&&B>=0&&B<=b.height-N){O.bindFramebuffer(D.FRAMEBUFFER,fe);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(F,B,G,N,Ne.convert(we),Ne.convert(Ie),0);const st=E!==null?Pe.get(E).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,st);const nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await L_(D,nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Te),D.deleteSync(nt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,B=0){b.isTexture!==!0&&(Wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(b.image.width*G),re=Math.floor(b.image.height*G),_e=F!==null?F.x:0,fe=F!==null?F.y:0;A.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,_e,fe,N,re),O.unbindTexture()},this.copyTextureToTexture=function(b,F,B=null,G=null,N=0){b.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],F=arguments[2],N=arguments[3]||0,B=null);let re,_e,fe,ue,we,Ie;B!==null?(re=B.max.x-B.min.x,_e=B.max.y-B.min.y,fe=B.min.x,ue=B.min.y):(re=b.image.width,_e=b.image.height,fe=0,ue=0),G!==null?(we=G.x,Ie=G.y):(we=0,Ie=0);const Te=Ne.convert(F.format),st=Ne.convert(F.type);A.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),Jt=b.isCompressedTexture?b.mipmaps[N]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ue),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,we,Ie,re,_e,Te,st,Jt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,we,Ie,Jt.width,Jt.height,Te,Jt.data):D.texSubImage2D(D.TEXTURE_2D,N,we,Ie,re,_e,Te,st,Jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),N===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(b,F,B=null,G=null,N=0){b.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,b=arguments[2],F=arguments[3],N=arguments[4]||0);let re,_e,fe,ue,we,Ie,Te,st,nt;const mt=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(re=B.max.x-B.min.x,_e=B.max.y-B.min.y,fe=B.max.z-B.min.z,ue=B.min.x,we=B.min.y,Ie=B.min.z):(re=mt.width,_e=mt.height,fe=mt.depth,ue=0,we=0,Ie=0),G!==null?(Te=G.x,st=G.y,nt=G.z):(Te=0,st=0,nt=0);const Xt=Ne.convert(F.format),Ze=Ne.convert(F.type);let Re;if(F.isData3DTexture)A.setTexture3D(F,0),Re=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)A.setTexture2DArray(F,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Jt=D.getParameter(D.UNPACK_ROW_LENGTH),ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),es=D.getParameter(D.UNPACK_SKIP_ROWS),Ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,we),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Re,N,Te,st,nt,re,_e,fe,Xt,Ze,mt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,N,Te,st,nt,re,_e,fe,Xt,mt.data):D.texSubImage3D(Re,N,Te,st,nt,re,_e,fe,Xt,Ze,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,es),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),N===0&&F.generateMipmaps&&D.generateMipmap(Re),O.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,O.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ff?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Ll?"display-p3":"srgb"}}class YM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qM extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ul=new z,fl=new z,kh=new Pt,ro=new hf,ya=new Xo,xc=new z,Gh=new z;class $M extends xn{constructor(e=new Pn,t=new qM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ul.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ul.distanceTo(fl);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;kh.copy(i).invert(),ro.copy(e.ray).applyMatrix4(kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=u.getX(_),M=u.getX(_+1),x=Ea(this,e,ro,l,m,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=Ea(this,e,ro,l,_,p);m&&t.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=Ea(this,e,ro,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Ea(this,e,ro,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ea(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(ul.fromBufferAttribute(o,i),fl.fromBufferAttribute(o,s),t.distanceSqToSegment(ul,fl,xc,Gh)>n)return;xc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(xc);if(!(l<e.near||l>e.far))return{distance:l,point:Gh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Hh=new z,Vh=new z;class KM extends $M{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hh.distanceTo(Vh);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new Pt,Au=new hf,Ta=new Xo,ba=new z;class op extends xn{constructor(e=new Pn,t=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Wh.copy(i).invert(),Au.copy(e.ray).applyMatrix4(Wh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);ba.fromBufferAttribute(f,p),Xh(ba,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)ba.fromBufferAttribute(f,g),Xh(ba,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xh(r,e,t,n,i,s,o){const a=Au.distanceSqToPoint(r);if(a<t){const l=new z;Au.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class qo extends Pn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new z,S=new z,C=new z;for(let w=0;w<t.length;w+=3)h(t[w+0],x),h(t[w+1],S),h(t[w+2],C),l(x,S,C,M)}function l(M,x,S,C){const w=C+1,E=[];for(let R=0;R<=w;R++){E[R]=[];const I=M.clone().lerp(S,R/w),v=x.clone().lerp(S,R/w),T=w-R;for(let L=0;L<=T;L++)L===0&&R===w?E[R][L]=I:E[R][L]=I.clone().lerp(v,L/T)}for(let R=0;R<w;R++)for(let I=0;I<2*(w-R)-1;I++){const v=Math.floor(I/2);I%2===0?(d(E[R][v+1]),d(E[R+1][v]),d(E[R][v])):(d(E[R][v+1]),d(E[R+1][v+1]),d(E[R+1][v]))}}function c(M){const x=new z;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(M),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const M=new z;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const S=p(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;o.push(S,1-C)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const x=o[M+0],S=o[M+2],C=o[M+4],w=Math.max(x,S,C),E=Math.min(x,S,C);w>.9&&E<.1&&(x<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function h(M,x){const S=M*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const M=new z,x=new z,S=new z,C=new z,w=new at,E=new at,R=new at;for(let I=0,v=0;I<s.length;I+=9,v+=6){M.set(s[I+0],s[I+1],s[I+2]),x.set(s[I+3],s[I+4],s[I+5]),S.set(s[I+6],s[I+7],s[I+8]),w.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),C.copy(M).add(x).add(S).divideScalar(3);const T=p(C);_(w,v+0,M,T),_(E,v+2,x,T),_(R,v+4,S,T)}}function _(M,x,S,C){C<0&&M.x===1&&(o[x]=M.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.vertices,e.indices,e.radius,e.details)}}class mf extends qo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mf(e.radius,e.detail)}}class Ul extends qo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ul(e.radius,e.detail)}}class _f extends qo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _f(e.radius,e.detail)}}class gf extends Pn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,d=new z,h=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(i+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+w*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(w+S,1-x),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const x=u[m][M+1],S=u[m][M],C=u[m+1][M],w=u[m+1][M+1];(m!==0||o>0)&&h.push(x,S,w),(m!==n-1||l<Math.PI)&&h.push(S,C,w)}this.setIndex(h),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function Pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ap(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zs={duration:.5,overwrite:!1,delay:0},vf,nn,wt,Qn=1e8,xt=1/Qn,Cu=Math.PI*2,jM=Cu/4,JM=0,lp=Math.sqrt,QM=Math.cos,eS=Math.sin,jt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},ki=function(e){return typeof e=="number"},xf=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Mf=function(){return typeof window<"u"},wa=function(e){return Rt(e)||jt(e)},cp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,Ru=/(?:-?\.?\d|\.)+/gi,up=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fp=/[+-]=-?[.\d]+/,hp=/[^,'"\[\]\s]+/gi,tS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,pi,Pu,Sf,Wn={},hl={},dp,pp=function(e){return(hl=ks(e,Wn))&&Rn},yf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Po=function(e,t){return!t&&console.warn(e)},mp=function(e,t){return e&&(Wn[e]=t)&&hl&&(hl[e]=t)||Wn},Do=function(){return 0},nS={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},iS={suppressEvents:!0},Ef={},or=[],Du={},_p,Bn={},Sc={},Yh=30,qa=[],Tf="",bf=function(e){var t=e[0],n,i;if(yi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(t););n=qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kp(e[i],n)))||e.splice(i,1);return e},Br=function(e){return e._gsap||bf(ei(e))[0]._gsap},gp=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():xf(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},ws=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},dl=function(){var e=or.length,t=or.slice(0),n,i;for(Du={},or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wf=function(e){return!!(e._initted||e._startAt||e.add)},vp=function(e,t,n,i){or.length&&!nn&&dl(),e.render(t,n,!!(nn&&t<0&&wf(e))),or.length&&!nn&&dl()},xp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hp).length<2?t:jt(e)?e.trim():e},Mp=function(e){return e},Xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},sS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ks=function(e,t){for(var n in t)e[n]=t[n];return e},qh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},go=function(e){var t=e.parent||At,n=e.keyframes?sS(un(e.keyframes)):Xn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Sp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Nl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},aS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lu=function(e,t,n,i){return e._startAt&&(nn?e._startAt.revert(Ya):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lS=function r(e){return!e||e._ts&&r(e.parent)},$h=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},ml=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fl=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},Ol=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fl(e),n._dirty||zr(n,e)),e},yp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ml(e.rawTime(),t),(!t._dur||$o(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},gi=function(e,t,n,i){return t.parent&&fr(t),t._start=kt((ki(n)?n:n||e!==At?$n(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sp(e,t,"_first","_last",e._sort?"_start":0),Iu(t)||(e._recent=t),i||yp(e,t),e._ts<0&&Ol(e,e._tTime),e},Ep=function(e,t){return(Wn.ScrollTrigger||yf("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Tp=function(e,t,n,i,s){if(Cf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_p!==kn.frame)return or.push(e),e._lazy=[s,i],1},cS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Iu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},uS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&cS(e)&&!(!e._initted&&Iu(e))||(e._ts<0||e._dp._ts<0)&&!Iu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=$o(0,e._tDur,t),u=Gs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Gs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Tp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Lu(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fr(e,1),!n&&!nn&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ol(e,e._tTime=e._tDur*a),e.parent&&Fl(e),n||zr(e.parent,e),e},Kh=function(e){return e instanceof gn?zr(e):Hs(e,e._dur)},hS={_start:0,endTime:Do,totalDuration:Do},$n=function r(e,t,n){var i=e.labels,s=e._recent||hS,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},vo=function(e,t,n){var i=ki(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},_r=function(e,t){return e||e===0?t(e):t},$o=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!jt(e)||!(t=tS.exec(e))?"":t[1]},dS=function(e,t,n){return _r(n,function(i){return $o(e,t,i)})},Uu=[].slice,bp=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==pi},pS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||bp(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):jt(e)&&!n&&(Pu||!Vs())?Uu.call((t||Sf).querySelectorAll(e),0):un(e)?pS(e,n):bp(e)?Uu.call(e,0):e?[e]:[]},Nu=function(e){return e=ei(e)[0]||Po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Po("Invalid scope")||Sf.createElement("div"):e)}},wp=function(e){return e.sort(function(){return .5-Math.random()})},Ap=function(e){if(Rt(e))return e;var t=yi(e)?e:{each:e},n=kr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return jt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,p=o[_],m,M,x,S,C,w,E,R,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!I){for(E=-Qn;E<(E=g[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(p=o[_]=[],m=l?Math.min(I,_)*u-.5:i%I,M=I===Qn?0:l?_*f/I-.5:i/I|0,E=0,R=Qn,w=0;w<_;w++)x=w%I-m,S=M-(w/I|0),p[w]=C=c?Math.abs(c==="y"?S:x):lp(x*x+S*S),C>E&&(E=C),C<R&&(R=C);i==="random"&&wp(p),p.max=E-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:c?c==="y"?_/I:I:Math.max(I,_/I))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=ln(t.amount||t.each)||0,n=n&&_<0?Op(n):n}return _=(p[d]-p.min)/p.max||0,kt(p.b+(n?n(_):_)*p.v)+p.u}},Fu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ki(n)?0:ln(n))}},Cp=function(e,t){var n=un(e),i,s;return!n&&yi(e)&&(i=n=e.radius||Qn,e.values?(e=ei(e.values),(s=!ki(e[0]))&&(i*=i)):e=Fu(e.increment)),_r(t,n?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||ki(o)?u:u+ln(o)}:Fu(e))},Rp=function(e,t,n,i){return _r(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},mS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},_S=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},gS=function(e,t,n){return Dp(e,t,0,1,n)},Pp=function(e,t,n){return _r(n,function(i){return e[~~t(i)]})},vS=function r(e,t,n){var i=t-e;return un(e)?Pp(e,r(0,e.length),t):_r(n,function(s){return(i+(s-e)%i)%i+e})},xS=function r(e,t,n){var i=t-e,s=i*2;return un(e)?Pp(e,r(0,e.length-1),t):_r(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Lo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?hp:Ru),n+=e.substr(t,i-t)+Rp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dp=function(e,t,n,i,s){var o=t-e,a=i-n;return _r(s,function(l){return n+((l-e)/o*a||0)})},MS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=jt(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=ks(un(e)?[]:{},e));if(!u){for(l in t)Af.call(a,e,l,"get",t[l]);s=function(g){return Df(g,a)||(o?e.p:e)}}}return _r(n,s)},Zh=function(e,t,n){var i=e.labels,s=Qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],o=wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&or.length&&dl(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},co=function(e){return fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Hn(e,"onInterrupt"),e},ys,Lp=[],Ip=function(e){if(e)if(e=!e.name&&e.default||e,Mf()||e.headless){var t=e.name,n=Rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Do,render:Df,add:Af,kill:FS,modifier:NS,rawVars:0},o={targetTest:0,get:0,getSetter:Pf,aliases:{},register:0};if(Vs(),e!==i){if(Bn[t])return;Xn(i,Xn(pl(e,s),o)),ks(i.prototype,ks(s,pl(e,o))),Bn[i.prop=t]=i,e.targetTest&&(qa.push(i),Ef[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mp(t,i),e.register&&e.register(Rn,i,An)}else Lp.push(e)},vt=255,uo={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},yc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},Up=function(e,t,n){var i=e?ki(e)?[e>>16,e>>8&vt,e&vt]:0:uo.black,s,o,a,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uo[e])i=uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ru),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=yc(l+1/3,s,o),i[1]=yc(l,s,o),i[2]=yc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(up),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ru)||uo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/vt,o=i[1]/vt,a=i[2]/vt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Np=function(e){var t=[],n=[],i=-1;return e.split(ar).forEach(function(s){var o=s.match(Ss)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},jh=function(e,t,n){var i="",s=(e+i).match(ar),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Up(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Np(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ar,"1").split(Ss),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ar),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),SS=/hsl[a]?\(/,Fp=function(e){var t=e.join(" "),n;if(ar.lastIndex=0,ar.test(t))return n=SS.test(t),e[1]=jh(e[1],n),e[0]=jh(e[0],n,Np(e[1])),!0},Io,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(p){var m=r()-i,M=p===!0,x,S,C,w;if((m>e||m<0)&&(n+=m-t),i+=m,C=i-n,x=C-o,(x>0||M)&&(w=++f.frame,d=C-f.time*1e3,f.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(_)),S)for(h=0;h<a.length;h++)a[h](C,d,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){dp&&(!Pu&&Mf()&&(pi=Pu=window,Sf=pi.document||{},Wn.gsap=Rn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Rn.version),pp(hl||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Lp.forEach(Ip)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Io=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Io=0,c=Do},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,M){var x=m?function(S,C,w,E){p(S,C,w,E),f.remove(x)}:p;return f.remove(p),a[M?"unshift":"push"](x),Vs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},f}(),Vs=function(){return!Io&&kn.wake()},ot={},yS=/^[\d.\-M][\d.\-,\s]/,ES=/["']/g,TS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ES,"").trim():+c,i=l.substr(a+1).trim();return t},bS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wS=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[TS(t[1])]:bS(e).split(",").map(xp)):ot._CE&&yS.test(e)?ot._CE("",e):n},Op=function(e){return function(t){return 1-e(1-t)}},Bp=function r(e,t){for(var n=e._first,i;n;)n instanceof gn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},kr=function(e,t){return e&&(Rt(e)?e:ot[e]||wS(e))||t},Jr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){ot[a]=Wn[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},zp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ec=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Cu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*eS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:zp(a);return s=Cu/s,l.config=function(c,u){return r(e,c,u)},l},Tc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zp(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Jr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Jr("Elastic",Ec("in"),Ec("out"),Ec());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(lp(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-QM(r*jM)+1});Jr("Back",Tc("in"),Tc("out"),Tc());ot.SteppedEase=ot.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xt;return function(a){return((i*$o(0,o,a)|0)+s)*n}}};zs.ease=ot["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Tf+=r+","+r+"Params,"});var kp=function(e,t){this.id=JM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gp,this.set=t?t.getSetter:Pf},Uo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Io||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ol(this,n),!s._dp||s.parent||yp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$h(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$h(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ml(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime($o(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fl(this),aS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ml(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=iS);var i=nn;return nn=n,wf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($n(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Rt(n)?n:Mp,a=function(){var c=i.then;i.then=null,Rt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){co(this)},r}();Xn(Uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var gn=function(r){ap(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),At&&gi(n.parent||At,Pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ep(Pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return vo(0,arguments,this),this},t.from=function(i,s,o){return vo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return vo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,go(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,$n(this,o),1),this},t.call=function(i,s,o){return gi(this,zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new zt(i,o,$n(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,go(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,go(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,p,m,M,x,S,C,w,E;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,x=this._ts,m=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=kt(u%p),u===l?(_=this._repeat,d=c):(C=kt(u/p),_=~~C,_&&_===C&&(d=c,_--),d>c&&(d=c)),C=Gs(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),w&&_&1&&(d=c-d,E=1),_!==C&&!this._lock){var R=w&&C&1,I=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:kt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Bp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=fS(this,kt(a),kt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!C&&(Hn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-xt);break}}h=g}else{h=this._last;for(var v=i<0?i:d;h;){if(g=h._prev,(h._act||v<=h._end)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(v-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(v-h._start)*h._ts,s,o||nn&&wf(h)),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=v?-xt:xt);break}}h=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-xt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Fl(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ki(s)||(s=$n(this,s,i)),!(i instanceof Uo)){if(un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Rt(i))i=zt.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Rt(i)?this.killTweensOf(i):(i.parent===this&&Nl(this,i),i===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=$n(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=zt.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,gi(this,a,$n(this,i))},t.removePause=function(i){var s=this._first;for(i=$n(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ji!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=ki(s),u;l;)l instanceof zt?rS(l._targets,a)&&(c?(!Ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=$n(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=zt.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Hs(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xn({startAt:{time:$n(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Zh(this,$n(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Zh(this,$n(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===At&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(At._ts&&(vp(At,ml(i,At)),_p=kn.frame),kn.frame>=Yh){Yh+=Vn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Vn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(Uo);Xn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var AS=function(e,t,n,i,s,o,a){var l=new An(this._pt,e,t,0,1,Yp,null,s),c=0,u=0,f,d,h,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Lo(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(Mc)||[];f=Mc.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ws(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(fp.test(i)||m)&&(l.e=0),this._pt=l,l},Af=function(e,t,n,i,s,o,a,l,c,u){Rt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Rt(f)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Rt(f)?c?LS:Wp:Rf,g;if(jt(i)&&(~i.indexOf("random(")&&(i=Lo(i)),i.charAt(1)==="="&&(g=ws(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Ou)return!isNaN(d*i)&&i!==""?(g=new An(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?US:Xp,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&yf(t,i),AS.call(this,e,t,d,i,h,l||Vn.stringFilter,c))},CS=function(e,t,n,i,s){if(Rt(e)&&(e=xo(e,s,t,n,i)),!yi(e)||e.style&&e.nodeType||un(e)||cp(e))return jt(e)?xo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=xo(e[a],s,t,n,i);return o},Gp=function(e,t,n,i,s,o){var a,l,c,u;if(Bn[e]&&(a=new Bn[e]).init(s,a.rawVars?t[e]:CS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ji,Ou,Cf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!vf,S=e.timeline,C,w,E,R,I,v,T,L,k,X,K,H,Y;if(S&&(!d||!s)&&(s="none"),e._ease=kr(s,zs.ease),e._yEase=f?Op(kr(f===!0?s:f,zs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(L=p[0]?Br(p[0]).harness:0,H=L&&i[L.prop],C=pl(i,Ef),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?Ya:nS),_._lazy=0),o){if(fr(e._startAt=zt.set(p,Xn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!h)&&e._startAt.revert(Ya),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&bn(l),immediateRender:a,stagger:0,parent:m},C),H&&(E[L.prop]=H),fr(e._startAt=zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(Ya):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,w=0;w<p.length;w++){if(I=p[w],T=I._gsap||bf(p)[w]._gsap,e._ptLookup[w]=X={},Du[T.id]&&or.length&&dl(),K=M===p?w:M.indexOf(I),L&&(k=new L).init(I,H||C,e,K,M)!==!1&&(e._pt=R=new An(e._pt,I,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(W){X[W]=R}),k.priority&&(v=1)),!L||H)for(E in C)Bn[E]&&(k=Gp(E,C,e,K,I,M))?k.priority&&(v=1):X[E]=R=Af.call(e,I,E,"get",C[E],K,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(I,e._op[w]),x&&e._pt&&(Ji=e,At.killTweensOf(I,X,e.globalTime(t)),Y=!e.parent,Ji=0),e._pt&&l&&(Du[T.id]=1)}v&&qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&S.render(Qn,!0,!0)},RS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ou=1,e.vars[t]="+=0",Cf(e,a),Ou=0,l?Po(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ut(n)+ln(f.e)),f.b&&(f.b=u.s+ln(f.b))},PS=function(e,t){var n=e[0]?Br(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ks({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},DS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},xo=function(e,t,n,i,s){return Rt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?Lo(e):e},Hp=Tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vp={};wn(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vp[r]=1});var zt=function(r){ap(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:go(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||At,x=(un(n)||cp(n)?ki(n[0]):"length"in i)?[n]:ei(n),S,C,w,E,R,I,v,T;if(a._targets=x.length?bf(x):Po("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||wa(c)||wa(u)){if(i=a.vars,S=a.timeline=new gn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=Pi(a),S._start=0,d||wa(c)||wa(u)){if(E=x.length,v=d&&Ap(d),yi(d))for(R in d)~Hp.indexOf(R)&&(T||(T={}),T[R]=d[R]);for(C=0;C<E;C++)w=pl(i,Vp),w.stagger=0,m&&(w.yoyoEase=m),T&&ks(w,T),I=x[C],w.duration=+xo(c,Pi(a),C,I,x),w.delay=(+xo(u,Pi(a),C,I,x)||0)-a._delay,!d&&E===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(I,w,v?v(C,I,x):0),S._ease=ot.none;S.duration()?c=u=0:a.timeline=0}else if(g){go(Xn(S.vars.defaults,{ease:"none"})),S._ease=kr(g.ease||i.ease||"none");var L=0,k,X,K;if(un(g))g.forEach(function(H){return S.to(x,H,">")}),S.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||DS(R,g[R],w,g.easeEach);for(R in w)for(k=w[R].sort(function(H,Y){return H.t-Y.t}),L=0,C=0;C<k.length;C++)X=k[C],K={ease:X.e,duration:(X.t-(C?k[C-1].t:0))/100*c},K[R]=X.v,S.to(x,K,L),L+=K.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return h===!0&&!vf&&(Ji=Pi(a),At.killTweensOf(x),Ji=0),gi(M,Pi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===kt(M._time)&&bn(f)&&lS(Pi(a))&&M.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),p&&Ep(Pi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-xt&&!u?l:i<xt?0:i,d,h,g,_,p,m,M,x,S;if(!c)uS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=kt(f%_),f===l?(g=this._repeat,d=c):(p=kt(f/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,d=c-d),p=Gs(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&Bp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tp(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!p&&(Hn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(M,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Lu(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Lu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&fr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(Hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Io||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cf(this,c),u=this._ease(c/this._dur),RS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ol(this,0),this.parent||Sp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?co(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ji&&Ji.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,p,m;if((!s||s==="all")&&oS(a,l))return s==="all"&&(this._pt=0),co(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},wn(s,function(M){return _[M]=1}),s=_),s=PS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,h={}):(h=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Nl(this,p,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&co(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return vo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return vo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return At.killTweensOf(i,s,o)},e}(Uo);Xn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new gn,t=Uu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rf=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},LS=function(e,t,n,i){return e[t](i.fp,n)},IS=function(e,t,n){return e.setAttribute(t,n)},Pf=function(e,t){return Rt(e[t])?Wp:xf(e[t])&&e.setAttribute?IS:Rf},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},US=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},NS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},FS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},OS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Xp,this.d=l||this,this.set=c||Rf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=OS,this.m=n,this.mt=s,this.tween=i},r}();wn(Tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ef[r]=1});Wn.TweenMax=Wn.TweenLite=zt;Wn.TimelineLite=Wn.TimelineMax=gn;At=new gn({sortChildren:!1,defaults:zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Fp;var Gr=[],$a={},BS=[],Jh=0,zS=0,bc=function(e){return($a[e]||BS).map(function(t){return t()})},Bu=function(){var e=Date.now(),t=[];e-Jh>2&&(bc("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),bc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Jh=e,bc("matchMedia"))},$p=function(){function r(t,n){this.selector=n&&Nu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Rt(n)&&(s=i,i=n,n=Rt);var o=this,a=function(){var c=wt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Nu(s)),wt=o,f=i.apply(o,arguments),Rt(f)&&o._r.push(f),wt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Rt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Gr.length;o--;)Gr[o].id===this.id&&Gr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),kS=function(){function r(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){yi(n)||(n={matches:n});var o=new $p(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bu):l.addEventListener("change",Bu)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ip(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=ei(e)[0]);var s=Br(e||{}).get,o=n?Mp:xp;return n==="native"&&(n=""),e&&(t?o((Bn[t]&&Bn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Bn[t],a=Br(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ys._pt=0,f.init(e,n?u+n:u,ys,0,[e]),f.render(1,f),ys._pt&&Df(1,ys)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,Xn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,zs.ease)),qh(zs,e||{})},config:function(e){return qh(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Wn[a]&&Po(t+" effect requires "+a+" plugin.")}),Sc[t]=function(a,l,c){return n(ei(a),Xn(l||{},s),c)},o&&(gn.prototype[t]=function(a,l,c){return this.add(Sc[t](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=kr(t)},parseEase:function(e,t){return arguments.length?kr(e,t):ot},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(At,n,0),n},context:function(e,t){return e?new $p(e,t):wt},matchMedia:function(e){return new kS(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Bu()},addEventListener:function(e,t){var n=$a[e]||($a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:vS,wrapYoyo:xS,distribute:Ap,random:Rp,snap:Cp,normalize:gS,getUnit:ln,clamp:dS,splitColor:Up,toArray:ei,selector:Nu,mapRange:Dp,pipe:mS,unitize:_S,interpolate:MS,shuffle:wp},install:pp,effects:Sc,ticker:kn,updateRoot:gn.updateRoot,plugins:Bn,globalTimeline:At,core:{PropTween:An,globals:mp,Tween:zt,Timeline:gn,Animation:Uo,getCache:Br,_removeLinkedListItem:Nl,reverting:function(){return nn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return vf=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _l[r]=zt[r]});kn.add(gn.updateRoot);ys=_l.to({},{duration:0});var GS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},HS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=GS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},wc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}HS(a,s)}}}},Rn=_l.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wc("roundProps",Fu),wc("modifiers"),wc("snap",Cp))||_l;zt.version=gn.version=Rn.version="3.13.0";dp=1;Mf()&&Vs();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qh,Qi,As,Lf,Nr,ed,If,VS=function(){return typeof window<"u"},Gi={},Cr=180/Math.PI,Cs=Math.PI/180,ms=Math.atan2,td=1e8,Uf=/([A-Z])/g,WS=/(left|right|width|margin|padding|x)/i,XS=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$S=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KS=function(e,t,n){return e.style[t]=n},ZS=function(e,t,n){return e.style.setProperty(t,n)},jS=function(e,t,n){return e._gsap[t]=n},JS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},QS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ey=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",Cn=Ct+"Origin",ty=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Gi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[e]=o.x?o[e]:Di(i,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},jp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ny=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=If(),(!s||!s.isStart)&&!n[Ct]&&(jp(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jp=function(e,t){var n={target:e,props:[],revert:ny,save:ty};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qp,ku=function(e,t){var n=Qi.createElementNS?Qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qi.createElement(e);return n&&n.style?n:Qi.createElement(e)},ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Uf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ws(t)||t,1)||""},nd="O,Moz,ms,Ms,Webkit".split(","),Ws=function(e,t,n){var i=t||Nr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?nd[o]:"")+e},Gu=function(){VS()&&window.document&&(Qh=window,Qi=Qh.document,As=Qi.documentElement,Nr=ku("div")||{style:{}},ku("div"),Ct=Ws(Ct),Cn=Ct+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qp=!!Ws("perspective"),If=Rn.core.reverting,Lf=1)},id=function(e){var t=e.ownerSVGElement,n=ku("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),As.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),s},rd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},em=function(e){var t,n;try{t=e.getBBox()}catch{t=id(e),n=1}return t&&(t.width||t.height)||n||(t=id(e)),t&&!t.width&&!t.x&&!t.y?{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}:t},tm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&em(e))},qr=function(e,t){if(t){var n=e.style,i;t in Gi&&t!==Cn&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Uf,"-$1").toLowerCase())):n.removeAttribute(t)}},er=function(e,t,n,i,s,o){var a=new An(e._pt,t,n,0,1,o?Zp:Kp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},sd={deg:1,rad:1,turn:1},iy={grid:1,flex:1},hr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Nr.style,l=WS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,p,m;if(i===o||!s||sd[i]||sd[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&tm(e),(h||o==="%")&&(Gi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ut(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qi||!_.appendChild)&&(_=Qi.body),p=_._gsap,p&&h&&p.width&&l&&p.time===kn.time&&!p.uncache)return Ut(s/p.width*f);if(h&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,g=e[u],M?e.style[t]=M:qr(e,t)}else(h||o==="%")&&!iy[ti(_,"display")]&&(a.position=ti(e,"position")),_===e&&(a.position="static"),_.appendChild(Nr),g=Nr[u],_.removeChild(Nr),a.position="absolute";return l&&h&&(p=Br(_),p.time=kn.time,p.width=_[u]),Ut(d?g*s/f:g&&s?f/g*s:0)},Di=function(e,t,n,i){var s;return Lf||Gu(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(s=Fo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vl(ti(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gl[t]&&gl[t](e,t,n)||ti(e,t)||gp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hr(e,t,s,n)+n:s},ry=function(e,t,n,i){if(!n||n==="none"){var s=Ws(t,e,1),o=s&&ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Yp),l=0,c=0,u,f,d,h,g,_,p,m,M,x,S,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ti(e,t)||i,_?e.style[t]=_:qr(e,t)),u=[n,i],Fp(u),n=u[0],i=u[1],d=n.match(Ss)||[],C=i.match(Ss)||[],C.length){for(;f=Ss.exec(i);)p=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),p.charAt(1)==="="&&(p=ws(h,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Ss.lastIndex-x.length,x||(x=x||Vn.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(h=hr(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Zp:Kp;return fp.test(i)&&(a.e=0),this._pt=a,a},od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=od[n]||n,t[1]=od[i]||i,t.join(" ")},oy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?Cn:Ct),qr(n,a);l&&(qr(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fo(n,1),o.uncache=1,jp(i)))}},gl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,oy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},No=[1,0,0,1,0,0],nm={},im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ad=function(e){var t=ti(e,Ct);return im(t)?No:t.substr(7).match(up).map(Ut)},Nf=function(e,t){var n=e._gsap||Br(e),i=e.style,s=ad(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?No:s):(s===No&&!e.offsetParent&&e!==As&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,As.appendChild(e)),s=ad(e),l?i.display=l:qr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):As.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Nf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,E,R,I;n?l!==No&&(E=h*p-g*_)&&(R=S*(p/E)+C*(-_/E)+(_*M-p*m)/E,I=S*(-g/E)+C*(h/E)-(h*M-g*m)/E,S=R,C=I):(w=em(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&a.smooth?(m=S-c,M=C-u,a.xOffset=f+(m*h+M*_)-m,a.yOffset=d+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Cn]="0px 0px",o&&(er(o,a,"xOrigin",c,S),er(o,a,"yOrigin",u,C),er(o,a,"xOffset",f,a.xOffset),er(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Fo=function(e,t){var n=e._gsap||new kp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ti(e,Cn)||"0",u,f,d,h,g,_,p,m,M,x,S,C,w,E,R,I,v,T,L,k,X,K,H,Y,W,se,P,ae,Oe,Ve,q,Q;return u=f=d=_=p=m=M=x=S=0,h=g=1,n.svg=!!(e.getCTM&&tm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),i.scale=i.rotate=i.translate="none"),E=Nf(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Hu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,w=n.yOrigin||0,E!==No&&(T=E[0],L=E[1],k=E[2],X=E[3],u=K=E[4],f=H=E[5],E.length===6?(h=Math.sqrt(T*T+L*L),g=Math.sqrt(X*X+k*k),_=T||L?ms(L,T)*Cr:0,M=k||X?ms(k,X)*Cr+_:0,M&&(g*=Math.abs(Math.cos(M*Cs))),n.svg&&(u-=C-(C*T+w*k),f-=w-(C*L+w*X))):(Q=E[6],Ve=E[7],P=E[8],ae=E[9],Oe=E[10],q=E[11],u=E[12],f=E[13],d=E[14],R=ms(Q,Oe),p=R*Cr,R&&(I=Math.cos(-R),v=Math.sin(-R),Y=K*I+P*v,W=H*I+ae*v,se=Q*I+Oe*v,P=K*-v+P*I,ae=H*-v+ae*I,Oe=Q*-v+Oe*I,q=Ve*-v+q*I,K=Y,H=W,Q=se),R=ms(-k,Oe),m=R*Cr,R&&(I=Math.cos(-R),v=Math.sin(-R),Y=T*I-P*v,W=L*I-ae*v,se=k*I-Oe*v,q=X*v+q*I,T=Y,L=W,k=se),R=ms(L,T),_=R*Cr,R&&(I=Math.cos(R),v=Math.sin(R),Y=T*I+L*v,W=K*I+H*v,L=L*I-T*v,H=H*I-K*v,T=Y,K=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=Ut(Math.sqrt(T*T+L*L+k*k)),g=Ut(Math.sqrt(H*H+Q*Q)),R=ms(K,H),M=Math.abs(R)>2e-4?R*Cr:0,S=q?1/(q<0?-q:q):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!im(ti(e,Ct)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(h*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ut(h),n.scaleY=Ut(g),n.rotation=Ut(_)+a,n.rotationX=Ut(p)+a,n.rotationY=Ut(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=vl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?ly:Qp?rm:ay,n.uncache=0,n},vl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ac=function(e,t,n){var i=ln(t);return Ut(parseFloat(t)+parseFloat(hr(e,"x",n+"px",i)))+i},ay=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rm(e,t)},Er="0deg",so="0px",Tr=") ",rm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,S="",C=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==Er||u!==Er)){var w=parseFloat(u)*Cs,E=Math.sin(w),R=Math.cos(w),I;w=parseFloat(f)*Cs,I=Math.cos(w),o=Ac(M,o,E*I*-x),a=Ac(M,a,-Math.sin(w)*-x),l=Ac(M,l,R*I*-x+x)}p!==so&&(S+="perspective("+p+Tr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(C||o!==so||a!==so||l!==so)&&(S+=l!==so||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Tr),c!==Er&&(S+="rotate("+c+Tr),u!==Er&&(S+="rotateY("+u+Tr),f!==Er&&(S+="rotateX("+f+Tr),(d!==Er||h!==Er)&&(S+="skew("+d+", "+h+Tr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Tr),M.style[Ct]=S||"translate(0, 0)"},ly=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),C,w,E,R,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cs,c*=Cs,C=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Cs,I=Math.tan(c-u),I=Math.sqrt(1+I*I),E*=I,R*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),C*=I,w*=I)),C=Ut(C),w=Ut(w),E=Ut(E),R=Ut(R)):(C=f,R=d,w=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=hr(h,"x",o,"px"),S=hr(h,"y",a,"px")),(g||_||p||m)&&(x=Ut(x+g-(g*C+_*E)+p),S=Ut(S+_-(g*w+_*R)+m)),(i||s)&&(I=h.getBBox(),x=Ut(x+i/100*I.width),S=Ut(S+s/100*I.height)),I="matrix("+C+","+w+","+E+","+R+","+x+","+S+")",h.setAttribute("transform",I),M&&(h.style[Ct]=I)},cy=function(e,t,n,i,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*td)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*td)%o-~~(c/o)*o)),e._pt=d=new An(e._pt,t,n,i,c,YS),d.e=u,d.u="deg",e._props.push(n),d},ld=function(e,t){for(var n in t)e[n]=t[n];return e},uy=function(e,t,n){var i=ld({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=Fo(n,1),qr(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],o[Ct]=t,a=Fo(n,1),o[Ct]=c);for(l in Gi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=ln(c),g=ln(u),f=h!==g?hr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new An(e._pt,a,l,f,d-f,zu),e._pt.u=g||0,e._props.push(l));ld(a,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});gl[e>1?"border"+r:r]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return Di(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var sm={name:"css",register:Gu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,p,m,M,x,S,C,w,E,R;Lf||Gu(),this.styles=this.styles||Jp(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Bn[_]&&Gp(_,t,n,i,e,s)))){if(h=typeof u,g=gl[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Lo(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(p=ln(c),m=ln(u)),m?p!==m&&(c=hr(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],jt(c)&&~c.indexOf("random(")&&(c=Lo(c)),ln(c+"")||c==="auto"||(c+=Vn.units[_]||ln(Di(e,_))||""),(c+"").charAt(1)==="="&&(c=Di(e,_))):c=Di(e,_),d=parseFloat(c),M=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in xi&&(_==="autoAlpha"&&(d===1&&Di(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),er(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Gi,x){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=ti(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Fo(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new An(this._pt,a,Ct,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new An(this._pt,C,"scaleY",C.scaleY,(M?ws(C.scaleY,M+f):f)-C.scaleY||0,zu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Cn,0,a[Cn]),u=sy(u),C.svg?Hu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&er(this,C,"zOrigin",C.zOrigin,m),er(this,a,_,vl(c),vl(u)));continue}else if(_==="svgOrigin"){Hu(e,u,1,w,0,this);continue}else if(_ in nm){cy(this,C,_,d,M?ws(d,M+u):u);continue}else if(_==="smoothOrigin"){er(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){uy(this,u,e);continue}}else _ in a||(_=Ws(_)||_);if(x||(f||f===0)&&(d||d===0)&&!XS.test(u)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=ln(u)||(_ in Vn.units?Vn.units[_]:p),p!==m&&(d=hr(e,_,c,m)),this._pt=new An(this._pt,x?C:a,_,d,(M?ws(d,M+f):f)-d,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?$S:zu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=qS);else if(_ in a)ry.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){yf(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}E&&qp(this)},render:function(e,t){if(t.tween._time||!If())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:xi,getSetter:function(e,t,n){var i=xi[t];return i&&i.indexOf(",")<0&&(t=i),t in Gi&&t!==Cn&&(e._gsap.x||Di(e,"x"))?n&&ed===n?t==="scale"?JS:jS:(ed=n||{})&&(t==="scale"?QS:ey):e.style&&!xf(e.style[t])?KS:~t.indexOf("-")?ZS:Pf(e,t)},core:{_removeProperty:qr,_getMatrix:Nf}};Rn.utils.checkPrefix=Ws;Rn.core.getStyleSaver=Jp;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){Gi[s]=1});wn(e,function(s){Vn.units[s]="deg",nm[s]=1}),xi[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Rn.registerPlugin(sm);var Xs=Rn.registerPlugin(sm)||Rn;Xs.core.Tween;function fy(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hy(r,e,t){return e&&fy(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en,Ka,Gn,tr,nr,Rs,om,Rr,Mo,am,Ni,li,lm,cm=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},um=1,Es=[],et=[],Si=[],So=Date.now,Vu=function(e,t){return t},dy=function(){var e=Mo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Si),et=n,Si=i,Vu=function(o,a){return t[o](a)}},lr=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},yo=function(e){return!!~am.indexOf(e)},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Aa="scrollLeft",Ca="scrollTop",Wu=function(){return Ni&&Ni.isPressed||et.cache++},xl=function(e,t){var n=function i(s){if(s||s===0){um&&(Gn.history.scrollRestoration="manual");var o=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),e(s),i.cacheID=et.cache,o&&Vu("ss",s)}else(t||et.cache!==i.cacheID||Vu("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:Aa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xl(function(r){return arguments.length?Gn.scrollTo(r,Ht.sc()):Gn.pageXOffset||tr[Aa]||nr[Aa]||Rs[Aa]||0})},Ht={s:Ca,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:xl(function(r){return arguments.length?Gn.scrollTo(vn.sc(),r):Gn.pageYOffset||tr[Ca]||nr[Ca]||Rs[Ca]||0})},Sn=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},py=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},dr=function(e,t){var n=t.s,i=t.sc;yo(e)&&(e=tr.scrollingElement||nr);var s=et.indexOf(e),o=i===Ht.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||hn(e,"scroll",Wu);var a=et[s+o],l=a||(et[s+o]=xl(lr(e,n),!0)||(yo(e)?i:xl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},Xu=function(e,t,n){var i=e,s=e,o=So(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=So();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=So();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},oo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},fm=function(){Mo=en.core.globals().ScrollTrigger,Mo&&Mo.core&&dy()},hm=function(e){return en=e||cm(),!Ka&&en&&typeof document<"u"&&document.body&&(Gn=window,tr=document,nr=tr.documentElement,Rs=tr.body,am=[Gn,tr,nr,Rs],en.utils.clamp,lm=en.core.context||function(){},Rr="onpointerenter"in Rs?"pointer":"mouse",om=Ft.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Ft.eventTypes=("ontouchstart"in nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return um=0},500),fm(),Ka=1),Ka};vn.op=Ht;et.cache=0;var Ft=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ka||hm(en)||console.warn("Please gsap.registerPlugin(Observer)"),Mo||fm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,S=n.onRelease,C=n.onRight,w=n.onLeft,E=n.onUp,R=n.onDown,I=n.onChangeX,v=n.onChangeY,T=n.onChange,L=n.onToggleX,k=n.onToggleY,X=n.onHover,K=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,W=n.isNormalizer,se=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,Oe=n.onEnable,Ve=n.onDisable,q=n.onClick,Q=n.scrollSpeed,he=n.capture,oe=n.allowClicks,be=n.lockAxis,ye=n.onLockAxis;this.target=a=Sn(a)||nr,this.vars=n,h&&(h=en.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Rs).lineHeight)||22);var He,Ge,Fe,D,it,Ue,Be,O=this,Ke=0,Pe=0,A=n.passive||!u&&n.passive!==!1,y=dr(a,vn),V=dr(a,Ht),j=y(),te=V(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",Me=yo(a),ie=a.ownerDocument||tr,de=[0,0,0],ke=[0,0,0],ne=0,ve=function(){return ne=So()},xe=function(Ee,lt){return(O.event=Ee)&&h&&py(Ee.target,h)||lt&&Z&&Ee.pointerType!=="touch"||Y&&Y(Ee,lt)},Le=function(){O._vx.reset(),O._vy.reset(),Ge.pause(),f&&f(O)},ge=function(){var Ee=O.deltaX=cd(de),lt=O.deltaY=cd(ke),pe=Math.abs(Ee)>=i,De=Math.abs(lt)>=i;T&&(pe||De)&&T(O,Ee,lt,de,ke),pe&&(C&&O.deltaX>0&&C(O),w&&O.deltaX<0&&w(O),I&&I(O),L&&O.deltaX<0!=Ke<0&&L(O),Ke=O.deltaX,de[0]=de[1]=de[2]=0),De&&(R&&O.deltaY>0&&R(O),E&&O.deltaY<0&&E(O),v&&v(O),k&&O.deltaY<0!=Pe<0&&k(O),Pe=O.deltaY,ke[0]=ke[1]=ke[2]=0),(D||Fe)&&(H&&H(O),Fe&&(p&&Fe===1&&p(O),M&&M(O),Fe=0),D=!1),Ue&&!(Ue=!1)&&ye&&ye(O),it&&(ae(O),it=!1),He=0},We=function(Ee,lt,pe){de[pe]+=Ee,ke[pe]+=lt,O._vx.update(Ee),O._vy.update(lt),c?He||(He=requestAnimationFrame(ge)):ge()},Ne=function(Ee,lt){be&&!Be&&(O.axis=Be=Math.abs(Ee)>Math.abs(lt)?"x":"y",Ue=!0),Be!=="y"&&(de[2]+=Ee,O._vx.update(Ee,!0)),Be!=="x"&&(ke[2]+=lt,O._vy.update(lt,!0)),c?He||(He=requestAnimationFrame(ge)):ge()},rt=function(Ee){if(!xe(Ee,1)){Ee=oo(Ee,u);var lt=Ee.clientX,pe=Ee.clientY,De=lt-O.x,Ce=pe-O.y,ze=O.isDragging;O.x=lt,O.y=pe,(ze||(De||Ce)&&(Math.abs(O.startX-lt)>=s||Math.abs(O.startY-pe)>=s))&&(Fe=ze?2:1,ze||(O.isDragging=!0),Ne(De,Ce))}},U=O.onPress=function(Ae){xe(Ae,1)||Ae&&Ae.button||(O.axis=Be=null,Ge.pause(),O.isPressed=!0,Ae=oo(Ae),Ke=Pe=0,O.startX=O.x=Ae.clientX,O.startY=O.y=Ae.clientY,O._vx.reset(),O._vy.reset(),hn(W?a:ie,li[1],rt,A,!0),O.deltaX=O.deltaY=0,x&&x(O))},ee=O.onRelease=function(Ae){if(!xe(Ae,1)){fn(W?a:ie,li[1],rt,!0);var Ee=!isNaN(O.y-O.startY),lt=O.isDragging,pe=lt&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),De=oo(Ae);!pe&&Ee&&(O._vx.reset(),O._vy.reset(),u&&oe&&en.delayedCall(.08,function(){if(So()-ne>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(ie.createEvent){var Ce=ie.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,Gn,1,De.screenX,De.screenY,De.clientX,De.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Ce)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&lt&&!W&&Ge.restart(!0),Fe&&ge(),m&&lt&&m(O),S&&S(O,pe)}},$=function(Ee){return Ee.touches&&Ee.touches.length>1&&(O.isGesturing=!0)&&se(Ee,O.isDragging)},J=function(){return(O.isGesturing=!1)||P(O)},le=function(Ee){if(!xe(Ee)){var lt=y(),pe=V();We((lt-j)*Q,(pe-te)*Q,1),j=lt,te=pe,f&&Ge.restart(!0)}},ce=function(Ee){if(!xe(Ee)){Ee=oo(Ee,u),ae&&(it=!0);var lt=(Ee.deltaMode===1?l:Ee.deltaMode===2?Gn.innerHeight:1)*g;We(Ee.deltaX*lt,Ee.deltaY*lt,0),f&&!W&&Ge.restart(!0)}},Xe=function(Ee){if(!xe(Ee)){var lt=Ee.clientX,pe=Ee.clientY,De=lt-O.x,Ce=pe-O.y;O.x=lt,O.y=pe,D=!0,f&&Ge.restart(!0),(De||Ce)&&Ne(De,Ce)}},_t=function(Ee){O.event=Ee,X(O)},Tt=function(Ee){O.event=Ee,K(O)},tt=function(Ee){return xe(Ee)||oo(Ee,u)&&q(O)};Ge=O._dc=en.delayedCall(d||.25,Le).pause(),O.deltaX=O.deltaY=0,O._vx=Xu(0,50,!0),O._vy=Xu(0,50,!0),O.scrollX=y,O.scrollY=V,O.isDragging=O.isGesturing=O.isPressed=!1,lm(this),O.enable=function(Ae){return O.isEnabled||(hn(Me?ie:a,"scroll",Wu),o.indexOf("scroll")>=0&&hn(Me?ie:a,"scroll",le,A,he),o.indexOf("wheel")>=0&&hn(a,"wheel",ce,A,he),(o.indexOf("touch")>=0&&om||o.indexOf("pointer")>=0)&&(hn(a,li[0],U,A,he),hn(ie,li[2],ee),hn(ie,li[3],ee),oe&&hn(a,"click",ve,!0,!0),q&&hn(a,"click",tt),se&&hn(ie,"gesturestart",$),P&&hn(ie,"gestureend",J),X&&hn(a,Rr+"enter",_t),K&&hn(a,Rr+"leave",Tt),H&&hn(a,Rr+"move",Xe)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=D=Fe=!1,O._vx.reset(),O._vy.reset(),j=y(),te=V(),Ae&&Ae.type&&U(Ae),Oe&&Oe(O)),O},O.disable=function(){O.isEnabled&&(Es.filter(function(Ae){return Ae!==O&&yo(Ae.target)}).length||fn(Me?ie:a,"scroll",Wu),O.isPressed&&(O._vx.reset(),O._vy.reset(),fn(W?a:ie,li[1],rt,!0)),fn(Me?ie:a,"scroll",le,he),fn(a,"wheel",ce,he),fn(a,li[0],U,he),fn(ie,li[2],ee),fn(ie,li[3],ee),fn(a,"click",ve,!0),fn(a,"click",tt),fn(ie,"gesturestart",$),fn(ie,"gestureend",J),fn(a,Rr+"enter",_t),fn(a,Rr+"leave",Tt),fn(a,Rr+"move",Xe),O.isEnabled=O.isPressed=O.isDragging=!1,Ve&&Ve(O))},O.kill=O.revert=function(){O.disable();var Ae=Es.indexOf(O);Ae>=0&&Es.splice(Ae,1),Ni===O&&(Ni=0)},Es.push(O),W&&yo(a)&&(Ni=O),O.enable(_)},hy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ft.version="3.13.0";Ft.create=function(r){return new Ft(r)};Ft.register=hm;Ft.getAll=function(){return Es.slice()};Ft.getById=function(r){return Es.filter(function(e){return e.vars.id===r})[0]};cm()&&en.registerPlugin(Ft);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,vs,Qe,Mt,zn,ht,Ff,Ml,Oo,Eo,fo,Ra,on,Bl,Yu,mn,ud,fd,xs,dm,Cc,pm,pn,qu,mm,_m,Zi,$u,Of,Ps,Bf,Sl,Ku,Rc,Pa=1,an=Date.now,Pc=an(),ii=0,ho=0,hd=function(e,t,n){var i=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},dd=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},my=function r(){return ho&&requestAnimationFrame(r)},pd=function(){return Bl=1},md=function(){return Bl=0},mi=function(e){return e},po=function(e){return Math.round(e*1e5)/1e5||0},gm=function(){return typeof window<"u"},vm=function(){return Se||gm()&&(Se=window.gsap)&&Se.registerPlugin&&Se},$r=function(e){return!!~Ff.indexOf(e)},xm=function(e){return(e==="Height"?Bf:Qe["inner"+e])||zn["client"+e]||ht["client"+e]},Mm=function(e){return lr(e,"getBoundingClientRect")||($r(e)?function(){return el.width=Qe.innerWidth,el.height=Bf,el}:function(){return Li(e)})},_y=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?xm(s):e["client"+s])||0}},gy=function(e,t){return!t||~Si.indexOf(e)?Mm(e):function(){return el}},Mi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=lr(e,n))?o()-Mm(e)()[s]:$r(e)?(zn[n]||ht[n])-xm(i):e[n]-e["offset"+i])},Da=function(e,t){for(var n=0;n<xs.length;n+=3)(!t||~t.indexOf(xs[n+1]))&&e(xs[n],xs[n+1],xs[n+2])},On=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},mo=function(e){return typeof e=="number"},Pr=function(e){return typeof e=="object"},ao=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Dc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},_s=Math.abs,Sm="left",ym="top",zf="right",kf="bottom",Hr="width",Vr="height",To="Right",bo="Left",wo="Top",Ao="Bottom",Bt="padding",Zn="margin",Ys="Width",Gf="Height",Gt="px",jn=function(e){return Qe.getComputedStyle(e)},vy=function(e){var t=jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},_d=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Li=function(e,t){var n=t&&jn(e)[Yu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Em=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},xy=function(e){return function(t){return Se.utils.snap(Em(e),t)}},Hf=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},My=function(e){return function(t,n){return Hf(Em(e))(t,n.direction)}},La=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$t=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ia=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},gd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ua={toggleActions:"play",anticipatePin:0},El={top:0,left:0,center:.5,bottom:1,right:1},Za=function(e,t){if(On(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in El?El[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Na=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Mt.createElement("div"),_=$r(n)||lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?ht:n,M=e.indexOf("start")!==-1,x=M?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Ht?zf:kf)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ja(g,0,i,M),g},ja=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ys]=1,s["border"+a+Ys]=0,s[n.p]=t+"px",Se.set(e,s)},je=[],Zu={},Bo,vd=function(){return an()-ii>34&&(Bo||(Bo=requestAnimationFrame(Oi)))},gs=function(){(!pn||!pn.isPressed||pn.startX>ht.clientWidth)&&(et.cache++,pn?Bo||(Bo=requestAnimationFrame(Oi)):Oi(),ii||Zr("scrollStart"),ii=an())},Lc=function(){_m=Qe.innerWidth,mm=Qe.innerHeight},_o=function(e){et.cache++,(e===!0||!on&&!pm&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!qu||_m!==Qe.innerWidth||Math.abs(Qe.innerHeight-mm)>Qe.innerHeight*.25))&&Ml.restart(!0)},Kr={},Sy=[],Tm=function r(){return qt(Je,"scrollEnd",r)||Fr(!0)},Zr=function(e){return Kr[e]&&Kr[e].map(function(t){return t()})||Sy},Fn=[],bm=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},Vf=function(e,t){var n;for(mn=0;mn<je.length;mn++)n=je[mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Sl=!0,t&&bm(t),t||Zr("revert")},wm=function(e,t){et.cache++,(t||!_n)&&et.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(Qe.history.scrollRestoration=Of=e)},_n,Wr=0,xd,yy=function(){if(xd!==Wr){var e=xd=Wr;requestAnimationFrame(function(){return e===Wr&&Fr(!0)})}},Am=function(){ht.appendChild(Ps),Bf=!pn&&Ps.offsetHeight||Qe.innerHeight,ht.removeChild(Ps)},Md=function(e){return Oo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Fr=function(e,t){if(zn=Mt.documentElement,ht=Mt.body,Ff=[Qe,Mt,zn,ht],ii&&!e&&!Sl){$t(Je,"scrollEnd",Tm);return}Am(),_n=Je.isRefreshing=!0,et.forEach(function(i){return cn(i)&&++i.cacheID&&(i.rec=i())});var n=Zr("refreshInit");dm&&Je.sort(),t||Vf(),et.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),je.slice(0).forEach(function(i){return i.refresh()}),Sl=!1,je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ku=1,Md(!0),je.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Md(!1),Ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wm(Of,1),Ml.pause(),Wr++,_n=2,Oi(2),je.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=Je.isRefreshing=!1,Zr("refresh")},ju=0,Ja=1,Co,Oi=function(e){if(e===2||!_n&&!Sl){Je.isUpdating=!0,Co&&Co.update(0);var t=je.length,n=an(),i=n-Pc>=50,s=t&&je[0].scroll();if(Ja=ju>s?-1:1,_n||(ju=s),i&&(ii&&!Bl&&n-ii>200&&(ii=0,Zr("scrollEnd")),fo=Pc,Pc=n),Ja<0){for(mn=t;mn-- >0;)je[mn]&&je[mn].update(0,i);Ja=1}else for(mn=0;mn<t;mn++)je[mn]&&je[mn].update(0,i);Je.isUpdating=!1}Bo=0},Ju=[Sm,ym,kf,zf,Zn+Ao,Zn+To,Zn+wo,Zn+bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qa=Ju.concat([Hr,Vr,"boxSizing","max"+Ys,"max"+Gf,"position",Zn,Bt,Bt+wo,Bt+To,Bt+Ao,Bt+bo]),Ey=function(e,t,n){Ds(n);var i=e._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ic=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ju.length,o=t.style,a=e.style,l;s--;)l=Ju[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[kf]=a[zf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Hr]=yl(e,vn)+Gt,o[Vr]=yl(e,Ht)+Gt,o[Bt]=a[Zn]=a[ym]=a[Sm]="0",Ds(i),a[Hr]=a["max"+Ys]=n[Hr],a[Vr]=a["max"+Gf]=n[Vr],a[Bt]=n[Bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ty=/([A-Z])/g,Ds=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ty,"-$1").toLowerCase())}},Fa=function(e){for(var t=Qa.length,n=e.style,i=[],s=0;s<t;s++)i.push(Qa[s],n[Qa[s]]);return i.t=e,i},by=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},el={left:0,top:0},Sd=function(e,t,n,i,s,o,a,l,c,u,f,d,h,g){cn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Za("0"+e.substr(3),n):0));var _=h?h.time():0,p,m,M;if(h&&h.seek(0),isNaN(e)||(e=+e),mo(e))h&&(e=Se.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&ja(a,n,i,!0);else{cn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,w,E;M=Sn(t,l)||ht,S=Li(M)||{},(!S||!S.left&&!S.top)&&jn(M).display==="none"&&(E=M.style.display,M.style.display="block",S=Li(M),E?M.style.display=E:M.style.removeProperty("display")),C=Za(x[0],S[i.d]),w=Za(x[1]||"0",n),e=S[i.p]-c[i.p]-u+C+s-w,a&&ja(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,I=o._isStart;p="scroll"+i.d2,ja(o,R,i,I&&R>20||!I&&(f?Math.max(ht[p],zn[p]):o.parentNode[p])<=R+1),f&&(c=Li(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Gt))}return h&&M&&(p=Li(M),h.seek(d),m=Li(M),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},wy=/(webkit|moz|length|cssText|inset)/i,yd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=jn(e);for(o in a)!+o&&!wy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},Cm=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Oa=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Ed=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||n();var _=Cm(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Oi()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Se.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$t(e,"wheel",n.wheelHandler),Je.isTouch&&$t(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){vs||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$u(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ho){this.update=this.refresh=this.kill=mi;return}n=_d(On(n)||mo(n)||n.nodeType?{trigger:n}:n,Ua);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,I=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Ht,T=!f&&f!==0,L=Sn(n.scroller||Qe),k=Se.core.getCache(L),X=$r(L),K=("pinType"in n?n.pinType:lr(L,"pinType")||X&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=T&&n.toggleActions.split(" "),W="markers"in n?n.markers:Ua.markers,se=X?0:parseFloat(jn(L)["border"+v.p2+Ys])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Oe=_y(L,X,v),Ve=gy(L,X),q=0,Q=0,he=0,oe=dr(L,v),be,ye,He,Ge,Fe,D,it,Ue,Be,O,Ke,Pe,A,y,V,j,te,Z,Me,ie,de,ke,ne,ve,xe,Le,ge,We,Ne,rt,U,ee,$,J,le,ce,Xe,_t,Tt;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=L,P.scroll=E?E.time.bind(E):oe,Ge=oe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(dm=1,n.refreshPriority===-9999&&(Co=P)),k.tweenScroll=k.tweenScroll||{top:Ed(L,Ht),left:Ed(L,vn)},P.tweenTo=be=k.tweenScroll[v.p],P.scrubDuration=function(pe){$=mo(pe)&&pe,$?ee?ee.duration(pe):ee=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return m&&m(P)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),rt=0,l||(l=i.vars.id)),S&&((!Pr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ht.style&&Se.set(X?[ht,zn]:L,{scrollBehavior:"auto"}),et.forEach(function(pe){return cn(pe)&&pe.target===(X?Mt.scrollingElement||zn:L)&&(pe.smooth=!1)}),He=cn(S.snapTo)?S.snapTo:S.snapTo==="labels"?xy(i):S.snapTo==="labelsDirectional"?My(i):S.directional!==!1?function(pe,De){return Hf(S.snapTo)(pe,an()-Q<500?0:De.direction)}:Se.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=Pr(J)?Eo(J.min,J.max):Eo(J,J),le=Se.delayedCall(S.delay||$/2||.1,function(){var pe=oe(),De=an()-Q<500,Ce=be.tween;if((De||Math.abs(P.getVelocity())<10)&&!Ce&&!Bl&&q!==pe){var ze=(pe-D)/y,Dt=i&&!T?i.totalProgress():ze,Ye=De?0:(Dt-U)/(an()-fo)*1e3||0,bt=Se.utils.clamp(-ze,1-ze,_s(Ye/2)*Ye/.185),Lt=ze+(S.inertia===!1?0:bt),St,gt,pt=S,Dn=pt.onStart,yt=pt.onInterrupt,b=pt.onComplete;if(St=He(Lt,P),mo(St)||(St=Lt),gt=Math.max(0,Math.round(D+St*y)),pe<=it&&pe>=D&&gt!==pe){if(Ce&&!Ce._initted&&Ce.data<=_s(gt-pe))return;S.inertia===!1&&(bt=St-ze),be(gt,{duration:J(_s(Math.max(_s(Lt-Dt),_s(St-Dt))*.185/Ye/.05||0)),ease:S.ease||"power3",data:_s(gt-pe),onInterrupt:function(){return le.restart(!0)&&yt&&yt(P)},onComplete:function(){P.update(),q=oe(),i&&!T&&(ee?ee.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),rt=U=i&&!T?i.totalProgress():P.progress,M&&M(P),b&&b(P)}},pe,bt*y,gt-pe-bt*y),Dn&&Dn(P,be.tween)}}else P.isActive&&q!==pe&&le.restart(!0)}).pause()),l&&(Zu[l]=P),d=P.trigger=Sn(d||h!==!0&&h),Tt=d&&d._gsap&&d._gsap.stRevert,Tt&&(Tt=Tt(P)),h=h===!0?d:Sn(h),On(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Zn||(g=!g&&h.parentNode&&h.parentNode.style&&jn(h.parentNode).display==="flex"?!1:Bt),P.pin=h,ye=Se.core.getCache(h),ye.spacer?V=ye.pinState:(w&&(w=Sn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ye.spacerIsNative=!!w,w&&(ye.spacerState=Fa(w))),ye.spacer=Z=w||Mt.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),ye.pinState=V=Fa(h)),n.force3D!==!1&&Se.set(h,{force3D:!0}),P.spacer=Z=ye.spacer,Ne=jn(h),ve=Ne[g+v.os2],ie=Se.getProperty(h),de=Se.quickSetter(h,v.a,Gt),Ic(h,Z,Ne),te=Fa(h)),W){Pe=Pr(W)?_d(W,gd):gd,O=Na("scroller-start",l,L,v,Pe,0),Ke=Na("scroller-end",l,L,v,Pe,0,O),Me=O["offset"+v.op.d2];var tt=Sn(lr(L,"content")||L);Ue=this.markerStart=Na("start",l,tt,v,Pe,Me,0,E),Be=this.markerEnd=Na("end",l,tt,v,Pe,Me,0,E),E&&(_t=Se.quickSetter([Ue,Be],v.a,Gt)),!K&&!(Si.length&&lr(L,"fixedMarkers")===!0)&&(vy(X?ht:L),Se.set([O,Ke],{force3D:!0}),Le=Se.quickSetter(O,v.a,Gt),We=Se.quickSetter(Ke,v.a,Gt))}if(E){var Ae=E.vars.onUpdate,Ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Ae&&Ae.apply(E,Ee||[])})}if(P.previous=function(){return je[je.indexOf(P)-1]},P.next=function(){return je[je.indexOf(P)+1]},P.revert=function(pe,De){if(!De)return P.kill(!0);var Ce=pe!==!1||!P.enabled,ze=on;Ce!==P.isReverted&&(Ce&&(ce=Math.max(oe(),P.scroll.rec||0),he=P.progress,Xe=i&&i.progress()),Ue&&[Ue,Be,O,Ke].forEach(function(Dt){return Dt.style.display=Ce?"none":"block"}),Ce&&(on=P,P.update(Ce)),h&&(!C||!P.isActive)&&(Ce?Ey(h,Z,V):Ic(h,Z,jn(h),xe)),Ce||P.update(Ce),on=ze,P.isReverted=Ce)},P.refresh=function(pe,De,Ce,ze){if(!((on||!P.enabled)&&!De)){if(h&&pe&&ii){$t(r,"scrollEnd",Tm);return}!_n&&ae&&ae(P),on=P,be.tween&&!Ce&&(be.tween.kill(),be.tween=0),ee&&ee.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ze){return Ze.vars.immediateRender&&Ze.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Dt=Oe(),Ye=Ve(),bt=E?E.duration():Mi(L,v),Lt=y<=.01||!y,St=0,gt=ze||0,pt=Pr(Ce)?Ce.end:n.end,Dn=n.endTrigger||d,yt=Pr(Ce)?Ce.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),b=P.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,P),F=d&&Math.max(0,je.indexOf(P))||0,B=F,G,N,re,_e,fe,ue,we,Ie,Te,st,nt,mt,Xt;for(W&&Pr(Ce)&&(mt=Se.getProperty(O,v.p),Xt=Se.getProperty(Ke,v.p));B-- >0;)ue=je[B],ue.end||ue.refresh(0,1)||(on=P),we=ue.pin,we&&(we===d||we===h||we===b)&&!ue.isReverted&&(st||(st=[]),st.unshift(ue),ue.revert(!0,!0)),ue!==je[B]&&(F--,B--);for(cn(yt)&&(yt=yt(P)),yt=hd(yt,"start",P),D=Sd(yt,d,Dt,v,oe(),Ue,O,P,Ye,se,K,bt,E,P._startClamp&&"_startClamp")||(h?-.001:0),cn(pt)&&(pt=pt(P)),On(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(On(yt)?yt.split(" ")[0]:"")+pt:(St=Za(pt.substr(2),Dt),pt=On(yt)?yt:(E?Se.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,D):D)+St,Dn=d)),pt=hd(pt,"end",P),it=Math.max(D,Sd(pt||(Dn?"100% 0":bt),Dn,Dt,v,oe()+St,Be,Ke,P,Ye,se,K,bt,E,P._endClamp&&"_endClamp"))||-.001,St=0,B=F;B--;)ue=je[B],we=ue.pin,we&&ue.start-ue._pinPush<=D&&!E&&ue.end>0&&(G=ue.end-(P._startClamp?Math.max(0,ue.start):ue.start),(we===d&&ue.start-ue._pinPush<D||we===b)&&isNaN(yt)&&(St+=G*(1-ue.progress)),we===h&&(gt+=G));if(D+=St,it+=St,P._startClamp&&(P._startClamp+=St),P._endClamp&&!_n&&(P._endClamp=it||-.001,it=Math.min(it,Mi(L,v))),y=it-D||(D-=.01)&&.001,Lt&&(he=Se.utils.clamp(0,1,Se.utils.normalize(D,it,ce))),P._pinPush=gt,Ue&&St&&(G={},G[v.a]="+="+St,b&&(G[v.p]="-="+oe()),Se.set([Ue,Be],G)),h&&!(Ku&&P.end>=Mi(L,v)))G=jn(h),_e=v===Ht,re=oe(),ke=parseFloat(ie(v.a))+gt,!bt&&it>1&&(nt=(X?Mt.scrollingElement||zn:L).style,nt={style:nt,value:nt["overflow"+v.a.toUpperCase()]},X&&jn(ht)["overflow"+v.a.toUpperCase()]!=="scroll"&&(nt.style["overflow"+v.a.toUpperCase()]="scroll")),Ic(h,Z,G),te=Fa(h),N=Li(h,!0),Ie=K&&dr(L,_e?vn:Ht)(),g?(xe=[g+v.os2,y+gt+Gt],xe.t=Z,B=g===Bt?yl(h,v)+y+gt:0,B&&(xe.push(v.d,B+Gt),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Gt)),Ds(xe),b&&je.forEach(function(Ze){Ze.pin===b&&Ze.vars.pinSpacing!==!1&&(Ze._subPinOffset=!0)}),K&&oe(ce)):(B=yl(h,v),B&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Gt)),K&&(fe={top:N.top+(_e?re-D:Ie)+Gt,left:N.left+(_e?Ie:re-D)+Gt,boxSizing:"border-box",position:"fixed"},fe[Hr]=fe["max"+Ys]=Math.ceil(N.width)+Gt,fe[Vr]=fe["max"+Gf]=Math.ceil(N.height)+Gt,fe[Zn]=fe[Zn+wo]=fe[Zn+To]=fe[Zn+Ao]=fe[Zn+bo]="0",fe[Bt]=G[Bt],fe[Bt+wo]=G[Bt+wo],fe[Bt+To]=G[Bt+To],fe[Bt+Ao]=G[Bt+Ao],fe[Bt+bo]=G[Bt+bo],j=by(V,fe,C),_n&&oe(0)),i?(Te=i._initted,Cc(1),i.render(i.duration(),!0,!0),ne=ie(v.a)-ke+y+gt,ge=Math.abs(y-ne)>1,K&&ge&&j.splice(j.length-2,2),i.render(0,!0,!0),Te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cc(0)):ne=y,nt&&(nt.value?nt.style["overflow"+v.a.toUpperCase()]=nt.value:nt.style.removeProperty("overflow-"+v.a));else if(d&&oe()&&!E)for(N=d.parentNode;N&&N!==ht;)N._pinOffset&&(D-=N._pinOffset,it-=N._pinOffset),N=N.parentNode;st&&st.forEach(function(Ze){return Ze.revert(!1,!0)}),P.start=D,P.end=it,Ge=Fe=_n?ce:oe(),!E&&!_n&&(Ge<ce&&oe(ce),P.scroll.rec=0),P.revert(!1,!0),Q=an(),le&&(q=-1,le.restart(!0)),on=0,i&&T&&(i._initted||Xe)&&i.progress()!==Xe&&i.progress(Xe||0,!0).render(i.time(),!0,!0),(Lt||he!==P.progress||E||_||i&&!i._initted)&&(i&&!T&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(E&&D<-.001&&!he?Se.utils.normalize(D,it,0):he,!0),P.progress=Lt||(Ge-D)/y===he?0:he),h&&g&&(Z._pinOffset=Math.round(P.progress*ne)),ee&&ee.invalidate(),isNaN(mt)||(mt-=Se.getProperty(O,v.p),Xt-=Se.getProperty(Ke,v.p),Oa(O,v,mt),Oa(Ue,v,mt-(ze||0)),Oa(Ke,v,Xt),Oa(Be,v,Xt-(ze||0))),Lt&&!_n&&P.update(),u&&!_n&&!A&&(A=!0,u(P),A=!1)}},P.getVelocity=function(){return(oe()-Fe)/(an()-fo)*1e3||0},P.endAnimation=function(){ao(P.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?T||ao(i,P.direction<0,1):ao(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(D||P.refresh()||D)+i.labels[pe]/i.duration()*y||0},P.getTrailing=function(pe){var De=je.indexOf(P),Ce=P.direction>0?je.slice(0,De).reverse():je.slice(De+1);return(On(pe)?Ce.filter(function(ze){return ze.vars.preventOverlaps===pe}):Ce).filter(function(ze){return P.direction>0?ze.end<=D:ze.start>=it})},P.update=function(pe,De,Ce){if(!(E&&!Ce&&!pe)){var ze=_n===!0?ce:P.scroll(),Dt=pe?0:(ze-D)/y,Ye=Dt<0?0:Dt>1?1:Dt||0,bt=P.progress,Lt,St,gt,pt,Dn,yt,b,F;if(De&&(Fe=Ge,Ge=E?oe():ze,S&&(U=rt,rt=i&&!T?i.totalProgress():Ye)),p&&h&&!on&&!Pa&&ii&&(!Ye&&D<ze+(ze-Fe)/(an()-fo)*p?Ye=1e-4:Ye===1&&it>ze+(ze-Fe)/(an()-fo)*p&&(Ye=.9999)),Ye!==bt&&P.enabled){if(Lt=P.isActive=!!Ye&&Ye<1,St=!!bt&&bt<1,yt=Lt!==St,Dn=yt||!!Ye!=!!bt,P.direction=Ye>bt?1:-1,P.progress=Ye,Dn&&!on&&(gt=Ye&&!bt?0:Ye===1?1:bt===1?2:3,T&&(pt=!yt&&Y[gt+1]!=="none"&&Y[gt+1]||Y[gt],F=i&&(pt==="complete"||pt==="reset"||pt in i))),I&&(yt||F)&&(F||f||!i)&&(cn(I)?I(P):P.getTrailing(I).forEach(function(re){return re.endAnimation()})),T||(ee&&!on&&!Pa?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",Ye,i._tTime/i._tDur):(ee.vars.totalProgress=Ye,ee.invalidate().restart())):i&&i.totalProgress(Ye,!!(on&&(Q||pe)))),h){if(pe&&g&&(Z.style[g+v.os2]=ve),!K)de(po(ke+ne*Ye));else if(Dn){if(b=!pe&&Ye>bt&&it+1>ze&&ze+1>=Mi(L,v),C)if(!pe&&(Lt||b)){var B=Li(h,!0),G=ze-D;yd(h,ht,B.top+(v===Ht?G:0)+Gt,B.left+(v===Ht?0:G)+Gt)}else yd(h,Z);Ds(Lt||b?j:te),ge&&Ye<1&&Lt||de(ke+(Ye===1&&!b?ne:0))}}S&&!be.tween&&!on&&!Pa&&le.restart(!0),a&&(yt||x&&Ye&&(Ye<1||!Rc))&&Oo(a.targets).forEach(function(re){return re.classList[Lt||x?"add":"remove"](a.className)}),o&&!T&&!pe&&o(P),Dn&&!on?(T&&(F&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(P)),(yt||!Rc)&&(c&&yt&&Dc(P,c),H[gt]&&Dc(P,H[gt]),x&&(Ye===1?P.kill(!1,1):H[gt]=0),yt||(gt=Ye===1?1:3,H[gt]&&Dc(P,H[gt]))),R&&!Lt&&Math.abs(P.getVelocity())>(mo(R)?R:2500)&&(ao(P.callbackAnimation),ee?ee.progress(1):ao(i,pt==="reverse"?1:!Ye,1))):T&&o&&!on&&o(P)}if(We){var N=E?ze/E.duration()*(E._caScrollDist||0):ze;Le(N+(O._isFlipped?1:0)),We(N)}_t&&_t(-ze/E.duration()*(E._caScrollDist||0))}},P.enable=function(pe,De){P.enabled||(P.enabled=!0,$t(L,"resize",_o),X||$t(L,"scroll",gs),ae&&$t(r,"refreshInit",ae),pe!==!1&&(P.progress=he=0,Ge=Fe=q=oe()),De!==!1&&P.refresh())},P.getTween=function(pe){return pe&&be?be.tween:ee},P.setPositions=function(pe,De,Ce,ze){if(E){var Dt=E.scrollTrigger,Ye=E.duration(),bt=Dt.end-Dt.start;pe=Dt.start+bt*pe/Ye,De=Dt.start+bt*De/Ye}P.refresh(!1,!1,{start:dd(pe,Ce&&!!P._startClamp),end:dd(De,Ce&&!!P._endClamp)},ze),P.update()},P.adjustPinSpacing=function(pe){if(xe&&pe){var De=xe.indexOf(v.d)+1;xe[De]=parseFloat(xe[De])+pe+Gt,xe[1]=parseFloat(xe[1])+pe+Gt,Ds(xe)}},P.disable=function(pe,De){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,De||ee&&ee.pause(),ce=0,ye&&(ye.uncache=1),ae&&qt(r,"refreshInit",ae),le&&(le.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!X)){for(var Ce=je.length;Ce--;)if(je[Ce].scroller===L&&je[Ce]!==P)return;qt(L,"resize",_o),X||qt(L,"scroll",gs)}},P.kill=function(pe,De){P.disable(pe,De),ee&&!De&&ee.kill(),l&&delete Zu[l];var Ce=je.indexOf(P);Ce>=0&&je.splice(Ce,1),Ce===mn&&Ja>0&&mn--,Ce=0,je.forEach(function(ze){return ze.scroller===P.scroller&&(Ce=1)}),Ce||_n||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),De||i.kill()),Ue&&[Ue,Be,O,Ke].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Co===P&&(Co=0),h&&(ye&&(ye.uncache=1),Ce=0,je.forEach(function(ze){return ze.pin===h&&Ce++}),Ce||(ye.spacer=0)),n.onKill&&n.onKill(P)},je.push(P),P.enable(!1,!1),Tt&&Tt(P),i&&i.add&&!y){var lt=P.update;P.update=function(){P.update=lt,et.cache++,D||it||P.refresh()},Se.delayedCall(.01,P.update),y=.01,D=it=0}else P.refresh();h&&yy()},r.register=function(n){return vs||(Se=n||vm(),gm()&&window.document&&r.enable(),vs=ho),vs},r.defaults=function(n){if(n)for(var i in n)Ua[i]=n[i];return Ua},r.disable=function(n,i){ho=0,je.forEach(function(o){return o[i?"kill":"disable"](n)}),qt(Qe,"wheel",gs),qt(Mt,"scroll",gs),clearInterval(Ra),qt(Mt,"touchcancel",mi),qt(ht,"touchstart",mi),La(qt,Mt,"pointerdown,touchstart,mousedown",pd),La(qt,Mt,"pointerup,touchend,mouseup",md),Ml.kill(),Da(qt);for(var s=0;s<et.length;s+=3)Ia(qt,et[s],et[s+1]),Ia(qt,et[s],et[s+2])},r.enable=function(){if(Qe=window,Mt=document,zn=Mt.documentElement,ht=Mt.body,Se&&(Oo=Se.utils.toArray,Eo=Se.utils.clamp,$u=Se.core.context||mi,Cc=Se.core.suppressOverwrites||mi,Of=Qe.history.scrollRestoration||"auto",ju=Qe.pageYOffset||0,Se.core.globals("ScrollTrigger",r),ht)){ho=1,Ps=document.createElement("div"),Ps.style.height="100vh",Ps.style.position="absolute",Am(),my(),Ft.register(Se),r.isTouch=Ft.isTouch,Zi=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qu=Ft.isTouch===1,$t(Qe,"wheel",gs),Ff=[Qe,Mt,zn,ht],Se.matchMedia?(r.matchMedia=function(c){var u=Se.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Se.addEventListener("matchMediaInit",function(){return Vf()}),Se.addEventListener("matchMediaRevert",function(){return bm()}),Se.addEventListener("matchMedia",function(){Fr(0,1),Zr("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return Lc(),Lc})):console.warn("Requires GSAP 3.11.0 or later"),Lc(),$t(Mt,"scroll",gs);var n=ht.hasAttribute("style"),i=ht.style,s=i.borderTopStyle,o=Se.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Li(ht),Ht.m=Math.round(a.top+Ht.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ht.setAttribute("style",""),ht.removeAttribute("style")),Ra=setInterval(vd,250),Se.delayedCall(.5,function(){return Pa=0}),$t(Mt,"touchcancel",mi),$t(ht,"touchstart",mi),La($t,Mt,"pointerdown,touchstart,mousedown",pd),La($t,Mt,"pointerup,touchend,mouseup",md),Yu=Se.utils.checkPrefix("transform"),Qa.push(Yu),vs=an(),Ml=Se.delayedCall(.2,Fr).pause(),xs=[Mt,"visibilitychange",function(){var c=Qe.innerWidth,u=Qe.innerHeight;Mt.hidden?(ud=c,fd=u):(ud!==c||fd!==u)&&_o()},Mt,"DOMContentLoaded",Fr,Qe,"load",Fr,Qe,"resize",_o],Da($t),je.forEach(function(c){return c.enable(0,1)}),l=0;l<et.length;l+=3)Ia(qt,et[l],et[l+1]),Ia(qt,et[l],et[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Rc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ra)||(Ra=i)&&setInterval(vd,i),"ignoreMobileResize"in n&&(qu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Da(qt)||Da($t,n.autoRefreshEvents||"none"),pm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=et.indexOf(s),a=$r(s);~o&&et.splice(o,a?6:2),i&&(a?Si.unshift(Qe,i,ht,i,zn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?Sn(n):n).getBoundingClientRect(),a=o[s?Hr:Vr]*i||0;return s?o.right-a>0&&o.left+a<Qe.innerWidth:o.bottom-a>0&&o.top+a<Qe.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?Hr:Vr],l=i==null?a/2:i in El?El[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Qe.innerWidth:(o.top+l)/Qe.innerHeight},r.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r}();Je.version="3.13.0";Je.saveStyles=function(r){return r?Oo(r).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),$u())}}):Fn};Je.revert=function(r,e){return Vf(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?_o(!0):(vs||Je.register())&&Fr(!0)};Je.update=function(r){return++et.cache&&Oi(r===!0?2:0)};Je.clearScrollMemory=wm;Je.maxScroll=function(r,e){return Mi(r,e?vn:Ht)};Je.getScrollFunc=function(r,e){return dr(Sn(r),e?vn:Ht)};Je.getById=function(r){return Zu[r]};Je.getAll=function(){return je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ii};Je.snapDirectional=Hf;Je.addEventListener=function(r,e){var t=Kr[r]||(Kr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=Kr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Se.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&cn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return cn(s)&&(s=s(),$t(Je,"refresh",function(){return s=e.batchMax()})),Oo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Td=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Uc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===zn&&r(ht,t)},Ba={auto:1,scroll:1},Ay=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=an(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ba[(l=jn(s)).overflowY]||Ba[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!$r(s)&&(Ba[(l=jn(s)).overflowY]||Ba[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rm=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Ay,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$t(Mt,Ft.eventTypes[0],wd,!1,!0)},onDisable:function(){return qt(Mt,Ft.eventTypes[0],wd,!0)}})},Cy=/(input|label|select|textarea)/i,bd,wd=function(e){var t=Cy.test(e.target.tagName);(t||bd)&&(e._gsapAllow=!0,bd=t)},Ry=function(e){Pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Sn(e.target)||zn,u=Se.core.globals().ScrollSmoother,f=u&&u.get(),d=Zi&&(e.content&&Sn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=dr(c,Ht),g=dr(c,vn),_=1,p=(Ft.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,m=0,M=cn(i)?function(){return i(a)}:function(){return i||2.8},x,S,C=Rm(c,e.type,!0,s),w=function(){return S=!1},E=mi,R=mi,I=function(){l=Mi(c,Ht),R=Eo(Zi?1:0,l),n&&(E=Eo(0,Mi(c,vn))),x=Wr},v=function(){d._gsap.y=po(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},T=function(){if(S){requestAnimationFrame(w);var W=po(a.deltaY/2),se=R(h.v-W);if(d&&se!==h.v+h.offset){h.offset=se-h.v;var P=po((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=et.cache,Oi()}return!0}h.offset&&v(),S=!0},L,k,X,K,H=function(){I(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return d&&Se.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Zi&&Y.type==="touchmove"&&T()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=po((Qe.visualViewport&&Qe.visualViewport.scale||1)/p),L.pause(),Y!==_&&Uc(c,_>1.01?!0:n?!1:"x"),k=g(),X=h(),I(),x=Wr},e.onRelease=e.onGestureStart=function(Y,W){if(h.offset&&v(),!W)K.restart(!0);else{et.cache++;var se=M(),P,ae;n&&(P=g(),ae=P+se*.05*-Y.velocityX/.227,se*=Td(g,P,ae,Mi(c,vn)),L.vars.scrollX=E(ae)),P=h(),ae=P+se*.05*-Y.velocityY/.227,se*=Td(h,P,ae,Mi(c,Ht)),L.vars.scrollY=R(ae),L.invalidate().duration(se).play(.01),(Zi&&L.vars.scrollY>=l||P>=l-1)&&Se.to({},{onUpdate:H,duration:se})}o&&o(Y)},e.onWheel=function(){L._ts&&L.pause(),an()-m>1e3&&(x=0,m=an())},e.onChange=function(Y,W,se,P,ae){if(Wr!==x&&I(),W&&n&&g(E(P[2]===W?k+(Y.startX-Y.x):g()+W-P[1])),se){h.offset&&v();var Oe=ae[2]===se,Ve=Oe?X+Y.startY-Y.y:h()+se-ae[1],q=R(Ve);Oe&&Ve!==q&&(X+=q-Ve),h(q)}(se||W)&&Oi()},e.onEnable=function(){Uc(c,n?!1:"x"),Je.addEventListener("refresh",H),$t(Qe,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Uc(c,!0),qt(Qe,"resize",H),Je.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ft(e),a.iOS=Zi,Zi&&!h()&&h(1),Zi&&Se.ticker.add(mi),K=a._dc,L=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Cm(h,h(),function(){return L.pause()})},onUpdate:Oi,onComplete:K.vars.onComplete}),a};Je.sort=function(r){if(cn(r))return je.sort(r);var e=Qe.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Qe.innerHeight}),je.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Ft(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return pn;if(r===!0&&pn)return pn.enable();if(r===!1){pn&&pn.kill(),pn=r;return}var e=r instanceof Ft?r:Ry(r);return pn&&pn.target===e.target&&pn.kill(),$r(e.target)&&(pn=e),e};Je.core={_getVelocityProp:Xu,_inputObserver:Rm,_scrollers:et,_proxies:Si,bridge:{ss:function(){ii||Zr("scrollStart"),ii=an()},ref:function(){return on}}};vm()&&Se.registerPlugin(Je);Xs.registerPlugin(Je);const br=window.innerWidth<768,Fi={portalCount:br?4e3:8e3,starCount:br?5e3:1e4,morphSubdivision:br?16:32,fluidSatellites:br?4:7,fluidDroplets:br?3:6,cosmosNodes:br?40:80,cameraZ:br?8:6},ct={isLoading:!0,currentSection:0,mouse:{x:0,y:0,targetX:0,targetY:0},time:0,deltaTime:0,lastTime:0,portalTravel:0,sections:["portal","particles","morph","fluid","crystal","cosmos"]},Py=document.getElementById("webgl-canvas"),Qr=new YM,zo=new Kn(60,window.innerWidth/window.innerHeight,.1,1e3);zo.position.z=Fi.cameraZ;const ni=new XM({canvas:Py,antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1});ni.setSize(window.innerWidth,window.innerHeight);ni.setPixelRatio(Math.min(window.devicePixelRatio,2));ni.setClearColor(197379,1);ni.toneMapping=Pd;ni.toneMappingExposure=1.2;const Wf=`
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  // FBM (Fractal Brownian Motion)
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for(int i = 0; i < 6; i++) {
      if(i >= octaves) break;
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
`,js=new vi;Qr.add(js);const Ko=Fi.portalCount,Zo=new Pn,tl=new Float32Array(Ko*3),nl=new Float32Array(Ko*3),Pm=new Float32Array(Ko),Dm=new Float32Array(Ko);for(let r=0;r<Ko;r++){const e=Math.random()*Math.PI*2,t=1.5+Math.random()*2.5,n=(Math.random()-.5)*20;tl[r*3]=Math.cos(e)*t,tl[r*3+1]=Math.sin(e)*t,tl[r*3+2]=n,nl[r*3]=Math.random()-.5,nl[r*3+1]=Math.random()-.5,nl[r*3+2]=Math.random()-.5,Pm[r]=.5+Math.random()*2.5,Dm[r]=.5+Math.random()*.5}Zo.setAttribute("position",new Kt(tl,3));Zo.setAttribute("aRandomness",new Kt(nl,3));Zo.setAttribute("size",new Kt(Pm,1));Zo.setAttribute("speed",new Kt(Dm,1));const ir=new Zt({uniforms:{uTime:{value:0},uTravel:{value:0},uMouse:{value:new at(0,0)},uProgress:{value:0},uPixelRatio:{value:ni.getPixelRatio()}},vertexShader:`
    attribute float size;
    attribute float speed;
    attribute vec3 aRandomness;
    
    uniform float uTime;
    uniform float uTravel; // Accumulated travel distance
    uniform vec2 uMouse;
    uniform float uProgress;
    uniform float uPixelRatio;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vDepth;
    
    ${Wf}
    
    void main() {
      vec3 pos = position;
      
      // Dynamic Flow Speed - Controlled by uTravel uniform
      // float flowSpeed = 2.0 + uProgress * 10.0; // Handled in JS now
      float zOffset = uTravel * speed;
      pos.z = mod(pos.z + zOffset + 10.0, 20.0) - 10.0;
      
      // Scroll Dynamics: Open & Close
      // Open: Expands from point to tunnel (0.0 -> 0.25) - Slower, smoother
      float opener = smoothstep(0.0, 0.25, uProgress);
      // Close: Collapses to center (0.85 -> 1.0)
      float closer = 1.0 - smoothstep(0.85, 1.0, uProgress);
      
      // Apply dynamics to radius
      // Start from near zero (0.02) for "point" effect
      float dynamicRadius = (0.02 + 0.98 * opener) * closer;
      
      // Spiral twist
      float twist = pos.z * 0.2;
      float c = cos(twist);
      float s = sin(twist);
      mat2 rotation = mat2(c, -s, s, c);
      pos.xy = rotation * pos.xy;
      
      // Apply radius scaling
      pos.xy *= dynamicRadius;
      
      // Organic turbulence
      float noiseFreq = 0.5;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.xy * noiseFreq, uTime * 0.2);
      pos.x += snoise(noisePos) * noiseAmp;
      pos.y += snoise(noisePos + 100.0) * noiseAmp;
      
      // Mouse influence (Warping)
      float mouseDist = length(uMouse);
      vec2 mouseDir = normalize(uMouse);
      float warp = smoothstep(5.0, -5.0, pos.z); // More warp closer to camera
      pos.xy += uMouse * warp * 2.0;
      
      // Add randomness
      pos += aRandomness * 0.2;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Size attenuation
      gl_PointSize = size * (300.0 / -mvPosition.z) * uPixelRatio;
      gl_Position = projectionMatrix * mvPosition;
      
      // Pass depth for coloring
      vDepth = pos.z;
      
      // Fade out at ends
      vAlpha = smoothstep(-10.0, -8.0, pos.z) * smoothstep(5.0, 0.0, pos.z);
      
      // Fade alpha during close
      vAlpha *= closer;
    }
  `,fragmentShader:`
    varying float vAlpha;
    varying float vDepth;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      // Soft particle
      float glow = 1.0 - smoothstep(0.0, 0.5, dist);
      glow = pow(glow, 2.0);
      
      // Fire/Void Palette: Black -> Red -> Orange -> Silver
      // Map depth to color: Far (Black/Red) -> Near (Orange/Silver)
      float t = smoothstep(-10.0, 2.0, vDepth);
      
      vec3 black = vec3(0.0, 0.0, 0.0);
      vec3 darkRed = vec3(0.4, 0.0, 0.05);
      vec3 orange = vec3(1.0, 0.35, 0.05);
      vec3 silver = vec3(0.9, 0.95, 1.0);
      
      vec3 color = mix(black, darkRed, smoothstep(0.0, 0.4, t));
      color = mix(color, orange, smoothstep(0.4, 0.75, t));
      color = mix(color, silver, smoothstep(0.8, 1.0, t));
      
      // No pure white, keep it rich
      gl_FragColor = vec4(color, glow * vAlpha);
    }
  `,transparent:!0,blending:Ls,depthWrite:!1}),Dy=new op(Zo,ir);js.add(Dy);const Ly=new Hi(20,20),Iy=new df({color:0,transparent:!0,opacity:.95}),Lm=new Qt(Ly,Iy);Lm.position.z=-12;js.add(Lm);const Uy=new Hi(30,20),Ny=new Zt({uniforms:{uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    
    void main() {
      vec2 center = vUv - 0.5;
      float dist = length(center);
      
      // Strong vignette (dark edges)
      float vignette = smoothstep(0.3, 0.9, dist);
      
      // Grain/Noise for texture
      float noise = (fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.08;
      
      // Dark overlay color
      vec3 color = vec3(0.0);
      
      // Blur effect simulated by opacity gradient
      float alpha = vignette * 0.7 + 0.1; // Base darkness
      
      gl_FragColor = vec4(color + noise, alpha);
    }
  `,transparent:!0,depthWrite:!1,blending:Or}),Im=new Qt(Uy,Ny);Im.position.z=2;js.add(Im);const cr=new vi;cr.visible=!1;Qr.add(cr);const jo=Fi.starCount,Jo=new Pn,il=new Float32Array(jo*3),Nn=new Float32Array(jo*3),Um=new Float32Array(jo),Nm=new Float32Array(jo);for(let r=0;r<jo;r++){const e=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),n=3+Math.random()*25;il[r*3]=n*Math.sin(t)*Math.cos(e),il[r*3+1]=n*Math.sin(t)*Math.sin(e),il[r*3+2]=n*Math.cos(t)-10;const i=Math.random();i<.6?(Nn[r*3]=1,Nn[r*3+1]=1,Nn[r*3+2]=1):i<.8?(Nn[r*3]=.7+Math.random()*.3,Nn[r*3+1]=.85+Math.random()*.15,Nn[r*3+2]=1):i<.95?(Nn[r*3]=.9+Math.random()*.1,Nn[r*3+1]=.5+Math.random()*.3,Nn[r*3+2]=1):(Nn[r*3]=1,Nn[r*3+1]=.85,Nn[r*3+2]=.5),Um[r]=.5+Math.random()*3,Nm[r]=Math.random()*Math.PI*2}Jo.setAttribute("position",new Kt(il,3));Jo.setAttribute("color",new Kt(Nn,3));Jo.setAttribute("size",new Kt(Um,1));Jo.setAttribute("phase",new Kt(Nm,1));const Tl=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new z(0,0,0)},uPixelRatio:{value:ni.getPixelRatio()}},vertexShader:`
    attribute float size;
    attribute vec3 color;
    attribute float phase;
    
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uPixelRatio;
    
    varying vec3 vColor;
    varying float vTwinkle;
    varying float vBrightness;
    
    void main() {
      vColor = color;
      
      vec3 pos = position;
      
      // Subtle floating motion
      pos.x += sin(uTime * 0.3 + phase) * 0.05;
      pos.y += cos(uTime * 0.4 + phase * 1.3) * 0.05;
      pos.z += sin(uTime * 0.2 + phase * 0.7) * 0.03;
      
      // Magnetic cursor attraction
      vec3 toMouse = uMouse - pos;
      float distToMouse = length(toMouse);
      float attraction = 3.0 / (distToMouse * distToMouse + 2.0);
      pos += normalize(toMouse) * attraction * 0.3;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Twinkle effect
      vTwinkle = 0.6 + 0.4 * sin(uTime * 4.0 + phase * 10.0);
      vBrightness = 1.0 - smoothstep(5.0, 30.0, length(pos));
      
      float sizeAtten = 250.0 / -mvPosition.z;
      gl_PointSize = size * sizeAtten * uPixelRatio * vTwinkle;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    varying vec3 vColor;
    varying float vTwinkle;
    varying float vBrightness;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      // Crisp star points - minimal glow
      float glow = 1.0 - smoothstep(0.0, 0.35, dist);
      glow = pow(glow, 3.0); // Sharp falloff
      
      // Tiny bright core
      float core = 1.0 - smoothstep(0.0, 0.08, dist);
      
      // Clean white-ish stars, less color saturation
      vec3 finalColor = mix(vec3(1.0), vColor, 0.3) * (0.8 + core * 0.4);
      float alpha = glow * vTwinkle * vBrightness * 0.7;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `,transparent:!0,blending:Ls,depthWrite:!1}),Fy=new op(Jo,Tl);cr.add(Fy);const Oy=new Hi(60,60),Fm=new Zt({uniforms:{uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float uTime;
    varying vec2 vUv;
    
    ${Wf}
    
    void main() {
      vec2 uv = vUv - 0.5;
      
      // Subtle nebula - dark base
      float n1 = snoise(vec3(uv * 1.5, uTime * 0.02)) * 0.5 + 0.5;
      float n2 = snoise(vec3(uv * 2.5 + 5.0, uTime * 0.015)) * 0.5 + 0.5;
      
      // Very dark muted colors
      vec3 color1 = vec3(0.08, 0.02, 0.12) * n1; // Dark purple
      vec3 color2 = vec3(0.02, 0.06, 0.1) * n2; // Dark blue
      
      vec3 color = color1 + color2;
      
      // Strong edge fade to black
      float fade = 1.0 - smoothstep(0.2, 0.5, length(uv));
      
      // Very dark background - nearly black
      vec3 bgColor = vec3(0.012, 0.012, 0.018);
      color = mix(bgColor, color + bgColor, fade * 0.4);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,transparent:!1,depthWrite:!1}),Om=new Qt(Oy,Fm);Om.position.z=-25;cr.add(Om);const Qo=new vi;Qo.visible=!1;Qr.add(Qo);const By=new Ul(2.2,Fi.morphSubdivision),Qu=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new at(0,0)}},vertexShader:`
    uniform float uTime;
    uniform vec2 uMouse;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    varying float vFresnel;
    
    ${Wf}
    
    void main() {
      // Dual-octave noise displacement (optimized from 3)
      float noiseScale = 1.2;
      float noise1 = snoise(position * noiseScale + uTime * 0.3) * 0.5;
      float noise2 = snoise(position * noiseScale * 2.0 - uTime * 0.2) * 0.25;
      
      float displacement = noise1 + noise2;
      
      // Mouse influence - STRONG reaction to cursor
      float mouseLen = length(uMouse);
      float mouseWave = sin(position.x * 4.0 + uTime * 3.0) * sin(position.y * 4.0 + uTime * 2.5);
      displacement += mouseLen * mouseWave * 0.6; // Much stronger effect
      displacement += sin(position.z * 3.0 + uTime * 2.0 + mouseLen * 5.0) * mouseLen * 0.4;
      
      vec3 newPosition = position + normal * displacement;
      vDisplacement = displacement;
      
      // Calculate view-dependent values
      vec4 worldPosition = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = newPosition;
      vNormal = normalize(normalMatrix * normal);
      
      // Fresnel
      vec3 viewDir = normalize(cameraPosition - worldPosition.xyz);
      vFresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform vec2 uMouse;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    varying float vFresnel;
    
    void main() {
      // SIMPLE purple-to-cyan gradient based on displacement
      float t = vDisplacement * 1.5 + 0.5;
      t = clamp(t, 0.0, 1.0);
      
      // Clean two-color gradient: purple -> cyan
      vec3 purple = vec3(0.5, 0.2, 0.9);
      vec3 cyan = vec3(0.2, 0.85, 0.95);
      vec3 color = mix(purple, cyan, t);
      
      // Subtle fresnel rim (cyan tint)
      color = mix(color, cyan, vFresnel * 0.35);
      
      // Single clean specular
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(vNormal, halfDir), 0.0), 48.0);
      color += spec * 0.4;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,side:ci}),ef=new Qt(By,Qu);Qo.add(ef);const ea=new vi;ea.visible=!1;Qr.add(ea);const zy=new Hi(20,12,1,1),bl=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new at(.5,.5)},uResolution:{value:new at(window.innerWidth,window.innerHeight)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    
    varying vec2 vUv;
    
    // Simplex noise for domain warping
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    
    float snoise2D(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    // Domain warping function
    vec2 warp(vec2 p, float t) {
      float n = snoise2D(p * 3.0 + t * 0.2);
      float m = snoise2D(p.yx * 3.0 + 10.0 + t * 0.15);
      return p + vec2(n, m) * 0.06;
    }
    
    // Smooth metaball with softer falloff
    float metaball(vec2 p, vec2 center, float radius) {
      float d = length(p - center);
      return radius * radius / (d * d + 0.0002);
    }
    
    void main() {
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
      vec2 p = (vUv - 0.5) * aspect;
      vec2 mouse = (uMouse - 0.5) * aspect;
      
      // 1. DOMAIN WARPING - Organic distortion
      vec2 warpedP = warp(p, uTime);
      
      float sum = 0.0;
      float sumBg = 0.0; // Background layer
      
      // Main mouse-following blob
      sum += metaball(warpedP, mouse, 0.18);
      
      // ${Fi.fluidSatellites} satellite blobs with organic motion
      for (int i = 0; i < ${Fi.fluidSatellites}; i++) {
        float fi = float(i);
        float speed = 0.3 + fi * 0.05;
        float angle = uTime * speed + fi * 0.898;
        float orbit = 0.15 + fi * 0.065 + sin(uTime * 0.6 + fi * 1.2) * 0.04;
        vec2 pos = vec2(cos(angle), sin(angle)) * orbit;
        pos += (mouse - pos) * 0.12;
        float size = 0.055 + sin(uTime * 1.0 + fi * 2.2) * 0.018;
        sum += metaball(warpedP, pos, size);
        
        // Background layer (larger, softer)
        sumBg += metaball(p, pos * 1.3, size * 1.5) * 0.3;
      }
      
      // ${Fi.fluidDroplets} Micro-droplets
      for (int i = 0; i < ${Fi.fluidDroplets}; i++) {
        float fi = float(i);
        float speed = 0.8 + fi * 0.15;
        float angle = uTime * speed + fi * 3.5;
        float orbit = 0.25 + sin(uTime * 1.5 + fi) * 0.1;
        vec2 pos = vec2(cos(angle), sin(angle)) * orbit;
        pos += (mouse - pos) * 0.05;
        float size = 0.02 + sin(uTime * 3.0 + fi) * 0.01;
        sum += metaball(warpedP, pos, size);
      }
      
      // 2. GRADIENT NORMAL CALCULATION
      vec2 eps = vec2(0.008, 0.0);
      float gradX = metaball(warpedP + eps, mouse, 0.18) - metaball(warpedP - eps, mouse, 0.18);
      float gradY = metaball(warpedP + eps.yx, mouse, 0.18) - metaball(warpedP - eps.yx, mouse, 0.18);
      vec3 normal = normalize(vec3(gradX, gradY, 0.3));
      
      // Base shape with smooth threshold
      float alpha = smoothstep(0.85, 1.2, sum);
      float edge = smoothstep(0.9, 1.1, sum) - smoothstep(1.1, 1.4, sum);
      
      // 3. IRIDESCENCE - Oil-slick rainbow
      float iriPhase = sum * 8.0 + uTime * 0.5 + dot(normal.xy, p) * 10.0;
      vec3 iridescence = 0.5 + 0.5 * cos(iriPhase + vec3(0.0, 2.094, 4.188));
      
      // 4. CAUSTICS - Dancing light patterns
      float causticBase = snoise2D(warpedP * 8.0 + uTime * 0.8);
      float caustic = pow(max(0.0, causticBase * 0.5 + 0.5), 6.0) * edge * 0.8;
      
      // 5. SUBSURFACE SCATTERING
      float thickness = smoothstep(0.8, 2.5, sum);
      float sss = pow(thickness, 2.0) * 0.4;
      vec3 sssColor = vec3(0.2, 0.5, 0.8) * sss;
      
      // 6. MULTI-LIGHT SPECULAR SYSTEM
      // Light 1: Warm (animated)
      vec3 light1Dir = normalize(vec3(sin(uTime * 0.5) * 0.5, cos(uTime * 0.3) * 0.5, 1.0));
      float spec1 = pow(max(dot(normal, light1Dir), 0.0), 64.0);
      vec3 specColor1 = vec3(1.0, 0.9, 0.7) * spec1 * 0.6;
      
      // Light 2: Cool (static)
      vec3 light2Dir = normalize(vec3(-0.5, 0.7, 1.0));
      float spec2 = pow(max(dot(normal, light2Dir), 0.0), 48.0);
      vec3 specColor2 = vec3(0.6, 0.8, 1.0) * spec2 * 0.4;
      
      // Light 3: Interactive (mouse-driven)
      vec3 light3Dir = normalize(vec3(mouse.x * 2.0, mouse.y * 2.0, 0.8));
      float spec3 = pow(max(dot(normal, light3Dir), 0.0), 96.0);
      vec3 specColor3 = vec3(1.0, 1.0, 1.0) * spec3 * 0.5;
      
      // 7. FRESNEL RIM
      float fresnel = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 4.0);
      vec3 fresnelColor = mix(vec3(0.3, 0.6, 1.0), iridescence, 0.5) * fresnel * 0.6;
      
      // 8. DEPTH LAYERING - Background bokeh
      float bgAlpha = smoothstep(0.3, 0.8, sumBg);
      vec3 bgColor = vec3(0.05, 0.1, 0.15) * bgAlpha * 0.5;
      
      // BASE COLOR - Deep liquid with gradient
      vec3 deepColor = vec3(0.02, 0.05, 0.1);
      vec3 midColor = vec3(0.1, 0.2, 0.3);
      vec3 surfaceColor = vec3(0.3, 0.5, 0.6);
      
      float depthGrad = smoothstep(0.0, 1.5, sum);
      vec3 baseColor = mix(deepColor, midColor, depthGrad);
      baseColor = mix(baseColor, surfaceColor, pow(depthGrad, 2.0));
      
      // COMBINE ALL EFFECTS
      vec3 finalColor = baseColor;
      finalColor += sssColor;                          // Subsurface glow
      finalColor += iridescence * edge * 0.25;         // Edge iridescence
      finalColor += specColor1 + specColor2 + specColor3; // Multi-light specular
      finalColor += fresnelColor;                       // Rim lighting
      finalColor += vec3(1.0, 0.95, 0.9) * caustic;    // Caustic highlights
      
      // Background layer
      vec3 bg = vec3(0.008, 0.01, 0.015);
      finalColor = mix(bg + bgColor, finalColor, alpha);
      
      // Final polish: Subtle vignette on the fluid
      float vignette = 1.0 - smoothstep(0.3, 0.7, length(p));
      finalColor *= 0.9 + vignette * 0.1;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,transparent:!1}),Bm=new Qt(zy,bl);Bm.position.z=-3;ea.add(Bm);const qs=new vi;qs.visible=!1;Qr.add(qs);const Xf=(r,e,t)=>{const n=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new at(0,0)}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying vec3 vViewDirection;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDirection = normalize(cameraPosition - worldPos.xyz);
        
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec2 uMouse; // Added missing uniform
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying vec3 vViewDirection;
      
      void main() {
        // Fresnel effect
        float fresnel = pow(1.0 - max(dot(vViewDirection, vNormal), 0.0), 4.0);
        
        // Refraction simulation
        vec3 refractDir = refract(-vViewDirection, vNormal, 0.85);
        
        // Chromatic dispersion (rainbow effect)
        float dispersion = dot(refractDir, vNormal);
        
        vec3 color;
        color.r = 0.5 + 0.5 * sin(vPosition.x * 8.0 + uTime * 1.5 + dispersion * 5.0);
        color.g = 0.5 + 0.5 * sin(vPosition.y * 8.0 + uTime * 1.7 + dispersion * 5.0 + 2.094);
        color.b = 0.5 + 0.5 * sin(vPosition.z * 8.0 + uTime * 1.3 + dispersion * 5.0 + 4.188);
        
        // Base crystal tint
        vec3 crystalTint = vec3(0.7, 0.5, 1.0);
        color = mix(crystalTint, color, fresnel * 0.8 + 0.2);
        
        // Specular highlights - controlled by mouse
        // Map mouse to light direction
        vec2 mousePos = uMouse * 2.0 - 1.0; // -1 to 1
        vec3 lightDir = normalize(vec3(mousePos.x * 5.0, mousePos.y * 5.0 + 2.0, 5.0));
        
        vec3 halfDir = normalize(lightDir + vViewDirection);
        float spec = pow(max(dot(vNormal, halfDir), 0.0), 128.0);
        
        // Secondary specular
        vec3 lightDir2 = normalize(vec3(-1.0, 1.0, -1.0));
        vec3 halfDir2 = normalize(lightDir2 + vViewDirection);
        float spec2 = pow(max(dot(vNormal, halfDir2), 0.0), 64.0);
        
        color += spec * 1.2;
        color += spec2 * vec3(0.8, 0.6, 1.0) * 0.5;
        
        // Rim lighting
        color += fresnel * vec3(0.6, 0.4, 1.0) * 0.8;
        
        // Internal glow
        float internalGlow = pow(fresnel, 2.0) * 0.3;
        color += internalGlow * vec3(1.0, 0.5, 0.8);
        
        gl_FragColor = vec4(color, 0.95);
      }
    `,transparent:!0,side:ci}),i=new Qt(r,n);return i.position.copy(e),i.scale.setScalar(t),i.userData.material=n,i},ky=new _f(1,0),Gy=new Ul(.9,0),Hy=new mf(.85,0),Vy=Xf(ky,new z(-3.5,0,0),1.2),Wy=Xf(Gy,new z(0,.5,0),1.4),Xy=Xf(Hy,new z(3.5,-.3,0),1.1);qs.add(Vy,Wy,Xy);const pr=new vi;pr.visible=!1;Qr.add(pr);const jr=Fi.cosmosNodes,wl=[],Ri=[],tf=new Array(jr).fill(0),Al=[];for(let r=0;r<jr;r++)Al.push(new z((Math.random()-.5)*14,(Math.random()-.5)*8,(Math.random()-.5)*10));for(let r=0;r<jr;r++)for(let e=r+1;e<jr;e++)Al[r].distanceTo(Al[e])<3.5&&(tf[r]++,tf[e]++);const Yy=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new z(0,0,0)}},vertexShader:`
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform vec3 uMouse;
    
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      
      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      
      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      
      //   x0 = x0 - 0.0 + 0.0 * C.xxx;
      //   x1 = x0 - i1  + 1.0 * C.xxx;
      //   x2 = x0 - i2  + 2.0 * C.xxx;
      //   x3 = x0 - 1.0 + 3.0 * C.xxx;
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - 1.0 + D.yyy; // -1.0+3.0*C.x = -0.5 = -D.y
      
      // Permutations
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
               
      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      
      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      
      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    void main() {
      // 1. Base Color & Variety
      float hue = 0.55 + vWorldPos.x * 0.03 + vWorldPos.y * 0.02;
      vec3 baseColor = 0.5 + 0.5 * cos(6.28318 * (hue + vec3(0.0, 0.33, 0.67)));
      
      // 2. Internal Plasma Noise
      // Moving 3D noise inside the sphere
      float noise = snoise(vWorldPos * 2.0 + uTime * 0.5);
      float plasma = smoothstep(0.2, 0.8, noise * 0.5 + 0.5);
      
      // 3. Holographic Scanlines
      // Horizontal lines moving up
      float scanline = sin(vWorldPos.y * 20.0 - uTime * 3.0);
      scanline = smoothstep(0.8, 1.0, scanline);
      
      // 4. Fresnel Rim (Glassy)
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      // 5. Mouse Interaction
      float mouseDist = length(vWorldPos - uMouse);
      float mouseGlow = 1.0 / (1.0 + mouseDist * 0.5);
      
      // COMPOSITION
      vec3 color = baseColor * 0.2; // Dark core
      
      // Add plasma energy
      color += baseColor * plasma * 1.5;
      
      // Add scanlines (bright white/cyan)
      color += vec3(0.8, 1.0, 1.0) * scanline * 0.5;
      
      // Add sharp rim
      color += baseColor * fresnel * 2.0;
      color += vec3(1.0) * pow(fresnel, 5.0) * 0.5; // White edge
      
      // Add mouse glow
      color += vec3(1.0, 0.6, 0.2) * mouseGlow * 0.8;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,transparent:!1});for(let r=0;r<jr;r++){const e=Al[r];Ri.push(e);const t=tf[r]>=4,n=t?.12:.06+Math.random()*.06,i=new gf(n,12,12),s=Yy.clone(),o=new Qt(i,s);o.position.copy(e),o.userData.originalY=e.y,o.userData.phase=Math.random()*Math.PI*2,o.userData.isHub=t,o.userData.material=s,wl.push(o),pr.add(o);const a=t?1.2:.6,l=new Hi(a,a),c=new Zt({uniforms:{uColor:{value:new ut().setHSL(.6+Math.random()*.3,.8,.6)},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);
        
        // Soft radial glow
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        glow = pow(glow, 2.5);
        
        // Pulse
        float pulse = 0.8 + 0.2 * sin(uTime * 2.0);
        
        vec3 color = uColor * glow * pulse;
        float alpha = glow * 0.8; // Increased alpha
        
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,blending:Ls,depthWrite:!1}),u=new Qt(l,c);u.position.copy(e),u.userData.material=c,o.userData.glow=u,pr.add(u)}const zm=[],km=[],rl=[];let Nc=0;for(let r=0;r<jr;r++)for(let e=r+1;e<jr;e++)Ri[r].distanceTo(Ri[e])<3.5&&(zm.push(Ri[r].x,Ri[r].y,Ri[r].z,Ri[e].x,Ri[e].y,Ri[e].z),km.push(Nc,Nc),rl.push({a:wl[r],b:wl[e]}),Nc++);const ko=new Pn;ko.setAttribute("position",new tn(zm,3));ko.setAttribute("lineIndex",new tn(km,1));const nf=new Zt({uniforms:{uTime:{value:0},uMouse:{value:new z(0,0,0)}},vertexShader:`
    attribute float lineIndex;
    uniform float uTime;
    uniform vec3 uMouse;
    
    varying float vPulse;
    varying float vAlpha;
    varying float vStreamPos;
    varying float vMouseProx;
    
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      
      // Bidirectional data pulse
      float speed = 4.0;
      float stream = mod(uTime * speed + lineIndex * 0.7, 6.28318);
      float stream2 = mod(uTime * speed - lineIndex * 0.7 + 3.14159, 6.28318);
      vPulse = max(pow(sin(stream) * 0.5 + 0.5, 3.0), pow(sin(stream2) * 0.5 + 0.5, 3.0));
      
      // Mouse proximity
      float mouseDist = length(worldPos.xyz - uMouse);
      vMouseProx = 1.0 / (1.0 + mouseDist * 0.3);
      
      // Base alpha + pulse + mouse boost
      vAlpha = 0.15 + vPulse * 0.5 + vMouseProx * 0.5;
      vStreamPos = sin(uTime * 6.0 + lineIndex * 1.5) * 0.5 + 0.5;
      
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    varying float vPulse;
    varying float vAlpha;
    varying float vStreamPos;
    varying float vMouseProx;
    
    void main() {
      // Vibrant gradient: electric purple -> bright cyan -> white flash
      vec3 purple = vec3(0.6, 0.2, 1.0);
      vec3 cyan = vec3(0.0, 0.9, 1.0);
      vec3 white = vec3(1.0, 1.0, 1.0);
      vec3 orange = vec3(1.0, 0.5, 0.2);
      
      // Color shifts with pulse and mouse
      vec3 color = mix(purple, cyan, vStreamPos);
      color = mix(color, white, vPulse * 0.5);
      color = mix(color, orange, vMouseProx * 0.6);
      
      gl_FragColor = vec4(color, vAlpha);
    }
  `,transparent:!0,blending:Ls,depthWrite:!1,linewidth:2}),qy=new KM(ko,nf);pr.add(qy);const $y=[js,cr,Qo,ea,qs,pr];function Ad(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}const Cl=document.getElementById("cursor"),Ky=Cl.querySelector(".cursor-dot"),Zy=Cl.querySelector(".cursor-ring");let Fc=0,Oc=0,Rl=0,Pl=0;function jy(){Fc+=(Rl-Fc)*.15,Oc+=(Pl-Oc)*.15,Ky.style.transform=`translate(${Rl}px, ${Pl}px) translate(-50%, -50%)`,Zy.style.transform=`translate(${Fc}px, ${Oc}px) translate(-50%, -50%)`}document.addEventListener("mousemove",r=>{Rl=r.clientX,Pl=r.clientY,ct.mouse.targetX=r.clientX/window.innerWidth*2-1,ct.mouse.targetY=-(r.clientY/window.innerHeight)*2+1});document.addEventListener("touchmove",r=>{if(r.touches.length>0){const e=r.touches[0];Rl=e.clientX,Pl=e.clientY,ct.mouse.targetX=e.clientX/window.innerWidth*2-1,ct.mouse.targetY=-(e.clientY/window.innerHeight)*2+1}},{passive:!0});document.querySelectorAll("a, button, .nav-link, .cta-button").forEach(r=>{r.addEventListener("mouseenter",()=>Cl.classList.add("hover")),r.addEventListener("mouseleave",()=>Cl.classList.remove("hover"))});const Jy=document.getElementById("nav"),Qy=document.querySelector(".nav-progress-fill"),eE=document.querySelectorAll(".nav-link"),Bc=[1,0,0,0,0,0],zc=document.querySelectorAll(".section-content");function tE(r){const t=r*6,n=Math.min(Math.floor(t),5),i=t-n,s=.15,o=.85;for(let a=0;a<6;a++){let l=0;a===n&&(a===0&&i<s?l=1:i<s?l=Ad(i/s):i>o&&a!==5?l=Ad(1-(i-o)/(1-o)):l=1),Bc[a]=l,zc[a]&&Xs.to(zc[a],{opacity:l,y:(1-l)*50,duration:.5,ease:"power2.out",overwrite:!0,onComplete:()=>{zc[a].style.pointerEvents=l>.01?"auto":"none"}})}$y.forEach((a,l)=>{const c=Bc[l]>.001;if(a.visible=c,c){const u=.8+.2*Bc[l];a.scale.set(u,u,u)}c&&l===0&&ir&&(ir.uniforms.uProgress.value=i)}),eE.forEach((a,l)=>{a.classList.toggle("active",l===n)}),ct.currentSection=n}Je.create({trigger:"#main",start:"top top",end:"bottom bottom",onUpdate:r=>{const e=r.progress;Qy.style.width=`${e*100}%`,tE(e)}});const nE=Xs.timeline({delay:.5});function iE(){const r=document.querySelectorAll(".hero-line"),e=document.querySelector(".hero-subtitle");nE.to(r,{opacity:1,y:0,rotateX:0,duration:1.2,stagger:.15,ease:"power4.out"}).to(e,{opacity:1,y:0,duration:1,ease:"power3.out"},"-=0.5")}ct.sections.forEach((r,e)=>{if(e===0)return;const t=document.getElementById(r),n=t.querySelector(".section-label"),i=t.querySelector(".section-title"),s=t.querySelector(".section-description"),o=t.querySelector(".cta-container"),a=[n,i,s,o].filter(Boolean);Je.create({trigger:t,start:"top 60%",onEnter:()=>{Xs.to(a,{opacity:1,y:0,duration:1,stagger:.15,ease:"power3.out"})},onLeaveBack:()=>{Xs.to(a,{opacity:0,y:30,duration:.5,stagger:.05})}})});const rE=document.getElementById("loader"),sE=document.querySelector(".loader-progress"),oE=document.querySelector(".loader-percent");function aE(){let r=0;const e=setInterval(()=>{r+=Math.random()*12,r>=100&&(r=100,clearInterval(e),setTimeout(()=>{rE.classList.add("hidden"),Jy.classList.add("visible"),ct.isLoading=!1,iE()},400)),sE.style.width=`${r}%`,oE.textContent=`${Math.floor(r)}%`},80)}function Gm(r){requestAnimationFrame(Gm),ct.deltaTime=Math.min((r-ct.lastTime)/1e3,.1),ct.lastTime=r,ct.time+=ct.deltaTime,ct.mouse.x+=(ct.mouse.targetX-ct.mouse.x)*.08,ct.mouse.y+=(ct.mouse.targetY-ct.mouse.y)*.08,jy();const e=ct.time;if(js.visible){const n=2+ir.uniforms.uProgress.value*10;ct.portalTravel+=n*ct.deltaTime,ir.uniforms.uTime.value=e,ir.uniforms.uTravel.value=ct.portalTravel,ir.uniforms.uMouse.value.set(ct.mouse.x,ct.mouse.y)}if(cr.visible&&(Tl.uniforms.uTime.value=e,Tl.uniforms.uMouse.value.set(ct.mouse.x*8,ct.mouse.y*8,0),Fm.uniforms.uTime.value=e,cr.rotation.y=e*.03,cr.rotation.x=Math.sin(e*.1)*.05),Qo.visible&&(Qu.uniforms.uTime.value=e,Qu.uniforms.uMouse.value.set(ct.mouse.x,ct.mouse.y),ef.rotation.x=e*.2,ef.rotation.y=e*.15),ea.visible&&(bl.uniforms.uTime.value=e,bl.uniforms.uMouse.value.set((ct.mouse.x+1)*.5,(ct.mouse.y+1)*.5)),qs.visible&&qs.children.forEach((t,n)=>{t.userData.material&&(t.userData.material.uniforms.uTime.value=e),t.rotation.x=e*.25+n*.8,t.rotation.y=e*.35+n*.5,t.position.y=Math.sin(e*.8+n*1.2)*.3+(n===1?.5:n===2?-.3:0),t.userData.material&&t.userData.material.uniforms.uMouse.value.set((ct.mouse.x+1)*.5,(ct.mouse.y+1)*.5)}),pr.visible){nf.uniforms.uTime.value=e;const t=ct.mouse.x*7,n=ct.mouse.y*4;nf.uniforms.uMouse.value.set(t,n,0);const i=new z(t,n,0);wl.forEach((o,a)=>{o.position.y=o.userData.originalY+Math.sin(e*1.5+o.userData.phase)*.15,o.position.x+=Math.cos(e+o.userData.phase)*.002,o.userData.material&&(o.userData.material.uniforms.uTime.value=e,o.userData.material.uniforms.uMouse.value.copy(i)),o.userData.glow&&(o.userData.glow.position.copy(o.position),o.userData.glow.lookAt(zo.position),o.userData.glow.userData.material&&(o.userData.glow.userData.material.uniforms.uTime.value=e))});const s=ko.attributes.position.array;for(let o=0;o<rl.length;o++){const a=rl[o].a,l=rl[o].b,c=o*6;s[c]=a.position.x,s[c+1]=a.position.y,s[c+2]=a.position.z,s[c+3]=l.position.x,s[c+4]=l.position.y,s[c+5]=l.position.z}ko.attributes.position.needsUpdate=!0,pr.rotation.y=e*.04}ni.render(Qr,zo)}function lE(){const r=window.innerWidth,e=window.innerHeight;zo.aspect=r/e,zo.updateProjectionMatrix(),ni.setSize(r,e),ni.setPixelRatio(Math.min(window.devicePixelRatio,2)),bl.uniforms.uResolution.value.set(r,e),ir.uniforms.uPixelRatio.value=ni.getPixelRatio(),Tl.uniforms.uPixelRatio.value=ni.getPixelRatio()}window.addEventListener("resize",lE);aE();Gm(0);
