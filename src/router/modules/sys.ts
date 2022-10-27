/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-25 15:58:57
 * @LastEditTime: 2022-09-06 09:58:40
 * @LastEditors: 司马老贼
 */
import ThePageLayout from '@/layouts/the-page-layout.vue'
// import Layout from '@/layouts/default.vue'
const sys = [
  {
    path: "/sys",
    name: "Sys",
    
    redirect: '/login',
    component: ThePageLayout,
    children: [
        {
            path: '/login',
            name: 'Login',
            component: ()=> import('@/views/sys/login/index.vue'),
            meta: {
              title: '登录注册',
             
            }
    
          }
    ]
    
  },
  {
    path: '/404',
    name: '404',
    component: ()=> import('@/views/sys/error-page/404.vue'),
    meta: {
      title: '404'
    }

  }
];
export default sys;
