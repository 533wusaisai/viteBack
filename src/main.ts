import App from '@/App.vue'
import '@/assets/styles/reset.less'
import router from '@/router/index'
import { createPinia } from 'pinia'
// import store from '@/store/index'
import { createApp } from 'vue'
import { setupProdMockServer } from './mock/createMock'

if (import.meta.env.MODE === 'development') {
  console.log(import.meta.env, 111)
  setupProdMockServer()
}

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
