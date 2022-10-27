/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-09-09 11:23:29
 * @LastEditors: 司马老贼
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createPinia } from 'pinia'
import {setupStore}  from '@/stores'
import { Lazyload } from 'vant'



import '@/styles/variables.css'
import '@/styles/base.css'
import './app.less'


//toast
import 'vant/es/toast/style'




// Vant 桌面端适配
import '@vant/touch-emulator'


import '@/permission' // permission control

const app = createApp(App)

app.use(Lazyload, {
  lazyComponent: true,
});

setupStore(app)

app
  .use(router)
 

app.mount('#app')
