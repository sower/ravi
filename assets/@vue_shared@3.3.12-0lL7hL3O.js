function m(t,e){const n=Object.create(null),o=t.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const M={},P=[],U=()=>{},V=()=>!1,F=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$=t=>t.startsWith("onUpdate:"),x=Object.assign,D=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},b=Object.prototype.hasOwnProperty,I=(t,e)=>b.call(t,e),f=Array.isArray,S=t=>l(t)==="[object Map]",O=t=>l(t)==="[object Set]",a=t=>typeof t=="function",r=t=>typeof t=="string",g=t=>typeof t=="symbol",i=t=>t!==null&&typeof t=="object",J=t=>(i(t)||a(t))&&a(t.then)&&a(t.catch),h=Object.prototype.toString,l=t=>h.call(t),L=t=>l(t).slice(8,-1),j=t=>l(t)==="[object Object]",G=t=>r(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,H=m(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),p=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},A=/-(\w)/g,K=p(t=>t.replace(A,(e,n)=>n?n.toUpperCase():"")),N=/\B([A-Z])/g,Y=p(t=>t.replace(N,"-$1").toLowerCase()),w=p(t=>t.charAt(0).toUpperCase()+t.slice(1)),q=p(t=>t?`on${w(t)}`:""),W=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Q=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},X=t=>{const e=parseFloat(t);return isNaN(e)?t:e},k=t=>{const e=r(t)?Number(t):NaN;return isNaN(e)?t:e};let d;const v=()=>d||(d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function C(t){if(f(t)){const e={};for(let n=0;n<t.length;n++){const o=t[n],s=r(o)?_(o):C(o);if(s)for(const c in s)e[c]=s[c]}return e}else if(r(t)||i(t))return t}const z=/;(?![^(]*\))/g,R=/:([^]+)/,T=/\/\*[^]*?\*\//g;function _(t){const e={};return t.replace(T,"").split(z).forEach(n=>{if(n){const o=n.split(R);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function B(t){let e="";if(r(t))e=t;else if(f(t))for(let n=0;n<t.length;n++){const o=B(t[n]);o&&(e+=o+" ")}else if(i(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tt=m(E);function et(t){return!!t||t===""}const nt=t=>r(t)?t:t==null?"":f(t)||i(t)&&(t.toString===h||!a(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):S(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[o,s],c)=>(n[u(o,c)+" =>"]=s,n),{})}:O(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>u(n))}:g(e)?u(e):i(e)&&!f(e)&&!j(e)?String(e):e,u=(t,e="")=>{var n;return g(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};export{X as A,q as B,Y as C,V as D,M as E,$ as F,k as G,tt as H,et as I,nt as J,U as N,i as a,a as b,f as c,Q as d,G as e,I as f,S as g,W as h,g as i,x as j,v as k,K as l,m,w as n,r as o,B as p,C as q,F as r,D as s,L as t,O as u,j as v,P as w,J as x,H as y,Z as z};
