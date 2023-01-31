import{_ as M}from"./Favicon.vue_vue_type_script_setup_true_lang-fbfcd8b6.js";import{d as $,E as N,A as z,v as D,o as _,k as m,i as c,w as d,j as s,t as w,h as l,M as b,O as g,n as V,a as k,g as E,am as F,an as G,l as L,f as T,ao as O,ap as U,aq as q,$ as R,ar as W,e as H,m as J}from"./.pnpm-029b6379.js";import{u as K,o as P,d as Q,b as X,a as Y,s as Z}from"./index-c5ad6a6d.js";const ee={flex:"","justify-center":"","text-xl":""},te=s("div",{"mr-2":"","text-2xl":"",class:"i-carbon-container-services"},null,-1),ne=s("div",{"text-2xl":"",class:"i-carbon:caret-down"},null,-1),se={"max-w-80vw":"","mx-auto":"","mt-5xl":"","mb-2xl":""},oe={flex:"~ wrap","justify-around":""},ce=["onClick"],ae={"m-1":""},_e=$({__name:"Dropdown-App",setup(f){const h=K(),{websites:r}=N(h),o=Object.keys(r.value).map(n=>({label:n,key:n,sites:r.value[n]})),u=z(o[0].key),v=D(()=>{for(const n of o)if(n.key===u.value)return n});function x(n){u.value=n}return(n,S)=>{const y=V,e=M;return _(),m(b,null,[c(y,{trigger:"hover",options:l(o),onSelect:x},{default:d(()=>[s("div",ee,[te,s("button",null,w(l(v).label),1),ne])]),_:1},8,["options"]),s("div",se,[s("div",oe,[(_(!0),m(b,null,g(l(v).sites,t=>(_(),m("div",{key:t,class:"hover:color-#18a058","m-2":"",flex:"~ col","items-center":"","cursor-pointer":"",onClick:i=>l(P)(t.url)},[c(e,{src:t.url,text:t.name},null,8,["src","text"]),s("p",ae,w(t.name),1)],8,ce))),128))])])],64)}}}),le=f=>(O("data-v-6815508c"),f=f(),U(),f),re={"m-7":"",flex:"","justify-center":"","align-center":""},ue=le(()=>s("div",{"text-4xl":"","ml-4":"",class:"i-carbon:search-advanced"},null,-1)),ie={class:"w-[85%] mx-auto"},pe={class:"w-[90%] mx-auto"},de=$({__name:"Multi-Tab-Search",setup(f){const h=k("searchEngines",Q),r=h.value.engineType.filter(e=>e[2]),o=k("selectEngineType",r[0][1]),{engineList:u}=h.value;function v(e){o.value=e}function x(){const e={};for(const t of r){const i=t[1];e[i]=u[i].filter(p=>p==null?void 0:p.checked).map(p=>p.url)}return e}const n=k("selectEngines",x());function S(e){const t=n.value[o.value];if(e!=null&&e.checked){e.checked=!1,t.pop(e.url);return}e.checked=!0,t.push(e.url)}function y(e){const t=n.value[o.value];t.length>0?t.forEach(i=>{window.open(i.replaceAll("%s",e))}):window.$message.warning("请先选择搜索引擎")}return(e,t)=>{const i=F,p=q,j=G,C=X,I=R,A=W,B=L;return _(),m(b,null,[s("div",re,[c(i,{size:36,type:"success"},{default:d(()=>[E(" Search ")]),_:1}),ue]),s("div",ie,[c(j,{class:"mx-auto","justify-content":"space-evenly",size:"large",type:"bar","default-value":l(o),animated:"","onUpdate:value":v},{default:d(()=>[(_(!0),m(b,null,g(l(r),a=>(_(),T(p,{key:a[1],name:a[1],tab:a[0]},null,8,["name","tab"]))),128))]),_:1},8,["default-value"]),s("div",pe,[c(C,{"do-search":y,size:"large"})]),c(B,{justify:"space-around",class:"mt-5 mb-8"},{default:d(()=>[(_(!0),m(b,null,g(l(u)[l(o)],a=>(_(),T(A,{key:a,bordered:!1,checkable:"",checked:a.checked,round:"",onClick:ve=>S(a)},{avatar:d(()=>[c(I,{color:"white",src:a.favicon},null,8,["src"])]),default:d(()=>[E(w(a.name)+" ",1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})])],64)}}});const me=Y(de,[["__scopeId","data-v-6815508c"]]),fe={class:"max-w-[90%] mx-auto my-[calc((100vh-30rem)/2)]"},he=s("div",{"text-sm":"",class:"i-carbon:ibm-cloud-pak-integration"},null,-1),ke=$({__name:"search",setup(f){const{t:h}=H();return Z(h("header.search-mode")),(r,o)=>{const u=me,v=J,x=_e;return _(),m("div",fe,[c(u),c(v,{"py-xl":"","title-placement":"center"},{default:d(()=>[he]),_:1}),c(x)])}}});export{ke as default};
