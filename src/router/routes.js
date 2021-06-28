
const routes = [
  {
    path: '/',
    component: () => import('layouts/MenuLayout.vue'),

    children: [
      { path: '/home', name: 'home', component: () => import('src/pages/Home.vue') },
      { path: '/sales', name: 'sale', component: () => import('src/pages/Sale.vue') },
      { path: '/favorit', name: 'favorite', component: () => import('src/pages/Favorites.vue') },
      { path: '/basket', name: 'basket', component: () => import('src/pages/Basket.vue') },
      { path: '/profile', name: 'profile', component: () => import('src/pages/Profile.vue') },
      { path: '/cardproduct', name: 'cardproduct', component: () => import('src/pages/CardProduct.vue') }
    ]

  },
  // {
  //   path: '',
  //   component: () => import('layouts/Layout.vue'),
  //   children: [
  //     { path: '/home', name: 'home', component: () => import('src/pages/Home.vue') },
  //   ]
  // }

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
