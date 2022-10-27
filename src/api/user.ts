/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-30 12:18:28
 * @LastEditTime: 2022-09-14 12:06:12
 * @LastEditors: 司马老贼
 */
import request from '@/utils/request'
import type {Data} from '@/api/type'
export  function login(data: Data){
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
   
}
export  function getUserInfor(){
    return request({
        url: '/user/info',
        method: 'get',
       
    })
   
}
export function logout(){
    return request({
        url: '/user/logout',
        method: 'post',
       
    })
}