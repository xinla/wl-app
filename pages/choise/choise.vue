<template>
	<view class="choise-wrapper">
		<view class="header"><image src="../../static/b.jpg"></image></view>
		<view class="content">
			<view class="list" v-for="item in totalData" :key="item.id">
				<view class="left">
					<view class="number">{{ item.carCode }}</view>
					<view class="time">注册时间：{{ item.operateDate }}</view>
				</view>
				<view class="right" @click="scanFunc(item)">
					<view class="rank">【{{ item.phoneNumber || '暂无' }}】</view>
					<view class="info">扫码接单</view>
				</view>
			</view>
			<view class="button" @click="routeChange('/pages/registerCar/registerCar')">新车注册</view>
			<view class="button" @click="routeChange('/pages/relateCar/relateCar')">关联已有车辆</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderId: '',
			totalData: []
		};
	},
	onLoad(option) {
		this.orderId = option.id
		this.getData()
	},
	methods: {
		/**
		 * 获取车辆信息
		 */
		getData() {
			const self = this;
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/webApp/getCarByUserId',
				data: {
					userId: this.$store.state.userId
				},
				method: 'GET',
				success: ({ data }) => {
					if (data.code == '200') {
						self.totalData = data.result.Rows;
					}
				}
			});
		},
		/**
		 * 扫二维码
		 */
		scanFunc(data) {
			const self = this
			if (self.orderId) {
				uni.request({
					url: 'https://gswl.sx56yun.com/lps/webApp/login',
					data: {
						carCode: data.carCode,
						phoneNumber: data.phoneNumber,
						sourceId: self.orderId
					},
					method: 'POST',
					success: ({ data }) => {
						console.log(data)
						if (data.code == '200') {
						}
					}
				})
				uni.navigateTo({
					url: `/pages/waybillDetail/waybillDetail?id=${self.orderId}`
				})
			} else {
				self.$JsBridge.GetMethods(bridge => {
					bridge.callHandler('scanCode', {}, res => {
						let Id = JSON.parse(res).data.split('/').pop()
						uni.navigateTo({
							url: `/pages/waybillDetail/waybillDetail?id=${Id}`
						})
					})
				})
			}
		},
		routeChange(url) {
			uni.navigateTo({
				url: url
			})
		}
	}
}
</script>

<style>
page {
	background: #f1f1f1;
}
</style>
<style scoped lang="less">
.choise-wrapper {
	font-size: 0;
	line-height: 1;
	width: 100vw;
	.header {
		width: 100%;
		position: relative;
		image {
			width: 100%;
		}
	}
	.content {
		margin: -100rpx 0 0 0;
		position: relative;
		z-index: 1;
		.list {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			height: 160rpx;
			margin: 0 30rpx 20rpx;
			padding: 0 20rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			background: #fff;
			.left {
				display: inline-flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				height: 100%;
				padding: 40rpx 0;
				box-sizing: border-box;
				.number {
					color: #000;
					font-size: 24rpx;
					font-weight: bold;
				}
				.time {
					color: 999;
					font-size: 28rpx;
				}
			}
			.right {
				display: inline-flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: space-between;
				height: 100%;
				padding: 40rpx 0 20rpx;
				box-sizing: border-box;
				.rank {
					color: #000;
					font-size: 24rpx;
					font-weight: bold;
				}
				.info {
					display: flex;
					align-items: center;
					justify-content: center;
					color: red;
					font-size: 24rpx;
					width: 150rpx;
					height: 40rpx;
					margin: 30rpx 0 0 0;
					border-radius: 20rpx;
					border: 1rpx solid red;
				}
			}
		}
		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 28rpx;
			font-weight: bold;
			letter-spacing: 10rpx;
			height: 80rpx;
			margin: 0 30rpx 20rpx;
			border-radius: 10rpx;
			background: #3c97de;
		}
	}
}
</style>
