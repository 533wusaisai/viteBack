import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import ViteComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
const isProduction = process.env.NODE_ENV === 'production'
const localEnabled: boolean = (process.env.USE_MOCK as unknown as boolean) || false
const prodEnabled: boolean = (process.env.USE_CHUNK_MOCK as unknown as boolean) || false

// import html from 'vite-plugin-html'

// import styleImport from 'vite-plugin-style-import'
// styleImport({
//           libs: [
//               {
//                   libraryName: 'element-plus',
//                   esModule: true,
//                   resolveStyle: name => `element-plus/lib/theme-chalk/${name}.css`,
//               },
//           ],
//       }),
// 打包压缩
// import viteCompression from 'vite-plugin-compression'
// viteCompression({
//           //生成压缩包gz
//           verbose: true,
//           disable: false,
//           threshold: 10240,
//           algorithm: 'gzip',
//           ext: '.gz',
//       }),
//  图片压缩
// import viteImagemin from 'vite-plugin-imagemin'
// viteImagemin({
//     gifsicle: {
//         optimizationLevel: 7,
//         interlaced: false,
//     },
//     optipng: {
//         optimizationLevel: 7,
//     },
//     mozjpeg: {
//         quality: 50,
//     },
//     pngquant: {
//         quality: [0.8, 0.9],
//         speed: 4,
//     },
//     svgo: {
//         plugins: [
//             {
//                 name: 'removeViewBox',
//             },
//             {
//                 name: 'removeEmptyAttrs',
//                 active: false,
//             },
//         ],
//     },
// }),

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 打包输出文件名
    outDir: 'build',
    // 生产环境移除 console debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    //  静态文件输出文件名
    assetsDir: 'static/img/',
    rollupOptions: {
      // 静态文件拆分
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    // 取消计算文件大小，加快打包速度
    brotliSize: false,
    sourcemap: true,
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    // assetsInlineLimit: 4096,
    //chunk 大小警告的限制
    // chunkSizeWarningLimit: 800，
    //启用/禁用 CSS 代码拆分
    // cssCodeSplit: true,
    //     // 配置CDN
    // import externalGlobals from 'rollup-plugin-external-globals'
    //     external: ['element-plus', 'vue'],
    //     plugins: [
    //         externalGlobals({
    //             vue: 'Vue',
    //             'element-plus': 'ElementPlus',
    //         }),
    //     ],
    // },
  },
  plugins: [
    vue(),
    // 组件库按需加载
    ViteComponents({
      resolvers: [AntDesignVueResolver()],
    }),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: 'mock',
      localEnabled: true, // 开发打包开关
      // prodEnabled: prodEnabled, // 生产打包开关
      // localEnabled: command === 'serve',
      supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
  ],
  // 文件重命名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 配置使用less
        javascriptEnabled: true,
        // 全局引入变量文件
        // additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/color.less')}"`
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/styles/color.less')}"`,
        },
      },
    },
    postcss: {},
  },
  base: isProduction ? './' : '',
  server: {
    // port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
    // 热更新
    hmr: {
      overlay: true,
    },
  },
})
