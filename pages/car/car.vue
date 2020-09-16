<template>
		<view class="main">
			<image src="@/static/a.jpg" mode=""></image>
			<view class="list-wrap">

				<view class="list" v-for="(item, index) of 13" :key="index">
					<view class="title flex">
						<text>皖A888888</text>
						<text>【五星】</text>
					</view>
					<view class="name info flex">
						注册时间：2020-02-20
						<view class="btn">
							<u-button type="success" size="mini" shape="circle" :plain="true">查看信息</u-button>
						</view>
					</view>
				</view>

			</view>
			
			<u-button type="primary" @click="">关联车辆信息</u-button>
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
			padding-bottom:  40rpx;
		}

		.info {
			color: #bbb;
		}
		/deep/.u-btn {
			padding: 0 40rpx;
		}
	}
</style>
