import VueRouter from 'vue-router'

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import CartContainer from "./components/tabbar/CartContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsInfo.vue";

let router=new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path:'/home',component: HomeContainer},
        {path:'/cart',component: CartContainer},
        {path:'/member',component: MemberContainer},
        {path:'/search',component: SearchContainer},
        {path:'/home/newsList', component: newsList},
        {path:'/home/newsInfo/:id', component: newsInfo},

    ],
    linkActiveClass: 'mui-active'
})

export default router
