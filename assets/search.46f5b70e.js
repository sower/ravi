import{_ as N}from"./Favicon.vue_vue_type_script_setup_true_lang.745f85ff.js";import{u as V,o as A,d as G,a as z,b as L}from"./index.02f15612.js";import{s as M}from"./pinia.f339c344.js";import{j as S,r as R,t as U,V as r,$ as m,R as c,X as p,_ as o,Y as y,u as _,F as h,a2 as g,e as E,W as T}from"./@vue.90996980.js";import{c as W,E as H,F as X,G as Y,o as q,H as I,a as J,b as K}from"./naive-ui.7dbcfddc.js";import{u as k}from"./@vueuse.7d411351.js";import"./vue-i18n.4b6a3688.js";import"./@intlify.adb6fa1b.js";import"./vite-ssg.c549846f.js";import"./vue-router.d3924bae.js";import"./axios.a2f4dec8.js";/* empty css                */import"./date-fns.14af0789.js";import"./vooks.54211525.js";import"./evtd.9eee5233.js";import"./treemate.80cdf2c2.js";import"./vueuc.5ce11644.js";import"./seemly.815dc75a.js";import"./@css-render.dfaf0f18.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./lodash-es.566cba93.js";import"./async-validator.fb49d0f5.js";import"./date-fns-tz.cb94cc8c.js";import"./@unhead.64cbe4d7.js";import"./hookable.9d32b690.js";const O={flex:"","justify-center":"","text-xl":""},P=o("div",{"mr-2":"","text-2xl":"",class:"i-carbon-container-services"},null,-1),Q=o("div",{"text-2xl":"",class:"i-carbon:caret-down"},null,-1),Z={"max-w-80vw":"","mx-auto":"","mt-5xl":"","mb-xs":""},tt={flex:"~ wrap","justify-around":""},et=["onClick"],ot={"m-1":""},nt=S({__name:"Dropdown-App",setup(w){const f=V(),{websites:d}=M(f),l=d.value.map(e=>({label:e.title,key:e.id,sites:e.sites})),n=R(l[0].key),v=U(()=>{for(const e of l)if(e.key===n.value)return e});function x(e){n.value=e}return(e,$)=>{const b=W,t=N;return r(),m(h,null,[c(b,{trigger:"hover",options:_(l),onSelect:x},{default:p(()=>[o("div",O,[P,o("button",null,y(_(v).label),1),Q])]),_:1},8,["options"]),o("div",Z,[o("div",tt,[(r(!0),m(h,null,g(_(v).sites,s=>(r(),m("div",{key:s,class:"hover:color-#18a058","m-2":"",flex:"~ col","items-center":"","cursor-pointer":"",onClick:i=>_(A)(s.url)},[c(t,{src:s.url,text:s.name},null,8,["src","text"]),o("p",ot,y(s.name),1)],8,et))),128))])])],64)}}}),st={"m-7":"",flex:"","justify-center":"","align-center":""},ct=o("div",{"text-4xl":"","ml-4":"",class:"i-carbon:search-advanced"},null,-1),at={class:"w-[85%] mx-auto"},rt={class:"w-[90%] mx-auto"},lt=S({__name:"Multi-Tab-Search",setup(w){const f=k("searchEngines",G),{engineList:d}=f.value,l=f.value.engineType.filter(t=>t[2]),n=k("selectEngineType","web");function v(t){n.value=t}function x(){const t={};for(const s of l){const i=s[1];t[i]=d[i].filter(u=>u==null?void 0:u.checked).map(u=>u.url)}return t}const e=k("selectEngines",x());function $(t){if(t!=null&&t.checked){t.checked=!1,e.value[n.value].pop(t.url);return}t.checked=!0,e.value[n.value].push(t.url)}function b(t){const s=e.value[n.value];s.length>0?s.forEach(i=>{window.open(i.replaceAll("%s",t))}):window.$message.warning("\u8BF7\u5148\u9009\u62E9\u641C\u7D22\u5F15\u64CE")}return(t,s)=>{const i=H,u=X,C=Y,j=z,F=q,B=I,D=J;return r(),m(h,null,[o("div",st,[c(i,{size:36,type:"success"},{default:p(()=>[E(" Search ")]),_:1}),ct]),o("div",at,[c(C,{class:"mx-auto","justify-content":"space-evenly",size:"large",type:"bar","default-value":_(n),animated:"","onUpdate:value":v},{default:p(()=>[(r(!0),m(h,null,g(_(l),a=>(r(),T(u,{key:a,name:a[1],tab:a[0]},null,8,["name","tab"]))),128))]),_:1},8,["default-value"]),o("div",rt,[c(j,{"do-search":b})]),c(D,{justify:"space-around",class:"my-8"},{default:p(()=>[(r(!0),m(h,null,g(_(d)[_(n)],a=>(r(),T(B,{key:a,bordered:!1,checkable:"",checked:a.checked,round:"",onClick:mt=>$(a)},{avatar:p(()=>[c(F,{color:"white",src:a.favicon},null,8,["src"])]),default:p(()=>[E(y(a.name)+" ",1)]),_:2},1032,["checked","onClick"]))),128))]),_:1})])],64)}}}),_t={},it={class:"max-w-[90%] mx-auto"},ut=o("div",{"text-sm":"",class:"i-carbon:ibm-cloud-pak-integration"},null,-1);function pt(w,f){const d=lt,l=K,n=nt;return r(),m("div",it,[c(d),c(l,{"py-xl":"","title-placement":"center"},{default:p(()=>[ut]),_:1}),c(n)])}const Wt=L(_t,[["render",pt]]);export{Wt as default};
