import{c as B,u as k,r as G,d as K,V as De}from"./@unhead.64cbe4d7.js";import{v as q,u as X,r as C,c as Y,d as Z,a as Q,s as ee}from"./@vue.90996980.js";function Ce(e){const r=B(),t={unhead:r,install(n){q.startsWith("3")&&(n.config.globalProperties.$head=r,n.provide("usehead",r))},use(n){r.use(n)},resolveTags(){return r.resolveTags()},headEntries(){return r.headEntries()},headTags(){return r.resolveTags()},push(n,a){return r.push(n,a)},addEntry(n,a){return r.push(n,a)},addHeadObjs(n,a){return r.push(n,a)},addReactiveEntry(n,a){const s=k(n,a);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,a){a?G(r,{document:n}):K(r,{delayFn:s=>setTimeout(()=>s(),50),document:n})},internalHooks:r.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return r.addHeadObjs=t.addHeadObjs,r.updateDOM=t.updateDOM,r.hooks.hook("dom:beforeRender",n=>{for(const a of t.hooks["before:dom"])a()===!1&&(n.shouldRender=!1)}),e&&t.addHeadObjs(e),t}var j;const _=typeof window<"u",re=e=>typeof e=="function",te=e=>typeof e=="string",ne=()=>{};_&&((j=window==null?void 0:window.navigator)==null?void 0:j.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function W(e){return typeof e=="function"?e():X(e)}function ae(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const M=e=>e();function oe(e=M){const r=C(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...s)=>{r.value&&e(...s)}}}function se(e){return e}function ie(e){return Y()?(Z(e),!0):!1}var $=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,fe=(e,r)=>{var t={};for(var n in e)ue.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&$)for(var n of $(e))r.indexOf(n)<0&&le.call(e,n)&&(t[n]=e[n]);return t};function de(e,r,t={}){const n=t,{eventFilter:a=M}=n,s=fe(n,["eventFilter"]);return Q(e,ae(a,r),s)}var ce=Object.defineProperty,pe=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?ce(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ve=(e,r)=>{for(var t in r||(r={}))V.call(r,t)&&N(e,t,r[t]);if(h)for(var t of h(r))x.call(r,t)&&N(e,t,r[t]);return e},ye=(e,r)=>pe(e,Oe(r)),_e=(e,r)=>{var t={};for(var n in e)V.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&h)for(var n of h(e))r.indexOf(n)<0&&x.call(e,n)&&(t[n]=e[n]);return t};function we(e,r,t={}){const n=t,{eventFilter:a}=n,s=_e(n,["eventFilter"]),{eventFilter:c,pause:v,resume:y,isActive:l}=oe(a);return{stop:de(e,r,ye(ve({},s),{eventFilter:c})),pause:v,resume:y,isActive:l}}function ge(e){var r;const t=W(e);return(r=t==null?void 0:t.$el)!=null?r:t}const b=_?window:void 0;_&&window.document;_&&window.navigator;_&&window.location;function he(...e){let r,t,n,a;if(te(e[0])||Array.isArray(e[0])?([t,n,a]=e,r=b):[r,t,n,a]=e,!r)return ne;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],c=()=>{s.forEach(i=>i()),s.length=0},v=(i,f,p)=>(i.addEventListener(f,p,a),()=>i.removeEventListener(f,p,a)),y=Q(()=>ge(r),i=>{c(),i&&s.push(...t.flatMap(f=>n.map(p=>v(i,f,p))))},{immediate:!0,flush:"post"}),l=()=>{y(),c()};return ie(l),l}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S="__vueuse_ssr_handlers__";P[S]=P[S]||{};const me=P[S];function be(e,r){return me[e]||r}function Pe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Se=Object.defineProperty,F=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,A=(e,r,t)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,H=(e,r)=>{for(var t in r||(r={}))Ee.call(r,t)&&A(e,t,r[t]);if(F)for(var t of F(r))Ie.call(r,t)&&A(e,t,r[t]);return e};const je={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Qe(e,r,t,n={}){var a;const{flush:s="pre",deep:c=!0,listenToStorageChanges:v=!0,writeDefaults:y=!0,mergeDefaults:l=!1,shallow:i,window:f=b,eventFilter:p,onError:m=o=>{console.error(o)}}=n,O=(i?ee:C)(r);if(!t)try{t=be("getDefaultStorage",()=>{var o;return(o=b)==null?void 0:o.localStorage})()}catch(o){m(o)}if(!t)return O;const d=W(r),E=Pe(d),w=(a=n.serializer)!=null?a:je[E],{pause:J,resume:L}=we(O,()=>z(O.value),{flush:s,deep:c,eventFilter:p});return f&&v&&he(f,"storage",I),I(),O;function z(o){try{o==null?t.removeItem(e):t.setItem(e,w.write(o))}catch(u){m(u)}}function U(o){J();try{const u=o?o.newValue:t.getItem(e);if(u==null)return y&&d!==null&&t.setItem(e,w.write(d)),d;if(!o&&l){const g=w.read(u);return re(l)?l(g,d):E==="object"&&!Array.isArray(g)?H(H({},d),g):g}else return typeof u!="string"?u:w.read(u)}catch(u){m(u)}finally{L()}}function I(o){if(!(o&&o.storageArea!==t)){if(o&&o.key===null){O.value=d;return}o&&o.key!==e||(O.value=U(o))}}}var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));var $e=Object.defineProperty,D=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?$e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ae=(e,r)=>{for(var t in r||(r={}))Ne.call(r,t)&&R(e,t,r[t]);if(D)for(var t of D(r))Fe.call(r,t)&&R(e,t,r[t]);return e};const He={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ae({linear:se},He);export{Ce as c,Qe as u};
