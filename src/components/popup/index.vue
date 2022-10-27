<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-10-18 18:56:23
 * @LastEditTime: 2022-10-24 20:08:25
 * @LastEditors: 司马老贼
-->
<template>
  <div>
    <van-popup v-model:show="props.show" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list  :coupons="props.coupons" :chosen-coupon="chosenCoupon" @change="onChange"
        :show-exchange-bar="false" />
    </van-popup>

  </div>
</template>

<script setup lang="ts">

defineOptions({
  name: "Popup",

});
interface Coupon {
  id: number,
  description: string,
  available: number,
  condition: string,
  reason: string,
  value: number,
  name: string,
  startAt: number,
  endAt: number,
  valueDesc: string,
  unitDesc: string,

}
interface Props {
  
  coupons: Coupon[],
  show: boolean,
}

const props = defineProps<Props>()

const emits = defineEmits(['chosenCouponVal'])

const chosenCoupon = ref(-1);
const onChange = (index) => {
 
  chosenCoupon.value = index
  emits('chosenCouponVal' ,   chosenCoupon.value , false)


};




</script>

<style lang="less" scoped>

</style>
