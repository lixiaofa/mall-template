/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 11:40:40
 * @LastEditTime: 2022-09-09 09:36:56
 * @LastEditors: 司马老贼
 */
import Layout from '@/layouts/default.vue'


const home = [{
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: ()=> import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        
        }

      },
      
    ]
   
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ()=> import('@/views/home/product.vue'),
    meta: {
      title: '商品详情',
      
    }

  }
]


export default home