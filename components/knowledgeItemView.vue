<template name="knowledgeItemView">
	<view class="container">
		<view class="title">
			请问积分可以做什么用
		</view>
		<text class="time">2020-04-15 14:08:42</text>
		<view class="expand">
			<view class="row row-infos">
				<image class="avatar" mode="scaleToFill" :src="static/bar/task.png"></image>
				<text class="name">周波</text>
			</view>
			<view class="row">
				<text class="key">阅读：</text>
				<text class="value">181</text>
				<text class="key">评论：</text>
				<text class="value">2</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "knowledgeItemView",
		data() {
			return {}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding: 20rpx;
		background: #FFFFFF;
	}

	.title {
		font-size: 26rpx;
		font-weight: bold;
	}

	.time {
		color: #666;
		font-size: 20rpx;
	}

	.row {
		font-size: 20rpx;
		line-height: 60rpx;
		&.row-infos {
			display: flex;
			align-items: center;
		}
	}

	.avatar {
		background: #ff9008;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	.name {
		font-size: 20rpx;
		margin-left: 10rpx;
	}

	.key {
		color: #999;
	}

	.value {
		color: #999;
	}

	.expand {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
