<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-19 21:05:25
 * @LastEditTime: 2022-09-06 17:23:11
 * @LastEditors: 司马老贼
-->
<template>
   <header class="header flex-container align-items-center justify-content-space-between"> 
     <slot name="left"></slot>
     <slot name="center"></slot>

      <slot name="right"></slot>
     
     
   </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "TheHeader",
});


</script>

<style lang="less" scoped>

.header{
    width: 100%;
    height: 50px;
    padding: 0px 15px;
    position: fixed;
    left:  0px;
    top: 0px;
    z-index: 999;

   
    
    
    
}

</style>