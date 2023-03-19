import{i as Z}from"./vue-demi@0.13.11_vue@3.2.47-71ba0ef2.js";import{m as I,r as B,j as G,w as D,i as k,b as O,t as J,g as $,v as A,o as T,x as tt}from"./@vue_reactivity@3.2.47-77826540.js";import{a as et,n as st,g as nt,i as ot,t as ct}from"./@vue_runtime-core@3.2.47-5055464e.js";/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let N;const L=t=>N=t,W=Symbol();function x(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var R;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(R||(R={}));function bt(){const t=D(!0),n=t.run(()=>B({}));let s=[],e=[];const r=I({install(u){L(r),r._a=u,u.provide(W,r),u.config.globalProperties.$pinia=r,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const q=()=>{};function H(t,n,s,e=q){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&$()&&T(r),r}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function C(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];x(r)&&x(e)&&t.hasOwnProperty(s)&&!k(e)&&!O(e)?t[s]=C(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!x(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function ft(t){return!!(k(t)&&t.effect)}function at(t,n,s,e){const{state:r,actions:u,getters:a}=n,f=s.state.value[t];let j;function b(){f||(s.state.value[t]=r?r():{});const y=tt(s.state.value[t]);return v(y,u,Object.keys(a||{}).reduce((m,d)=>(m[d]=I(ct(()=>{L(s);const p=s._s.get(t);return a[d].call(p,p)})),m),{}))}return j=z(t,b,n,s,e,!0),j}function z(t,n,s={},e,r,u){let a;const f=v({actions:{}},s),j={deep:!0};let b,y,m=I([]),d=I([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),B({});let F;function V(c){let o;b=y=!1,typeof c=="function"?(c(e.state.value[t]),o={type:R.patchFunction,storeId:t,events:p}):(C(e.state.value[t],c),o={type:R.patchObject,payload:c,storeId:t,events:p});const h=F=Symbol();st().then(()=>{F===h&&(b=!0)}),y=!0,g(m,o,e.state.value[t])}const K=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{v(S,h)})}:q;function M(){a.stop(),m=[],d=[],e._s.delete(t)}function Q(c,o){return function(){L(e);const h=Array.from(arguments),S=[],w=[];function X(i){S.push(i)}function Y(i){w.push(i)}g(d,{args:h,name:c,store:l,after:X,onError:Y});let E;try{E=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(S,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(S,E),E)}}const U={_p:e,$id:t,$onAction:H.bind(null,d),$patch:V,$reset:K,$subscribe(c,o={}){const h=H(m,c,o.detached,()=>S()),S=a.run(()=>et(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&c({storeId:t,type:R.direct,events:p},w)},v({},j,o)));return h},$dispose:M},l=G(U);e._s.set(t,l);const P=e._e.run(()=>(a=D(),a.run(()=>n())));for(const c in P){const o=P[c];if(k(o)&&!ft(o)||O(o))u||(_&&ut(o)&&(k(o)?o.value=_[c]:C(o,_[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);P[c]=h,f.actions[c]=o}}return v(l,P),v(J(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{V(o=>{v(o,c)})}}),e._p.forEach(c=>{v(l,a.run(()=>c({store:l,app:e._a,pinia:e,options:f})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),b=!0,y=!0,l}function vt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function a(f,j){const b=nt();return f=f||b&&ot(W,null),f&&L(f),f=N,f._s.has(e)||(u?z(e,n,r,f):at(e,r,f)),f._s.get(e)}return a.$id=e,a}function yt(t){{t=J(t);const n={};for(const s in t){const e=t[s];(k(e)||O(e))&&(n[s]=A(t,s))}return n}}export{bt as c,vt as d,yt as s};