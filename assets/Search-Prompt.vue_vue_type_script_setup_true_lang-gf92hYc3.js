import{a as k}from"./requests-zz1NTwqj.js";import{D as w,n as z,k as N,Q as y}from"./naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D4cbiTKP.js";import{y as g,N as b,O as x,P as c,k as _,t as m,m as B,R as P,h as V}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{J as f}from"./@vue_shared@3.5.12-BOMFVqth.js";import{q as d,u as h,a as q}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";const C=g({__name:"Bar",props:{index:{type:String,required:!0},content:String},setup(r){const s=r;return(o,l)=>{const u=w,p=z,i=N;return b(),x(i,{align:"center",wrap:!1},{default:c(()=>[_(u,{round:"",size:"small",style:{"background-color":"#18a058"}},{default:c(()=>[m(f(s.index),1)]),_:1}),_(p,{strong:""},{default:c(()=>[m(f(s.content),1)]),_:1})]),_:1})}}}),I=g({__name:"Search-Prompt",props:{doSearch:null,size:{default:"medium"}},setup(r){const s=r,o=d(""),l=d([]);function u(e){const t=l.value[Number.parseInt(e)].label;s.doSearch(t)}function p(e){return e.trim()!==""}function i(e){return[V(C,{index:e.value,content:e.label})]}return B(o,(e,t)=>{e.trim().length!==0&&k(e.trim()).then(n=>{let a=[{label:e,value:"0"}];n&&(a=a.concat(n.map((S,v)=>({label:S,value:String(v+1)})))),l.value=a}).catch(n=>console.log(n))}),(e,t)=>{const n=y;return b(),x(n,{value:h(o),"onUpdate:value":t[0]||(t[0]=a=>q(o)?o.value=a:null),"input-props":{maxlength:"10"},options:h(l),size:r.size,clearable:"","blur-after-select":"","on-select":u,"render-label":i,placeholder:"Search ...",onGetShow:p},{suffix:c(()=>t[1]||(t[1]=[P("div",{"i-carbon-search":""},null,-1)])),_:1},8,["value","options","size"])}}});export{I as _};
