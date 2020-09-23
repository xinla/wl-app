<template>
	<view class="page">
		<u-cell-group>
			<u-cell-item title="货源号" :value="form.sourceNum" :arrow="false">
				<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
			</u-cell-item>
			<u-cell-item title="公司名称" :value="form.ownerCustomer" :arrow="false"></u-cell-item>
			<u-cell-item title="运单号" :value="form.orderNumber" :arrow="false"></u-cell-item>
			<u-cell-item title="货物名称" :value="form.goodsName" :arrow="false"></u-cell-item>
			<u-cell-item title="起始地" :value="form.originatingPlace" :arrow="false"></u-cell-item>
			<u-cell-item title="目的地" :value="form.destination" :arrow="false"></u-cell-item>
		</u-cell-group>
		<u-button type="primary" @click="submit">开始</u-button>
		
		<u-modal v-model="isMask" content="请先停止未完成的订单再开始" confirm-text="我知道了"></u-modal>
	</view>
</template>

<script>
	import {
		getOrderByNum,
		startOrder
	} from '@/api/index.js'
	export default {
		data() {
			return {
				form: {
					sourceNum: '',
					ownerCustomer: '',
					orderNumber: '',
					goodsName: '',
					originatingPlace: '',
					destination: '',
				},
				isMask: true, // 未完成的订单弹窗提示
			}
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			this.getData(option.id)
		},
		methods: {
			getData(id) {
				uni.showLoading({
					title: '加载中...'
				});
				
				getOrderByNum(id).then(r => {
					this.form = r
					uni.hideLoading();
				})
			},
			submit() {
				// todo 调接口 判断是否有未完成的订单
				// this.isMask = false
				startOrder(this.form.orderNumber).then(r => {
					uni.showToast({
						title: '操作成功',
						duration: 2000
					});
				})
			},
		}
	}
</script>