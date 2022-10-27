/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-08-31 11:00:32
 * @LastEditors: 司马老贼
 */

import type { App} from 'vue'
import { createPinia } from 'pinia'


const store =  createPinia()


export function setupStore(app: App<Element>){
	app.use(store)
}

export {store}