<template>
	<view>
		<u-swiper :list="list" duration="2000" :circular="true" :effect3d="true"></u-swiper>

		<view class="main">
			<view class="title">
				扫码接单
			</view>
			<u-button type="primary" :plain="true">
				<u-icon name="scan"></u-icon>扫描二维码
			</u-button>

			<view class="title">
				保险服务
			</view>
			<view class="service flex">
				<view class="li ac" v-for="(item, index) of 3" :key="index">
					<image class="img" src="/static/a.jpg" mode=""></image>
					<view class="text">
						保险服务
					</view>
				</view>
			</view>

			<view class="title">
				公司新闻
			</view>
			<view class="flex news" v-for="(item, index) of 3" :key="index">
				<image src="/static/a.jpg"
				 mode="aspectFill"></image>
				 <view class="">
					<view class="news-title">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
					<view class="news-desc">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
				 </view>
			</view>
			
			<view class="title">
				联系我们
			</view>
			<view class="contact ac">
				地址：安徽色花姑娘和合肥
			</view>
			<view class="contact ac">
				电话：1866666666
			</view>
			<view class="contact ac">
				邮箱：1866666666@qq.xcom
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: '/static/a.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '/static/b.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '/static/c.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 0 24rpx;
	}

	.title {
		padding: 50rpx 0;
		font-size: 32rpx;
		color: $uni-text-color-sub;
	}

	.service {
		.li {
			width: 32%;
		}

		.img {
			width: 88%;
			height: 200rpx;
		}

		.text {
			padding-top: 15rpx;
			color: $uni-text-color-sub;
		}
	}
	
	.news {
		padding-bottom: 30rpx;
		image {
				flex: 0 0 230rpx;
				height: 230rpx;
				border-radius: 8rpx;
				margin-right: 24px;
			}
			.news-title {
				font-size: 32rpx;
				font-weight: 600;
			}
			.news-desc {
				padding-top: 20rpx;
				font-size: 24rpx;
				color: #ddd;
			}
	}
	.contact {
		padding: 10rpx 0;
		}
</style>
