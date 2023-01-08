import{H as I,r as B,a as Z,j as $,L as N,b as k,M as x,N as D,n as G,g as A,i as T,B as tt,f as et,h as st,O as nt,c as ot}from"./@vue-453cc9ea.js";var ct=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let J;const L=t=>J=t,M=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var R;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(R||(R={}));function lt(){const t=N(!0),n=t.run(()=>B({}));let s=[],e=[];const c=I({install(u){L(c),c._a=u,u.provide(M,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!ct?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const W=()=>{};function V(t,n,s,e=W){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function C(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];O(c)&&O(e)&&t.hasOwnProperty(s)&&!k(e)&&!x(e)?t[s]=C(c,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!O(t)||!t.hasOwnProperty(rt)}const{assign:d}=Object;function ft(t){return!!(k(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function h(){f||(s.state.value[t]=c?c():{});const b=nt(s.state.value[t]);return d(b,u,Object.keys(a||{}).reduce((v,y)=>(v[y]=I(ot(()=>{L(s);const p=s._s.get(t);return a[y].call(p,p)})),v),{}))}return m=q(t,h,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},m}function q(t,n,s={},e,c,u){let a;const f=d({actions:{}},s),m={deep:!0};let h,b,v=I([]),y=I([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),B({});let F;function H(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:R.patchFunction,storeId:t,events:p}):(C(e.state.value[t],r),o={type:R.patchObject,payload:r,storeId:t,events:p});const S=F=Symbol();G().then(()=>{F===S&&(h=!0)}),b=!0,j(v,o,e.state.value[t])}const z=W;function K(){a.stop(),v=[],y=[],e._s.delete(t)}function Q(r,o){return function(){L(e);const S=Array.from(arguments),P=[],w=[];function X(i){P.push(i)}function Y(i){w.push(i)}j(y,{args:S,name:r,store:l,after:X,onError:Y});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(P,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(P,E),E)}}const U={_p:e,$id:t,$onAction:V.bind(null,y),$patch:H,$reset:z,$subscribe(r,o={}){const S=V(v,r,o.detached,()=>P()),P=a.run(()=>Z(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:R.direct,events:p},w)},d({},m,o)));return S},$dispose:K},l=$(U);e._s.set(t,l);const g=e._e.run(()=>(a=N(),a.run(()=>n())));for(const r in g){const o=g[r];if(k(o)&&!ft(o)||x(o))u||(_&&ut(o)&&(k(o)?o.value=_[r]:C(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=Q(r,o);g[r]=S,f.actions[r]=o}}return d(l,g),d(D(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{H(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function ht(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const h=A();return f=f||h&&T(M,null),f&&L(f),f=J,f._s.has(e)||(u?q(e,n,c,f):at(e,c,f)),f._s.get(e)}return a.$id=e,a}function bt(t){{t=D(t);const n={};for(const s in t){const e=t[s];(k(e)||x(e))&&(n[s]=tt(t,s))}return n}}export{lt as c,ht as d,bt as s};