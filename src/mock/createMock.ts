import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import testModule from './index'
import testUser from './user'

// 全部导入文件
// const modules = import.meta.globEager('./**/*.ts')
// const mockModules: any[] = []
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return
//   }
//   mockModules.push(...modules[key].default)
// })
// export function setupProdMockServer() {
//   createProdMockServer(mockModules)
// }

export function setupProdMockServer() {
  createProdMockServer([...testModule, ...testUser])
}
