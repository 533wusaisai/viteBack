// 对接口请求方法进行 校验

import { AxiosRequestConfig } from 'axios'

// 网络请求响应格式，T 是具体的接口返回类型数据
interface CustomSuccessData<T> {
  code: number
  msg?: string
  message?: string
  data?: T
  [keys: string]: any
}

interface Get {
  <T>(url: string, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}

interface Post {
  <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<
    CustomSuccessData<T>
  >
}

// ... delete 等等

export { CustomSuccessData, Get, Post }
