import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import'bootstrap/dist/js/bootstrap.bundle'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  data: {
    showModal: false
  },
  render: h => h(App)
})
