<template>
	<view class="money-wrapper">
		<image class="header" src="../../static/b.jpg"></image>
		<view class="content">
			<view class="list" v-for="(list, eq) in totalData" :key="eq">
				<view class="title">
					<text>{{ list.orderNumber }}</text>
					<text>【{{ list.dealStatus }}】</text>
				</view>
				<view class="item">车牌号: {{list.carCode}}</view>
				<view class="item">司机姓名: {{list.driverName}}</view>
				<view class="item">应收金额: {{list.amount}}</view>
				<view class="item">未收金额: {{list.moneyBalance}}</view>
				<view class="item">开户行: {{list.openBank}}</view>
				<view class="item">持卡人姓名: {{list.openAccountName}}</view>
				<view class="item">银行卡号: {{list.accountNumber}}</view>
				<view class="item">收款日期: {{list.dealTime}}</view>
			</view>
			<view class="list" v-for="(list, eq) in totalData" :key="eq">
				<view class="title">
					<text>{{ list.orderNumber }}</text>
					<text>【{{ list.dealStatus }}】</text>
				</view>
				<view class="item">车牌号: {{list.carCode}}</view>
				<view class="item">司机姓名: {{list.driverName}}</view>
				<view class="item">应收金额: {{list.amount}}</view>
				<view class="item">未收金额: {{list.moneyBalance}}</view>
				<view class="item">开户行: {{list.openBank}}</view>
				<view class="item">持卡人姓名: {{list.openAccountName}}</view>
				<view class="item">银行卡号: {{list.accountNumber}}</view>
				<view class="item">收款日期: {{list.dealTime}}</view>
			</view>
		</view>
	</view>
</template>

<script>
import http from '@/utils/request.js'
export default {
	data() {
		return {
			totalData: {}
		};
	},
	onLoad() {
		this.getData()
	},
	methods: {
		getData() {
			const self = this
			uni.request({
			    url: '/lps/webApp/getCostInfoByPhone',
			    data: {
					userId: this.$store.state.userId
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
};
</script>

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="less" scoped>
	.money-wrapper {
		font-size: 0;
		line-height: 1;
		.header {
			width: 100vw;
		}
		.content {
			margin: -200rpx 20rpx 0;
			box-sizing: border-box;
			position: relative;
			z-index: 1;
			.list {
				width: 100%;
				padding: 20rpx;
				margin: 0 0 20rpx 0;
				border-radius: 10rpx;
				background: #fff;
				.title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #000;
					font-size: 24rpx;
					height: 80rpx;
					text {
						&:last-child {
							font-weight: bold;
						}
					}
				}
				.item {
					color: #999;
					font-size: 24rpx;
					height: 50rpx;
				}
			}
		}
	}
</style>
