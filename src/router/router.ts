const routes = [
  {
    path: '/',
    component: () => import('@/layouts/BasicLayout.vue'),
    hidenInMenu: true,
    meta: {
      authority: ['user', 'admin'],
      auth: true,
    },
    children: [
      {
        path: '/',
        redirect: '/task/task1',
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import('@/views/dashboard/Task.vue'),
        meta: {
          icon: 'task',
          title: '任务管理',
          authority: ['admin'],
        },
        // redirect: '/task/one',
        children: [
          {
            path: '/task/task1',
            name: 'task1',
            component: () => import('@/views/dashboard/task/node.vue'),
            meta: {
              // icon: "dashboard",
              title: '任务1',
            },
          },
          {
            path: '/task/task2',
            name: 'task2',
            component: () => import('@/views/dashboard/task/task2.vue'),
            meta: {
              // icon: "dashboard",
              title: '任务2',
            },
          },
          {
            path: '/task/task3',
            name: 'task3',
            component: () => import('@/views/dashboard/task/task3.vue'),
            meta: {
              // icon: "dashboard",
              title: '任务3',
            },
          },
        ],
      },
      {
        path: '/target',
        name: 'Target',
        component: () => import('@/views/dashboard/Target.vue'),
        meta: {
          icon: 'target',
          title: '目标管理',
          authority: ['admin'],
        },
        children: [
          {
            path: '/target/target1',
            name: 'target1',
            component: () => import('@/views/dashboard/target/target1.vue'),
            meta: {
              // icon: "dashboard",
              title: '目标1',
            },
          },
          {
            path: '/target/target2',
            name: 'target2',
            component: () => import('@/views/dashboard/target/target2.vue'),
            meta: {
              // icon: "dashboard",
              title: '目标2',
            },
          },
          {
            path: '/target/target3',
            name: 'target3',
            component: () => import('@/views/dashboard/target/target3.vue'),
            meta: {
              // icon: "dashboard",
              title: '目标3',
            },
          },
        ],
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/dashboard/User.vue'),
        meta: {
          icon: 'strategy',
          title: '账号管理',
          authority: ['admin'],
        },
        children: [
          {
            path: '/user/account1',
            name: 'account1',
            component: () => import('@/views/dashboard/user/account1.vue'),
            meta: {
              icon: 'contrast',
              title: '账号1',
              authority: ['admin'],
            },
          },
          {
            path: '/user/account2',
            name: 'account2',
            component: () => import('@/views/dashboard/user/account2.vue'),
            meta: {
              icon: 'case',
              title: '账号2',
              authority: ['admin'],
            },
          },
        ],
      },
      {
        path: '/reviewer',
        name: 'Reviewer',
        component: () => import('@/views/dashboard/Reviewer.vue'),
        meta: {
          icon: 'strategy',
          title: '网评员管理',
          authority: ['admin'],
        },
        children: [
          {
            path: '/reviewer/reviewer1',
            name: 'reviewer1',
            component: () => import('@/views/dashboard/reviewer/reviewer1.vue'),
            meta: {
              icon: 'contrast',
              title: '网评员1',
              authority: ['admin'],
            },
          },
          {
            path: '/reviewer/reviewer2',
            name: 'reviewer2',
            component: () => import('@/views/dashboard/reviewer/reviewer2.vue'),
            meta: {
              icon: 'case',
              title: '网评员2',
              authority: ['admin'],
            },
          },
          {
            path: '/reviewer/reviewer3',
            name: 'reviewer3',
            component: () => import('@/views/dashboard/reviewer/reviewer3.vue'),
            meta: {
              icon: 'case',
              title: '网评员3',
              authority: ['admin'],
            },
          },
          {
            path: '/reviewer/reviewer4',
            name: 'reviewer4',
            component: () => import('@/views/dashboard/reviewer/reviewer4.vue'),
            meta: {
              icon: 'case',
              title: '网评员4',
              authority: ['admin'],
            },
          },
        ],
      },
      {
        path: '/writing',
        name: 'Writing',
        component: () => import('@/views/dashboard/Writing/index.vue'),
        meta: {
          icon: 'strategy',
          title: '网评员管理',
          authority: ['admin'],
        },
        children: [
          {
            path: '/writing/writing1',
            name: 'writing1',
            component: () => import('@/views/dashboard/Writing/components/writing1.vue'),
            meta: {
              icon: 'contrast',
              title: '网评员1',
              authority: ['admin'],
            },
          },
          {
            path: '/writing/writing2',
            name: 'writing2',
            component: () => import('@/views/dashboard/Writing/components/writing2.vue'),
            meta: {
              icon: 'case',
              title: '网评员2',
              authority: ['admin'],
            },
          },
          {
            path: '/writing/writing3',
            name: 'writing3',
            component: () => import('@/views/dashboard/Writing/components/writing3.vue'),
            meta: {
              icon: 'case',
              title: '网评员3',
              authority: ['admin'],
            },
          },
        ],
      },
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  // {
  //   path: '*',
  //   name: '404',
  //   hidenInMenu: true,
  //   // component: NotFound,
  // },
  // {
  //   path: '/403',
  //   name: '403',
  //   hidenInMenu: true,
  //   // component: NoPage,
  // },
]

export default routes
