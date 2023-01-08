import{_ as z}from"./Favicon.vue_vue_type_script_setup_true_lang-ad8ba531.js";import{u as A,o as D,d as F,b as M,a as U,s as V}from"./index-bedd62d6.js";import{s as G}from"./pinia-9737e2b4.js";import{p as $,r as L,c as H,X as r,a1 as m,U as c,Z as u,a0 as n,_ as w,u as _,F as x,a5 as g,k as T,Y as E,a6 as J,a7 as K}from"./@vue-453cc9ea.js";import{c as O,H as R,I as W,a as X,J as Y,p as Z,K as q,b as P}from"./naive-ui-bc1c7301.js";import{a as k}from"./@vueuse-aeb3fbf1.js";import{u as Q}from"./vue-i18n-a559acfe.js";import"./vite-ssg-c931e7bc.js";import"./vue-router-3ad27e74.js";import"./axios-c47e0cf1.js";import"./form-data-d2a9677b.js";/* empty css                */import"./@intlify-e1b6f745.js";import"./@unhead-8c20db88.js";import"./hookable-48cbdad6.js";import"./date-fns-9efb2483.js";import"./vooks-6030c286.js";import"./evtd-b614532e.js";import"./treemate-25c27bff.js";import"./seemly-76b7b838.js";import"./vueuc-ad710fb9.js";import"./@css-render-fed58b40.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-ef54f42e.js";import"./async-validator-dee29e8b.js";import"./date-fns-tz-49adbfbd.js";const ee={flex:"","justify-center":"","text-xl":""},te=n("div",{"mr-2":"","text-2xl":"",class:"i-carbon-container-services"},null,-1),oe=n("div",{"text-2xl":"",class:"i-carbon:caret-down"},null,-1),ne={"max-w-80vw":"","mx-auto":"","mt-5xl":"","mb-2xl":""},se={flex:"~ wrap","justify-around":""},ce=["onClick"],ae={"m-1":""},re=$({__name:"Dropdown-App",setup(d){const f=A(),{websites:h}=G(f),l=Object.keys(h.value).map(o=>({label:o,key:o,sites:h.value[o]})),s=L(l[0].key),v=H(()=>{for(const o of l)if(o.key===s.value)return o});function b(o){s.value=o}return(o,S)=>{const y=O,e=z;return r(),m(x,null,[c(y,{trigger:"hover",options:_(l),onSelect:b},{default:u(()=>[n("div",ee,[te,n("button",null,w(_(v).label),1),oe])]),_:1},8,["options"]),n("div",ne,[n("div",se,[(r(!0),m(x,null,g(_(v).sites,t=>(r(),m("div",{key:t,class:"hover:color-#18a058","m-2":"",flex:"~ col","items-center":"","cursor-pointer":"",onClick:i=>_(D)(t.url)},[c(e,{src:t.url,text:t.name},null,8,["src","text"]),n("p",ae,w(t.name),1)],8,ce))),128))])])],64)}}}),_e=d=>(J("data-v-9bb1b0dc"),d=d(),K(),d),le={"m-7":"",flex:"","justify-center":"","align-center":""},ie=_e(()=>n("div",{"text-4xl":"","ml-4":"",class:"i-carbon:search-advanced"},null,-1)),pe={class:"w-[85%] mx-auto"},ue={class:"w-[90%] mx-auto"},me=$({__name:"Multi-Tab-Search",setup(d){const f=k("searchEngines",F),{engineList:h}=f.value,l=f.value.engineType.filter(e=>e[2]),s=k("selectEngineType","web");function v(e){s.value=e}function b(){const e={};for(const t of l){const i=t[1];e[i]=h[i].filter(p=>p==null?void 0:p.checked).map(p=>p.url)}return e}const o=k("selectEngines",b());function S(e){const t=o.value[s.value];if(e!=null&&e.checked){e.checked=!1,t.pop(e.url);return}e.checked=!0,t.push(e.url)}function y(e){const t=o.value[s.value];t.length>0?t.forEach(i=>{window.open(i.replaceAll("%s",e))}):window.$message.warning("请先选择搜索引擎")}return(e,t)=>{const i=R,p=Y,j=W,C=M,I=Z,B=q,N=X;return r(),m(x,null,[n("div",le,[c(i,{size:36,type:"success"},{default:u(()=>[T(" Search ")]),_:1}),ie]),n("div",pe,[c(j,{class:"mx-auto","justify-content":"space-evenly",size:"large",type:"bar","default-value":_(s),animated:"","onUpdate:value":v},{default:u(()=>[(r(!0),m(x,null,g(_(l),a=>(r(),E(p,{key:a[1],name:a[1],tab:a[0]},null,8,["name","tab"]))),128))]),_:1},8,["default-value"]),n("div",ue,[c(C,{"do-search":y,size:"large"})]),c(N,{justify:"space-around",class:"mt-5 mb-8"},{default:u(()=>[(r(!0),m(x,null,g(_(h)[_(s)],a=>(r(),E(B,{key:a,bordered:!1,checkable:"",checked:a.checked,round:"",onClick:ve=>S(a)},{avatar:u(()=>[c(I,{color:"white",src:a.favicon},null,8,["src"])]),default:u(()=>[T(w(a.name)+" ",1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})])],64)}}});const de=U(me,[["__scopeId","data-v-9bb1b0dc"]]),fe={class:"max-w-[90%] mx-auto my-10vh"},he=n("div",{"text-sm":"",class:"i-carbon:ibm-cloud-pak-integration"},null,-1),We=$({__name:"search",setup(d){const{t:f}=Q();return V(f("header.search-mode")),(h,l)=>{const s=de,v=P,b=re;return r(),m("div",fe,[c(s),c(v,{"py-xl":"","title-placement":"center"},{default:u(()=>[he]),_:1}),c(b)])}}});export{We as default};