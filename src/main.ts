import App from '@/App.vue'
import '@/assets/styles/reset.less'
import route from '@/router/index'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { setupProdMockServer } from './mock/createMock'

if (import.meta.env.MODE === 'development') {
  setupProdMockServer()
}

const app = createApp(App)
app.use(route)
app.use(createPinia())
app.mount('#app')
