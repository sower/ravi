import{q as l,r as u,a as m,u as p,X as a,Y as c,Z as f,l as _,_ as g}from"./@vue-c2cdc001.js";import{p as v}from"./naive-ui-7d8c2a5d.js";const w=l({__name:"Favicon",props:{src:String,text:String},setup(n){const r=n,t=u(Boolean(r.src));function i(o){return`${new URL(o).origin}/favicon.ico`}return m(r,(o,e)=>{t.value=!0}),(o,e)=>{const s=v;return p(t)?(a(),c(s,{key:0,size:"medium",color:"white",src:i(n.src),onError:e[0]||(e[0]=k=>t.value=!1)},null,8,["src"])):(a(),c(s,{key:1,size:"medium",color:"#18A058"},{default:f(()=>[_(g(n.text.slice(0,2)),1)]),_:1}))}}});export{w as _};
