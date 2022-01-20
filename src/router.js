import Vue from "vue";
import VueRouter from "vue-router";

// 引入页面
import home from "@/pages/home.vue";
import noPath from "@/pages/404.vue";
import VR from "@/pages/VR.vue";
import VRitem from "@/pages/VRitem.vue";
import AR from "@/pages/AR.vue";
import MR from "@/pages/MR.vue";
import joinUs from "@/pages/joinUs.vue";
import cooperation from "@/pages/cooperation.vue";
import intro from "@/pages/intro.vue";
import stage from "@/pages/stage.vue";
Vue.use(VueRouter);

//处理重复路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes = [
    // 重定向
    {
        path: '/home',
        redirect: '/'
    },
    {
        meta: {
            title: '广州市大湾区虚拟现实研究院'
        },
        path:"/",
        component: home
    },
    {
        meta: {
            title: '研究院介绍'
        },
        path:"/intro",
        component: intro
    },
    {
        meta: {
            title: '场景舞台'
        },
        path:"/stage",
        component: stage
    },
    {
        path: '*',
        name: '404',
        component: noPath
    },
    {
        meta: {
            title: 'VR'
        },
        path:"/VR",
        component: VR
    },
    {
        meta: {
            title: 'AR'
        },
        path:"/AR",
        component: AR
    },
    // {
    //     meta: {
    //         title: 'MR'
    //     },
    //     path:"/MR",
    //     component: MR
    // },
    {
        meta: {
            title: 'VR体验'
        },
        path:"/VRitem",
        component: VRitem
    },
    {
        meta: {
            title: '合作机构'
        },
        path:"/cocoAgency",
        component: cooperation
    },
    {
        meta: {
            title: '加入我们'
        },
        path:"/joinUs",
        component: joinUs
    },
];

const router =  new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to,from,next)=>{//跳转限制
    //修改标题
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
    // let login = sessionStorage.getItem("login");
    // if(to.meta.withoutAuth){//判断该路由是否需要登陆权限
    //     next();
    // }else{
    //     if(!login){//通过sessionStorage保存state判断是否已经登陆
    //         next({
    //             path: '/login',
    //             query: {redirect: to.fullPath}
    //         });
    //     }else{
    //         next();
    //     };
    // };
});

export default router;
