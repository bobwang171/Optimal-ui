import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from './button/Button.vue'
import './style/var.scss'
Vue.component("o-button",Button)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
