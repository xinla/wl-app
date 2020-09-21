<template>
	<view>
		<u-swiper :list="images" duration="2000" :circular="true" :effect3d="true"></u-swiper>
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
				<view class="li ac" v-for="(item, index) of insurance" :key="index">
					<image class="img" :src="domain + item.img_url" mode=""></image>
					<view class="text">
						{{item.title}}
					</view>
				</view>
			</view>

			<view class="title">
				公司新闻
			</view>
			<view class="news" v-for="(item, index) of news" :key="index">
				<image :src="domain + item.img_url" mode="aspectFill"></image>
				<view class="">
					<view class="news-title">{{item.title}}</view>
					<view class="news-desc" v-html="item.content"></view>
				</view>
			</view>

			<view class="title">
				联系我们
			</view>
			<view class="contact ac">
				地址：{{contact.address}}
			</view>
			<view class="contact ac">
				电话：{{contact.phone}}
			</view>
			<view class="contact ac">
				邮箱：{{contact.mailbox}}
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		data() {
			return {
				images: [],
				insurance: [],
				news: [],
				contact: {},
				domain: 'http://gs.wholexy.cn',
			}
		},
		onLoad() {
			let apiBase = this.domain + '/jk/index.ashx'
			// 滚动图
			http.get(apiBase, {
				params: {
					c: '1'
				}
			}).then(r => {
				for (let s of r) {
					this.images.push({
						image: this.domain + s.img_url,
						title: s.title
					})
				}
			})

			// 保险
			http.get(apiBase, {
				params: {
					c: '2'
				}
			}).then(r => {
				this.insurance = r
			})

			// 新闻
			http.get(apiBase, {
				params: {
					c: '3'
				}
			}).then(r => {
				this.news = r
			})

			// 联系我们
			http.get(apiBase, {
				params: {
					c: '4'
				}
			}).then(r => {
				this.contact = r[0]
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 0 24rpx 15rpx;
	}

	.title {
		padding: 50rpx 0;
		font-size: 32rpx;
		color: $uni-text-color-sub;
	}

	.service {
		justify-content: space-around;

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
		display: flex;

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
