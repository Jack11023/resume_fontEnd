<template>
    <div id="app">
        <header class="header" v-if="headFootShow">
            <div class="top-bar container-fluid">
                <div class="actions">
                    <a class="btn hidden-xs" to="mailto:someone@example.com">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
                    <a class="btn" href="#">
                        <i class="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
                </div>
                <!--//actions-->
                <ul class="social list-inline">
                    <li>
                        <a href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-github-alt" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-skype" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                <!--//social-->
            </div>
        </header>
            <div class="wrapper container">
                <router-view></router-view>
            </div>
        <footer class="footer text-center" v-if="headFootShow">
            <div class="page-nav-space-holder hidden-xs">
                <div  id="page-nav-wrapper" class="page-nav-wrapper text-center">
                    <div class="container">
                        <ul id="page-nav" class="nav page-nav list-inline">
                            <li>
                                <router-link class="scrollto" to="/experiences">经历</router-link>
                            <li>
                                <router-link class="scrollto" to="/education">教育经历</router-link>
                            </li>
                            <li>
                                <router-link class="scrollto" to="/skills">技术栈</router-link>
                            </li>
                            <li>
                                <router-link class="scrollto" to="/testimonials">他人评价</router-link>
                            </li>
                            <li>
                                <router-link class="scrollto" to="portfolio">项目</router-link>
                            </li>
                            <li>
                                <router-link class="scrollto" to="concat">联系我</router-link>
                            </li>
                        </ul>
                        <!--//page-nav-->
                    </div>
                </div>
                <!--//page-nav-wrapper-->
            </div>
        </footer>
    </div>
</template>

<script>
import "@/assets/plugins/bootstrap/css/bootstrap.min.css"   
import "@/assets/plugins/font-awesome/css/font-awesome.css"
import "@/assets/css/styles.css"

    export default {
        data() {
            return {
                headFootShow: true
            }
        },
        created() {
           if(this.$route.path == '/login' || this.$route.path == '/register'){
                this.headFootShow = false
            }else {
                this.headFootShow = true
            }             
        },  
        mounted() {
           this.headFootShow&&
           $(window).on('scroll resize load', function() {     
                $('#page-nav-wrapper').removeClass('fixed');           
                var scrollTop = $(this).scrollTop();
                var topDistance = $('#page-nav-wrapper').offset().top;
                
                if ( (topDistance) > scrollTop ) {
                    $('#page-nav-wrapper').removeClass('fixed');
                    $('body').removeClass('sticky-page-nav');
                }
                else {
                    $('#page-nav-wrapper').addClass('fixed');
                    $('body').addClass('sticky-page-nav');
                }
            });
        },
        watch: {
            '$route.path': function(newVal) {
                if(newVal == '/login' || newVal == '/register'){
                    this.headFootShow = false
                }else {
                    this.headFootShow = true
                }              
            }
        }
    }
</script>

<style lang="less" scoped>
#app {
    position: absolute;
    height: 100%;
    width: 100%;
    #page-nav-wrapper {
        bottom: 0;
        position: fixed;
        width: 100%;
        height: 79px;
    }
}
</style>