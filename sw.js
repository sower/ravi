if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let n={};const t=s=>l(s,u),o={module:{uri:u},exports:n,require:t};e[u]=Promise.all(r.map((s=>o[s]||t(s)))).then((s=>(i(...s),n)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-urhroyuW.js",revision:null},{url:"assets/@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js",revision:null},{url:"assets/@css-render_vue3-ssr@0.15.14_vue@3.5.12_typescript@5.6.3_-6IDDgy2s.js",revision:null},{url:"assets/@emotion_hash@0.8.0-WldOFDRm.js",revision:null},{url:"assets/@intlify_core-base@10.0.4-RIkX1U0C.js",revision:null},{url:"assets/@intlify_message-compiler@10.0.4-CToo3eC7.js",revision:null},{url:"assets/@intlify_shared@10.0.4-w5IYapEx.js",revision:null},{url:"assets/@juggle_resize-observer@3.4.0-C8OzoCMD.js",revision:null},{url:"assets/@unhead_dom@1.11.10-CNTx9FV3.js",revision:null},{url:"assets/@unhead_shared@1.11.10-C1bv5ODb.js",revision:null},{url:"assets/@unhead_vue@1.11.10_vue@3.5.12_typescript@5.6.3_-B8AFtn10.js",revision:null},{url:"assets/@unocss_reset@0.63-B4eFsVd0.css",revision:null},{url:"assets/@vue_devtools-api@6.6.4-l0sNRNKZ.js",revision:null},{url:"assets/@vue_reactivity@3.5.12-g-Lvtq_S.js",revision:null},{url:"assets/@vue_runtime-core@3.5.12-KnjHTw7F.js",revision:null},{url:"assets/@vue_runtime-dom@3.5.12-CWr_KtW9.js",revision:null},{url:"assets/@vue_shared@3.5.12-BOMFVqth.js",revision:null},{url:"assets/@vueuse_core@11.1.0_vue@3.5.12_typescript@5.6.3_-Yv-kXWql.js",revision:null},{url:"assets/@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.6.3_-CVk0eC74.js",revision:null},{url:"assets/404-C_Rnfd37.js",revision:null},{url:"assets/async-validator@4.2.5-DKvM95Vc.js",revision:null},{url:"assets/axios@1.7.7-CoTZsgdJ.js",revision:null},{url:"assets/css-render@0.15.14-C5toWlUr.js",revision:null},{url:"assets/date-fns-tz@3.2.0_date-fns@3.6.0-DuQ-CiuB.js",revision:null},{url:"assets/date-fns@3.6.0-BYQXydFc.js",revision:null},{url:"assets/default-DIayl8xn.js",revision:null},{url:"assets/default-PJ5Zpp8r.css",revision:null},{url:"assets/evtd@0.2.4-CI_DDEu_.js",revision:null},{url:"assets/Favicon.vue_vue_type_script_setup_true_lang-DUgE38SI.js",revision:null},{url:"assets/hookable@5.5.3-B8xFkYCm.js",revision:null},{url:"assets/HotHub-DBOz3vpJ.css",revision:null},{url:"assets/HotHub-kaXzUJUY.js",revision:null},{url:"assets/index-BV-02SDE.js",revision:null},{url:"assets/index-CkfQE4MW.js",revision:null},{url:"assets/index-DpWlAqtz.css",revision:null},{url:"assets/index-GRQcS1uP.css",revision:null},{url:"assets/keyboard-CEV-nW50.css",revision:null},{url:"assets/keyboard-DKV2DRCU.js",revision:null},{url:"assets/lodash-es@4.17.21-CJQM_G14.js",revision:null},{url:"assets/lodash@4.17.21-BBBbGlgC.js",revision:null},{url:"assets/naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D4cbiTKP.js",revision:null},{url:"assets/pinia@2.2.4_typescript@5.6.3_vue@3.5.12_typescript@5.6.3_-D24NGKxo.js",revision:null},{url:"assets/requests-zz1NTwqj.js",revision:null},{url:"assets/search-BiQWxrmA.js",revision:null},{url:"assets/search-Cu9gbDhp.css",revision:null},{url:"assets/Search-Prompt.vue_vue_type_script_setup_true_lang-gf92hYc3.js",revision:null},{url:"assets/seemly@0.3.8-D9G0Xg2e.js",revision:null},{url:"assets/settings-CQXtRPCD.css",revision:null},{url:"assets/settings-InKPU29_.js",revision:null},{url:"assets/treemate@0.3.11-HRdUPn5m.js",revision:null},{url:"assets/unhead@1.11.10-OT7iNT2x.js",revision:null},{url:"assets/vdirs@0.1.8_vue@3.5.12_typescript@5.6.3_-C0KV5pCE.js",revision:null},{url:"assets/virtual_pwa-register-CGfouCT2.js",revision:null},{url:"assets/vite-ssg@0.23.8_critters@0.0.25_vite@5.4.9_@types_node@20.10.4_terser@5.26.0__vue-router@4.4._tpsi4qxyxd27btw6vqz7ijh4gm-CuxNj3V1.js",revision:null},{url:"assets/vooks@0.2.12_vue@3.5.12_typescript@5.6.3_-D8Rsv1Sm.js",revision:null},{url:"assets/vue-demi@0.14.10_vue@3.5.12_typescript@5.6.3_-Dq6ymT-8.js",revision:null},{url:"assets/vue-i18n@10.0.4_vue@3.5.12_typescript@5.6.3_-C7TTVHTu.js",revision:null},{url:"assets/vue-router@4.4.5_vue@3.5.12_typescript@5.6.3_-CLyaJ7WZ.js",revision:null},{url:"assets/vue@3.5.12_typescript@5.6.3-l0sNRNKZ.js",revision:null},{url:"assets/vueuc@0.4.64_vue@3.5.12_typescript@5.6.3_-kqvdKGq3.js",revision:null},{url:"assets/website-zlxfp4nH.js",revision:null},{url:"assets/workbox-window@7.0.0-B_6ZJHoI.js",revision:null},{url:"index.html",revision:"27d03d4333c068c90447af78db441702"},{url:"favicon.svg",revision:"896b6e8b8ae03f2207cd4480a45471ee"},{url:"logo.png",revision:"1caac604b245b8efacfd5c942e2a49ce"},{url:"manifest.webmanifest",revision:"4ec0e0fa412cb3f846d9e53a252bc667"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
