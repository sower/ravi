const m=new Set(["title","titleTemplate","script","style","noscript"]),C=new Set(["base","meta","link","style","script","noscript"]),g=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),T=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),d=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),M=typeof window<"u";function _(t){return t}function f(t){let e=9;for(let r=0;r<t.length;)e=Math.imul(e^t.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function x(t){if(t._h)return t._h;if(t._d)return f(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const r in t.props)e+=`${r}:${String(t.props[r])},`;return f(e)}function b(t,e){return t instanceof Promise?t.then(e):e(t)}function l(t,e,r,o){const i=o||w(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(i instanceof Promise)return i.then(s=>l(t,e,r,s));const n={tag:t,props:i};for(const s of d){const c=n.props[s]!==void 0?n.props[s]:r[s];c!==void 0&&((!(s==="innerHTML"||s==="textContent"||s==="children")||m.has(n.tag))&&(n[s==="children"?"innerHTML":s]=c),delete n.props[s])}return n.props.body&&(n.tagPosition="bodyClose",delete n.props.body),n.tag==="script"&&typeof n.innerHTML=="object"&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||"application/json"),Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n}function S(t,e){var o;const r=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,i])=>i).map(([i,n])=>t==="style"?`${i}:${n}`:i)),(o=String(Array.isArray(e)?e.join(r):e))==null?void 0:o.split(r).filter(i=>!!i.trim()).join(r)}function h(t,e,r,o){for(let i=o;i<r.length;i+=1){const n=r[i];if(n==="class"||n==="style"){t[n]=S(n,t[n]);continue}if(t[n]instanceof Promise)return t[n].then(s=>(t[n]=s,h(t,e,r,i)));if(!e&&!d.has(n)){const s=String(t[n]),c=n.startsWith("data-");s==="true"||s===""?t[n]=c?"true":!0:t[n]||(c&&s==="false"?t[n]="false":delete t[n])}}}function w(t,e=!1){const r=h(t,e,Object.keys(t),0);return r instanceof Promise?r.then(()=>t):t}const P=10;function y(t,e,r){for(let o=r;o<e.length;o+=1){const i=e[o];if(i instanceof Promise)return i.then(n=>(e[o]=n,y(t,e,o)));Array.isArray(i)?t.push(...i):t.push(i)}}function L(t){const e=[],r=t.resolvedInput;for(const i in r){if(!Object.prototype.hasOwnProperty.call(r,i))continue;const n=r[i];if(!(n===void 0||!g.has(i))){if(Array.isArray(n)){for(const s of n)e.push(l(i,s,t));continue}e.push(l(i,n,t))}}if(e.length===0)return[];const o=[];return b(y(o,e,0),()=>o.map((i,n)=>(i._e=t._i,t.mode&&(i._m=t.mode),i._p=(t._i<<P)+n,i)))}const j=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),u={base:-10,title:10},p={critical:-80,high:-10,low:20};function v(t){const e=t.tagPriority;if(typeof e=="number")return e;let r=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?r=-30:t.props.charset?r=-20:t.props.name==="viewport"&&(r=-15):t.tag==="link"&&t.props.rel==="preconnect"?r=20:t.tag in u&&(r=u[t.tag]),e&&e in p?r+p[e]:r}const E=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],A=["name","property","http-equiv"];function I(t){const{props:e,tag:r}=t;if(T.has(r))return r;if(r==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${r}:id:${e.id}`;for(const o of A)if(e[o]!==void 0)return`${r}:${o}:${e[o]}`;return!1}const a="%separator";function H(t,e){var o;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(o=t[e.substring(0,i)])==null?void 0:o[e.substring(i+1)]}else r=t[e];return r!==void 0?(r||"").replace(/"/g,'\\"'):void 0}const $=new RegExp(`${a}(?:\\s*${a})*`,"g");function O(t,e,r){if(typeof t!="string"||!t.includes("%"))return t;let o=t;try{o=decodeURI(t)}catch{}const i=o.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const n=t.includes(a);return t=t.replace(/%\w+(?:\.\w+)?/g,s=>{if(s===a||!i.includes(s))return s;const c=H(e,s.slice(1));return c!==void 0?c:s}).trim(),n&&(t.endsWith(a)&&(t=t.slice(0,-a.length)),t.startsWith(a)&&(t=t.slice(a.length)),t=t.replace($,r).trim()),t}function W(t,e){return t==null?e||null:typeof t=="function"?t(e):t}export{C as H,M as I,j as N,E as S,v as a,f as b,L as c,_ as d,x as h,w as n,O as p,W as r,I as t};
