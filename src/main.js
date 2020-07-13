import Vue from 'vue'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { Button, Header } from 'mint-ui'
Vue.component(Button.name,Button)
Vue.component(Header.name,Header)


import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import router from "./router.js";

import 'bootstrap/dist/css/bootstrap.css'

import '../lib/mui/css/mui.css'



let vm=new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },

    render: c => c(App)


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
