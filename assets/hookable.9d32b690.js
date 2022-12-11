function c(h,o={},e){for(const t in h){const s=h[t],i=e?`${e}:${t}`:t;typeof s=="object"&&s!==null?c(s,o,i):typeof s=="function"&&(o[i]=s)}return o}function f(h,o){return h.reduce((e,t)=>e.then(()=>t.apply(void 0,o)),Promise.resolve())}function a(h,o){return Promise.all(h.map(e=>e.apply(void 0,o)))}function l(h,o){for(const e of h)e(o)}class n{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(o,e,t={}){if(!o||typeof e!="function")return()=>{};const s=o;let i;for(;this._deprecatedHooks[o];)i=this._deprecatedHooks[o],o=i.to;if(i&&!t.allowDeprecated){let r=i.message;r||(r=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}return this._hooks[o]=this._hooks[o]||[],this._hooks[o].push(e),()=>{e&&(this.removeHook(o,e),e=void 0)}}hookOnce(o,e){let t,s=(...i)=>(typeof t=="function"&&t(),t=void 0,s=void 0,e(...i));return t=this.hook(o,s),t}removeHook(o,e){if(this._hooks[o]){const t=this._hooks[o].indexOf(e);t!==-1&&this._hooks[o].splice(t,1),this._hooks[o].length===0&&delete this._hooks[o]}}deprecateHook(o,e){this._deprecatedHooks[o]=typeof e=="string"?{to:e}:e;const t=this._hooks[o]||[];this._hooks[o]=void 0;for(const s of t)this.hook(o,s)}deprecateHooks(o){Object.assign(this._deprecatedHooks,o);for(const e in o)this.deprecateHook(e,o[e])}addHooks(o){const e=c(o),t=Object.keys(e).map(s=>this.hook(s,e[s]));return()=>{for(const s of t.splice(0,t.length))s()}}removeHooks(o){const e=c(o);for(const t in e)this.removeHook(t,e[t])}callHook(o,...e){return this.callHookWith(f,o,...e)}callHookParallel(o,...e){return this.callHookWith(a,o,...e)}callHookWith(o,e,...t){const s=this._before||this._after?{name:e,args:t,context:{}}:void 0;this._before&&l(this._before,s);const i=o(this._hooks[e]||[],t);return i instanceof Promise?i.finally(()=>{this._after&&s&&l(this._after,s)}):(this._after&&s&&l(this._after,s),i)}beforeEach(o){return this._before=this._before||[],this._before.push(o),()=>{const e=this._before.indexOf(o);e!==-1&&this._before.splice(e,1)}}afterEach(o){return this._after=this._after||[],this._after.push(o),()=>{const e=this._after.indexOf(o);e!==-1&&this._after.splice(e,1)}}}function k(){return new n}export{k as c};
