const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue'), meta: { showMenu: false } },
      {
        path: 'salary',
        component: () => import('pages/salary/IndexPage.vue'),
        meta: { showMenu: true },
      },
      {
        path: 'earnings',
        component: () => import('pages/earnings/IndexPage.vue'),
        meta: { showMenu: true },
      },
      {
        path: 'expences',
        component: () => import('pages/expences/IndexPage.vue'),
        meta: { showMenu: true },
      },
      {
        path: 'saving',
        component: () => import('pages/saving/IndexPage.vue'),
        meta: { showMenu: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
