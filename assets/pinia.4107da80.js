import{I as H,r as J,B as k,i as Z,w as $,E as G,J as R,K as C,L as N,g as A,t as T,M as tt,N as et,x as st,O as nt,m as ot}from"./@vue.085a22c6.js";var ct=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let D;const L=t=>D=t,K=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function lt(){const t=H(!0),n=t.run(()=>J({}));let s=[],e=[];const c=k({install(u){L(c),c._a=u,u.provide(K,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!ct?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const M=()=>{};function B(t,n,s,e=M){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(c),c}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function x(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];O(c)&&O(e)&&t.hasOwnProperty(s)&&!R(e)&&!C(e)?t[s]=x(c,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!O(t)||!t.hasOwnProperty(rt)}const{assign:d}=Object;function ft(t){return!!(R(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function h(){f||(s.state.value[t]=c?c():{});const b=nt(s.state.value[t]);return d(b,u,Object.keys(a||{}).reduce((v,y)=>(v[y]=k(ot(()=>{L(s);const p=s._s.get(t);return a[y].call(p,p)})),v),{}))}return m=W(t,h,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},m}function W(t,n,s={},e,c,u){let a;const f=d({actions:{}},s),m={deep:!0};let h,b,v=k([]),y=k([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),J({});let F;function V(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:p}):(x(e.state.value[t],r),o={type:I.patchObject,payload:r,storeId:t,events:p});const S=F=Symbol();st().then(()=>{F===S&&(h=!0)}),b=!0,g(v,o,e.state.value[t])}const q=M;function z(){a.stop(),v=[],y=[],e._s.delete(t)}function Q(r,o){return function(){L(e);const S=Array.from(arguments),P=[],w=[];function X(i){P.push(i)}function Y(i){w.push(i)}g(y,{args:S,name:r,store:l,after:X,onError:Y});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(P,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(P,E),E)}}const U={_p:e,$id:t,$onAction:B.bind(null,y),$patch:V,$reset:q,$subscribe(r,o={}){const S=B(v,r,o.detached,()=>P()),P=a.run(()=>$(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:I.direct,events:p},w)},d({},m,o)));return S},$dispose:z},l=G(U);e._s.set(t,l);const j=e._e.run(()=>(a=H(),a.run(()=>n())));for(const r in j){const o=j[r];if(R(o)&&!ft(o)||C(o))u||(_&&ut(o)&&(R(o)?o.value=_[r]:x(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=Q(r,o);j[r]=S,f.actions[r]=o}}return d(l,j),d(N(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{V(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function ht(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const h=A();return f=f||h&&Z(K),f&&L(f),f=D,f._s.has(e)||(u?W(e,n,c,f):at(e,c,f)),f._s.get(e)}return a.$id=e,a}function bt(t){{t=N(t);const n={};for(const s in t){const e=t[s];(R(e)||C(e))&&(n[s]=T(t,s))}return n}}export{lt as c,ht as d,bt as s};
