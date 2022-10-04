import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setupNaive } from './plugins';

import { AppProvider } from '@/components/Application';
import { setupI18n } from '@/lang';
import { setupStore } from '@/store';
import router, { setupRouter } from './router';


async function bootstrap() {
    const appProvider = createApp(AppProvider);

    const app = createApp(App);

    // 注册全局常用的 naive-ui 组件
    setupNaive(app);

    // 挂载状态管理
    setupStore(app);

    setupI18n(app);

    //优先挂载一下 Provider 解决路由守卫，Axios中可使用，Dialog，Message 等之类组件
    appProvider.mount('#appProvider', true);

    // // 挂载路由
    await setupRouter(app);

    // 路由准备就绪后挂载APP实例
    await router.isReady();

    app.mount('#app', true);
}

void bootstrap();

