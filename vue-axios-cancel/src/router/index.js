import Router from 'vue-router';
import Index from '@/views/Index';
import About from '@/views/About';
import NotFound from '@/views/404';

export default new Router({
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '*', component: NotFound }
    ]
});