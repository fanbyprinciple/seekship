import{L as lf,_ as hf,C as df,r as ku,a as ff,F as mf,b as te,c as gf,d as pf,i as il,p as _f,e as ol,g as Ms,f as yf,h as If,j as al,k as Ut,S as Tf}from"./firebase-core-DKurR5sn.js";var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _e,ul;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function y(){}y.prototype=p.prototype,T.D=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,v,R){for(var _=Array(arguments.length-2),Yt=2;Yt<arguments.length;Yt++)_[Yt-2]=arguments[Yt];return p.prototype[v].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(v=0;16>v;++v)E[v]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],v=T.g[2];var R=T.g[3],_=p+(R^y&(v^R))+E[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[1]+3905402710&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[5]+1200080426&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[9]+2336552879&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[13]+4254626195&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(v^R&(y^v))+E[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[6]+3225465664&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[10]+38016083&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[14]+3275163606&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[2]+4243563512&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(y^v^R)+E[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[8]+2272392833&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[4]+1272893353&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[0]+3936430074&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[12]+3873151461&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(v^(y|~R))+E[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[7]+1126891415&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[3]+2399980690&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[15]+4264355552&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[11]+3174756917&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var y=p-this.blockSize,E=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=y;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[v++]=T.charCodeAt(R++),v==this.blockSize){s(this,E),v=0;break}}else for(;R<p;)if(E[v++]=T[R++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var y=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=y&255,y/=256;for(this.u(T),T=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)T[y++]=this.g[p]>>>E&255;return T};function i(T,p){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;for(var y=[],E=!0,v=T.length-1;0<=v;v--){var R=T[v]|0;E&&R==p||(y[v]=R,E=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return x(d(-T));for(var p=[],y=1,E=0;T>=y;E++)p[E]=T/y|0,y*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return x(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),E=g,v=0;v<T.length;v+=8){var R=Math.min(8,T.length-v),_=parseInt(T.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=l(0),I=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(k(this))return-x(this).m();for(var T=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var p=d(Math.pow(T,6)),y=this,E="";;){var v=X(y,p).g;y=K(y,v.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,C(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function k(T){return T.h==-1}r.l=function(T){return T=K(this,T),k(T)?-1:C(T)?0:1};function x(T){for(var p=T.g.length,y=[],E=0;E<p;E++)y[E]=~T.g[E];return new a(y,~T.h).add(I)}r.abs=function(){return k(this)?x(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0,v=0;v<=p;v++){var R=E+(this.i(v)&65535)+(T.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function K(T,p){return T.add(x(p))}r.j=function(T){if(C(this)||C(T))return g;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var R=this.i(E)>>>16,_=this.i(E)&65535,Yt=T.i(v)>>>16,qn=T.i(v)&65535;y[2*E+2*v]+=_*qn,j(y,2*E+2*v),y[2*E+2*v+1]+=R*qn,j(y,2*E+2*v+1),y[2*E+2*v+1]+=_*Yt,j(y,2*E+2*v+1),y[2*E+2*v+2]+=R*Yt,j(y,2*E+2*v+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function j(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function X(T,p){if(C(p))throw Error("division by zero");if(C(T))return new B(g,g);if(k(T))return p=X(x(T),p),new B(x(p.g),x(p.h));if(k(p))return p=X(T,x(p)),new B(x(p.g),p.h);if(30<T.g.length){if(k(T)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=p;0>=E.l(T);)y=et(y),E=et(E);var v=Q(y,1),R=Q(E,1);for(E=Q(E,2),y=Q(y,2);!C(E);){var _=R.add(E);0>=_.l(T)&&(v=v.add(y),R=_),E=Q(E,1),y=Q(y,1)}return p=K(T,v.j(p)),new B(v,p)}for(v=g;0<=T.l(p);){for(y=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(y),_=R.j(p);k(_)||0<_.l(T);)y-=E,R=d(y),_=R.j(p);C(R)&&(R=I),v=v.add(R),T=K(T,_)}return new B(v,T)}r.A=function(T){return X(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function et(T){for(var p=T.g.length+1,y=[],E=0;E<p;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function Q(T,p){var y=p>>5;p%=32;for(var E=T.g.length-y,v=[],R=0;R<E;R++)v[R]=0<p?T.i(R+y)>>>p|T.i(R+y+1)<<32-p:T.i(R+y);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ul=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,_e=a}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cl,cr,ll,Rs,ro,hl,dl,fl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var V=h++;return{value:c(V,o[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,I.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,V){for(var N=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)N[tt-2]=arguments[tt];return c.prototype[A].apply(f,N)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function x(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const A=o.length||0,V=f.length||0;o.length=A+V;for(let N=0;N<V;N++)o[A+N]=f[N]}else o.push(f)}}class K{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var et=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let V=0;V<y.length;V++)h=y[V],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Ri;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Yt{constructor(){this.h=this.g=null}add(c,h){const f=qn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qn=new K(()=>new Sd,o=>o.reset());class Sd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let jn,zn=!1,Ri=new Yt,ka=()=>{const o=u.Promise.resolve(void 0);jn=()=>{o.then(bd)}};var bd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var c=qn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}zn=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Tt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var Cd=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o})();function Kn(o,c){if(Tt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(et){t:{try{X(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Dd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}C(Kn,Tt);var Dd={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),xd=0;function Nd(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++xd,this.da=this.fa=!1}function ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function es(o){this.src=o,this.g={},this.h=0}es.prototype.add=function(o,c,h,f,A){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var N=Pi(o,c,f,A);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Nd(c,this.src,V,!!f,A),c.fa=h,o.push(c)),c};function Vi(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),V;(V=0<=A)&&Array.prototype.splice.call(f,A,1),V&&(ts(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Pi(o,c,h,f){for(var A=0;A<o.length;++A){var V=o[A];if(!V.da&&V.listener==c&&V.capture==!!h&&V.ha==f)return A}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),bi={};function Fa(o,c,h,f,A){if(Array.isArray(c)){for(var V=0;V<c.length;V++)Fa(o,c[V],h,f,A);return null}return h=La(h),o&&o[Zr]?o.K(c,h,d(f)?!!f.capture:!1,A):kd(o,c,h,!1,f,A)}function kd(o,c,h,f,A,V){if(!c)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,tt=Di(o);if(tt||(o[Si]=tt=new es(o)),h=tt.add(c,h,f,N,V),h.proxy)return h;if(f=Fd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Cd||(A=N),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(Ma(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Fd(){function o(h){return c.call(o.src,o.listener,h)}const c=Od;return o}function Oa(o,c,h,f,A){if(Array.isArray(c))for(var V=0;V<c.length;V++)Oa(o,c[V],h,f,A);else f=d(f)?!!f.capture:!!f,h=La(h),o&&o[Zr]?(o=o.i,c=String(c).toString(),c in o.g&&(V=o.g[c],h=Pi(V,h,f,A),-1<h&&(ts(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete o.g[c],o.h--)))):o&&(o=Di(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Pi(c,h,f,A)),(h=-1<o?c[o]:null)&&Ci(h))}function Ci(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Zr])Vi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ma(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Di(c))?(Vi(h,o),h.h==0&&(h.src=null,c[Si]=null)):ts(o)}}}function Ma(o){return o in bi?bi[o]:bi[o]="on"+o}function Od(o,c){if(o.da)o=!0;else{c=new Kn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ci(o),o=h.call(f,c)}return o}function Di(o){return o=o[Si],o instanceof es?o:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function La(o){return typeof o=="function"?o:(o[xi]||(o[xi]=function(c){return o.handleEvent(c)}),o[xi])}function Et(){ue.call(this),this.i=new es(this),this.M=this,this.F=null}C(Et,ue),Et.prototype[Zr]=!0,Et.prototype.removeEventListener=function(o,c,h,f){Oa(this,o,c,h,f)};function St(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new Tt(c,o);else if(c instanceof Tt)c.target=c.target||o;else{var A=c;c=new Tt(f,o),E(c,A)}if(A=!0,h)for(var V=h.length-1;0<=V;V--){var N=c.g=h[V];A=ns(N,f,!0,c)&&A}if(N=c.g=o,A=ns(N,f,!0,c)&&A,A=ns(N,f,!1,c)&&A,h)for(V=0;V<h.length;V++)N=c.g=h[V],A=ns(N,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)ts(h[f]);delete o.g[c],o.h--}}this.F=null},Et.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Et.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function ns(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,V=0;V<c.length;++V){var N=c[V];if(N&&!N.da&&N.capture==h){var tt=N.listener,_t=N.ha||N.src;N.fa&&Vi(o.i,N),A=tt.call(_t,f)!==!1&&A}}return A&&!f.defaultPrevented}function Ua(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ba(o){o.g=Ua(()=>{o.g=null,o.i&&(o.i=!1,Ba(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Md extends ue{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ba(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){ue.call(this),this.h=o,this.g={}}C(Gn,ue);var qa=[];function ja(o){Q(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ci(c)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),ja(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=u.JSON.stringify,Ld=u.JSON.parse,Ud=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ki(){}ki.prototype.h=null;function za(o){return o.h||(o.h=o.i())}function Ka(){}var $n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fi(){Tt.call(this,"d")}C(Fi,Tt);function Oi(){Tt.call(this,"c")}C(Oi,Tt);var Ce={},Ga=null;function rs(){return Ga=Ga||new Et}Ce.La="serverreachability";function $a(o){Tt.call(this,Ce.La,o)}C($a,Tt);function Qn(o){const c=rs();St(c,new $a(c))}Ce.STAT_EVENT="statevent";function Qa(o,c){Tt.call(this,Ce.STAT_EVENT,o),this.stat=c}C(Qa,Tt);function bt(o){const c=rs();St(c,new Qa(c,o))}Ce.Ma="timingevent";function Wa(o,c){Tt.call(this,Ce.Ma,o),this.size=c}C(Wa,Tt);function Wn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function Bd(o,c,h,f,A,V){o.info(function(){if(o.g)if(V)for(var N="",tt=V.split("&"),_t=0;_t<tt.length;_t++){var H=tt[_t].split("=");if(1<H.length){var vt=H[0];H=H[1];var wt=vt.split("_");N=2<=wt.length&&wt[1]=="type"?N+(vt+"="+H+"&"):N+(vt+"=redacted&")}}else N=null;else N=V;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+N})}function qd(o,c,h,f,A,V,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+V+" "+N})}function Ze(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+zd(o,h)+(f?" "+f:"")})}function jd(o,c){o.info(function(){return"TIMEOUT: "+c})}Hn.prototype.info=function(){};function zd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var V=A[0];if(V!="noop"&&V!="stop"&&V!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return Ni(h)}catch{return c}}var ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mi;function is(){}C(is,ki),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Mi=new is;function ce(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var Ya={},Li={};function Ui(o,c,h){o.L=1,o.v=cs(Jt(c)),o.m=h,o.P=!0,Ja(o,null)}function Ja(o,c){o.F=Date.now(),os(o),o.A=Jt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),du(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Xa,o.g=Cu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Md(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(qa[0]=A.toString()),A=qa);for(var V=0;V<A.length;V++){var N=Fa(h,A[V],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Qn(),Bd(o.i,o.u,o.A,o.l,o.R,o.m)}ce.prototype.ca=function(o){o=o.target;const c=this.M;c&&Zt(o)==3?c.j():this.Y(o)},ce.prototype.Y=function(o){try{if(o==this.g)t:{const wt=Zt(this.g);var c=this.g.Ba();const nn=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Iu(this.g)))){this.J||wt!=4||c==7||(c==8||0>=nn?Qn(3):Qn(2)),Bi(this);var h=this.g.Z();this.X=h;e:if(Za(this)){var f=Iu(this.g);o="";var A=f.length,V=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),Xn(this);var N="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(V&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,qd(this.i,this.u,this.A,this.l,this.R,wt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var tt,_t=this.g;if((tt=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(tt)){var H=tt;break e}}H=null}if(h=H)Ze(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qi(this,h);else{this.o=!1,this.s=3,bt(12),De(this),Xn(this);break t}}if(this.P){h=!0;let Bt;for(;!this.J&&this.C<N.length;)if(Bt=Kd(this,N),Bt==Li){wt==4&&(this.s=4,bt(14),h=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Ya){this.s=4,bt(15),Ze(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else Ze(this.i,this.l,Bt,null),qi(this,Bt);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||N.length!=0||this.h.h||(this.s=1,bt(16),h=!1),this.o=this.o&&h,!h)Ze(this.i,this.l,N,"[Invalid Chunked Response]"),De(this),Xn(this);else if(0<N.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Qi(vt),vt.M=!0,bt(11))}}else Ze(this.i,this.l,N,null),qi(this,N);wt==4&&De(this),this.o&&!this.J&&(wt==4?Vu(this.j,this):(this.o=!1,os(this)))}else uf(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),De(this),Xn(this)}}}catch{}finally{}};function Za(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Kd(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Li:(h=Number(c.substring(h,f)),isNaN(h)?Ya:(f+=1,f+h>c.length?Li:(c=c.slice(f,f+h),o.C=f+h,c)))}ce.prototype.cancel=function(){this.J=!0,De(this)};function os(o){o.S=Date.now()+o.I,tu(o,o.I)}function tu(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wn(I(o.ba,o),c)}function Bi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ce.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(jd(this.i,this.A),this.L!=2&&(Qn(),bt(17)),De(this),this.s=2,Xn(this)):tu(this,this.S-o)};function Xn(o){o.j.G==0||o.J||Vu(o.j,o)}function De(o){Bi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ja(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function qi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ji(h.h,o))){if(!o.K&&ji(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)gs(h),fs(h);else break t;$i(h),bt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wn(I(h.Za,h),6e3));if(1>=ru(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ne(h,11)}else if((o.K||h.g==o)&&gs(h),!j(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let H=A[c];if(h.T=H[0],H=H[1],h.G==2)if(H[0]=="c"){h.K=H[1],h.ia=H[2];const vt=H[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const wt=H[4];wt!=null&&(h.Aa=wt,h.j.info("SVER="+h.Aa));const nn=H[5];nn!=null&&typeof nn=="number"&&0<nn&&(f=1.5*nn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Bt=o.g;if(Bt){const _s=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var V=f.h;V.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(zi(V,V.h),V.h=null))}if(f.D){const Wi=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wi&&(f.ya=Wi,rt(f.I,f.D,Wi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=o;if(f.qa=bu(f,f.J?f.ia:null,f.W),N.K){su(f.h,N);var tt=N,_t=f.L;_t&&(tt.I=_t),tt.B&&(Bi(tt),os(tt)),f.g=N}else Au(f);0<h.i.length&&ms(h)}else H[0]!="stop"&&H[0]!="close"||Ne(h,7);else h.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ne(h,7):Gi(h):H[0]!="noop"&&h.l&&h.l.ta(H),h.v=0)}}Qn(4)}catch{}}var Gd=class{constructor(o,c){this.g=o,this.map=c}};function eu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ru(o){return o.h?1:o.g?o.g.size:0}function ji(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function zi(o,c){o.g?o.g.add(c):o.h=c}function su(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}eu.prototype.cancel=function(){if(this.i=iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function iu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function $d(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Qd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function ou(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Qd(o),f=$d(o),A=f.length,V=0;V<A;V++)c.call(void 0,f[V],h&&h[V],o)}var au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var V=o[h].substring(0,f);A=o[h].substring(f+1)}else V=o[h];c(V,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function xe(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xe){this.h=o.h,as(this,o.j),this.o=o.o,this.g=o.g,us(this,o.s),this.l=o.l;var c=o.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),uu(this,h),this.m=o.m}else o&&(c=String(o).match(au))?(this.h=!1,as(this,c[1]||"",!0),this.o=Yn(c[2]||""),this.g=Yn(c[3]||"",!0),us(this,c[4]),this.l=Yn(c[5]||"",!0),uu(this,c[6]||"",!0),this.m=Yn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}xe.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Jn(c,cu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Jn(c,cu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Jn(h,h.charAt(0)=="/"?Yd:Xd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Jn(h,Zd)),o.join("")};function Jt(o){return new xe(o)}function as(o,c,h){o.j=h?Yn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function us(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function uu(o,c,h){c instanceof Zn?(o.i=c,tf(o.i,o.h)):(h||(c=Jn(c,Jd)),o.i=new Zn(c,o.h))}function rt(o,c,h){o.i.set(c,h)}function cs(o){return rt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Hd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cu=/[#\/\?@]/g,Xd=/[#\?:]/g,Yd=/[#\?]/g,Jd=/[#\?@]/g,Zd=/#/g;function Zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function le(o){o.g||(o.g=new Map,o.h=0,o.i&&Wd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Zn.prototype,r.add=function(o,c){le(this),this.i=null,o=tn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function lu(o,c){le(o),c=tn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hu(o,c){return le(o),c=tn(o,c),o.g.has(c)}r.forEach=function(o,c){le(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},r.na=function(){le(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let V=0;V<A.length;V++)h.push(c[f])}return h},r.V=function(o){le(this);let c=[];if(typeof o=="string")hu(this,o)&&(c=c.concat(this.g.get(tn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return le(this),this.i=null,o=tn(this,o),hu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function du(o,c,h){lu(o,c),0<h.length&&(o.i=null,o.g.set(tn(o,c),k(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const V=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=V;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),o.push(A)}}return this.i=o.join("&")};function tn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function tf(o,c){c&&!o.j&&(le(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(lu(this,f),du(this,A,h))},o)),o.j=c}function ef(o,c){const h=new Hn;if(u.Image){const f=new Image;f.onload=S(he,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(he,h,"TestLoadImage: error",!1,c,f),f.onabort=S(he,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(he,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function nf(o,c){const h=new Hn,f=new AbortController,A=setTimeout(()=>{f.abort(),he(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(V=>{clearTimeout(A),V.ok?he(h,"TestPingServer: ok",!0,c):he(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),he(h,"TestPingServer: error",!1,c)})}function he(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function rf(){this.g=new Ud}function sf(o,c,h){const f=h||"";try{ou(o,function(A,V){let N=A;d(A)&&(N=Ni(A)),c.push(f+V+"="+encodeURIComponent(N))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function ls(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ls,ki),ls.prototype.g=function(){return new hs(this.l,this.j)},ls.prototype.i=(function(o){return function(){return o}})({});function hs(o,c){Et.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(hs,Et),r=hs.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?tr(this):er(this),this.readyState==3&&fu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},r.Qa=function(o){this.g&&(this.response=o,tr(this))},r.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,er(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function mu(o){let c="";return Q(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ki(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=mu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):rt(o,c,h))}function ut(o){Et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ut,Et);var of=/^https?$/i,af=["POST","PUT"];r=ut.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mi.g(),this.v=this.o?za(this.o):za(Mi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(V){gu(this,V);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())h.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(af,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,N]of h)this.g.setRequestHeader(V,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){gu(this,V)}};function gu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,pu(o),ds(o)}function pu(o){o.A||(o.A=!0,St(o,"complete"),St(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,St(this,"complete"),St(this,"abort"),ds(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ds(this,!0)),ut.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_u(this):this.bb())},r.bb=function(){_u(this)};function _u(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)Ua(o.Ea,0,o);else if(St(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const N=o.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var A=String(o.D).match(au)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!of.test(A?A.toLowerCase():"")}h=f}if(h)St(o,"complete"),St(o,"success");else{o.m=6;try{var V=2<Zt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",pu(o)}}finally{ds(o)}}}}function ds(o,c){if(o.g){yu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||St(o,"ready");try{h.onreadystatechange=f}catch{}}}function yu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Ld(c)}};function Iu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function uf(o){const c={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=c[A]||[];c[A]=V,V.push(h)}T(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Tu(o){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,o),this.cb=nr("retryDelaySeedMs",1e4,o),this.Wa=nr("forwardChannelMaxRetries",2,o),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new eu(o&&o.concurrentRequestLimit),this.Da=new rf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Tu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){bt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=bu(this,null,this.W),ms(this)};function Gi(o){if(Eu(o),o.G==3){var c=o.U++,h=Jt(o.I);if(rt(h,"SID",o.K),rt(h,"RID",c),rt(h,"TYPE","terminate"),rr(o,h),c=new ce(o,o.j,c),c.L=2,c.v=cs(Jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Cu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),os(c)}Su(o)}function fs(o){o.g&&(Qi(o),o.g.cancel(),o.g=null)}function Eu(o){fs(o),o.u&&(u.clearTimeout(o.u),o.u=null),gs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ms(o){if(!nu(o.h)&&!o.s){o.s=!0;var c=o.Ga;jn||ka(),zn||(jn(),zn=!0),Ri.add(c,o),o.B=0}}function cf(o,c){return ru(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wn(I(o.Ga,o,c),Pu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ce(this,this.j,o);let V=this.o;if(this.S&&(V?(V=p(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(A.H=V,V=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=wu(this,A,c),h=Jt(this.I),rt(h,"RID",o),rt(h,"CVER",22),this.D&&rt(h,"X-HTTP-Session-Id",this.D),rr(this,h),V&&(this.O?c="headers="+encodeURIComponent(String(mu(V)))+"&"+c:this.m&&Ki(h,this.m,V)),zi(this.h,A),this.Ua&&rt(h,"TYPE","init"),this.P?(rt(h,"$req",c),rt(h,"SID","null"),A.T=!0,Ui(A,h,null)):Ui(A,h,c),this.G=2}}else this.G==3&&(o?vu(this,o):this.i.length==0||nu(this.h)||vu(this))};function vu(o,c){var h;c?h=c.l:h=o.U++;const f=Jt(o.I);rt(f,"SID",o.K),rt(f,"RID",h),rt(f,"AID",o.T),rr(o,f),o.m&&o.o&&Ki(f,o.m,o.o),h=new ce(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=wu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zi(o.h,h),Ui(h,f,c)}function rr(o,c){o.H&&Q(o.H,function(h,f){rt(c,f,h)}),o.l&&ou({},function(h,f){rt(c,f,h)})}function wu(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;t:{var A=o.i;let V=-1;for(;;){const N=["count="+h];V==-1?0<h?(V=A[0].g,N.push("ofs="+V)):V=0:N.push("ofs="+V);let tt=!0;for(let _t=0;_t<h;_t++){let H=A[_t].g;const vt=A[_t].map;if(H-=V,0>H)V=Math.max(0,A[_t].g-100),tt=!1;else try{sf(vt,N,"req"+H+"_")}catch{f&&f(vt)}}if(tt){f=N.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function Au(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;jn||ka(),zn||(jn(),zn=!0),Ri.add(c,o),o.v=0}}function $i(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wn(I(o.Fa,o),Pu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),fs(this),Ru(this))};function Qi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ru(o){o.g=new ce(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Jt(o.qa);rt(c,"RID","rpc"),rt(c,"SID",o.K),rt(c,"AID",o.T),rt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&rt(c,"TO",o.ja),rt(c,"TYPE","xmlhttp"),rr(o,c),o.m&&o.o&&Ki(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=cs(Jt(c)),h.m=null,h.P=!0,Ja(h,o)}r.Za=function(){this.C!=null&&(this.C=null,fs(this),$i(this),bt(19))};function gs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Vu(o,c){var h=null;if(o.g==c){gs(o),Qi(o),o.g=null;var f=2}else if(ji(o.h,c))h=c.D,su(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=rs(),St(f,new Wa(f,h)),ms(o)}else Au(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&cf(o,c)||f==2&&$i(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Ne(o,5);break;case 4:Ne(o,10);break;case 3:Ne(o,6);break;default:Ne(o,2)}}}function Pu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Ne(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const A=!f;f=new xe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||as(f,"https"),cs(f),A?ef(f.toString(),h):nf(f.toString(),h)}else bt(2);o.G=0,o.l&&o.l.sa(c),Su(o),Eu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Su(o){if(o.G=0,o.ka=[],o.l){const c=iu(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function bu(o,c,h){var f=h instanceof xe?Jt(h):new xe(h);if(f.g!="")c&&(f.g=c+"."+f.g),us(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var V=new xe(null);f&&as(V,f),c&&(V.g=c),A&&us(V,A),h&&(V.l=h),f=V}return h=o.D,c=o.ya,h&&c&&rt(f,h,c),rt(f,"VER",o.la),rr(o,f),f}function Cu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ut(new ls({eb:h})):new ut(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}r=Du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ps(){}ps.prototype.g=function(o,c){return new Nt(o,c)};function Nt(o,c){Et.call(this),this.g=new Tu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new en(this)}C(Nt,Et),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Gi(this.g)},Nt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ni(o),o=h);c.i.push(new Gd(c.Ya++,o)),c.G==3&&ms(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Gi(this.g),delete this.g,Nt.aa.N.call(this)};function xu(o){Fi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(xu,Fi);function Nu(){Oi.call(this),this.status=1}C(Nu,Oi);function en(o){this.g=o}C(en,Du),en.prototype.ua=function(){St(this.g,"a")},en.prototype.ta=function(o){St(this.g,new xu(o))},en.prototype.sa=function(o){St(this.g,new Nu)},en.prototype.ra=function(){St(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,fl=function(){return new ps},dl=function(){return rs()},hl=Ce,ro={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Rs=ss,Ha.COMPLETE="complete",ll=Ha,Ka.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",Et.prototype.listen=Et.prototype.K,cr=Ka,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,cl=ut}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Ou="@firebase/firestore",Mu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new lf("@firebase/firestore");function ln(){return Ge.logLevel}function b(r,...t){if(Ge.logLevel<=te.DEBUG){const e=t.map(Do);Ge.debug(`Firestore (${Fn}): ${r}`,...e)}}function ct(r,...t){if(Ge.logLevel<=te.ERROR){const e=t.map(Do);Ge.error(`Firestore (${Fn}): ${r}`,...e)}}function Ee(r,...t){if(Ge.logLevel<=te.WARN){const e=t.map(Do);Ge.warn(`Firestore (${Fn}): ${r}`,...e)}}function Do(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,ml(r,n,e)}function ml(r,t,e){let n=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ct(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||ml(t,s,n)}function M(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends mf{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Rt.UNAUTHENTICATED)))}shutdown(){}}class wf{constructor(t){this.t=t,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Ef(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new Rt(t)}}class Af{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Rf{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Af(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ff(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Lu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Lu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Pf(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function so(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=gl(),a=Sf(i.encode(Uu(r,e)),i.encode(Uu(t,e)));return a!==0?a:q(n,s)}}e+=n>65535?2:1}return q(r.length,t.length)}function Uu(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Sf(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return q(r[e],t[e]);return q(r.length,t.length)}function _n(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function pl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="__name__";class zt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=zt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=zt.isNumericId(t),s=zt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?zt.extractNumericId(t).compare(zt.extractNumericId(e)):so(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return _e.fromString(t.substring(4,t.length-2))}}class W extends zt{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new W(e)}static emptyPath(){return new W([])}}const bf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends zt{construct(t,e,n){return new ot(t,e,n)}static isValidIdentifier(t){return bf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bu}static keyField(){return new ot([Bu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(W.fromString(t))}static fromName(t){return new F(W.fromString(t).popFirst(5))}static empty(){return new F(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(r,t,e){if(!e)throw new D(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Cf(r,t,e,n){if(t===!0&&n===!0)throw new D(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function qu(r){if(!F.isDocumentKey(r))throw new D(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ju(r){if(F.isDocumentKey(r))throw new D(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ri(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function xt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ri(r);throw new D(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Df(r,t){if(t<=0)throw new D(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,t){const e={typeString:r};return t&&(e.value=t),e}function Lr(r,t){if(!yl(r))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new D(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=-62135596800,Ku=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Ku);return new Y(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<zu)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ku}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Lr(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-zu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ft("string",Y._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new Y(0,0))}static max(){return new U(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;class Ls{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function io(r){return r.fields.find((t=>t.kind===2))}function Fe(r){return r.fields.filter((t=>t.kind!==2))}Ls.UNKNOWN_ID=-1;class Vs{constructor(t,e){this.fieldPath=t,this.kind=e}}class wr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new wr(0,Lt.min())}}function Il(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new Y(e+1,0):new Y(e,n));return new Lt(s,F.empty(),t)}function Tl(r){return new Lt(r.readTime,r.key,yn)}class Lt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Lt(U.min(),F.empty(),yn)}static max(){return new Lt(U.max(),F.empty(),yn)}}function No(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==El)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):w.reject(e)}static resolve(t){return new w(((e,n)=>{e(t)}))}static reject(t){return new w(((e,n)=>{n(t)}))}static waitFor(t){return new w(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(l=>n(l)))})),a=!0,i===s&&e()}))}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next((s=>s?w.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new w(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next((m=>{a[d]=m,++u,u===i&&n(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new w(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="SimpleDb";class si{static open(t,e,n,s){try{return new si(e,t.transaction(s,n))}catch(i){throw new mr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new jt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new mr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=ko(n.target.error);this.S.reject(new mr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(b(kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Nf(e)}}class ye{static delete(t){return b(kt,"Removing database:",t),Me(yf().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!If())return!1;if(ye.F())return!0;const t=Ms(),e=ye.M(t),n=0<e&&e<10,s=wl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,ye.M(Ms())===12.2&&ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(b(kt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new mr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new D(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new D(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new mr(t,a))},s.onupgradeneeded=i=>{b(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next((()=>{b(kt,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(e=>{const n=e.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(e=>{var n;e.newVersion===null&&(Ee('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=si.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next((d=>(u.v(),d))).catch((d=>(u.abort(d),w.reject(d)))).toPromise();return l.catch((()=>{})),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(b(kt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function wl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class xf{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return Me(this.$.delete())}}class mr extends D{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Pe(r){return r.name==="IndexedDbTransactionError"}class Nf{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b(kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(b(kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Me(n)}add(t){return b(kt,"ADD",this.store.name,t,t),Me(this.store.add(t))}get(t){return Me(this.store.get(t)).next((e=>(e===void 0&&(e=null),b(kt,"GET",this.store.name,t,e),e)))}delete(t){return b(kt,"DELETE",this.store.name,t),Me(this.store.delete(t))}count(){return b(kt,"COUNT",this.store.name),Me(this.store.count())}j(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w(((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}}))}{const i=this.cursor(n),a=[];return this.J(i,((u,l)=>{a.push(l)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}Y(t,e){b(kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const s=this.cursor(n);return this.J(s,((i,a,u)=>u.delete()))}X(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.J(s,e)}ee(t){const e=this.cursor({});return new w(((n,s)=>{e.onerror=i=>{const a=ko(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}J(t,e){const n=[];return new w(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new xf(u),d=e(u.primaryKey,u.value,l);if(d instanceof w){const m=d.catch((g=>(l.done(),w.reject(g))));n.push(m)}l.isDone?s():l.W===null?u.continue():u.continue(l.W)}})).next((()=>w.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Me(r){return new w(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=ko(n.target.error);e(s)}}))}let Gu=!1;function ko(r){const t=ye.M(Ms());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Gu||(Gu=!0,setTimeout((()=>{throw n}),0)),n}}return r}const gr="IndexBackfiller";class kf{constructor(t,e){this.asyncQueue=t,this.te=e,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(t){b(gr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.te.re();b(gr,`Documents written: ${e}`)}catch(e){Pe(e)?b(gr,"Ignoring IndexedDB error during index backfill: ",e):await Ve(e)}await this.ne(6e4)}))}}class Ff{constructor(t,e){this.localStore=t,this.persistence=e}async re(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.ie(e,t)))}ie(t,e){const n=new Set;let s=e,i=!0;return w.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return b(gr,`Processing collection: ${a}`),this.se(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}se(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.oe(s,i))).next((u=>(b(gr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}oe(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=Tl(i);No(a,n)>0&&(n=a)})),new Lt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ct.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=-1;function Ur(r){return r==null}function Ar(r){return r===0&&1/r==-1/0}function Al(r){return typeof r=="number"&&Number.isInteger(r)&&!Ar(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="";function Pt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=$u(t)),t=Of(r.get(e),t);return $u(t)}function Of(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Us:e+="";break;default:e+=i}}return e}function $u(r){return r+Us+""}function Gt(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===Us&&r.charAt(1)==="",56145,{path:r}),W.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Us,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new W(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="remoteDocuments",Br="owner",rn="owner",Rr="mutationQueues",Mf="userId",qt="mutations",Qu="batchId",qe="userMutationsIndex",Wu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r,t){return[r,Pt(t)]}function Rl(r,t,e){return[r,Pt(t),e]}const Lf={},In="documentMutations",Bs="remoteDocumentsV14",Uf=["prefixPath","collectionGroup","readTime","documentId"],Ss="documentKeyIndex",Bf=["prefixPath","collectionGroup","documentId"],Vl="collectionGroupIndex",qf=["collectionGroup","readTime","prefixPath","documentId"],Vr="remoteDocumentGlobal",oo="remoteDocumentGlobalKey",Tn="targets",Pl="queryTargetsIndex",jf=["canonicalId","targetId"],En="targetDocuments",zf=["targetId","path"],Fo="documentTargetsIndex",Kf=["path","targetId"],qs="targetGlobalKey",ze="targetGlobal",Pr="collectionParents",Gf=["collectionId","parent"],vn="clientMetadata",$f="clientId",ii="bundles",Qf="bundleId",oi="namedQueries",Wf="name",Oo="indexConfiguration",Hf="indexId",ao="collectionGroupIndex",Xf="collectionGroup",pr="indexState",Yf=["indexId","uid"],Sl="sequenceNumberIndex",Jf=["uid","sequenceNumber"],_r="indexEntries",Zf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],bl="documentKeyIndex",tm=["indexId","uid","orderedDocumentKey"],ai="documentOverlays",em=["userId","collectionPath","documentId"],uo="collectionPathOverlayIndex",nm=["userId","collectionPath","largestBatchId"],Cl="collectionGroupOverlayIndex",rm=["userId","collectionGroup","largestBatchId"],Mo="globals",sm="name",Dl=[Rr,qt,In,Oe,Tn,Br,ze,En,vn,Vr,Pr,ii,oi],im=[...Dl,ai],xl=[Rr,qt,In,Bs,Tn,Br,ze,En,vn,Vr,Pr,ii,oi,ai],Nl=xl,Lo=[...Nl,Oo,pr,_r],om=Lo,kl=[...Lo,Mo],am=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends vl{constructor(t,e){super(),this.ce=t,this.currentSequenceNumber=e}}function mt(r,t){const e=M(r);return ye.N(e.ce,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Se(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Fl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Is(this.root,t,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Is(this.root,t,this.comparator,!0)}}class Is{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new yt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xu(this.data.getIterator())}getIteratorFrom(t){return new Xu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class Xu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function sn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new Z(ot.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _n(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ol("Invalid base64 string: "+i):i}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function re(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=um.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function se(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="server_timestamp",Ll="__type__",Ul="__previous_value__",Bl="__local_write_time__";function Uo(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ll])===null||e===void 0?void 0:e.stringValue)===Ml}function ui(r){const t=r.mapValue.fields[Ul];return Uo(t)?ui(t):t}function Sr(r){const t=re(r.mapValue.fields[Bl].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e,n,s,i,a,u,l,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m}}const js="(default)";class $e{constructor(t,e){this.projectId=t,this.database=e||js}static empty(){return new $e("","")}get isDefaultDatabase(){return this.database===js}isEqual(t){return t instanceof $e&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="__type__",ql="__max__",pe={mapValue:{fields:{__type__:{stringValue:ql}}}},qo="__vector__",wn="value",bs={nullValue:"NULL_VALUE"};function ve(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Uo(r)?4:jl(r)?9007199254740991:ci(r)?10:11:O(28295,{value:r})}function Ht(r,t){if(r===t)return!0;const e=ve(r);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Sr(r).isEqual(Sr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=re(s.timestampValue),u=re(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return se(s.bytesValue).isEqual(se(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=st(s.doubleValue),u=st(i.doubleValue);return a===u?Ar(a)===Ar(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return _n(r.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Hu(a)!==Hu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Ht(a[l],u[l])))return!1;return!0})(r,t);default:return O(52216,{left:r})}}function br(r,t){return(r.values||[]).find((e=>Ht(e,t)))!==void 0}function we(r,t){if(r===t)return 0;const e=ve(r),n=ve(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=st(i.integerValue||i.doubleValue),l=st(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(r,t);case 3:return Yu(r.timestampValue,t.timestampValue);case 4:return Yu(Sr(r),Sr(t));case 5:return so(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=se(i),l=se(a);return u.compareTo(l)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=q(u[d],l[d]);if(m!==0)return m}return q(u.length,l.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=q(st(i.latitude),st(a.latitude));return u!==0?u:q(st(i.longitude),st(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Ju(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,l,d,m;const g=i.fields||{},I=a.fields||{},S=(u=g[wn])===null||u===void 0?void 0:u.arrayValue,C=(l=I[wn])===null||l===void 0?void 0:l.arrayValue,k=q(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Ju(S,C)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===pe.mapValue&&a===pe.mapValue)return 0;if(i===pe.mapValue)return 1;if(a===pe.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const I=so(l[g],m[g]);if(I!==0)return I;const S=we(u[l[g]],d[m[g]]);if(S!==0)return S}return q(l.length,m.length)})(r.mapValue,t.mapValue);default:throw O(23264,{le:e})}}function Yu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=re(r),n=re(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function Ju(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=we(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function An(r){return lo(r)}function lo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=re(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return se(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return F.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=lo(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${lo(e.fields[a])}`;return s+"}"})(r.mapValue):O(61005,{value:r})}function Cs(r){switch(ve(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ui(r);return t?16+Cs(t):16;case 5:return 2*r.stringValue.length;case 6:return se(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Cs(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Se(n.fields,((i,a)=>{s+=i.length+Cs(a)})),s})(r.mapValue);default:throw O(13486,{value:r})}}function Cr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ho(r){return!!r&&"integerValue"in r}function Dr(r){return!!r&&"arrayValue"in r}function Zu(r){return!!r&&"nullValue"in r}function tc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ds(r){return!!r&&"mapValue"in r}function ci(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Bo])===null||e===void 0?void 0:e.stringValue)===qo}function yr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Se(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=yr(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function jl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ql}const zl={mapValue:{fields:{[Bo]:{stringValue:qo},[wn]:{arrayValue:{}}}}};function lm(r){return"nullValue"in r?bs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Cr($e.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ci(r)?zl:{mapValue:{}}:O(35942,{value:r})}function hm(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Cr($e.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?zl:"mapValue"in r?ci(r)?{mapValue:{}}:pe:O(61959,{value:r})}function ec(r,t){const e=we(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function nc(r,t){const e=we(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ds(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yr(e)}setAll(t){let e=ot.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=yr(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ds(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Se(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new It(yr(this.value))}}function Kl(r){const t=[];return Se(r.fields,((e,n)=>{const s=new ot([e]);if(Ds(n)){const i=Kl(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new it(t,0,U.min(),U.min(),U.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new it(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new it(t,2,e,U.min(),U.min(),It.empty(),0)}static newUnknownDocument(t,e){return new it(t,3,e,U.min(),U.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e){this.position=t,this.inclusive=e}}function rc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(a.referenceValue),e.key):n=we(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function sc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ht(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e="asc"){this.field=t,this.dir=e}}function dm(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{}class G extends Gl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new fm(t,e,n):e==="array-contains"?new pm(t,n):e==="in"?new Yl(t,n):e==="not-in"?new _m(t,n):e==="array-contains-any"?new ym(t,n):new G(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new mm(t,n):new gm(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(we(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(we(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class J extends Gl{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new J(t,e)}matches(t){return Vn(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Vn(r){return r.op==="and"}function fo(r){return r.op==="or"}function jo(r){return $l(r)&&Vn(r)}function $l(r){for(const t of r.filters)if(t instanceof J)return!1;return!0}function mo(r){if(r instanceof G)return r.field.canonicalString()+r.op.toString()+An(r.value);if(jo(r))return r.filters.map((t=>mo(t))).join(",");{const t=r.filters.map((e=>mo(e))).join(",");return`${r.op}(${t})`}}function Ql(r,t){return r instanceof G?(function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&Ht(n.value,s.value)})(r,t):r instanceof J?(function(n,s){return s instanceof J&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&Ql(a,s.filters[u])),!0):!1})(r,t):void O(19439)}function Wl(r,t){const e=r.filters.concat(t);return J.create(e,r.op)}function Hl(r){return r instanceof G?(function(e){return`${e.field.canonicalString()} ${e.op} ${An(e.value)}`})(r):r instanceof J?(function(e){return e.op.toString()+" {"+e.getFilters().map(Hl).join(" ,")+"}"})(r):"Filter"}class fm extends G{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class mm extends G{constructor(t,e){super(t,"in",e),this.keys=Xl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class gm extends G{constructor(t,e){super(t,"not-in",e),this.keys=Xl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>F.fromName(n.referenceValue)))}class pm extends G{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dr(e)&&br(e.arrayValue,this.value)}}class Yl extends G{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&br(this.value.arrayValue,e)}}class _m extends G{constructor(t,e){super(t,"not-in",e)}matches(t){if(br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!br(this.value.arrayValue,e)}}class ym extends G{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>br(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function go(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Im(r,t,e,n,s,i,a)}function Qe(r){const t=M(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>mo(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>An(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>An(n))).join(",")),t.Pe=e}return t.Pe}function qr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!dm(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ql(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!sc(r.startAt,t.startAt)&&sc(r.endAt,t.endAt)}function zs(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ks(r,t){return r.filters.filter((e=>e instanceof G&&e.field.isEqual(t)))}function ic(r,t,e){let n=bs,s=!0;for(const i of Ks(r,t)){let a=bs,u=!0;switch(i.op){case"<":case"<=":a=lm(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=bs}ec({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];ec({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function oc(r,t,e){let n=pe,s=!0;for(const i of Ks(r,t)){let a=pe,u=!0;switch(i.op){case">=":case">":a=hm(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=pe}nc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];nc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Jl(r,t,e,n,s,i,a,u){return new On(r,t,e,n,s,i,a,u)}function jr(r){return new On(r)}function ac(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zl(r){return r.collectionGroup!==null}function Ir(r){const t=M(r);if(t.Te===null){t.Te=[];const e=new Set;for(const i of t.explicitOrderBy)t.Te.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Z(ot.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Te.push(new xr(i,n))})),e.has(ot.keyField().canonicalString())||t.Te.push(new xr(ot.keyField(),n))}return t.Te}function Mt(r){const t=M(r);return t.Ie||(t.Ie=Tm(t,Ir(r))),t.Ie}function Tm(r,t){if(r.limitType==="F")return go(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new xr(s.field,i)}));const e=r.endAt?new Rn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Rn(r.startAt.position,r.startAt.inclusive):null;return go(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function po(r,t){const e=r.filters.concat([t]);return new On(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Gs(r,t,e){return new On(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function li(r,t){return qr(Mt(r),Mt(t))&&r.limitType===t.limitType}function th(r){return`${Qe(Mt(r))}|lt:${r.limitType}`}function hn(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>Hl(s))).join(", ")}]`),Ur(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>An(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>An(s))).join(",")),`Target(${n})`})(Mt(r))}; limitType=${r.limitType})`}function zr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of Ir(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,l){const d=rc(a,u,l);return a.inclusive?d<=0:d<0})(n.startAt,Ir(n),s)||n.endAt&&!(function(a,u,l){const d=rc(a,u,l);return a.inclusive?d>=0:d>0})(n.endAt,Ir(n),s))})(r,t)}function eh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nh(r){return(t,e)=>{let n=!1;for(const s of Ir(r)){const i=Em(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Em(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?we(l,d):O(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Fl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new nt(F.comparator);function Ot(){return vm}const rh=new nt(F.comparator);function lr(...r){let t=rh;for(const e of r)t=t.insert(e.key,e);return t}function sh(r){let t=rh;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function $t(){return Tr()}function ih(){return Tr()}function Tr(){return new ie((r=>r.toString()),((r,t)=>r.isEqual(t)))}const wm=new nt(F.comparator),Am=new Z(F.comparator);function z(...r){let t=Am;for(const e of r)t=t.add(e);return t}const Rm=new Z(q);function zo(){return Rm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(t)?"-0":t}}function oh(r){return{integerValue:""+r}}function Vm(r,t){return Al(t)?oh(t):Ko(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this._=void 0}}function Pm(r,t,e){return r instanceof Pn?(function(s,i){const a={fields:{[Ll]:{stringValue:Ml},[Bl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uo(i)&&(i=ui(i)),i&&(a.fields[Ul]=i),{mapValue:a}})(e,t):r instanceof Sn?uh(r,t):r instanceof bn?ch(r,t):(function(s,i){const a=ah(s,i),u=uc(a)+uc(s.Ee);return ho(a)&&ho(s.Ee)?oh(u):Ko(s.serializer,u)})(r,t)}function Sm(r,t,e){return r instanceof Sn?uh(r,t):r instanceof bn?ch(r,t):e}function ah(r,t){return r instanceof Nr?(function(n){return ho(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class Pn extends hi{}class Sn extends hi{constructor(t){super(),this.elements=t}}function uh(r,t){const e=lh(t);for(const n of r.elements)e.some((s=>Ht(s,n)))||e.push(n);return{arrayValue:{values:e}}}class bn extends hi{constructor(t){super(),this.elements=t}}function ch(r,t){let e=lh(t);for(const n of r.elements)e=e.filter((s=>!Ht(s,n)));return{arrayValue:{values:e}}}class Nr extends hi{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function uc(r){return st(r.integerValue||r.doubleValue)}function lh(r){return Dr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.field=t,this.transform=e}}function bm(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof Sn&&s instanceof Sn||n instanceof bn&&s instanceof bn?_n(n.elements,s.elements,Ht):n instanceof Nr&&s instanceof Nr?Ht(n.Ee,s.Ee):n instanceof Pn&&s instanceof Pn})(r.transform,t.transform)}class Cm{constructor(t,e){this.version=t,this.transformResults=e}}class lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class di{}function dh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Kr(r.key,lt.none()):new Mn(r.key,r.data,lt.none());{const e=r.data,n=It.empty();let s=new Z(ot.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new oe(r.key,n,new Dt(s.toArray()),lt.none())}}function Dm(r,t,e){r instanceof Mn?(function(s,i,a){const u=s.value.clone(),l=lc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof oe?(function(s,i,a){if(!xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=lc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(fh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Er(r,t,e,n){return r instanceof Mn?(function(i,a,u,l){if(!xs(i.precondition,a))return u;const d=i.value.clone(),m=hc(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof oe?(function(i,a,u,l){if(!xs(i.precondition,a))return u;const d=hc(i.fieldTransforms,l,a),m=a.data;return m.setAll(fh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(r,t,e,n):(function(i,a,u){return xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function xm(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=ah(n.transform,s||null);i!=null&&(e===null&&(e=It.empty()),e.set(n.field,i))}return e||null}function cc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_n(n,s,((i,a)=>bm(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Mn extends di{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oe extends di{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fh(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function lc(r,t,e){const n=new Map;L(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Sm(a,u,e[s]))}return n}function hc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Pm(i,a,t))}return n}class Kr extends di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Go extends di{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Dm(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Er(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Er(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ih();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=dh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&_n(this.mutations,t.mutations,((e,n)=>cc(e,n)))&&_n(this.baseMutations,t.baseMutations,((e,n)=>cc(e,n)))}}class Qo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let s=(function(){return wm})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Qo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,$;function mh(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function gh(r){if(r===void 0)return ct("GRPC error has no .code"),P.UNKNOWN;switch(r){case dt.OK:return P.OK;case dt.CANCELLED:return P.CANCELLED;case dt.UNKNOWN:return P.UNKNOWN;case dt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case dt.INTERNAL:return P.INTERNAL;case dt.UNAVAILABLE:return P.UNAVAILABLE;case dt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case dt.NOT_FOUND:return P.NOT_FOUND;case dt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case dt.ABORTED:return P.ABORTED;case dt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case dt.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}($=dt||(dt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new _e([4294967295,4294967295],0);function dc(r){const t=gl().encode(r),e=new ul;return e.update(t),new Uint8Array(e.digest())}function fc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _e([e,n],0),new _e([s,i],0)]}class Ho{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(n<0)throw new hr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=_e.fromNumber(this.fe)}pe(t,e,n){let s=t.add(e.multiply(_e.fromNumber(n)));return s.compare(km)===1&&(s=new _e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=dc(t),[n,s]=fc(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);if(!this.ye(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ho(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.fe===0)return;const e=dc(t),[n,s]=fc(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,$r.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Gr(U.min(),s,new nt(q),Ot(),z())}}class $r{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new $r(n,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,s){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=s}}class ph{constructor(t,e){this.targetId=t,this.De=e}}class _h{constructor(t,e,n=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class mc{constructor(){this.ve=0,this.Ce=gc(),this.Fe=ht.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=z(),e=z(),n=z();return this.Ce.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}})),new $r(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=gc()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fm{constructor(t){this.We=t,this.Ge=new Map,this.ze=Ot(),this.je=Ts(),this.Je=Ts(),this.He=new nt(q)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,n=t.De.count,s=this.st(e);if(s){const i=s.target;if(zs(i))if(n===0){const a=new F(i.path);this.Xe(e,a,it.newNoDocument(a,U.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const u=this._t(t),l=u?this.ut(u,t,a):1;if(l!==0){this.rt(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=se(n).toUint8Array()}catch(l){if(l instanceof Ol)return Ee("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Ho(a,s,i)}catch(l){return Ee(l instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,i,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((i,a)=>{const u=this.st(a);if(u){if(i.current&&zs(u.target)){const l=new F(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,it.newNoDocument(l,t))}i.Ne&&(e.set(a,i.Le()),i.ke())}}));let n=z();this.Je.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(t)));const s=new Gr(t,e,this.He,this.ze,n);return this.ze=Ot(),this.je=Ts(),this.Je=Ts(),this.He=new nt(q),s}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new mc,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Z(q),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Z(q),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new mc),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Ts(){return new nt(F.comparator)}function gc(){return new nt(F.comparator)}const Om={asc:"ASCENDING",desc:"DESCENDING"},Mm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lm={and:"AND",or:"OR"};class Um{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function _o(r,t){return r.useProto3Json||Ur(t)?t:{value:t}}function Cn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Bm(r,t){return Cn(r,t.toTimestamp())}function pt(r){return L(!!r,49232),U.fromTimestamp((function(e){const n=re(e);return new Y(n.seconds,n.nanos)})(r))}function Xo(r,t){return yo(r,t).canonicalString()}function yo(r,t){const e=(function(s){return new W(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Ih(r){const t=W.fromString(r);return L(Sh(t),10190,{key:t.toString()}),t}function kr(r,t){return Xo(r.databaseId,t.path)}function ne(r,t){const e=Ih(t);if(e.get(1)!==r.databaseId.projectId)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(vh(e))}function Th(r,t){return Xo(r.databaseId,t)}function Eh(r){const t=Ih(r);return t.length===4?W.emptyPath():vh(t)}function Io(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vh(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function pc(r,t,e){return{name:kr(r,t),fields:e.value.mapValue.fields}}function qm(r,t,e){const n=ne(r,t.name),s=pt(t.updateTime),i=t.createTime?pt(t.createTime):U.min(),a=new It({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function jm(r,t){return"found"in t?(function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=ne(n,s.found.name),a=pt(s.found.updateTime),u=s.found.createTime?pt(s.found.createTime):U.min(),l=new It({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,l)})(r,t):"missing"in t?(function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=ne(n,s.missing),a=pt(s.readTime);return it.newNoDocument(i,a)})(r,t):O(7234,{result:t})}function zm(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const m=d.code===void 0?P.UNKNOWN:gh(d.code);return new D(m,d.message||"")})(a);e=new _h(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=ne(r,n.document.name),i=pt(n.document.updateTime),a=n.document.createTime?pt(n.document.createTime):U.min(),u=new It({mapValue:{fields:n.document.fields}}),l=it.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Ns(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=ne(r,n.document),i=n.readTime?pt(n.readTime):U.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Ns([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=ne(r,n.document),i=n.removedTargetIds||[];e=new Ns([],i,s,null)}else{if(!("filter"in t))return O(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Nm(s,i),u=n.targetId;e=new ph(u,a)}}return e}function Fr(r,t){let e;if(t instanceof Mn)e={update:pc(r,t.key,t.value)};else if(t instanceof Kr)e={delete:kr(r,t.key)};else if(t instanceof oe)e={update:pc(r,t.key,t.data),updateMask:Hm(t.fieldMask)};else{if(!(t instanceof Go))return O(16599,{Rt:t.type});e={verify:kr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof Pn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Nr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw O(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Bm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)})(r,t.precondition)),e}function To(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?lt.updateTime(pt(i.updateTime)):i.exists!==void 0?lt.exists(i.exists):lt.none()})(t.currentDocument):lt.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new Pn;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new Sn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new bn(m)}else"increment"in u?l=new Nr(a,u.increment):O(16584,{proto:u});const d=ot.fromServerFormat(u.fieldPath);return new hh(d,l)})(r,s))):[];if(t.update){t.update.name;const s=ne(r,t.update.name),i=new It({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(l){const d=l.fieldPaths||[];return new Dt(d.map((m=>ot.fromServerFormat(m))))})(t.updateMask);return new oe(s,i,a,e,n)}return new Mn(s,i,e,n)}if(t.delete){const s=ne(r,t.delete);return new Kr(s,e)}if(t.verify){const s=ne(r,t.verify);return new Go(s,e)}return O(1463,{proto:t})}function Km(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map((e=>(function(s,i){let a=s.updateTime?pt(s.updateTime):pt(i);return a.isEqual(U.min())&&(a=pt(i)),new Cm(a,s.transformResults||[])})(e,t)))):[]}function wh(r,t){return{documents:[Th(r,t.path)]}}function Ah(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Th(r,s);const i=(function(d){if(d.length!==0)return Ph(J.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(I){return{field:dn(I.field),direction:$m(I.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=_o(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function Rh(r){let t=Eh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(g){const I=Vh(g);return I instanceof J&&jo(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((I=>(function(C){return new xr(fn(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(I)))})(e.orderBy));let u=null;e.limit&&(u=(function(g){let I;return I=typeof g=="object"?g.value:g,Ur(I)?null:I})(e.limit));let l=null;e.startAt&&(l=(function(g){const I=!!g.before,S=g.values||[];return new Rn(S,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const I=!g.before,S=g.values||[];return new Rn(S,I)})(e.endAt)),Jl(t,s,a,i,u,"F",l,d)}function Gm(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vh(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fn(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(e.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fn(e.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(e.unaryFilter.field);return G.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}})(r):r.fieldFilter!==void 0?(function(e){return G.create(fn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return J.create(e.compositeFilter.filters.map((n=>Vh(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}})(e.compositeFilter.op))})(r):O(30097,{filter:r})}function $m(r){return Om[r]}function Qm(r){return Mm[r]}function Wm(r){return Lm[r]}function dn(r){return{fieldPath:r.canonicalString()}}function fn(r){return ot.fromServerFormat(r.fieldPath)}function Ph(r){return r instanceof G?(function(e){if(e.op==="=="){if(tc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NAN"}};if(Zu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(tc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NAN"}};if(Zu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(e.field),op:Qm(e.op),value:e.value}}})(r):r instanceof J?(function(e){const n=e.getFilters().map((s=>Ph(s)));return n.length===1?n[0]:{compositeFilter:{op:Wm(e.op),filters:n}}})(r):O(54877,{filter:r})}function Hm(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Sh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e,n,s,i=U.min(),a=U.min(),u=ht.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t){this.gt=t}}function Xm(r,t){let e;if(t.document)e=qm(r.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=F.fromSegments(t.noDocument.path),s=He(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=F.fromSegments(t.unknownDocument.path),s=He(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new Y(s[0],s[1]);return U.fromTimestamp(i)})(t.readTime)),e}function _c(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:$s(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:kr(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Cn(i,a.version.toTimestamp()),createTime:Cn(i,a.createTime.toTimestamp())}})(r.gt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:We(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:We(t.version)}}return n}function $s(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function We(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function He(r){const t=new Y(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function Le(r,t){const e=(t.baseMutations||[]).map((i=>To(r.gt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>To(r.gt,i))),s=Y.fromMillis(t.localWriteTimeMs);return new $o(t.batchId,s,e,n)}function dr(r){const t=He(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?He(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Mt(jr(Eh(i.documents[0])))})(r.query):(function(i){return Mt(Rh(i))})(r.query),new ee(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ht.fromBase64String(r.resumeToken))}function Ch(r,t){const e=We(t.snapshotVersion),n=We(t.lastLimboFreeSnapshotVersion);let s;s=zs(t.target)?wh(r.gt,t.target):Ah(r.gt,t.target).Vt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Qe(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Dh(r){const t=Rh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Gs(t,t.limit,"L"):t}function Hi(r,t){return new Wo(t.largestBatchId,To(r.gt,t.overlayMutation))}function yc(r,t){const e=t.path.lastSegment();return[r,Pt(t.path.popLast()),e]}function Ic(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:We(n.readTime),documentKey:Pt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{getBundleMetadata(t,e){return Tc(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:He(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return Tc(t).put((function(s){return{bundleId:s.id,createTime:We(pt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return Ec(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:Dh(i.bundledQuery),readTime:He(i.readTime)}})(n)}))}saveNamedQuery(t,e){return Ec(t).put((function(s){return{name:s.name,readTime:We(pt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function Tc(r){return mt(r,ii)}function Ec(r){return mt(r,oi)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.serializer=t,this.userId=e}static yt(t,e){const n=e.uid||"";return new fi(t,n)}getOverlay(t,e){return sr(t).get(yc(this.userId,e)).next((n=>n?Hi(this.serializer,n):null))}getOverlays(t,e){const n=$t();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new Wo(e,a);s.push(this.wt(t,u))})),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(Pt(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(sr(t).Y(uo,u))})),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=$t(),i=Pt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return sr(t).j(uo,a).next((u=>{for(const l of u){const d=Hi(this.serializer,l);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=$t();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return sr(t).X({index:Cl,range:u},((l,d,m)=>{const g=Hi(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()})).next((()=>i))}wt(t,e){return sr(t).put((function(s,i,a){const[u,l,d]=yc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Fr(s.gt,a.mutation)}})(this.serializer,this.userId,e))}}function sr(r){return mt(r,ai)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{St(t){return mt(t,Mo)}getSessionToken(t){return this.St(t).get("sessionToken").next((e=>{const n=e?.value;return n?ht.fromUint8Array(n):ht.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.St(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){}bt(t,e){this.Dt(t,e),e.vt()}Dt(t,e){if("nullValue"in t)this.Ct(e,5);else if("booleanValue"in t)this.Ct(e,10),e.Ft(t.booleanValue?1:0);else if("integerValue"in t)this.Ct(e,15),e.Ft(st(t.integerValue));else if("doubleValue"in t){const n=st(t.doubleValue);isNaN(n)?this.Ct(e,13):(this.Ct(e,15),Ar(n)?e.Ft(0):e.Ft(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ct(e,20),typeof n=="string"&&(n=re(n)),e.Mt(`${n.seconds||""}`),e.Ft(n.nanos||0)}else if("stringValue"in t)this.xt(t.stringValue,e),this.Ot(e);else if("bytesValue"in t)this.Ct(e,30),e.Nt(se(t.bytesValue)),this.Ot(e);else if("referenceValue"in t)this.Bt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ct(e,45),e.Ft(n.latitude||0),e.Ft(n.longitude||0)}else"mapValue"in t?jl(t)?this.Ct(e,Number.MAX_SAFE_INTEGER):ci(t)?this.Lt(t.mapValue,e):(this.kt(t.mapValue,e),this.Ot(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Ot(e)):O(19022,{Qt:t})}xt(t,e){this.Ct(e,25),this.$t(t,e)}$t(t,e){e.Mt(t)}kt(t,e){const n=t.fields||{};this.Ct(e,55);for(const s of Object.keys(n))this.xt(s,e),this.Dt(n[s],e)}Lt(t,e){var n,s;const i=t.fields||{};this.Ct(e,53);const a=wn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Ct(e,15),e.Ft(st(u)),this.xt(a,e),this.Dt(i[a],e)}qt(t,e){const n=t.values||[];this.Ct(e,50);for(const s of n)this.Dt(s,e)}Bt(t,e){this.Ct(e,37),F.fromName(t).path.forEach((n=>{this.Ct(e,60),this.$t(n,e)}))}Ct(t,e){t.Ft(e)}Ot(t){t.Ft(2)}}Ue.Ut=new Ue;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=255;function Zm(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function vc(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Zm(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class tg{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Wt(n.value),n=e.next();this.Gt()}zt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.jt(n.value),n=e.next();this.Jt()}Ht(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const s=e.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=e.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(t){const e=this.Xt(t),n=vc(e);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}tn(t){const e=this.Xt(t),n=vc(e);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}nn(){this.rn(on),this.rn(255)}sn(){this._n(on),this._n(255)}reset(){this.position=0}seed(t){this.en(t.length),this.buffer.set(t,this.position),this.position+=t.length}an(){return this.buffer.slice(0,this.position)}Xt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Wt(t){const e=255&t;e===0?(this.rn(0),this.rn(255)):e===on?(this.rn(on),this.rn(0)):this.rn(e)}jt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===on?(this._n(on),this._n(0)):this._n(t)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(t){this.en(1),this.buffer[this.position++]=t}_n(t){this.en(1),this.buffer[this.position++]=~t}en(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class eg{constructor(t){this.un=t}Nt(t){this.un.Kt(t)}Mt(t){this.un.Ht(t)}Ft(t){this.un.Zt(t)}vt(){this.un.nn()}}class ng{constructor(t){this.un=t}Nt(t){this.un.zt(t)}Mt(t){this.un.Yt(t)}Ft(t){this.un.tn(t)}vt(){this.un.sn()}}class ir{constructor(){this.un=new tg,this.cn=new eg(this.un),this.ln=new ng(this.un)}seed(t){this.un.seed(t)}hn(t){return t===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,n,s){this.Pn=t,this.Tn=e,this.In=n,this.dn=s}En(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new Be(this.Pn,this.Tn,this.In,n)}An(t,e,n){return{indexId:this.Pn,uid:t,arrayValue:ks(this.In),directionalValue:ks(this.dn),orderedDocumentKey:ks(e),documentKey:n.path.toArray()}}Rn(t,e,n){const s=this.An(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function de(r,t){let e=r.Pn-t.Pn;return e!==0?e:(e=wc(r.In,t.In),e!==0?e:(e=wc(r.dn,t.dn),e!==0?e:F.comparator(r.Tn,t.Tn)))}function wc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function ks(r){return al()?(function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n})(r):r}function Ac(r){return typeof r!="string"?r:(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(r)}class Rc{constructor(t){this.Vn=new Z(((e,n)=>ot.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.mn=t.orderBy,this.fn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(t){if(L(t.collectionGroup===this.collectionId,49279),this.gn)return!1;const e=io(t);if(e!==void 0&&!this.yn(e))return!1;const n=Fe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.yn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.wn(u,l)||!this.Sn(this.mn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.mn.length||!this.Sn(this.mn[a++],u))return!1}return!0}bn(){if(this.gn)return null;let t=new Z(ot.comparator);const e=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Vs(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Vs(n.field,0))}for(const n of this.mn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Vs(n.field,n.dir==="asc"?0:1)));return new Ls(Ls.UNKNOWN_ID,this.collectionId,e,wr.empty())}yn(t){for(const e of this.fn)if(this.wn(e,t))return!0;return!1}wn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(r){var t,e;if(L(r instanceof G||r instanceof J,20012),r instanceof G){if(r instanceof Yl){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>G.create(r.field,"==",i))))||[];return J.create(s,"or")}return r}const n=r.filters.map((s=>xh(s)));return J.create(n,r.op)}function rg(r){if(r.getFilters().length===0)return[];const t=wo(xh(r));return L(Nh(t),7391),Eo(t)||vo(t)?[t]:t.getFilters()}function Eo(r){return r instanceof G}function vo(r){return r instanceof J&&jo(r)}function Nh(r){return Eo(r)||vo(r)||(function(e){if(e instanceof J&&fo(e)){for(const n of e.getFilters())if(!Eo(n)&&!vo(n))return!1;return!0}return!1})(r)}function wo(r){if(L(r instanceof G||r instanceof J,34018),r instanceof G)return r;if(r.filters.length===1)return wo(r.filters[0]);const t=r.filters.map((n=>wo(n)));let e=J.create(t,r.op);return e=Qs(e),Nh(e)?e:(L(e instanceof J,64498),L(Vn(e),40251),L(e.filters.length>1,57927),e.filters.reduce(((n,s)=>Yo(n,s))))}function Yo(r,t){let e;return L(r instanceof G||r instanceof J,38388),L(t instanceof G||t instanceof J,25473),e=r instanceof G?t instanceof G?(function(s,i){return J.create([s,i],"and")})(r,t):Vc(r,t):t instanceof G?Vc(t,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),Vn(s)&&Vn(i))return Wl(s,i.getFilters());const a=fo(s)?s:i,u=fo(s)?i:s,l=a.filters.map((d=>Yo(d,u)));return J.create(l,"or")})(r,t),Qs(e)}function Vc(r,t){if(Vn(t))return Wl(t,r.getFilters());{const e=t.filters.map((n=>Yo(r,n)));return J.create(e,"or")}}function Qs(r){if(L(r instanceof G||r instanceof J,11850),r instanceof G)return r;const t=r.getFilters();if(t.length===1)return Qs(t[0]);if($l(r))return r;const e=t.map((s=>Qs(s))),n=[];return e.forEach((s=>{s instanceof G?n.push(s):s instanceof J&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:J.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.Dn=new Jo}addToCollectionParentIndex(t,e){return this.Dn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Lt.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Jo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Z(W.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Z(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="IndexedDbIndexManager",Es=new Uint8Array(0);class ig{constructor(t,e){this.databaseId=e,this.vn=new Jo,this.Cn=new ie((n=>Qe(n)),((n,s)=>qr(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.vn.add(e)}));const i={collectionId:n,parent:Pt(s)};return Sc(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[pl(e),""],!1,!0);return Sc(t).j(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Gt(a.parent))}return n}))}addFieldIndex(t,e){const n=or(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=un(t);return i.next((u=>{a.put(Ic(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=or(t),s=un(t),i=an(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=or(t),n=an(t),s=un(t);return e.Y().next((()=>n.Y())).next((()=>s.Y()))}createTargetIndexes(t,e){return w.forEach(this.Fn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new Rc(n).bn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=an(t);let s=!0;const i=new Map;return w.forEach(this.Fn(e),(a=>this.Mn(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=z();const u=[];return w.forEach(i,((l,d)=>{b(Pc,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((X=>`${X.fieldPath}:${X.kind}`)).join(",")}`})(l)} to execute ${Qe(e)}`);const m=(function(B,X){const et=io(X);if(et===void 0)return null;for(const Q of Ks(B,et.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null})(d,l),g=(function(B,X){const et=new Map;for(const Q of Fe(X))for(const T of Ks(B,Q.fieldPath))switch(T.op){case"==":case"in":et.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return et.set(Q.fieldPath.canonicalString(),T.value),Array.from(et.values())}return null})(d,l),I=(function(B,X){const et=[];let Q=!0;for(const T of Fe(X)){const p=T.kind===0?ic(B,T.fieldPath,B.startAt):oc(B,T.fieldPath,B.startAt);et.push(p.value),Q&&(Q=p.inclusive)}return new Rn(et,Q)})(d,l),S=(function(B,X){const et=[];let Q=!0;for(const T of Fe(X)){const p=T.kind===0?oc(B,T.fieldPath,B.endAt):ic(B,T.fieldPath,B.endAt);et.push(p.value),Q&&(Q=p.inclusive)}return new Rn(et,Q)})(d,l),C=this.xn(l,d,I),k=this.xn(l,d,S),x=this.On(l,d,g),K=this.Nn(l.indexId,m,C,I.inclusive,k,S.inclusive,x);return w.forEach(K,(j=>n.H(j,e.limit).next((B=>{B.forEach((X=>{const et=F.fromSegments(X.documentKey);a.has(et)||(a=a.add(et),u.push(et))}))}))))})).next((()=>u))}return w.resolve(null)}))}Fn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=rg(J.create(t.filters,"and")).map((n=>go(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.Cn.set(t,e),e)}Nn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const I=e?this.Bn(e[g/d]):Es,S=this.Ln(t,I,n[g%d],s),C=this.kn(t,I,i[g%d],a),k=u.map((x=>this.Ln(t,I,x,!0)));m.push(...this.createRange(S,C,k))}return m}Ln(t,e,n,s){const i=new Be(t,F.empty(),e,n);return s?i:i.En()}kn(t,e,n,s){const i=new Be(t,F.empty(),e,n);return s?i.En():i}Mn(t,e){const n=new Rc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.pn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.Fn(e);return w.forEach(s,(i=>this.Mn(t,i).next((a=>{a?n!==0&&a.fields.length<(function(l){let d=new Z(ot.comparator),m=!1;for(const g of l.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?m=!0:d=d.add(I.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}qn(t,e){const n=new ir;for(const s of Fe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.hn(s.kind);Ue.Ut.bt(i,a)}return n.an()}Bn(t){const e=new ir;return Ue.Ut.bt(t,e.hn(0)),e.an()}Qn(t,e){const n=new ir;return Ue.Ut.bt(Cr(this.databaseId,e),n.hn((function(i){const a=Fe(i);return a.length===0?0:a[a.length-1].kind})(t))),n.an()}On(t,e,n){if(n===null)return[];let s=[];s.push(new ir);let i=0;for(const a of Fe(t)){const u=n[i++];for(const l of s)if(this.$n(e,a.fieldPath)&&Dr(u))s=this.Un(s,a,u);else{const d=l.hn(a.kind);Ue.Ut.bt(u,d)}}return this.Kn(s)}xn(t,e,n){return this.On(t,e,n.position)}Kn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].an();return e}Un(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new ir;l.seed(u.an()),Ue.Ut.bt(a,l.hn(e.kind)),i.push(l)}return i}$n(t,e){return!!t.filters.find((n=>n instanceof G&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=or(t),s=un(t);return(e?n.j(ao,IDBKeyRange.bound(e,e)):n.j()).next((i=>{const a=[];return w.forEach(i,(u=>s.get([u.indexId,this.uid]).next((l=>{a.push((function(m,g){const I=g?new wr(g.sequenceNumber,new Lt(He(g.readTime),new F(Gt(g.documentKey)),g.largestBatchId)):wr.empty(),S=m.fields.map((([C,k])=>new Vs(ot.fromServerFormat(C),k)));return new Ls(m.indexId,m.collectionGroup,S,I)})(u,l))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=or(t),i=un(t);return this.Wn(t).next((a=>s.j(ao,IDBKeyRange.bound(e,e)).next((u=>w.forEach(u,(l=>i.put(Ic(l.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),w.forEach(u,(l=>this.Gn(t,s,l).next((d=>{const m=this.zn(i,l);return d.isEqual(m)?w.resolve():this.jn(t,i,l,d,m)})))))))}))}Jn(t,e,n,s){return an(t).put(s.An(this.uid,this.Qn(n,e.key),e.key))}Hn(t,e,n,s){return an(t).delete(s.Rn(this.uid,this.Qn(n,e.key),e.key))}Gn(t,e,n){const s=an(t);let i=new Z(de);return s.X({index:bl,range:IDBKeyRange.only([n.indexId,this.uid,ks(this.Qn(n,e))])},((a,u)=>{i=i.add(new Be(n.indexId,e,Ac(u.arrayValue),Ac(u.directionalValue)))})).next((()=>i))}zn(t,e){let n=new Z(de);const s=this.qn(e,t);if(s==null)return n;const i=io(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Dr(a))for(const u of a.arrayValue.values||[])n=n.add(new Be(e.indexId,t.key,this.Bn(u),s))}else n=n.add(new Be(e.indexId,t.key,Es,s));return n}jn(t,e,n,s,i){b(Pc,"Updating index entries for document '%s'",e.key);const a=[];return(function(l,d,m,g,I){const S=l.getIterator(),C=d.getIterator();let k=sn(S),x=sn(C);for(;k||x;){let K=!1,j=!1;if(k&&x){const B=m(k,x);B<0?j=!0:B>0&&(K=!0)}else k!=null?j=!0:K=!0;K?(g(x),x=sn(C)):j?(I(k),k=sn(S)):(k=sn(S),x=sn(C))}})(s,i,de,(u=>{a.push(this.Jn(t,e,n,u))}),(u=>{a.push(this.Hn(t,e,n,u))})),w.waitFor(a)}Wn(t){let e=1;return un(t).X({index:Sl,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>de(a,u))).filter(((a,u,l)=>!u||de(a,l[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=de(a,t),l=de(a,e);if(u===0)s[0]=t.En();else if(u>0&&l<0)s.push(a),s.push(a.En());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Yn(s[a],s[a+1]))return[];const u=s[a].Rn(this.uid,Es,F.empty()),l=s[a+1].Rn(this.uid,Es,F.empty());i.push(IDBKeyRange.bound(u,l))}return i}Yn(t,e){return de(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(bc)}getMinOffset(t,e){return w.mapArray(this.Fn(e),(n=>this.Mn(t,n).next((s=>s||O(44426))))).next(bc)}}function Sc(r){return mt(r,Pr)}function an(r){return mt(r,_r)}function or(r){return mt(r,Oo)}function un(r){return mt(r,pr)}function bc(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;No(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Lt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kh=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(r,t,e){const n=r.store(qt),s=r.store(In),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.X({range:a},((m,g,I)=>(u++,I.delete())));i.push(l.next((()=>{L(u===1,47070,{batchId:e.batchId})})));const d=[];for(const m of e.mutations){const g=Rl(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next((()=>d))}function Ws(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(kh,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class mi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static yt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new mi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fe(t).X({index:qe,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=mn(t),a=fe(t);return a.add({}).next((u=>{L(typeof u=="number",49019);const l=new $o(u,e,n,s),d=(function(S,C,k){const x=k.baseMutations.map((j=>Fr(S.gt,j))),K=k.mutations.map((j=>Fr(S.gt,j)));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:K}})(this.serializer,this.userId,l),m=[];let g=new Z(((I,S)=>q(I.canonicalString(),S.canonicalString())));for(const I of s){const S=Rl(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),m.push(a.put(d)),m.push(i.put(S,Lf))}return g.forEach((I=>{m.push(this.indexManager.addToCollectionParentIndex(t,I))})),t.addOnCommittedListener((()=>{this.Zn[u]=l.keys()})),w.waitFor(m).next((()=>l))}))}lookupMutationBatch(t,e){return fe(t).get(e).next((n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Le(this.serializer,n)):null))}Xn(t,e){return this.Zn[e]?w.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return fe(t).X({index:qe,range:s},((a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{er:n}),i=Le(this.serializer,u)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=je;return fe(t).X({index:qe,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,je],[this.userId,Number.POSITIVE_INFINITY]);return fe(t).j(qe,e).next((n=>n.map((s=>Le(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ps(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return mn(t).X({range:s},((a,u,l)=>{const[d,m,g]=a,I=Gt(m);if(d===this.userId&&e.path.isEqual(I))return fe(t).get(g).next((S=>{if(!S)throw O(61480,{tr:a,batchId:g});L(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:g}),i.push(Le(this.serializer,S))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);const s=[];return e.forEach((i=>{const a=Ps(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=mn(t).X({range:u},((d,m,g)=>{const[I,S,C]=d,k=Gt(S);I===this.userId&&i.path.isEqual(k)?n=n.add(C):g.done()}));s.push(l)})),w.waitFor(s).next((()=>this.nr(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Ps(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Z(q);return mn(t).X({range:a},((l,d,m)=>{const[g,I,S]=l,C=Gt(I);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(S)):m.done()})).next((()=>this.nr(t,u)))}nr(t,e){const n=[],s=[];return e.forEach((i=>{s.push(fe(t).get(i).next((a=>{if(a===null)throw O(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Le(this.serializer,a))})))})),w.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return Fh(t.ce,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.rr(e.batchId)})),w.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}rr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return mn(t).X({range:n},((i,a,u)=>{if(i[0]===this.userId){const l=Gt(i[1]);s.push(l)}else u.done()})).next((()=>{L(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(t,e){return Oh(t,this.userId,e)}sr(t){return Mh(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:je,lastStreamToken:""}))}}function Oh(r,t,e){const n=Ps(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return mn(r).X({range:i,Z:!0},((u,l,d)=>{const[m,g,I]=u;m===t&&g===s&&(a=!0),d.done()})).next((()=>a))}function fe(r){return mt(r,qt)}function mn(r){return mt(r,In)}function Mh(r){return mt(r,Rr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Xe(0)}static ur(){return new Xe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.cr(t).next((e=>{const n=new Xe(e.highestTargetId);return e.highestTargetId=n.next(),this.lr(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.cr(t).next((e=>U.fromTimestamp(new Y(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.cr(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.cr(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.lr(t,s))))}addTargetData(t,e){return this.hr(t,e).next((()=>this.cr(t).next((n=>(n.targetCount+=1,this.Pr(e,n),this.lr(t,n))))))}updateTargetData(t,e){return this.hr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>cn(t).delete(e.targetId))).next((()=>this.cr(t))).next((n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.lr(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return cn(t).X(((a,u)=>{const l=dr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))})).next((()=>w.waitFor(i))).next((()=>s))}forEachTarget(t,e){return cn(t).X(((n,s)=>{const i=dr(s);e(i)}))}cr(t){return Dc(t).get(qs).next((e=>(L(e!==null,2888),e)))}lr(t,e){return Dc(t).put(qs,e)}hr(t,e){return cn(t).put(Ch(this.serializer,e))}Pr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.cr(t).next((e=>e.targetCount))}getTargetData(t,e){const n=Qe(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return cn(t).X({range:s,index:Pl},((a,u,l)=>{const d=dr(u);qr(e,d.target)&&(i=d,l.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=ge(t);return e.forEach((a=>{const u=Pt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=ge(t);return w.forEach(e,(i=>{const a=Pt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=ge(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ge(t);let i=z();return s.X({range:n,Z:!0},((a,u,l)=>{const d=Gt(a[1]),m=new F(d);i=i.add(m)})).next((()=>i))}containsKey(t,e){const n=Pt(e.path),s=IDBKeyRange.bound([n],[pl(n)],!1,!0);let i=0;return ge(t).X({index:Fo,Z:!0,range:s},(([a,u],l,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}Et(t,e){return cn(t).get(e).next((n=>n?dr(n):null))}}function cn(r){return mt(r,Tn)}function Dc(r){return mt(r,ze)}function ge(r){return mt(r,En)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="LruGarbageCollector",Lh=1048576;function Nc([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class ag{constructor(t){this.Tr=t,this.buffer=new Z(Nc),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Nc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Uh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){b(xc,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Pe(e)?b(xc,"Ignoring IndexedDB error during garbage collection: ",e):await Ve(e)}await this.Rr(3e5)}))}}class ug{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ct.ue);const n=new ag(e);return this.Vr.forEachTarget(t,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Cc)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cc):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(n=g,u=Date.now(),this.removeTargets(t,n,e)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n)))).next((g=>(d=Date.now(),ln()<=te.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Bh(r,t){return new ug(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,e){this.db=t,this.garbageCollector=Bh(this,e)}mr(t){const e=this.yr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}gr(t,e){return this.wr(t,((n,s)=>e(s)))}addReference(t,e,n){return vs(t,n)}removeReference(t,e,n){return vs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return vs(t,e)}Sr(t,e){return(function(s,i){let a=!1;return Mh(s).ee((u=>Oh(s,u,i).next((l=>(l&&(a=!0),w.resolve(!l)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(t,((a,u)=>{if(u<=e){const l=this.Sr(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,U.min()),ge(t).delete((function(g){return[0,Pt(g.path)]})(a)))))}));s.push(l)}})).next((()=>w.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return vs(t,e)}wr(t,e){const n=ge(t);let s,i=Ct.ue;return n.X({index:Fo},(([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Ct.ue&&e(new F(Gt(s)),i),i=d,s=l):i=Ct.ue})).next((()=>{i!==Ct.ue&&e(new F(Gt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function vs(r,t){return ge(r).put((function(n,s){return{targetId:0,path:Pt(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.changes=new ie((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return ke(t).put(n)}removeEntry(t,e,n){return ke(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],$s(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.br(t,n))))}getEntry(t,e){let n=it.newInvalidDocument(e);return ke(t).X({index:Ss,range:IDBKeyRange.only(ar(e))},((s,i)=>{n=this.Dr(e,i)})).next((()=>n))}vr(t,e){let n={size:0,document:it.newInvalidDocument(e)};return ke(t).X({index:Ss,range:IDBKeyRange.only(ar(e))},((s,i)=>{n={document:this.Dr(e,i),size:Ws(i)}})).next((()=>n))}getEntries(t,e){let n=Ot();return this.Cr(t,e,((s,i)=>{const a=this.Dr(s,i);n=n.insert(s,a)})).next((()=>n))}Fr(t,e){let n=Ot(),s=new nt(F.comparator);return this.Cr(t,e,((i,a)=>{const u=this.Dr(i,a);n=n.insert(i,u),s=s.insert(i,Ws(a))})).next((()=>({documents:n,Mr:s})))}Cr(t,e,n){if(e.isEmpty())return w.resolve();let s=new Z(Oc);e.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(ar(s.first()),ar(s.last())),a=s.getIterator();let u=a.getNext();return ke(t).X({index:Ss,range:i},((l,d,m)=>{const g=F.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Oc(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.G(ar(u)):m.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),$s(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ke(t).j(IDBKeyRange.bound(u,l,!0)).next((d=>{i?.incrementDocumentReadCount(d.length);let m=Ot();for(const g of d){const I=this.Dr(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(zr(e,I)||s.has(I.key))&&(m=m.insert(I.key,I))}return m}))}getAllFromCollectionGroup(t,e,n,s){let i=Ot();const a=Fc(e,n),u=Fc(e,Lt.max());return ke(t).X({index:Vl,range:IDBKeyRange.bound(a,u,!0)},((l,d,m)=>{const g=this.Dr(F.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()})).next((()=>i))}newChangeBuffer(t){return new hg(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return kc(t).get(oo).next((e=>(L(!!e,20021),e)))}br(t,e){return kc(t).put(oo,e)}Dr(t,e){if(e){const n=Xm(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return it.newInvalidDocument(t)}}function jh(r){return new lg(r)}class hg extends qh{constructor(t,e){super(),this.Or=t,this.trackRemovals=e,this.Nr=new ie((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new Z(((i,a)=>q(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Nr.get(i);if(e.push(this.Or.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=_c(this.Or.serializer,a);s=s.add(i.path.popLast());const d=Ws(l);n+=d-u.size,e.push(this.Or.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=_c(this.Or.serializer,a.convertToNoDocument(U.min()));e.push(this.Or.addEntry(t,i,l))}})),s.forEach((i=>{e.push(this.Or.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Or.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Or.vr(t,e).next((n=>(this.Nr.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Or.Fr(t,e).next((({documents:n,Mr:s})=>(s.forEach(((i,a)=>{this.Nr.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function kc(r){return mt(r,Vr)}function ke(r){return mt(r,Bs)}function ar(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Fc(r,t){const e=t.documentKey.path.toArray();return[r,$s(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Oc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&Er(n.mutation,s,Dt.empty(),Y.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,z()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=z()){const s=$t();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=lr();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=$t();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,z())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=Ot();const a=Tr(),u=(function(){return Tr()})();return e.forEach(((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof oe)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Er(m.mutation,d,m.mutation.getFieldMask(),Y.now())):a.set(d.key,Dt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var g;return u.set(d,new dg(m,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=Tr();let s=new nt(((a,u)=>a-u)),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Dt.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||z()).add(l);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=ih();m.forEach((I=>{if(!i.has(I)){const S=dh(e.get(I),n.get(I));S!==null&&g.set(I,S),i=i.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve($t());let u=yn,l=i;return a.next((d=>w.forEach(d,((m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next((I=>{l=l.insert(m,I)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,l,d,z()))).next((m=>({batchId:u,changes:sh(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((n=>{let s=lr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(t,i).next((u=>w.forEach(u,(l=>{const d=(function(g,I){return new On(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((m=>{m.forEach(((g,I)=>{a=a.insert(g,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,it.newInvalidDocument(m)))}));let u=lr();return a.forEach(((l,d)=>{const m=i.get(l);m!==void 0&&Er(m.mutation,d,Dt.empty(),Y.now()),zr(e,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return w.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}})(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Dh(s.bundledQuery),readTime:pt(s.readTime)}})(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.overlays=new nt(F.comparator),this.kr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=$t();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.wt(t,e,i)})),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=$t(),i=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new nt(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=$t(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=$t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>u.set(d,m))),!(u.size()>=s)););return w.resolve(u)}wt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Wo(e,n));let i=this.kr.get(e);i===void 0&&(i=z(),this.kr.set(e,i)),this.kr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.qr=new Z(gt.Qr),this.$r=new Z(gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new gt(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new F(new W([])),n=new gt(e,t),s=new gt(e,t+1),i=[];return this.$r.forEachInRange([n,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new F(new W([])),n=new gt(e,t),s=new gt(e,t+1);let i=z();return this.$r.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new gt(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return F.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Z(gt.Qr)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $o(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new gt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?je:this.er-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Hr);i.push(u)})),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);return e.forEach((s=>{const i=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(u=>{n=n.add(u.Hr)}))})),w.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const a=new gt(new F(i),0);let u=new Z(q);return this.Yr.forEachWhile((l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)}),a),w.resolve(this.ei(u))}ei(t){const e=[];return t.forEach((n=>{const s=this.Zr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){L(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return w.forEach(e.mutations,(s=>{const i=new gt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new gt(e,0),s=this.Yr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t){this.ni=t,this.docs=(function(){return new nt(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))})),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ot();const a=e.path,u=new F(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||No(Tl(m),n)<=0||(s.has(m.key)||zr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}ri(t,e){return w.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new yg(this)}getSize(t){return w.resolve(this.size)}}class yg extends qh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(n)})),w.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.persistence=t,this.ii=new ie((e=>Qe(e)),qr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new Zo,this.targetCount=0,this._i=Xe.ar()}forEachTarget(t,e){return this.ii.forEach(((n,s)=>e(s))),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),w.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Xe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.hr(e),w.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ii.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),w.waitFor(i).next((()=>s))}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ct(0),this.ci=!1,this.ci=!0,this.li=new gg,this.referenceDelegate=t(this),this.hi=new Ig(this),this.indexManager=new sg,this.remoteDocumentCache=(function(s){return new _g(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new bh(e),this.Ti=new fg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new pg(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new Tg(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(t,e){return w.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class Tg extends vl{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Ai=new Zo,this.Ri=null}static Vi(t){return new gi(t)}get mi(){if(this.Ri)return this.Ri;throw O(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),w.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,(n=>{const s=F.fromPath(n);return this.fi(t,s).next((i=>{i||e.removeEntry(s,U.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return w.or([()=>w.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Hs{constructor(t,e){this.persistence=t,this.gi=new ie((n=>Pt(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Bh(this,e)}static Vi(t,e){return new Hs(t,e)}Ii(){}di(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return w.forEach(this.gi,((n,s)=>this.Sr(t,n,s).next((i=>i?w.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((u=>{u||(n++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),w.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Cs(t.data.value)),e}Sr(t,e,n){return w.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.serializer=t}q(t,e,n,s){const i=new si("createOrUpgrade",e);n<1&&s>=1&&((function(l){l.createObjectStore(Br)})(t),(function(l){l.createObjectStore(Rr,{keyPath:Mf}),l.createObjectStore(qt,{keyPath:Qu,autoIncrement:!0}).createIndex(qe,Wu,{unique:!0}),l.createObjectStore(In)})(t),Mc(t),(function(l){l.createObjectStore(Oe)})(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(En),l.deleteObjectStore(Tn),l.deleteObjectStore(ze)})(t),Mc(t)),a=a.next((()=>(function(l){const d=l.store(ze),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put(qs,m)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(l,d){return d.store(qt).j().next((g=>{l.deleteObjectStore(qt),l.createObjectStore(qt,{keyPath:Qu,autoIncrement:!0}).createIndex(qe,Wu,{unique:!0});const I=d.store(qt),S=g.map((C=>I.put(C)));return w.waitFor(S)}))})(t,i)))),a=a.next((()=>{(function(l){l.createObjectStore(vn,{keyPath:$f})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this.pi(i)))),n<6&&s>=6&&(a=a.next((()=>((function(l){l.createObjectStore(Vr)})(t),this.yi(i))))),n<7&&s>=7&&(a=a.next((()=>this.wi(i)))),n<8&&s>=8&&(a=a.next((()=>this.Si(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.bi(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(l){l.createObjectStore(ii,{keyPath:Qf})})(t),(function(l){l.createObjectStore(oi,{keyPath:Wf})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(l){const d=l.createObjectStore(ai,{keyPath:em});d.createIndex(uo,nm,{unique:!1}),d.createIndex(Cl,rm,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(l){const d=l.createObjectStore(Bs,{keyPath:Uf});d.createIndex(Ss,Bf),d.createIndex(Vl,qf)})(t))).next((()=>this.Di(t,i))).next((()=>t.deleteObjectStore(Oe)))),n<14&&s>=14&&(a=a.next((()=>this.Ci(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(l){l.createObjectStore(Oo,{keyPath:Hf,autoIncrement:!0}).createIndex(ao,Xf,{unique:!1}),l.createObjectStore(pr,{keyPath:Yf}).createIndex(Sl,Jf,{unique:!1}),l.createObjectStore(_r,{keyPath:Zf}).createIndex(bl,tm,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(pr).clear()})).next((()=>{e.objectStore(_r).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(l){l.createObjectStore(Mo,{keyPath:sm})})(t)}))),n<18&&s>=18&&al()&&(a=a.next((()=>{e.objectStore(pr).clear()})).next((()=>{e.objectStore(_r).clear()}))),a}yi(t){let e=0;return t.store(Oe).X(((n,s)=>{e+=Ws(s)})).next((()=>{const n={byteSize:e};return t.store(Vr).put(oo,n)}))}pi(t){const e=t.store(Rr),n=t.store(qt);return e.j().next((s=>w.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,je],[i.userId,i.lastAcknowledgedBatchId]);return n.j(qe,a).next((u=>w.forEach(u,(l=>{L(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Le(this.serializer,l);return Fh(t,i.userId,d).next((()=>{}))}))))}))))}wi(t){const e=t.store(En),n=t.store(Oe);return t.store(ze).get(qs).next((s=>{const i=[];return n.X(((a,u)=>{const l=new W(a),d=(function(g){return[0,Pt(g)]})(l);i.push(e.get(d).next((m=>m?w.resolve():(g=>e.put({targetId:0,path:Pt(g),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>w.waitFor(i)))}))}Si(t,e){t.createObjectStore(Pr,{keyPath:Gf});const n=e.store(Pr),s=new Jo,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Pt(l)})}};return e.store(Oe).X({Z:!0},((a,u)=>{const l=new W(a);return i(l.popLast())})).next((()=>e.store(In).X({Z:!0},(([a,u,l],d)=>{const m=Gt(u);return i(m.popLast())}))))}bi(t){const e=t.store(Tn);return e.X(((n,s)=>{const i=dr(s),a=Ch(this.serializer,i);return e.put(a)}))}Di(t,e){const n=e.store(Oe),s=[];return n.X(((i,a)=>{const u=e.store(Bs),l=(function(g){return g.document?new F(W.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):O(36783)})(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>w.waitFor(s)))}Ci(t,e){const n=e.store(qt),s=jh(this.serializer),i=new ta(gi.Vi,this.serializer.gt);return n.j().next((a=>{const u=new Map;return a.forEach((l=>{var d;let m=(d=u.get(l.userId))!==null&&d!==void 0?d:z();Le(this.serializer,l).keys().forEach((g=>m=m.add(g))),u.set(l.userId,m)})),w.forEach(u,((l,d)=>{const m=new Rt(d),g=fi.yt(this.serializer,m),I=i.getIndexManager(m),S=mi.yt(m,this.serializer,I,i.referenceDelegate);return new zh(s,S,g,I).recalculateAndSaveOverlaysForDocumentKeys(new co(e,Ct.ue),l).next()}))}))}}function Mc(r){r.createObjectStore(En,{keyPath:zf}).createIndex(Fo,Kf,{unique:!0}),r.createObjectStore(Tn,{keyPath:"targetId"}).createIndex(Pl,jf,{unique:!0}),r.createObjectStore(ze)}const me="IndexedDbPersistence",Xi=18e5,Yi=5e3,Ji="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",vg="main";class ea{constructor(t,e,n,s,i,a,u,l,d,m,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Fi=i,this.window=a,this.document=u,this.Mi=d,this.xi=m,this.Oi=g,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=I=>Promise.resolve(),!ea.C())throw new D(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cg(this,s),this.Qi=e+vg,this.serializer=new bh(l),this.$i=new ye(this.Qi,this.Oi,new Eg(this.serializer)),this.li=new Jm,this.hi=new og(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jh(this.serializer),this.Ti=new Ym,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,m===!1&&ct(me,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(P.FAILED_PRECONDITION,Ji);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.hi.getHighestSequenceNumber(t)))})).then((t=>{this.ui=new Ct(t,this.Mi)})).then((()=>{this.ci=!0})).catch((t=>(this.$i&&this.$i.close(),Promise.reject(t))))}ji(t){return this.qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.$i.setDatabaseDeletedListener(t)}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>ws(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(t).next((e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(t))).next((e=>this.isPrimary&&!e?this.Yi(t).next((()=>!1)):!!e&&this.Zi(t).next((()=>!0)))))).catch((t=>{if(Pe(t))return b(me,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b(me,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Fi.enqueueRetryable((()=>this.qi(t))),this.isPrimary=t}))}Ji(t){return ur(t).get(rn).next((e=>w.resolve(this.Xi(e))))}es(t){return ws(t).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Xi)){this.ki=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=mt(e,vn);return n.j().next((s=>{const i=this.rs(s,Xi),a=s.filter((u=>i.indexOf(u)===-1));return w.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ui)for(const e of t)this.Ui.removeItem(this.ss(e.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(t){return!!t&&t.ownerId===this.clientId}Hi(t){return this.xi?w.resolve(!0):ur(t).get(rn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,Yi)&&!this._s(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new D(P.FAILED_PRECONDITION,Ji);return!1}}return!(!this.networkEnabled||!this.inForeground)||ws(t).j().next((n=>this.rs(n,Yi).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&b(me,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Br,vn],(t=>{const e=new co(t,Ct.ue);return this.Yi(e).next((()=>this.es(e)))})),this.$i.close(),this.hs()}rs(t,e){return t.filter((n=>this.ns(n.updateTimeMs,e)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(t=>ws(t).j().next((e=>this.rs(e,Xi).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(t,e){return mi.yt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new ig(t,this.serializer.gt.databaseId)}getDocumentOverlayCache(t){return fi.yt(this.serializer,t)}getBundleCache(){return this.Ti}runTransaction(t,e,n){b(me,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?am:l===17?kl:l===16?om:l===15?Lo:l===14?Nl:l===13?xl:l===12?im:l===11?Dl:void O(60245)})(this.Oi);let a;return this.$i.runTransaction(t,s,i,(u=>(a=new co(u,this.ui?this.ui.next():Ct.ue),e==="readwrite-primary"?this.Ji(a).next((l=>!!l||this.Hi(a))).next((l=>{if(!l)throw ct(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new D(P.FAILED_PRECONDITION,El);return n(a)})).next((l=>this.Zi(a).next((()=>l)))):this.Ts(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Ts(t){return ur(t).get(rn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,Yi)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(P.FAILED_PRECONDITION,Ji)}))}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ur(t).put(rn,e)}static C(){return ye.C()}Yi(t){const e=ur(t);return e.get(rn).next((n=>this.Xi(n)?(b(me,"Releasing primary lease."),e.delete(rn)):w.resolve()))}ns(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ct(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;ol()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(t){var e;try{const n=((e=this.Ui)===null||e===void 0?void 0:e.getItem(this.ss(t)))!==null;return b(me,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ct(me,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(t){ct("Failed to set zombie client id.",t)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ur(r){return mt(r,Br)}function ws(r){return mt(r,vn)}function Kh(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=s}static Es(t,e){let n=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new na(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return ol()?8:wl(Ms())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ps(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new wg;return this.ws(t,e,a).next((u=>{if(i.result=u,this.Rs)return this.Ss(t,e,a,u.size)}))})).next((()=>i.result))}Ss(t,e,n,s){return n.documentReadCount<this.Vs?(ln()<=te.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",hn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(ln()<=te.DEBUG&&b("QueryEngine","Query:",hn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(ln()<=te.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",hn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):w.resolve())}ps(t,e){if(ac(e))return w.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Gs(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=z(...i);return this.gs.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((l=>{const d=this.bs(e,u);return this.Ds(e,d,a,l.readTime)?this.ps(t,Gs(e,null,"F")):this.vs(t,d,e,l)}))))})))))}ys(t,e,n,s){return ac(e)||s.isEqual(U.min())?w.resolve(null):this.gs.getDocuments(t,n).next((i=>{const a=this.bs(e,i);return this.Ds(e,a,n,s)?w.resolve(null):(ln()<=te.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hn(e)),this.vs(t,a,e,Il(s,yn)).next((u=>u)))}))}bs(t,e){let n=new Z(nh(t));return e.forEach(((s,i)=>{zr(t,i)&&(n=n.add(i))})),n}Ds(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(t,e,n){return ln()<=te.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",hn(e)),this.gs.getDocumentsMatchingQuery(t,e,Lt.min(),n)}vs(t,e,n,s){return this.gs.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="LocalStore",Ag=3e8;class Rg{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new nt(q),this.Ms=new ie((i=>Qe(i)),qr),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zh(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function $h(r,t,e,n){return new Rg(r,t,e,n)}async function Qh(r,t){const e=M(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let l=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function Vg(r,t){const e=M(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.Os.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,m){const g=d.batch,I=g.keys();let S=w.resolve();return I.forEach((C=>{S=S.next((()=>m.getEntry(l,C))).next((k=>{const x=d.docVersions.get(C);L(x!==null,48541),k.version.compareTo(x)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))}))})),S.next((()=>u.mutationQueue.removeMutationBatch(l,g)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let l=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Wh(r){const t=M(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Pg(r,t){const e=M(r),n=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach(((m,g)=>{const I=s.get(g);if(!I)return;u.push(e.hi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>e.hi.addMatchingKeys(i,m.addedDocuments,g))));let S=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(g,S),(function(k,x,K){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ag?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(I,S,m)&&u.push(e.hi.updateTargetData(i,S))}));let l=Ot(),d=z();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(Sg(i,a,t.documentUpdates).next((m=>{l=m.Ls,d=m.ks}))),!n.isEqual(U.min())){const m=e.hi.getLastRemoteSnapshotVersion(i).next((g=>e.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(m)}return w.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(e.Fs=s,i)))}function Sg(r,t,e){let n=z(),s=z();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=Ot();return e.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):b(ra,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function bg(r,t){const e=M(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=je),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Xs(r,t){const e=M(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.hi.getTargetData(n,t).next((i=>i?(s=i,w.resolve(s)):e.hi.allocateTargetId(n).next((a=>(s=new ee(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function Dn(r,t,e){const n=M(r),s=n.Fs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Pe(a))throw a;b(ra,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(s.target)}function Ao(r,t,e){const n=M(r);let s=U.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,m){const g=M(l),I=g.Ms.get(m);return I!==void 0?w.resolve(g.Fs.get(I)):g.hi.getTargetData(d,m)})(n,a,Mt(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:z()))).next((u=>(Yh(n,eh(t),u),{documents:u,qs:i})))))}function Hh(r,t){const e=M(r),n=M(e.hi),s=e.Fs.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",(i=>n.Et(i,t).next((a=>a?a.target:null))))}function Xh(r,t){const e=M(r),n=e.xs.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",(s=>e.Os.getAllFromCollectionGroup(s,t,Il(n,yn),Number.MAX_SAFE_INTEGER))).then((s=>(Yh(e,t,s),s)))}function Yh(r,t,e){let n=r.xs.get(t)||U.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(t,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firestore_clients";function Lc(r,t){return`${Jh}_${r}_${t}`}const Zh="firestore_mutations";function Uc(r,t,e){let n=`${Zh}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const td="firestore_targets";function Zi(r,t){return`${td}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="SharedClientState";class Ys{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ks(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new D(s.error.code,s.error.message))),a?new Ys(t,e,s.state,i):(ct(Kt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vr{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ks(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new vr(t,n.state,s):(ct(Kt,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Js{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ks(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=zo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Al(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Js(t,i):(ct(Kt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class sa{constructor(t,e){this.clientId=t,this.onlineState=e}static Ks(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new sa(e.clientId,e.onlineState):(ct(Kt,`Failed to parse online state: ${t}`),null)}}class Ro{constructor(){this.activeTargetIds=zo()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class to{constructor(t,e,n,s,i){this.window=t,this.Fi=e,this.persistenceKey=n,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new nt(q),this.started=!1,this.Zs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Lc(this.persistenceKey,this.js),this.eo=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Ro),this.no=new RegExp(`^${Jh}_${a}_([^_]*)$`),this.ro=new RegExp(`^${Zh}_${a}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${td}_${a}_(\\d+)$`),this.so=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this.oo=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ps();for(const n of t){if(n===this.js)continue;const s=this.getItem(Lc(this.persistenceKey,n));if(s){const i=Js.Ks(n,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const e=this.storage.getItem(this.so);if(e){const n=this.ao(e);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.eo,JSON.stringify(t))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(t){let e=!1;return this.Ys.forEach(((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.lo(t,"pending")}updateMutationState(t,e,n){this.lo(t,e,n),this.ho(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Zi(this.persistenceKey,t));if(s){const i=vr.Ks(t,s);i&&(n=i.state)}}return e&&this.Po.Gs(t),this._o(),n}removeLocalQueryTarget(t){this.Po.zs(t),this._o()}isLocalQueryTarget(t){return this.Po.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Zi(this.persistenceKey,t))}updateQueryState(t,e,n){this.To(t,e,n)}handleUserChange(t,e,n){e.forEach((s=>{this.ho(s)})),this.currentUser=t,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(t){this.Io(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return b(Kt,"READ",t,e),e}setItem(t,e){b(Kt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){b(Kt,"REMOVE",t),this.storage.removeItem(t)}Hs(t){const e=t;if(e.storageArea===this.storage){if(b(Kt,"EVENT",e.key,e.newValue),e.key===this.Xs)return void ct("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(e.key!==null){if(this.no.test(e.key)){if(e.newValue==null){const n=this.Ao(e.key);return this.Ro(n,null)}{const n=this.Vo(e.key,e.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(e.key)){if(e.newValue!==null){const n=this.mo(e.key,e.newValue);if(n)return this.fo(n)}}else if(this.io.test(e.key)){if(e.newValue!==null){const n=this.po(e.key,e.newValue);if(n)return this.yo(n)}}else if(e.key===this.so){if(e.newValue!==null){const n=this.ao(e.newValue);if(n)return this.uo(n)}}else if(e.key===this.eo){const n=(function(i){let a=Ct.ue;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{wo:i}),a=u}catch(u){ct(Kt,"Failed to read sequence number from WebStorage",u)}return a})(e.newValue);n!==Ct.ue&&this.sequenceNumberHandler(n)}else if(e.key===this.oo){const n=this.So(e.newValue);await Promise.all(n.map((s=>this.syncEngine.bo(s))))}}}else this.Zs.push(e)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(t,e,n){const s=new Ys(this.currentUser,t,e,n),i=Uc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Ws())}ho(t){const e=Uc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Io(t){const e={clientId:this.js,onlineState:t};this.storage.setItem(this.so,JSON.stringify(e))}To(t,e,n){const s=Zi(this.persistenceKey,t),i=new vr(t,e,n);this.setItem(s,i.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.oo,e)}Ao(t){const e=this.no.exec(t);return e?e[1]:null}Vo(t,e){const n=this.Ao(t);return Js.Ks(n,e)}mo(t,e){const n=this.ro.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ys.Ks(new Rt(i),s,e)}po(t,e){const n=this.io.exec(t),s=Number(n[1]);return vr.Ks(s,e)}ao(t){return sa.Ks(t)}So(t){return JSON.parse(t)}async fo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Do(t.batchId,t.state,t.error);b(Kt,`Ignoring mutation for non-active user ${t.user.uid}`)}yo(t){return this.syncEngine.vo(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Ys.insert(t,e):this.Ys.remove(t),s=this.co(this.Ys),i=this.co(n),a=[],u=[];return i.forEach((l=>{s.has(l)||a.push(l)})),s.forEach((l=>{i.has(l)||u.push(l)})),this.syncEngine.Co(a,u).then((()=>{this.Ys=n}))}uo(t){this.Ys.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}co(t){let e=zo();return t.forEach(((n,s)=>{e=e.unionWith(s.activeTargetIds)})),e}}class ed{constructor(){this.Fo=new Ro,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Ro,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="ConnectivityMonitor";class qc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){b(Bc,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){b(Bc,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=null;function Vo(){return As===null?As=(function(){return 268435456+Math.round(2147483648*Math.random())})():As++,"0x"+As.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="RestConnection",Dg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xg{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===js?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const a=Vo(),u=this.Go(t,e.toUriEncodedString());b(eo,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(u),m=il(d);return this.jo(t,u,l,n,m).then((g=>(b(eo,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw Ee(eo,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",n),g}))}Jo(t,e,n,s,i,a){return this.Wo(t,e,n,s,i)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}Go(t,e){const n=Dg[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class kg extends xg{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,s,i){const a=Vo();return new Promise(((u,l)=>{const d=new cl;d.setWithCredentials(!0),d.listenOnce(ll.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Rs.NO_ERROR:const g=d.getResponseJson();b(At,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case Rs.TIMEOUT:b(At,`RPC '${t}' ${a} timed out`),l(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const I=d.getStatus();if(b(At,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S?.error;if(C&&C.status&&C.message){const k=(function(K){const j=K.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN})(C.status);l(new D(k,C.message))}else l(new D(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{b(At,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);b(At,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)}))}P_(t,e,n){const s=Vo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fl(),u=dl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");b(At,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);this.T_(g);let I=!1,S=!1;const C=new Ng({Ho:x=>{S?b(At,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(I||(b(At,`Opening RPC '${t}' stream ${s} transport.`),g.open(),I=!0),b(At,`RPC '${t}' stream ${s} sending:`,x),g.send(x))},Yo:()=>g.close()}),k=(x,K,j)=>{x.listen(K,(B=>{try{j(B)}catch(X){setTimeout((()=>{throw X}),0)}}))};return k(g,cr.EventType.OPEN,(()=>{S||(b(At,`RPC '${t}' stream ${s} transport opened.`),C.s_())})),k(g,cr.EventType.CLOSE,(()=>{S||(S=!0,b(At,`RPC '${t}' stream ${s} transport closed`),C.__(),this.I_(g))})),k(g,cr.EventType.ERROR,(x=>{S||(S=!0,Ee(At,`RPC '${t}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.__(new D(P.UNAVAILABLE,"The operation could not be completed")))})),k(g,cr.EventType.MESSAGE,(x=>{var K;if(!S){const j=x.data[0];L(!!j,16349);const B=j,X=B?.error||((K=B[0])===null||K===void 0?void 0:K.error);if(X){b(At,`RPC '${t}' stream ${s} received error:`,X);const et=X.status;let Q=(function(y){const E=dt[y];if(E!==void 0)return gh(E)})(et),T=X.message;Q===void 0&&(Q=P.INTERNAL,T="Unknown error status: "+et+" with message "+X.message),S=!0,C.__(new D(Q,T)),g.close()}else b(At,`RPC '${t}' stream ${s} received:`,j),C.a_(j)}})),k(u,hl.STAT_EVENT,(x=>{x.stat===ro.PROXY?b(At,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===ro.NOPROXY&&b(At,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return typeof window<"u"?window:null}function Fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(r){return new Um(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="PersistentStream";class rd{constructor(t,e,n,s,i,a,u,l){this.Fi=t,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ia(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ct(e.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===e&&this.W_(n,s)}),(n=>{t((()=>{const s=new D(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return b(jc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(b(jc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fg extends rd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=zm(this.serializer,t),n=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?pt(a.readTime):U.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=Io(this.serializer),e.addTarget=(function(i,a){let u;const l=a.target;if(u=zs(l)?{documents:wh(i,l)}:{query:Ah(i,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=yh(i,a.resumeToken);const d=_o(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Cn(i,a.snapshotVersion.toTimestamp());const d=_o(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=Gm(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=Io(this.serializer),e.removeTarget=t,this.k_(e)}}class Og extends rd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Km(t.writeResults,t.commitTime),n=pt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=Io(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Fr(this.serializer,n)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{}class Lg extends Mg{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(t,yo(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(P.UNKNOWN,i.toString())}))}Jo(t,e,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Jo(t,yo(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Ug{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ct(e),this._a=!1):b("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="RemoteStore";class Bg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{Je(this)&&(b(Ye,"Restarting streams for network reachability change."),await(async function(l){const d=M(l);d.Ia.add(4),await Qr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await _i(d)})(this))}))})),this.Aa=new Ug(n,s)}}async function _i(r){if(Je(r))for(const t of r.da)await t(!0)}async function Qr(r){for(const t of r.da)await t(!1)}function yi(r,t){const e=M(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),ua(e)?aa(e):Un(e).x_()&&oa(e,t))}function xn(r,t){const e=M(r),n=Un(e);e.Ta.delete(t),n.x_()&&sd(e,t),e.Ta.size===0&&(n.x_()?n.B_():Je(e)&&e.Aa.set("Unknown"))}function oa(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Un(r).H_(t)}function sd(r,t){r.Ra.$e(t),Un(r).Y_(t)}function aa(r){r.Ra=new Fm({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Un(r).start(),r.Aa.aa()}function ua(r){return Je(r)&&!Un(r).M_()&&r.Ta.size>0}function Je(r){return M(r).Ia.size===0}function id(r){r.Ra=void 0}async function qg(r){r.Aa.set("Online")}async function jg(r){r.Ta.forEach(((t,e)=>{oa(r,t)}))}async function zg(r,t){id(r),ua(r)?(r.Aa.la(t),aa(r)):r.Aa.set("Unknown")}async function Kg(r,t,e){if(r.Aa.set("Online"),t instanceof _h&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))})(r,t)}catch(n){b(Ye,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zs(r,n)}else if(t instanceof Ns?r.Ra.Ye(t):t instanceof ph?r.Ra.it(t):r.Ra.et(t),!e.isEqual(U.min()))try{const n=await Wh(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const m=i.Ta.get(l);if(!m)return;i.Ta.set(l,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),sd(i,l);const g=new ee(m.target,l,d,m.sequenceNumber);oa(i,g)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){b(Ye,"Failed to raise snapshot:",n),await Zs(r,n)}}async function Zs(r,t,e){if(!Pe(t))throw t;r.Ia.add(1),await Qr(r),r.Aa.set("Offline"),e||(e=()=>Wh(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{b(Ye,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await _i(r)}))}function od(r,t){return t().catch((e=>Zs(r,e,t)))}async function Ln(r){const t=M(r),e=Ae(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:je;for(;Gg(t);)try{const s=await bg(t.localStore,n);if(s===null){t.Pa.length===0&&e.B_();break}n=s.batchId,$g(t,s)}catch(s){await Zs(t,s)}ad(t)&&ud(t)}function Gg(r){return Je(r)&&r.Pa.length<10}function $g(r,t){r.Pa.push(t);const e=Ae(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function ad(r){return Je(r)&&!Ae(r).M_()&&r.Pa.length>0}function ud(r){Ae(r).start()}async function Qg(r){Ae(r).na()}async function Wg(r){const t=Ae(r);for(const e of r.Pa)t.X_(e.mutations)}async function Hg(r,t,e){const n=r.Pa.shift(),s=Qo.from(n,t,e);await od(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ln(r)}async function Xg(r,t){t&&Ae(r).Z_&&await(async function(n,s){if((function(a){return mh(a)&&a!==P.ABORTED})(s.code)){const i=n.Pa.shift();Ae(n).N_(),await od(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ln(n)}})(r,t),ad(r)&&ud(r)}async function zc(r,t){const e=M(r);e.asyncQueue.verifyOperationInProgress(),b(Ye,"RemoteStore received new credentials");const n=Je(e);e.Ia.add(3),await Qr(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await _i(e)}async function Po(r,t){const e=M(r);t?(e.Ia.delete(2),await _i(e)):t||(e.Ia.add(2),await Qr(e),e.Aa.set("Unknown"))}function Un(r){return r.Va||(r.Va=(function(e,n,s){const i=M(e);return i.ia(),new Fg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:qg.bind(null,r),e_:jg.bind(null,r),n_:zg.bind(null,r),J_:Kg.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),ua(r)?aa(r):r.Aa.set("Unknown")):(await r.Va.stop(),id(r))}))),r.Va}function Ae(r){return r.ma||(r.ma=(function(e,n,s){const i=M(e);return i.ia(),new Og(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Qg.bind(null,r),n_:Xg.bind(null,r),ea:Wg.bind(null,r),ta:Hg.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await Ln(r)):(await r.ma.stop(),r.Pa.length>0&&(b(Ye,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new ca(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(r,t){if(ct("AsyncQueue",`${t}: ${r}`),Pe(r))return new D(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{static emptySet(t){return new pn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=lr(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new pn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.fa=new nt(F.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):O(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Nn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Nn(t,e,pn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&li(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Jg{constructor(){this.queries=Gc(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const s=M(e),i=s.queries;s.queries=Gc(),i.forEach(((a,u)=>{for(const l of u.wa)l.onError(n)}))})(this,new D(P.ABORTED,"Firestore shutting down"))}}function Gc(){return new ie((r=>th(r)),li)}async function ha(r,t){const e=M(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Sa()&&t.ba()&&(n=2):(i=new Yg,n=t.ba()?0:1);try{switch(n){case 0:i.ya=await e.onListen(s,!0);break;case 1:i.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=la(a,`Initialization of query '${hn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.wa.push(t),t.va(e.onlineState),i.ya&&t.Ca(i.ya)&&fa(e)}async function da(r,t){const e=M(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.wa.indexOf(t);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Zg(r,t){const e=M(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(n=!0);a.ya=s}}n&&fa(e)}function tp(r,t,e){const n=M(r),s=n.queries.get(t);if(s)for(const i of s.wa)i.onError(e);n.queries.delete(t)}function fa(r){r.Da.forEach((t=>{t.next()}))}var So,$c;($c=So||(So={})).Fa="default",$c.Cache="cache";class ma{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Nn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==So.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.key=t}}class ld{constructor(t){this.key=t}}class ep{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=z(),this.mutatedKeys=z(),this.Xa=nh(t),this.eu=new pn(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new Kc,s=e?e.eu:this.eu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,g)=>{const I=s.get(m),S=zr(this.query,g)?g:null,C=!!I&&this.mutatedKeys.has(I.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;I&&S?I.data.isEqual(S.data)?C!==k&&(n.track({type:3,doc:S}),x=!0):this.iu(I,S)||(n.track({type:2,doc:S}),x=!0,(l&&this.Xa(S,l)>0||d&&this.Xa(S,d)<0)&&(u=!0)):!I&&S?(n.track({type:0,doc:S}),x=!0):I&&!S&&(n.track({type:1,doc:I}),x=!0,(l||d)&&(u=!0)),x&&(S?(a=a.add(S),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{eu:a,ru:n,Ds:u,mutatedKeys:i}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,g)=>(function(S,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{At:x})}};return k(S)-k(C)})(m.type,g.type)||this.Xa(m.doc,g.doc))),this.su(n),s=s!=null&&s;const u=e&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Nn(this.query,t.eu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Kc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=z(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new ld(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new cd(n))})),e}uu(t){this.Ha=t.qs,this.Za=z();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Nn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Bn="SyncEngine";class np{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rp{constructor(t){this.key=t,this.lu=!1}}class sp{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new ie((u=>th(u)),li),this.Tu=new Map,this.Iu=new Set,this.du=new nt(F.comparator),this.Eu=new Map,this.Au=new Zo,this.Ru={},this.Vu=new Map,this.mu=Xe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ip(r,t,e=!0){const n=Ii(r);let s;const i=n.Pu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await hd(n,t,e,!0),s}async function op(r,t){const e=Ii(r);await hd(e,t,!0,!1)}async function hd(r,t,e,n){const s=await Xs(r.localStore,Mt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await ga(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&yi(r.remoteStore,s),u}async function ga(r,t,e,n,s){r.gu=(g,I,S)=>(async function(k,x,K,j){let B=x.view.nu(K);B.Ds&&(B=await Ao(k.localStore,x.query,!1).then((({documents:T})=>x.view.nu(T,B))));const X=j&&j.targetChanges.get(x.targetId),et=j&&j.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(B,k.isPrimaryClient,X,et);return bo(k,x.targetId,Q._u),Q.snapshot})(r,g,I,S);const i=await Ao(r.localStore,t,!0),a=new ep(t,i.qs),u=a.nu(i.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);bo(r,e,d._u);const m=new np(t,e,a);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function ap(r,t,e){const n=M(r),s=n.Pu.get(t),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((a=>!li(a,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&xn(n.remoteStore,s.targetId),kn(n,s.targetId)})).catch(Ve)):(kn(n,s.targetId),await Dn(n.localStore,s.targetId,!0))}async function up(r,t){const e=M(r),n=e.Pu.get(t),s=e.Tu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),xn(e.remoteStore,n.targetId))}async function cp(r,t,e){const n=Ia(r);try{const s=await(function(a,u){const l=M(a),d=Y.now(),m=u.reduce(((S,C)=>S.add(C.key)),z());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let C=Ot(),k=z();return l.Os.getEntries(S,m).next((x=>{C=x,C.forEach(((K,j)=>{j.isValidDocument()||(k=k.add(K))}))})).next((()=>l.localDocuments.getOverlayedDocuments(S,C))).next((x=>{g=x;const K=[];for(const j of u){const B=xm(j,g.get(j.key).overlayedDocument);B!=null&&K.push(new oe(j.key,B,Kl(B.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,K,u)})).next((x=>{I=x;const K=x.applyToLocalDocumentSet(g,k);return l.documentOverlayCache.saveOverlays(S,x.batchId,K)}))})).then((()=>({batchId:I.batchId,changes:sh(g)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new nt(q)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d})(n,s.batchId,e),await be(n,s.changes),await Ln(n.remoteStore)}catch(s){const i=la(s,"Failed to persist write");e.reject(i)}}async function dd(r,t){const e=M(r);try{const n=await Pg(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Eu.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?L(a.lu,14607):s.removedDocuments.size>0&&(L(a.lu,42227),a.lu=!1))})),await be(e,n,t)}catch(n){await Ve(n)}}function Qc(r,t,e){const n=M(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Pu.forEach(((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=M(a);l.onlineState=u;let d=!1;l.queries.forEach(((m,g)=>{for(const I of g.wa)I.va(u)&&(d=!0)})),d&&fa(l)})(n.eventManager,t),s.length&&n.hu.J_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function lp(r,t,e){const n=M(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Eu.get(t),i=s&&s.key;if(i){let a=new nt(F.comparator);a=a.insert(i,it.newNoDocument(i,U.min()));const u=z().add(i),l=new Gr(U.min(),new Map,new nt(q),a,u);await dd(n,l),n.du=n.du.remove(i),n.Eu.delete(t),ya(n)}else await Dn(n.localStore,t,!1).then((()=>kn(n,t,e))).catch(Ve)}async function hp(r,t){const e=M(r),n=t.batch.batchId;try{const s=await Vg(e.localStore,t);_a(e,n,null),pa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await be(e,s)}catch(s){await Ve(s)}}async function dp(r,t,e){const n=M(r);try{const s=await(function(a,u){const l=M(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next((g=>(L(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>l.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);_a(n,t,e),pa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await be(n,s)}catch(s){await Ve(s)}}function pa(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function _a(r,t,e){const n=M(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ru[n.currentUser.toKey()]=s}}function kn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||fd(r,n)}))}function fd(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(xn(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),ya(r))}function bo(r,t,e){for(const n of e)n instanceof cd?(r.Au.addReference(n.key,t),fp(r,n)):n instanceof ld?(b(Bn,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||fd(r,n.key)):O(19791,{yu:n})}function fp(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(b(Bn,"New document in limbo: "+e),r.Iu.add(n),ya(r))}function ya(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new F(W.fromString(t)),n=r.mu.next();r.Eu.set(n,new rp(e)),r.du=r.du.insert(e,n),yi(r.remoteStore,new ee(Mt(jr(e.path)),n,"TargetPurposeLimboResolution",Ct.ue))}}async function be(r,t,e){const n=M(r),s=[],i=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((u,l)=>{a.push(n.gu(l,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e?.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=na.Es(l.targetId,d);i.push(g)}})))})),await Promise.all(a),n.hu.J_(s),await(async function(l,d){const m=M(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>w.forEach(d,(I=>w.forEach(I.Is,(S=>m.persistence.referenceDelegate.addReference(g,I.targetId,S))).next((()=>w.forEach(I.ds,(S=>m.persistence.referenceDelegate.removeReference(g,I.targetId,S)))))))))}catch(g){if(!Pe(g))throw g;b(ra,"Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const S=m.Fs.get(I),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);m.Fs=m.Fs.insert(I,k)}}})(n.localStore,i))}async function mp(r,t){const e=M(r);if(!e.currentUser.isEqual(t)){b(Bn,"User change. New user:",t.toKey());const n=await Qh(e.localStore,t);e.currentUser=t,(function(i,a){i.Vu.forEach((u=>{u.forEach((l=>{l.reject(new D(P.CANCELLED,a))}))})),i.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await be(e,n.Bs)}}function gp(r,t){const e=M(r),n=e.Eu.get(t);if(n&&n.lu)return z().add(n.key);{let s=z();const i=e.Tu.get(t);if(!i)return s;for(const a of i){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}async function pp(r,t){const e=M(r),n=await Ao(e.localStore,t.query,!0),s=t.view.uu(n);return e.isPrimaryClient&&bo(e,t.targetId,s._u),s}async function _p(r,t){const e=M(r);return Xh(e.localStore,t).then((n=>be(e,n)))}async function yp(r,t,e,n){const s=M(r),i=await(function(u,l){const d=M(u),m=M(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",(g=>m.Xn(g,l).next((I=>I?d.localDocuments.getDocuments(g,I):w.resolve(null)))))})(s.localStore,t);i!==null?(e==="pending"?await Ln(s.remoteStore):e==="acknowledged"||e==="rejected"?(_a(s,t,n||null),pa(s,t),(function(u,l){M(M(u).mutationQueue).rr(l)})(s.localStore,t)):O(6720,"Unknown batchState",{wu:e}),await be(s,i)):b(Bn,"Cannot apply mutation batch with id: "+t)}async function Ip(r,t){const e=M(r);if(Ii(e),Ia(e),t===!0&&e.fu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await Wc(e,n.toArray());e.fu=!0,await Po(e.remoteStore,!0);for(const i of s)yi(e.remoteStore,i)}else if(t===!1&&e.fu!==!1){const n=[];let s=Promise.resolve();e.Tu.forEach(((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then((()=>(kn(e,a),Dn(e.localStore,a,!0)))),xn(e.remoteStore,a)})),await s,await Wc(e,n),(function(a){const u=M(a);u.Eu.forEach(((l,d)=>{xn(u.remoteStore,d)})),u.Au.jr(),u.Eu=new Map,u.du=new nt(F.comparator)})(e),e.fu=!1,await Po(e.remoteStore,!1)}}async function Wc(r,t,e){const n=M(r),s=[],i=[];for(const a of t){let u;const l=n.Tu.get(a);if(l&&l.length!==0){u=await Xs(n.localStore,Mt(l[0]));for(const d of l){const m=n.Pu.get(d),g=await pp(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await Hh(n.localStore,a);u=await Xs(n.localStore,d),await ga(n,md(d),a,!1,u.resumeToken)}s.push(u)}return n.hu.J_(i),s}function md(r){return Jl(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Tp(r){return(function(e){return M(M(e).persistence).Ps()})(M(r).localStore)}async function Ep(r,t,e,n){const s=M(r);if(s.fu)return void b(Bn,"Ignoring unexpected query state notification.");const i=s.Tu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Xh(s.localStore,eh(i[0])),u=Gr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ht.EMPTY_BYTE_STRING);await be(s,a,u);break}case"rejected":await Dn(s.localStore,t,!0),kn(s,t,n);break;default:O(64155,e)}}async function vp(r,t,e){const n=Ii(r);if(n.fu){for(const s of t){if(n.Tu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){b(Bn,"Adding an already active target "+s);continue}const i=await Hh(n.localStore,s),a=await Xs(n.localStore,i);await ga(n,md(i),a.targetId,!1,a.resumeToken),yi(n.remoteStore,a)}for(const s of e)n.Tu.has(s)&&await Dn(n.localStore,s,!1).then((()=>{xn(n.remoteStore,s),kn(n,s)})).catch(Ve)}}function Ii(r){const t=M(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=dd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lp.bind(null,t),t.hu.J_=Zg.bind(null,t.eventManager),t.hu.pu=tp.bind(null,t.eventManager),t}function Ia(r){const t=M(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dp.bind(null,t),t}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pi(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return $h(this.persistence,new Gh,t.initialUser,this.serializer)}Du(t){return new ta(gi.Vi,this.serializer)}bu(t){return new ed}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class wp extends Or{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){L(this.persistence.referenceDelegate instanceof Hs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Uh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new ta((n=>Hs.Vi(n,e)),this.serializer)}}class gd extends Or{constructor(t,e,n){super(),this.Mu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Mu.initialize(this,t),await Ia(this.Mu.syncEngine),await Ln(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(t){return $h(this.persistence,new Gh,t.initialUser,this.serializer)}Cu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Uh(n,t.asyncQueue,e)}Fu(t,e){const n=new Ff(e,this.persistence);return new kf(t.asyncQueue,n)}Du(t){const e=Kh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new ea(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,nd(),Fs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(t){return new ed}}class Ap extends gd{constructor(t,e){super(t,e,!1),this.Mu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Mu.syncEngine;this.sharedClientState instanceof to&&(this.sharedClientState.syncEngine={Do:yp.bind(null,e),vo:Ep.bind(null,e),Co:vp.bind(null,e),Ps:Tp.bind(null,e),bo:_p.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await Ip(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(t){const e=nd();if(!to.C(e))throw new D(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Kh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new to(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Mr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Qc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=mp.bind(null,this.syncEngine),await Po(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Jg})()}createDatastore(t){const e=pi(t.databaseInfo.databaseId),n=(function(i){return new kg(i)})(t.databaseInfo);return(function(i,a,u,l){return new Lg(i,a,u,l)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new Bg(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Qc(this.syncEngine,e,0)),(function(){return qc.C()?new qc:new Cg})())}createSyncEngine(t,e){return(function(s,i,a,u,l,d,m){const g=new sp(s,i,a,u,l,d);return m&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=M(s);b(Ye,"RemoteStore shutting down."),i.Ia.add(5),await Qr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Mr.provider={build:()=>new Mr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):ct("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(s,i){const a=M(s),u={documents:i.map((g=>kr(a.serializer,g)))},l=await a.Jo("BatchGetDocuments",a.serializer.databaseId,W.emptyPath(),u,i.length),d=new Map;l.forEach((g=>{const I=jm(a.serializer,g);d.set(I.key.toString(),I)}));const m=[];return i.forEach((g=>{const I=d.get(g.toString());L(!!I,55234,{key:g}),m.push(I)})),m})(this.datastore,t);return e.forEach((n=>this.recordVersion(n))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Kr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,n)=>{const s=F.fromPath(n);this.mutations.push(new Go(s,this.precondition(s)))})),await(async function(n,s){const i=M(n),a={writes:s.map((u=>Fr(i.serializer,u)))};await i.Wo("Commit",i.serializer.databaseId,W.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O(50498,{Wu:t.constructor.name});e=U.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new D(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?lt.exists(!1):lt.updateTime(e):lt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new D(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return lt.updateTime(e)}return lt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.Gu=n.maxAttempts,this.F_=new ia(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const t=new Rp(this.datastore),e=this.Ju(t);e&&e.then((n=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Hu(s)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(t){try{const e=this.updateFunction(t);return!Ur(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(t){this.Gu>0&&this.Yu(t)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(t)}Yu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!mh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="FirestoreClient";class Pp{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{b(Re,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(b(Re,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=la(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function no(r,t){r.asyncQueue.verifyOperationInProgress(),b(Re,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Qh(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>{Ee("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{b("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ee("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=t}async function Hc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Sp(r);b(Re,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>zc(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>zc(t.remoteStore,s))),r._onlineComponents=t}async function Sp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(Re,"Using user provided OfflineComponentProvider");try{await no(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Ee("Error using user provided cache. Falling back to memory cache: "+e),await no(r,new Or)}}else b(Re,"Using default OfflineComponentProvider"),await no(r,new wp(void 0));return r._offlineComponents}async function Ea(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(Re,"Using user provided OnlineComponentProvider"),await Hc(r,r._uninitializedComponentsProvider._online)):(b(Re,"Using default OnlineComponentProvider"),await Hc(r,new Mr))),r._onlineComponents}function bp(r){return Ea(r).then((t=>t.syncEngine))}function Cp(r){return Ea(r).then((t=>t.datastore))}async function ti(r){const t=await Ea(r),e=t.eventManager;return e.onListen=ip.bind(null,t.syncEngine),e.onUnlisten=ap.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=op.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=up.bind(null,t.syncEngine),e}function Dp(r,t,e={}){const n=new jt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const m=new Ta({next:I=>{m.Ou(),a.enqueueAndForget((()=>da(i,g)));const S=I.docs.has(u);!S&&I.fromCache?d.reject(new D(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new ma(jr(u.path),m,{includeMetadataChanges:!0,ka:!0});return ha(i,g)})(await ti(r),r.asyncQueue,t,e,n))),n.promise}function xp(r,t,e={}){const n=new jt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const m=new Ta({next:I=>{m.Ou(),a.enqueueAndForget((()=>da(i,g))),I.fromCache&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new ma(u,m,{includeMetadataChanges:!0,ka:!0});return ha(i,g)})(await ti(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="firestore.googleapis.com",Yc=!0;class Jc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Np,this.ssl=Yc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Yc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=kh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Lh)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class va{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new vf;switch(n.type){case"firstParty":return new Rf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Xc.get(e);n&&(b("ComponentProvider","Removing Datastore"),Xc.delete(e),n.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ae(this.firestore,t,this._query)}}class at{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Lr(e,at._jsonSchema))return new at(t,n||null,new F(W.fromString(e.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:ft("string",at._jsonSchemaVersion),referencePath:ft("string")};class Ie extends ae{constructor(t,e,n){super(t,e,jr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new F(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function Zp(r,t,...e){if(r=Ut(r),_l("collection","path",t),r instanceof va){const n=W.fromString(t,...e);return ju(n),new Ie(r,null,n)}{if(!(r instanceof at||r instanceof Ie))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return ju(n),new Ie(r.firestore,null,n)}}function kp(r,t,...e){if(r=Ut(r),arguments.length===1&&(t=xo.newId()),_l("doc","path",t),r instanceof va){const n=W.fromString(t,...e);return qu(n),new at(r,null,new F(n))}{if(!(r instanceof at||r instanceof Ie))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return qu(n),new at(r.firestore,r instanceof Ie?r.converter:null,new F(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="AsyncQueue";class tl{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ia(this,"async_queue_retry"),this.oc=()=>{const n=Fs();n&&b(Zc,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=Fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new jt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Pe(t))throw t;b(Zc,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,ct("INTERNAL UNHANDLED ERROR: ",el(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=ca.createAndSchedule(this,t,e,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&O(47125,{hc:el(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function el(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=-1;class Xt extends va{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new tl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tl(t),this._firestoreClient=void 0,await t}}}function e_(r,t,e){e||(e=js);const n=gf(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(pf(i,t))return s;throw new D(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new D(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Lh)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&il(t.host)&&_f(t.host),n.initialize({options:t,instanceIdentifier:e})}function Wr(r){if(r._terminated)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Fp(r),r._firestoreClient}function Fp(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,l,d,m){return new cm(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,pd(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Pp(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ft(ht.fromBase64String(t))}catch(e){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ft(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Lr(t,Ft._jsonSchema))return Ft.fromBase64String(t.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:ft("string",Ft._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(t){if(Lr(t,Qt._jsonSchema))return new Qt(t.latitude,t.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:ft("string",Qt._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Lr(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Wt(t.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:ft("string",Wt._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=/^__.*__$/;class Mp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mn(t,this.data,e,this.fieldTransforms)}}class _d{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new oe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ec:r})}}class wa{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new wa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.fc(t),s}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ei(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(yd(this.Ec)&&Op.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Lp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pi(t)}Dc(t,e,n,s=!1){return new wa({Ec:t,methodName:e,bc:n,path:ot.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xr(r){const t=r._freezeSettings(),e=pi(r._databaseId);return new Lp(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Aa(r,t,e,n,s,i={}){const a=r.Dc(i.merge||i.mergeFields?2:0,t,e,s);Va("Data must be an object, but it was:",a,n);const u=Ed(n,a);let l,d;if(i.merge)l=new Dt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const I=Co(t,g,e);if(!a.contains(I))throw new D(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);wd(m,I)||m.push(I)}l=new Dt(m),d=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,d=a.fieldTransforms;return new Mp(new It(u),l,d)}class Yr extends Ti{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yr}}class Ra extends Ti{_toFieldTransform(t){return new hh(t.path,new Pn)}isEqual(t){return t instanceof Ra}}function Id(r,t,e,n){const s=r.Dc(1,t,e);Va("Data must be an object, but it was:",s,n);const i=[],a=It.empty();Se(n,((l,d)=>{const m=Pa(t,l,e);d=Ut(d);const g=s.gc(m);if(d instanceof Yr)i.push(m);else{const I=Jr(d,g);I!=null&&(i.push(m),a.set(m,I))}}));const u=new Dt(i);return new _d(a,u,s.fieldTransforms)}function Td(r,t,e,n,s,i){const a=r.Dc(1,t,e),u=[Co(t,n,e)],l=[s];if(i.length%2!=0)throw new D(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(Co(t,i[I])),l.push(i[I+1]);const d=[],m=It.empty();for(let I=u.length-1;I>=0;--I)if(!wd(d,u[I])){const S=u[I];let C=l[I];C=Ut(C);const k=a.gc(S);if(C instanceof Yr)d.push(S);else{const x=Jr(C,k);x!=null&&(d.push(S),m.set(S,x))}}const g=new Dt(d);return new _d(m,g,a.fieldTransforms)}function Up(r,t,e,n=!1){return Jr(e,r.Dc(n?4:3,t))}function Jr(r,t){if(vd(r=Ut(r)))return Va("Unsupported field value:",t,r),Ed(r,t);if(r instanceof Ti)return(function(n,s){if(!yd(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let l=Jr(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Y.fromDate(n);return{timestampValue:Cn(s.serializer,i)}}if(n instanceof Y){const i=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cn(s.serializer,i)}}if(n instanceof Qt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ft)return{bytesValue:yh(s.serializer,n._byteString)};if(n instanceof at){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Wt)return(function(a,u){return{mapValue:{fields:{[Bo]:{stringValue:qo},[wn]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Ko(u.serializer,d)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${ri(n)}`)})(r,t)}function Ed(r,t){const e={};return Fl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(r,((n,s)=>{const i=Jr(s,t.Vc(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function vd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Y||r instanceof Qt||r instanceof Ft||r instanceof at||r instanceof Ti||r instanceof Wt)}function Va(r,t,e){if(!vd(e)||!yl(e)){const n=ri(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function Co(r,t,e){if((t=Ut(t))instanceof Hr)return t._internalPath;if(typeof t=="string")return Pa(r,t);throw ei("Field path arguments must be of type string or ",r,!1,void 0,e)}const Bp=new RegExp("[~\\*/\\[\\]]");function Pa(r,t,e){if(t.search(Bp)>=0)throw ei(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Hr(...t.split("."))._internalPath}catch{throw ei(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ei(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new D(P.INVALID_ARGUMENT,u+r+l)}function wd(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ei("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qp extends ni{data(){return super.data()}}function Ei(r,t){return typeof t=="string"?Pa(r,t):t instanceof Hr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sa{}class ba extends Sa{}function n_(r,t,...e){let n=[];t instanceof Sa&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((l=>l instanceof Ca)).length,u=i.filter((l=>l instanceof vi)).length;if(a>1||a>0&&u>0)throw new D(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class vi extends ba{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new vi(t,e,n)}_apply(t){const e=this._parse(t);return Rd(t._query,e),new ae(t.firestore,t.converter,po(t._query,e))}_parse(t){const e=Xr(t.firestore);return(function(i,a,u,l,d,m,g){let I;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){sl(g,m);const C=[];for(const k of g)C.push(rl(l,i,k));I={arrayValue:{values:C}}}else I=rl(l,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||sl(g,m),I=Up(u,a,g,m==="in"||m==="not-in");return G.create(d,m,I)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function r_(r,t,e){const n=t,s=Ei("where",r);return vi._create(s,n,e)}class Ca extends Sa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ca(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:J.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Rd(a,l),a=po(a,l)})(t._query,e),new ae(t.firestore,t.converter,po(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Da extends ba{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Da(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xr(i,a)})(t._query,this._field,this._direction);return new ae(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new On(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function s_(r,t="asc"){const e=t,n=Ei("orderBy",r);return Da._create(n,e)}class xa extends ba{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new xa(t,e,n)}_apply(t){return new ae(t.firestore,t.converter,Gs(t._query,this._limit,this._limitType))}}function i_(r){return Df("limit",r),xa._create("limit",r,"F")}function rl(r,t,e){if(typeof(e=Ut(e))=="string"){if(e==="")throw new D(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zl(t)&&e.indexOf("/")!==-1)throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!F.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Cr(r,new F(n))}if(e instanceof at)return Cr(r,e._key);throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ri(e)}.`)}function sl(r,t){if(!Array.isArray(r)||r.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Rd(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Vd{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Se(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[wn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>st(a.doubleValue)));return new Wt(i)}convertGeoPoint(t){return new Qt(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ui(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Sr(t));default:return null}}convertTimestamp(t){const e=re(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);L(Sh(n),9688,{name:t});const s=new $e(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(e)||ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class jp extends Vd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,e)}}class gn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Te extends ni{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ei("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Te._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Te._jsonSchemaVersion="firestore/documentSnapshot/1.0",Te._jsonSchema={type:ft("string",Te._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Os extends Te{data(t={}){return super.data(t)}}class Ke{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new gn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Os(this._firestore,this._userDataWriter,n.key,n,new gn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new Os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new Os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:zp(u.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ke._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function zp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(r){r=xt(r,at);const t=xt(r.firestore,Xt);return Dp(Wr(t),r._key).then((e=>Pd(t,r,e)))}Ke._jsonSchemaVersion="firestore/querySnapshot/1.0",Ke._jsonSchema={type:ft("string",Ke._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class wi extends Vd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,e)}}function a_(r){r=xt(r,ae);const t=xt(r.firestore,Xt),e=Wr(t),n=new wi(t);return Ad(r._query),xp(e,r._query).then((s=>new Ke(t,n,r,s)))}function u_(r,t,e){r=xt(r,at);const n=xt(r.firestore,Xt),s=Na(r.converter,t,e);return Ai(n,[Aa(Xr(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,lt.none())])}function c_(r,t,e,...n){r=xt(r,at);const s=xt(r.firestore,Xt),i=Xr(s);let a;return a=typeof(t=Ut(t))=="string"||t instanceof Hr?Td(i,"updateDoc",r._key,t,e,n):Id(i,"updateDoc",r._key,t),Ai(s,[a.toMutation(r._key,lt.exists(!0))])}function l_(r){return Ai(xt(r.firestore,Xt),[new Kr(r._key,lt.none())])}function h_(r,t){const e=xt(r.firestore,Xt),n=kp(r),s=Na(r.converter,t);return Ai(e,[Aa(Xr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,lt.exists(!1))]).then((()=>n))}function d_(r,...t){var e,n,s;r=Ut(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||nl(t[a])||(i=t[a++]);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(nl(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,m;if(r instanceof at)d=xt(r.firestore,Xt),m=jr(r._key.path),l={next:g=>{t[a]&&t[a](Pd(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=xt(r,ae);d=xt(g.firestore,Xt),m=g._query;const I=new wi(d);l={next:S=>{t[a]&&t[a](new Ke(d,I,g,S))},error:t[a+1],complete:t[a+2]},Ad(r._query)}return(function(I,S,C,k){const x=new Ta(k),K=new ma(S,x,C);return I.asyncQueue.enqueueAndForget((async()=>ha(await ti(I),K))),()=>{x.Ou(),I.asyncQueue.enqueueAndForget((async()=>da(await ti(I),K)))}})(Wr(d),m,u,l)}function Ai(r,t){return(function(n,s){const i=new jt;return n.asyncQueue.enqueueAndForget((async()=>cp(await bp(n),s,i))),i.promise})(Wr(r),t)}function Pd(r,t,e){const n=e.docs.get(t._key),s=new wi(r);return new Te(r,s,t._key,n,new gn(e.hasPendingWrites,e.fromCache),t.converter)}class Kp{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Qp(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function f_(r){return new Kp(r)}class Gp{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Mr.provider,this._offlineComponentProvider={build:e=>new gd(e,t?.cacheSizeBytes,this.forceOwnership)}}}class $p{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Mr.provider,this._offlineComponentProvider={build:e=>new Ap(e,t?.cacheSizeBytes)}}}function Qp(r){return new Gp(void 0)}function m_(){return new $p}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp={maxAttempts:5};function fr(r,t){if((r=Ut(r)).firestore!==t)throw new D(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Xr(t)}get(t){const e=fr(t,this._firestore),n=new jp(this._firestore);return this._transaction.lookup([e._key]).then((s=>{if(!s||s.length!==1)return O(24041);const i=s[0];if(i.isFoundDocument())return new ni(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new ni(this._firestore,n,e._key,null,e.converter);throw O(18433,{doc:i})}))}set(t,e,n){const s=fr(t,this._firestore),i=Na(s.converter,e,n),a=Aa(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(t,e,n,...s){const i=fr(t,this._firestore);let a;return a=typeof(e=Ut(e))=="string"||e instanceof Hr?Td(this._dataReader,"Transaction.update",i._key,e,n,s):Id(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,a),this}delete(t){const e=fr(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Hp{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=fr(t,this._firestore),n=new wi(this._firestore);return super.get(t).then((s=>new Te(this._firestore,n,e._key,s._document,new gn(!1,!1),e.converter)))}}function g_(r,t,e){r=xt(r,Xt);const n=Object.assign(Object.assign({},Wp),e);return(function(i){if(i.maxAttempts<1)throw new D(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(i,a,u){const l=new jt;return i.asyncQueue.enqueueAndForget((async()=>{const d=await Cp(i);new Vp(i.asyncQueue,d,u,a,l).zu()})),l.promise})(Wr(r),(s=>t(new Xp(r,s))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return new Yr("deleteField")}function __(){return new Ra("serverTimestamp")}(function(t,e=!0){(function(s){Fn=s})(Tf),hf(new df("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Xt(new wf(n.getProvider("auth-internal")),new Vf(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),ku(Ou,Mu,t),ku(Ou,Mu,"esm2017")})();export{m_ as a,c_ as b,__ as c,kp as d,p_ as e,s_ as f,o_ as g,Zp as h,e_ as i,l_ as j,h_ as k,i_ as l,a_ as m,d_ as o,f_ as p,n_ as q,g_ as r,u_ as s,t_ as u,r_ as w};
