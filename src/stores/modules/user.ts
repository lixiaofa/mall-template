
/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-08-30 20:36:04
 * @LastEditTime: 2022-09-22 21:26:49
 * @LastEditors: 司马老贼
 */
import { defineStore } from "pinia";
import type { UserInfor} from '@/stores/type'
import type {Data} from '@/api/type'
import {setToken , getToken , removeToken} from '@/utils/auth'
import {store } from '@/stores'


import { login  , getUserInfor  , logout} from '@/api/user'





export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    userInfor: {},
  }),
  getters: {
    getUser: function(): UserInfor{
       return this.userInfor
    }
  },
  actions: {
    setToken(token: string){
      this.token = token
    },
    resetState(){
      removeToken()
      this.token = '',
      this.userInfor= {}
    },
    
    setUserInfor(userInfor: UserInfor){
      this.userInfor =  userInfor
    },
    login(user: Data){
      return new Promise<void>((resolve, reject)=>{
        login(user).then((res) =>{
           
            const { data} = res
            setToken(data)
            this.setToken(data)

            resolve()
            
           
        }).catch((err)=>{
          reject(err)
        })
      })
        
    },
    logout(){
       return new Promise<void>((resolve , reject)=>{
        logout().then(()=>{
          removeToken()
          this.setUserInfor({})
          resolve()
        }).catch((err)=>{
          reject(err)
         })
       })
    },
    getUserInfor(){
      return new Promise<void>((resolve , reject)=> {
        getUserInfor().then((res)=> {
        
          const {data} = res
          this.setUserInfor(data)
          resolve()
        }).catch((err)=>{
        
          reject(err)
        })
      })
    }
    
  },
});


export  function useUserStoreHook(){
  return useUserStore(store)
}