<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-20 17:41:54
 * @LastEditTime: 2022-10-25 17:53:54
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">


    <van-cell-group inset>
      <van-cell v-for="item in list" :key="item.id">

        <template #title>


          <van-checkbox v-model="item.checked" @click="checkShop(item)">
            {{ item.name }}
          </van-checkbox>
        </template>
        <template #right-icon>

          <van-button round size="mini" type="success" @click="togglePopup(item.coupons)">优惠券</van-button>

          <!-- 优惠券列表 -->

        </template>
        <template #label>
          <div class="flex-container" v-for="good in item.goodlist" :key="good.goodsId">
            <van-checkbox v-model="good.checked" @click="checkGood(item, good)">
            </van-checkbox>
            <good :good="good">
              <template #num>

                <van-stepper v-model="good.num" theme="round" button-size="22" disable-input />

              </template>
              <template #footer>

                <van-button type="primary" size="mini" @touchstart="deleteFn(item, good)">删除</van-button>
              </template>
            </good>

          </div>


        </template>
      </van-cell>



    </van-cell-group>

    <popup :show="showCoupons" :coupons="coupons" @chosen-couponVal="chosenCouponVal"></popup>


    <van-submit-bar :price="price * 100" button-text="提交订单" @submit="onSubmit">

      <van-checkbox v-model="allChecked">全选</van-checkbox>
      <template #tip> 

        
        你的收货地址不支持配送,
      </template>
    </van-submit-bar>

  </div>
</template>

<script setup lang="ts">

import type { Coupon } from '@/views/shopping-cart/type'
import { shopCart } from '@/api'
import { useShoppingCart } from '@/utils/hooks/useShoppingCart'



defineOptions({
  name: "ShoppingCart",
});


const unrefList = [
  {
    id: 0,
    name: '三只松鼠旗舰店',
    checked: false,
    coupons: [
      {
        id: 0,
        description: '',
        available: 1,
        condition: '无门槛\n最多优惠12元',
        reason: '',
        value: 1.5,
        name: '店铺红包',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
      }
    ],
    goodlist: [
      {
        goodsId: 11,
        goodsName: '11三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',

        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,


        num: 1,
        checked: false,
        shopId: 0
      },
      {
        goodsId: 12,
        goodsName: '12三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',

        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,


        num: 1,
        checked: false,
        shopId: 0
      },
    ]
  },
  {
    id: 2,
    name: '倾城草原食品官方旗舰店',
    checked: false,
    coupons: [
      {
        id: 2,
        description: '',
        available: 1,
        condition: '无门槛\n最多优惠12元',
        reason: '',
        value: 5,
        name: '店铺红包',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '5',
        unitDesc: '元',
      }
    ],
    goodlist: [
      {
        goodsId: 21,
        goodsName: '21三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',

        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,


        num: 1,
        checked: false,
        shopId: 0
      },
      {
        goodsId: 22,
        goodsName: '22三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',

        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,


        num: 1,
        checked: false,
        shopId: 0
      },
    ]
  }
]

const list = ref(unrefList)

const { allChecked, checkGood, checkShop, deleteFn } = useShoppingCart(list)


shopCart().then((res) => {
  const { data } = res
  console.log('data', data)
})

const onSubmit = () => Toast('点击按钮');

const showCoupons = ref(false);



const coupons = ref([])
const couponsInd = ref(-1)
const togglePopup = function (itemCoupons: Coupon[]) {

  showCoupons.value = true


  coupons.value = itemCoupons



}

const chosenCouponVal = function (value: number, show: boolean) {
  showCoupons.value = show

  couponsInd.value = value


}


const price = computed(() => {

  const prices = list.value.reduce((pre, crru) => {
    crru.goodlist.forEach((item) => {
      if (item.checked) pre += item.sellingPrice * item.num
    })
  

    return pre

  }, 0)
  console.log('couponsInd.value === -1' , couponsInd.value === -1)

 

  return couponsInd.value === -1 ? prices : prices - coupons.value[couponsInd.value].value


})




</script>



<style lang="less" scoped>
::v-deep .van-cell-group--inset {
  margin: 0px;
}
</style>
