import app from './app.vue'
import router from './router'
import {Vue,store} from './Vuex/index.js'
import "@/assets/plugins/jquery-1.12.4.min.js"

//创建Vue实例并挂载部件
new Vue({
    el : '#app',
    components : {
        app
    },
    template : '<app/>',
    router,
    store
})