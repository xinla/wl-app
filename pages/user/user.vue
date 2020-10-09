<template>
	<view class="user-wrapper">
		<view class="wrapper-header">
			<image class="header" src="../../static/b.jpg"></image>
			<view class="content" v-if="totalData">
				<view class="userinfo">
					<image class="head" src="../../static/user.png"></image>
					<text>{{ totalData.userName }}</text>
					<view class="medal">
						<text>{{ totalData.carRank || '暂无' }}</text>
						<image src="../../static/medal.png" mode=""></image>
					</view>
				</view>
				<view class="list">
					<view class="item">
						<view class="title">总运量</view>
						<view class="val">{{ totalData.totalFreightVolume }}千吨</view>
					</view>
					<view class="item">
						<view class="title">总单数</view>
						<view class="val">{{ totalData.totalDealOrder }}单</view>
					</view>
					<view class="item">
						<view class="title">结算单数</view>
						<view class="val">{{ totalData.totalSettlementOrder }}单</view>
					</view>
					<view class="item">
						<view class="title">总运费</view>
						<view class="val">{{ totalData.totalSettlementAmount }}万</view>
					</view>
				</view>
			</view>
		</view>
		<view class="user-list">
			<view class="item" @click="routeChange('/pages/personData/personData')">
				<image src="../../static/icon/user.png"></image>
				<text>个人信息</text>
				<image class="right" src="../../static/icon/right.png"></image>
			</view>
			<view class="item" @click="routeChange('/pages/money/money')">
				<image src="../../static/icon/fee.png"></image>
				<text>费用中心</text>
				<image class="right" src="../../static/icon/right.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			totalData: {}
		}
	},
	methods: {
		/**
		 * 路由跳转
		 */
		routeChange (val) {
			uni.navigateTo({
			    url: val
			})
		},
		/**
		 * 个人信息
		 */
		getUserData () {
			const self = this
			uni.request({
			    url: 'https://gswl.sx56yun.com/lps/webApp/getUserByUserId',
			    data: {
					userId: this.$store.state.userId
				},
				method: 'GET',
			    success: ({ data }) => {
					uni.hideLoading()
					if (data.code == '200') {
						self.totalData = data.result
					}
			    }
			})
		}
	},
	onShow () {
		uni.showLoading()
		this.getUserData()
	}
}
</script>

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="scss" scoped>
	.user-wrapper {
		font-size: 0;
		line-height: 1;
		.wrapper-header {
			width: 100vw;
			position: relative;
			.header {
				width: 100vw;
				height: 450rpx;
			}
			.content {
				min-height:  400rpx;
				padding: 50rpx 30rpx;
				border-radius: 10rpx;
				box-sizing: border-box;
				box-shadow: 3rpx 0 10rpx #ccc;
				background: #fff;
				position: absolute;
				bottom: -200rpx;
				left: 20rpx;
				right: 20rpx;
				z-index: 1;
				.userinfo {
					display: flex;
					align-items: center;
					width: 100%;
					padding: 0 0 80rpx 0;
					border-bottom: 1rpx dashed #ccc;
					.head {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						border: 5rpx solid #3c97de;
						box-sizing: border-box;
					}
					text {
						flex: 1;
						color: #333;
						font-size: 26rpx;
						margin: 0 0 0 20rpx;
					}
					.medal {
						display: inline-flex;
						align-items: center;
						text {
							color: #f6b364;
						}
						image {
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
				.list {
					display: flex;
					align-items: center;
					padding: 40rpx 0 0 0;
					.item {
						flex: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.title {
							color: #666;
							font-size: 24rpx;
						}
						.val {
							color: #333;
							font-size: 28rpx;
							margin: 20rpx 0 0 0;
						}
					}
				}
			}
		}
		.user-list {
			width: 100vw;
			padding: 250rpx 0 0 0;
			background: #fff;
			.item {
				display: flex;
				align-items: center;
				height: 90rpx;
				margin: 0 30rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid #ccc;
				&:last-child {
					border-bottom: none;
				}
				image {
					width: 40rpx;
					height: 40rpx;
					&.right {
						width: 30rpx;
						height: 30rpx;
					}
				}
				text {
					flex: 1;
					color: #333;
					font-size: 28rpx;
					margin: 0 0 0 20rpx;
				}
			}
		}
	}
</style>
