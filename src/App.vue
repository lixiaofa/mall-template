<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-10-13 12:10:33
 * @LastEditors: 司马老贼
-->
<template>
   <div class="app">
    <van-config-provider :theme-vars="themeVars">
     <router-view />
    </van-config-provider>
   
   </div>
   
    
</template>

<script setup lang="ts">
defineOptions({
  name: "App",
});
const themeVars = {
 
  navBarTitleFontSize: '17px',
  navBarTitleTextColor: '#252525',
 cardBackgroundColor: '#fff'
 
}

</script>
<style lang="less" scoped>

</style>
