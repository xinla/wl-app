<template>
	<view class="page">
		<img class="logo" src="/static/a.jpg">

		<view class="phone-wrap input-wrap">
			<view class="label">
				手机
			</view>
			<input type="text" v-model.trim="phone" placeholder="请输入手机号码" />
		</view>
		<view class="label">
			验证码
		</view>
		<view class="code-wrap input-wrap flex">
			<input class="code" type="text" v-model.trim="code" placeholder="请输入验证码" />
			<text v-if="isCoding" class="get-code">{{second}}后重新获取</text>
			<text v-else class="get-code" @tap="getCode">获取短信验证码</text>
		</view>

		<view class="login ac">
			注册/登录
		</view>
		<view class="agreement-wrap">
				<switch type="checkbox" @change="checkboxChange" />
				我已认真阅读<navigator url="../agreement/agreement" hover-class="navigator-hover">
					<text class="agreement">《星募客用户服务协议》</text>
				并接受协议内容
				</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				code: '',
				checked: false,
				isCoding: false,
				second: 60,
				timer: '',
				agree: false
			};
		},
		methods: {
			getCode() {
				if (this.phone.length === 11) {
					uni.showToast({
						title: "验证码已发送",
						icon: "none"
					})
					this.isCoding = true;
					// this.code = res.code;
					this.timer = setInterval(() => {
						this.second--;
						if (this.second <= 0) {
							this.isCoding = false;
							this.second = 60;
							clearInterval(this.timer);
						}
					}, 1000);
				} else {
					uni.showToast({
						title: "手机号格式错误",
						icon: "none"
					})
				}
			},
			checkboxChange(e) {
			      this.agree = e.target.value;
			    },
		},
	}
</script>

<style lang="scss">
	.page {
		padding: 0 50rpx;
	}

	.logo {
		display: block;
		width: 200rpx;
		height: 200rpx;
		margin: 50rpx auto;
	}

	.label {
		font-size: 24rpx;
	}

	.input-wrap {
		border-bottom: 1px solid #eee;
		margin-bottom: 40rpx;

		input {
			padding: 20rpx 0;
			font-size: 26rpx;
			color: #888;
		}

		.code {
			width: 50%;
			display: inline-block;
			vertical-align: middle;
		}

		.get-code {
			font-size: 32rpx;
		}
	}

	.code-wrap {
		justify-content: space-between;
		align-items: center;
	}

	.login {
		font-size: 36rpx;
		color: #fff;
		padding: 20rpx 0;
		background: #ff5230;
		margin-bottom: 30rpx;
	}

	.agreement-wrap {
		font-size: 20rpx;
	}

	.agreement {
		color: #007AFF;
	}

	navigator {
		display: inline-block;
	}
	switch {
	  transform: scale(0.6);
	  width: 30px;
	  height: 12px;
	  vertical-align: sub;
	  line-height: 30px;
	}
</style>
