import Vue from 'vue'

import uView from "uview-ui";
Vue.use(uView);

import App from './App'
import store from './store'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
