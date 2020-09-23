<template>
	<view class="register-wrapper">
		<image class="header" src="../../static/b.jpg"></image>
		<view class="content">
			<view class="title">司机注册</view>
			<view class="list">
				<input type="number" v-model="form.phoneNumber" placeholder="请输入司机号码">
			</view>
			<view class="list">
				<input type="text" v-model="form.password" password placeholder="请输入密码">
			</view>
			<view class="list">
				<input type="text" v-model="form.driverName" placeholder="请输入姓名">
			</view>
			<view class="submit" @click="submit">注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phoneNumber: '',
					password: '',
					driverName: ''
				}
			};
		},
		methods: {
			submit() {
				const self = this;
				uni.showLoading();
				uni.request({
				    url: '/lps/webApp/registerCarApp',
					data: self.form,
					method: 'POST',
				    success: ({ data }) => {
						if (data.code == '200') {
							uni.stopPullDownRefresh()
							uni.hideLoading();
							self.$store.commit('login', data.record)
							// localStorage.setItem('userId', data.record.id )
							uni.switchTab({
							    url: '/pages/index/index'
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
			min-height: 200rpx;
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
				height: 110rpx;
			}

			.list {
				width: 100%;
				height: 100rpx;
				border-bottom: 1rpx solid #ccc;

				input {
					color: #666;
					font-size: 26rpx;
					height: 100rpx;
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
				margin: 50rpx auto 30rpx;
				border-radius: 6rpx;
				background: #377ef4;
			}
		}
	}
</style>
