import Vue from 'vue'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import {Button, Header, Swipe, SwipeItem} from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from "./router.js";

import 'bootstrap/dist/css/bootstrap.css'

import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.http.options.root='http://www.liulongbin.top:3005/';

// Global time filter
import moment from 'moment'
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)

})



let vm=new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },

    render: c => c(App),
    router


})

// let vm1=new Vue({
//     el: '#app2',
//     data: {
//
//     },
//     methods: {
//
//     },
//     render: c => c(app),
//     // router
// })



// $(function () {
//     $('li:odd').css('backgroundColor', 'yellow')
//     $('li:even').css('backgroundColor', function () {
//         return '#' + 'D97634'
//     })
// })
