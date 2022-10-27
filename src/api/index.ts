/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-09-20 16:25:07
 * @LastEditors: 司马老贼
 */

import request from "@/utils/request";
import type {Data} from '@/api/type'

// export async function queryProse(): Promise<any> {
//   return request('/project/prose')
// }
export function indexInfos() {
  return request({
    url: "/index-infos",
    method: "get",
  });
}

export function getGoodDetail(data: Data){
  return request({
    url: `/goods/detail/${data.id}`,
    method: "get",
  })
}
export function shopCart(){
  return request({
    url: '/shop-cart'
  })
}
export function addShopCart(data: Data){
  return request({
    url: "/shop-cart",
    method: "post",
    data
  })
}

export function payment(data: Data){
  return  new Promise((resolve , reject) =>{
    resolve(data)
  })
}