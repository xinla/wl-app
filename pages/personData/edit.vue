<template>
	<view class="person-details-wrapper">
		<view class="content">
			<view class="list">
				<view class="title">司机姓名:</view>
				<view class="val">
					<input type="text" v-model="totalData.driverName" placeholder="请输入">
				</view>
			</view>
			<view class="list">
				<view class="title">车牌号:</view>
				<view class="val">
					<input type="text" v-model="totalData.carCode" placeholder="请输入">
				</view>
			</view>
			<view class="list">
				<view class="title">身份证号:</view>
				<view class="val">
					<input type="text" v-model="totalData.idNumber" placeholder="请输入">
				</view>
			</view>
			<view class="list">
				<view class="title">持卡人姓名:</view>
				<view class="val">
					<input type="text" v-model="totalData.openAccountName" placeholder="请输入">
				</view>
			</view>
			<view class="list">
				<view class="title">银行卡开户行:</view>
				<view class="val">
					<input type="text" v-model="totalData.openBank" placeholder="请输入">
				</view>
			</view>
			<view class="list">
				<view class="title">与司机关系:</view>
				<view class="val">
					<radio-group @change="radioChange">
						<label><radio value="家人" :checked="totalData.driverRelation == '家人'" />家人</label>
						<label><radio value="雇主" :checked="totalData.driverRelation == '雇主'" />雇主</label>
					</radio-group>
				</view>
			</view>
			<view class="list">
				<view class="title">开户行所在城市:</view>
				<view class="val">
					<pick-regions :default-regions="defaultRegions" @getRegions="handleGetRegions">
						<input v-model="totalData.openBankCity" class="uni-input" disabled placeholder="省市区县、乡镇等" />
					</pick-regions>
				</view>
			</view>
		</view>
		<view class="submit" @click="submitFunc">保存</view>
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	export default {
		data() {
			return {
				id: '',
				totalData: {},
				defaultRegions: ['安徽省', '合肥市', '包河区'],
			}
		},
		components: {
			pickRegions
		},
		onLoad(option) {
			this.id = option.id
			this.getData(option.id)
		},
		methods: {
			/**
			 * 获取数据
			 */
			getData(id) {
				const self = this
				uni.request({
				    url: '/lps/webApp/getDriverInfo',
				    data: {
						carId: id
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
			 * 提交数据
			 */
			submitFunc () {
				const self = this
				uni.request({
				    url: '/lps/webApp/updateDriver',
				    data: {
						driverRelation: self.totalData.driverRelation,
						driver: self.totalData.driver,
						carCode: self.totalData.carCode,
						openBank: self.totalData.openBank,
						openAccountName: self.totalData.openAccountName,
						openBankCity: self.totalData.openBankCity,
						driverName: self.totalData.driverName,
						idNumber: self.totalData.idNumber,
						accountNumber: self.totalData.accountNumber
					},
					method: 'POST',
				    success: ({ data }) => {
						if (data.code == '200') {
							console.log(data)
						}
				    }
				})
			},
			/**
			 * 获取修改后的地址
			 */
			handleGetRegions (regions) {
				this.totalData.openBankCity = regions.map(item => item.name).join('-')
			},
			/**
			 * 切换与司机关系
			 */
			radioChange (val) {
				this.totalData.driverRelation = val.detail.value
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
	.person-details-wrapper {
		font-size: 0;
		line-height: 1;
		.content {
			padding: 0 30rpx;
			background: #fff;
			.list {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 90rpx;
				border-bottom: 1rpx solid #ccc;
				&:last-child {
					border: none;
				}
				.title {
					color: #000;
					font-size: 26rpx;
				}
				.val {
					color: #666;
					font-size: 24rpx;
					text-align: right;
					input {
						font-size: 26rpx;
					}
					label {
						margin: 0 0 0 20rpx;
					}
				}
			}
		}
		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 28rpx;
			font-weight: bold;
			letter-spacing: 10rpx;
			width: 690rpx;
			height: 90rpx;
			margin: 50rpx auto 0;
			border-radius: 10rpx;
			background: #387ef7;
		}
	}
</style>
