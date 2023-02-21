import {addInterceptor, getStorageSync} from "@tarojs/taro";

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}


export type Method = {
  method:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined
}

export interface HttpRequestConfig<T = any> {

  header?: Record<string, any>
  /** 超时时间，单位为毫秒
   * @default 2000
   * @supported weapp, h5, tt
   */
  timeout?: number
  /** HTTP 请求方法
   * @default GET
   */
  method?: keyof Method

  /** 响应的数据类型 */
  responseType?: keyof ResponseType

  /** 接口调用成功的回调函数 */
  success?: (result: Promise<T>) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: TaroGeneral.CallbackResult) => void
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void
}

export declare interface ServiceUrlConfig {
  baseUrl: string;
  uploadUrl: string;
  nonAuthUrlList: RegExp[];
}

const serviceInterceptor = chain => {
  const requestParams = chain.requestParams
  return chain.proceed(requestParams).then(res => {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject('请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return Promise.reject('没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      return Promise.reject('需要鉴权')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
  })
}

const authInterceptor = chain => {
  const requestParams = chain.requestParams
  let nonAuth = false
  baseServiceUrl.nonAuthUrlList.map(path => {
    nonAuth = nonAuth || path.test(requestParams.url || '')
  })
  const token = getStorageSync('token')
  if (!nonAuth && token) {
    requestParams.header = {
      token: token,
      ...requestParams.header
    }
  }
  return chain.proceed(requestParams)
}

// Taro.interceptors.logInterceptor
[serviceInterceptor, authInterceptor].forEach(i => addInterceptor(i))

export const baseServiceUrl = {
  baseUrl : process.env.NODE_ENV === 'development' ? "http://114.132.66.110:8080/" : "http://114.132.66.110:8080/",
  uploadUrl: "common/upload",
  nonAuthUrlList : [/\/token$/, /\/login$/, /\/registered$/]
} as ServiceUrlConfig;
