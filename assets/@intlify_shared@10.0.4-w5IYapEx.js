/*!
  * shared v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const d=typeof window<"u",h=(t,n=!1)=>n?Symbol.for(t):Symbol(t),j=(t,n,o)=>b({l:t,k:n,s:o}),b=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),w=t=>typeof t=="number"&&isFinite(t),O=t=>a(t)==="[object Date]",S=t=>a(t)==="[object RegExp]",m=t=>g(t)&&Object.keys(t).length===0,A=Object.assign;let l;const T=()=>l||(l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function E(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const y=Object.prototype.hasOwnProperty;function N(t,n){return y.call(t,n)}const p=Array.isArray,f=t=>typeof t=="function",P=t=>typeof t=="string",x=t=>typeof t=="boolean",r=t=>t!==null&&typeof t=="object",D=t=>r(t)&&f(t.then)&&f(t.catch),u=Object.prototype.toString,a=t=>u.call(t),g=t=>a(t)==="[object Object]",F=t=>t==null?"":p(t)||g(t)&&t.toString===u?JSON.stringify(t,null,2):String(t);function J(t,n=""){return t.reduce((o,e,c)=>c===0?o+e:o+n+e,"")}function q(t,n){typeof console<"u"&&(console.warn("[intlify] "+t),n&&console.warn(n.stack))}const i=t=>!r(t)||p(t);function B(t,n){if(i(t)||i(n))throw new Error("Invalid value");const o=[{src:t,des:n}];for(;o.length;){const{src:e,des:c}=o.pop();Object.keys(e).forEach(s=>{r(e[s])&&!r(c[s])&&(c[s]=Array.isArray(e[s])?[]:{}),i(c[s])||i(e[s])?c[s]=e[s]:o.push({src:e[s],des:c[s]})})}}export{P as a,p as b,g as c,A as d,x as e,S as f,T as g,r as h,f as i,m as j,O as k,w as l,E as m,j as n,D as o,J as p,h as q,d as r,B as s,F as t,N as u,q as w};
