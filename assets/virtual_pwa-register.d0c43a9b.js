import{_ as c}from"./index.6da8889d.js";import"./vue-i18n.9f298e78.js";import"./@intlify.adb6fa1b.js";import"./@vue.f5112019.js";import"./pinia.c5007c9c.js";import"./naive-ui.e9eba171.js";import"./date-fns.14af0789.js";import"./axios.a2f4dec8.js";import"./vooks.66ae0053.js";import"./evtd.9eee5233.js";import"./treemate.80cdf2c2.js";import"./vueuc.0c4cd614.js";import"./seemly.815dc75a.js";import"./@css-render.7337505b.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./lodash-es.566cba93.js";import"./async-validator.fb49d0f5.js";import"./date-fns-tz.cb94cc8c.js";import"./vite-ssg.c39dd3a5.js";import"./vue-router.c9390081.js";import"./@vueuse.4736d5cf.js";import"./@unhead.6f05571b.js";import"./hookable.9d32b690.js";/* empty css                */function C(n={}){const{immediate:a=!1,onNeedRefresh:f,onOfflineReady:t,onRegistered:e,onRegisteredSW:o,onRegisterError:m}=n;let r,p;const d=async(s=!0)=>{await p};async function l(){if("serviceWorker"in navigator){const{Workbox:s,messageSW:g}=await c(()=>import("./workbox-window.4a8794bb.js"),[]);r=new s("/sw.js",{scope:"/",type:"classic"}),r.addEventListener("activated",i=>{i.isUpdate?window.location.reload():t==null||t()}),r.register({immediate:a}).then(i=>{o?o("/sw.js",i):e==null||e(i)}).catch(i=>{m==null||m(i)})}}return p=l(),d}export{C as registerSW};
