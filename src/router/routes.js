
const routes = [
  {
    path: '/',
    // name: 'layout',
    component: () => import('layouts/MenuLayout.vue'),

    children: [
      { path: '/', name: 'home', component: () => import('src/pages/Home.vue') },

      { path: '/sales', name: 'sale', component: () => import('src/pages/Sale.vue') },
      { path: '/sales/:id', name: 'salecard', component: () => import('src/pages/SaleCard.vue') },

      { path: '/favorit', name: 'favorite', component: () => import('src/pages/Favorites.vue') },
      { path: '/basket', name: 'basket', component: () => import('src/pages/Basket.vue') },
      { path: '/delivery', name: 'delivery', component: () => import('src/pages/Delivery.vue') },
      { path: '/confirm', name: 'confirmdelivery', component: () => import('src/pages/ConfirmDelivery.vue') },

      { path: '/profile', name: 'profile', component: () => import('src/pages/Profile.vue'),
      children: [
        { path: 'signin', name: 'signin', component: () => import('src/pages/SignIn.vue') },
        { path: 'auth', name: 'auth', component: () => import('src/pages/Auth.vue') },
        { path: 'confirm', name: 'confirm', component: () => import('src/pages/Confirm.vue') },

        { path: ':id', name: 'user', component: () => import('src/pages/User.vue') },
      ]
    },

      
      


      
      { path: '/cards/:id', name: 'cards', component: () => import('src/pages/Cards.vue'), }
    ]

  },

  {
    path: '/cardproduct',
    component: () => import('layouts/CardLayout.vue'),
    children: [
      { path: ':id', name: 'cardproduct', component: () => import('src/pages/CardProduct.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
