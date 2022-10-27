/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-10-14 10:26:32
 * @LastEditTime: 2022-10-14 10:27:09
 * @LastEditors: 司马老贼
 */
export  interface Good {
    goodsId: number,
    goodsName: string,
    goodsIntro?: string,
    goodsCoverImg: string
    sellingPrice: number,
    tag?: string,
    num?: number,
    checked?: boolean,
    shopId?: number,
  
  
  
  }
  