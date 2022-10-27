<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-25 15:47:25
 * @LastEditTime: 2022-08-29 11:29:23
 * @LastEditors: 司马老贼
-->
<template>
    <div class="page flex-container align-items-center justify-content-center">
        
        <div class="">
            <h5 class="h4">404</h5>
            <p class="p"> 抱歉，您访问的页面不存在。</p>
            <div class="btn">
               <van-button type="primary" to="/home">返回首页</van-button>
            </div>

           

        </div>
       
    </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "404",
});


</script>

<style lang="less" scoped>
.page{
   
    height: 100vh;
    
}
.h4 , .p , .btn{
    text-align: center;
    color: var(--van-darkcyan) ;
}
</style>