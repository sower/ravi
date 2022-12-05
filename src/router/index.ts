import Lattice from '@/views/Lattice.vue';
import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Lattice',
        alias: ['/Lattice'],
        component: Lattice
    },
    {
        path: '/keyboard',
        name: 'Keyboard',
        alias: ['/shortcut'],
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import('@/views/Keyboard.vue')
        }
    },
    // {
    //     path: '/bookmarks',
    //     name: 'Bookmarks',
    //     component: function () {
    //         return import(/* webpackChunkName: "Keyboard" */ '../views/Bookmarks.vue')
    //     }
    // },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "404" */ '../views/MultiSearch.vue')
    },
    {
        path: '/hothub',
        name: 'Hothub',
        component: () => import('@/views/HotHub.vue')
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
    app.use(router);
    // 创建路由守卫
    // createRouterGuards(router);
}

export default router;
