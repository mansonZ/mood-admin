import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login.vue';
import Layout from '../views/layout.vue';

Vue.use(VueRouter);

const routes=[
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path:'/layout',
        name:'layout',
        component:Layout
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router