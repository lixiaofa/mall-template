<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-27 11:06:22
 * @LastEditTime: 2022-10-17 15:15:55
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">


    <van-cell-group inset>
      <van-cell v-for="item in list" :key="item.id ">

        <template #title>
          {{item.checked}}

          <van-checkbox v-model="item.checked" @click="checkShop(item)">
            {{item.name}}
          </van-checkbox>
        </template>
        <template #value>

          <van-button round type="success" size="mini">优惠券</van-button>
        </template>
        <template #label>

          <van-checkbox v-for="good in item.goodlist" :key="good.goodsId" v-model="good.checked"
            @click="checkGood(good , item)">
           
             
              <good   :good="good" >
                <template #num>
                  <van-stepper v-model="good.num" theme="round" button-size="22" disable-input />

                </template>
                <template #footer>
                  <van-button type="primary" size="mini">移入关注</van-button>
                  <van-button type="primary" size="mini">删除</van-button>
                </template>
              </good>
           
          </van-checkbox>


        </template>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script setup lang="ts">
import { shopCart } from '@/api'
defineOptions({
  name: "ShoppingCartList",
});


const unrefList = [
  {
    id: 0,
    name: '三只松鼠旗舰店',
    checked: false,
    coupons: [
      {
        available: 1,
        condition: '无门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
      }
    ],
    goodlist: [
      {
        goodsId: 11,
        goodsName: '三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',
       
        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,
      

        num: 1,
        checked: false,
        shopId: 0
      },
      {
        goodsId: 12,
        goodsName: '三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',
      
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
        available: 1,
        condition: '无门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
      }
    ],
    goodlist: [
    {
        goodsId: 21,
        goodsName: '三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',
      
        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,
      

        num: 1,
        checked: false,
        shopId: 0
      },
      {
        goodsId: 21,
        goodsName: '三只松鼠休闲零食香酥小黄鱼96g鱼干即食小鱼仔香辣下酒菜海味',
      
        goodsCoverImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        sellingPrice: 20,
      

        num: 1,
        checked: false,
        shopId: 0
      },
    ]
  }
]
type Shop = typeof unrefList[number]
interface Good {
  goodsId: number,
  goodsName: string,
  goodsIntro?: string,
  goodsCoverImg: string,
  sellingPrice: number,
  

  num?: number,
  checked?: boolean,
  shopId?: number,



}

const list = ref(unrefList)

const checked = ref<Shop[]>([])
const checkedGood = ref<Good[]>([])




const checkShop = (shop: Shop) => {

  if (shop.checked) {
    shop.goodlist.forEach((good: Good) => good.checked = true)

  } else {
    shop.goodlist.forEach((good: Good) => good.checked = false)
  }

  

}


const checkGood = function (good: Good, shop: Shop) {

  
  

  if (!checkedGood.value.includes(good) && good.checked){
    checkedGood.value.push(good)
  }else{
    checkedGood.value.splice(checkedGood.value.includes(good) , 1)
  }
 console.log('checkedGood' , checkedGood.value)  
  shop.checked =
    checkedGood.value.length > 0 && checkedGood.value.length === shop.goodlist.length
    
}
shopCart().then((res) => {
  const { data } = res
  console.log('data', data)
})
</script>

<style lang="less" scoped>

</style>
