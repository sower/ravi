import{u as b}from"./vue-i18n-a559acfe.js";import{l as O}from"./lodash-35bb256f.js";import{s as T}from"./pinia-9737e2b4.js";import{u as B,c as p,s as C}from"./index-bedd62d6.js";import{L as I,h as k,a as w,M as R,i as E,O as J,j as V,b as W}from"./naive-ui-bc1c7301.js";import{p as h,r as N,X as x,Y as y,Z as a,U as o,k as z,_ as v,u as n,b as U,a0 as c}from"./@vue-453cc9ea.js";import"./@intlify-e1b6f745.js";import"./date-fns-9efb2483.js";import"./@vueuse-aeb3fbf1.js";import"./@unhead-8c20db88.js";import"./hookable-48cbdad6.js";import"./vite-ssg-c931e7bc.js";import"./vue-router-3ad27e74.js";import"./axios-c47e0cf1.js";import"./form-data-d2a9677b.js";/* empty css                */import"./vooks-6030c286.js";import"./evtd-b614532e.js";import"./treemate-25c27bff.js";import"./seemly-76b7b838.js";import"./vueuc-ad710fb9.js";import"./@css-render-fed58b40.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-ef54f42e.js";import"./async-validator-dee29e8b.js";import"./date-fns-tz-49adbfbd.js";const D=c("p",null,null,-1),H=h({__name:"WebsitesText",setup(S){const{t:l}=b(),_=B(),{websites:d}=T(_),u=N(JSON.stringify(d.value,null,2));function s(e,r,t,i){if(O.isEmpty(e)||e.length<t||e.length>i)throw new Error(`${r} (${e}) should be ${t}-${i} characters`)}function m(e){for(const r of Object.keys(e))s(r,"Title name",1,10),e[r].forEach((t,i)=>{s(t==null?void 0:t.name,"Site name",1,20),s(t==null?void 0:t.url,"Site url",3,1e3),t!=null&&t.shortcut&&s(t.shortcut,"Site shortcut",1,1)})}function f(){try{const e=JSON.parse(u.value);m(e),_.setWebsites(e),window.$message.info("load success")}catch(e){window.$message.error(`load failure: ${e.message}`)}}function g(){u.value=JSON.stringify(d.value,null,2),window.$message.info("dump success")}return(e,r)=>{const t=I,i=k,$=w;return x(),y($,{vertical:"",align:"center"},{default:a(()=>[o(t,null,{default:a(()=>[z(v(n(l)("settings.websites")),1)]),_:1}),o(i,{value:n(u),"onUpdate:value":r[0]||(r[0]=j=>U(u)?u.value=j:null),class:"min-w-[50vw]",autosize:{minRows:5,maxRows:20},type:"textarea",size:"large"},null,8,["value"]),o($,{"my-xl":"",justify:"space-around"},{default:a(()=>[c("button",{btn:"",onClick:g},v(n(l)("settings.dump")),1),D,c("button",{btn:"",onClick:f},v(n(l)("settings.load")),1)]),_:1})]),_:1})}}}),M=c("div",{"text-2xl":"",class:"i-carbon-image"},null,-1),X=h({__name:"BgImage",setup(S){const{t:l}=b(),_=N(p.value.url);function d(){p.value.url=_.value,window.$message.info("ok")}return(u,s)=>{const m=w,f=R,g=E,e=k,r=J,t=V;return x(),y(m,{vertical:"",align:"center"},{default:a(()=>[o(m,{justify:"space-evenly","text-xl":"","my-sm":""},{default:a(()=>[M,c("div",null,v(n(l)("settings.background-image")),1)]),_:1}),o(t,{model:n(p),"label-placement":"left","label-width":"auto","w-xs":""},{default:a(()=>[o(g,{label:n(l)("settings.show"),path:"isShow"},{default:a(()=>[o(f,{value:n(p).isShow,"onUpdate:value":s[0]||(s[0]=i=>n(p).isShow=i)},null,8,["value"])]),_:1},8,["label"]),o(g,{label:n(l)("settings.url"),path:"url"},{default:a(()=>[o(e,{value:n(_),"onUpdate:value":s[1]||(s[1]=i=>U(_)?_.value=i:null),"on-blur":d,placeholder:"Image url or base64"},null,8,["value"])]),_:1},8,["label"]),o(g,{label:n(l)("settings.opacity"),path:"opacity"},{default:a(()=>[o(r,{value:n(p).opacity,"onUpdate:value":s[2]||(s[2]=i=>n(p).opacity=i),max:1,step:.01},null,8,["value","step"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1})}}}),Y=c("div",{class:"i-carbon-settings"},null,-1),Z=c("div",{"text-sm":"",class:"i-carbon:split-screen"},null,-1),xt=h({__name:"Settings",setup(S){const{t:l}=b();return C(l("header.setting")),(_,d)=>{const u=w,s=X,m=W,f=H;return x(),y(u,{vertical:"",align:"center",class:"settings"},{default:a(()=>[o(u,{justify:"space-evenly","text-4xl":"","my-xl":""},{default:a(()=>[Y,c("div",null,v(n(l)("header.setting")),1)]),_:1}),o(s),o(m,{class:"w-xs","title-placement":"center"},{default:a(()=>[Z]),_:1}),o(f)]),_:1})}}});export{xt as default};