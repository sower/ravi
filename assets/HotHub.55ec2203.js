import{o as w,H,J as k,a as x,K as $,L as B,E as S,M as T}from"./naive-ui.fffdf306.js";import{m as y,W as r,X as b,Y as o,S as e,$ as v,Z as u,j as d,r as j,q as C,a0 as l,u as g,a6 as I,F as f,a3 as L,a4 as M,a5 as N}from"./@vue.8936e839.js";import{g as V,b as q}from"./index.eaa0dab0.js";import"./date-fns.a65ded87.js";import"./axios.d07afc41.js";import"./vooks.04193f27.js";import"./evtd.9eee5233.js";import"./treemate.80cdf2c2.js";import"./vueuc.130a384e.js";import"./seemly.815dc75a.js";import"./@css-render.ecf224b2.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./lodash-es.566cba93.js";import"./async-validator.fb49d0f5.js";import"./date-fns-tz.60c795ea.js";import"./vue-i18n.67d7ed8f.js";import"./@intlify.adb6fa1b.js";import"./pinia.2dff39de.js";import"./vite-ssg.9953a0af.js";import"./vue-router.fb34c92e.js";import"./@vueuse.f97b4275.js";import"./@unhead.9d9441d6.js";import"./hookable.9d32b690.js";/* empty css                */const z=y({__name:"HotThing",props:{item:{type:Object,required:!0}},setup(t){function i(s){window.open(s)}return(s,a)=>{const h=w,p=H,_=k,n=x,c=$,m=B;return r(),b(m,{"content-indented":""},{avatar:o(()=>[e(h,{src:t.item.logo},null,8,["src"])]),header:o(()=>[v("div",{style:{cursor:"pointer","font-weight":"bold"},onClick:a[0]||(a[0]=J=>i(t.item.url))},u(t.item.title),1)]),"header-extra":o(()=>[e(p,{type:"error",round:""},{default:o(()=>[d(u(t.item.views),1)]),_:1})]),description:o(()=>[e(n,{justify:"space-around",wrap:!1},{default:o(()=>[e(_,{width:"180",lazy:"",src:t.item.thumbnail},null,8,["src"]),d(" "+u(t.item.description),1)]),_:1})]),footer:o(()=>[e(c,{time:new Date(t.item.time*1e3),format:"yyyy-MM-dd hh:mm:ss"},null,8,["time"])]),_:1})}}}),D=t=>(M("data-v-47db5d84"),t=t(),N(),t),E=D(()=>v("div",{"text-2xl":"","font-medium":"","i-carbon-fire":"","color-red":""},null,-1)),F=y({__name:"HotHub",setup(t){const i=j([]);function s(){V().then(a=>i.value=a)}return C(()=>{s()}),(a,h)=>{const p=S,_=x,n=T,c=z;return r(),l(f,null,[e(_,{justify:"center",class:"box"},{default:o(()=>[E,e(p,{size:24,type:"danger"},{default:o(()=>[d(" Hothub ")]),_:1})]),_:1}),g(i).length===0?(r(),b(_,{key:0,"my-3xl":"",vertical:""},{default:o(()=>[e(n,{height:"40px","mx-auto":"",width:"85%"}),e(n,{height:"40px","mx-auto":"",width:"80%",sharp:!1}),e(n,{height:"40px","mx-auto":"",width:"80%",round:""}),e(n,{height:"40px","mx-auto":"",circle:""})]),_:1})):I("",!0),(r(!0),l(f,null,L(g(i),m=>(r(),l("div",{key:m,class:"box"},[e(c,{item:m},null,8,["item"])]))),128))],64)}}});const ht=q(F,[["__scopeId","data-v-47db5d84"]]);export{ht as default};