<template>
	<view class="person-wrapper">
		<view class="header">
			<image src="../../static/b.jpg"></image>
		</view>
		<view class="content">
			<view class="list" v-for="item in totalData" :key="item.id" @click="routeChange(`/pages/personData/details?id=${item.id}`)">
				<view class="left">
					<view class="number">{{ item.carCode }}</view>
					<view class="time">注册时间：{{ item.operateDate }}</view>
				</view>
				<view class="right">
					<view class="rank">【{{ item.carRank || '暂无' }}】</view>
					<view class="info">查看信息</view>
				</view>
			</view>
			<view class="button" @click="routeChange('/pages/relateCar/relateCar')">关联车辆信息</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalData: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			/**
			 * 获取车辆信息
			 */
			getData() {
				const self = this
				uni.request({
				    url: 'https://gswl.sx56yun.com/lps/webApp/getCarByUserId',
				    data: {
						userId: uni.getStorageSync('userId')
					},
					method: 'GET',
				    success: ({ data }) => {
						if (data.code == '200') {
							self.totalData = data.result.Rows
						}
				    }
				})
			},
			/**
			 * 路由跳转
			 */
			routeChange (val) {
				uni.navigateTo({
				    url: val
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
	.person-wrapper {
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
		.content{
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
						color: #4a8243;
						font-size: 24rpx;
						width: 150rpx;
						height: 40rpx;
						margin: 30rpx 0 0 0;
						border-radius: 20rpx;
						border: 1rpx solid #4a8243;
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
				letter-spacing: 5rpx;
				height: 80rpx;
				margin: 0 30rpx;
				border-radius: 10rpx;
				background: #3c97de;
			}
		}
	}
</style>
