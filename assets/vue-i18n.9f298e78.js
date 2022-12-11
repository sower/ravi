import{C as bt,a as dt,N as Et,D as pt,r as Ot,b as It,s as Lt,c as Tt,d as yt,u as M,e as Nt,f as Se,g as vt,h as oe,i as se,j as ce,k as Rt,l as Ft,p as ue,t as ie,M as _e,m as me,n as fe,o as ge,q as be,v as de}from"./@intlify.adb6fa1b.js";import{q as ke,G as St,i as kt,h as Pt,P as Ct,r as V,m as w,a as $,F as ht,g as Z,b as Dt,Q as At,R as Mt}from"./@vue.f5112019.js";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const q=typeof window<"u",Vt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",P=e=>Vt?Symbol(e):e,j=e=>typeof e=="number"&&isFinite(e),Ee=e=>Ce(e)==="[object RegExp]",wt=e=>v(e)&&Object.keys(e).length===0,F=Object.assign;let pe;const Pe=()=>pe||(pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ut=Object.prototype.hasOwnProperty;function ee(e,a){return Ut.call(e,a)}const R=Array.isArray,Y=e=>typeof e=="function",b=e=>typeof e=="string",k=e=>typeof e=="boolean",y=e=>e!==null&&typeof e=="object",jt=Object.prototype.toString,Ce=e=>jt.call(e),v=e=>Ce(e)==="[object Object]";/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Wt="9.2.2";function xt(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Pe().__INTLIFY_PROD_DEVTOOLS__=!1)}bt.__EXTEND_POINT__;let he=dt.__EXTEND_POINT__;const O=()=>++he,L={UNEXPECTED_RETURN_TYPE:he,INVALID_ARGUMENT:O(),MUST_BE_CALL_SETUP_TOP:O(),NOT_INSLALLED:O(),NOT_AVAILABLE_IN_LEGACY_MODE:O(),REQUIRED_VALUE:O(),INVALID_VALUE:O(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:O(),NOT_INSLALLED_WITH_PROVIDE:O(),UNEXPECTED_ERROR:O(),NOT_COMPATIBLE_LEGACY_VUE_I18N:O(),BRIDGE_SUPPORT_VUE_2_ONLY:O(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:O(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:O(),__EXTEND_POINT__:O()};function T(e,...a){return Tt(e,null,void 0)}const K=P("__transrateVNode"),J=P("__datetimeParts"),Q=P("__numberParts"),Yt=P("__setPluralRules");P("__intlifyMeta");const Gt=P("__injectWithOption");function z(e){if(!y(e))return e;for(const a in e)if(!!ee(e,a))if(!a.includes("."))y(e[a])&&z(e[a]);else{const n=a.split("."),o=n.length-1;let s=e;for(let c=0;c<o;c++)n[c]in s||(s[n[c]]={}),s=s[n[c]];s[n[o]]=e[a],delete e[a],y(s[n[o]])&&z(s[n[o]])}return e}function De(e,a){const{messages:n,__i18n:o,messageResolver:s,flatJson:c}=a,l=v(n)?n:R(o)?{}:{[e]:{}};if(R(o)&&o.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:_,resource:m}=u;_?(l[_]=l[_]||{},U(m,l[_])):U(m,l)}else b(u)&&U(JSON.parse(u),l)}),s==null&&c)for(const u in l)ee(l,u)&&z(l[u]);return l}const G=e=>!y(e)||R(e);function U(e,a){if(G(e)||G(a))throw T(L.INVALID_VALUE);for(const n in e)ee(e,n)&&(G(e[n])||G(a[n])?a[n]=e[n]:U(e[n],a[n]))}function Ae(e){return e.type}function Ht(e,a,n){let o=y(a.messages)?a.messages:{};"__i18nGlobal"in n&&(o=De(e.locale.value,{messages:o,__i18n:n.__i18nGlobal}));const s=Object.keys(o);s.length&&s.forEach(c=>{e.mergeLocaleMessage(c,o[c])});{if(y(a.datetimeFormats)){const c=Object.keys(a.datetimeFormats);c.length&&c.forEach(l=>{e.mergeDateTimeFormat(l,a.datetimeFormats[l])})}if(y(a.numberFormats)){const c=Object.keys(a.numberFormats);c.length&&c.forEach(l=>{e.mergeNumberFormat(l,a.numberFormats[l])})}}}function Oe(e){return At(Mt,null,e,0)}const Ie="__INTLIFY_META__";let Le=0;function Te(e){return(a,n,o,s)=>e(n,o,Z()||void 0,s)}const Bt=()=>{const e=Z();let a=null;return e&&(a=Ae(e)[Ie])?{[Ie]:a}:null};function Me(e={},a){const{__root:n}=e,o=n===void 0;let s=k(e.inheritLocale)?e.inheritLocale:!0;const c=V(n&&s?n.locale.value:b(e.locale)?e.locale:yt),l=V(n&&s?n.fallbackLocale.value:b(e.fallbackLocale)||R(e.fallbackLocale)||v(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),u=V(De(c.value,e)),_=V(v(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),m=V(v(e.numberFormats)?e.numberFormats:{[c.value]:{}});let p=n?n.missingWarn:k(e.missingWarn)||Ee(e.missingWarn)?e.missingWarn:!0,f=n?n.fallbackWarn:k(e.fallbackWarn)||Ee(e.fallbackWarn)?e.fallbackWarn:!0,g=n?n.fallbackRoot:k(e.fallbackRoot)?e.fallbackRoot:!0,I=!!e.fallbackFormat,C=Y(e.missing)?e.missing:null,S=Y(e.missing)?Te(e.missing):null,A=Y(e.postTranslation)?e.postTranslation:null,H=n?n.warnHtmlMessage:k(e.warnHtmlMessage)?e.warnHtmlMessage:!0,B=!!e.escapeParameter;const ae=n?n.modifiers:v(e.modifiers)?e.modifiers:{};let W=e.pluralRules||n&&n.pluralRules,i;i=(()=>{o&&de(null);const t={version:Wt,locale:c.value,fallbackLocale:l.value,messages:u.value,modifiers:ae,pluralRules:W,missing:S===null?void 0:S,missingWarn:p,fallbackWarn:f,fallbackFormat:I,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:H,escapeParameter:B,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=_.value,t.numberFormats=m.value,t.__datetimeFormatters=v(i)?i.__datetimeFormatters:void 0,t.__numberFormatters=v(i)?i.__numberFormatters:void 0;const r=vt(t);return o&&de(r),r})(),M(i,c.value,l.value);function Ue(){return[c.value,l.value,u.value,_.value,m.value]}const je=w({get:()=>c.value,set:t=>{c.value=t,i.locale=c.value}}),We=w({get:()=>l.value,set:t=>{l.value=t,i.fallbackLocale=l.value,M(i,c.value,t)}}),xe=w(()=>u.value),Ye=w(()=>_.value),Ge=w(()=>m.value);function He(){return Y(A)?A:null}function Be(t){A=t,i.postTranslation=t}function Xe(){return C}function $e(t){t!==null&&(S=Te(t)),C=t,i.missing=S}const h=(t,r,N,E,X,x)=>{Ue();let D;if(__INTLIFY_PROD_DEVTOOLS__)try{ce(Bt()),o||(i.fallbackContext=n?Rt():void 0),D=t(i)}finally{ce(null),o||(i.fallbackContext=void 0)}else D=t(i);if(j(D)&&D===Ft){const[gt,un]=r();return n&&g?E(n):X(gt)}else{if(x(D))return D;throw T(L.UNEXPECTED_RETURN_TYPE)}};function re(...t){return h(r=>Reflect.apply(ie,null,[r,...t]),()=>ue(...t),"translate",r=>Reflect.apply(r.t,r,[...t]),r=>r,r=>b(r))}function qe(...t){const[r,N,E]=t;if(E&&!y(E))throw T(L.INVALID_ARGUMENT);return re(r,N,F({resolvedMessage:!0},E||{}))}function Ke(...t){return h(r=>Reflect.apply(fe,null,[r,...t]),()=>me(...t),"datetime format",r=>Reflect.apply(r.d,r,[...t]),()=>_e,r=>b(r))}function Je(...t){return h(r=>Reflect.apply(be,null,[r,...t]),()=>ge(...t),"number format",r=>Reflect.apply(r.n,r,[...t]),()=>_e,r=>b(r))}function Qe(t){return t.map(r=>b(r)||j(r)||k(r)?Oe(String(r)):r)}const ze={normalize:Qe,interpolate:t=>t,type:"vnode"};function Ze(...t){return h(r=>{let N;const E=r;try{E.processor=ze,N=Reflect.apply(ie,null,[E,...t])}finally{E.processor=null}return N},()=>ue(...t),"translate",r=>r[K](...t),r=>[Oe(r)],r=>R(r))}function et(...t){return h(r=>Reflect.apply(be,null,[r,...t]),()=>ge(...t),"number format",r=>r[Q](...t),()=>[],r=>b(r)||R(r))}function tt(...t){return h(r=>Reflect.apply(fe,null,[r,...t]),()=>me(...t),"datetime format",r=>r[J](...t),()=>[],r=>b(r)||R(r))}function nt(t){W=t,i.pluralRules=W}function at(t,r){const N=b(r)?r:c.value,E=le(N);return i.messageResolver(E,t)!==null}function rt(t){let r=null;const N=Se(i,l.value,c.value);for(let E=0;E<N.length;E++){const X=u.value[N[E]]||{},x=i.messageResolver(X,t);if(x!=null){r=x;break}}return r}function lt(t){const r=rt(t);return r!=null?r:n?n.tm(t)||{}:{}}function le(t){return u.value[t]||{}}function ot(t,r){u.value[t]=r,i.messages=u.value}function st(t,r){u.value[t]=u.value[t]||{},U(r,u.value[t]),i.messages=u.value}function ct(t){return _.value[t]||{}}function ut(t,r){_.value[t]=r,i.datetimeFormats=_.value,oe(i,t,r)}function it(t,r){_.value[t]=F(_.value[t]||{},r),i.datetimeFormats=_.value,oe(i,t,r)}function _t(t){return m.value[t]||{}}function mt(t,r){m.value[t]=r,i.numberFormats=m.value,se(i,t,r)}function ft(t,r){m.value[t]=F(m.value[t]||{},r),i.numberFormats=m.value,se(i,t,r)}Le++,n&&q&&($(n.locale,t=>{s&&(c.value=t,i.locale=t,M(i,c.value,l.value))}),$(n.fallbackLocale,t=>{s&&(l.value=t,i.fallbackLocale=t,M(i,c.value,l.value))}));const d={id:Le,locale:je,fallbackLocale:We,get inheritLocale(){return s},set inheritLocale(t){s=t,t&&n&&(c.value=n.locale.value,l.value=n.fallbackLocale.value,M(i,c.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:xe,get modifiers(){return ae},get pluralRules(){return W||{}},get isGlobal(){return o},get missingWarn(){return p},set missingWarn(t){p=t,i.missingWarn=p},get fallbackWarn(){return f},set fallbackWarn(t){f=t,i.fallbackWarn=f},get fallbackRoot(){return g},set fallbackRoot(t){g=t},get fallbackFormat(){return I},set fallbackFormat(t){I=t,i.fallbackFormat=I},get warnHtmlMessage(){return H},set warnHtmlMessage(t){H=t,i.warnHtmlMessage=t},get escapeParameter(){return B},set escapeParameter(t){B=t,i.escapeParameter=t},t:re,getLocaleMessage:le,setLocaleMessage:ot,mergeLocaleMessage:st,getPostTranslationHandler:He,setPostTranslationHandler:Be,getMissingHandler:Xe,setMissingHandler:$e,[Yt]:nt};return d.datetimeFormats=Ye,d.numberFormats=Ge,d.rt=qe,d.te=at,d.tm=lt,d.d=Ke,d.n=Je,d.getDateTimeFormat=ct,d.setDateTimeFormat=ut,d.mergeDateTimeFormat=it,d.getNumberFormat=_t,d.setNumberFormat=mt,d.mergeNumberFormat=ft,d[Gt]=e.__injectWithOption,d[K]=Ze,d[J]=tt,d[Q]=et,d}const te={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Xt({slots:e},a){return a.length===1&&a[0]==="default"?(e.default?e.default():[]).reduce((o,s)=>o=[...o,...R(s.children)?s.children:[s]],[]):a.reduce((n,o)=>{const s=e[o];return s&&(n[o]=s()),n},{})}function Ve(e){return ht}const ye={name:"i18n-t",props:F({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>j(e)||!isNaN(e)}},te),setup(e,a){const{slots:n,attrs:o}=a,s=e.i18n||ne({useScope:e.scope,__useComponent:!0});return()=>{const c=Object.keys(n).filter(f=>f!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=b(e.plural)?+e.plural:e.plural);const u=Xt(a,c),_=s[K](e.keypath,u,l),m=F({},o),p=b(e.tag)||y(e.tag)?e.tag:Ve();return ke(p,m,_)}}};function $t(e){return R(e)&&!b(e[0])}function we(e,a,n,o){const{slots:s,attrs:c}=a;return()=>{const l={part:!0};let u={};e.locale&&(l.locale=e.locale),b(e.format)?l.key=e.format:y(e.format)&&(b(e.format.key)&&(l.key=e.format.key),u=Object.keys(e.format).reduce((g,I)=>n.includes(I)?F({},g,{[I]:e.format[I]}):g,{}));const _=o(e.value,l,u);let m=[l.key];R(_)?m=_.map((g,I)=>{const C=s[g.type],S=C?C({[g.type]:g.value,index:I,parts:_}):[g.value];return $t(S)&&(S[0].key=`${g.type}-${I}`),S}):b(_)&&(m=[_]);const p=F({},c),f=b(e.tag)||y(e.tag)?e.tag:Ve();return ke(f,p,m)}}const Ne={name:"i18n-n",props:F({value:{type:Number,required:!0},format:{type:[String,Object]}},te),setup(e,a){const n=e.i18n||ne({useScope:"parent",__useComponent:!0});return we(e,a,Et,(...o)=>n[Q](...o))}},ve={name:"i18n-d",props:F({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},te),setup(e,a){const n=e.i18n||ne({useScope:"parent",__useComponent:!0});return we(e,a,pt,(...o)=>n[J](...o))}};function qt(e,a){const n=e;if(e.mode==="composition")return n.__getInstance(a)||e.global;{const o=n.__getInstance(a);return o!=null?o.__composer:e.global.__composer}}function Kt(e){const a=l=>{const{instance:u,modifiers:_,value:m}=l;if(!u||!u.$)throw T(L.UNEXPECTED_ERROR);const p=qt(e,u.$),f=Re(m);return[Reflect.apply(p.t,p,[...Fe(f)]),p]};return{created:(l,u)=>{const[_,m]=a(u);q&&e.global===m&&(l.__i18nWatcher=$(m.locale,()=>{u.instance&&u.instance.$forceUpdate()})),l.__composer=m,l.textContent=_},unmounted:l=>{q&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:u})=>{if(l.__composer){const _=l.__composer,m=Re(u);l.textContent=Reflect.apply(_.t,_,[...Fe(m)])}},getSSRProps:l=>{const[u]=a(l);return{textContent:u}}}}function Re(e){if(b(e))return{path:e};if(v(e)){if(!("path"in e))throw T(L.REQUIRED_VALUE,"path");return e}else throw T(L.INVALID_VALUE)}function Fe(e){const{path:a,locale:n,args:o,choice:s,plural:c}=e,l={},u=o||{};return b(n)&&(l.locale=n),j(s)&&(l.plural=s),j(c)&&(l.plural=c),[a,u,l]}function Jt(e,a,...n){const o=v(n[0])?n[0]:{},s=!!o.useI18nComponentName;(k(o.globalInstall)?o.globalInstall:!0)&&(e.component(s?"i18n":ye.name,ye),e.component(Ne.name,Ne),e.component(ve.name,ve)),e.directive("t",Kt(a))}const Qt=P("global-vue-i18n");function fn(e={},a){const n=k(e.globalInjection)?e.globalInjection:!0,o=!0,s=new Map,[c,l]=zt(e),u=P("");function _(f){return s.get(f)||null}function m(f,g){s.set(f,g)}function p(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return o},async install(g,...I){g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,f),n&&on(g,f.global),Jt(g,f,...I);const C=g.unmount;g.unmount=()=>{f.dispose(),C()}},get global(){return l},dispose(){c.stop()},__instances:s,__getInstance:_,__setInstance:m,__deleteInstance:p};return f}}function ne(e={}){const a=Z();if(a==null)throw T(L.MUST_BE_CALL_SETUP_TOP);if(!a.isCE&&a.appContext.app!=null&&!a.appContext.app.__VUE_I18N_SYMBOL__)throw T(L.NOT_INSLALLED);const n=Zt(a),o=tn(n),s=Ae(a),c=en(e,s);if(c==="global")return Ht(o,e,s),o;if(c==="parent"){let _=nn(n,a,e.__useComponent);return _==null&&(_=o),_}const l=n;let u=l.__getInstance(a);if(u==null){const _=F({},e);"__i18n"in s&&(_.__i18n=s.__i18n),o&&(_.__root=o),u=Me(_),an(l,a),l.__setInstance(a,u)}return u}function zt(e,a,n){const o=St();{const s=o.run(()=>Me(e));if(s==null)throw T(L.UNEXPECTED_ERROR);return[o,s]}}function Zt(e){{const a=kt(e.isCE?Qt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!a)throw T(e.isCE?L.NOT_INSLALLED_WITH_PROVIDE:L.UNEXPECTED_ERROR);return a}}function en(e,a){return wt(e)?"__i18n"in a?"local":"global":e.useScope?e.useScope:"local"}function tn(e){return e.mode==="composition"?e.global:e.global.__composer}function nn(e,a,n=!1){let o=null;const s=a.root;let c=a.parent;for(;c!=null;){const l=e;if(e.mode==="composition"&&(o=l.__getInstance(c)),o!=null||s===c)break;c=c.parent}return o}function an(e,a,n){Pt(()=>{},a),Ct(()=>{e.__deleteInstance(a)},a)}const rn=["locale","fallbackLocale","availableLocales"],ln=["t","rt","d","n","tm"];function on(e,a){const n=Object.create(null);rn.forEach(o=>{const s=Object.getOwnPropertyDescriptor(a,o);if(!s)throw T(L.UNEXPECTED_ERROR);const c=Dt(s.value)?{get(){return s.value.value},set(l){s.value.value=l}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,o,c)}),e.config.globalProperties.$i18n=n,ln.forEach(o=>{const s=Object.getOwnPropertyDescriptor(a,o);if(!s||!s.value)throw T(L.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,s)})}Ot(Nt);It(Se);xt();if(__INTLIFY_PROD_DEVTOOLS__){const e=Pe();e.__INTLIFY__=!0,Lt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{fn as c,ne as u};
