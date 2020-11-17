import Vue from 'vue'
import App from './App'
import Request from 'luch-request'
Vue.prototype.$http = new Request({
	baseURL: 'http://111.229.251.142/api',
	header: {
		'content-type': 'application/json' // 默认值
	},
})

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
