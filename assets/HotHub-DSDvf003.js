import{o as k}from"./common-he2xlsDv.js";import{G as H,k as y,H as $,I as T,E as B,J as N,K as V,L as C}from"./naive-ui@2.41.0_vue@3.5.13_typescript@5.7.3_-CIpljs1d.js";import{E as b,N as v,O as i,P as e,l as t,A as g,R as w,x as L,U as f,W as j,F as x,V as E}from"./@vue_runtime-core@3.5.13-Cb-Lzkic.js";import{J as _}from"./@vue_shared@3.5.13-BI8cG9WF.js";import{u as c,q as I}from"./@vue_reactivity@3.5.13-DMa_mvt2.js";import{c as M,a as q}from"./index-B7IryH1m.js";import{g as z}from"./requests-BZLtqVQ0.js";import{u as D}from"./vue-i18n@10.0.5_vue@3.5.13_typescript@5.7.3_-C-MjfSiH.js";import"./date-fns@3.6.0-C2TYS9Rb.js";import"./@vue_runtime-dom@3.5.13-DfqiEize.js";import"./vueuc@0.4.64_vue@3.5.13_typescript@5.7.3_-CkMIUC6i.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./seemly@0.3.10-vwiZZiLp.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.13_typescript@5.7.3_-C_LhJcnU.js";import"./vooks@0.2.12_vue@3.5.13_typescript@5.7.3_-g1Aia_to.js";import"./vdirs@0.1.8_vue@3.5.13_typescript@5.7.3_-BAjskub0.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-HRdUPn5m.js";import"./lodash-es@4.17.21-Je7ZdWGk.js";import"./async-validator@4.2.5-9PlIezaS.js";import"./date-fns-tz@3.2.0_date-fns@3.6.0--sBon5vR.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";import"./@vueuse_core@12.7.0_typescript@5.7.3-MVPZ38Cl.js";import"./@vueuse_shared@12.7.0_typescript@5.7.3-CbZll9AF.js";import"./pinia@2.3.1_typescript@5.7.3_vue@3.5.13_typescript@5.7.3_-CK8v8DeV.js";import"./vite-ssg@25.2.0_prettier@3.5.2_vite@6.1.1_@types_node@22.13.5_jiti@2.4.2_terser@5.39.0_tsx@4._ruhdw6qurzoadi77gcdrteer6q-DZheiiV3.js";import"./vue-router@4.5.0_vue@3.5.13_typescript@5.7.3_-C_dL1SOE.js";import"./@unhead_vue@1.11.19_vue@3.5.13_typescript@5.7.3_-biCGB3B5.js";import"./unhead@1.11.19-Dc9YxlN5.js";import"./@unhead_dom@1.11.19-BjiGwb0c.js";import"./@unhead_shared@1.11.19-DkCobDbq.js";import"./hookable@5.5.3-B8xFkYCm.js";/* empty css                             */import"./@intlify_shared@10.0.5-ETn5s-WQ.js";import"./@intlify_core-base@10.0.5-DrncvHeh.js";import"./@intlify_message-compiler@10.0.5-J3zsFpIG.js";import"./axios@1.7.9-DW_MHI2K.js";const F=b({__name:"HotThing",props:{item:{type:Object,required:!0}},setup(n){function m(o){return(o==null?void 0:o.length)>50?`${o.substring(0,47)}...`:o}return(o,s)=>{const a=B,p=T,l=$,u=y,r=H,d=N;return i(),v(d,{"content-indented":""},{avatar:e(()=>[t(a,{src:n.item.logo},null,8,["src"])]),header:e(()=>[w("div",{style:{cursor:"pointer","font-weight":"bold"},onClick:s[0]||(s[0]=h=>c(k)(n.item.url))},_(n.item.title),1)]),"header-extra":e(()=>[t(p,{type:"error",round:""},{default:e(()=>[g(_(n.item.views),1)]),_:1})]),description:e(()=>[t(u,{justify:"space-around",wrap:!1},{default:e(()=>[t(l,{width:"180",lazy:"",src:n.item.thumbnail},null,8,["src"]),g(" "+_(m(n.item.description)),1)]),_:1})]),footer:e(()=>[t(r,{time:new Date(n.item.time*1e3),format:"yyyy-MM-dd hh:mm:ss"},null,8,["time"])]),_:1})}}}),J=b({__name:"HotHub",setup(n){const{t:m}=D();M(m("header.hothub"));const o=I([]);function s(){z().then(a=>o.value=a)}return L(()=>{s()}),(a,p)=>{const l=V,u=y,r=C,d=F;return i(),f(x,null,[t(u,{justify:"center",class:"box"},{default:e(()=>[p[0]||(p[0]=w("div",{"i-carbon-fire":"","text-2xl":"","color-red":"","font-medium":""},null,-1)),t(l,{size:24,type:"danger"},{default:e(()=>[g(_(c(m)("header.hothub")),1)]),_:1})]),_:1}),c(o).length===0?(i(),v(u,{key:0,class:"my-[30vh]",vertical:""},{default:e(()=>[t(r,{height:"40px","mx-auto":"",width:"85%"}),t(r,{height:"40px","mx-auto":"",width:"80%",sharp:!1}),t(r,{height:"40px",width:"80%",round:"","mx-auto":""}),t(r,{height:"40px",circle:"","mx-auto":""})]),_:1})):j("",!0),(i(!0),f(x,null,E(c(o),h=>(i(),f("div",{key:h,class:"box"},[t(d,{item:h},null,8,["item"])]))),128))],64)}}}),Tt=q(J,[["__scopeId","data-v-f8a436e0"]]);export{Tt as default};
