<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-25 15:42:19
 * @LastEditTime: 2022-09-23 16:25:06
 * @LastEditors: 司马老贼
-->
<template>
  <div class="page">
    <van-form @submit="onLogin"  ref="formEle">
      <van-cell-group inset>
        <van-field v-model="user.loginName" name="loginName"  placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="user.passwordMd5" type="password" name="passwordMd5" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" :disabled="btn.disabled">
          {{btn.txt}}
        </van-button>
      </div>
    </van-form>




  </div>
</template>

<script setup lang="ts" >

import {useUserStore} from '@/stores/modules/user'
defineOptions({
  name: "Login",
});

const user = reactive({
  loginName: '15700778892',
  passwordMd5: 'e10adc3949ba59abbe56e057f20f883e'
})
const btn = reactive({
  txt: '登 录',
  disabled: false
})
const router = useRouter()
const userStore = useUserStore()



const onLogin = async(user) => {
    try{
      btn.disabled = true
       await userStore.login(user)
       router.push({path: '/'})
       
    }catch(err){
      btn.disabled = false

    }
  
};




</script>

<style lang="less" scoped>
</style>