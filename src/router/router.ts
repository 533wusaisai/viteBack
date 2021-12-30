const routes = [
  {
    //
    path: '/',
    component: () => import('@/layouts/BasicLayout.vue'),
    meta: {
      title: '首页',
      authority: ['user', 'admin'],
      auth: true,
    },
    children: [
      {
        path: '/',
        redirect: '/dashboard/workplace',
      },
      // 工作台
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/pages/Workplace.vue'),
        meta: {
          icon: 'task',
          title: '仪表盘',
          authority: ['admin'],
        },
        children: [
          // 仪表盘 => 工作台
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace.vue'),
            meta: {
              title: '工作台',
            },
          },
          // 仪表盘 => 监控页
          {
            path: '/dashboard/monitor',
            name: 'Monitor',
            component: () => import('@/views/dashboard/Monitor.vue'),
            meta: {
              title: '监控页',
            },
          },
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis.vue'),
            meta: {
              title: '分析页',
            },
          },
        ],
      },
      // 列表
      {
        path: '/list',
        name: 'List',
        component: () => import('@/views/pages/List.vue'),
        meta: {
          icon: 'list',
          title: '列表',
          authority: ['admin'],
        },
        children: [
          {
            path: '/list/search',
            name: 'Search',
            component: () => import('@/views/list/Search.vue'),
            meta: {
              title: '搜索页',
            },
          },
          {
            path: '/list/form',
            name: 'Form',
            component: () => import('@/views/list/Form.vue'),
            meta: {
              title: '表单页',
            },
          },
          {
            path: '/list/list',
            name: 'List',
            component: () => import('@/views/list/List.vue'),
            meta: {
              title: '列表页',
            },
          },
        ],
      },
      // 账户中心
      {
        path: '/account',
        name: 'Account',
        component: () => import('@/views/pages/Account.vue'),
        meta: {
          title: '个人页',
          authority: ['admin'],
        },
        children: [
          {
            path: '/account/center',
            name: 'Center',
            component: () => import('@/views/account/Center.vue'),
            meta: {
              title: '个人中心',
              authority: ['admin'],
            },
          },
          {
            path: '/account/setting',
            name: 'Setting',
            component: () => import('@/views/account/Setting.vue'),
            meta: {
              icon: 'setting',
              title: '个人设置',
              authority: ['admin'],
            },
          },
        ],
      },
      // 结果页面
      {
        path: '/result',
        name: 'Result',
        component: () => import('@/views/pages/Result.vue'),
        meta: {
          title: '结果页',
          authority: ['admin'],
        },
        children: [
          {
            path: '/result/success',
            name: 'Success',
            component: () => import('@/views/result/Success.vue'),
            meta: {
              icon: 'success',
              title: '成功页',
            },
          },
          {
            path: '/result/error',
            name: 'Error',
            component: () => import('@/views/result/Error.vue'),
            meta: {
              icon: 'error',
              title: '失败页',
            },
          },
        ],
      },
      // 对比页
      {
        path: '/contrast',
        name: 'Contrast',
        component: () => import('@/views/contrast/Contrast.vue'),
        meta: {
          title: '对比页',
          authority: ['admin'],
        },
      },
      // 图表页
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/chart/Chart.vue'),
        meta: {
          title: '可视化图表页',
          authority: ['admin'],
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    hidenInMenu: true,
    component: () => import('@/components/Login/index.vue'),
    meta: {
      title: '登录',
      auth: true,
    },
  },
  {
    path: '/404',
    name: '404',
    hidenInMenu: true,
    component: () => import('@/views/404.vue'),
  },
]

export default routes
