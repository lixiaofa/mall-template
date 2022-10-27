<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 11:54:25
 * @LastEditTime: 2022-09-21 08:56:20
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">

    
    <app-main></app-main>
      
    <app-footer ></app-footer>
  </div>
</template> 

<script setup lang="ts">


import AppMain from "@/layouts/components/app-main/index.vue";

import AppFooter from "@/layouts/components/app-footer/index.vue";




//0： AppMain AppFooter
//1： AppHeader AppMain
//2:  AppHeader AppMain AppFooter


defineOptions({
  name: "Default",
});




</script>

<style lang="less" scoped></style>
