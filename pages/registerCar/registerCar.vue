<template>
	<view class="register-wrapper">
		<image class="header" src="../../static/b.jpg"></image>
		<view class="content">
			<view class="title">司机注册</view>
			<u-form :model="form" ref="uForm" label-position="top">
				<u-form-item>
					<u-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.driverName" placeholder="请输入姓名" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.idNumber" placeholder="请输入身份证号" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.carCode" placeholder="请输入车牌号" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.accountNumber" placeholder="请输入银行卡号" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.openAccountName" placeholder="请输入持卡人姓名" />
				</u-form-item>
				<u-form-item>
					<u-input v-model="form.openBank" placeholder="请输入银行卡开户行(xxx银行xxx支行)" />
				</u-form-item>
				<u-form-item label="开户行所在城市">
					<regionPicker @selecteRegion_="selecteProvinceCity" :column_="2" />
				</u-form-item>
				<u-form-item label="与司机关系">
					<u-radio-group v-model="radio" :wrap="true">
						<u-radio v-for="(item, index) in radioList" :key="index" :name="item">
							{{ item }}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view style="color: red;font-size: 26rpx;">
						请上传清晰可辨认的图片，否则影响后期运费支付！
					</view>
				</u-form-item>
				<u-form-item label="身份证正面">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="2"></u-upload>
				</u-form-item>
				<u-form-item label="身份证反面">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="3"></u-upload>
				</u-form-item>
				<u-form-item label="行驶证正本">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="4"></u-upload>
				</u-form-item>
				<u-form-item label="行驶证副本">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="5"></u-upload>
				</u-form-item>
				<u-form-item label="驾驶证正本">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="8"></u-upload>
				</u-form-item>
				<u-form-item label="驾驶证副本">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="9"></u-upload>
				</u-form-item>
				<u-form-item label="营运证主车">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="10"></u-upload>
				</u-form-item>
				<u-form-item label="营运证挂车">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="11"></u-upload>
				</u-form-item>
				<u-form-item label="上岗证">
					<u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="12"></u-upload>
				</u-form-item>
			</u-form>
			<view class="submit" @click="submit">注册</view>
		</view>
	</view>
</template>

<script>
	import regionPicker from "@/components/region-picker/region-picker";
	import region from "@/components/region-picker/data";
	export default {
		components: {
			regionPicker
		},
		data() {
			return {
				form: {
					userId: '',
					phoneNumber: '',
					driverName: '',
					openBankCity: [],
				},
				radioList: ['本人', '家人', '雇主'],
				action: ''
			};
		},
		onShow() {
			uni.setStorageSync("region", region);
		},
		methods: {
			upload(files, index) {
				uni.uploadFile({
					url: 'https://gswl.sx56yun.com/lps/webApp/upLoadCardImg',
					files: files,
					formData: {
						imgType: index,
						driverName: this.form.driverName,
						carCode: this.form.carCode,
						phoneNumber: this.form.phoneNumber,
					},
					success() {
						uni.showToast({
							title: '上传成功',
							duration: 1500
						});
					},
					fail() {
						uni.showToast({
							icon: 'none',
							title: '上传失败',
							duration: 1500
						});
					}
				})
			},
			submit() {
				const self = this;
				uni.showLoading();
				uni.request({
					url: 'https://gswl.sx56yun.com/lps/webApp/registerCarApp',
					data: self.form,
					method: 'POST',
					success: ({
						data
					}) => {
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
			},
			selecteProvinceCity(value) {
				this.form.openBankCity = value;
			},
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
