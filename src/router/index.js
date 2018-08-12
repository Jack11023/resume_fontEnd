import Vue from 'vue'
import Router from 'vue-router'
import concat from '@/components/concat'
import education from '@/components/education'
import experiences from '@/components/experiences'
import home from '@/components/home'
import portfolio from '@/components/portfolio'
import skills from '@/components/skills'
import testimonials from '@/components/testimonials'
import login from '@/components/login'
import register from '@/components/register'
import axios from '@/http'

Vue.prototype.$http=axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/concat',
      component: concat
    },
    {
      path: '/education',
      component: education
    },
    {
      path: '/experiences',
      component: experiences
    },
    {
      path: '/portfolio',
      component: portfolio
    },
    {
      path: '/skills',
      component: skills
    },
    {
      path: '/testimonials',
      component: testimonials
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
