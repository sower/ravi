import{p as b,r as I,d as P,P as g,Q as v}from"./@vue-453cc9ea.js";import{c as T,a as E,b as H}from"./vue-router-3ad27e74.js";import{c as L}from"./@vueuse-aeb3fbf1.js";function O(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}function M(t){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(t))}):Promise.resolve(t)}const N=b({setup(t,{slots:e}){const o=I(!1);return P(()=>o.value=!0),()=>o.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function F(t,e,o,R={}){const{transformState:s,registerComponents:y=!0,useHead:w=!0,rootContainer:h="#app"}=R,l=typeof window<"u";async function S(r=!1,d){const u=r?g(t):v(t);let c;w&&(c=L(),u.use(c));const i=T({history:r?E(e.base):H(e.base),...e}),{routes:A}=e;y&&u.component("ClientOnly",N);const f=[],n={app:u,head:c,isClient:l,router:i,routes:A,onSSRAppRendered:r?()=>{}:a=>f.push(a),triggerOnSSRAppRendered:()=>Promise.all(f.map(a=>a())),initialState:{},transformState:s,routePath:d};r&&(await M(),n.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||O(window.__INITIAL_STATE__)),await(o==null?void 0:o(n)),u.use(i);let p,m=!0;if(i.beforeEach((a,G,C)=>{(m||p&&p===a.path)&&(m=!1,p=a.path,a.meta.state=n.initialState),C()}),!r){const a=n.routePath??"/";i.push(a),await i.isReady(),n.initialState=i.currentRoute.value.meta.state||{}}const _=n.initialState;return{...n,initialState:_}}return l&&(async()=>{const{app:r,router:d}=await S(!0);await d.isReady(),r.mount(h,!0)})(),S}export{F as V};
