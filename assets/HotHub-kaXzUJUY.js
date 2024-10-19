import{_ as w}from"./lodash@4.17.21-BBBbGlgC.js";import{o as H,g as T}from"./requests-zz1NTwqj.js";import{D as $,G as B,H as N,k as y,I as V,J as C,K as L,L as j}from"./naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D4cbiTKP.js";import{y as b,N as i,O as v,P as o,k as t,R as k,t as g,o as D,U as f,W as I,F as x,V as M}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{u as _,q}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";import{J as u}from"./@vue_shared@3.5.12-BOMFVqth.js";import{c as z,a as F}from"./index-BV-02SDE.js";import{u as J}from"./vue-i18n@10.0.4_vue@3.5.12_typescript@5.6.3_-C7TTVHTu.js";import"./axios@1.7.7-CoTZsgdJ.js";import"./date-fns@3.6.0-BYQXydFc.js";import"./@vue_runtime-dom@3.5.12-CWr_KtW9.js";import"./vooks@0.2.12_vue@3.5.12_typescript@5.6.3_-D8Rsv1Sm.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./treemate@0.3.11-HRdUPn5m.js";import"./vueuc@0.4.64_vue@3.5.12_typescript@5.6.3_-kqvdKGq3.js";import"./seemly@0.3.8-D9G0Xg2e.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.12_typescript@5.6.3_-6IDDgy2s.js";import"./vdirs@0.1.8_vue@3.5.12_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./lodash-es@4.17.21-CJQM_G14.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./date-fns-tz@3.2.0_date-fns@3.6.0-DuQ-CiuB.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";import"./@vueuse_core@11.1.0_vue@3.5.12_typescript@5.6.3_-Yv-kXWql.js";import"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.6.3_-CVk0eC74.js";import"./pinia@2.2.4_typescript@5.6.3_vue@3.5.12_typescript@5.6.3_-D24NGKxo.js";import"./vue-demi@0.14.10_vue@3.5.12_typescript@5.6.3_-Dq6ymT-8.js";import"./vite-ssg@0.23.8_critters@0.0.25_vite@5.4.9_@types_node@20.10.4_terser@5.26.0__vue-router@4.4._tpsi4qxyxd27btw6vqz7ijh4gm-CuxNj3V1.js";import"./vue-router@4.4.5_vue@3.5.12_typescript@5.6.3_-CLyaJ7WZ.js";import"./@unhead_vue@1.11.10_vue@3.5.12_typescript@5.6.3_-B8AFtn10.js";import"./unhead@1.11.10-OT7iNT2x.js";import"./@unhead_dom@1.11.10-CNTx9FV3.js";import"./@unhead_shared@1.11.10-C1bv5ODb.js";import"./hookable@5.5.3-B8xFkYCm.js";/* empty css                             */import"./@intlify_shared@10.0.4-w5IYapEx.js";import"./@intlify_core-base@10.0.4-RIkX1U0C.js";import"./@intlify_message-compiler@10.0.4-CToo3eC7.js";const O=b({__name:"HotThing",props:{item:{type:Object,required:!0}},setup(e){function m(n){return w.truncate(n,{length:50})}return(n,a)=>{const s=$,p=B,l=N,c=y,r=V,d=C;return i(),v(d,{"content-indented":""},{avatar:o(()=>[t(s,{src:e.item.logo},null,8,["src"])]),header:o(()=>[k("div",{style:{cursor:"pointer","font-weight":"bold"},onClick:a[0]||(a[0]=h=>_(H)(e.item.url))},u(e.item.title),1)]),"header-extra":o(()=>[t(p,{type:"error",round:""},{default:o(()=>[g(u(e.item.views),1)]),_:1})]),description:o(()=>[t(c,{justify:"space-around",wrap:!1},{default:o(()=>[t(l,{width:"180",lazy:"",src:e.item.thumbnail},null,8,["src"]),g(" "+u(m(e.item.description)),1)]),_:1})]),footer:o(()=>[t(r,{time:new Date(e.item.time*1e3),format:"yyyy-MM-dd hh:mm:ss"},null,8,["time"])]),_:1})}}}),U=b({__name:"HotHub",setup(e){const{t:m}=J();z(m("header.hothub"));const n=q([]);function a(){T().then(s=>n.value=s)}return D(()=>{a()}),(s,p)=>{const l=L,c=y,r=j,d=O;return i(),f(x,null,[t(c,{justify:"center",class:"box"},{default:o(()=>[p[0]||(p[0]=k("div",{"i-carbon-fire":"","text-2xl":"","color-red":"","font-medium":""},null,-1)),t(l,{size:24,type:"danger"},{default:o(()=>[g(u(_(m)("header.hothub")),1)]),_:1})]),_:1}),_(n).length===0?(i(),v(c,{key:0,class:"my-[30vh]",vertical:""},{default:o(()=>[t(r,{height:"40px","mx-auto":"",width:"85%"}),t(r,{height:"40px","mx-auto":"",width:"80%",sharp:!1}),t(r,{height:"40px",width:"80%",round:"","mx-auto":""}),t(r,{height:"40px",circle:"","mx-auto":""})]),_:1})):I("",!0),(i(!0),f(x,null,M(_(n),h=>(i(),f("div",{key:h,class:"box"},[t(d,{item:h},null,8,["item"])]))),128))],64)}}}),Nt=F(U,[["__scopeId","data-v-f8a436e0"]]);export{Nt as default};
