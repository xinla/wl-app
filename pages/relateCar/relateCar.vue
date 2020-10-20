<template>
	<view class="register-wrapper">
		<image class="header" src="../../static/b.jpg"></image>
		<view class="content">
			<view class="title">关联信息</view>
			<view class="list">
				<input type="text" v-model="form.carCode" placeholder="请输入车牌号">
			</view>
			<view class="list">
				<input type="text" v-model="form.phoneNumber" placeholder="请输入司机号码">
			</view>
			<view class="submit" @click="submit">查询</view>
		</view>
	</view>
</template>

<script>
	import {
		getRelationCar
	} from '@/api/index.js'
export default {
	data() {
		return {
			form: {
				phoneNumber: '',
				carCode: ''
			}
		};
	},
	methods: {
		submit() {
			uni.showLoading();
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/webApp/getRelationCar',
				data: Object.assign(this.form, {
					userCode: this.$store.state.userId
				}),
				method: 'GET',
				success: res => {
					if (res.statusCode && res.data.code == 200) {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							duration: 1000,
							title: res.data.msg
						})
						setTimeout(() => {
							uni.navigateBack({
							    delta: 1
							})
						}, 1000)
					} else {
						uni.showToast({
							icon: 'none',
							duration: 1000,
							title: res.data.msg
						})
					}
				}
			})
		}
	}
};
</script>

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="less" scoped>
	.register-wrapper {
		font-size: 0;
		line-height: 1;
		.header {
			width: 100vw;
			height: 450rpx;
		}
		.content {
			min-height: 200rpx;;
			margin: -100rpx 20rpx 0;
			padding: 0 40rpx 10rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			background: #fff;
			position: relative;
			z-index: 1;
			.title {
				color: #666;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				height: 125rpx;
			}
			.list {
				width: 100%;
				height: 120rpx;
				border-bottom: 1rpx solid #ccc;
				input {
					color: #666;
					font-size: 26rpx;
					height: 120rpx;
					border: none;
				}
			}
			.submit {
				color: #fff;
				font-size: 30rpx;
				letter-spacing: 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 550rpx;
				height: 80rpx;
				margin: 20rpx auto 10rpx;
				border-radius: 6rpx;
				background: #377ef4;
			}
		}
	}
</style>
