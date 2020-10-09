<template>
	<view class="person-details-wrapper">
		<view class="content">
			<view class="list">
				<view class="title">基本信息</view>
				<view class="button" @click="routeChange(`/pages/personData/edit?id=${id}`)">编辑</view>
			</view>
			<view class="list">
				<view class="title">姓名</view>
				<view class="val">{{ totalData.driverName }}</view>
			</view>
			<view class="list">
				<view class="title">车牌号</view>
				<view class="val">{{ totalData.carCode }}</view>
			</view>
			<view class="list">
				<view class="title">身份证号</view>
				<view class="val">{{ totalData.idNumber }}</view>
			</view>
			<view class="list">
				<view class="title">注册时间</view>
				<view class="val">{{ totalData.operateDate }}</view>
			</view>
			<view class="list">
				<view class="title">银行卡号</view>
				<view class="val">{{ totalData.accountNumber }}</view>
			</view>
			<view class="list">
				<view class="title">持卡人姓名</view>
				<view class="val">{{ totalData.openAccountName }}</view>
			</view>
			<view class="list">
				<view class="title">银行卡开户行</view>
				<view class="val">{{ totalData.openBank }}</view>
			</view>
			<view class="list">
				<view class="title">开户行所在城市</view>
				<view class="val">{{ totalData.openBankCity }}</view>
			</view>
			<view class="list">
				<view class="title">与司机关系</view>
				<view class="val">{{ totalData.driverRelation }}</view>
			</view>
		</view>
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
			this.getDetails(option.id)
		},
		methods: {
			getDetails(id) {
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
			},
			/**
			 * 路由跳转
			 */
			routeChange (val) {
				uni.navigateTo({
				    url: val
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
					color: #000;
					font-size: 24rpx;
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
	}
</style>
