import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user',
    method: 'post',
    response: (userName: string, passWord: string) => {
      return {
        code: 200,
        data: {
          userName: 'admin',
          //   passworw: 'admin',
          email: '@email',
          mobile_phone: '@phone',
        },
      }
    },
  },
] as MockMethod[]
