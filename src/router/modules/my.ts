/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-23 16:35:55
 * @LastEditTime: 2022-09-06 10:56:21
 * @LastEditors: 司马老贼
 */
import PageAllLayout from '@/layouts/page-all-layout.vue'
import ThePageLayout from '@/layouts/the-page-layout.vue'
const my = [
  {
    path: '/my',
    name: 'My',
    component: PageAllLayout,
    redirect: '/user',
    children: [
      {
        path: '/user',
        name: 'User',
        component: ()=> import('@/views/my/index.vue'),
        meta: {
          title: '我的',
         
        }

      },
    ]
   
  } ,
  {
    path: '/my/user',
    name: 'MyUser',
    component: ThePageLayout,
    redirect: '/set',
    children: [
      {
        path: '/set',
        name: 'Set',
        component: ()=> import('@/views/my/set.vue'),
        meta: {
          title: '设置',
         
        }

      },

     
      
     
    ]
   
  }
]


export default my