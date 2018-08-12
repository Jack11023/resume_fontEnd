<template>
    <div id="app">
        <ybHeader :headFootShow="headFootShow"></ybHeader>
            <div class="wrapper container">
                <router-view></router-view>
            </div>     
        <ybFooter :headFootShow="headFootShow"></ybFooter>
    </div>
</template>

<script>
import ybHeader from '@/components/public/header'
import ybFooter from '@/components/public/footer'

    export default {
        data() {
            return {
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
            }
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
            ybFooter
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