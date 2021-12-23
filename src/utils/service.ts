/**
 * @description 请求配置
 * @author wusaisai
 */
import { message } from 'ant-design-vue'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { showMessage } from './status'

// 用于存储请求标识 和 取消函数
const pending = new Map()

/**
 * 添加请求
 * @param config
 */

const addpending = (config: AxiosRequestConfig) => {
  const url = [config.method, config.url, config.params, config.data].join('&')

  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      // 如果 pending 中不存在当前请求，则添加进去
      if (!pending.has(url)) {
        pending.set(url, cancel)
      }
    })
}
/**
 * 移除请求
 * @param
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [config.method, config.url, config.params, config.data].join('&')
  // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
  if (pending.has(url)) {
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
  }
}

/**
 * 清空全部请求 路由切换时
 * @param
 */

export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}

const service = axios.create({
  // 联调
  baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
  //   baseURL: '/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  // 跨域请求是否需要凭证
  withCredentials: true,
  timeout: 30000,
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformRequest: [
    (data) => {
      data = JSON.stringify(data)
      return data
    },
  ],
  validateStatus() {
    // `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    // 使用 async-await，处理 reject 情况较为繁琐，所以全部返回 resolve，在业务代码中处理异常
    return true
  },
  transformResponse: [
    (data) => {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    },
  ],
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求之前 先取消之前的请求
    removePending(config)
    addpending(config)
    // const token = localStorage.getItem('token')
    const token = '121212'
    if (!config) {
      config = {}
    }
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = 'Bearer ' + token
    // config.headers.Token = 'Bearer ' + 'token'
    return config
  },
  (error) => {
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员!'
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    removePending(response)
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
      msg = showMessage(status)
      if (typeof response.data === 'string') {
        response.data = { msg }
      } else {
        response.data.msg = msg
      }
    } else {
      if (response.data.code == 200) {
        return response.data
      } else {
        // 接口报错
        if (response.config.url) {
          if (response.config.url.indexOf('login') > -1) {
            // store.commit('user/SET_LOGIN_ERR_MSG', response.data.data)
            // store.commit('user/SET_TOKEN', '')
          } else {
            // ElMessage({
            //   message: response.data.data || response.data.message,
            //   type: 'error',
            //   showClose: true,
            // })
          }
          throw response // 抛出错误
        }
      }
    }
    return response
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log('repeated request: ' + error.message)
    } else {
      // handle error code
      // 错误抛到业务代码
      error.data = {}
      error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
      message.error(error.data.msg)
    }
    return Promise.reject(error)
  }
)
export default service

// 定义接口与类型
// interface PendingType {
//   url?: string
//   methods?: Method
//   params: any
//   data: any
//   cancel: any
// }
// // 取消重复请求
// const pending: Array<PendingType> = []
// const CancelToken = axios.CancelToken
// // 移除重复请求
// const removePending = (config: AxiosRequestConfig) => {
//   for (const key in pending) {
//     const item: number = +key
//     const list: PendingType = pending[key]
//     if (
//       list.url === config.url &&
//       list.methods === config.method &&
//       JSON.stringify(list.params) === JSON.stringify(config.params) &&
//       JSON.stringify(list.data) === JSON.stringify(config.data)
//     ) {
//       list.cancel('操作频繁，请稍后重试')
//     }
//   }
// }

// const service = axios.create({
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//     token: '80c483d59ca86ad0393cf8a98416e2a1',
//   },
//   timeout: 8000,
//   baseURL: process.env.VUE_APP_API_URL,
//   // 表示跨域请求时是否需要使用凭证
//   withCredentials: false,
// })

// const service = axios.create({
//   baseURL: import.meta.env.VITE_API_DOMAIN,
//   timeout: 8000,
// })
// service.interceptors.request.use(
//   (config) => {
//     removePending(config)
//     config.cancelToken = new CancelToken((t) => {
//       pending.push({
//         url: config.url,
//         params: config.params,
//         data: config.data,
//         methods: config.method,
//         cancel: t,
//       })
//       /**
//        * @description 登录流程控制，
//        * 根据本地是否存在token 判断用户权限
//        * 即使token存在也有可能过期，所以每次的请求头中携带token
//        * 后台根据携带token 判断用户登录情况 并返回对应的状态码
//        * 在响应拦截器中 根据状态码做统一操作
//        */
//     })
//     /**
//      * @description 设置请求头
//      */
//     // const token = store.state.token;
//     // localStorage.setItem('token', token);
// if (storage.get(store.state.Roles)) {
//   store.state.Roles
//   config.headers.Authorization = storage.get(store.state.Roles)
// }

//     return config
//   },
//   (error) => {
//     message.error(error.data.error.message)
//     return Promise.reject(error.data.error.message)
//   }
// )
// service.interceptors.response.use(
//   // dataList.show = true
//   (res) => {
//     removePending(res.config)
//     // 请求成功
//     if (res.status === 200 || res.status === 204) {
//       setTimeout(() => {
//
//         //   dataList.show = false
//       }, 400)
//       return Promise.resolve(res)
//     } else {
//       return Promise.reject(res)
//     }
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// // 封装 GET POST 请求并导出
// export function request(url = '', params = {}, type = 'POST') {
//   //设置 url params type 的默认值
//   return new Promise((resolve, reject) => {
//     let promise: any
//     if (type.toUpperCase() === 'GET') {
//       promise = axios({
//         url,
//         params,
//       })
//     } else if (type.toUpperCase() === 'POST') {
//       promise = axios({
//         method: 'POST',
//         url,
//         data: params,
//       })
//     }
//     //处理返回
//     promise
//       .then((res: unknown) => {
//         resolve(res)
//       })
//       .catch((err: any) => {
//         reject(err)
//       })
//   })
// }
