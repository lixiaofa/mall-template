<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-02 11:15:13
 * @LastEditTime: 2022-09-06 09:56:33
 * @LastEditors: 司马老贼
-->
<template>
    <div class="container">
        <app-header></app-header>
        <app-main></app-main>
        <AppFooter></AppFooter>
 
       
    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/layouts/components/app-header/index.vue'
import AppMain from "@/layouts/components/app-main/index.vue";
import AppFooter from '@/layouts/components/app-footer/index.vue'



defineOptions({
    name: "PageAllLayout",
});


</script>

<style lang="less" scoped>
</style>