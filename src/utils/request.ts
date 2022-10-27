/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-08-09 17:14:02
 * @LastEditTime: 2022-09-22 11:13:12
 * @LastEditors: 司马老贼
 */
import type { AxiosRequestConfig, AxiosError } from "axios";
import axios, { AxiosResponse } from "axios";
import type { ResponseBody } from "@/api/type";
// import { localStorage } from "@/utils/local-storage";
import { getToken} from '@/utils/auth'

// import { showToast  } from "vant";
// 这里是用于设定请求后端时，所用的 Token KEY
// 可以根据自己的需要修改，常见的如 Access-Token，Authorization
// 需要注意的是，请尽量保证使用中横线`-` 来作为分隔符，
// 避免被 nginx 等负载均衡器丢弃了自定义的请求头
export const Token = "Token";

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
});

export type RequestError = AxiosError<{
  message?: string;
  result?: any;
  errorMessage?: string;
}>;

// 异常拦截处理器
const errorHandler = (error: RequestError): Promise<any> => {
  if (error.response) {

    console.log('error.response' , error.response)
   
    Toast('网络错误！');
    
  }
  return Promise.reject(error);
};

// 请求拦截器
const requestHandler = (
  config: AxiosRequestConfig
): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
  const token  = getToken();
  // 如果 token 存在
  // 让每个请求携带自定义 token, 请根据实际情况修改
  if (token) {
    config.headers[Token] = token;
  }
  return config;
};

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
const responseHandler = (
  response: AxiosResponse
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  const res = response.data;
  if(res.resultCode !== 200){
    
    Toast(res.message);

    return Promise.reject(new Error(res.message || 'Error'))
  }else{
    return res
  }
 
};

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler);

export { AxiosResponse };

export default request;
