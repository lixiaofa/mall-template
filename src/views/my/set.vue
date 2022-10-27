<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-02 12:16:22
 * @LastEditTime: 2022-09-06 11:48:41
 * @LastEditors: 司马老贼
-->
<template>
    <div class="page">
      <van-button round block type="primary" @click="logout">退出</van-button>
    </div>
 </template>

 
 <script setup lang="ts">
   import {useUserStore} from '@/stores/modules/user'
 defineOptions({
   name: "Set",
 });
 const userStore = useUserStore()
 const router = useRouter()
 
const logout = async function (){
   await  userStore.logout()
   router.push('/home')
}
 </script>
 
 <style lang="less" scoped></style>