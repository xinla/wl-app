<template>
	<view class="ac page">
		<img class="logo" src="/static/a.jpg">
		
		<view class="wel">
			app欢迎你
		</view>
		<view class="desc">
			允许微信授权后即可开始使用
		</view>
		
		<button class="authorize" open-type="openSetting">允许微信授权</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.page {
		line-height: 60rpx;
	}
	.wel {
		font-size: 38rpx;
	}
	.desc {
		font-size: 26rpx;
	}
.logo {
		display: block;
		width: 200rpx;
		height: 200rpx;
		margin: 300rpx auto 50rpx;
	}
	.authorize {
		width: 85%;
		font-size: 32rpx;
		color: #fff;
		line-height: 80rpx;
		background: #ff5230;
		margin: 100rpx auto 0;
		border-radius: 8rpx;
		border: 0;
	}
</style>
