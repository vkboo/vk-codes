import Router from 'vue-router';
import Index from '@/views/Index';
import About from '@/views/About';
import NotFound from '@/views/404';

import * as reqManage from '@/utils/requestCancelManage.js';

const router = new Router({
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '*', component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    reqManage.clearPending();
    next();
});

export default router;