import{c as Y,u as Z,r as ee,d as te,V as We}from"./@unhead.9d9441d6.js";import{v as re,a as A,u as R,r as F,c as ne,d as ae,e as oe,s as se,f as C,h as ie}from"./@vue.8936e839.js";function Le(e){const t=Y(),r={unhead:t,install(n){re.startsWith("3")&&(n.config.globalProperties.$head=t,n.provide("usehead",t))},use(n){t.use(n)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(n,a){return t.push(n,a)},addEntry(n,a){return t.push(n,a)},addHeadObjs(n,a){return t.push(n,a)},addReactiveEntry(n,a){const s=Z(n,a);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,a){a?ee(t,{document:n}):te(t,{delayFn:s=>setTimeout(()=>s(),50),document:n})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=r.addHeadObjs,t.updateDOM=r.updateDOM,t.hooks.hook("dom:beforeRender",n=>{for(const a of r.hooks["before:dom"])a()===!1&&(n.shouldRender=!1)}),e&&r.addHeadObjs(e),r}var H;const z=typeof window<"u",M=e=>typeof e=="function",ue=e=>typeof e=="string",K=()=>{};z&&((H=window==null?void 0:window.navigator)==null?void 0:H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function U(e){return typeof e=="function"?e():R(e)}function le(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const G=e=>e();function ce(e=G){const t=F(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...s)=>{t.value&&e(...s)}}}function fe(e){return e}function de(e,t){let r,n,a;const s=F(!0),p=()=>{s.value=!0,a()};A(e,p,{flush:"sync"});const y=M(t)?t:t.get,f=M(t)?void 0:t.set,d=ne((v,m)=>(n=v,a=m,{get(){return s.value&&(r=y(),s.value=!1),n(),r},set(O){f==null||f(O)}}));return Object.isExtensible(d)&&(d.trigger=p),d}function pe(e){return ae()?(oe(e),!0):!1}var k=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,ye=(e,t)=>{var r={};for(var n in e)ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&k)for(var n of k(e))t.indexOf(n)<0&&me.call(e,n)&&(r[n]=e[n]);return r};function Oe(e,t,r={}){const n=r,{eventFilter:a=G}=n,s=ye(n,["eventFilter"]);return A(e,le(a,t),s)}var ge=Object.defineProperty,we=Object.defineProperties,he=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t)=>{for(var r in t||(t={}))q.call(t,r)&&W(e,r,t[r]);if(N)for(var r of N(t))X.call(t,r)&&W(e,r,t[r]);return e},be=(e,t)=>we(e,he(t)),Pe=(e,t)=>{var r={};for(var n in e)q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&N)for(var n of N(e))t.indexOf(n)<0&&X.call(e,n)&&(r[n]=e[n]);return r};function Se(e,t,r={}){const n=r,{eventFilter:a}=n,s=Pe(n,["eventFilter"]),{eventFilter:p,pause:y,resume:f,isActive:d}=ce(a);return{stop:Oe(e,t,be(_e({},s),{eventFilter:p})),pause:y,resume:f,isActive:d}}function Qe(e,t,r){return A(e,(n,a,s)=>{n&&t(n,a,s)},r)}function I(e){var t;const r=U(e);return(t=r==null?void 0:r.$el)!=null?t:r}const E=z?window:void 0;function g(...e){let t,r,n,a;if(ue(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=E):[t,r,n,a]=e,!t)return K;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],p=()=>{s.forEach(v=>v()),s.length=0},y=(v,m,O)=>(v.addEventListener(m,O,a),()=>v.removeEventListener(m,O,a)),f=A(()=>I(t),v=>{p(),v&&s.push(...r.flatMap(m=>n.map(O=>y(v,m,O))))},{immediate:!0,flush:"post"}),d=()=>{f(),p()};return pe(d),d}function Je(e,t,r={}){const{window:n=E,ignore:a,capture:s=!0,detectIframe:p=!1}=r;if(!n)return;let y=!0,f;const d=i=>{n.clearTimeout(f);const l=I(e);if(!(!l||l===i.target||i.composedPath().includes(l))){if(!y){y=!0;return}t(i)}},v=i=>a&&a.some(l=>{const o=I(l);return o&&(i.target===o||i.composedPath().includes(o))}),m=[g(n,"click",d,{passive:!0,capture:s}),g(n,"pointerdown",i=>{const l=I(e);l&&(y=!i.composedPath().includes(l)&&!v(i))},{passive:!0}),g(n,"pointerup",i=>{if(i.button===0){const l=i.composedPath();i.composedPath=()=>l,f=n.setTimeout(()=>d(i),50)}},{passive:!0}),p&&g(n,"blur",i=>{var l;const o=I(e);((l=n.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(o!=null&&o.contains(n.document.activeElement))&&t(i)})].filter(Boolean);return()=>m.forEach(i=>i())}function Ve(e={}){const{window:t=E}=e,r=de(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(g(t,"blur",r.trigger,!0),g(t,"focus",r.trigger,!0)),r}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__";T[D]=T[D]||{};const Ee=T[D];function Ie(e,t){return Ee[e]||t}function je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var $e=Object.defineProperty,x=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&L(e,r,t[r]);if(x)for(var r of x(t))Ae.call(t,r)&&L(e,r,t[r]);return e};const Fe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Be(e,t,r,n={}){var a;const{flush:s="pre",deep:p=!0,listenToStorageChanges:y=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:v,window:m=E,eventFilter:O,onError:i=c=>{console.error(c)}}=n,l=(v?se:F)(t);if(!r)try{r=Ie("getDefaultStorage",()=>{var c;return(c=E)==null?void 0:c.localStorage})()}catch(c){i(c)}if(!r)return l;const o=U(t),u=je(o),w=(a=n.serializer)!=null?a:Fe[u],{pause:P,resume:_}=Se(l,()=>S(l.value),{flush:s,deep:p,eventFilter:O});return m&&y&&g(m,"storage",h),h(),l;function S(c){try{c==null?r.removeItem(e):r.setItem(e,w.write(c))}catch(b){i(b)}}function j(c){P();try{const b=c?c.newValue:r.getItem(e);if(b==null)return f&&o!==null&&r.setItem(e,w.write(o)),o;if(!c&&d){const $=w.read(b);return M(d)?d($,o):u==="object"&&!Array.isArray($)?Q(Q({},o),$):$}else return typeof b!="string"?b:w.read(b)}catch(b){i(b)}finally{_()}}function h(c){if(!(c&&c.storageArea!==r)){if(c&&c.key===null){l.value=o;return}c&&c.key!==e||(l.value=j(c))}}}const Re={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ze(e={}){const{reactive:t=!1,target:r=E,aliasMap:n=Re,passive:a=!0,onEventFired:s=K}=e,p=C(new Set),y={toJSON(){return{}},current:p},f=t?C(y):y,d=new Set,v=new Set;function m(o,u){o in f&&(t?f[o]=u:f[o].value=u)}function O(){for(const o of v)m(o,!1)}function i(o,u){var w,P;const _=(w=o.key)==null?void 0:w.toLowerCase(),j=[(P=o.code)==null?void 0:P.toLowerCase(),_].filter(Boolean);_&&(u?p.add(_):p.delete(_));for(const h of j)v.add(h),m(h,u);_==="meta"&&!u?(d.forEach(h=>{p.delete(h),m(h,!1)}),d.clear()):typeof o.getModifierState=="function"&&o.getModifierState("Meta")&&u&&[...p,...j].forEach(h=>d.add(h))}g(r,"keydown",o=>(i(o,!0),s(o)),{passive:a}),g(r,"keyup",o=>(i(o,!1),s(o)),{passive:a}),g("blur",O,{passive:!0}),g("focus",O,{passive:!0});const l=new Proxy(f,{get(o,u,w){if(typeof u!="string")return Reflect.get(o,u,w);if(u=u.toLowerCase(),u in n&&(u=n[u]),!(u in f))if(/[+_-]/.test(u)){const _=u.split(/[+_-]/g).map(S=>S.trim());f[u]=ie(()=>_.every(S=>R(l[S])))}else f[u]=F(!1);const P=Reflect.get(o,u,w);return t?R(P):P}});return l}var J;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(J||(J={}));var Me=Object.defineProperty,V=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ce=(e,t)=>{for(var r in t||(t={}))Te.call(t,r)&&B(e,r,t[r]);if(V)for(var r of V(t))De.call(t,r)&&B(e,r,t[r]);return e};const He={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ce({linear:fe},He);export{ze as a,Be as b,Le as c,Je as o,Ve as u,Qe as w};
