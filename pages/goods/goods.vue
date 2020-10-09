<template>
	<view class="page">
		<view class="search-wrap"><u-search placeholder="请输入货源号" v-model="keyword" @search="getData(1)" @custom="getData(1)"></u-search></view>
		<view class="main">
			<image src="@/static/a.jpg" mode=""></image>
			<view class="list-wrap">
				<view class="list" v-for="(item, index) of list" :key="index" @click="routeChange('/pages/choise/choise')">
					<view class="title flex">
						<text>{{ item.ownerCustomer }}</text>
						<text>{{ item.orderNumber }}</text>
					</view>
					<view class="address info">
						{{ item.originatingPlace }}
						<text class="to">到</text>
						{{ item.destination }}
					</view>
					<view class="name info flex">
						货物名称：{{ item.goodsName || '无' }}
						<view class="btn"><u-button type="success" size="mini" shape="circle" :plain="true">扫码接单</u-button></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goodsSourceXC } from '@/api/index.js';
export default {
	data() {
		return {
			keyword: '',
			list: []
		};
	},
	onLoad() {
		this.getData();
	},
	onPullDownRefresh() {
		this.getData();
	},
	methods: {
		getData(page) {
			uni.showLoading({
				title: '加载中...'
			});
			goodsSourceXC().then(r => {
				this.list = r.Rows;
				uni.stopPullDownRefresh();
				uni.hideLoading();
			});
		},
		routeChange (val) {
			uni.navigateTo({
			    url: val
			})
		}
	}
};
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
		padding: 20rpx 0 40rpx;
	}

	.to {
		padding: 0 20rpx;
	}

	.info {
		color: #bbb;
	}

	/deep/.u-btn {
		padding: 0 40rpx;
	}
}
</style>
