<template>
	<view class="page">
		<u-cell-group>
			<u-cell-item title="货源号" :value="form.sourceNum" :arrow="false"><!-- <u-switch slot="right-icon" v-model="checked"></u-switch> --></u-cell-item>
			<u-cell-item title="公司名称" :value="form.ownerCustomer" :arrow="false"></u-cell-item>
			<u-cell-item title="运单号" :value="form.orderNumber" :arrow="false"></u-cell-item>
			<u-cell-item title="货物名称" :value="form.goodsName" :arrow="false"></u-cell-item>
			<u-cell-item title="起始地" :value="form.originatingPlace" :arrow="false"></u-cell-item>
			<u-cell-item title="目的地" :value="form.destination" :arrow="false"></u-cell-item>
		</u-cell-group>
		<button class="start" @click="getLocationFunc" type="primary" v-if="!type || type == 'start'">确认运单</button>
		<view class="content" v-if="type === 'finish'">
			<u-form :model="form" ref="uForm">
				<u-form-item label="货物净重(吨) " label-width="auto">
					<u-input v-model="weight" placeholder="输入净重" />
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view style="color: red;font-size: 26rpx;">请上传清晰可辨认的图片，否则影响后期运费支付！</view>
				</u-form-item>
				<u-form-item label="磅单">
					<view class="image">
						<image class="icon" v-if="type == 'finish' && !imgSrc" src="../../static/add.png" @click="submitImg"></image>
						<image class="img" v-else :src="imgSrc"></image>
					</view>
				</u-form-item>
			</u-form>
			<u-button type="primary" @click="submit">结束</u-button>
		</view>
		<!-- <u-modal v-model="isMask" content="请先停止未完成的订单再开始" confirm-text="我知道了"></u-modal> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				sourceNum: '',
				ownerCustomer: '',
				orderNumber: '',
				goodsName: '',
				originatingPlace: '',
				destination: ''
			},
			/**
			 * 未完成的订单弹窗提示
			 */
			// isMask: false,
			type: '',
			weight: '',
			imgSrc: ''
		};
	},
	onLoad(option) {
		/**
		 * option为object类型，会序列化上个页面传递的参数
		 */
		this.getData(option.id);
		this.orderNumber = option.id;
		this.type = option.type;
	},
	methods: {
		getData(id) {
			const self = this;
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/webApp/getOrderByNum',
				data: {
					orderNumber: id // '20200825174842B05C7'
				},
				method: 'GET',
				success: ({ data }) => {
					self.form = data.result;
				}
			});
		},
		getLocationFunc() {
			const self = this;
			/**
			 * 启运
			 */
			// self.$JsBridge.GetMethods(bridge => {
			// 	bridge.callHandler('startTransport', {}, res => {})
			// })
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/manualPositioning/start',
				data: {
					data: String(self.orderNumber)
				},
				method: 'GET',
				success: ({ data }) => {
					uni.showToast({
						icon: 'none',
						title: '运单已生成',
						duration: 1000
					});
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/waybill/waybill'
						});
					}, 1000);
				}
			});
		},
		/**
		 * 上传磅单
		 */
		submitImg (data) {
			const self = this
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
					const tempFilePaths = res.tempFilePaths;
					uni.uploadFile({
					    url: 'https://gswl.sx56yun.com/lps/webApp/uploadBillboard', //仅为示例，非真实的接口地址
					    filePath: tempFilePaths[0],
					    name: 'file',
					    formData: {
					        'orderNumber': self.form.orderNumber
					    },
					    success: (uploadFileRes) => {
					        self.imgSrc = tempFilePaths[0]
					    }
					});
			    }
			})
		},
		submit() {
			const self = this;
			if (this.type === 'finish') {
				/**
				 * 停运
				 */
				// this.$JsBridge.GetMethods(bridge => {
				// 	bridge.callHandler('stopTransport', {}, res => {})
				// })
				uni.request({
					url: 'https://gswl.sx56yun.com/lps/manualPositioning/end',
					data: {
						data: String(self.orderNumber),
						weight: String(self.weight)
					},
					method: 'GET',
					success: r => {
						uni.showToast({
							icon: 'none',
							title: '已完成',
							duration: 1000
						});
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/waybill/waybill'
							});
						}, 1000);
					}
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	min-height: 200rpx;
	padding: 0 40rpx 10rpx;
	border-radius: 10rpx;
	box-sizing: border-box;
	background: #fff;
	position: relative;
	z-index: 1;
}
.start {
	width: 450rpx;
	margin: 50rpx auto;
}
.image {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120rpx;
	height: 120rpx;
	background: #eee;
	.icon {
		width: 50rpx;
		height: 50rpx;
	}
	.img {
		width: 90%;
		height: 90%;
		object-fit: cover;
	}
}
</style>
