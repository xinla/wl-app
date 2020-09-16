<template>
	<view class="page">
		<u-cell-group>
			<u-cell-item title="货源号" value="19613198616532" :arrow="false">
				<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
			</u-cell-item>
			<u-cell-item title="公司名称" value="新版本" :arrow="false"></u-cell-item>
			<u-cell-item title="运单号" value="19613198616532" :arrow="false"></u-cell-item>
			<u-cell-item title="货物名称" value="新版本1261256" :arrow="false"></u-cell-item>
			<u-cell-item title="起始地" value="安徽" :arrow="false"></u-cell-item>
			<u-cell-item title="目的地" value="合肥" :arrow="false"></u-cell-item>
		</u-cell-group>
		<u-button type="primary" @click="">开始</u-button>
		
		<u-modal v-model="isMask" content="请先停止未完成的订单再开始" confirm-text="我知道了"></u-modal>
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
				isMask: true,
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
