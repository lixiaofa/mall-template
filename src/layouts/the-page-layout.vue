<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-25 18:38:30
 * @LastEditTime: 2022-09-06 09:56:41
 * @LastEditors: 司马老贼
-->
<template>
    <div class="container">
        <app-header></app-header>
        <app-main></app-main>






    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/layouts/components/app-header/index.vue'
import AppMain from "@/layouts/components/app-main/index.vue";


defineOptions({
    name: "ThePageLayout",
});


</script>

<style lang="less" scoped>
</style>