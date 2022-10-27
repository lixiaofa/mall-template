
/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-20 17:20:41
 * @LastEditTime: 2022-09-20 18:17:58
 * @LastEditors: 司马老贼
 */
import ThePageLayout from '@/layouts/the-page-layout.vue'
const  shoppingCart= [
    {
      path: "/cart",
      name: "Cart",
      component: ThePageLayout,
      children: [
          {
              path: '/shoppingcart',
              name: 'ShoppingCart',
              component: ()=> import('@/views/shopping-cart/index.vue'),
              meta: {
                title: '购物车',
               
              }
      
          }
      ]
      
    },
    
  ];
  export default shoppingCart;
  