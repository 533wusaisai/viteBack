import request from '@/utils/request'

// 用户登录
const login = async (params: any) => {
  return await request.get<string>('/getUserInfo', params)
}

const user = async (params: object) => {
  return await request.post<string>('/user', params)
}

export { login, user }
