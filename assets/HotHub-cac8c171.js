import{s as H}from"./lodash@4.17.21-e70b943a.js";import{o as k,c as T,g as B,a as I}from"./index-31be2efb.js";import{p as N,K as S,Q as V,a as y,R as $,S as C,H as L,T as M}from"./naive-ui@2.34.3_vue@3.2.47-d72110a9.js";import{z as v,L as i,M as b,N as o,p as e,P as w,x as f,A as j,Q as h,W as z,F as x,R as D,U as F,V as Q}from"./@vue_runtime-core@3.2.47-5055464e.js";import{u as c,r as R}from"./@vue_reactivity@3.2.47-77826540.js";import{J as _}from"./@vue_shared@3.2.47-136aa44d.js";import{u as U}from"./vue-i18n@9.2.2_vue@3.2.47-94a92d82.js";import"./date-fns@2.29.3-417be393.js";import"./@vueuse_core@9.13.0_vue@3.2.47-83c3b2bf.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-015f7a53.js";import"./pinia@2.0.33_p4srtwdgezcoeovfcc2yxzvaue-5a9b5e93.js";import"./vue-demi@0.13.11_vue@3.2.47-71ba0ef2.js";import"./@vue_runtime-dom@3.2.47-7b017c2d.js";import"./vite-ssg@0.22.1_sko5ykgkgm7crz47mqa6e35k6y-74863d50.js";import"./vue-router@4.1.6_vue@3.2.47-507b3659.js";import"./@vueuse_head@1.1.23_vue@3.2.47-5b812f12.js";import"./@unhead_vue@1.1.23_vue@3.2.47-d83f0dd9.js";import"./unhead@1.1.23-8f2f3081.js";import"./hookable@5.5.1-f68282a5.js";import"./@unhead_dom@1.1.23-bcb21214.js";import"./@unhead_shared@1.1.23-886f2746.js";import"./axios@1.3.4-aba6f0e0.js";/* empty css                             */import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-a0a8715c.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./vooks@0.2.12_vue@3.2.47-986f1a89.js";import"./evtd@0.2.4-b614532e.js";import"./treemate@0.3.11-25c27bff.js";import"./seemly@0.3.6-76b7b838.js";import"./vueuc@0.4.51_vue@3.2.47-3c205d0f.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-ed76ecce.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./lodash-es@4.17.21-ef54f42e.js";import"./async-validator@4.2.5-dee29e8b.js";import"./date-fns-tz@1.3.8_date-fns@2.29.3-63db7822.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";const q=v({__name:"HotThing",props:{item:{type:Object,required:!0}},setup(t){function s(n){return H.truncate(n,{length:50})}return(n,m)=>{const a=N,g=S,u=V,p=y,r=$,l=C;return i(),b(l,{"content-indented":""},{avatar:o(()=>[e(a,{src:t.item.logo},null,8,["src"])]),header:o(()=>[w("div",{style:{cursor:"pointer","font-weight":"bold"},onClick:m[0]||(m[0]=d=>c(k)(t.item.url))},_(t.item.title),1)]),"header-extra":o(()=>[e(g,{type:"error",round:""},{default:o(()=>[f(_(t.item.views),1)]),_:1})]),description:o(()=>[e(p,{justify:"space-around",wrap:!1},{default:o(()=>[e(u,{width:"180",lazy:"",src:t.item.thumbnail},null,8,["src"]),f(" "+_(s(t.item.description)),1)]),_:1})]),footer:o(()=>[e(r,{time:new Date(t.item.time*1e3),format:"yyyy-MM-dd hh:mm:ss"},null,8,["time"])]),_:1})}}}),A=t=>(F("data-v-c3c50f23"),t=t(),Q(),t),E=A(()=>w("div",{"text-2xl":"","font-medium":"","i-carbon-fire":"","color-red":""},null,-1)),J=v({__name:"HotHub",setup(t){const{t:s}=U();T(s("header.hothub"));const n=R([]);function m(){B().then(a=>n.value=a)}return j(()=>{m()}),(a,g)=>{const u=L,p=y,r=M,l=q;return i(),h(x,null,[e(p,{justify:"center",class:"box"},{default:o(()=>[E,e(u,{size:24,type:"danger"},{default:o(()=>[f(_(c(s)("header.hothub")),1)]),_:1})]),_:1}),c(n).length===0?(i(),b(p,{key:0,class:"my-[30vh]",vertical:""},{default:o(()=>[e(r,{height:"40px","mx-auto":"",width:"85%"}),e(r,{height:"40px","mx-auto":"",width:"80%",sharp:!1}),e(r,{height:"40px","mx-auto":"",width:"80%",round:""}),e(r,{height:"40px","mx-auto":"",circle:""})]),_:1})):z("",!0),(i(!0),h(x,null,D(c(n),d=>(i(),h("div",{key:d,class:"box"},[e(l,{item:d},null,8,["item"])]))),128))],64)}}});const Lt=I(J,[["__scopeId","data-v-c3c50f23"]]);export{Lt as default};
