import{c as s}from"./unhead@1.11.10-OT7iNT2x.js";import{d as a}from"./@unhead_shared@1.11.10-C1bv5ODb.js";import{n as u,v as c}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{u as i}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";const l=c[0]==="3";function f(e){return typeof e=="function"?e():i(e)}function r(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const n=f(e);if(!e||!n)return n;if(Array.isArray(n))return n.map(t=>r(t));if(typeof n=="object"){const t={};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(o==="titleTemplate"||o[0]==="o"&&o[1]==="n"){t[o]=i(n[o]);continue}t[o]=r(n[o])}return t}return n}const m=a({hooks:{"entries:resolve":e=>{for(const n of e.entries)n.resolvedInput=r(n.input)}}}),p="usehead";function d(e){return{install(t){l&&(t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(p,e))}}.install}function b(e={}){e.domDelayFn=e.domDelayFn||(t=>u(()=>setTimeout(()=>t(),0)));const n=s(e);return n.use(m),n.install=d(n),n}export{b as c};
