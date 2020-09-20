import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		login: false,
		token: '',
		avatarUrl: '',
		userName: '',
		userId: '5EEC2FBA637855286116'
	},
	mutations: {
		login(state, provider) {
			console.log(state)
			console.log(provider)
			state.login = true;
			state.token = provider.token;
			state.userName = provider.userName;
			state.avatarUrl = provider.avatarUrl;
		},
		logout(state) {
			state.login = false;
			state.token = '';
			state.userName = '';
			state.avatarUrl = '';
		}
	},
	actions: { 
	}
})

export default store
