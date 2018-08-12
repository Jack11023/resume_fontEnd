import Vue from 'vue'
import Vuex from 'vuex'

//注册vuex并创建store全局仓库
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userName: null,
    editable: false,
    home: null,
    concat: null,
    education: null,
    experiences: null,
    portfolio: null,
    skills: null,
    testimonials: null,
    currentItem: ''
  },
  mutations: {
    getIn(state, userName) {
      state.userName = userName
      localStorage.setItem('userName', userName)
    },
    makeEditable(state) {
      state.editable = true
    },
    makeUnEditable(state) {
      state.editable = false
    },
    editHome(state, html) {
      state.home = html
    },
    editConcat(state, html) {
      state.concat = html
    },
    editEducation(state, html) {
      state.education = html
    },
    editExperiences(state, html) {
      state.experiences = html
    },
    editPortfolio(state, html) {
      state.portfolio = html
    },
    editSkills(state, html) {
      state.skills = html
    },
    editTestimonials(state, html) {
      state.testimonials = html
    },
    setCurrentItem(state, str) {
      state.currentItem = str
    }
  },
  getters: {
    getUserName(state) {
      state.userName = localStorage.getItem('userName')
      return state.userName
    },
    getEditable(state) {
      return state.editable
    },
    getHome(state) {
      return state.home
    },
    getConcat(state) {
      return state.concat
    },
    getEducation(state) {
      return state.education
    },
    getExperiences(state) {
      return state.experiences
    },
    getPortfolio(state) {
      return state.portfolio
    },
    getSkills(state) {
      return state.skills
    },
    getTestimonials(state) {
      return state.testimonials
    },
    getCurrentItem(state) {
      return state.currentItem
    }
  }
})
export {
  store,
  Vue
}
