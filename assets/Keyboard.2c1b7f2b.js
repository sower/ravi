import{_ as w}from"./Favicon.vue_vue_type_script_setup_true_lang.75e03348.js";import{m as C,f as x,r as u,p as K,R as S,W as a,a0 as n,F as d,a3 as _,$ as f,u as p,X as $,a6 as L,j as N,Z as g}from"./@vue.8936e839.js";import{u as B,b as E}from"./index.eaa0dab0.js";import"./naive-ui.fffdf306.js";import"./date-fns.a65ded87.js";import"./axios.d07afc41.js";import"./vooks.04193f27.js";import"./evtd.9eee5233.js";import"./treemate.80cdf2c2.js";import"./vueuc.130a384e.js";import"./seemly.815dc75a.js";import"./@css-render.ecf224b2.js";import"./vdirs.9b78243b.js";import"./@juggle.32c34d6c.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./lodash-es.566cba93.js";import"./async-validator.fb49d0f5.js";import"./date-fns-tz.60c795ea.js";import"./vue-i18n.67d7ed8f.js";import"./@intlify.adb6fa1b.js";import"./pinia.2dff39de.js";import"./vite-ssg.9953a0af.js";import"./vue-router.fb34c92e.js";import"./@vueuse.f97b4275.js";import"./@unhead.9d9441d6.js";import"./hookable.9d32b690.js";/* empty css                */const h={class:"container"},U=["onClick"],V=C({__name:"Keyboard",setup(Z){const v=[["1","2","3","4","5","6","7","8","9","0"],["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]],i=x({}),y=e=>{e&&(i[e.innerText.trim()]=e)},c=u(null),s=u(!1),o=B().getHotKeys,k=e=>{!s.value&&o[e]&&window.open(o[e].url)},m=e=>{const t=e.key.toUpperCase();!s.value&&/^[\dA-Z]$/.test(t)&&(i[t].className="press"),e.code==="Space"&&(e.preventDefault(),c.value.classList.add("press"),s.value=!s.value,window.$message.success(`${s.value?"Open":"Close"} Edit mode`))};return K(()=>{document.addEventListener("keydown",m),document.onkeyup=function(e){const t=e.key.toUpperCase();/^[\dA-Z]$/.test(t)&&(i[t].className=""),c.value.classList.remove("press"),!s.value&&o[t]&&window.open(o[t].url)}}),S(()=>{document.removeEventListener("keydown",m),document.onkeyup=null}),(e,t)=>{const b=w;return a(),n("div",h,[(a(),n(d,null,_(v,l=>f("div",{key:l,class:"row"},[(a(!0),n(d,null,_(l,r=>(a(),n("button",{key:r,ref_for:!0,ref:y,onClick:D=>k(r)},[p(o)[r]?(a(),$(b,{key:0,class:"fav",src:p(o)[r].url,text:p(o)[r].name},null,8,["src","text"])):L("",!0),N(" "+g(r),1)],8,U))),128))])),64)),f("button",{ref_key:"space",ref:c,class:"space"}," Space ",512)])}}});const le=E(V,[["__scopeId","data-v-8dc6aa61"]]);export{le as default};
