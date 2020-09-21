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

<style lang="scss" scoped>

</style>

.tab-wrap {
background: #fff;
height: 80rpx;
padding-top: 22rpx;

.tab {
font-size: 20rpx;
height: 100%;
margin-top: -2rpx;
}

.active {
border-bottom: 1px solid #f00;
}

.select {
font-size: 28rpx;
}

.icon {
padding-left: 20rpx;
font-weight: 800;
font-size: 20rpx;
transform: scaleX(1.7);
display: inline-block;
}
}

.list {
background: #fff;
border-radius: 8rpx;
overflow: hidden;
margin-bottom: 28rpx;

.content {
padding: 30rpx;
color: #555;
}
}

.cover {
position: relative;
line-height: 0;

.poster {
width: 100%;
height: 400rpx;
}

.title {
position: absolute;
bottom: 0;
color: #fff;
background: rgba(0, 0, 0, 0.5);
width: 100%;
line-height: 60rpx;
padding: 0 30rpx;
font-size: 28rpx;
}
}

.desc {
font-size: 28rpx;
}

.tag {
display: inline-block;
margin: 30rpx 0;
padding: 6rpx 20rpx;
background: #eee;
font-size: 28rpx;
border-radius: 8rpx;
}

.publish {
display: flex;
justify-content: space-between;
align-items: center;
font-size: 26rpx;

.user {
display: flex;
align-items: center;
}

.avatar {
background: #ff9008;
width: 40rpx;
height: 40rpx;
border-radius: 50%;
}

.name {
margin-left: 10rpx;
}

.right {
color: #aaa;
}

.read {
margin-left: 10rpx;
border-left: 1px solid #aaa;
padding-left: 10rpx;
line-height: 22rpx;
display: inline-block;

}
}

.mask {
position: fixed;
width: 100%;
height: 100%;
background: rgba(39, 39, 39, 0.76);
left: 0;
top: 0;
margin: auto;
z-index: 9;
}

.mask-content {
background-color: #fff;
height: 50%;
overflow: hidden;
padding-top: 80rpx;

.acitve {
background-color: #ff5230;
color: #fff;
}
}

.types-wrap {
flex-wrap: wrap;
justify-content: space-between;
align-content: flex-start;
padding: 0 4%;
height: 100%;
overflow: auto;
border-top: 1px solid #eee;

.type {
width: 48%;
margin: 24rpx 0 0;
line-height: 50rpx;
font-size: 22rpx;
border-color: #eee;
}
}
</style>
