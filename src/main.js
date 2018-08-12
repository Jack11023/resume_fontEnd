import app from './app.vue'
import Vue from 'vue'
import router from './router'
import "@/assets/plugins/jquery-1.12.4.min.js"

new Vue({
    el : '#app',
    components : {
        app
    },
    template : '<app/>',
    router
})