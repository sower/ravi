import{y as m,m as u,N as a,O as i,P as l,t as p}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{q as f,u as _}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";import{J as g}from"./@vue_shared@3.5.12-BOMFVqth.js";import{D as v}from"./naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D4cbiTKP.js";const h=m({__name:"Favicon",props:{src:String,text:String},setup(o){const r=o,t=f(!!r.src);function c(n){return`${new URL(n).origin}/favicon.ico`}return u(r,(n,e)=>{t.value=!0}),(n,e)=>{const s=v;return _(t)?(a(),i(s,{key:0,size:"medium",color:"white",src:c(o.src),onError:e[0]||(e[0]=k=>t.value=!1)},null,8,["src"])):(a(),i(s,{key:1,size:"medium",color:"#18A058"},{default:l(()=>[p(g(o.text.slice(0,2)),1)]),_:1}))}}});export{h as _};