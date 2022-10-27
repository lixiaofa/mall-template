<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-14 11:36:07
 * @LastEditTime: 2022-09-22 11:12:55
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon icon="cart-o" text="购物车" :badge="num" />

      <van-action-bar-button type="warning" text="加入购物车" value="add"  @click="showActionSheet" />
      <van-action-bar-button type="danger" text="立即购买" value="buy" @click="showActionSheet" />
    </van-action-bar>
    <van-action-sheet v-model:show="show">
      <div class="content">
        <van-card :price="choiceInfor.price " :thumb="choiceInfor.img">

          <template #bottom>
            <p class="choose">
              <span>已选: </span>
              {{choiceInfor.name}}，{{choiceInfor.num}}个
            </p>
          </template>
        </van-card>

        <div>
          <h6>口味</h6>
          <div>
            <van-button plain hairline type="primary" round size="mini" v-for="item in props.flavors" :key="item.goodsId" @touchstart="clickType(item)">
              {{item.name}}
            </van-button>
          </div>
        </div>

       
        <div class="flex-container justify-content-space-between">
          <h6>数量</h6>
          <div>
            <van-stepper v-model="choiceInfor.goodsCount" theme="round" button-size="22" disable-input />
          </div>
        </div> 
        
          <van-button type="danger" round block @touchstart="confirm">确认</van-button>
        
      </div>
      <div>

      </div>


    </van-action-sheet>

  </div>
</template>

<script setup lang="ts">

import {shopCart ,payment, addShopCart} from '@/api'

defineOptions({
  name: "ActionBar",
});
interface Flavor {
  goodsId: number,
  name: string,
  img: string,
  goodsCount: number,
  price: number
}
interface Props {
  goodsId: number,
  goodsCoverImg: string,
  goodsName: string,
  goodsIntro?: string
  sellingPrice: number,
  originalPrice?: number,
  goodsDetailContent?: string,
  tag?: string,
  goodsCarouselList?: string[],
  flavors?: Flavor[]

}
const props = withDefaults(defineProps<Props>(), {
  goodsId: 10918,
  goodsCoverImg: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
  goodsName: 'Apple AirPods (第三代)',
  sellingPrice: 1599,

  flavors: () => [{
    goodsId: 10925,
    name: '黑椒柠香*3+经典单片60g*1',
    img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
    price: 1599,
    goodsCount: 1
  }, {
    goodsId: 10925,
    name: '零食组合985g',
    img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
    price: 2000,
    goodsCount: 1
  }, {
    goodsId: 10925,
    name: '一抹咸香*4',
    img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
    price: 2500,
    goodsCount: 1
  }]

})
const show = ref(false)
const num = ref<string | number>('')
const active = ref('buy') // 0: add ; 1: buy
const choiceInfor = ref({
  goodsId: 10925,
  img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
  price: 1599,
  name: '黑椒柠香*3+经典单片60g*1',
  
  goodsCount: 1
})
const  router = useRouter()




function getShopCart(){
  shopCart().then(res =>{
    const { data} = res
    num.value = data.length
  })
}
getShopCart()





const clickType =  (good: Flavor) =>{
  choiceInfor.value = good

} 
const showActionSheet =  (event: Event) => {
  active.value =  event.target.value
  show.value = true
  
}
const actions = {
  add: ()=>{
    //do add
    addShopCart(choiceInfor.value).then((res)=>{
        const { data} = res
        show.value = true
      
        Toast({ message: '已添加！' });
        getShopCart()
       
    })
  },
  buy: ()=>{
     //do buy
    payment(choiceInfor.value).then(()=>{
      show.value = true
      Toast({ message: '付款成功!' });
      router.push('/user')
    })
  }
}
const confirm =   ()=>{
  actions[active.value]()
 

  show.value = false
}




</script>

<style lang="less" scoped>
.content {
  padding: 10px;
}

.choose span {
  color: #8c8c8c;

}
</style>
