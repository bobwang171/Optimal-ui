import Button from './src/button/button'
import ButtonGroup from './src/button/button-group'
import Icon from './src/button/icon'
import Input from '../../../src/input/input'
import Header from '../../../src/layouts/header'
import Content from '../../../src/layouts/content'
import Sider from '../../../src/layouts/sider'
import Footer from '../../../src/layouts/footer'
import Layout from '../../../src/layouts/layout'
import Tabs from '../../../src/tabs/tabs'
import TabsHead from '../../../src/tabs/tabs-head'
import TabsBody from '../../../src/tabs/tabs-body'
import TabsItem from '../../../src/tabs/tabs-item'
import TabsPane from '../../../src/tabs/tabs-pane'
import Vue from 'vue'
import Toast from '../../../src/toast/toast'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export {
    Button, ButtonGroup, Icon, Input, Header, Content, Sider, Footer, Layout,
    Tabs, TabsHead, TabsBody, TabsItem, TabsPane,Toast
}