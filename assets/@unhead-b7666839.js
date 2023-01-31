import{c as U}from"./hookable-48cbdad6.js";import{n as K,g as I,i as W,r as F,w as N,a as B,o as q,u as j,b as V,v as J}from"./@vue-c2cdc001.js";const Q=["script","style","noscript"],z=["base","meta","link","style","script","noscript"],G=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function X(e,n){const{props:t,tag:r}=e;if(G.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof t[i]<"u"){const d=String(t[i]);return n&&!n(d)?!1:`${r}:${i}:${d}`}return!1}const v=(e,n)=>{const{tag:t,$el:r}=e;r&&(Object.entries(t.props).forEach(([s,i])=>{i=String(i);const d=`attr:${s}`;if(s==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${d}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!s.startsWith("data-h-")&&n(e,d,()=>r.removeAttribute(s)),r.getAttribute(s)!==i&&r.setAttribute(s,i)}),Q.includes(t.tag)&&r.innerHTML!==(t.children||"")&&(r.innerHTML=t.children||""))};function P(e){let n=9;for(let t=0;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function R(e,n={}){var h,m;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=n.document||window.document,s=e._popSideEffectQueue();e.headEntries().map(a=>a._sde).forEach(a=>{Object.entries(a).forEach(([o,l])=>{s[o]=l})});const i=async a=>{const o=e.headEntries().find(b=>b._i===a._e),l={renderId:a._d||P(JSON.stringify({...a,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:a,entry:o,staleSideEffects:s};return await e.hooks.callHook("dom:beforeRenderTag",l),l},d=[],c={body:[],head:[]},u=(a,o,l)=>{o=`${a.renderId}:${o}`,a.entry&&(a.entry._sde[o]=l),delete s[o]},p=a=>{e._elMap[a.renderId]=a.$el,d.push(a),u(a,"el",()=>{var o;(o=a.$el)==null||o.remove(),delete e._elMap[a.renderId]})};for(const a of await e.resolveTags()){const o=await i(a);if(!o.shouldRender)continue;const{tag:l}=o;if(l.tag==="title"){r.title=l.children||"",d.push(o);continue}if(l.tag==="htmlAttrs"||l.tag==="bodyAttrs"){o.$el=r[l.tag==="htmlAttrs"?"documentElement":"body"],v(o,u),d.push(o);continue}if(o.$el=e._elMap[o.renderId],!o.$el&&l._hash&&(o.$el=r.querySelector(`${(h=l.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${l.tag}[data-h-${l._hash}]`)),o.$el){o.tag._d&&v(o),p(o);continue}o.$el=r.createElement(l.tag),v(o),c[(m=l.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(o)}Object.entries(c).forEach(([a,o])=>{var b;if(!o.length)return;const l=(b=r==null?void 0:r[a])==null?void 0:b.children;if(l){for(const f of[...l].reverse()){const _=f.tagName.toLowerCase();if(!z.includes(_))continue;const A=X({tag:_,props:f.getAttributeNames().reduce((y,g)=>({...y,[g]:f.getAttribute(g)}),{})}),$=o.findIndex(y=>{var g;return y&&(y.tag._d===A||((g=f.isEqualNode)==null?void 0:g.call(f,y.$el)))});if($!==-1){const y=o[$];y.$el=f,v(y),p(y),delete o[$]}}o.forEach(f=>{if(f.$el){switch(f.tag.tagPosition){case"bodyClose":r.body.appendChild(f.$el);break;case"bodyOpen":r.body.insertBefore(f.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(f.$el);break}p(f)}})}});for(const a of d)await e.hooks.callHook("dom:renderTag",a);Object.values(s).forEach(a=>a())}let w=null;async function Y(e,n={}){function t(){return w=null,R(e,n)}const r=n.delayFn||(s=>setTimeout(s,10));return w=w||new Promise(s=>r(()=>s(t())))}const Z={__proto__:null,debouncedRenderDOMHead:Y,get domUpdatePromise(){return w},hashCode:P,renderDOMHead:R},x=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],ee=["tagPosition","tagPriority","tagDuplicateStrategy"];async function te(e,n){const t={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(t.children=n instanceof Promise?await n:n,t):(t.props=await re({...n}),["children","innerHtml","innerHTML"].forEach(r=>{typeof t.props[r]<"u"&&(t.children=t.props[r],typeof t.children=="object"&&(t.children=JSON.stringify(t.children)),delete t.props[r])}),Object.keys(t.props).filter(r=>ee.includes(r)).forEach(r=>{t[r]=t.props[r],delete t.props[r]}),typeof t.props.class=="object"&&!Array.isArray(t.props.class)&&(t.props.class=Object.keys(t.props.class).filter(r=>t.props.class[r])),Array.isArray(t.props.class)&&(t.props.class=t.props.class.join(" ")),t.props.content&&Array.isArray(t.props.content)?t.props.content.map((r,s)=>{const i={...t,props:{...t.props}};return i.props.content=r,i.key=`${t.props.name||t.props.property}:${s}`,i}):t)}async function re(e){for(const n of Object.keys(e))e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]="":String(e[n])==="false"&&delete e[n];return e}const S=e=>{if(typeof e.tagPriority=="number")return e.tagPriority;switch(e.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(e.tag){case"base":return-1;case"title":return 1;case"meta":return e.props.charset?-2:e.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},ne=(e,n)=>S(e)-S(n),se=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function oe(e,n){const{props:t,tag:r}=e;if(se.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof t[i]<"u"){const d=String(t[i]);return n&&!n(d)?!1:`${r}:${i}:${d}`}return!1}const k=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e.replace("%s",n??"");function ie(e){let n=e.findIndex(r=>r.tag==="titleTemplate");const t=e.findIndex(r=>r.tag==="title");if(t!==-1&&n!==-1){const r=k(e[n].children,e[t].children);r!==null?e[t].children=r||e[t].children:delete e[t]}else if(n!==-1){const r=k(e[n].children);r!==null&&(e[n].children=r,e[n].tag="title",n=-1)}return n!==-1&&delete e[n],e.filter(Boolean)}const ae=e=>{e=e||{};const n=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){n.forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const r=t.key?`${t.tag}:${t.key}`:oe(t);r&&(t._d=r)},"tags:resolve":function(t){const r={};t.tags.forEach(s=>{let i=s._d||s._p;const d=r[i];if(d){let c=s==null?void 0:s.tagDuplicateStrategy;if(!c&&(s.tag==="htmlAttrs"||s.tag==="bodyAttrs")&&(c="merge"),c==="merge"){const p=d.props;["class","style"].forEach(h=>{s.props[h]&&p[h]&&(h==="style"&&!p[h].endsWith(";")&&(p[h]+=";"),s.props[h]=`${p[h]} ${s.props[h]}`)}),r[i].props={...p,...s.props};return}else s._e===d._e&&(i=s._d=`${i}:${s._p}`);const u=Object.keys(s.props).length;if((u===0||u===1&&typeof s.props["data-h-key"]<"u")&&!s.children){delete r[i];return}}r[i]=s}),t.tags=Object.values(r)}}}},de=()=>({hooks:{"tags:resolve":e=>{const n=t=>{var r;return(r=e.tags.find(s=>s._d===t))==null?void 0:r._p};for(const t of e.tags){if(!t.tagPriority||typeof t.tagPriority=="number")continue;const r=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:s,offset:i}of r)if(t.tagPriority.startsWith(s)){const d=t.tagPriority.replace(s,""),c=n(d);typeof c<"u"&&(t._p=c+i)}}e.tags.sort((t,r)=>t._p-r._p).sort(ne)}}}),ce=()=>({hooks:{"tags:resolve":e=>{e.tags=ie(e.tags)}}}),le=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),fe=typeof window<"u",ue=()=>({hooks:{"tag:normalise":e=>{var s,i;const{tag:n,entry:t}=e,r=typeof n.props._dynamic<"u";!D.includes(n.tag)||!n.key||(n._hash=P(JSON.stringify({tag:n.tag,key:n.key})),!(fe||(i=(s=L())==null?void 0:s.resolvedOptions)!=null&&i.document)&&(t._m==="server"||r)&&(n.props[`data-h-${n._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(n=>(delete n.props._dynamic,n))}}}),pe=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let t=e==null?void 0:e.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Promise.resolve().then(function(){return Z}).then(({debouncedRenderDOMHead:r})=>{r(n,{document:(e==null?void 0:e.document)||window.document,delayFn:t})})}}}),he=()=>{const e=(n,t)=>{const r={},s={};Object.entries(t.props).forEach(([d,c])=>{d.startsWith("on")&&typeof c=="function"?s[d]=c:r[d]=c});let i;return n==="dom"&&t.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(t=>(t.props=e("ssr",t).props,t))},"dom:beforeRenderTag":function(n){const{props:t,eventHandlers:r,delayedSrc:s}=e("dom",n.tag);Object.keys(r).length&&(n.tag.props=t,n.tag._eventHandlers=r,n.tag._delayedSrc=s)},"dom:renderTag":function(n){const t=n.$el;if(!n.tag._eventHandlers||!t)return;const r=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(n.tag._eventHandlers).forEach(([s,i])=>{const d=`${n.tag._d||n.tag._p}:${s}`,c=s.slice(2).toLowerCase(),u=`data-h-${c}`;if(delete n.staleSideEffects[d],t.hasAttribute(u))return;const p=i;t.setAttribute(u,""),r.addEventListener(c,p),n.entry&&(n.entry._sde[d]=()=>{r.removeEventListener(c,p),t.removeAttribute(u)})}),n.tag._delayedSrc&&t.setAttribute("src",n.tag._delayedSrc)}}}};function ye(e){return Array.isArray(e)?e:[e]}const D=["base","meta","link","style","script","noscript"];let M;const ge=e=>M=e,L=()=>M,me=10;async function be(e){const n=[];return Object.entries(e.resolvedInput||e.input).filter(([t,r])=>typeof r<"u"&&x.includes(t)).forEach(([t,r])=>{const s=ye(r);n.push(...s.map(i=>te(t,i)).flat())}),(await Promise.all(n)).flat().map((t,r)=>(t._e=e._i,t._p=(e._i<<me)+r,t))}const $e=()=>[ae(),de(),ce(),ue(),he(),le()],_e=(e={})=>[pe({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function ve(e={}){const n=Te({...e,plugins:[..._e(e),...(e==null?void 0:e.plugins)||[]]});return ge(n),n}function Te(e={}){let n=[],t={},r=0;const s=U();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...$e(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&s.addHooks(c.hooks));const i=()=>s.callHook("entries:updated",d),d={resolvedOptions:e,headEntries(){return n},get hooks(){return s},use(c){c.hooks&&s.addHooks(c.hooks)},push(c,u){const p={_i:r++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),n.push(p),i(),{dispose(){n=n.filter(h=>h._i!==p._i?!0:(t={...t,...h._sde||{}},h._sde={},i(),!1))},patch(h){n=n.map(m=>(m._i===p._i&&(p.input=m.input=h,i()),m))}}},async resolveTags(){const c={tags:[],entries:[...n]};await s.callHook("entries:resolve",c);for(const u of c.entries)for(const p of await be(u)){const h={tag:p,entry:u};await s.callHook("tag:normalise",h),c.tags.push(h.tag)}return await s.callHook("tags:resolve",c),c.tags},_elMap:{},_popSideEffectQueue(){const c={...t};return t={},c}};return d.hooks.callHook("init",d),d}function we(e){return typeof e=="function"?e():j(e)}function H(e,n=""){if(e instanceof Promise)return e;const t=we(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(r=>H(r,n));if(typeof t=="object"){let r=!1;const s=Object.fromEntries(Object.entries(t).map(([i,d])=>i==="titleTemplate"||i.startsWith("on")?[i,j(d)]:((typeof d=="function"||V(d))&&(r=!0),[i,H(d,i)])));return r&&D.includes(String(n))&&(s._dynamic=!0),s}return t}const He=J.startsWith("3"),Ae=typeof window<"u",O="usehead";function C(){return I()&&W(O)||L()}function Le(e={}){const n=ve({...e,domDelayFn:r=>setTimeout(()=>K(()=>r()),10),plugins:[Ee(),...(e==null?void 0:e.plugins)||[]]}),t={install(r){He&&(r.config.globalProperties.$unhead=n,r.provide(O,n))}};return n.install=t.install,n}const Ee=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=H(n.input)}}}),Ue=function(e,n){e.mixin({beforeCreate(){const t=this.$options,r=t.provide;t.provide=function(){let s;return typeof r=="function"?s=r.call(this):s=r||{},{...s,[O]:n}}}})};function Pe(e,n={}){const t=C(),r=F({});N(()=>{r.value=H(e)});const s=t.push(r.value,n);return B(r,d=>s.patch(d)),I()&&q(()=>{s.dispose()}),s}function Oe(e,n={}){return C().push(e,n)}function Ke(e,n={}){var r;const t=C();if(t){const s=Ae||!!((r=t.resolvedOptions)!=null&&r.document);return n.mode==="server"&&s||n.mode==="client"&&!s?void 0:s?Pe(e,n):Oe(e,n)}}const Ce=["script","style","noscript"],Se=["base","meta","link","style","script","noscript"],ke=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Ie(e,n){const{props:t,tag:r}=e;if(ke.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof t[i]<"u"){const d=String(t[i]);return n&&!n(d)?!1:`${r}:${i}:${d}`}return!1}const T=(e,n)=>{const{tag:t,$el:r}=e;r&&(Object.entries(t.props).forEach(([s,i])=>{i=String(i);const d=`attr:${s}`;if(s==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${d}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!s.startsWith("data-h-")&&n(e,d,()=>r.removeAttribute(s)),r.getAttribute(s)!==i&&r.setAttribute(s,i)}),Ce.includes(t.tag)&&r.innerHTML!==(t.children||"")&&(r.innerHTML=t.children||""))};function je(e){let n=9;for(let t=0;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Re(e,n={}){var h,m;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=n.document||window.document,s=e._popSideEffectQueue();e.headEntries().map(a=>a._sde).forEach(a=>{Object.entries(a).forEach(([o,l])=>{s[o]=l})});const i=async a=>{const o=e.headEntries().find(b=>b._i===a._e),l={renderId:a._d||je(JSON.stringify({...a,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:a,entry:o,staleSideEffects:s};return await e.hooks.callHook("dom:beforeRenderTag",l),l},d=[],c={body:[],head:[]},u=(a,o,l)=>{o=`${a.renderId}:${o}`,a.entry&&(a.entry._sde[o]=l),delete s[o]},p=a=>{e._elMap[a.renderId]=a.$el,d.push(a),u(a,"el",()=>{var o;(o=a.$el)==null||o.remove(),delete e._elMap[a.renderId]})};for(const a of await e.resolveTags()){const o=await i(a);if(!o.shouldRender)continue;const{tag:l}=o;if(l.tag==="title"){r.title=l.children||"",d.push(o);continue}if(l.tag==="htmlAttrs"||l.tag==="bodyAttrs"){o.$el=r[l.tag==="htmlAttrs"?"documentElement":"body"],T(o,u),d.push(o);continue}if(o.$el=e._elMap[o.renderId],!o.$el&&l._hash&&(o.$el=r.querySelector(`${(h=l.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${l.tag}[data-h-${l._hash}]`)),o.$el){o.tag._d&&T(o),p(o);continue}o.$el=r.createElement(l.tag),T(o),c[(m=l.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(o)}Object.entries(c).forEach(([a,o])=>{var b;if(!o.length)return;const l=(b=r==null?void 0:r[a])==null?void 0:b.children;if(l){for(const f of[...l].reverse()){const _=f.tagName.toLowerCase();if(!Se.includes(_))continue;const A=Ie({tag:_,props:f.getAttributeNames().reduce((y,g)=>({...y,[g]:f.getAttribute(g)}),{})}),$=o.findIndex(y=>{var g;return y&&(y.tag._d===A||((g=f.isEqualNode)==null?void 0:g.call(f,y.$el)))});if($!==-1){const y=o[$];y.$el=f,T(y),p(y),delete o[$]}}o.forEach(f=>{if(f.$el){switch(f.tag.tagPosition){case"bodyClose":r.body.appendChild(f.$el);break;case"bodyOpen":r.body.insertBefore(f.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(f.$el);break}p(f)}})}});for(const a of d)await e.hooks.callHook("dom:renderTag",a);Object.values(s).forEach(a=>a())}let E=null;async function We(e,n={}){function t(){return E=null,Re(e,n)}const r=n.delayFn||(s=>setTimeout(s,10));return E=E||new Promise(s=>r(()=>s(t())))}export{Ue as V,Le as c,We as d,Re as r,Ke as u};
