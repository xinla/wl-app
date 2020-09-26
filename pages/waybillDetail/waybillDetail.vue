<template>
  <view class="page">
    <u-cell-group>
      <u-cell-item title="货源号" :value="form.sourceNum" :arrow="false">
        <!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
      </u-cell-item>
      <u-cell-item title="公司名称" :value="form.ownerCustomer" :arrow="false"></u-cell-item>
      <u-cell-item title="运单号" :value="form.orderNumber" :arrow="false"></u-cell-item>
      <u-cell-item title="货物名称" :value="form.goodsName" :arrow="false"></u-cell-item>
      <u-cell-item title="起始地" :value="form.originatingPlace" :arrow="false"></u-cell-item>
      <u-cell-item title="目的地" :value="form.destination" :arrow="false"></u-cell-item>
    </u-cell-group>
    <view class="content" v-if="type === 'finish'">
      <u-form :model="form" ref="uForm">
        <u-form-item label="货物净重(吨) " label-width="auto">
          <u-input v-model="weight" placeholder="请输入货物净重(吨)" />
        </u-form-item>
        <u-form-item :border-bottom="false">
          <view style="color: red;font-size: 26rpx;">请上传清晰可辨认的图片，否则影响后期运费支付！</view>
        </u-form-item>
        <u-form-item label="榜单">
          <u-upload max-count="1" :auto-upload="false" @on-choose-complete="upload" index="2"></u-upload>
        </u-form-item>
      </u-form>
      <u-button type="primary" @click="submit">{{({start: '开始',finish: '结束'})[type]}}</u-button>
    </view>

    <!-- <u-modal v-model="isMask" content="请先停止未完成的订单再开始" confirm-text="我知道了"></u-modal> -->
  </view>
</template>

<script>
import { getOrderByNum, startOrder, endOrder } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        sourceNum: "",
        ownerCustomer: "",
        orderNumber: "",
        goodsName: "",
        originatingPlace: "",
        destination: "",
      },
      // isMask: false, // 未完成的订单弹窗提示
      type: "",
      weight: 0,
    };
  },
  onLoad(option) {
    //option为object类型，会序列化上个页面传递的参数
    this.getData(option.id);
    this.type = option.type;
  },
  methods: {
    getData(id) {
      uni.showLoading({
        title: "加载中...",
      });
      getOrderByNum(id).then((r) => {
        this.form = r;
        uni.hideLoading();
      });
    },
    upload(files, index) {},
    submit() {
      if (this.type === "start") {
        startOrder(this.form.orderNumber).then((r) => {
          uni.showToast({
            title: "运单已建成",
            duration: 2000,
          });
          uni.navigateTo({
            url: "../waybill/waybill",
          });
        });
      } else if (this.type === "finish") {
        endOrder(this.form.orderNumber, this.weight).then((r) => {
          uni.showToast({
            title: "已完成",
            duration: 2000,
          });
          uni.navigateTo({
            url: "/pages/waybill/waybill",
          });
        });
      }
    },
  },
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
</style>
