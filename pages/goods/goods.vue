<template>
	<view class="page">
		<view class="search-wrap">
			<u-search placeholder="请输入货源号" v-model="keyword" @search="getList(1)" @custom="getList(1)"></u-search>
		</view>

		<view class="main">
			<image src="@/static/a.jpg" mode=""></image>
			<view class="list-wrap">

				<view class="list" v-for="(item, index) of 13" :key="index">
					<view class="title flex">
						<text>ansuns物流邮箱公司</text>
						<text>【4164965498wtawe465496498】</text>
					</view>
					<view class="address info">
						安徽合肥 <text class="to">到</text>安徽合肥
					</view>
					<view class="name info flex">
						货物名称：高端设备
						<view class="btn">
							<u-button type="success" size="mini" shape="circle" :plain="true">扫码接单</u-button>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			}
		},
		components: {},
		methods: {
			getList() {

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
		padding: 0 18rpx 40rpx;
		background-color: #eee;

		// background: #eee url(/static/a.jpg) no-repeat;
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
		height: calc(100vh - 580rpx);
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
