<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-23 16:17:18
 * @LastEditTime: 2022-09-20 12:39:57
 * @LastEditors: 司马老贼
-->
<template>

   <div class="page">
      {{num}}

      <footer>
         <action-bar :good="infor">
            
         </action-bar>
      </footer>



   </div>
</template>

<script setup lang="ts">
import ActionBar from '@/components/action-bar/index.vue'
import { getGoodDetail } from '@/api'
defineOptions({
   name: "Product",
});
const route = useRoute()
const { params } = route
const infor = ref({})


const num = ref(0)

// const  getNum = function(data){
//    console.log('data' , data)

// }
// provide('getnum', getNum)

// provide('num', num)


getGoodDetail({ id: params.id }).then((res) => {
   const { data } = res

   infor.value = {
      ...data,
      flavors: [{
         id: 0,
         name: '黑椒柠香*3+经典单片60g*1',
         img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
         price: 1599,
        
      }, {
         id: 1,
         name: '零食组合985g',
         img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
         price: 2000
      }, {
         id: 2,
         name: '一抹咸香*4',
         img: 'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/MME73_AV4_GEO_CN.jpeg',
         price: 2500
      }]
   }
})

</script>

<style lang="less" scoped>

</style>