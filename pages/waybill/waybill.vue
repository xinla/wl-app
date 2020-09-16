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
						<text>4164965498wtawe465496498</text>
						<text>【皖A888888】</text>
					</view>
					<view class="address info">
						安徽合肥 <text class="to">到</text>安徽合肥
					</view>
					<view class="name info flex">
						运输时间：2020-02-20
						<view class="btn">
							<u-button type="error" size="mini" shape="circle" :plain="true">撤销</u-button>
							<u-button type="success" size="mini" shape="circle" :plain="true">开始</u-button>
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
				query: {
					keywords: '',
					page: 0
				},
				isMask: false,
				acitveType: 0,
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		onShow() {
			this.getData()
		},
		methods: {
			getData(page) {
				this.query.page = page
				uni.showLoading({
					title: '加载中...'
				});

				setTimeout(function() {
					uni.stopPullDownRefresh()
					uni.hideLoading();
				}, 1000);
			},
			showMask(type) {
				this.isMask = true
			},
			switchType(index) {
				this.acitveType = index
				this.isMask = false
				this.getData(1)
			},
			search(keywords) {
				this.query.keywords = keywords
				this.getData(1)
			},
			goDetail(data) {
				uni.navigateTo({
					url: '../collegeDetail/collegeDetail'
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
			margin-left: 30rpx;
			padding: 0 40rpx;
		}
	}
</style>

.tab-wrap {
background: #fff;
height: 80rpx;
padding-top: 22rpx;

.tab {
font-size: 20rpx;
height: 100%;
margin-top: -2rpx;
}

.active {
border-bottom: 1px solid #f00;
}

.select {
font-size: 28rpx;
}

.icon {
padding-left: 20rpx;
font-weight: 800;
font-size: 20rpx;
transform: scaleX(1.7);
display: inline-block;
}
}

.list {
background: #fff;
border-radius: 8rpx;
overflow: hidden;
margin-bottom: 28rpx;

.content {
padding: 30rpx;
color: #555;
}
}

.cover {
position: relative;
line-height: 0;

.poster {
width: 100%;
height: 400rpx;
}

.title {
position: absolute;
bottom: 0;
color: #fff;
background: rgba(0, 0, 0, 0.5);
width: 100%;
line-height: 60rpx;
padding: 0 30rpx;
font-size: 28rpx;
}
}

.desc {
font-size: 28rpx;
}

.tag {
display: inline-block;
margin: 30rpx 0;
padding: 6rpx 20rpx;
background: #eee;
font-size: 28rpx;
border-radius: 8rpx;
}

.publish {
display: flex;
justify-content: space-between;
align-items: center;
font-size: 26rpx;

.user {
display: flex;
align-items: center;
}

.avatar {
background: #ff9008;
width: 40rpx;
height: 40rpx;
border-radius: 50%;
}

.name {
margin-left: 10rpx;
}

.right {
color: #aaa;
}

.read {
margin-left: 10rpx;
border-left: 1px solid #aaa;
padding-left: 10rpx;
line-height: 22rpx;
display: inline-block;

}
}

.mask {
position: fixed;
width: 100%;
height: 100%;
background: rgba(39, 39, 39, 0.76);
left: 0;
top: 0;
margin: auto;
z-index: 9;
}

.mask-content {
background-color: #fff;
height: 50%;
overflow: hidden;
padding-top: 80rpx;

.acitve {
background-color: #ff5230;
color: #fff;
}
}

.types-wrap {
flex-wrap: wrap;
justify-content: space-between;
align-content: flex-start;
padding: 0 4%;
height: 100%;
overflow: auto;
border-top: 1px solid #eee;

.type {
width: 48%;
margin: 24rpx 0 0;
line-height: 50rpx;
font-size: 22rpx;
border-color: #eee;
}
}
</style>
