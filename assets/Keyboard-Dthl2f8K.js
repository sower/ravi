import{_ as h}from"./Favicon.vue_vue_type_script_setup_true_lang-BBMHhUL1.js";import{c as S,a as E}from"./index-B7IryH1m.js";import{u as K}from"./website-Dsn294Dy.js";import{M as L}from"./naive-ui@2.41.0_vue@3.5.13_typescript@5.7.3_-CIpljs1d.js";import{E as V,b as $,d as B,U as i,O as a,R as c,F as _,V as v,N as U,W as A,l as T,P as l,A as b}from"./@vue_runtime-core@3.5.13-Cb-Lzkic.js";import{u as D}from"./vue-i18n@10.0.5_vue@3.5.13_typescript@5.7.3_-C-MjfSiH.js";import{g as F,q as y,u as n}from"./@vue_reactivity@3.5.13-DMa_mvt2.js";import{J as u}from"./@vue_shared@3.5.13-BI8cG9WF.js";import"./common-he2xlsDv.js";import"./@vueuse_core@12.7.0_typescript@5.7.3-MVPZ38Cl.js";import"./@vueuse_shared@12.7.0_typescript@5.7.3-CbZll9AF.js";import"./pinia@2.3.1_typescript@5.7.3_vue@3.5.13_typescript@5.7.3_-CK8v8DeV.js";import"./vite-ssg@25.2.0_prettier@3.5.2_vite@6.1.1_@types_node@22.13.5_jiti@2.4.2_terser@5.39.0_tsx@4._ruhdw6qurzoadi77gcdrteer6q-DZheiiV3.js";import"./@vue_runtime-dom@3.5.13-DfqiEize.js";import"./vue-router@4.5.0_vue@3.5.13_typescript@5.7.3_-C_dL1SOE.js";import"./@unhead_vue@1.11.19_vue@3.5.13_typescript@5.7.3_-biCGB3B5.js";import"./unhead@1.11.19-Dc9YxlN5.js";import"./@unhead_dom@1.11.19-BjiGwb0c.js";import"./@unhead_shared@1.11.19-DkCobDbq.js";import"./hookable@5.5.3-B8xFkYCm.js";/* empty css                             */import"./@intlify_shared@10.0.5-ETn5s-WQ.js";import"./@intlify_core-base@10.0.5-DrncvHeh.js";import"./@intlify_message-compiler@10.0.5-J3zsFpIG.js";import"./date-fns@3.6.0-C2TYS9Rb.js";import"./vueuc@0.4.64_vue@3.5.13_typescript@5.7.3_-CkMIUC6i.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./seemly@0.3.10-vwiZZiLp.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.13_typescript@5.7.3_-C_LhJcnU.js";import"./vooks@0.2.12_vue@3.5.13_typescript@5.7.3_-g1Aia_to.js";import"./vdirs@0.1.8_vue@3.5.13_typescript@5.7.3_-BAjskub0.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-HRdUPn5m.js";import"./lodash-es@4.17.21-Je7ZdWGk.js";import"./async-validator@4.2.5-9PlIezaS.js";import"./date-fns-tz@3.2.0_date-fns@3.6.0--sBon5vR.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";const I={class:"container"},M=["onClick"],O=V({__name:"Keyboard",setup(R){const{t:g}=D();S(g("header.keyboard-mode"));const w=[["1","2","3","4","5","6","7","8","9","0"],["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]],p=F({});function k(e){e&&(p[e.innerText.trim()]=e)}const m=y(null),s=y(!1),t=K().getHotKeys;function C(e){!s.value&&t[e]&&window.open(t[e].url)}function d(e){const r=e.key.toUpperCase();!s.value&&/^[\dA-Z]$/.test(r)&&(p[r].className="press"),e.code==="Space"&&(e.preventDefault(),m.value.classList.add("press"),s.value=!s.value,window.$message.success(`${s.value?"Open":"Close"} Edit mode`))}return $(()=>{document.addEventListener("keydown",d),document.onkeyup=function(e){const r=e.key.toUpperCase();/^[\dA-Z]$/.test(r)&&(p[r].className=""),m.value.classList.remove("press"),!s.value&&t[r]&&window.open(t[r].url)}}),B(()=>{document.removeEventListener("keydown",d),document.onkeyup=null}),(e,r)=>{const x=h,N=L;return a(),i("div",I,[(a(),i(_,null,v(w,f=>c("div",{key:f,class:"row"},[(a(!0),i(_,null,v(f,o=>(a(),i("button",{key:o,ref_for:!0,ref:k,onClick:Z=>C(o)},[n(t)[o]?(a(),U(x,{key:0,class:"fav",src:n(t)[o].url,text:n(t)[o].name},null,8,["src","text"])):A("",!0),T(N,{style:{"text-align":"center"},disabled:!n(t)[o],trigger:"hover"},{trigger:l(()=>[b(u(o),1)]),footer:l(()=>[b(u(n(t)[o].url),1)]),default:l(()=>[c("span",null,u(n(t)[o].name),1)]),_:2},1032,["disabled"])],8,M))),128))])),64)),c("button",{ref_key:"space",ref:m,class:"space"}," Space ",512)])}}}),Le=E(O,[["__scopeId","data-v-5ad63624"]]);export{Le as default};
