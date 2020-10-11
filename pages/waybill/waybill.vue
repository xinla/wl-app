<template>
	<view class="page">
		<view class="search-wrap">
			<u-search placeholder="请输入运单号" v-model="keyword" @search="getData(keyword)" @custom="getData(keyword)"></u-search>
		</view>
		<view class="main">
			<image src="@/static/a.jpg" mode=""></image>
			<view class="list-wrap">
				<view class="list" v-for="(item, index) of list" :key="index">
					<view class="title flex">
						<text>{{item.ownerCustomer}}</text>
						<text>【{{item.carCode}}】</text>
					</view>
					<view class="address info">
						{{item.originatingPlace}} <text class="to">到</text>{{item.destination}}
					</view>
					<view class="address info">
						运单编号：{{item.orderNumber}}
					</view>
					<view class="name info flex">
						运输时间：{{item.operateDate}}
						<view class="btn">
							<u-button type="error" v-if="item.isComplete == 0" size="mini" shape="circle" :plain="true" @click="action(item.orderNumber)">撤销</u-button>
							<u-button type="error" v-if="item.isComplete == 2" size="mini" shape="circle" :plain="true" @click="goDetail(item.orderNumber, 'finish')">结束</u-button>
							<u-button v-if="item.isComplete == 0" type="success" size="mini" shape="circle" :plain="true" @click="goDetail(item.orderNumber, 'start')">开始</u-button>
							<view v-else-if="item.isComplete == 1" style="color: #19BE6B; margin-right: 40rpx;">完成</view>
							<view v-else-if="item.isComplete == 2" style="color:#F29100; margin-right: 40rpx;">运输中</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		revokeOrder,
		getOrderByNum
	} from '@/api/index.js'
	export default {
		data() {
			return {
				keyword: '',
				list: []
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		onShow() {
			this.getData()
		},
		onLoad(option) {
			this.getData(option.id)
		},
		methods: {
			getData(orderNumber) {
				const self = this
				if (orderNumber) {
					uni.request({
					    url: 'https://gswl.sx56yun.com/lps//webApp/getOrderByNum',
					    data: {
							orderNumber: orderNumber
						},
						method: 'GET',
					    success: ({ data }) => {
							uni.stopPullDownRefresh()
							if (data.code == '200') {
								this.list = [r]
							}
					    }
					})
					// getOrderByNum(id).then(r => {
					// 	this.list = [r]
					// 	uni.stopPullDownRefresh()
					// })
				} else {
					uni.request({
					    url: 'https://gswl.sx56yun.com/lps/webApp/getOrderByUserId',
					    data: {
							userId: self.$store.state.userId
						},
						method: 'POST',
					    success: ({ data }) => {
							uni.stopPullDownRefresh()
							if (data.code == '200') {
								this.list = data.Rows
							}
					    }
					})
				}
			},
			action(id) {
				const self = this
				revokeOrder(id).then(r => {
					uni.showToast({
						title: '操作成功',
						duration: 1500
					})
					self.getData()
				})
			},
			goDetail(id, type) {
				uni.navigateTo({
					url: '../waybillDetail/waybillDetail?id=' + id + '&type=' + type
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-wrap {
		padding: 18px 30rpx;
	}
	.main {
		position: relative;
		overflow: hidden;
		padding: 0 18rpx 20rpx;
		background-color: #eee;
		image {
			position: absolute;
			width: 100%;
			height: 400rpx;
			left: 0;
		}
	}
	.list-wrap {
		position: relative;
		margin-top: 260rpx;
		height: calc(100vh - 416rpx);
		overflow: auto;
		z-index: 1;
		.list {
			font-size: 24rpx;
			border-radius: 16rpx;
			padding: 30rpx 20rpx 20rpx;
			margin-bottom: 20rpx;
			background-color: #fff;
		}
		.title {
			font-weight: 600;
		}
		.address {
			margin: 20rpx 0 40rpx;
		}
		.to {
			padding: 0 20rpx;
		}
		.info {
			color: #bbb;
		}
		/deep/.u-btn {
			margin-left: 30rpx;
			padding: 0 40rpx;
		}
	}
</style>
