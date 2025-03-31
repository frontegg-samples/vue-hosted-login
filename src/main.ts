import { createApp } from 'vue'
import App from './App.vue'
import { Frontegg } from '@frontegg/vue'
import { createRouter, createWebHistory } from 'vue-router'
import { sanboxContextOptions } from './config/sanboxContextOptions'
import AccountInfo from './view/AccountInfo.vue'
import AppWelcome from './view/AppWelcome.vue'

import './assets/base.css'
import './assets/main.css'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { name: 'HomePage', path: '/', component: AppWelcome },
    {
      name: 'AccountPage',
      path: '/account',
      component: AccountInfo,
    },
  ],
})

const app = createApp(App)

app.use(router)
app.use(Frontegg, {
  contextOptions: sanboxContextOptions,
  authOptions: {
    keepSessionAlive: true,
  },
  hostedLoginBox: true,
  router,
})

app.mount('#app')
