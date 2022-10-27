/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-01 15:21:12
 * @LastEditTime: 2022-09-01 19:21:04
 * @LastEditors: 司马老贼
 */
import Cookies from 'js-cookie'
const key = 'Token'
export  function setToken(token: string){
   return  Cookies.set(key, token)
}
export function removeToken(){
    return Cookies.remove(key)
}
export function getToken(){
    return Cookies.get(key)
}