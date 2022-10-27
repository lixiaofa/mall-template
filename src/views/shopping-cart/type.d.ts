/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-10-18 15:06:51
 * @LastEditTime: 2022-10-24 20:27:42
 * @LastEditors: 司马老贼
 */

export interface Coupon {
  id: number,
  description: string,
  available: number,
  condition: string,
  reason: string,
  value: number,
  name: string,
  startAt:number,
  endAt: number,
  valueDesc: string,
  unitDesc: string,

}


export interface Good {
  goodsId: number,
  goodsName: string,
  goodsIntro?: string,
  goodsCoverImg: string,
  sellingPrice: number,


  num?: number,
  checked?: boolean,
  shopId?: number,



}
export interface Shop{
  id: number,
  name: string,
  checked?: boolean,
  coupons: Coupon[],
  goodlist: Good[]

  
  
  
 
}
