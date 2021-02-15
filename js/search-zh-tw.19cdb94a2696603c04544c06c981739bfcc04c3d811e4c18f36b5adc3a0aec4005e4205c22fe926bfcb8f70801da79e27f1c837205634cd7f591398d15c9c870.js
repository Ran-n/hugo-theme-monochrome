(()=>{var wt=Object.create,nt=Object.defineProperty,jt=Object.getPrototypeOf,_t=Object.prototype.hasOwnProperty,Ot=Object.getOwnPropertyNames,Et=Object.getOwnPropertyDescriptor,Lt=x=>nt(x,"__esModule",{value:!0}),It=(x,O)=>()=>(O||(O={exports:{}},x(O.exports,O)),O.exports),Ct=(x,O,v)=>{if(Lt(x),O&&typeof O=="object"||typeof O=="function")for(let B of Ot(O))!_t.call(x,B)&&B!=="default"&&nt(x,B,{get:()=>O[B],enumerable:!(v=Et(O,B))||v.enumerable});return x},Bt=x=>x&&x.__esModule?x:Ct(nt(x!=null?wt(jt(x)):{},"default",{value:x,enumerable:!0}),x),dt=It((rt,at)=>{"use strict";(function(x,O,v){let B;(B=v.define)&&B.amd?B([],function(){return O}):(B=v.modules)?B[x.toLowerCase()]=O:typeof rt=="object"?at.exports=O:v[x]=O})("FlexSearch",function x(O){function v(t,i){let e=i?i.id:t&&t.id;this.id=e||e===0?e:gt++,this.init(t,i),Z(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)}),Z(this,"length",function(){return this.index.length})}function B(t,i,e,s){return this.u!==this.g&&(this.o=this.o.concat(e),this.u++,s&&this.o.length>=s&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(i,this.o),this.F&&this.F(this.o))),this}function G(t){let i=L();for(let e in t)if(t.hasOwnProperty(e)){let s=t[e];I(s)?i[e]=s.slice(0):A(s)?i[e]=G(s):i[e]=s}return i}function N(t,i){let e=t.length,s=z(i),n=[];for(let r=0,h=0;r<e;r++){let o=t[r];(s&&i(o)||!s&&!i[o])&&(n[h++]=o)}return n}function T(t,i,e,s,n,r,h,o,l,f){e=J(e,h?0:n,o,r,i,l,f);let a;if(o&&(o=e.page,a=e.next,e=e.result),h)i=this.where(h,null,n,e);else{for(i=e,e=this.l,n=i.length,r=Array(n),h=0;h<n;h++)r[h]=e[i[h]];i=r}return e=i,s&&(z(s)||(W=s.split(":"),1<W.length?s=P:(W=W[0],s=et)),e.sort(s)),e=k(o,a,e),this.cache&&this.j.set(t,e),e}function Z(t,i,e){Object.defineProperty(t,i,{get:e})}function d(t){return new RegExp(t,"g")}function U(t,i){for(let e=0;e<i.length;e+=2)t=t.replace(i[e],i[e+1]);return t}function R(t,i,e,s,n,r,h,o){return i[e]?i[e]:(n=n?(o-(h||o/1.5))*r+(h||o/1.5)*n:r,i[e]=n,n>=h&&(t=t[o-(n+.5>>0)],t=t[e]||(t[e]=[]),t[t.length]=s),n)}function V(t,i){if(t){let e=Object.keys(t);for(let s=0,n=e.length;s<n;s++){let r=e[s],h=t[r];if(h)for(let o=0,l=h.length;o<l;o++)if(h[o]===i){l===1?delete t[r]:h.splice(o,1);break}else A(h[o])&&V(h[o],i)}}}function X(t){let i="",e="";var s="";for(let n=0;n<t.length;n++){let r=t[n];r!==e&&(n&&r==="h"?(s=s==="a"||s==="e"||s==="i"||s==="o"||s==="u"||s==="y",(e==="a"||e==="e"||e==="i"||e==="o"||e==="u"||e==="y")&&s||e===" ")&&(i+=r):i+=r),s=n===t.length-1?"":t[n+1],e=r}return i}function $(t,i){return t=t.length-i.length,0>t?1:t?-1:0}function et(t,i){return t=t[W],i=i[W],t<i?-1:t>i?1:0}function P(t,i){let e=W.length;for(let s=0;s<e;s++)t=t[W[s]],i=i[W[s]];return t<i?-1:t>i?1:0}function k(t,i,e){return t?{page:t,next:i?""+i:null,result:e}:e}function J(t,i,e,s,n,r,h){let o,l=[];if(e===!0){e="0";var f=""}else f=e&&e.split(":");let a=t.length;if(1<a){let _=L(),g=[],m,w;var c=0,u;let H;var y=!0;let F,D=0,Q,it,q,st;if(f&&(f.length===2?(q=f,f=!1):f=st=parseInt(f[0],10)),h){for(m=L();c<a;c++)if(n[c]==="not")for(w=t[c],H=w.length,u=0;u<H;u++)m["@"+w[u]]=1;else it=c+1;if(C(it))return k(e,o,l);c=0}else Q=M(n)&&n;let b;for(;c<a;c++){let xt=c===(it||a)-1;if(!Q||!c)if((u=Q||n&&n[c])&&u!=="and")if(u==="or")b=!1;else continue;else b=r=!0;if(w=t[c],H=w.length){if(y)if(F){var p=F.length;for(u=0;u<p;u++){y=F[u];var E="@"+y;h&&m[E]||(_[E]=1,r||(l[D++]=y))}F=null,y=!1}else{F=w;continue}for(E=!1,u=0;u<H;u++){p=w[u];var j="@"+p;let tt=r?_[j]||0:c;if(!(!tt&&!s||h&&m[j]||!r&&_[j]))if(tt===c){if(xt){if((!st||--st<D)&&(l[D++]=p,i&&D===i))return k(e,D+(f||0),l)}else _[j]=c+1;E=!0}else s&&(j=g[tt]||(g[tt]=[]),j[j.length]=p)}if(b&&!E&&!s)break}else if(b&&!s)return k(e,o,w)}if(F)if(c=F.length,h)for(u=f?parseInt(f,10):0;u<c;u++)t=F[u],m["@"+t]||(l[D++]=t);else l=F;if(s){for(D=l.length,q?(c=parseInt(q[0],10)+1,u=parseInt(q[1],10)+1):(c=g.length,u=0);c--;)if(p=g[c]){for(H=p.length;u<H;u++)if((s=p[u],!h||!m["@"+s])&&(l[D++]=s,i&&D===i))return k(e,c+":"+u,l);u=0}}}else!a||n&&n[0]==="not"||(l=t[0],f&&(f=parseInt(f[0],10)));return i&&(h=l.length,f&&f>h&&(f=0),f=f||0,o=f+i,o<h?l=l.slice(f,o):(o=0,f&&(l=l.slice(f)))),k(e,o,l)}function M(t){return typeof t=="string"}function I(t){return t.constructor===Array}function z(t){return typeof t=="function"}function A(t){return typeof t=="object"}function C(t){return typeof t=="undefined"}function ht(t){let i=Array(t);for(let e=0;e<t;e++)i[e]=L();return i}function L(){return Object.create(null)}function pt(){let t,i;self.onmessage=function(e){if(e=e.data)if(e.search){let s=i.search(e.content,e.threshold?{limit:e.limit,threshold:e.threshold,where:e.where}:e.limit);self.postMessage({id:t,content:e.content,limit:e.limit,result:s})}else e.add?i.add(e.id,e.content):e.update?i.update(e.id,e.content):e.remove?i.remove(e.id):e.clear?i.clear():e.info?(e=i.info(),e.worker=t,console.log(e)):e.register&&(t=e.id,e.options.cache=!1,e.options.async=!1,e.options.worker=!1,i=new Function(e.register.substring(e.register.indexOf("{")+1,e.register.lastIndexOf("}")))(),i=new i(e.options))}}function yt(t,i,e,s){t=O("flexsearch","id"+t,pt,function(r){(r=r.data)&&r.result&&s(r.id,r.content,r.result,r.limit,r.where,r.cursor,r.suggest)},i);let n=x.toString();return e.id=i,t.postMessage({register:n,options:e,id:i}),t}let S={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},lt={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},K=[],gt=0,ft={},ut={};v.create=function(t,i){return new v(t,i)},v.registerMatcher=function(t){for(let i in t)t.hasOwnProperty(i)&&K.push(d(i),t[i]);return this},v.registerEncoder=function(t,i){return Y[t]=i.bind(Y),this},v.registerLanguage=function(t,i){return ft[t]=i.filter,ut[t]=i.stemmer,this},v.encode=function(t,i){return Y[t](i)},v.prototype.init=function(t,i){if(this.v=[],i){var e=i.preset;t=i}else t||(t=S),e=t.preset;if(i={},M(t)?(i=lt[t],t={}):e&&(i=lt[e]),e=t.worker)if(typeof Worker=="undefined")t.worker=!1,this.m=null;else{var s=parseInt(e,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(s);for(var n=0;n<s;n++)this.m[n]=yt(this.id,n,t,B.bind(this))}if(this.f=t.tokenize||i.f||this.f||S.f,this.split=C(e=t.split)?this.split||S.split:M(e)?d(e):e,this.D=t.rtl||this.D||S.D,this.async=typeof Promise=="undefined"||C(e=t.async)?this.async||S.async:e,this.g=C(e=t.worker)?this.g||S.g:e,this.threshold=C(e=t.threshold)?i.threshold||this.threshold||S.threshold:e,this.b=C(e=t.resolution)?e=i.b||this.b||S.b:e,e<=this.threshold&&(this.b=this.threshold+1),this.depth=this.f!=="strict"||C(e=t.depth)?i.depth||this.depth||S.depth:e,this.w=(e=C(e=t.encode)?i.encode||S.encode:e)&&Y[e]&&Y[e].bind(Y)||(z(e)?e:this.w||!1),(e=t.matcher)&&this.addMatcher(e),e=(i=t.lang)||t.filter){if(M(e)&&(e=ft[e]),I(e)){s=this.w,n=L();for(var r=0;r<e.length;r++){var h=s?s(e[r]):e[r];n[h]=1}e=n}this.filter=e}if(e=i||t.stemmer){var o;i=M(e)?ut[e]:e,s=this.w,n=[];for(o in i)i.hasOwnProperty(o)&&(r=s?s(o):o,n.push(d(r+"($|\\W)"),s?s(i[o]):i[o]));this.stemmer=o=n}if(this.a=n=(e=t.doc)?G(e):this.a||S.a,this.i=ht(this.b-(this.threshold||0)),this.h=L(),this.c=L(),n){if(this.l=L(),t.doc=null,o=n.index={},i=n.keys=[],s=n.field,r=n.tag,h=n.store,I(n.id)||(n.id=n.id.split(":")),h){var l=L();if(M(h))l[h]=1;else if(I(h))for(let f=0;f<h.length;f++)l[h[f]]=1;else A(h)&&(l=h);n.store=l}if(r){if(this.G=L(),h=L(),s)if(M(s))h[s]=t;else if(I(s))for(l=0;l<s.length;l++)h[s[l]]=t;else A(s)&&(h=s);for(I(r)||(n.tag=r=[r]),s=0;s<r.length;s++)this.G[r[s]]=L();this.I=r,s=h}if(s){let f;for(I(s)||(A(s)?(f=s,n.field=s=Object.keys(s)):n.field=s=[s]),n=0;n<s.length;n++)r=s[n],I(r)||(f&&(t=f[r]),i[n]=r,s[n]=r.split(":")),o[r]=new v(t)}t.doc=e}return this.B=!0,this.j=(this.cache=e=C(e=t.cache)?this.cache||S.cache:e)?new mt(e):!1,this},v.prototype.encode=function(t){return t&&(K.length&&(t=U(t,K)),this.v.length&&(t=U(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=U(t,this.stemmer))),t},v.prototype.addMatcher=function(t){let i=this.v;for(let e in t)t.hasOwnProperty(e)&&i.push(d(e),t[e]);return this},v.prototype.add=function(t,i,e,s,n){if(this.a&&A(t))return this.A("add",t,i);if(i&&M(i)&&(t||t===0)){var r="@"+t;if(this.c[r]&&!s)return this.update(t,i);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:i}),this.c[r]=""+this.C,e&&e(),this;if(!n){if(this.async&&typeof importScripts!="function"){let g=this;if(r=new Promise(function(m){setTimeout(function(){g.add(t,i,null,s,!0),g=null,m()})}),e)r.then(e);else return r;return this}if(e)return this.add(t,i,null,s,!0),e(),this}if(i=this.encode(i),!i.length)return this;e=this.f,n=z(e)?e(i):i.split(this.split),this.filter&&(n=N(n,this.filter));let c=L();c._ctx=L();let u=n.length,y=this.threshold,p=this.depth,E=this.b,j=this.i,_=this.D;for(let g=0;g<u;g++){var h=n[g];if(h){var o=h.length,l=(_?g+1:u-g)/u,f="";switch(e){case"reverse":case"both":for(var a=o;--a;)f=h[a]+f,R(j,c,f,t,_?1:(o-a)/o,l,y,E-1);f="";case"forward":for(a=0;a<o;a++)f+=h[a],R(j,c,f,t,_?(a+1)/o:1,l,y,E-1);break;case"full":for(a=0;a<o;a++){let m=(_?a+1:o-a)/o;for(let w=o;w>a;w--)f=h.substring(a,w),R(j,c,f,t,m,l,y,E-1)}break;default:if(o=R(j,c,h,t,1,l,y,E-1),p&&1<u&&o>=y)for(o=c._ctx[h]||(c._ctx[h]=L()),h=this.h[h]||(this.h[h]=ht(E-(y||0))),l=g-p,f=g+p+1,0>l&&(l=0),f>u&&(f=u);l<f;l++)l!==g&&R(h,o,n[l],t,0,E-(l<g?g-l:l-g),y,E-1)}}}this.c[r]=1,this.B=!1}return this},v.prototype.A=function(t,i,e){if(I(i)){var s=i.length;if(s--){for(var n=0;n<s;n++)this.A(t,i[n]);return this.A(t,i[s],e)}}else{var r=this.a.index,h=this.a.keys,o=this.a.tag;n=this.a.store;var l,f=this.a.id;s=i;for(var a=0;a<f.length;a++)s=s[f[a]];if(t==="remove"&&(delete this.l[s],f=h.length,f--)){for(i=0;i<f;i++)r[h[i]].remove(s);return r[h[f]].remove(s,e)}if(o){for(l=0;l<o.length;l++){var c=o[l],u=i;for(f=c.split(":"),a=0;a<f.length;a++)u=u[f[a]];u="@"+u}l=this.G[c],l=l[u]||(l[u]=[])}f=this.a.field;for(let y=0,p=f.length;y<p;y++){for(c=f[y],o=i,u=0;u<c.length;u++)o=o[c[u]];c=r[h[y]],u=t==="add"?c.add:c.update,y===p-1?u.call(c,s,o,e):u.call(c,s,o)}if(n){for(e=Object.keys(n),t=L(),r=0;r<e.length;r++)if(h=e[r],n[h]){h=h.split(":");let y,p;for(f=0;f<h.length;f++)o=h[f],y=(y||i)[o],p=(p||t)[o]=y}i=t}l&&(l[l.length]=i),this.l[s]=i}return this},v.prototype.update=function(t,i,e){return this.a&&A(t)?this.A("update",t,i):(this.c["@"+t]&&M(i)&&(this.remove(t),this.add(t,i,e,!0)),this)},v.prototype.remove=function(t,i,e){if(this.a&&A(t))return this.A("remove",t,i);var s="@"+t;if(this.c[s]){if(this.g)return this.m[this.c[s]].postMessage({remove:!0,id:t}),delete this.c[s],i&&i(),this;if(!e){if(this.async&&typeof importScripts!="function"){let n=this;if(s=new Promise(function(r){setTimeout(function(){n.remove(t,null,!0),n=null,r()})}),i)s.then(i);else return s;return this}if(i)return this.remove(t,null,!0),i(),this}for(i=0;i<this.b-(this.threshold||0);i++)V(this.i[i],t);this.depth&&V(this.h,t),delete this.c[s],this.B=!1}return this};let W;v.prototype.search=function(t,i,e,s){if(A(i)){if(I(i))for(var n=0;n<i.length;n++)i[n].query=t;else i.query=t;t=i,i=1e3}else i&&z(i)?(e=i,i=1e3):i||i===0||(i=1e3);if(this.g){this.F=e,this.u=0,this.o=[];for(var r=0;r<this.g;r++)this.m[r].postMessage({search:!0,limit:i,content:t})}else{var h=[],o=t;if(A(t)&&!I(t)){e||(e=t.callback)&&(o.callback=null);var l=t.sort,f=t.page;i=t.limit,r=t.threshold;var a=t.suggest;t=t.query}if(this.a){r=this.a.index;let _=o.where;var c=o.bool||"or",u=o.field;let g=c,m,w;if(u)I(u)||(u=[u]);else if(I(o)){var y=o;u=[],g=[];for(var p=0;p<o.length;p++)s=o[p],n=s.bool||c,u[p]=s.field,g[p]=n,n==="not"?m=!0:n==="and"&&(w=!0)}else u=this.a.keys;for(c=u.length,p=0;p<c;p++)y&&(o=y[p]),f&&!M(o)&&(o.page=null,o.limit=0),h[p]=r[u[p]].search(o,0);if(e)return e(T.call(this,t,g,h,l,i,a,_,f,w,m));if(this.async){let H=this;return new Promise(function(F){Promise.all(h).then(function(D){F(T.call(H,t,g,D,l,i,a,_,f,w,m))})})}return T.call(this,t,g,h,l,i,a,_,f,w,m)}if(r||(r=this.threshold||0),!s){if(this.async&&typeof importScripts!="function"){let _=this;if(r=new Promise(function(g){setTimeout(function(){g(_.search(o,i,null,!0)),_=null})}),e)r.then(e);else return r;return this}if(e)return e(this.search(o,i,null,!0)),this}if(!t||!M(t))return h;if(o=t,this.cache)if(this.B){if(e=this.j.get(t))return e}else this.j.clear(),this.B=!0;if(o=this.encode(o),!o.length)return h;e=this.f,e=z(e)?e(o):o.split(this.split),this.filter&&(e=N(e,this.filter)),y=e.length,s=!0,n=[];var E=L(),j=0;if(1<y&&(this.depth&&this.f==="strict"?c=!0:e.sort($)),!c||(p=this.h)){let _=this.b;for(;j<y;j++){let g=e[j];if(g){if(c){if(!u){if(p[g])u=g,E[g]=1;else if(!a)return h}if(a&&j===y-1&&!n.length)c=!1,g=u||g,E[g]=0;else if(!u)continue}if(!E[g]){let m=[],w=!1,H=0,F=c?p[u]:this.i;if(F){let D;for(let Q=0;Q<_-r;Q++)(D=F[Q]&&F[Q][g])&&(m[H++]=D,w=!0)}if(w)u=g,n[n.length]=1<H?m.concat.apply([],m):m[0];else if(!a){s=!1;break}E[g]=1}}}}else s=!1;return s&&(h=J(n,i,f,a)),this.cache&&this.j.set(t,h),h}},v.prototype.find=function(t,i){return this.where(t,i,1)[0]||null},v.prototype.where=function(t,i,e,s){let n=this.l,r=[],h=0,o;var l;let f;if(A(t)){e||(e=i);var a=Object.keys(t),c=a.length;if(o=!1,c===1&&a[0]==="id")return[n[t.id]];if((l=this.I)&&!s)for(var u=0;u<l.length;u++){var y=l[u],p=t[y];if(!C(p)){if(f=this.G[y]["@"+p],--c===0)return f;a.splice(a.indexOf(y),1),delete t[y];break}}for(l=Array(c),u=0;u<c;u++)l[u]=a[u].split(":")}else{if(z(t)){for(i=s||Object.keys(n),e=i.length,a=0;a<e;a++)c=n[i[a]],t(c)&&(r[h++]=c);return r}if(C(i))return[n[t]];if(t==="id")return[n[i]];a=[t],c=1,l=[t.split(":")],o=!0}for(s=f||s||Object.keys(n),u=s.length,y=0;y<u;y++){p=f?s[y]:n[s[y]];let E=!0;for(let j=0;j<c;j++){o||(i=t[a[j]]);let _=l[j],g=_.length,m=p;if(1<g)for(let w=0;w<g;w++)m=m[_[w]];else m=m[_[0]];if(m!==i){E=!1;break}}if(E&&(r[h++]=p,e&&h===e))break}return r},v.prototype.info=function(){if(this.g)for(let t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:K.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&this.f==="strict"}},v.prototype.clear=function(){return this.destroy().init()},v.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){let t=this.a.keys;for(let i=0;i<t.length;i++)this.a.index[t[i]].destroy();this.a=this.l=null}return this},v.prototype.export=function(t){let i=!t||C(t.serialize)||t.serialize;if(this.a){let s=!t||C(t.doc)||t.doc;var e=!t||C(t.index)||t.index;t=[];let n=0;if(e)for(e=this.a.keys;n<e.length;n++){let r=this.a.index[e[n]];t[n]=[r.i,r.h,Object.keys(r.c)]}s&&(t[n]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return i&&(t=JSON.stringify(t)),t},v.prototype.import=function(t,i){(!i||C(i.serialize)||i.serialize)&&(t=JSON.parse(t));let e=L();if(this.a){var s=!i||C(i.doc)||i.doc,n=0;if(!i||C(i.index)||i.index){i=this.a.keys;let h=i.length;for(var r=t[0][2];n<r.length;n++)e[r[n]]=1;for(n=0;n<h;n++){r=this.a.index[i[n]];let o=t[n];o&&(r.i=o[0],r.h=o[1],r.c=e)}}s&&(this.l=A(s)?s:t[n])}else{for(s=t[2],n=0;n<s.length;n++)e[s[n]]=1;this.i=t[0],this.h=t[1],this.c=e}};let vt=function(){let t=d("\\s+"),i=d("[^a-z0-9 ]"),e=[d("[-/]")," ",i,"",t," "];return function(s){return X(U(s.toLowerCase(),e))}}(),Y={icase:function(t){return t.toLowerCase()},simple:function(){let t=d("\\s+"),i=d("[^a-z0-9 ]"),e=d("[-/]"),s=d("[\xE0\xE1\xE2\xE3\xE4\xE5]"),n=d("[\xE8\xE9\xEA\xEB]"),r=d("[\xEC\xED\xEE\xEF]"),h=d("[\xF2\xF3\xF4\xF5\xF6\u0151]"),o=d("[\xF9\xFA\xFB\xFC\u0171]"),l=d("[\xFD\u0177\xFF]"),f=d("\xF1"),a=d("[\xE7c]"),c=d("\xDF"),u=d(" & "),y=[s,"a",n,"e",r,"i",h,"o",o,"u",l,"y",f,"n",a,"k",c,"s",u," and ",e," ",i,"",t," "];return function(p){return p=U(p.toLowerCase(),y),p===" "?"":p}}(),advanced:function(){let t=d("ae"),i=d("ai"),e=d("ay"),s=d("ey"),n=d("oe"),r=d("ue"),h=d("ie"),o=d("sz"),l=d("zs"),f=d("ck"),a=d("cc"),c=d("sh"),u=d("th"),y=d("dt"),p=d("ph"),E=d("pf"),j=d("ou"),_=d("uo"),g=[t,"a",i,"ei",e,"ei",s,"ei",n,"o",r,"u",h,"i",o,"s",l,"s",c,"s",f,"k",a,"k",u,"t",y,"t",p,"f",E,"f",j,"o",_,"u"];return function(m,w){return m&&(m=this.simple(m),2<m.length&&(m=U(m,g)),w||1<m.length&&(m=X(m)),m)}}(),extra:function(){let t=d("p"),i=d("z"),e=d("[cgq]"),s=d("n"),n=d("d"),r=d("[vw]"),h=d("[aeiouy]"),o=[t,"b",i,"s",e,"k",s,"m",n,"t",r,"f",h,""];return function(l){if(!l)return l;if(l=this.advanced(l,!0),1<l.length){l=l.split(" ");for(let f=0;f<l.length;f++){let a=l[f];1<a.length&&(l[f]=a[0]+U(a.substring(1),o))}l=l.join(" "),l=X(l)}return l}}(),balance:vt},mt=function(){function t(i){this.clear(),this.H=i!==!0&&i}return t.prototype.clear=function(){this.cache=L(),this.count=L(),this.index=L(),this.s=[]},t.prototype.set=function(i,e){if(this.H&&C(this.cache[i])){let s=this.s.length;if(s===this.H){s--;let n=this.s[s];delete this.cache[n],delete this.count[n],delete this.index[n]}this.index[i]=s,this.s[s]=i,this.count[i]=-1,this.cache[i]=e,this.get(i)}else this.cache[i]=e},t.prototype.get=function(i){let e=this.cache[i];if(this.H&&e){var s=++this.count[i];let r=this.index,h=r[i];if(0<h){let o=this.s;for(var n=h;this.count[o[--h]]<=s&&h!==-1;);if(h++,h!==n){for(s=n;s>h;s--)n=o[s-1],o[s]=n,r[n]=s;o[h]=i,r[i]=h}}}return e},t}();return v}(function(){let x={},O=typeof Blob!="undefined"&&typeof URL!="undefined"&&URL.createObjectURL;return function(v,B,G,N,T){return G=O?URL.createObjectURL(new Blob(["("+G.toString()+")()"],{type:"text/javascript"})):v+".min.js",v+="-"+B,x[v]||(x[v]=[]),x[v][T]=new Worker(G),x[v][T].onmessage=N,x[v][T]}}()),rt)}),ct="https://kaiiiz.github.io/hugo-theme-graytr/zh-tw/index.json",ot=Bt(dt());async function Mt(){let x=fetch(ct),O=document.getElementById("search_btn"),v=document.getElementById("search_menu_wrapper"),B=document.getElementById("search_menu_close_btn"),G=document.getElementById("search_menu_input"),N=document.getElementById("search_menu_results");O.addEventListener("click",function(){v.classList.remove("hidden"),v.classList.add("flex"),G.focus()}),B.addEventListener("click",function(){v.classList.add("hidden"),v.classList.remove("flex")});let T=await(await x).json(),Z=0,d={id:"id",field:["title","content"]},U=new ot.default({doc:d,profile:"score",cache:!0}),R=new ot.default({doc:d,encode:!1,tokenize:function(P){return P.replace(/[\x00-\x7F]/g,"").split("")},cache:!0});T.forEach(P=>{P.id=Z++,U.add(P),R.add(P)});let V=(P,k,J)=>{let M=document.createElement("div");M.className="search-menu-result-item";let I=document.createElement("a");I.href=k;let z=document.createElement("div");z.className="search-menu-result-item-title",z.innerHTML=P;let A=document.createElement("div");return A.className="search-menu-result-item-content",A.innerHTML=J,I.appendChild(z),I.appendChild(A),M.appendChild(I),M},X=()=>{for(;N.firstChild;)N.removeChild(N.lastChild)},$=()=>{X(),T.forEach(P=>{let k=V(P.title,P.permalink,P.content);N.appendChild(k)})},et=P=>{X();let k=U.search(P);k.length==0&&(k=R.search(P)),k.forEach(J=>{let M=V(J.title,J.permalink,J.content);N.appendChild(M)})};G.addEventListener("input",function(){this.value===""?$():et(this.value)}),$()}window.addEventListener("DOMContentLoaded",Mt);})();
