import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from './button/button.vue'
import Icon from './button/icon.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input/input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'
import Content from './layouts/content.vue'
import Footer from './layouts/footer.vue'
import Header from './layouts/header.vue'
import Layout from './layouts/layout.vue'
import Sider from './layouts/sider.vue'
import './style/var.scss'


Vue.component("o-button", Button)
Vue.component("o-icon",Icon)
Vue.component("o-button-group", ButtonGroup)
Vue.component("o-input", Input)
Vue.component("o-row", Row)
Vue.component("o-col", Col)
Vue.component("o-content", Content)
Vue.component("o-footer", Footer)
Vue.component("o-header", Header)
Vue.component("o-layout", Layout)
Vue.component("o-sider", Sider)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
