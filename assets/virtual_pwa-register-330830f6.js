import{_ as c}from"./index-956658bb.js";import"./vue-i18n-4788aa8b.js";import"./@intlify-e1b6f745.js";import"./@vue-c2cdc001.js";import"./@vueuse-48b26b9c.js";import"./@unhead-b7666839.js";import"./hookable-48cbdad6.js";import"./pinia-db1c6930.js";import"./vue-demi-71ba0ef2.js";import"./naive-ui-7d8c2a5d.js";import"./date-fns-9efb2483.js";import"./vooks-37d1beb9.js";import"./evtd-b614532e.js";import"./treemate-25c27bff.js";import"./seemly-76b7b838.js";import"./vueuc-db57d0e1.js";import"./@css-render-8c604450.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-ef54f42e.js";import"./async-validator-dee29e8b.js";import"./date-fns-tz-a0a6b18e.js";import"./vite-ssg-97b2d4f6.js";import"./vue-router-4a9977ed.js";import"./axios-ade1294f.js";import"./form-data-d2a9677b.js";/* empty css                */function F(s={}){const{immediate:n=!1,onNeedRefresh:v,onOfflineReady:t,onRegistered:o,onRegisteredSW:e,onRegisterError:p}=s;let r,m;const d=async(a=!0)=>{await m};async function l(){if("serviceWorker"in navigator){const{Workbox:a}=await c(()=>import("./workbox-window-295a6886.js"),[]);r=new a("/ravi/sw.js",{scope:"/ravi/",type:"classic"}),r.addEventListener("activated",i=>{(i.isUpdate||i.isExternal)&&window.location.reload()}),r.addEventListener("installed",i=>{i.isUpdate||t==null||t()}),r.register({immediate:n}).then(i=>{e?e("/ravi/sw.js",i):o==null||o(i)}).catch(i=>{p==null||p(i)})}}return m=l(),d}export{F as registerSW};