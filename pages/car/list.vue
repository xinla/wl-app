<template>
	<view class="page">
		<view class="main">
			<view class="list-wrap">
				<view class="list" v-for="(item, index) of list" :key="index">
					<view class="title flex">
						<text>{{ item.ownerCustomer }}</text>
						<text>【{{ item.carCode }}】</text>
					</view>
					<view class="address info">
						{{ item.originatingPlace }}
						<text class="to">到</text>
						{{ item.destination }}
					</view>
					<view class="address info">运单编号：{{ item.orderNumber }}</view>
					<view class="name info flex">
						<!-- 运输时间：{{ item.operateDate }} -->
						运单
						<view class="btn btn-box">
							<u-button type="error" v-if="item.btuShowRevoke" size="mini" shape="circle" :plain="true" @click="action(item.orderNumber, index)">
								撤销
							</u-button>
							<u-button type="error" v-if="!item.btuShowRevoke && !item.btuShow" size="mini" shape="circle" :plain="true" @click="goDetail(item.orderNumber, 'finish')">
								结束
							</u-button>
							<u-button v-if="item.btuShow" type="success" size="mini" shape="circle" :plain="true" @click="goDetail(item.orderNumber, 'start')">
								开始
							</u-button>
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
			keyword: '',
			list: [],
			dataList: {}
		};
	},
	onLoad(data) {
		this.dataList = data
		this.getData(data);
	},
	methods: {
		getData(data) {
			const self = this;
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/webApp/login',
				data: {
					carCode: data.carCode,
					phoneNumber: data.phone,
					sourceId: data.sourceId
				},
				method: 'POST',
				success: ({ data }) => {
					if (data.code == '200') {
						self.list = data.data
					}
				}
			})
		},
		action(id, eq) {
			const self = this;
			uni.request({
				url: 'https://gswl.sx56yun.com/lps/manualPositioning/revoke',
				data: {
					data: id
				},
				method: 'GET',
				success: (data => {
					uni.showToast({
						icon: 'none',
						title: '操作成功',
						duration: 1500
					});
					self.list.map((item, index) => {
						if (item.orderNumber == id)  self.list.splice(index, 1)
					})
				})
			});
		},
		goDetail(id, type) {
			uni.navigateTo({
				url: '../waybillDetail/waybillDetail?id=' + id + '&type=' + type
			});
		}
	}
};
</script>

<style>
	page {
		background: #eee;
	}
</style>
<style lang="scss" scoped>
.list-wrap {
	overflow: auto;
	position: relative;
	z-index: 1;
	.list {
		font-size: 24rpx;
		border-radius: 16rpx;
		padding: 30rpx 20rpx 20rpx;
		margin: 20rpx;
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
	.btn-box {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 300rpx;
	}
}
</style>
