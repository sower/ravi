import{s as F}from"./pinia@2.2.4_typescript@5.6.3_vue@3.5.12_typescript@5.6.3_-D24NGKxo.js";import{u as A}from"./website-zlxfp4nH.js";import{s as H,t as O,v as G,w as J,x as W,n as Q,y as Z,A as ee,B as V,C as K,m as L,D as te,E as ne,F as oe}from"./naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D4cbiTKP.js";import{y as S,N as d,O as y,P as a,R as $,k as e,i as M,U as b,t as R,F as E,V as P,n as se,D as B,p as ae}from"./@vue_runtime-core@3.5.12-KnjHTw7F.js";import{q as x,u as c,a as le}from"./@vue_reactivity@3.5.12-g-Lvtq_S.js";import{o as re,b as ie,c as ue,a as ce}from"./@vueuse_core@11.1.0_vue@3.5.12_typescript@5.6.3_-Yv-kXWql.js";import{o as j}from"./requests-zz1NTwqj.js";import{J as X}from"./@vue_shared@3.5.12-BOMFVqth.js";import{a as z,s as Y,c as pe}from"./index-BV-02SDE.js";import{h as _e}from"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.6.3_-CVk0eC74.js";import{_ as me}from"./Search-Prompt.vue_vue_type_script_setup_true_lang-gf92hYc3.js";import"./vue-demi@0.14.10_vue@3.5.12_typescript@5.6.3_-Dq6ymT-8.js";import"./date-fns@3.6.0-BYQXydFc.js";import"./@vue_runtime-dom@3.5.12-CWr_KtW9.js";import"./vooks@0.2.12_vue@3.5.12_typescript@5.6.3_-D8Rsv1Sm.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./treemate@0.3.11-HRdUPn5m.js";import"./vueuc@0.4.64_vue@3.5.12_typescript@5.6.3_-kqvdKGq3.js";import"./seemly@0.3.8-D9G0Xg2e.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.12_typescript@5.6.3_-6IDDgy2s.js";import"./vdirs@0.1.8_vue@3.5.12_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./lodash-es@4.17.21-CJQM_G14.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./date-fns-tz@3.2.0_date-fns@3.6.0-DuQ-CiuB.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";import"./axios@1.7.7-CoTZsgdJ.js";import"./vue-i18n@10.0.4_vue@3.5.12_typescript@5.6.3_-C7TTVHTu.js";import"./@intlify_shared@10.0.4-w5IYapEx.js";import"./@intlify_core-base@10.0.4-RIkX1U0C.js";import"./@intlify_message-compiler@10.0.4-CToo3eC7.js";import"./vite-ssg@0.23.8_critters@0.0.25_vite@5.4.9_@types_node@20.10.4_terser@5.26.0__vue-router@4.4._tpsi4qxyxd27btw6vqz7ijh4gm-CuxNj3V1.js";import"./vue-router@4.4.5_vue@3.5.12_typescript@5.6.3_-CLyaJ7WZ.js";import"./@unhead_vue@1.11.10_vue@3.5.12_typescript@5.6.3_-B8AFtn10.js";import"./unhead@1.11.10-OT7iNT2x.js";import"./@unhead_dom@1.11.10-CNTx9FV3.js";import"./@unhead_shared@1.11.10-C1bv5ODb.js";import"./hookable@5.5.3-B8xFkYCm.js";/* empty css                             */const de=S({__name:"Modal",setup(k){const _=A(),{currentSite:t,showModal:l}=F(_),r=x(null),v=o=>!o||/^\w$/.test(o),m={name:{required:!0,min:1,message:"至少有一个字符"},url:{required:!0,min:3,message:"最短长度为 3"},shortcut:{max:1,message:"只能是单个可视字符"}};function i(o){var n;o.preventDefault(),t.value.name=t.value.name.trim(),t.value.url=t.value.url.trim(),(n=r.value)==null||n.validate(g=>{if(g){window.$message.error("Invalid");return}_.setSite(t.value),window.$message.info("保存成功"),l.value=!1})}return(o,n)=>{const g=H,f=O,w=G,u=J,p=W;return d(),y(p,{show:c(l),"onUpdate:show":n[3]||(n[3]=s=>le(l)?l.value=s:null),preset:"dialog",title:"编辑"},{header:a(()=>n[4]||(n[4]=[$("div",null,"自定义站点",-1)])),icon:a(()=>[e(g,{"i-carbon-edit":"",size:"18"})]),action:a(()=>[$("button",{btn:"",onClick:i}," 保存 ")]),default:a(()=>[e(u,{ref_key:"formRef",ref:r,model:c(t),rules:m},{default:a(()=>[e(w,{label:"网站名",path:"name"},{default:a(()=>[e(f,{value:c(t).name,"onUpdate:value":n[0]||(n[0]=s=>c(t).name=s),maxlength:20},null,8,["value"])]),_:1}),e(w,{label:"网站地址",path:"url"},{default:a(()=>[e(f,{value:c(t).url,"onUpdate:value":n[1]||(n[1]=s=>c(t).url=s)},null,8,["value"])]),_:1}),e(w,{label:"快捷键",path:"shortcut"},{default:a(()=>[e(f,{value:c(t).shortcut,"onUpdate:value":n[2]||(n[2]=s=>c(t).shortcut=s),"allow-input":v,maxlength:1},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])}}}),fe=["onClick"],ve=S({__name:"Square",props:{title:String,sites:{type:Object,required:!0},callback:Function},setup(k){const _=k,t=A(),l=x(_.title),r=x("success"),v=x(!1);function m(u){u.preventDefault(),v.value=!0}function i(){var u;if(((u=l.value)==null?void 0:u.trim().length)===0){r.value="error",window.$message.warning("The input cannot be blank");return}r.value="success",v.value=!1,t.setTitle(_.title,l.value),window.$message.success("Save successfully")}const o=x(null);re(o,u=>i());const n=M("showContext"),g=M("positionX"),f=M("positionY");function w(u,p){p.preventDefault(),n.value=!1,se().then(()=>{n.value=!0,g.value=p.clientX,f.value=p.clientY,t.setCurrentSite(u)})}return(u,p)=>{const s=O,N=Q,T=Z,U=ee,I=V,q=K;return d(),b(E,null,[e(T,{prefix:"bar",class:"ml-1 max-w-[90%]",onClick:m},{default:a(()=>[v.value?(d(),y(s,{key:0,ref_key:"target",ref:o,value:l.value,"onUpdate:value":p[0]||(p[0]=h=>l.value=h),type:"text",status:r.value,maxlength:"10",minlength:"1",autofocus:"",clearable:""},null,8,["value","status"])):(d(),y(N,{key:1,strong:""},{default:a(()=>[R(X(l.value),1)]),_:1}))]),_:1}),e(q,{"x-gap":8,"y-gap":8,cols:3,class:"max-w-[400px]"},{default:a(()=>[(d(!0),b(E,null,P(k.sites,(h,D)=>(d(),y(I,{key:h.id,onContextmenu:C=>w({...h,index:D,group:k.title},C)},{default:a(()=>[$("div",{class:"square",onClick:C=>c(j)(h.url)},[e(U,{"max-w-sm":""},{default:a(()=>[R(X(h.name),1)]),_:2},1024)],8,fe)]),_:2},1032,["onContextmenu"]))),128))]),_:1})],64)}}}),ge=z(ve,[["__scopeId","data-v-ef791af3"]]),we=S({__name:"Grid",setup(k){const _=A(),{websites:t,showModal:l,getHotKeys:r}=F(_),v=[{label:"Edit",key:"edit"}],m=x(!1),i=x(0),o=x(0);B("showContext",m),B("positionX",i),B("positionY",o);function n(p){m.value=!1,_.setShowModal(!0)}function g(){m.value=!1}const f=ie(),w=ae(()=>{var p,s;return((p=f.value)==null?void 0:p.tagName)!=="INPUT"&&((s=f.value)==null?void 0:s.tagName)!=="TEXTAREA"}),{current:u}=ue();return _e(u,()=>{if(!w.value||m.value||l.value)return;const p=[...u.keys()].map(s=>s.toUpperCase());for(const s of p)r.value[s]&&j(r.value[s].url);u.clear()}),(p,s)=>{const N=ge,T=V,U=K,I=L,q=de;return d(),b(E,null,[e(U,{"item-responsive":"","x-gap":35,"y-gap":35,cols:"1 800:2 1200:3"},{default:a(()=>[(d(!0),b(E,null,P(c(t),(h,D,C)=>(d(),y(T,{key:C,class:"mx-auto"},{default:a(()=>[e(N,{sites:h,title:D},null,8,["sites","title"])]),_:2},1024))),128))]),_:1}),e(I,{placement:"bottom-start",trigger:"manual",x:c(i),y:c(o),options:v,show:c(m),"on-clickoutside":g,onSelect:n},null,8,["x","y","show"]),e(q)],64)}}}),he=S({__name:"Dropdown-Search",setup(k){const _=Y.value.engineType.filter(i=>i[2]),{engineList:t}=Y.value,l=_.map(i=>({label:i[0],key:i[1],children:t[i[1]].map(o=>({label:o.name,key:o.url,favicon:o.favicon}))})),r=ce("currentEngine",l[0].children[0]);function v(i,o){r.value=o}function m(i){window.open(r.value.key.replaceAll("%s",i))}return(i,o)=>{const n=te,g=ne,f=L,w=me,u=oe;return d(),y(u,null,{default:a(()=>[e(f,{options:c(l),"on-select":v},{default:a(()=>[e(g,null,{default:a(()=>[e(n,{"mr-1":"",color:"white",size:"small",src:c(r).favicon},null,8,["src"]),R(" "+X(c(r).label),1)]),_:1})]),_:1},8,["options"]),e(w,{"do-search":m})]),_:1})}}}),xe={"p-2xl":""},ke={class:"search-box"},ye=S({__name:"index",setup(k){return pe("Lattice"),(_,t)=>{const l=he,r=we;return d(),b("div",xe,[$("div",ke,[e(l)]),e(r)])}}}),ct=z(ye,[["__scopeId","data-v-197d9415"]]);export{ct as default};