import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from './button/Button.vue'
import Icon from './button/Icon.vue'
import ButtonGroup from './button/button-group.vue'
import './style/var.scss'

Vue.component("o-button", Button)
Vue.component("o-icon",Icon)
Vue.component("o-button-group",ButtonGroup)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
