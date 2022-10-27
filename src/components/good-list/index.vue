<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-07 16:41:23
 * @LastEditTime: 2022-10-13 12:03:12
 * @LastEditors: 司马老贼
-->
<template>
  <div>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    
        <slot :list="list"></slot> 
      </van-list>
    </van-pull-refresh>

  </div>
</template>


<script setup lang="ts">

import { indexInfos } from '@/api'

defineOptions({
  name: "GoodList",
});






// const {goodList} = defineProps<Props>()
// console.log('goodList', goodList)

let list = ref([]);
const data = reactive({
  page: 1 , 
  
})
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  // setTimeout(() => {
  //   if (refreshing.value) {
  //     list.value = [];
  //     refreshing.value = false;
  //   }

  //   for (let i = 0; i < 10; i++) {

  //     list.value.push(list.value.length + 1);
  //   }
  //   loading.value = false;

  //   if (list.value.length >= 40) {
  //     finished.value = true;
  //   }
  // }, 1000);
  indexInfos().then((res) => {
    const { hotGoodses , newGoodses , recommendGoodses } = res.data
    const goodList =  [...hotGoodses , ...newGoodses , ...recommendGoodses]
    if(goodList.length){
      list.value = list.value.concat(goodList)
       data.page++
       loading.value = false;
    }else{
      finished.value = true;
    }
    
    

  })
};

const onRefresh = () => {

  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

</script>

<style lang="less" scoped>
::v-deep .van-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2 , 49%) ;
  grid-gap: 10px;
  // grid-auto-flow: row dense; 
  grid-template-rows: masonry;
  
}

::v-deep .van-list__loading,
::v-deep .van-list__finished-text {
  width: 100vw;
}

</style>
