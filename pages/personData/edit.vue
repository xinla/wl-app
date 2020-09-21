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
					<label><radio value="家人" :checked="totalData.driverRelation == '家人'" />家人</label>
					<label><radio value="雇主" :checked="totalData.driverRelation == '雇主'" />雇主</label>
				</view>
			</view>
			<view class="list">
				<view class="title">开户行所在城市:</view>
				<view class="val">
					<input type="text" v-model="totalData.driverName" placeholder="请输入">
				</view>
			</view>
		</view>
		<view class="submit">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				totalData: {}
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getData(option.id)
		},
		methods: {
			getData(id) {
				const self = this
				uni.request({
				    url: 'https://gswl.sx56yun.com/lps/webApp/getDriverInfo',
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
					label {
						margin: 0 0 0 20rpx;
					}
				}
				.button {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					font-size: 24rpx; 
					width: 150rpx;
					height: 45rpx;
					border-radius: 5rpx;
					background: #387ef7;
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
