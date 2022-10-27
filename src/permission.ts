/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-31 19:20:12
 * @LastEditTime: 2022-09-22 11:17:45
 * @LastEditors: 司马老贼
 */
import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: true });
import {getToken} from '@/utils/auth'
import {useUserStoreHook} from '@/stores/modules/user'
import WhiteList from '@/router/white-list'



router.beforeEach(async(_to, _from, next) => {
  NProgress.start(); // start progress bar
  const hasToken  = getToken()
  const userStore = useUserStoreHook()
 
  if(hasToken){
    if(_to.path === '/login'){
        next({ path: '/' })
        NProgress.done()
    }else{
        const hasUserInfor =  userStore.getUser.nickName
        
        console.log('hasUserInfor' , hasUserInfor)
        
        if(hasUserInfor){
            next()
        }else{
            try{
                
                await userStore.getUserInfor()
                next()
            }catch(err){
                
                userStore.resetState()
                Toast(err);
                next(`/login?redirect=${_to.path}`)
                NProgress.done()

            }
        }
    }
    
   
  }else{
    if(WhiteList.includes(_to.path)){
      next()
    }else{
        next(`/login?redirect=${_to.path}`)
      NProgress.done()
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
