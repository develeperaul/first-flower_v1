
const routes = [
  {
    path: '/',
    // name: 'layout',
    component: () => import('layouts/MenuLayout.vue'),

    children: [
      { path: '/', name: 'home', component: () => import('pages/Home.vue') },

      { path: '/card/:id', name: 'cardproduct', component: () => import('pages/CardProduct.vue') },

      { path: 'sales', name: 'sale', component: () => import('pages/Sale.vue') },
      { path: '/sales/:id', name: 'salecard', component: () => import('pages/SaleCard.vue') },



      { path: '/favorit', name: 'favorite', component: () => import('pages/Favorites.vue') },
      { path: '/basket', name: 'basket', component: () => import('pages/Basket.vue') },
      { path: '/delivery', name: 'delivery', component: () => import('pages/Delivery.vue') },
      { path: '/confirm', name: 'confirmdelivery', component: () => import('pages/ConfirmDelivery.vue') },



      { path: '/profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: '/profile/signin', name: 'signin', component: () => import('pages/SignIn.vue') },
      { path: '/profile/auth', name: 'auth', component: () => import('pages/Auth.vue') },
      { path: '/profile/confirm', name: 'confirm', component: () => import('pages/Confirm.vue') },

      { path: '/profile/:id', name: 'user', component: () => import('pages/User.vue') },
      { path: '/cards/:id', name: 'cards', component: () => import('pages/Cards.vue'), },

      { path: '/infoPayment', name: 'infoPayment', component: () => import('pages/InfoPayment.vue') }
    ]

  },

  // {
  //   path: '/cardproduct',
  //   component: () => import('layouts/CardLayout.vue'),
  //   children: [
  //     { path: ':id', name: 'cardproduct', component: () => import('pages/CardProduct.vue') },
  //   ]
  // },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
