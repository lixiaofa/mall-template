/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-09-02 12:20:22
 * @LastEditors: 司马老贼
 */
// https://router.vuejs.org/zh/
import { createRouter, createWebHistory , RouteRecordRaw } from 'vue-router'
import WhiteList from '@/router/white-list'

import type {Mod } from './type'






// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager('./modules/*.ts');
console.log('modules11111111111' , modules)

const modulesRoutes: RouteRecordRaw[] = []
// 加入到路由集合中


Object.values(modules).forEach( (value: Mod) =>{
  const mod = value.default || {}
  const mods = Array.isArray(mod)? [...mod]: [mod]
  modulesRoutes.push(...mods)
})



console.log('modulesRoutes' , modulesRoutes)
// 定义路由，每个路由都需要映射到一个组件
const routes: RouteRecordRaw[] = [
  ...modulesRoutes
  
]


// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WhiteList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// 导出路由实例，并在 `main.ts` 挂载
export default router
