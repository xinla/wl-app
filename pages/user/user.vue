<template>
	<view class="page">
		<view class="top-wrap slide-pad">
			<view class="top flex">
				<view class="left iflex">
					<image class="avatar fl" src="/static/a.jpg"></image>
					<view class="">
						<view class="name">
							yonghuming
						</view>
						<view class="tag">
							未登录
						</view>
					</view>
				</view>
				<view class="right">
					<uni-icons type="success_no_circle"></uni-icons>
					签到
				</view>
			</view>
		</view>

		<view class="middle flex">
			<view class="item">
				可提现余额
				<view class="num">
					￥0.00
				</view>
			</view>
			<view class="item">
				我的积分
				<view class="num">
					0
				</view>
			</view>
		</view>

		<view class="login ac">
			<navigator url="../login/login" hover-class="navigator-hover">
				请登录
			</navigator>
		</view>
		
		<view class="login ac logout">
				退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background: #eee;
		height: 100vh;
		overflow: auto;
	}

	.top-wrap {
		background: #fff;
	}

	.top {
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #eee;

		.avatar {
			background: #ff9008;
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			margin: 20rpx 36rpx 0 0;
			vertical-align: middle;
		}

		.name {
			margin-top: 10rpx;
			font-size: 32rpx;
			font-weight: 600;
		}

		.tag {
			display: inline-block;
			background: #ff3815;
			margin: 20rpx 0;
			padding: 0 16rpx;
			color: #fff;
			font-size: 28rpx;
			border-radius: 8rpx;
		}
	}

	.middle {
		background: #fff;
		justify-content: space-around;

		.item {
			padding: 60rpx 0;
			font-size: 26rpx;
			text-align: center;
			// width: ;
			color: #888;
		}

		.num {
			color: #333;
			font-size: 46rpx;
			font-weight: 600;
		}
	}

	.login {
		margin-top: 20rpx;
		color: #ff0263;
		background: #fff;
		line-height: 90rpx;
	}

	.type-title {
		margin: 0 30rpx;
		padding: 24rpx 0;
		font-size: 28rpx;
		font-weight: 600;
		border-bottom: 1rpx solid #eee;
	}

	/deep/.border--left {
		margin: 0 30rpx !important;
	}
	/deep/.uni-list--border-top, /deep/.uni-list--border-bottom {
		display: none;
	}
	/deep/.uni-list {
		border-top: 20rpx solid #eee;
	}
	.logout {
		margin: 20rpx 0;
	}
</style>
