import{_ as z}from"./Favicon.vue_vue_type_script_setup_true_lang-79b07ae0.js";import{s as A}from"./pinia-db1c6930.js";import{u as D,o as F,d as M,b as U,a as V,s as G}from"./index-956658bb.js";import{q as $,r as L,c as q,X as r,a1 as d,U as c,Z as m,a0 as n,_ as w,u as _,F as b,a5 as g,l as T,Y as E,a6 as H,a7 as J}from"./@vue-c2cdc001.js";import{c as K,H as O,I as R,a as W,J as X,p as Y,K as Z,b as P}from"./naive-ui-7d8c2a5d.js";import{a as k}from"./@vueuse-48b26b9c.js";import{u as Q}from"./vue-i18n-4788aa8b.js";import"./vue-demi-71ba0ef2.js";import"./vite-ssg-97b2d4f6.js";import"./vue-router-4a9977ed.js";import"./axios-ade1294f.js";import"./form-data-d2a9677b.js";/* empty css                */import"./@intlify-e1b6f745.js";import"./@unhead-b7666839.js";import"./hookable-48cbdad6.js";import"./date-fns-9efb2483.js";import"./vooks-37d1beb9.js";import"./evtd-b614532e.js";import"./treemate-25c27bff.js";import"./seemly-76b7b838.js";import"./vueuc-db57d0e1.js";import"./@css-render-8c604450.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-ef54f42e.js";import"./async-validator-dee29e8b.js";import"./date-fns-tz-a0a6b18e.js";const ee={flex:"","justify-center":"","text-xl":""},te=n("div",{"mr-2":"","text-2xl":"",class:"i-carbon-container-services"},null,-1),oe=n("div",{"text-2xl":"",class:"i-carbon:caret-down"},null,-1),ne={"max-w-80vw":"","mx-auto":"","mt-5xl":"","mb-2xl":""},se={flex:"~ wrap","justify-around":""},ce=["onClick"],ae={"m-1":""},re=$({__name:"Dropdown-App",setup(f){const h=D(),{websites:l}=A(h),s=Object.keys(l.value).map(o=>({label:o,key:o,sites:l.value[o]})),i=L(s[0].key),v=q(()=>{for(const o of s)if(o.key===i.value)return o});function x(o){i.value=o}return(o,S)=>{const y=K,e=z;return r(),d(b,null,[c(y,{trigger:"hover",options:_(s),onSelect:x},{default:m(()=>[n("div",ee,[te,n("button",null,w(_(v).label),1),oe])]),_:1},8,["options"]),n("div",ne,[n("div",se,[(r(!0),d(b,null,g(_(v).sites,t=>(r(),d("div",{key:t,class:"hover:color-#18a058","m-2":"",flex:"~ col","items-center":"","cursor-pointer":"",onClick:p=>_(F)(t.url)},[c(e,{src:t.url,text:t.name},null,8,["src","text"]),n("p",ae,w(t.name),1)],8,ce))),128))])])],64)}}}),_e=f=>(H("data-v-6815508c"),f=f(),J(),f),le={"m-7":"",flex:"","justify-center":"","align-center":""},ie=_e(()=>n("div",{"text-4xl":"","ml-4":"",class:"i-carbon:search-advanced"},null,-1)),pe={class:"w-[85%] mx-auto"},ue={class:"w-[90%] mx-auto"},me=$({__name:"Multi-Tab-Search",setup(f){const h=k("searchEngines",M),l=h.value.engineType.filter(e=>e[2]),s=k("selectEngineType",l[0][1]),{engineList:i}=h.value;function v(e){s.value=e}function x(){const e={};for(const t of l){const p=t[1];e[p]=i[p].filter(u=>u==null?void 0:u.checked).map(u=>u.url)}return e}const o=k("selectEngines",x());function S(e){const t=o.value[s.value];if(e!=null&&e.checked){e.checked=!1,t.pop(e.url);return}e.checked=!0,t.push(e.url)}function y(e){const t=o.value[s.value];t.length>0?t.forEach(p=>{window.open(p.replaceAll("%s",e))}):window.$message.warning("请先选择搜索引擎")}return(e,t)=>{const p=O,u=X,j=R,C=U,I=Y,B=Z,N=W;return r(),d(b,null,[n("div",le,[c(p,{size:36,type:"success"},{default:m(()=>[T(" Search ")]),_:1}),ie]),n("div",pe,[c(j,{class:"mx-auto","justify-content":"space-evenly",size:"large",type:"bar","default-value":_(s),animated:"","onUpdate:value":v},{default:m(()=>[(r(!0),d(b,null,g(_(l),a=>(r(),E(u,{key:a[1],name:a[1],tab:a[0]},null,8,["name","tab"]))),128))]),_:1},8,["default-value"]),n("div",ue,[c(C,{"do-search":y,size:"large"})]),c(N,{justify:"space-around",class:"mt-5 mb-8"},{default:m(()=>[(r(!0),d(b,null,g(_(i)[_(s)],a=>(r(),E(B,{key:a,bordered:!1,checkable:"",checked:a.checked,round:"",onClick:ve=>S(a)},{avatar:m(()=>[c(I,{color:"white",src:a.favicon},null,8,["src"])]),default:m(()=>[T(w(a.name)+" ",1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})])],64)}}});const de=V(me,[["__scopeId","data-v-6815508c"]]),fe={class:"max-w-[90%] mx-auto my-[calc((100vh-30rem)/2)]"},he=n("div",{"text-sm":"",class:"i-carbon:ibm-cloud-pak-integration"},null,-1),We=$({__name:"search",setup(f){const{t:h}=Q();return G(h("header.search-mode")),(l,s)=>{const i=de,v=P,x=re;return r(),d("div",fe,[c(i),c(v,{"py-xl":"","title-placement":"center"},{default:m(()=>[he]),_:1}),c(x)])}}});export{We as default};