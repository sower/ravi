function d(t,e){const n=Object.create(null),o=t.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function y(t){if(c(t)){const e={};for(let n=0;n<t.length;n++){const o=t[n],s=r(o)?S(o):y(o);if(s)for(const p in s)e[p]=s[p]}return e}else{if(r(t))return t;if(i(t))return t}}const b=/;(?![^(]*\))/g,h=/:([^]+)/,O=/\/\*.*?\*\//gs;function S(t){const e={};return t.replace(O,"").split(b).forEach(n=>{if(n){const o=n.split(h);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function j(t){let e="";if(r(t))e=t;else if(c(t))for(let n=0;n<t.length;n++){const o=j(t[n]);o&&(e+=o+" ")}else if(i(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P=d(N);function _(t){return!!t||t===""}const C=t=>r(t)?t:t==null?"":c(t)||i(t)&&(t.toString===m||!l(t.toString))?JSON.stringify(t,g,2):String(t),g=(t,e)=>e&&e.__v_isRef?g(t,e.value):A(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:i(e)&&!c(e)&&!E(e)?String(e):e,U={},V=[],F=()=>{},$=()=>!1,w=/^on[^a-z]/,x=t=>w.test(t),D=t=>t.startsWith("onUpdate:"),I=Object.assign,J=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z=Object.prototype.hasOwnProperty,L=(t,e)=>z.call(t,e),c=Array.isArray,A=t=>a(t)==="[object Map]",R=t=>a(t)==="[object Set]",l=t=>typeof t=="function",r=t=>typeof t=="string",k=t=>typeof t=="symbol",i=t=>t!==null&&typeof t=="object",G=t=>i(t)&&l(t.then)&&l(t.catch),m=Object.prototype.toString,a=t=>m.call(t),H=t=>a(t).slice(8,-1),E=t=>a(t)==="[object Object]",K=t=>r(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Y=d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),f=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},T=/-(\w)/g,q=f(t=>t.replace(T,(e,n)=>n?n.toUpperCase():"")),B=/\B([A-Z])/g,W=f(t=>t.replace(B,"-$1").toLowerCase()),M=f(t=>t.charAt(0).toUpperCase()+t.slice(1)),Z=f(t=>t?`on${M(t)}`:""),Q=(t,e)=>!Object.is(t,e),X=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},v=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},tt=t=>{const e=parseFloat(t);return isNaN(e)?t:e},et=t=>{const e=r(t)?Number(t):NaN;return isNaN(e)?t:e};let u;const nt=()=>u||(u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});export{tt as A,Z as B,W as C,$ as D,U as E,D as F,et as G,P as H,_ as I,C as J,F as N,c as a,l as b,A as c,v as d,K as e,L as f,k as g,Q as h,i,I as j,R as k,E as l,d as m,r as n,j as o,y as p,x as q,J as r,G as s,H as t,nt as u,V as v,q as w,M as x,Y as y,X as z};
