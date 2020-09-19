	import Request from '@/js_sdk/luch-request/index.js'
	
	const http = new Request()
	
	http.config.baseURL = 'http://gs.wholexy.cn/jk/index.ashx'
	
	http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
	   if (response.data.code !== 0) {
	  return response.data.data
	  }
	     return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
	}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
	  console.log(response)
	  return Promise.reject(response)
	})
	
	export default http
	