if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let n={};const a=s=>l(s,u),t={module:{uri:u},exports:n,require:a};e[u]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),n)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-13ccba56.js",revision:null},{url:"assets/@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js",revision:null},{url:"assets/@css-render_vue3-ssr@0.15.12_vue@3.2.45-f198a291.js",revision:null},{url:"assets/@emotion_hash@0.8.0-8a8e73f6.js",revision:null},{url:"assets/@intlify_core-base@9.2.2-da312fc2.js",revision:null},{url:"assets/@intlify_devtools-if@9.2.2-c61c979f.js",revision:null},{url:"assets/@intlify_message-compiler@9.2.2-8a818441.js",revision:null},{url:"assets/@intlify_shared@9.2.2-e4047ebf.js",revision:null},{url:"assets/@intlify_vue-devtools@9.2.2-4ed993c7.js",revision:null},{url:"assets/@juggle_resize-observer@3.4.0-41516555.js",revision:null},{url:"assets/@unhead_dom@1.0.20-eb91cca6.js",revision:null},{url:"assets/@unhead_ssr@1.0.20-4ed993c7.js",revision:null},{url:"assets/@unhead_vue@1.0.20_vue@3.2.45-9683e3ec.js",revision:null},{url:"assets/@unocss_reset@0.49-d8642756.css",revision:null},{url:"assets/@vue_devtools-api@6.5.0-4ed993c7.js",revision:null},{url:"assets/@vue_reactivity@3.2.45-98cb3bc9.js",revision:null},{url:"assets/@vue_runtime-core@3.2.45-5dec5252.js",revision:null},{url:"assets/@vue_runtime-dom@3.2.45-f7e7942a.js",revision:null},{url:"assets/@vue_shared@3.2.45-ed35e969.js",revision:null},{url:"assets/@vueuse_core@9.12.0_vue@3.2.45-91bf0f8d.js",revision:null},{url:"assets/@vueuse_head@1.0.24_vue@3.2.45-22c0cb94.js",revision:null},{url:"assets/@vueuse_shared@9.12.0_vue@3.2.45-a8668f6e.js",revision:null},{url:"assets/404-102418c9.js",revision:null},{url:"assets/async-validator@4.2.5-dee29e8b.js",revision:null},{url:"assets/axios@1.2.6-66174d6a.js",revision:null},{url:"assets/css-render@0.15.12-57b1a53f.js",revision:null},{url:"assets/date-fns-tz@1.3.8_date-fns@2.29.3-56d02467.js",revision:null},{url:"assets/date-fns@2.29.3-9efb2483.js",revision:null},{url:"assets/evtd@0.2.4-b614532e.js",revision:null},{url:"assets/Favicon.vue_vue_type_script_setup_true_lang-09fba59e.js",revision:null},{url:"assets/form-data@4.0.0-d2a9677b.js",revision:null},{url:"assets/hookable@5.4.2-48cbdad6.js",revision:null},{url:"assets/HotHub-0becfa61.js",revision:null},{url:"assets/HotHub-222648f7.css",revision:null},{url:"assets/index-3a8ebdb7.css",revision:null},{url:"assets/index-6e2d4026.js",revision:null},{url:"assets/Keyboard-0f7b29df.css",revision:null},{url:"assets/Keyboard-4b74d507.js",revision:null},{url:"assets/lodash-es@4.17.21-ef54f42e.js",revision:null},{url:"assets/lodash@4.17.21-e8f55405.js",revision:null},{url:"assets/naive-ui@2.34.3_vue@3.2.45-43d9f81f.js",revision:null},{url:"assets/pinia@2.0.29_2hxmazfbcwwtly5fgw7ckvmlau-dcad0198.js",revision:null},{url:"assets/search-11e8c9c7.css",revision:null},{url:"assets/search-536f9415.js",revision:null},{url:"assets/seemly@0.3.6-76b7b838.js",revision:null},{url:"assets/Settings-15ab2408.css",revision:null},{url:"assets/Settings-9182a20f.js",revision:null},{url:"assets/treemate@0.3.11-25c27bff.js",revision:null},{url:"assets/vdirs@0.1.8_vue@3.2.45-4519c5fd.js",revision:null},{url:"assets/virtual_pwa-register-33ccc14f.js",revision:null},{url:"assets/vite-ssg@0.22.1_lgetyzcsqpfulhi3ndg527tnya-7d3dda5e.js",revision:null},{url:"assets/vooks@0.2.12_vue@3.2.45-20cddd71.js",revision:null},{url:"assets/vue-demi@0.13.11_vue@3.2.45-71ba0ef2.js",revision:null},{url:"assets/vue-i18n@9.2.2_vue@3.2.45-4e1f9381.js",revision:null},{url:"assets/vue-router@4.1.6_vue@3.2.45-ce575543.js",revision:null},{url:"assets/vue@3.2.45-4ed993c7.js",revision:null},{url:"assets/vueuc@0.4.51_vue@3.2.45-e7926c54.js",revision:null},{url:"assets/workbox-window@6.5.4-295a6886.js",revision:null},{url:"index.html",revision:"691c315e6bcd4670c3719ecc0c40d793"},{url:"favicon.svg",revision:"896b6e8b8ae03f2207cd4480a45471ee"},{url:"logo.png",revision:"1caac604b245b8efacfd5c942e2a49ce"},{url:"manifest.webmanifest",revision:"4ec0e0fa412cb3f846d9e53a252bc667"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
