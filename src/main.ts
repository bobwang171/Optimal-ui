import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from './button/button.vue'
import Icon from './button/icon.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input/input.vue'
import Row from './grid/row.vue'
import './style/var.scss'


Vue.component("o-button", Button)
Vue.component("o-icon",Icon)
Vue.component("o-button-group", ButtonGroup)
Vue.component("o-input", Input)
Vue.component("o-row",Row)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
