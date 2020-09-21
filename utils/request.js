import Request from '@/js_sdk/luch-request/index.js'

const http = new Request()

http.config.baseURL = 'https://gswl.sx56yun.com/lps'

http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
	let data = response.data
	if (data.code == 200 || data.code != 0 && data.code != 500) {
		return data.result || data.record || data.data
	}
	uni.hideLoading();
		uni.showToast({
			icon: 'none',
			title: data.msg,
			duration: 2000
		})
	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
	console.log(response)
	return Promise.reject(response)
})

export default http
