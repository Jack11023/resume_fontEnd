<template>
    <div id="app">
        <transition name="header">
            <ybHeader :headFootShow="headFootShow" v-if="infoShow" @goEdit="infoShow = false"></ybHeader>
            <editheader :headFootShow="headFootShow" @cancelEdit="infoShow = true" v-else></editheader>
        </transition>
            <div class="wrapper container">
                <router-view></router-view>
            </div>     
        <transition name="footer">
            <ybFooter :headFootShow="headFootShow" v-if="infoShow"></ybFooter>
        </transition>
    </div>
</template>

<script>
import ybHeader from '@/components/public/header'
import ybFooter from '@/components/public/footer'
import editheader from '@/components/public/editHeader'

    export default {
        data() {
            return {
                infoShow: true,
                headFootShow: true,
            }
        },
        created() {
            this.isLogin()
            if(this.$route.path == '/login' || this.$route.path == '/register'){
                this.headFootShow = false
            }else {
                this.headFootShow = true
            }             
        },  
        methods: {
            //判断是否已登录过
            isLogin() {
                 this.$http.get('/isLogin')
                .then(res => {
                    if(res.data.status != 200) 
                        this.$router.push('/login')
                })         
            },
        },
        watch: {
            '$route.path': function(newVal) {
                if(newVal == '/login' || newVal == '/register'){
                    this.headFootShow = false
                }else {
                    this.headFootShow = true
                }     
                this.isLogin()
            }
        },
        components: {
            ybHeader,
            ybFooter,
            editheader
        }
    }
</script>

<style lang="less" scoped>
#app {
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>