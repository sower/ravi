import{q as c,x as d,j as L}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";import{m as x,p as v,g as S,a as H,q as b,o as T}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{o as m,a as p}from"./evtd@0.2.4-CI_DDEu_.js";function K(e){const t=c(!!e.value);if(t.value)return d(t);const n=x(e,i=>{i&&(t.value=!0,n())});return d(t)}function Q(e){const t=v(e),n=c(t.value);return x(t,i=>{n.value=i}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(i){e.set(i)}}}function B(){return S()!==null}const C=typeof window<"u";let k,y;const D=()=>{var e,t;k=C?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,y=!1,k!==void 0?k.then(()=>{y=!0}):y=!0};D();function z(e){if(y)return;let t=!1;H(()=>{y||k==null||k.then(()=>{t||e()})}),b(()=>{t=!0})}const h=c(null);function I(e){if(e.clientX>0||e.clientY>0)h.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:i,width:u,height:a}=t.getBoundingClientRect();n>0||i>0?h.value={x:n+u/2,y:i+a/2}:h.value={x:0,y:0}}else h.value=null}}let g=0,q=!0;function A(){if(!C)return d(c(null));g===0&&m("click",document,I,!0);const e=()=>{g+=1};return q&&(q=B())?(T(e),b(()=>{g-=1,g===0&&p("click",document,I,!0)})):e(),d(h)}const F=c(void 0);let M=0;function _(){F.value=Date.now()}let j=!0;function G(e){if(!C)return d(c(!1));const t=c(!1);let n=null;function i(){n!==null&&window.clearTimeout(n)}function u(){i(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}M===0&&m("click",window,_,!0);const a=()=>{M+=1,m("click",window,u,!0)};return j&&(j=B())?(T(a),b(()=>{M-=1,M===0&&p("click",window,_,!0),p("click",window,u,!0),i()})):a(),d(t)}function J(e,t){return x(e,n=>{n!==void 0&&(t.value=n)}),v(()=>e.value===void 0?t.value:e.value)}function O(){const e=c(!1);return H(()=>{e.value=!0}),d(e)}function W(e,t){return v(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const R=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Z(){return R}const $={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function U(e){return`(min-width: ${e}px)`}const w={};function N(e=$){if(!C)return v(()=>[]);if(typeof window.matchMedia!="function")return v(()=>[]);const t=c({}),n=Object.keys(e),i=(u,a)=>{u.matches?t.value[a]=!0:t.value[a]=!1};return n.forEach(u=>{const a=e[u];let s,r;w[a]===void 0?(s=window.matchMedia(U(a)),s.addEventListener?s.addEventListener("change",o=>{r.forEach(f=>{f(o,u)})}):s.addListener&&s.addListener(o=>{r.forEach(f=>{f(o,u)})}),r=new Set,w[a]={mql:s,cbs:r}):(s=w[a].mql,r=w[a].cbs),r.add(i),s.matches&&r.forEach(o=>{o(s,u)})}),b(()=>{n.forEach(u=>{const{cbs:a}=w[e[u]];a.has(i)&&a.delete(i)})}),v(()=>{const{value:u}=t;return n.filter(a=>u[a])})}function ee(e={},t){const n=L({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:u}=e,a=o=>{switch(o.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}i!==void 0&&Object.keys(i).forEach(f=>{if(f!==o.key)return;const l=i[f];if(typeof l=="function")l(o);else{const{stop:E=!1,prevent:P=!1}=l;E&&o.stopPropagation(),P&&o.preventDefault(),l.handler(o)}})},s=o=>{switch(o.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}u!==void 0&&Object.keys(u).forEach(f=>{if(f!==o.key)return;const l=u[f];if(typeof l=="function")l(o);else{const{stop:E=!1,prevent:P=!1}=l;E&&o.stopPropagation(),P&&o.preventDefault(),l.handler(o)}})},r=()=>{(t===void 0||t.value)&&(m("keydown",document,a),m("keyup",document,s)),t!==void 0&&x(t,o=>{o?(m("keydown",document,a),m("keyup",document,s)):(p("keydown",document,a),p("keyup",document,s))})};return B()?(T(r),b(()=>{(t===void 0||t.value)&&(p("keydown",document,a),p("keyup",document,s))})):r(),d(n)}export{Z as a,J as b,W as c,ee as d,G as e,A as f,N as g,K as h,O as i,z as o,Q as u};