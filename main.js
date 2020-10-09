import Vue from 'vue'

import uView from "uview-ui";
Vue.use(uView);

import App from './App'
import store from './store'
import JsBridge from './JsBridge'

Vue.prototype.$store = store
Vue.prototype.$JsBridge = JsBridge
const IsIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
Vue.prototype.$isIos = IsIos

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
