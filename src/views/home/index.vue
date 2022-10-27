<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-16 18:00:34
 * @LastEditTime: 2022-10-14 11:48:39
 * @LastEditors: 司马老贼
-->
<template>
  <div class="page">
    <the-header>
      <template #left>
        <van-icon class="classification" color="var(--van-darkcyan)" name="wap-nav" />
      </template>
      <template #center>
        <div class="search flex-container align-items-center">
          <div class="app-name">新蜂商城</div>
          <div class="ico-line"></div>
          <div class="placeholder">山河无恙，人间皆安</div>
        </div>
      </template>
      <template #right>
        <router-link to="/my/user">
          <van-icon name="user-o" />
        </router-link>

      </template>

    </the-header>

    <van-swipe :autoplay="3000" lazy-render :width="460" :height="205">
      <van-swipe-item v-for="item in carouselsD" :key="item.redirectUrl">
        <img :src="item.carouselUrl" class="img" />
      </van-swipe-item>
    </van-swipe>

    <van-grid clickable :column-num="5" :border="false">
      <van-grid-item v-for="item in categorys" :key="item.key" :icon="item.ico" :text="item.key" to="/" />

    </van-grid>
    
    <div class="good-list">
      <good-list>
        <template v-slot="{list}">
        
          <router-link v-for="item in list" :key="item.goodsId" :to="`/product/${item.goodsId}`">
              <good direction="vertical"   :good="item"  v-lazy="item" >
                <template  #tags>
                  <van-tag plain type="primary" v-if="item.goodsId % 2">{{item.tag}}</van-tag>
                </template>

              </good>
            </router-link> 
         
        </template>  
      </good-list>
   
    </div>
    

    






  </div>
</template>

<script setup lang="ts">
import { indexInfos } from '@/api'




defineOptions({
  name: "Home",
});
let carouselsD = ref([]);


indexInfos().then((res) => {
  const { carousels } = res.data
  carouselsD.value = carousels



})










const categorys = ref([
  {
    key: '新蜂超市',
    ico: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
    path: ''

  },
  {
    key: '新蜂服饰',
    ico: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
    path: ''

  },
  {
    key: '全球购',
    ico: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
    path: ''

  },
  {
    key: '新蜂生鲜',
    ico: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
    path: ''

  },
  {
    key: '新蜂到家',
    ico: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
    path: ''

  },
  {
    key: '充值缴费',
    ico: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
    path: ''

  },
  {
    key: '9.9元拼',
    ico: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
    path: ''

  },
  {
    key: '领劵',
    ico: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
    path: ''

  },
  {
    key: '省钱',
    ico: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
    path: ''

  },
  {
    key: '全部',
    ico: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
    path: ''

  }
])



</script>

<style lang="less" scoped>
.classification {
  font-size: 16px !important;
}

.search {
  // margin-left: 30px;
  width: 255px;
  height: 36px;
  background: hsla(0, 0%, 100%, .7);
  // background: red;
  border-radius: 36px;
  padding: 0px 10px;

}

.app-name {
  font-size: 18px;
  color: var(--van-darkcyan);
  font-weight: 700;
}

.ico-line {
  border-left: 1px solid #232326;


  margin-left: 10px;
  height: 22px;
  width: 15px;
}

.placeholder {
  color: #666;
}

.van-icon-user-o {
  font-size: 18px;
  color: var(--van-darkcyan);
}

::v-deep .van-grid-item__text {
  font-size: var(--van-font-size-xs);
}

.good-list {
  padding: 10px;
}

</style>
