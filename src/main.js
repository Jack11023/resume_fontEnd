import app from './app.vue'
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import "@/assets/plugins/jquery-1.12.4.min.js"

//注册vuex并创建store全局仓库
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userName: null
    },
    mutations: {
        getIn(state,userName) {
            state.userName = userName
        }
    }
  })

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