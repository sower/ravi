import{t as _,w as q,a as H,b as U,i as I,c as $,n as L,d as G,e as Q,f as V,g as X}from"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.6.3_-CVk0eC74.js";import{o as Y,q as j,j as W}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";import{n as Z,m as J,p as P,a as ee,g as te}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";const N=I?window:void 0,ne=I?window.document:void 0;function R(e){var n;const t=_(e);return(n=t==null?void 0:t.$el)!=null?n:t}function b(...e){let n,t,l,y;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,l,y]=e,n=N):[n,t,l,y]=e,!n)return L;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const i=[],p=()=>{i.forEach(s=>s()),i.length=0},w=(s,a,m,r)=>(s.addEventListener(a,m,r),()=>s.removeEventListener(a,m,r)),f=J(()=>[R(n),_(y)],([s,a])=>{if(p(),!s)return;const m=G(a)?{...a}:a;i.push(...t.flatMap(r=>l.map(v=>w(s,r,v,m))))},{immediate:!0,flush:"post"}),d=()=>{f(),p()};return V(d),d}let z=!1;function pe(e,n,t={}){const{window:l=N,ignore:y=[],capture:i=!0,detectIframe:p=!1}=t;if(!l)return L;X&&!z&&(z=!0,Array.from(l.document.body.children).forEach(r=>r.addEventListener("click",L)),l.document.documentElement.addEventListener("click",L));let w=!0;const f=r=>_(y).some(v=>{if(typeof v=="string")return Array.from(l.document.querySelectorAll(v)).some(o=>o===r.target||r.composedPath().includes(o));{const o=R(v);return o&&(r.target===o||r.composedPath().includes(o))}}),d=r=>{const v=R(e);if(!(!v||v===r.target||r.composedPath().includes(v))){if(r.detail===0&&(w=!f(r)),!w){w=!0;return}n(r)}};let s=!1;const a=[b(l,"click",r=>{s||(s=!0,setTimeout(()=>{s=!1},0),d(r))},{passive:!0,capture:i}),b(l,"pointerdown",r=>{const v=R(e);w=!f(r)&&!!(v&&!r.composedPath().includes(v))},{passive:!0}),p&&b(l,"blur",r=>{setTimeout(()=>{var v;const o=R(e);((v=l.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(o!=null&&o.contains(l.document.activeElement))&&n(r)},0)})].filter(Boolean);return()=>a.forEach(r=>r())}function re(){const e=j(!1),n=te();return n&&ee(()=>{e.value=!0},n),e}function oe(e){const n=re();return P(()=>(n.value,!!e()))}function x(e,n,t={}){const{window:l=N,...y}=t;let i;const p=oe(()=>l&&"MutationObserver"in l),w=()=>{i&&(i.disconnect(),i=void 0)},f=P(()=>{const m=_(e),r=(Array.isArray(m)?m:[m]).map(R).filter(Q);return new Set(r)}),d=J(()=>f.value,m=>{w(),p.value&&m.size&&(i=new MutationObserver(n),m.forEach(r=>i.observe(r,y)))},{immediate:!0,flush:"post"}),s=()=>i==null?void 0:i.takeRecords(),a=()=>{d(),w()};return V(a),{isSupported:p,stop:a,takeRecords:s}}function ve(e={}){var n;const{window:t=N,deep:l=!0,triggerOnRemoval:y=!1}=e,i=(n=e.document)!=null?n:t==null?void 0:t.document,p=()=>{var d;let s=i==null?void 0:i.activeElement;if(l)for(;s!=null&&s.shadowRoot;)s=(d=s==null?void 0:s.shadowRoot)==null?void 0:d.activeElement;return s},w=j(),f=()=>{w.value=p()};return t&&(b(t,"blur",d=>{d.relatedTarget===null&&f()},!0),b(t,"focus",f,!0)),y&&x(i,d=>{d.filter(s=>s.removedNodes.length).map(s=>Array.from(s.removedNodes)).flat().forEach(s=>{s===w.value&&f()})},{childList:!0,subtree:!0}),f(),w}const D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k="__vueuse_ssr_handlers__",ie=se();function se(){return k in D||(D[k]=D[k]||{}),D[k]}function ae(e,n){return ie[e]||n}function le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ue={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},F="vueuse-storage";function we(e,n,t,l={}){var y;const{flush:i="pre",deep:p=!0,listenToStorageChanges:w=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:s,window:a=N,eventFilter:m,onError:r=c=>{console.error(c)},initOnMounted:v}=l,o=(s?Y:j)(typeof n=="function"?n():n);if(!t)try{t=ae("getDefaultStorage",()=>{var c;return(c=N)==null?void 0:c.localStorage})()}catch(c){r(c)}if(!t)return o;const u=_(n),O=le(u),h=(y=l.serializer)!=null?y:ue[O],{pause:E,resume:M}=q(o,()=>A(o.value),{flush:i,deep:p,eventFilter:m});a&&w&&H(()=>{t instanceof Storage?b(a,"storage",T):b(a,F,K),v&&T()}),v||T();function C(c,g){if(a){const S={key:e,oldValue:c,newValue:g,storageArea:t};a.dispatchEvent(t instanceof Storage?new StorageEvent("storage",S):new CustomEvent(F,{detail:S}))}}function A(c){try{const g=t.getItem(e);if(c==null)C(g,null),t.removeItem(e);else{const S=h.write(c);g!==S&&(t.setItem(e,S),C(g,S))}}catch(g){r(g)}}function B(c){const g=c?c.newValue:t.getItem(e);if(g==null)return f&&u!=null&&t.setItem(e,h.write(u)),u;if(!c&&d){const S=h.read(g);return typeof d=="function"?d(S,u):O==="object"&&!Array.isArray(S)?{...u,...S}:S}else return typeof g!="string"?g:h.read(g)}function T(c){if(!(c&&c.storageArea!==t)){if(c&&c.key==null){o.value=u;return}if(!(c&&c.key!==e)){E();try{(c==null?void 0:c.newValue)!==h.write(o.value)&&(o.value=B(c))}catch(g){r(g)}finally{c?Z(M):M()}}}}function K(c){T(c.detail)}return o}const ce={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ye(e={}){const{reactive:n=!1,target:t=N,aliasMap:l=ce,passive:y=!0,onEventFired:i=L}=e,p=W(new Set),w={toJSON(){return{}},current:p},f=n?W(w):w,d=new Set,s=new Set;function a(o,u){o in f&&(n?f[o]=u:f[o].value=u)}function m(){p.clear();for(const o of s)a(o,!1)}function r(o,u){var O,h;const E=(O=o.key)==null?void 0:O.toLowerCase(),C=[(h=o.code)==null?void 0:h.toLowerCase(),E].filter(Boolean);E&&(u?p.add(E):p.delete(E));for(const A of C)s.add(A),a(A,u);E==="meta"&&!u?(d.forEach(A=>{p.delete(A),a(A,!1)}),d.clear()):typeof o.getModifierState=="function"&&o.getModifierState("Meta")&&u&&[...p,...C].forEach(A=>d.add(A))}b(t,"keydown",o=>(r(o,!0),i(o)),{passive:y}),b(t,"keyup",o=>(r(o,!1),i(o)),{passive:y}),b("blur",m,{passive:!0}),b("focus",m,{passive:!0});const v=new Proxy(f,{get(o,u,O){if(typeof u!="string")return Reflect.get(o,u,O);if(u=u.toLowerCase(),u in l&&(u=l[u]),!(u in f))if(/[+_-]/.test(u)){const E=u.split(/[+_-]/g).map(M=>M.trim());f[u]=P(()=>E.every(M=>_(v[M])))}else f[u]=j(!1);const h=Reflect.get(o,u,O);return n?_(h):h}});return v}function ge(e=null,n={}){var t,l,y;const{document:i=ne,restoreOnUnmount:p=a=>a}=n,w=(t=i==null?void 0:i.title)!=null?t:"",f=U((l=e??(i==null?void 0:i.title))!=null?l:null),d=e&&typeof e=="function";function s(a){if(!("titleTemplate"in n))return a;const m=n.titleTemplate||"%s";return typeof m=="function"?m(a):_(m).replace(/%s/g,a)}return J(f,(a,m)=>{a!==m&&i&&(i.title=s(typeof a=="string"?a:""))},{immediate:!0}),n.observe&&!n.titleTemplate&&i&&!d&&x((y=i.head)==null?void 0:y.querySelector("title"),()=>{i&&i.title!==f.value&&(f.value=s(i.title))},{childList:!0}),$(()=>{if(p){const a=p(w,f.value||"");a!=null&&i&&(i.title=a)}}),f}export{we as a,ve as b,ye as c,pe as o,ge as u};
