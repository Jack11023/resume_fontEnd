<template>
     <footer class="footer text-center" v-if="headFootShow">
            <div class="page-nav-space-holder hidden-xs">
                <div  id="page-nav-wrapper" class="page-nav-wrapper text-center">
                    <div class="container">
                        <ul id="page-nav" class="nav page-nav list-inline">
                            <li>
                                <router-link class="scrollto" to="/home">个人简介</router-link>
                            <li>
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
</template>

<script>
import "@/assets/plugins/bootstrap/css/bootstrap.min.css"   
import "@/assets/plugins/font-awesome/css/font-awesome.css"
import "@/assets/css/styles.css"
    export default {
        props: ['headFootShow'],
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
    }
</script>

<style lang="less" scoped>
    #page-nav-wrapper {
        bottom: 0;
        position: fixed;
        width: 100%;
        height: 79px;
        z-index: 99;
    }
</style>