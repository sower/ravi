import{c as I,b as g}from"./@vue_runtime-dom@3.5.13-DfqiEize.js";import{c as v,a as E,b as P}from"./vue-router@4.5.0_vue@3.5.13_typescript@5.7.3_-C_dL1SOE.js";import{E as T,b as H}from"./@vue_runtime-core@3.5.13-Cb-Lzkic.js";import{q as L}from"./@vue_reactivity@3.5.13-DMa_mvt2.js";import{c as O}from"./@unhead_vue@1.11.19_vue@3.5.13_typescript@5.7.3_-biCGB3B5.js";function M(t){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(t))}):Promise.resolve(t)}const N=T({setup(t,{slots:e}){const o=L(!1);return H(()=>o.value=!0),()=>o.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function x(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}function W(t,e,o,R={}){const{transformState:s,registerComponents:y=!0,useHead:w=!0,rootContainer:h="#app",hydration:A=!1}=R,l=typeof window<"u";async function m(r=!1,c){const u=r&&!A?I(t):g(t);let d;w&&(d=O(),u.use(d));const i=v({history:r?E(e.base):P(e.base),...e}),{routes:_}=e;y&&u.component("ClientOnly",N);const f=[],n={app:u,head:d,isClient:l,router:i,routes:_,onSSRAppRendered:r?()=>{}:a=>f.push(a),triggerOnSSRAppRendered:()=>Promise.all(f.map(a=>a())),initialState:{},transformState:s,routePath:c};r&&(await M(),n.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||x(window.__INITIAL_STATE__)),await(o==null?void 0:o(n)),u.use(i);let p,S=!0;if(i.beforeEach((a,V,C)=>{(S||p&&p===a.path)&&(S=!1,p=a.path,a.meta.state=n.initialState),C()}),!r){const a=n.routePath??"/";i.push(a),await i.isReady(),n.initialState=i.currentRoute.value.meta.state||{}}const b=n.initialState;return{...n,initialState:b}}return l&&(async()=>{const{app:r,router:c}=await m(!0);await c.isReady(),r.mount(h,!0)})(),m}export{W as V};
