import{L as Fl,_ as Ml,C as Ll,r as yo,a as Ul,F as ql,b as zt,g as jl,c as Bl,d as zl,i as Ea,p as Gl,u as $l,e as Ql,f as Kl,h as Ct,j as Wl,k as Hl,S as Xl}from"./firebase-core-BNtvzCij.js";var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,va;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,E,A){for(var g=Array(arguments.length-2),qt=2;qt<arguments.length;qt++)g[qt-2]=arguments[qt];return p.prototype[E].apply(T,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var T=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)T[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)T[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var A=v.g[3],g=p+(A^_&(E^A))+T[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^A&(_^E))+T[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^A)+T[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~A))+T[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,T=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=_;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(T[E++]=v.charCodeAt(A++),E==this.blockSize){i(this,T),E=0;break}}else for(;A<p;)if(T[E++]=v[A++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var T=0;32>T;T+=8)v[_++]=this.g[p]>>>T&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],T=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;T&&A==p||(_[E]=A,T=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return b(d(-v));for(var p=[],_=1,T=0;v>=_;T++)p[T]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return b(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),T=y,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+A),p);8>A?(A=d(Math.pow(p,A)),T=T.j(A).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var y=h(0),w=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-b(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+b(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,T="";;){var E=it(_,p).g;_=z(_,E.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,N(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=z(this,v),x(v)?-1:N(v)?0:1};function b(v){for(var p=v.g.length,_=[],T=0;T<p;T++)_[T]=~v.g[T];return new a(_,~v.h).add(w)}r.abs=function(){return x(this)?b(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0,E=0;E<=p;E++){var A=T+(this.i(E)&65535)+(v.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(b(p))}r.j=function(v){if(N(this)||N(v))return y;if(x(this))return x(v)?b(this).j(b(v)):b(b(this).j(v));if(x(v))return b(this.j(b(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<v.g.length;E++){var A=this.i(T)>>>16,g=this.i(T)&65535,qt=v.i(E)>>>16,je=v.i(E)&65535;_[2*T+2*E]+=g*je,G(_,2*T+2*E),_[2*T+2*E+1]+=A*je,G(_,2*T+2*E+1),_[2*T+2*E+1]+=g*qt,G(_,2*T+2*E+1),_[2*T+2*E+2]+=A*qt,G(_,2*T+2*E+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function it(v,p){if(N(p))throw Error("division by zero");if(N(v))return new Q(y,y);if(x(v))return p=it(b(v),p),new Q(b(p.g),b(p.h));if(x(p))return p=it(v,b(p)),new Q(b(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=p;0>=T.l(v);)_=Ut(_),T=Ut(T);var E=ut(_,1),A=ut(T,1);for(T=ut(T,2),_=ut(_,2);!N(T);){var g=A.add(T);0>=g.l(v)&&(E=E.add(_),A=g),T=ut(T,1),_=ut(_,1)}return p=z(v,E.j(p)),new Q(E,p)}for(E=y;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(_),g=A.j(p);x(g)||0<g.l(v);)_-=T,A=d(_),g=A.j(p);N(A)&&(A=w),E=E.add(A),v=z(v,g)}return new Q(E,v)}r.A=function(v){return it(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function Ut(v){for(var p=v.g.length+1,_=[],T=0;T<p;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function ut(v,p){var _=p>>5;p%=32;for(var T=v.g.length-_,E=[],A=0;A<T;A++)E[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,va=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Zt=a}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ia,sn,Aa,rr,ms,wa,Ra,Va;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jn=="object"&&Jn];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break t;l=l[I]}s=s[s.length-1],f=l[s],u=u(f),u!=f&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var R=l++;return{value:u(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,l){return s.call.apply(s.bind,arguments)}function y(s,u,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function w(s,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function S(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return u.prototype[I].apply(f,C)}}function x(s){const u=s.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=s[f];return l}return[]}function b(s,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let C=0;C<R;C++)s[I+C]=f[C]}else s.push(f)}}class z{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Ut=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ut(s,u,l){for(const f in s)u.call(l,s[f],f,s)}function v(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function p(s){const u={};for(const l in s)u[l]=s[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,u){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=jr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class qt{constructor(){this.h=this.g=null}add(u,l){const f=je.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var je=new z(()=>new el,s=>s.reset());class el{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ze=!1,jr=new qt,_i=()=>{const s=c.Promise.resolve(void 0);Be=()=>{s.then(nl)}};var nl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var u=je;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}ze=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var rl=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s})();function Ge(s,u){if(mt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Ut){t:{try{it(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:sl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ge.aa.h.call(this)}}N(Ge,mt);var sl={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),il=0;function ol(s,u,l,f,I){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=I,this.key=++il,this.da=this.fa=!1}function xn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function On(s){this.src=s,this.g={},this.h=0}On.prototype.add=function(s,u,l,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var C=zr(s,u,f,I);return-1<C?(u=s[C],l||(u.fa=!1)):(u=new ol(u,this.src,R,!!f,I),u.fa=l,s.push(u)),u};function Br(s,u){var l=u.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(xn(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function zr(s,u,l,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return I}return-1}var Gr="closure_lm_"+(1e6*Math.random()|0),$r={};function yi(s,u,l,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)yi(s,u[R],l,f,I);return null}return l=vi(l),s&&s[kn]?s.K(u,l,d(f)?!!f.capture:!1,I):al(s,u,l,!1,f,I)}function al(s,u,l,f,I,R){if(!u)throw Error("Invalid event type");var C=d(I)?!!I.capture:!!I,W=Kr(s);if(W||(s[Gr]=W=new On(s)),l=W.add(u,l,f,C,R),l.proxy)return l;if(f=ul(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)rl||(I=C),I===void 0&&(I=!1),s.addEventListener(u.toString(),f,I);else if(s.attachEvent)s.attachEvent(Ei(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ul(){function s(l){return u.call(s.src,s.listener,l)}const u=ll;return s}function Ti(s,u,l,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Ti(s,u[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=vi(l),s&&s[kn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],l=zr(R,l,f,I),-1<l&&(xn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=Kr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=zr(u,l,f,I)),(l=-1<s?u[s]:null)&&Qr(l))}function Qr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[kn])Br(u.i,s);else{var l=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(l,f,s.capture):u.detachEvent?u.detachEvent(Ei(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Kr(u))?(Br(l,s),l.h==0&&(l.src=null,u[Gr]=null)):xn(s)}}}function Ei(s){return s in $r?$r[s]:$r[s]="on"+s}function ll(s,u){if(s.da)s=!0;else{u=new Ge(u,this);var l=s.listener,f=s.ha||s.src;s.fa&&Qr(s),s=l.call(f,u)}return s}function Kr(s){return s=s[Gr],s instanceof On?s:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function vi(s){return typeof s=="function"?s:(s[Wr]||(s[Wr]=function(u){return s.handleEvent(u)}),s[Wr])}function pt(){Kt.call(this),this.i=new On(this),this.M=this,this.F=null}N(pt,Kt),pt.prototype[kn]=!0,pt.prototype.removeEventListener=function(s,u,l,f){Ti(this,s,u,l,f)};function vt(s,u){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new mt(u,s);else if(u instanceof mt)u.target=u.target||s;else{var I=u;u=new mt(f,s),T(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var C=u.g=l[R];I=Fn(C,f,!0,u)&&I}if(C=u.g=s,I=Fn(C,f,!0,u)&&I,I=Fn(C,f,!1,u)&&I,l)for(R=0;R<l.length;R++)C=u.g=l[R],I=Fn(C,f,!1,u)&&I}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],f=0;f<l.length;f++)xn(l[f]);delete s.g[u],s.h--}}this.F=null},pt.prototype.K=function(s,u,l,f){return this.i.add(String(s),u,!1,l,f)},pt.prototype.L=function(s,u,l,f){return this.i.add(String(s),u,!0,l,f)};function Fn(s,u,l,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==l){var W=C.listener,lt=C.ha||C.src;C.fa&&Br(s.i,C),I=W.call(lt,f)!==!1&&I}}return I&&!f.defaultPrevented}function Ii(s,u,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function Ai(s){s.g=Ii(()=>{s.g=null,s.i&&(s.i=!1,Ai(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class cl extends Kt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(s){Kt.call(this),this.h=s,this.g={}}N($e,Kt);var wi=[];function Ri(s){ut(s.g,function(u,l){this.g.hasOwnProperty(l)&&Qr(u)},s),s.g={}}$e.prototype.N=function(){$e.aa.N.call(this),Ri(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,hl=c.JSON.parse,dl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Xr(){}Xr.prototype.h=null;function Vi(s){return s.h||(s.h=s.i())}function Pi(){}var Qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yr(){mt.call(this,"d")}N(Yr,mt);function Jr(){mt.call(this,"c")}N(Jr,mt);var he={},Si=null;function Mn(){return Si=Si||new pt}he.La="serverreachability";function Ci(s){mt.call(this,he.La,s)}N(Ci,mt);function Ke(s){const u=Mn();vt(u,new Ci(u))}he.STAT_EVENT="statevent";function Di(s,u){mt.call(this,he.STAT_EVENT,s),this.stat=u}N(Di,mt);function It(s){const u=Mn();vt(u,new Di(u,s))}he.Ma="timingevent";function bi(s,u){mt.call(this,he.Ma,s),this.size=u}N(bi,mt);function We(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function He(){this.g=!0}He.prototype.xa=function(){this.g=!1};function fl(s,u,l,f,I,R){s.info(function(){if(s.g)if(R)for(var C="",W=R.split("&"),lt=0;lt<W.length;lt++){var $=W[lt].split("=");if(1<$.length){var gt=$[0];$=$[1];var _t=gt.split("_");C=2<=_t.length&&_t[1]=="type"?C+(gt+"="+$+"&"):C+(gt+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+l+`
`+C})}function ml(s,u,l,f,I,R,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+C})}function ve(s,u,l,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+gl(s,l)+(f?" "+f:"")})}function pl(s,u){s.info(function(){return"TIMEOUT: "+u})}He.prototype.info=function(){};function gl(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return Hr(l)}catch{return u}}var Ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function Un(){}N(Un,Xr),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},Zr=new Un;function Wt(s,u,l,f){this.j=s,this.i=u,this.l=l,this.R=f||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ki}function ki(){this.i=null,this.g="",this.h=!1}var xi={},ts={};function es(s,u,l){s.L=1,s.v=zn(jt(u)),s.m=l,s.P=!0,Oi(s,null)}function Oi(s,u){s.F=Date.now(),qn(s),s.A=jt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Hi(l.i,"t",f),s.C=0,l=s.j.J,s.h=new ki,s.g=mo(s.j,l?u:null,!s.m),0<s.O&&(s.M=new cl(w(s.Y,s,s.g),s.O)),u=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(wi[0]=I.toString()),I=wi);for(var R=0;R<I.length;R++){var C=yi(l,I[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ke(),fl(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Bt(s)==3?u.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)t:{const _t=Bt(this.g);var u=this.g.Ba();const we=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||no(this.g)))){this.J||_t!=4||u==7||(u==8||0>=we?Ke(3):Ke(2)),ns(this);var l=this.g.Z();this.X=l;e:if(Fi(this)){var f=no(this.g);s="";var I=f.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){de(this),Xe(this);var C="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,ml(this.i,this.u,this.A,this.l,this.R,_t,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,lt=this.g;if((W=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(W)){var $=W;break e}}$=null}if(l=$)ve(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,l);else{this.o=!1,this.s=3,It(12),de(this),Xe(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<C.length;)if(Dt=_l(this,C),Dt==ts){_t==4&&(this.s=4,It(14),l=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==xi){this.s=4,It(15),ve(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ve(this.i,this.l,Dt,null),rs(this,Dt);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||C.length!=0||this.h.h||(this.s=1,It(16),l=!1),this.o=this.o&&l,!l)ve(this.i,this.l,C,"[Invalid Chunked Response]"),de(this),Xe(this);else if(0<C.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ls(gt),gt.M=!0,It(11))}}else ve(this.i,this.l,C,null),rs(this,C);_t==4&&de(this),this.o&&!this.J&&(_t==4?lo(this.j,this):(this.o=!1,qn(this)))}else xl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),de(this),Xe(this)}}}catch{}finally{}};function Fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function _l(s,u){var l=s.C,f=u.indexOf(`
`,l);return f==-1?ts:(l=Number(u.substring(l,f)),isNaN(l)?xi:(f+=1,f+l>u.length?ts:(u=u.slice(f,f+l),s.C=f+l,u)))}Wt.prototype.cancel=function(){this.J=!0,de(this)};function qn(s){s.S=Date.now()+s.I,Mi(s,s.I)}function Mi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=We(w(s.ba,s),u)}function ns(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(pl(this.i,this.A),this.L!=2&&(Ke(),It(17)),de(this),this.s=2,Xe(this)):Mi(this,this.S-s)};function Xe(s){s.j.G==0||s.J||lo(s.j,s)}function de(s){ns(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Ri(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function rs(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||ss(l.h,s))){if(!s.K&&ss(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Hn(l),Kn(l);else break t;us(l),It(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=We(w(l.Za,l),6e3));if(1>=qi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else me(l,11)}else if((s.K||l.g==s)&&Hn(l),!G(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let $=I[u];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const gt=$[3];gt!=null&&(l.la=gt,l.j.info("VER="+l.la));const _t=$[4];_t!=null&&(l.Aa=_t,l.j.info("SVER="+l.Aa));const we=$[5];we!=null&&typeof we=="number"&&0<we&&(f=1.5*we,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Dt=s.g;if(Dt){const Yn=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var R=f.h;R.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(is(R,R.h),R.h=null))}if(f.D){const cs=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(f.ya=cs,H(f.I,f.D,cs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=fo(f,f.J?f.ia:null,f.W),C.K){ji(f.h,C);var W=C,lt=f.L;lt&&(W.I=lt),W.B&&(ns(W),qn(W)),f.g=C}else ao(f);0<l.i.length&&Wn(l)}else $[0]!="stop"&&$[0]!="close"||me(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?me(l,7):as(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ke(4)}catch{}}var yl=class{constructor(s,u){this.g=s,this.map=u}};function Li(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ui(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function qi(s){return s.h?1:s.g?s.g.size:0}function ss(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function is(s,u){s.g?s.g.add(u):s.h=u}function ji(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Li.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Bi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return x(s.i)}function Tl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,f=0;f<l;f++)u.push(s[f]);return u}u=[],l=0;for(f in s)u[l++]=s[f];return u}function El(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const f in s)u[l++]=f;return u}}}function zi(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=El(s),f=Tl(s),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],l&&l[R],s)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vl(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var R=s[l].substring(0,f);I=s[l].substring(f+1)}else R=s[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function fe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof fe){this.h=s.h,jn(this,s.j),this.o=s.o,this.g=s.g,Bn(this,s.s),this.l=s.l;var u=s.i,l=new Ze;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),$i(this,l),this.m=s.m}else s&&(u=String(s).match(Gi))?(this.h=!1,jn(this,u[1]||"",!0),this.o=Ye(u[2]||""),this.g=Ye(u[3]||"",!0),Bn(this,u[4]),this.l=Ye(u[5]||"",!0),$i(this,u[6]||"",!0),this.m=Ye(u[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}fe.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Je(u,Qi,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Je(u,Qi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Je(l,l.charAt(0)=="/"?wl:Al,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Je(l,Vl)),s.join("")};function jt(s){return new fe(s)}function jn(s,u,l){s.j=l?Ye(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Bn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function $i(s,u,l){u instanceof Ze?(s.i=u,Pl(s.i,s.h)):(l||(u=Je(u,Rl)),s.i=new Ze(u,s.h))}function H(s,u,l){s.i.set(u,l)}function zn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ye(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Je(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Il),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Il(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Qi=/[#\/\?@]/g,Al=/[#\?:]/g,wl=/[#\?]/g,Rl=/[#\?@]/g,Vl=/#/g;function Ze(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Ht(s){s.g||(s.g=new Map,s.h=0,s.i&&vl(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}r=Ze.prototype,r.add=function(s,u){Ht(this),this.i=null,s=Ie(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function Ki(s,u){Ht(s),u=Ie(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Wi(s,u){return Ht(s),u=Ie(s,u),s.g.has(u)}r.forEach=function(s,u){Ht(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(u,I,f,this)},this)},this)},r.na=function(){Ht(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const I=s[f];for(let R=0;R<I.length;R++)l.push(u[f])}return l},r.V=function(s){Ht(this);let u=[];if(typeof s=="string")Wi(this,s)&&(u=u.concat(this.g.get(Ie(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},r.set=function(s,u){return Ht(this),this.i=null,s=Ie(this,s),Wi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Hi(s,u,l){Ki(s,u),0<l.length&&(s.i=null,s.g.set(Ie(s,u),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var I=R;C[f]!==""&&(I+="="+encodeURIComponent(String(C[f]))),s.push(I)}}return this.i=s.join("&")};function Ie(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Pl(s,u){u&&!s.j&&(Ht(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Ki(this,f),Hi(this,I,l))},s)),s.j=u}function Sl(s,u){const l=new He;if(c.Image){const f=new Image;f.onload=S(Xt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=S(Xt,l,"TestLoadImage: error",!1,u,f),f.onabort=S(Xt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(Xt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Cl(s,u){const l=new He,f=new AbortController,I=setTimeout(()=>{f.abort(),Xt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Xt(l,"TestPingServer: ok",!0,u):Xt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Xt(l,"TestPingServer: error",!1,u)})}function Xt(s,u,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function Dl(){this.g=new dl}function bl(s,u,l){const f=l||"";try{zi(s,function(I,R){let C=I;d(I)&&(C=Hr(I)),u.push(f+R+"="+encodeURIComponent(C))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Gn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Gn,Xr),Gn.prototype.g=function(){return new $n(this.l,this.j)},Gn.prototype.i=(function(s){return function(){return s}})({});function $n(s,u){pt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N($n,pt),r=$n.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,en(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?tn(this):en(this),this.readyState==3&&Xi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,tn(this))},r.Qa=function(s){this.g&&(this.response=s,tn(this))},r.ga=function(){this.g&&tn(this)};function tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,en(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function en(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Yi(s){let u="";return ut(s,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function os(s,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Yi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,u,l))}function Z(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,pt);var Nl=/^https?$/i,kl=["POST","PUT"];r=Z.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?Vi(this.o):Vi(Zr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){Ji(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(kl,u,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of l)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ji(this,R)}};function Ji(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Zi(s),Qn(s)}function Zi(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Qn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),Z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},r.bb=function(){to(this)};function to(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Bt(s)!=4||s.Z()!=2)){if(s.u&&Bt(s)==4)Ii(s.Ea,0,s);else if(vt(s,"readystatechange"),Bt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=C===0){var I=String(s.D).match(Gi)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Nl.test(I?I.toLowerCase():"")}l=f}if(l)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var R=2<Bt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Zi(s)}}finally{Qn(s)}}}}function Qn(s,u){if(s.g){eo(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||vt(s,"ready");try{l.onreadystatechange=f}catch{}}}function eo(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Bt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),hl(u)}};function no(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function xl(s){const u={};s=(s.g&&2<=Bt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(G(s[f]))continue;var l=E(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}v(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function ro(s){this.Aa=0,this.i=[],this.j=new He,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,s),this.cb=nn("retryDelaySeedMs",1e4,s),this.Wa=nn("forwardChannelMaxRetries",2,s),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(s&&s.concurrentRequestLimit),this.Da=new Dl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ro.prototype,r.la=8,r.G=1,r.connect=function(s,u,l,f){It(0),this.W=s,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=fo(this,null,this.W),Wn(this)};function as(s){if(so(s),s.G==3){var u=s.U++,l=jt(s.I);if(H(l,"SID",s.K),H(l,"RID",u),H(l,"TYPE","terminate"),rn(s,l),u=new Wt(s,s.j,u),u.L=2,u.v=zn(jt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=mo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qn(u)}ho(s)}function Kn(s){s.g&&(ls(s),s.g.cancel(),s.g=null)}function so(s){Kn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Hn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Wn(s){if(!Ui(s.h)&&!s.s){s.s=!0;var u=s.Ga;Be||_i(),ze||(Be(),ze=!0),jr.add(u,s),s.B=0}}function Ol(s,u){return qi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=We(w(s.Ga,s,u),co(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Wt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=oo(this,I,u),l=jt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),rn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Yi(R)))+"&"+u:this.m&&os(l,this.m,R)),is(this.h,I),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",u),H(l,"SID","null"),I.T=!0,es(I,l,null)):es(I,l,u),this.G=2}}else this.G==3&&(s?io(this,s):this.i.length==0||Ui(this.h)||io(this))};function io(s,u){var l;u?l=u.l:l=s.U++;const f=jt(s.I);H(f,"SID",s.K),H(f,"RID",l),H(f,"AID",s.T),rn(s,f),s.m&&s.o&&os(f,s.m,s.o),l=new Wt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=oo(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),is(s.h,l),es(l,f,u)}function rn(s,u){s.H&&ut(s.H,function(l,f){H(u,f,l)}),s.l&&zi({},function(l,f){H(u,f,l)})}function oo(s,u,l){l=Math.min(s.i.length,l);var f=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const C=["count="+l];R==-1?0<l?(R=I[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let W=!0;for(let lt=0;lt<l;lt++){let $=I[lt].g;const gt=I[lt].map;if($-=R,0>$)R=Math.max(0,I[lt].g-100),W=!1;else try{bl(gt,C,"req"+$+"_")}catch{f&&f(gt)}}if(W){f=C.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,f}function ao(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Be||_i(),ze||(Be(),ze=!0),jr.add(u,s),s.v=0}}function us(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=We(w(s.Fa,s),co(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,uo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=We(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Kn(this),uo(this))};function ls(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function uo(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=jt(s.qa);H(u,"RID","rpc"),H(u,"SID",s.K),H(u,"AID",s.T),H(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(u,"TO",s.ja),H(u,"TYPE","xmlhttp"),rn(s,u),s.m&&s.o&&os(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=zn(jt(u)),l.m=null,l.P=!0,Oi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Kn(this),us(this),It(19))};function Hn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function lo(s,u){var l=null;if(s.g==u){Hn(s),ls(s),s.g=null;var f=2}else if(ss(s.h,u))l=u.D,ji(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;f=Mn(),vt(f,new bi(f,l)),Wn(s)}else ao(s);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Ol(s,u)||f==2&&us(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),I){case 1:me(s,5);break;case 4:me(s,10);break;case 3:me(s,6);break;default:me(s,2)}}}function co(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function me(s,u){if(s.j.info("Error code "+u),u==2){var l=w(s.fb,s),f=s.Xa;const I=!f;f=new fe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jn(f,"https"),zn(f),I?Sl(f.toString(),l):Cl(f.toString(),l)}else It(2);s.G=0,s.l&&s.l.sa(u),ho(s),so(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function ho(s){if(s.G=0,s.ka=[],s.l){const u=Bi(s.h);(u.length!=0||s.i.length!=0)&&(b(s.ka,u),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function fo(s,u,l){var f=l instanceof fe?jt(l):new fe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Bn(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new fe(null);f&&jn(R,f),u&&(R.g=u),I&&Bn(R,I),l&&(R.l=l),f=R}return l=s.D,u=s.ya,l&&u&&H(f,l,u),H(f,"VER",s.la),rn(s,f),f}function mo(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new Z(new Gn({eb:l})):new Z(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function po(){}r=po.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Xn(){}Xn.prototype.g=function(s,u){return new Rt(s,u)};function Rt(s,u){pt.call(this),this.g=new ro(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!G(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Ae(this)}N(Rt,pt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){as(this.g)},Rt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Hr(s),s=l);u.i.push(new yl(u.Ya++,s)),u.G==3&&Wn(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,Rt.aa.N.call(this)};function go(s){Yr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}N(go,Yr);function _o(){Jr.call(this),this.status=1}N(_o,Jr);function Ae(s){this.g=s}N(Ae,po),Ae.prototype.ua=function(){vt(this.g,"a")},Ae.prototype.ta=function(s){vt(this.g,new go(s))},Ae.prototype.sa=function(s){vt(this.g,new _o)},Ae.prototype.ra=function(){vt(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Va=function(){return new Xn},Ra=function(){return Mn()},wa=he,ms={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,rr=Ln,Ni.COMPLETE="complete",Aa=Ni,Pi.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",pt.prototype.listen=pt.prototype.K,sn=Pi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Ia=Z}).apply(typeof Jn<"u"?Jn:typeof self<"u"?self:typeof window<"u"?window:{});const Eo="@firebase/firestore",vo="4.8.0";/**
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
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Oe="11.10.0";/**
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
 */const _e=new Fl("@firebase/firestore");function Re(){return _e.logLevel}function k(r,...t){if(_e.logLevel<=zt.DEBUG){const e=t.map(Ds);_e.debug(`Firestore (${Oe}): ${r}`,...e)}}function Gt(r,...t){if(_e.logLevel<=zt.ERROR){const e=t.map(Ds);_e.error(`Firestore (${Oe}): ${r}`,...e)}}function ne(r,...t){if(_e.logLevel<=zt.WARN){const e=t.map(Ds);_e.warn(`Firestore (${Oe}): ${r}`,...e)}}function Ds(r){if(typeof r=="string")return r;try{/**
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
 */function F(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Pa(r,n,e)}function Pa(r,t,e){let n=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Gt(n),new Error(n)}function j(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Pa(t,i,n)}function L(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends ql{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Sa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Tt.UNAUTHENTICATED)))}shutdown(){}}class Jl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zl{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){j(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new bt,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new bt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(j(typeof n.accessToken=="string",31837,{l:n}),new Sa(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class tc{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ec{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new tc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Tt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Io{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ul(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){j(this.o===void 0,3512);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Io(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(j(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Io(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rc(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function Ca(){return new TextEncoder}/**
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
 */class bs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=rc(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function ps(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=Ca(),a=sc(o.encode(Ao(r,e)),o.encode(Ao(t,e)));return a!==0?a:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function Ao(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function sc(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function De(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
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
 */const wo="__name__";class xt{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&F(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=xt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=xt.isNumericId(t),i=xt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?xt.extractNumericId(t).compare(xt.extractNumericId(e)):ps(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zt.fromString(t.substring(4,t.length-2))}}class K extends xt{construct(t,e,n){return new K(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new K(e)}static emptyPath(){return new K([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends xt{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wo}static keyField(){return new ht([wo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new D(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new D(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(K.fromString(t))}static fromName(t){return new O(K.fromString(t).popFirst(5))}static empty(){return new O(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&K.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new K(t.slice()))}}/**
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
 */function Da(r,t,e){if(!e)throw new D(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function oc(r,t,e,n){if(t===!0&&n===!0)throw new D(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ro(r){if(!O.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Vo(r){if(O.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ba(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ar(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Et(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(r);throw new D(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function ac(r,t){if(t<=0)throw new D(V.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function In(r,t){if(!ba(r))throw new D(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new D(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const Po=-62135596800,So=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*So);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Po)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/So}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(In(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Po;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:rt("string",X._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new X(0,0))}static max(){return new M(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const mn=-1;function uc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=M.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new re(i,O.empty(),t)}function lc(r){return new re(r.readTime,r.key,mn)}class re{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new re(M.min(),O.empty(),mn)}static max(){return new re(M.max(),O.empty(),mn)}}function cc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
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
 */const hc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Fe(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==hc)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,n)=>{e(t)}))}static reject(t){return new P(((e,n)=>{n(t)}))}static waitFor(t){return new P(((e,n)=>{let i=0,o=0,a=!1;t.forEach((c=>{++i,c.next((()=>{++o,a&&o===i&&e()}),(h=>n(h)))})),a=!0,o===i&&e()}))}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next((i=>i?P.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new P(((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++c,c===o&&n(a)}),(m=>i(m)))}}))}static doWhile(t,e){return new P(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function fc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Me(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class wr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}wr.ue=-1;/**
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
 */const Ns=-1;function An(r){return r==null}function lr(r){return r===0&&1/r==-1/0}function mc(r){return typeof r=="number"&&Number.isInteger(r)&&!lr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Na="";function pc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Co(t)),t=gc(r.get(e),t);return Co(t)}function gc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Na:e+="";break;default:e+=o}}return e}function Co(r){return r+Na+""}/**
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
 */function Do(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function le(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function _c(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function ka(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zn(this.root,t,this.comparator,!0)}}class Zn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ct(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(t){return new bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new st(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
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
 */class xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new xa("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const yc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(r){if(j(!!r,39018),typeof r=="string"){let t=0;const e=yc.exec(r);if(j(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ie(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
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
 */const Oa="server_timestamp",Fa="__type__",Ma="__previous_value__",La="__local_write_time__";function ks(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Fa])===null||e===void 0?void 0:e.stringValue)===Oa}function Rr(r){const t=r.mapValue.fields[Ma];return ks(t)?Rr(t):t}function pn(r){const t=se(r.mapValue.fields[La].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class Tc{constructor(t,e,n,i,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const cr="(default)";class gn{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ua="__type__",Ec="__max__",tr={mapValue:{}},qa="__vector__",hr="value";function oe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ks(r)?4:Ic(r)?9007199254740991:vc(r)?10:11:F(28295,{value:r})}function Lt(r,t){if(r===t)return!0;const e=oe(r);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return pn(r).isEqual(pn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=se(i.timestampValue),c=se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return ie(i.bytesValue).isEqual(ie(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),c=tt(o.doubleValue);return a===c?lr(a)===lr(c):isNaN(a)&&isNaN(c)}return!1})(r,t);case 9:return De(r.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Do(a)!==Do(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Lt(a[h],c[h])))return!1;return!0})(r,t);default:return F(52216,{left:r})}}function _n(r,t){return(r.values||[]).find((e=>Lt(e,t)))!==void 0}function be(r,t){if(r===t)return 0;const e=oe(r),n=oe(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(r,t);case 3:return No(r.timestampValue,t.timestampValue);case 4:return No(pn(r),pn(t));case 5:return ps(r.stringValue,t.stringValue);case 6:return(function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=U(c[d],h[d]);if(m!==0)return m}return U(c.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=U(tt(o.latitude),tt(a.latitude));return c!==0?c:U(tt(o.longitude),tt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return ko(r.arrayValue,t.arrayValue);case 10:return(function(o,a){var c,h,d,m;const y=o.fields||{},w=a.fields||{},S=(c=y[hr])===null||c===void 0?void 0:c.arrayValue,N=(h=w[hr])===null||h===void 0?void 0:h.arrayValue,x=U(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=N?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:ko(S,N)})(r.mapValue,t.mapValue);case 11:return(function(o,a){if(o===tr.mapValue&&a===tr.mapValue)return 0;if(o===tr.mapValue)return 1;if(a===tr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=ps(h[y],m[y]);if(w!==0)return w;const S=be(c[h[y]],d[m[y]]);if(S!==0)return S}return U(h.length,m.length)})(r.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function No(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=se(r),n=se(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function ko(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=be(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ne(r){return gs(r)}function gs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=se(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return ie(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return O.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=gs(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${gs(e.fields[a])}`;return i+"}"})(r.mapValue):F(61005,{value:r})}function sr(r){switch(oe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Rr(r);return t?16+sr(t):16;case 5:return 2*r.stringValue.length;case 6:return ie(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+sr(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return le(n.fields,((o,a)=>{i+=o.length+sr(a)})),i})(r.mapValue);default:throw F(13486,{value:r})}}function xo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function _s(r){return!!r&&"integerValue"in r}function xs(r){return!!r&&"arrayValue"in r}function Oo(r){return!!r&&"nullValue"in r}function Fo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ir(r){return!!r&&"mapValue"in r}function vc(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ua])===null||e===void 0?void 0:e.stringValue)===qa}function ln(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return le(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ln(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ln(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ic(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ec}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(e)}setAll(t){let e=ht.emptyPath(),n={},i=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=ln(a):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ir(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){le(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new At(ln(this.value))}}function ja(r){const t=[];return le(r.fields,((e,n)=>{const i=new ht([e]);if(ir(n)){const o=ja(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)})),new Pt(t)}/**
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
 */class at{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new at(t,0,M.min(),M.min(),M.min(),At.empty(),0)}static newFoundDocument(t,e,n,i){return new at(t,1,e,M.min(),n,i,0)}static newNoDocument(t,e){return new at(t,2,e,M.min(),M.min(),At.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,M.min(),M.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function Mo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=be(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Lo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Lt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ac(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ba{}class nt extends Ba{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Rc(t,e,n):e==="array-contains"?new Sc(t,n):e==="in"?new Cc(t,n):e==="not-in"?new Dc(t,n):e==="array-contains-any"?new bc(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Vc(t,n):new Pc(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(be(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Ba{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Nt(t,e)}matches(t){return za(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function za(r){return r.op==="and"}function Ga(r){return wc(r)&&za(r)}function wc(r){for(const t of r.filters)if(t instanceof Nt)return!1;return!0}function ys(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ne(r.value);if(Ga(r))return r.filters.map((t=>ys(t))).join(",");{const t=r.filters.map((e=>ys(e))).join(",");return`${r.op}(${t})`}}function $a(r,t){return r instanceof nt?(function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Lt(n.value,i.value)})(r,t):r instanceof Nt?(function(n,i){return i instanceof Nt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,a,c)=>o&&$a(a,i.filters[c])),!0):!1})(r,t):void F(19439)}function Qa(r){return r instanceof nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`})(r):r instanceof Nt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Qa).join(" ,")+"}"})(r):"Filter"}class Rc extends nt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vc extends nt{constructor(t,e){super(t,"in",e),this.keys=Ka("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Pc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Ka("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ka(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>O.fromName(n.referenceValue)))}class Sc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&_n(e.arrayValue,this.value)}}class Cc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class Dc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_n(this.value.arrayValue,e)}}class bc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>_n(this.value.arrayValue,n)))}}/**
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
 */class Nc{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Pe=null}}function Uo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Nc(r,t,e,n,i,o,a)}function Os(r){const t=L(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>ys(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),An(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Ne(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Ne(n))).join(",")),t.Pe=e}return t.Pe}function Fs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ac(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!$a(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Lo(r.startAt,t.startAt)&&Lo(r.endAt,t.endAt)}function Ts(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Le{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kc(r,t,e,n,i,o,a,c){return new Le(r,t,e,n,i,o,a,c)}function Vr(r){return new Le(r)}function qo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wa(r){return r.collectionGroup!==null}function cn(r){const t=L(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new st(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new yn(o,n))})),e.has(ht.keyField().canonicalString())||t.Te.push(new yn(ht.keyField(),n))}return t.Te}function Ot(r){const t=L(r);return t.Ie||(t.Ie=Ha(t,cn(r))),t.Ie}function xc(r){const t=L(r);return t.de||(t.de=Ha(t,r.explicitOrderBy)),t.de}function Ha(r,t){if(r.limitType==="F")return Uo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new yn(i.field,o)}));const e=r.endAt?new dr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dr(r.startAt.position,r.startAt.inclusive):null;return Uo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Es(r,t){const e=r.filters.concat([t]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function fr(r,t,e){return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Pr(r,t){return Fs(Ot(r),Ot(t))&&r.limitType===t.limitType}function Xa(r){return`${Os(Ot(r))}|lt:${r.limitType}`}function Ve(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>Qa(i))).join(", ")}]`),An(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Ne(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Ne(i))).join(",")),`Target(${n})`})(Ot(r))}; limitType=${r.limitType})`}function Sr(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of cn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(a,c,h){const d=Mo(a,c,h);return a.inclusive?d<=0:d<0})(n.startAt,cn(n),i)||n.endAt&&!(function(a,c,h){const d=Mo(a,c,h);return a.inclusive?d>=0:d>0})(n.endAt,cn(n),i))})(r,t)}function Oc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ya(r){return(t,e)=>{let n=!1;for(const i of cn(r)){const o=Fc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Fc(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?be(h,d):F(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
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
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return ka(this.inner)}size(){return this.innerSize}}/**
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
 */const Mc=new J(O.comparator);function $t(){return Mc}const Ja=new J(O.comparator);function on(...r){let t=Ja;for(const e of r)t=t.insert(e.key,e);return t}function Za(r){let t=Ja;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function pe(){return hn()}function tu(){return hn()}function hn(){return new Te((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Lc=new J(O.comparator),Uc=new st(O.comparator);function q(...r){let t=Uc;for(const e of r)t=t.add(e);return t}const qc=new st(U);function jc(){return qc}/**
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
 */function Ms(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function eu(r){return{integerValue:""+r}}function Bc(r,t){return mc(t)?eu(t):Ms(r,t)}/**
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
 */class Cr{constructor(){this._=void 0}}function zc(r,t,e){return r instanceof Tn?(function(i,o){const a={fields:{[Fa]:{stringValue:Oa},[La]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ks(o)&&(o=Rr(o)),o&&(a.fields[Ma]=o),{mapValue:a}})(e,t):r instanceof En?ru(r,t):r instanceof vn?su(r,t):(function(i,o){const a=nu(i,o),c=jo(a)+jo(i.Ee);return _s(a)&&_s(i.Ee)?eu(c):Ms(i.serializer,c)})(r,t)}function Gc(r,t,e){return r instanceof En?ru(r,t):r instanceof vn?su(r,t):e}function nu(r,t){return r instanceof mr?(function(n){return _s(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class Tn extends Cr{}class En extends Cr{constructor(t){super(),this.elements=t}}function ru(r,t){const e=iu(t);for(const n of r.elements)e.some((i=>Lt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class vn extends Cr{constructor(t){super(),this.elements=t}}function su(r,t){let e=iu(t);for(const n of r.elements)e=e.filter((i=>!Lt(i,n)));return{arrayValue:{values:e}}}class mr extends Cr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function jo(r){return tt(r.integerValue||r.doubleValue)}function iu(r){return xs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class $c{constructor(t,e){this.field=t,this.transform=e}}function Qc(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof En&&i instanceof En||n instanceof vn&&i instanceof vn?De(n.elements,i.elements,Lt):n instanceof mr&&i instanceof mr?Lt(n.Ee,i.Ee):n instanceof Tn&&i instanceof Tn})(r.transform,t.transform)}class Kc{constructor(t,e){this.version=t,this.transformResults=e}}class dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new dt}static exists(t){return new dt(void 0,t)}static updateTime(t){return new dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Dr{}function ou(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new br(r.key,dt.none()):new wn(r.key,r.data,dt.none());{const e=r.data,n=At.empty();let i=new st(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new ce(r.key,n,new Pt(i.toArray()),dt.none())}}function Wc(r,t,e){r instanceof wn?(function(i,o,a){const c=i.value.clone(),h=zo(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,t,e):r instanceof ce?(function(i,o,a){if(!or(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=zo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(au(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function dn(r,t,e,n){return r instanceof wn?(function(o,a,c,h){if(!or(o.precondition,a))return c;const d=o.value.clone(),m=Go(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof ce?(function(o,a,c,h){if(!or(o.precondition,a))return c;const d=Go(o.fieldTransforms,h,a),m=a.data;return m.setAll(au(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(r,t,e,n):(function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(r,t,e)}function Hc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=nu(n.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(n.field,o))}return e||null}function Bo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&De(n,i,((o,a)=>Qc(o,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class wn extends Dr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends Dr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function au(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function zo(r,t,e){const n=new Map;j(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,Gc(a,c,e[i]))}return n}function Go(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,zc(o,a,t))}return n}class br extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uu extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Wc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=dn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=dn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=tu();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=ou(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(M.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,((e,n)=>Bo(e,n)))&&De(this.baseMutations,t.baseMutations,((e,n)=>Bo(e,n)))}}class Ls{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){j(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=(function(){return Lc})();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Ls(t,e,n,i)}}/**
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
 */class Yc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Jc{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class Zc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,B;function lu(r){switch(r){case V.OK:return F(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function cu(r){if(r===void 0)return Gt("GRPC error has no .code"),V.UNKNOWN;switch(r){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return F(39323,{code:r})}}(B=et||(et={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const th=new Zt([4294967295,4294967295],0);function $o(r){const t=Ca().encode(r),e=new va;return e.update(t),new Uint8Array(e.digest())}function Qo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,n],0),new Zt([i,o],0)]}class Us{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(n<0)throw new an(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Zt.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(Zt.fromNumber(n)));return i.compare(th)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=$o(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);if(!this.ye(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Us(o,i,e);return n.forEach((c=>a.insert(c))),a}insert(t){if(this.fe===0)return;const e=$o(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Rn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Nr(M.min(),i,new J(U),$t(),q())}}class Rn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Rn(n,e,q(),q(),q())}}/**
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
 */class ar{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class hu{constructor(t,e){this.targetId=t,this.De=e}}class du{constructor(t,e,n=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ko{constructor(){this.ve=0,this.Ce=Wo(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),n=q();return this.Ce.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:F(38017,{changeType:o})}})),new Rn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=Wo()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,j(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class eh{constructor(t){this.We=t,this.Ge=new Map,this.ze=$t(),this.je=er(),this.Je=er(),this.He=new J(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,i)=>{this.nt(i)&&e(i)}))}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(Ts(o))if(n===0){const a=new O(o.path);this.Xe(e,a,at.newNoDocument(a,M.min()))}else j(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const c=this._t(t),h=c?this.ut(c,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=ie(n).toUint8Array()}catch(h){if(h instanceof xa)return ne("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Us(a,i,o)}catch(h){return ne(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),i++)})),i}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const c=this.st(a);if(c){if(o.current&&Ts(c.target)){const h=new O(c.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,at.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let n=q();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const i=new Nr(t,e,this.He,this.ze,n);return this.ze=$t(),this.je=er(),this.Je=er(),this.He=new J(U),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Ko,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new st(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Ko),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function er(){return new J(O.comparator)}function Wo(){return new J(O.comparator)}const nh={asc:"ASCENDING",desc:"DESCENDING"},rh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sh={and:"AND",or:"OR"};class ih{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function vs(r,t){return r.useProto3Json||An(t)?t:{value:t}}function pr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function oh(r,t){return pr(r,t.toTimestamp())}function St(r){return j(!!r,49232),M.fromTimestamp((function(e){const n=se(e);return new X(n.seconds,n.nanos)})(r))}function qs(r,t){return Is(r,t).canonicalString()}function Is(r,t){const e=(function(i){return new K(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function mu(r){const t=K.fromString(r);return j(vu(t),10190,{key:t.toString()}),t}function gr(r,t){return qs(r.databaseId,t.path)}function fn(r,t){const e=mu(t);if(e.get(1)!==r.databaseId.projectId)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(gu(e))}function pu(r,t){return qs(r.databaseId,t)}function ah(r){const t=mu(r);return t.length===4?K.emptyPath():gu(t)}function As(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gu(r){return j(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ho(r,t,e){return{name:gr(r,t),fields:e.value.mapValue.fields}}function uh(r,t){return"found"in t?(function(n,i){j(!!i.found,43571),i.found.name,i.found.updateTime;const o=fn(n,i.found.name),a=St(i.found.updateTime),c=i.found.createTime?St(i.found.createTime):M.min(),h=new At({mapValue:{fields:i.found.fields}});return at.newFoundDocument(o,a,c,h)})(r,t):"missing"in t?(function(n,i){j(!!i.missing,3894),j(!!i.readTime,22933);const o=fn(n,i.missing),a=St(i.readTime);return at.newNoDocument(o,a)})(r,t):F(7234,{result:t})}function lh(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(j(m===void 0||typeof m=="string",58123),ft.fromBase64String(m||"")):(j(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ft.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?V.UNKNOWN:cu(d.code);return new D(m,d.message||"")})(a);e=new du(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=fn(r,n.document.name),o=St(n.document.updateTime),a=n.document.createTime?St(n.document.createTime):M.min(),c=new At({mapValue:{fields:n.document.fields}}),h=at.newFoundDocument(i,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new ar(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=fn(r,n.document),o=n.readTime?St(n.readTime):M.min(),a=at.newNoDocument(i,o),c=n.removedTargetIds||[];e=new ar([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=fn(r,n.document),o=n.removedTargetIds||[];e=new ar([],o,i,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Zc(i,o),c=n.targetId;e=new hu(c,a)}}return e}function _u(r,t){let e;if(t instanceof wn)e={update:Ho(r,t.key,t.value)};else if(t instanceof br)e={delete:gr(r,t.key)};else if(t instanceof ce)e={update:Ho(r,t.key,t.data),updateMask:yh(t.fieldMask)};else{if(!(t instanceof uu))return F(16599,{Rt:t.type});e={verify:gr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,a){const c=a.transform;if(c instanceof Tn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof En)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:oh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(r,t.precondition)),e}function ch(r,t){return r&&r.length>0?(j(t!==void 0,14353),r.map((e=>(function(i,o){let a=i.updateTime?St(i.updateTime):St(o);return a.isEqual(M.min())&&(a=St(o)),new Kc(a,i.transformResults||[])})(e,t)))):[]}function hh(r,t){return{documents:[pu(r,t.path)]}}function yu(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=pu(r,i);const o=(function(d){if(d.length!==0)return Eu(Nt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:Yt(w.field),direction:ph(w.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=vs(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:i}}function dh(r,t,e,n){const{Vt:i,parent:o}=yu(r,t),a={},c=[];let h=0;return e.forEach((d=>{const m="aggregate_"+h++;a[m]=d.alias,d.aggregateType==="count"?c.push({alias:m,count:{}}):d.aggregateType==="avg"?c.push({alias:m,avg:{field:Yt(d.fieldPath)}}):d.aggregateType==="sum"&&c.push({alias:m,sum:{field:Yt(d.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:o}}function fh(r){let t=ah(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){j(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(y){const w=Tu(y);return w instanceof Nt&&Ga(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((w=>(function(N){return new yn(Pe(N.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(w)))})(e.orderBy));let c=null;e.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,An(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(y){const w=!!y.before,S=y.values||[];return new dr(S,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const w=!y.before,S=y.values||[];return new dr(S,w)})(e.endAt)),kc(t,i,a,o,c,"F",h,d)}function mh(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tu(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pe(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Pe(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pe(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(e){return nt.create(Pe(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Nt.create(e.compositeFilter.filters.map((n=>Tu(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(r):F(30097,{filter:r})}function ph(r){return nh[r]}function gh(r){return rh[r]}function _h(r){return sh[r]}function Yt(r){return{fieldPath:r.canonicalString()}}function Pe(r){return ht.fromServerFormat(r.fieldPath)}function Eu(r){return r instanceof nt?(function(e){if(e.op==="=="){if(Fo(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fo(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(e.field),op:gh(e.op),value:e.value}}})(r):r instanceof Nt?(function(e){const n=e.getFilters().map((i=>Eu(i)));return n.length===1?n[0]:{compositeFilter:{op:_h(e.op),filters:n}}})(r):F(54877,{filter:r})}function yh(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Jt{constructor(t,e,n,i,o=M.min(),a=M.min(),c=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Th{constructor(t){this.gt=t}}function Eh(r){const t=fh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fr(t,t.limit,"L"):t}/**
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
 */class vh{constructor(){this.Dn=new Ih}addToCollectionParentIndex(t,e){return this.Dn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(re.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Ih{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(K.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(K.comparator)).toArray()}}/**
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
 */const Xo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Iu=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Iu,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */class ke{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ke(0)}static ur(){return new ke(-1)}}/**
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
 */const Yo="LruGarbageCollector",Ah=1048576;function Jo([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class wh{constructor(t){this.Tr=t,this.buffer=new st(Jo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Jo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Rh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){k(Yo,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Me(e)?k(Yo,"Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.Rr(3e5)}))}}class Vh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(wr.ue);const n=new wh(e);return this.Vr.forEachTarget(t,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(t,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Xo)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xo):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(t,i)))).next((y=>(n=y,c=Date.now(),this.removeTargets(t,n,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,n)))).next((y=>(d=Date.now(),Re()<=zt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y}))))}}function Ph(r,t){return new Vh(r,t)}/**
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
 */class Sh{constructor(){this.changes=new Te((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ch{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Dh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&dn(n.mutation,i,Pt.empty(),X.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,q()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=q()){const i=pe();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let a=on();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=pe();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,q())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,n,i){let o=$t();const a=hn(),c=(function(){return hn()})();return e.forEach(((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ce)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),dn(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,Pt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var y;return c.set(d,new Ch(m,(y=a.get(d))!==null&&y!==void 0?y:null))})),c)))}recalculateAndSaveOverlays(t,e){const n=hn();let i=new J(((a,c)=>a-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Pt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const y=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,y)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,y=tu();m.forEach((w=>{if(!o.has(w)){const S=ou(e.get(w),n.get(w));S!==null&&y.set(w,S),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return P.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(pe());let c=mn,h=o;return a.next((d=>P.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,q()))).next((m=>({batchId:c,changes:Za(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((n=>{let i=on();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=on();return this.indexManager.getCollectionParents(t,o).next((c=>P.forEach(c,(h=>{const d=(function(y,w){return new Le(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next((m=>{m.forEach(((y,w)=>{a=a.insert(y,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))}));let c=on();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&dn(m.mutation,d,Pt.empty(),X.now()),Sr(e,d)&&(c=c.insert(h,d))})),c}))}}/**
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
 */class bh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return P.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:St(i.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(i){return{name:i.name,query:Eh(i.bundledQuery),readTime:St(i.readTime)}})(e)),P.resolve()}}/**
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
 */class Nh{constructor(){this.overlays=new J(O.comparator),this.kr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=pe();return P.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.wt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=pe(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new J(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=pe(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return P.resolve(c)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Yc(e,n));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
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
 */class kh{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class js{constructor(){this.qr=new st(ot.Qr),this.$r=new st(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new O(new K([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([n,i],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new K([])),n=new ot(e,t),i=new ot(e,t+1);let o=q();return this.$r.forEachInRange([n,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ot(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class xh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new st(ot.Qr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xc(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Yr=this.Yr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ns:this.er-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(U);return e.forEach((i=>{const o=new ot(i,0),a=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(c=>{n=n.add(c.Hr)}))})),P.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new ot(new O(o),0);let c=new st(U);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Hr)),!0)}),a),P.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((n=>{const i=this.Zr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){j(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return P.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new ot(e,0),i=this.Yr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Oh{constructor(t){this.ni=t,this.docs=(function(){return new J(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=$t();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():at.newInvalidDocument(i))})),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=$t();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||cc(lc(m),n)<=0||(i.has(m.key)||Sr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){F(9500)}ri(t,e){return P.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Fh(this)}getSize(t){return P.resolve(this.size)}}class Fh extends Sh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)})),P.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Mh{constructor(t){this.persistence=t,this.ii=new Te((e=>Os(e)),Fs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.si=0,this.oi=new js,this.targetCount=0,this._i=ke.ar()}forEachTarget(t,e){return this.ii.forEach(((n,i)=>e(i))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),P.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.hr(e),P.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),P.waitFor(o).next((()=>i))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.oi.containsKey(e))}}/**
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
 */class Au{constructor(t,e){this.ai={},this.overlays={},this.ui=new wr(0),this.ci=!1,this.ci=!0,this.li=new kh,this.referenceDelegate=t(this),this.hi=new Mh(this),this.indexManager=new vh,this.remoteDocumentCache=(function(i){return new Oh(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Th(e),this.Ti=new bh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new xh(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new Lh(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class Lh extends dc{constructor(t){super(),this.currentSequenceNumber=t}}class Bs{constructor(t){this.persistence=t,this.Ai=new js,this.Ri=null}static Vi(t){return new Bs(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(n=>{const i=O.fromPath(n);return this.fi(t,i).next((o=>{o||e.removeEntry(i,M.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return P.or([()=>P.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.gi=new Te((n=>pc(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Ph(this,e)}static Vi(t,e){return new _r(t,e)}Ii(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return P.forEach(this.gi,((n,i)=>this.Sr(t,n,i).next((o=>o?P.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,(a=>this.Sr(t,a,e).next((c=>{c||(n++,o.removeEntry(a,M.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=sr(t.data.value)),e}Sr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class zs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new zs(t,e.fromCache,n,i)}}/**
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
 */class Uh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class qh{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Wl()?8:fc(Hl())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,i,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Uh;return this.ws(t,e,a).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,a,c.size)}))})).next((()=>o.result))}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(Re()<=zt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Re()<=zt.DEBUG&&k("QueryEngine","Query:",Ve(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Re()<=zt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):P.resolve())}ps(t,e){if(qo(e))return P.resolve(null);let n=Ot(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=fr(e,null,"F"),n=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const a=q(...o);return this.gs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,n).next((h=>{const d=this.bs(e,c);return this.Ds(e,d,a,h.readTime)?this.ps(t,fr(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,n,i){return qo(e)||i.isEqual(M.min())?P.resolve(null):this.gs.getDocuments(t,n).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,n,i)?P.resolve(null):(Re()<=zt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ve(e)),this.vs(t,a,e,uc(i,mn)).next((c=>c)))}))}bs(t,e){let n=new st(Ya(t));return e.forEach(((i,o)=>{Sr(t,o)&&(n=n.add(o))})),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return Re()<=zt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ve(e)),this.gs.getDocumentsMatchingQuery(t,e,re.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Gs="LocalStore",jh=3e8;class Bh{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new J(U),this.Ms=new Te((o=>Os(o)),Fs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dh(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function zh(r,t,e,n){return new Bh(r,t,e,n)}async function wu(r,t){const e=L(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],c=[];let h=q();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Gh(r,t){const e=L(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const y=d.batch,w=y.keys();let S=P.resolve();return w.forEach((N=>{S=S.next((()=>m.getEntry(h,N))).next((x=>{const b=d.docVersions.get(N);j(b!==null,48541),x.version.compareTo(b)<0&&(y.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(h,y)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(n,i)))}))}function Ru(r){const t=L(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function $h(r,t){const e=L(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const c=[];t.targetChanges.forEach(((m,y)=>{const w=i.get(y);if(!w)return;c.push(e.hi.removeMatchingKeys(o,m.removedDocuments,y).next((()=>e.hi.addMatchingKeys(o,m.addedDocuments,y))));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(y,S),(function(x,b,z){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=jh?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(w,S,m)&&c.push(e.hi.updateTargetData(o,S))}));let h=$t(),d=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(Qh(o,a,t.documentUpdates).next((m=>{h=m.Ls,d=m.ks}))),!n.isEqual(M.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next((y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=i,o)))}function Qh(r,t,e){let n=q(),i=q();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let a=$t();return e.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(M.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k(Gs,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:i}}))}function Kh(r,t){const e=L(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Ns),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Wh(r,t){const e=L(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.hi.getTargetData(n,t).next((o=>o?(i=o,P.resolve(i)):e.hi.allocateTargetId(n).next((a=>(i=new Jt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function ws(r,t,e){const n=L(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Me(a))throw a;k(Gs,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function Zo(r,t,e){const n=L(r);let i=M.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const y=L(h),w=y.Ms.get(m);return w!==void 0?P.resolve(y.Fs.get(w)):y.hi.getTargetData(d,m)})(n,a,Ot(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?i:M.min(),e?o:q()))).next((c=>(Hh(n,Oc(t),c),{documents:c,qs:o})))))}function Hh(r,t,e){let n=r.xs.get(t)||M.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.xs.set(t,n)}class ta{constructor(){this.activeTargetIds=jc()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xh{constructor(){this.Fo=new ta,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ta,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yh{xo(t){}shutdown(){}}/**
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
 */const ea="ConnectivityMonitor";class na{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){k(ea,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){k(ea,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nr=null;function Rs(){return nr===null?nr=(function(){return 268435456+Math.round(2147483648*Math.random())})():nr++,"0x"+nr.toString(16)}/**
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
 */const hs="RestConnection",Jh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zh{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===cr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const a=Rs(),c=this.Go(t,e.toUriEncodedString());k(hs,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:d}=new URL(c),m=Ea(d);return this.jo(t,c,h,n,m).then((y=>(k(hs,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw ne(hs,`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",n),y}))}Jo(t,e,n,i,o,a){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}Go(t,e){const n=Jh[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
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
 */class td{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const yt="WebChannelConnection";class ed extends Zh{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const a=Rs();return new Promise(((c,h)=>{const d=new Ia;d.setWithCredentials(!0),d.listenOnce(Aa.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case rr.NO_ERROR:const y=d.getResponseJson();k(yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),c(y);break;case rr.TIMEOUT:k(yt,`RPC '${t}' ${a} timed out`),h(new D(V.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const w=d.getStatus();if(k(yt,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S?.error;if(N&&N.status&&N.message){const x=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN})(N.status);h(new D(x,N.message))}else h(new D(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new D(V.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{k(yt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(i);k(yt,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",m,n,15)}))}P_(t,e,n){const i=Rs(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Va(),c=Ra(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");k(yt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const y=a.createWebChannel(m,h);this.T_(y);let w=!1,S=!1;const N=new td({Ho:b=>{S?k(yt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(w||(k(yt,`Opening RPC '${t}' stream ${i} transport.`),y.open(),w=!0),k(yt,`RPC '${t}' stream ${i} sending:`,b),y.send(b))},Yo:()=>y.close()}),x=(b,z,G)=>{b.listen(z,(Q=>{try{G(Q)}catch(it){setTimeout((()=>{throw it}),0)}}))};return x(y,sn.EventType.OPEN,(()=>{S||(k(yt,`RPC '${t}' stream ${i} transport opened.`),N.s_())})),x(y,sn.EventType.CLOSE,(()=>{S||(S=!0,k(yt,`RPC '${t}' stream ${i} transport closed`),N.__(),this.I_(y))})),x(y,sn.EventType.ERROR,(b=>{S||(S=!0,ne(yt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),N.__(new D(V.UNAVAILABLE,"The operation could not be completed")))})),x(y,sn.EventType.MESSAGE,(b=>{var z;if(!S){const G=b.data[0];j(!!G,16349);const Q=G,it=Q?.error||((z=Q[0])===null||z===void 0?void 0:z.error);if(it){k(yt,`RPC '${t}' stream ${i} received error:`,it);const Ut=it.status;let ut=(function(_){const T=et[_];if(T!==void 0)return cu(T)})(Ut),v=it.message;ut===void 0&&(ut=V.INTERNAL,v="Unknown error status: "+Ut+" with message "+it.message),S=!0,N.__(new D(ut,v)),y.close()}else k(yt,`RPC '${t}' stream ${i} received:`,G),N.a_(G)}})),x(c,wa.STAT_EVENT,(b=>{b.stat===ms.PROXY?k(yt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ms.NOPROXY&&k(yt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function ds(){return typeof document<"u"?document:null}/**
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
 */function kr(r){return new ih(r,!0)}/**
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
 */class $s{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const ra="PersistentStream";class Vu{constructor(t,e,n,i,o,a,c,h){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new $s(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Gt(e.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===e&&this.W_(n,i)}),(n=>{t((()=>{const i=new D(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return k(ra,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(k(ra,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nd extends Vu{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=lh(this.serializer,t),n=(function(o){if(!("targetChange"in o))return M.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?M.min():a.readTime?St(a.readTime):M.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=As(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=Ts(h)?{documents:hh(o,h)}:{query:yu(o,h).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=fu(o,a.resumeToken);const d=vs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(M.min())>0){c.readTime=pr(o,a.snapshotVersion.toTimestamp());const d=vs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const n=mh(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.k_(e)}}class rd extends Vu{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return j(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,j(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){j(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=ch(t.writeResults,t.commitTime),n=St(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=As(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>_u(this.serializer,n)))};this.k_(e)}}/**
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
 */class sd{}class id extends sd{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Is(e,n),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(V.UNKNOWN,o.toString())}))}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(t,Is(e,n),i,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(V.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class od{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Gt(e),this._a=!1):k("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ye="RemoteStore";class ad{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{Ee(this)&&(k(ye,"Restarting streams for network reachability change."),await(async function(h){const d=L(h);d.Ia.add(4),await Vn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await xr(d)})(this))}))})),this.Aa=new od(n,i)}}async function xr(r){if(Ee(r))for(const t of r.da)await t(!0)}async function Vn(r){for(const t of r.da)await t(!1)}function Pu(r,t){const e=L(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Hs(e)?Ws(e):Ue(e).x_()&&Ks(e,t))}function Qs(r,t){const e=L(r),n=Ue(e);e.Ta.delete(t),n.x_()&&Su(e,t),e.Ta.size===0&&(n.x_()?n.B_():Ee(e)&&e.Aa.set("Unknown"))}function Ks(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(r).H_(t)}function Su(r,t){r.Ra.$e(t),Ue(r).Y_(t)}function Ws(r){r.Ra=new eh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Ue(r).start(),r.Aa.aa()}function Hs(r){return Ee(r)&&!Ue(r).M_()&&r.Ta.size>0}function Ee(r){return L(r).Ia.size===0}function Cu(r){r.Ra=void 0}async function ud(r){r.Aa.set("Online")}async function ld(r){r.Ta.forEach(((t,e)=>{Ks(r,t)}))}async function cd(r,t){Cu(r),Hs(r)?(r.Aa.la(t),Ws(r)):r.Aa.set("Unknown")}async function hd(r,t,e){if(r.Aa.set("Online"),t instanceof du&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ta.delete(c),i.Ra.removeTarget(c))})(r,t)}catch(n){k(ye,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yr(r,n)}else if(t instanceof ar?r.Ra.Ye(t):t instanceof hu?r.Ra.it(t):r.Ra.et(t),!e.isEqual(M.min()))try{const n=await Ru(r.localStore);e.compareTo(n)>=0&&await(function(o,a){const c=o.Ra.Pt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),Su(o,h);const y=new Jt(m.target,h,d,m.sequenceNumber);Ks(o,y)})),o.remoteSyncer.applyRemoteEvent(c)})(r,e)}catch(n){k(ye,"Failed to raise snapshot:",n),await yr(r,n)}}async function yr(r,t,e){if(!Me(t))throw t;r.Ia.add(1),await Vn(r),r.Aa.set("Offline"),e||(e=()=>Ru(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{k(ye,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await xr(r)}))}function Du(r,t){return t().catch((e=>yr(r,e,t)))}async function Or(r){const t=L(r),e=ae(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Ns;for(;dd(t);)try{const i=await Kh(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,fd(t,i)}catch(i){await yr(t,i)}bu(t)&&Nu(t)}function dd(r){return Ee(r)&&r.Pa.length<10}function fd(r,t){r.Pa.push(t);const e=ae(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function bu(r){return Ee(r)&&!ae(r).M_()&&r.Pa.length>0}function Nu(r){ae(r).start()}async function md(r){ae(r).na()}async function pd(r){const t=ae(r);for(const e of r.Pa)t.X_(e.mutations)}async function gd(r,t,e){const n=r.Pa.shift(),i=Ls.from(n,t,e);await Du(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Or(r)}async function _d(r,t){t&&ae(r).Z_&&await(async function(n,i){if((function(a){return lu(a)&&a!==V.ABORTED})(i.code)){const o=n.Pa.shift();ae(n).N_(),await Du(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Or(n)}})(r,t),bu(r)&&Nu(r)}async function sa(r,t){const e=L(r);e.asyncQueue.verifyOperationInProgress(),k(ye,"RemoteStore received new credentials");const n=Ee(e);e.Ia.add(3),await Vn(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await xr(e)}async function yd(r,t){const e=L(r);t?(e.Ia.delete(2),await xr(e)):t||(e.Ia.add(2),await Vn(e),e.Aa.set("Unknown"))}function Ue(r){return r.Va||(r.Va=(function(e,n,i){const o=L(e);return o.ia(),new nd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:ud.bind(null,r),e_:ld.bind(null,r),n_:cd.bind(null,r),J_:hd.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),Hs(r)?Ws(r):r.Aa.set("Unknown")):(await r.Va.stop(),Cu(r))}))),r.Va}function ae(r){return r.ma||(r.ma=(function(e,n,i){const o=L(e);return o.ia(),new rd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:md.bind(null,r),n_:_d.bind(null,r),ea:pd.bind(null,r),ta:gd.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await Or(r)):(await r.ma.stop(),r.Pa.length>0&&(k(ye,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Xs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new Xs(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(r,t){if(Gt("AsyncQueue",`${t}: ${r}`),Me(r))return new D(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ce{static emptySet(t){return new Ce(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=on(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ce;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class ia{constructor(){this.fa=new J(O.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xe{constructor(t,e,n,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new xe(t,e,Ce.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Td{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Ed{constructor(){this.queries=oa(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=L(e),o=i.queries;i.queries=oa(),o.forEach(((a,c)=>{for(const h of c.wa)h.onError(n)}))})(this,new D(V.ABORTED,"Firestore shutting down"))}}function oa(){return new Te((r=>Xa(r)),Pr)}async function Js(r,t){const e=L(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new Td,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Ys(a,`Initialization of query '${Ve(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&ti(e)}async function Zs(r,t){const e=L(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function vd(r,t){const e=L(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.wa)c.Ca(i)&&(n=!0);a.ya=i}}n&&ti(e)}function Id(r,t,e){const n=L(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function ti(r){r.Da.forEach((t=>{t.next()}))}var Vs,aa;(aa=Vs||(Vs={})).Fa="default",aa.Cache="cache";class ei{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new xe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Vs.Cache}}/**
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
 */class ku{constructor(t){this.key=t}}class xu{constructor(t){this.key=t}}class Ad{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=Ya(t),this.eu=new Ce(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new ia,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((m,y)=>{const w=i.get(m),S=Sr(this.query,y)?y:null,N=!!w&&this.mutatedKeys.has(w.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;w&&S?w.data.isEqual(S.data)?N!==x&&(n.track({type:3,doc:S}),b=!0):this.iu(w,S)||(n.track({type:2,doc:S}),b=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(c=!0)):!w&&S?(n.track({type:0,doc:S}),b=!0):w&&!S&&(n.track({type:1,doc:w}),b=!0,(h||d)&&(c=!0)),b&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{eu:a,ru:n,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,y)=>(function(S,N){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:b})}};return x(S)-x(N)})(m.type,y.type)||this.Xa(m.doc,y.doc))),this.su(n),i=i!=null&&i;const c=e&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new xe(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ia,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new xu(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new ku(n))})),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return xe.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ni="SyncEngine";class wd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Rd{constructor(t){this.key=t,this.lu=!1}}class Vd{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Te((c=>Xa(c)),Pr),this.Tu=new Map,this.Iu=new Set,this.du=new J(O.comparator),this.Eu=new Map,this.Au=new js,this.Ru={},this.Vu=new Map,this.mu=ke.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Pd(r,t,e=!0){const n=qu(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await Ou(n,t,e,!0),i}async function Sd(r,t){const e=qu(r);await Ou(e,t,!0,!1)}async function Ou(r,t,e,n){const i=await Wh(r.localStore,Ot(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Cd(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&Pu(r.remoteStore,i),c}async function Cd(r,t,e,n,i){r.gu=(y,w,S)=>(async function(x,b,z,G){let Q=b.view.nu(z);Q.Ds&&(Q=await Zo(x.localStore,b.query,!1).then((({documents:v})=>b.view.nu(v,Q))));const it=G&&G.targetChanges.get(b.targetId),Ut=G&&G.targetMismatches.get(b.targetId)!=null,ut=b.view.applyChanges(Q,x.isPrimaryClient,it,Ut);return la(x,b.targetId,ut._u),ut.snapshot})(r,y,w,S);const o=await Zo(r.localStore,t,!0),a=new Ad(t,o.qs),c=a.nu(o.documents),h=Rn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,h);la(r,e,d._u);const m=new wd(t,e,a);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function Dd(r,t,e){const n=L(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter((a=>!Pr(a,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ws(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Qs(n.remoteStore,i.targetId),Ps(n,i.targetId)})).catch(Fe)):(Ps(n,i.targetId),await ws(n.localStore,i.targetId,!0))}async function bd(r,t){const e=L(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Qs(e.remoteStore,n.targetId))}async function Nd(r,t,e){const n=Ud(r);try{const i=await(function(a,c){const h=L(a),d=X.now(),m=c.reduce(((S,N)=>S.add(N.key)),q());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let N=$t(),x=q();return h.Os.getEntries(S,m).next((b=>{N=b,N.forEach(((z,G)=>{G.isValidDocument()||(x=x.add(z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,N))).next((b=>{y=b;const z=[];for(const G of c){const Q=Hc(G,y.get(G.key).overlayedDocument);Q!=null&&z.push(new ce(G.key,Q,ja(Q.value.mapValue),dt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,z,c)})).next((b=>{w=b;const z=b.applyToLocalDocumentSet(y,x);return h.documentOverlayCache.saveOverlays(S,b.batchId,z)}))})).then((()=>({batchId:w.batchId,changes:Za(y)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),(function(a,c,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new J(U)),d=d.insert(c,h),a.Ru[a.currentUser.toKey()]=d})(n,i.batchId,e),await Pn(n,i.changes),await Or(n.remoteStore)}catch(i){const o=Ys(i,"Failed to persist write");e.reject(o)}}async function Fu(r,t){const e=L(r);try{const n=await $h(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Eu.get(o);a&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?j(a.lu,14607):i.removedDocuments.size>0&&(j(a.lu,42227),a.lu=!1))})),await Pn(e,n,t)}catch(n){await Fe(n)}}function ua(r,t,e){const n=L(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const h=L(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,y)=>{for(const w of y.wa)w.va(c)&&(d=!0)})),d&&ti(h)})(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function kd(r,t,e){const n=L(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let a=new J(O.comparator);a=a.insert(o,at.newNoDocument(o,M.min()));const c=q().add(o),h=new Nr(M.min(),new Map,new J(U),a,c);await Fu(n,h),n.du=n.du.remove(o),n.Eu.delete(t),ri(n)}else await ws(n.localStore,t,!1).then((()=>Ps(n,t,e))).catch(Fe)}async function xd(r,t){const e=L(r),n=t.batch.batchId;try{const i=await Gh(e.localStore,t);Lu(e,n,null),Mu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Pn(e,i)}catch(i){await Fe(i)}}async function Od(r,t,e){const n=L(r);try{const i=await(function(a,c){const h=L(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((y=>(j(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);Lu(n,t,e),Mu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Pn(n,i)}catch(i){await Fe(i)}}function Mu(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function Lu(r,t,e){const n=L(r);let i=n.Ru[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function Ps(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||Uu(r,n)}))}function Uu(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Qs(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),ri(r))}function la(r,t,e){for(const n of e)n instanceof ku?(r.Au.addReference(n.key,t),Fd(r,n)):n instanceof xu?(k(ni,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||Uu(r,n.key)):F(19791,{yu:n})}function Fd(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(k(ni,"New document in limbo: "+e),r.Iu.add(n),ri(r))}function ri(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new O(K.fromString(t)),n=r.mu.next();r.Eu.set(n,new Rd(e)),r.du=r.du.insert(e,n),Pu(r.remoteStore,new Jt(Ot(Vr(e.path)),n,"TargetPurposeLimboResolution",wr.ue))}}async function Pn(r,t,e){const n=L(r),i=[],o=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((c,h)=>{a.push(n.gu(h,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const y=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=zs.Es(h.targetId,d);o.push(y)}})))})),await Promise.all(a),n.hu.J_(i),await(async function(h,d){const m=L(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>P.forEach(d,(w=>P.forEach(w.Is,(S=>m.persistence.referenceDelegate.addReference(y,w.targetId,S))).next((()=>P.forEach(w.ds,(S=>m.persistence.referenceDelegate.removeReference(y,w.targetId,S)))))))))}catch(y){if(!Me(y))throw y;k(Gs,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const S=m.Fs.get(w),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);m.Fs=m.Fs.insert(w,x)}}})(n.localStore,o))}async function Md(r,t){const e=L(r);if(!e.currentUser.isEqual(t)){k(ni,"User change. New user:",t.toKey());const n=await wu(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new D(V.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Pn(e,n.Bs)}}function Ld(r,t){const e=L(r),n=e.Eu.get(t);if(n&&n.lu)return q().add(n.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const a of o){const c=e.Pu.get(a);i=i.unionWith(c.view.tu)}return i}}function qu(r){const t=L(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ld.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kd.bind(null,t),t.hu.J_=vd.bind(null,t.eventManager),t.hu.pu=Id.bind(null,t.eventManager),t}function Ud(r){const t=L(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Od.bind(null,t),t}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=kr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return zh(this.persistence,new qh,t.initialUser,this.serializer)}Du(t){return new Au(Bs.Vi,this.serializer)}bu(t){return new Xh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class qd extends Tr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){j(this.persistence.referenceDelegate instanceof _r,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Rh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Au((n=>_r.Vi(n,e)),this.serializer)}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ua(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Md.bind(null,this.syncEngine),await yd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ed})()}createDatastore(t){const e=kr(t.databaseInfo.databaseId),n=(function(o){return new ed(o)})(t.databaseInfo);return(function(o,a,c,h){return new id(o,a,c,h)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,a,c){return new ad(n,i,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>ua(this.syncEngine,e,0)),(function(){return na.C()?new na:new Yh})())}createSyncEngine(t,e){return(function(i,o,a,c,h,d,m){const y=new Vd(i,o,a,c,h,d);return m&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=L(i);k(ye,"RemoteStore shutting down."),o.Ia.add(5),await Vn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ss.provider={build:()=>new Ss};/**
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
 */class si{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Gt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */class jd{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(i,o){const a=L(i),c={documents:o.map((y=>gr(a.serializer,y)))},h=await a.Jo("BatchGetDocuments",a.serializer.databaseId,K.emptyPath(),c,o.length),d=new Map;h.forEach((y=>{const w=uh(a.serializer,y);d.set(w.key.toString(),w)}));const m=[];return o.forEach((y=>{const w=d.get(y.toString());j(!!w,55234,{key:y}),m.push(w)})),m})(this.datastore,t);return e.forEach((n=>this.recordVersion(n))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new br(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,n)=>{const i=O.fromPath(n);this.mutations.push(new uu(i,this.precondition(i)))})),await(async function(n,i){const o=L(n),a={writes:i.map((c=>_u(o.serializer,c)))};await o.Wo("Commit",o.serializer.databaseId,K.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw F(50498,{Wu:t.constructor.name});e=M.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new D(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(M.min())?dt.exists(!1):dt.updateTime(e):dt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(M.min()))throw new D(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return dt.updateTime(e)}return dt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class Bd{constructor(t,e,n,i,o){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=i,this.deferred=o,this.Gu=n.maxAttempts,this.F_=new $s(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const t=new jd(this.datastore),e=this.Ju(t);e&&e.then((n=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(n)})).catch((i=>{this.Hu(i)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(t){try{const e=this.updateFunction(t);return!An(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(t){this.Gu>0&&this.Yu(t)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(t)}Yu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!lu(e)}return!1}}/**
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
 */const ue="FirestoreClient";class zd{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=bs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{k(ue,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(k(ue,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ys(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function fs(r,t){r.asyncQueue.verifyOperationInProgress(),k(ue,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await wu(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>{ne("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{k("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{ne("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=t}async function ca(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Gd(r);k(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>sa(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>sa(t.remoteStore,i))),r._onlineComponents=t}async function Gd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k(ue,"Using user provided OfflineComponentProvider");try{await fs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ne("Error using user provided cache. Falling back to memory cache: "+e),await fs(r,new Tr)}}else k(ue,"Using default OfflineComponentProvider"),await fs(r,new qd(void 0));return r._offlineComponents}async function ii(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k(ue,"Using user provided OnlineComponentProvider"),await ca(r,r._uninitializedComponentsProvider._online)):(k(ue,"Using default OnlineComponentProvider"),await ca(r,new Ss))),r._onlineComponents}function $d(r){return ii(r).then((t=>t.syncEngine))}function ju(r){return ii(r).then((t=>t.datastore))}async function Er(r){const t=await ii(r),e=t.eventManager;return e.onListen=Pd.bind(null,t.syncEngine),e.onUnlisten=Dd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Sd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=bd.bind(null,t.syncEngine),e}function Qd(r,t,e={}){const n=new bt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new si({next:w=>{m.Ou(),a.enqueueAndForget((()=>Zs(o,y)));const S=w.docs.has(c);!S&&w.fromCache?d.reject(new D(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?d.reject(new D(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new ei(Vr(c.path),m,{includeMetadataChanges:!0,ka:!0});return Js(o,y)})(await Er(r),r.asyncQueue,t,e,n))),n.promise}function Kd(r,t,e={}){const n=new bt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new si({next:w=>{m.Ou(),a.enqueueAndForget((()=>Zs(o,y))),w.fromCache&&h.source==="server"?d.reject(new D(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new ei(c,m,{includeMetadataChanges:!0,ka:!0});return Js(o,y)})(await Er(r),r.asyncQueue,t,e,n))),n.promise}function Wd(r,t,e){const n=new bt;return r.asyncQueue.enqueueAndForget((async()=>{try{const i=await ju(r);n.resolve((async function(a,c,h){var d;const m=L(a),{request:y,ft:w,parent:S}=dh(m.serializer,xc(c),h);m.connection.Qo||delete y.parent;const N=(await m.Jo("RunAggregationQuery",m.serializer.databaseId,S,y,1)).filter((b=>!!b.result));j(N.length===1,64727);const x=(d=N[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(x).reduce(((b,z)=>(b[w[z]]=x[z],b)),{})})(i,t,e))}catch(i){n.reject(i)}})),n.promise}/**
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
 */function Bu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ha=new Map;/**
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
 */const zu="firestore.googleapis.com",da=!0;class fa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zu,this.ssl=da}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:da;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Iu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ah)throw new D(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}oc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Yl;switch(n.type){case"firstParty":return new ec(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=ha.get(e);n&&(k("ComponentProvider","Removing Datastore"),ha.delete(e),n.terminate())})(this),Promise.resolve()}}function Hd(r,t,e,n={}){var i;r=Et(r,Fr);const o=Ea(t),a=r._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Gl(`https://${h}`),$l("Firestore",!0)),a.host!==zu&&a.host!==h&&ne("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:n});if(!Ql(d,c)&&(r._setSettings(d),n.mockUserToken)){let m,y;if(typeof n.mockUserToken=="string")m=n.mockUserToken,y=Tt.MOCK_USER;else{m=Kl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new D(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Tt(w)}r._authCredentials=new Jl(new Sa(m,y))}}/**
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
 */class Qt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Qt(this.firestore,t,this._query)}}class Y{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Y(this.firestore,t,this._key)}toJSON(){return{type:Y._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(In(e,Y._jsonSchema))return new Y(t,n||null,new O(K.fromString(e.referencePath)))}}Y._jsonSchemaVersion="firestore/documentReference/1.0",Y._jsonSchema={type:rt("string",Y._jsonSchemaVersion),referencePath:rt("string")};class te extends Qt{constructor(t,e,n){super(t,e,Vr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Y(this.firestore,null,new O(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function gf(r,t,...e){if(r=Ct(r),Da("collection","path",t),r instanceof Fr){const n=K.fromString(t,...e);return Vo(n),new te(r,null,n)}{if(!(r instanceof Y||r instanceof te))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Vo(n),new te(r.firestore,null,n)}}function Xd(r,t,...e){if(r=Ct(r),arguments.length===1&&(t=bs.newId()),Da("doc","path",t),r instanceof Fr){const n=K.fromString(t,...e);return Ro(n),new Y(r,null,new O(n))}{if(!(r instanceof Y||r instanceof te))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Ro(n),new Y(r.firestore,r instanceof te?r.converter:null,new O(n))}}/**
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
 */const ma="AsyncQueue";class pa{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new $s(this,"async_queue_retry"),this.oc=()=>{const n=ds();n&&k(ma,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new bt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Me(t))throw t;k(ma,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,Gt("INTERNAL UNHANDLED ERROR: ",ga(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=Xs.createAndSchedule(this,t,e,n,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&F(47125,{hc:ga(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function ga(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function _a(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1})(r,["next","error","complete"])}class kt extends Fr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new pa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pa(t),this._firestoreClient=void 0,await t}}}function _f(r,t){const e=typeof r=="object"?r:jl(),n=typeof r=="string"?r:cr,i=Bl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=zl("firestore");o&&Hd(i,...o)}return i}function qe(r){if(r._terminated)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Yd(r),r._firestoreClient}function Yd(r){var t,e,n;const i=r._freezeSettings(),o=(function(c,h,d,m){return new Tc(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Bu(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new zd(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&(function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}})(r._componentsProvider))}/**
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
 */class Jd{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Zd{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vt(ft.fromBase64String(t))}catch(e){throw new D(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(In(t,Vt._jsonSchema))return Vt.fromBase64String(t.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:rt("string",Vt._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class Sn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Mr{constructor(t){this._methodName=t}}/**
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
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(In(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:rt("string",Ft._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
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
 */class Mt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(In(t,Mt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Mt(t.vectorValues);throw new D(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mt._jsonSchemaVersion="firestore/vectorValue/1.0",Mt._jsonSchema={type:rt("string",Mt._jsonSchemaVersion),vectorValues:rt("object")};/**
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
 */const tf=/^__.*__$/;class ef{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class Gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $u(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:r})}}class oi{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return vr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if($u(this.Ec)&&tf.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class nf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||kr(t)}Dc(t,e,n,i=!1){return new oi({Ec:t,methodName:e,bc:n,path:ht.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cn(r){const t=r._freezeSettings(),e=kr(r._databaseId);return new nf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ai(r,t,e,n,i,o={}){const a=r.Dc(o.merge||o.mergeFields?2:0,t,e,i);li("Data must be an object, but it was:",a,n);const c=Wu(n,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=Cs(t,y,e);if(!a.contains(w))throw new D(V.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Xu(m,w)||m.push(w)}h=new Pt(m),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new ef(new At(c),h,d)}class Dn extends Mr{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Dn}}class ui extends Mr{_toFieldTransform(t){return new $c(t.path,new Tn)}isEqual(t){return t instanceof ui}}function Qu(r,t,e,n){const i=r.Dc(1,t,e);li("Data must be an object, but it was:",i,n);const o=[],a=At.empty();le(n,((h,d)=>{const m=ci(t,h,e);d=Ct(d);const y=i.gc(m);if(d instanceof Dn)o.push(m);else{const w=bn(d,y);w!=null&&(o.push(m),a.set(m,w))}}));const c=new Pt(o);return new Gu(a,c,i.fieldTransforms)}function Ku(r,t,e,n,i,o){const a=r.Dc(1,t,e),c=[Cs(t,n,e)],h=[i];if(o.length%2!=0)throw new D(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Cs(t,o[w])),h.push(o[w+1]);const d=[],m=At.empty();for(let w=c.length-1;w>=0;--w)if(!Xu(d,c[w])){const S=c[w];let N=h[w];N=Ct(N);const x=a.gc(S);if(N instanceof Dn)d.push(S);else{const b=bn(N,x);b!=null&&(d.push(S),m.set(S,b))}}const y=new Pt(d);return new Gu(m,y,a.fieldTransforms)}function rf(r,t,e,n=!1){return bn(e,r.Dc(n?4:3,t))}function bn(r,t){if(Hu(r=Ct(r)))return li("Unsupported field value:",t,r),Wu(r,t);if(r instanceof Mr)return(function(n,i){if(!$u(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,i){const o=[];let a=0;for(const c of n){let h=bn(c,i.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:pr(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pr(i.serializer,o)}}if(n instanceof Ft)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vt)return{bytesValue:fu(i.serializer,n._byteString)};if(n instanceof Y){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Mt)return(function(a,c){return{mapValue:{fields:{[Ua]:{stringValue:qa},[hr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ms(c.serializer,d)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${Ar(n)}`)})(r,t)}function Wu(r,t){const e={};return ka(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(r,((n,i)=>{const o=bn(i,t.Vc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function Hu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Ft||r instanceof Vt||r instanceof Y||r instanceof Mr||r instanceof Mt)}function li(r,t,e){if(!Hu(e)||!ba(e)){const n=Ar(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function Cs(r,t,e){if((t=Ct(t))instanceof Sn)return t._internalPath;if(typeof t=="string")return ci(r,t);throw vr("Field path arguments must be of type string or ",r,!1,void 0,e)}const sf=new RegExp("[~\\*/\\[\\]]");function ci(r,t,e){if(t.search(sf)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Sn(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function vr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new D(V.INVALID_ARGUMENT,c+r+h)}function Xu(r,t){return r.some((e=>e.isEqual(t)))}/**
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
 */class Ir{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Lr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class of extends Ir{data(){return super.data()}}function Lr(r,t){return typeof t=="string"?ci(r,t):t instanceof Sn?t._internalPath:t._delegate._internalPath}/**
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
 */function Yu(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hi{}class di extends hi{}function yf(r,t,...e){let n=[];t instanceof hi&&n.push(t),n=n.concat(e),(function(o){const a=o.filter((h=>h instanceof fi)).length,c=o.filter((h=>h instanceof Ur)).length;if(a>1||a>0&&c>0)throw new D(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Ur extends di{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ur(t,e,n)}_apply(t){const e=this._parse(t);return Ju(t._query,e),new Qt(t.firestore,t.converter,Es(t._query,e))}_parse(t){const e=Cn(t.firestore);return(function(o,a,c,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ta(y,m);const N=[];for(const x of y)N.push(ya(h,o,x));w={arrayValue:{values:N}}}else w=ya(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ta(y,m),w=rf(c,a,y,m==="in"||m==="not-in");return nt.create(d,m,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Tf(r,t,e){const n=t,i=Lr("where",r);return Ur._create(i,n,e)}class fi extends hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new fi(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)Ju(a,h),a=Es(a,h)})(t._query,e),new Qt(t.firestore,t.converter,Es(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mi extends di{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new mi(t,e)}_apply(t){const e=(function(i,o,a){if(i.startAt!==null)throw new D(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yn(o,a)})(t._query,this._field,this._direction);return new Qt(t.firestore,t.converter,(function(i,o){const a=i.explicitOrderBy.concat([o]);return new Le(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function Ef(r,t="asc"){const e=t,n=Lr("orderBy",r);return mi._create(n,e)}class pi extends di{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new pi(t,e,n)}_apply(t){return new Qt(t.firestore,t.converter,fr(t._query,this._limit,this._limitType))}}function vf(r){return ac("limit",r),pi._create("limit",r,"F")}function ya(r,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new D(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wa(t)&&e.indexOf("/")!==-1)throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(K.fromString(e));if(!O.isDocumentKey(n))throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return xo(r,new O(n))}if(e instanceof Y)return xo(r,e._key);throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function Ta(r,t){if(!Array.isArray(r)||r.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ju(r,t){const e=(function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Zu{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return le(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[hr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((a=>tt(a.doubleValue)));return new Mt(o)}convertGeoPoint(t){return new Ft(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Rr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pn(t));default:return null}}convertTimestamp(t){const e=se(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=K.fromString(t);j(vu(n),9688,{name:t});const i=new gn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||Gt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function gi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class af extends Zu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Y(this.firestore,null,e)}}function uf(){return new Jd("count")}class Se{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ee extends Ir{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Lr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ee._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ee._jsonSchemaVersion="firestore/documentSnapshot/1.0",ee._jsonSchema={type:rt("string",ee._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class ur extends ee{data(t={}){return super.data(t)}}class ge{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Se(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ur(this._firestore,this._userDataWriter,n.key,n,new Se(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const h=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Se(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Se(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:lf(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ge._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=bs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function lf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}/**
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
 */function If(r){r=Et(r,Y);const t=Et(r.firestore,kt);return Qd(qe(t),r._key).then((e=>tl(t,r,e)))}ge._jsonSchemaVersion="firestore/querySnapshot/1.0",ge._jsonSchema={type:rt("string",ge._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Nn extends Zu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Y(this.firestore,null,e)}}function Af(r){r=Et(r,Qt);const t=Et(r.firestore,kt),e=qe(t),n=new Nn(t);return Yu(r._query),Kd(e,r._query).then((i=>new ge(t,n,r,i)))}function wf(r,t,e){r=Et(r,Y);const n=Et(r.firestore,kt),i=gi(r.converter,t,e);return qr(n,[ai(Cn(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,dt.none())])}function Rf(r,t,e,...n){r=Et(r,Y);const i=Et(r.firestore,kt),o=Cn(i);let a;return a=typeof(t=Ct(t))=="string"||t instanceof Sn?Ku(o,"updateDoc",r._key,t,e,n):Qu(o,"updateDoc",r._key,t),qr(i,[a.toMutation(r._key,dt.exists(!0))])}function Vf(r){return qr(Et(r.firestore,kt),[new br(r._key,dt.none())])}function Pf(r,t){const e=Et(r.firestore,kt),n=Xd(r),i=gi(r.converter,t);return qr(e,[ai(Cn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,dt.exists(!1))]).then((()=>n))}function Sf(r,...t){var e,n,i;r=Ct(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||_a(t[a])||(o=t[a++]);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(_a(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(n=y.error)===null||n===void 0?void 0:n.bind(y),t[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let h,d,m;if(r instanceof Y)d=Et(r.firestore,kt),m=Vr(r._key.path),h={next:y=>{t[a]&&t[a](tl(d,r,y))},error:t[a+1],complete:t[a+2]};else{const y=Et(r,Qt);d=Et(y.firestore,kt),m=y._query;const w=new Nn(d);h={next:S=>{t[a]&&t[a](new ge(d,w,y,S))},error:t[a+1],complete:t[a+2]},Yu(r._query)}return(function(w,S,N,x){const b=new si(x),z=new ei(S,b,N);return w.asyncQueue.enqueueAndForget((async()=>Js(await Er(w),z))),()=>{b.Ou(),w.asyncQueue.enqueueAndForget((async()=>Zs(await Er(w),z)))}})(qe(d),m,c,h)}function qr(r,t){return(function(n,i){const o=new bt;return n.asyncQueue.enqueueAndForget((async()=>Nd(await $d(n),i,o))),o.promise})(qe(r),t)}function tl(r,t,e){const n=e.docs.get(t._key),i=new Nn(r);return new ee(r,i,t._key,n,new Se(e.hasPendingWrites,e.fromCache),t.converter)}function Cf(r){return cf(r,{count:uf()})}function cf(r,t){const e=Et(r.firestore,kt),n=qe(e),i=_c(t,((o,a)=>new Jc(a,o.aggregateType,o._internalFieldPath)));return Wd(n,r._query,i).then((o=>(function(c,h,d){const m=new Nn(c);return new Zd(h,m,d)})(e,r,o)))}/**
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
 */const hf={maxAttempts:5};function un(r,t){if((r=Ct(r)).firestore!==t)throw new D(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class df{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Cn(t)}get(t){const e=un(t,this._firestore),n=new af(this._firestore);return this._transaction.lookup([e._key]).then((i=>{if(!i||i.length!==1)return F(24041);const o=i[0];if(o.isFoundDocument())return new Ir(this._firestore,n,o.key,o,e.converter);if(o.isNoDocument())return new Ir(this._firestore,n,e._key,null,e.converter);throw F(18433,{doc:o})}))}set(t,e,n){const i=un(t,this._firestore),o=gi(i.converter,e,n),a=ai(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,n);return this._transaction.set(i._key,a),this}update(t,e,n,...i){const o=un(t,this._firestore);let a;return a=typeof(e=Ct(e))=="string"||e instanceof Sn?Ku(this._dataReader,"Transaction.update",o._key,e,n,i):Qu(this._dataReader,"Transaction.update",o._key,e),this._transaction.update(o._key,a),this}delete(t){const e=un(t,this._firestore);return this._transaction.delete(e._key),this}}/**
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
 */class ff extends df{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=un(t,this._firestore),n=new Nn(this._firestore);return super.get(t).then((i=>new ee(this._firestore,n,e._key,i._document,new Se(!1,!1),e.converter)))}}function Df(r,t,e){r=Et(r,kt);const n=Object.assign(Object.assign({},hf),e);return(function(o){if(o.maxAttempts<1)throw new D(V.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(o,a,c){const h=new bt;return o.asyncQueue.enqueueAndForget((async()=>{const d=await ju(o);new Bd(o.asyncQueue,d,c,a,h).zu()})),h.promise})(qe(r),(i=>t(new ff(r,i))),n)}/**
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
 */function bf(){return new Dn("deleteField")}function Nf(){return new ui("serverTimestamp")}(function(t,e=!0){(function(i){Oe=i})(Xl),Ml(new Ll("firestore",((n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new kt(new Zl(n.getProvider("auth-internal")),new nc(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(d.options.projectId,m)})(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),yo(Eo,vo,t),yo(Eo,vo,"esm2017")})();export{If as a,Nf as b,bf as c,Xd as d,Ef as e,gf as f,_f as g,Vf as h,Pf as i,Cf as j,Af as k,vf as l,Sf as o,yf as q,Df as r,wf as s,Rf as u,Tf as w};
