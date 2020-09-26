import http from '@/utils/request.js'

/**
 * 司机注册
 * @param {Object} data
 * phoneNumber	司机手机号	String	是
password	密码	String	是
driverName	姓名	String	是
 */
export function register(data) {
	return http.request({
		method: 'POST', // 请求方法必须大写
		url: '/lps/webApp/registerCarApp',
		data,
	})
}

/**
 * 车辆列表
 * @param {String} userId	用户主键	是
 */
export function getCarByUserId(userId) {
	return http.get('/webApp/getCarByUserId', {
		params: {
			userId
		}
	})
}

/**
 * 证件上传接口
 * @param {Object} data
 * file	文件	MultipartFile	是
imgType	图片类型	String	是
driverName	司机姓名	String	是
carCode	车牌号	String	是
phoneNumber	手机号	String	是

图片类型：  0:驾驶证扫描件 1:从业资格证扫描件 2:身份证正面 3:身份证反面 4:行驶证正本 5:行驶证副本 6:道路运输许可证正本 7:道路运输许可证副本 8:驾驶证正本 9:驾驶证副本 10:营运证主车 11:营运证挂车 12:上岗证 13:收款人身份证正面 14:收款人身份证反面
 */
export function upLoadCardImg(data) {
	return http.post('/webApp/upLoadCardImg', data)
}

/**
 * 注册车辆
 * @param {Object} data
 * accountNumber	银行账号	String	是
driverRelation	与司机关系	String	是
driverName	司机姓名	String	是
carCode	车牌号	String	是
phoneNumber	手机号	String	是
idNumber	身份证号	String	是
openAccountName	账户名	String	是
openBank	开户行	String	是
openBankCity	开户城市	String	是
userId	用户主键	String	是
与司机关系：家人：家人，雇主：雇主，本人：本人
开户城市：到省市级名称；格式 ["北京市", "北京市"]
 */
export function registerCarInfoApp(data) {
	return http.post('/webApp/registerCarInfoApp', data
	)
}

/**
 * 5)关联车辆
 * @param {Object} params
 * phoneNumber	司机手机号	String	是
carCode	车牌号	String	是
userCode	用户编号	String	是
 */
export function getRelationCar(params) {
	return http.get('/webApp/getRelationCar', {
		params,
	})
}

/**
 * 货源信息
 * @param {Object} params
 */
export function goodsSourceXC(params) {
	return http.get('/front/goodsSourceXC', {
		params,
	})
}

/**
 * 7)运单列表
 * @param userId	用户主键	String	是
 * 
 * 单据状态：0:初始 1:付款申请中 2:进行中 3:付款完成 4:开票申请中 5:开票完成 6:部分付款
运输状态：0:未完成 1:完成 2:运输中
 */
export function getOrderByUserId(userId) {
	return http.post('/webApp/getOrderByUserId', {
			userId
	})
}

/**
 * 14)开始查询运单
 * @param orderNumber	运单编号	String	是
 */
export function getOrderByNum(orderNumber) {
	return http.get('/webApp/getOrderByNum', {
		params: {
			orderNumber
		}
	})
}

/**
 * 15)开始运单
 * @param data 运单编号	String	是
 */
export function startOrder(data) {
	return http.get('/manualPositioning/start', {
		params: {
			data
		}
	})
}

/**
 * 结束运单
 * @param data 运单编号	String	是
 */
export function endOrder(data, weight) {
	return http.get('/manualPositioning/end', {
		params: {
			data,
			weight
		}
	})
}

/**
 * 撤销运单
 * @param data 运单编号	String	是
 */
export function revokeOrder(data) {
	return http.get('/manualPositioning/revoke', {
		params: {
			data
		}
	})
}