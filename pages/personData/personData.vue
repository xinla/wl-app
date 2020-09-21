<template>
	<view class="person-wrapper">
		<view class="header">
			<image src="../../static/b.jpg"></image>
		</view>
		<view class="content">
			<view class="button">关联车辆信息</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style scoped lang="less">
	.person-wrapper {
		font-size: 0;
		line-height: 0;
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
			.button {
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: 28rpx;
				letter-spacing: 5rpx;
				height: 80rpx;
				margin: 0 30rpx;
				border-radius: 10rpx;
				background: #3c97de;
			}
		}
	}
</style>
