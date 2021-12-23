import { login } from '@/api/requestApi'
import { defineStore } from 'pinia'

const userStore = defineStore({
  id: 'uesr-store',
  state: (): any => {
    userName: ''
  },
  actions: {
    // setUserName(name: string) {

    //   this.userName = name
    // },
    async SET_USER_NAME() {
      const params = {}
      const res = await login(params)
      this.userName = res.nickname
      localStorage.setItem('token', res.nickname)
      // console.log('这是store中的数据', res)
    },
  },
})

export default userStore
