import{s as _}from"./pinia.c5007c9c.js";import{u as f}from"./index.6da8889d.js";import{f as d,r as g,V as v,W as w,X as n,Q as i,u as y,b,_ as e}from"./@vue.f5112019.js";import{a as x,g as S}from"./naive-ui.e9eba171.js";import"./vue-i18n.9f298e78.js";import"./@intlify.adb6fa1b.js";import"./vite-ssg.c39dd3a5.js";import"./vue-router.c9390081.js";import"./@vueuse.4736d5cf.js";import"./@unhead.6f05571b.js";import"./hookable.9d32b690.js";import"./axios.a2f4dec8.js";/* empty css                */import"./date-fns.14af0789.js";import"./vooks.66ae0053.js";import"./evtd.9eee5233.js";import"./treemate.80cdf2c2.js";import"./vueuc.0c4cd614.js";import"./seemly.815dc75a.js";import"./@css-render.7337505b.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./lodash-es.566cba93.js";import"./async-validator.fb49d0f5.js";import"./date-fns-tz.cb94cc8c.js";const C=e("div",{class:"i-carbon-settings"},null,-1),B=e("div",null,"Settings",-1),N=e("p",null,null,-1),tt=d({__name:"Settings",setup(h){const r=f(),{websites:a}=_(r),t=g(JSON.stringify(a.value,null,2));function u(){try{const o=JSON.parse(t.value);r.setWebsites(o),window.$message.info("load success")}catch(o){window.$message.console.error("load failure"),console.log(o)}}function p(){t.value=JSON.stringify(a.value,null,2),window.$message.info("dump success")}return(o,l)=>{const s=x,m=S;return v(),w(s,{vertical:"",align:"center",class:"settings"},{default:n(()=>[i(s,{justify:"space-evenly","text-4xl":"","my-xl":""},{default:n(()=>[C,B]),_:1}),i(m,{value:y(t),"onUpdate:value":l[0]||(l[0]=c=>b(t)?t.value=c:null),autosize:{minRows:5,maxRows:20},type:"textarea",size:"large"},null,8,["value"]),i(s,{"my-xl":"",justify:"space-around"},{default:n(()=>[e("button",{btn:"",onClick:p}," \u5BFC\u51FA "),N,e("button",{btn:"",onClick:u}," \u5BFC\u5165 ")]),_:1})]),_:1})}}});export{tt as default};
