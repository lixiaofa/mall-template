/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-10-18 15:07:07
 * @LastEditors: 司马老贼
 */
export interface ResponseBody<T = any> {
  message: string;
  code: number;
  data?: T | T[];
}

//统一返回结构体
export interface PageResult<T = any> {
  data: T[];
  current?: number;
  pageSize?: number;loginName: string,
  passwordMd5: string
  total?: number;
  success: boolean;
}

export interface RequestResult<T = any> {
  data: T;
  success: boolean;
  errorMessage: string;
}





export  type Data = Record<string , any>


