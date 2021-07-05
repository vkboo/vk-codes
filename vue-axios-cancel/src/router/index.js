import Router from 'vue-router';
import Index from '@/views/Index';
import About from '@/views/About';
import NotFound from '@/views/404';

import * as reqManage from '@/utils/requestCancelManage.js';

const router = new Router({
    routes: [
        { path: '/', component: Index, meta: { clearPending: true } },
        { path: '/about', component: About, meta: { clearPending: true } },
        { path: '*', component: NotFound, meta: { clearPending: true } }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.clearPending) {
        reqManage.clearPending();
    }
    next();
});

export default router;