import Vue from "vue";
import Router from "vue-router";
import { getLocalStorage } from '_u/localStorage';
import Layout from "@/views/layout/master";

import common from './common'           //公共
import demand from './demand'           //需求
import client from './client'           //客户管理
import logistics from './logistics'     //物流

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        ...common,
        ...demand,
        ...client,
        ...logistics,
        {
            path: "*",
            component: Layout,
            children: [
                {
                    path: "*",
                    name: "404",
                    component: () => import("@/views/404/index.vue"),
                    meta: {
                        authentication: true,
                        keepAlive: true
                    }
                }
            ]
        },
        
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.authentication && !getLocalStorage('userinfo')) {
        next({ path: '/entran/login' })
    } else {
        next()
    }

    
})

export default router;