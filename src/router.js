import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Leaderboard',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Projects',
          path: 'components/Projects',
          component: () => import('@/views/dashboard/component/Projects'),
        },
        {
          name: 'Events',
          path: 'components/events',
          component: () => import('@/views/dashboard/component/Events'),
        },
        // Tables
        {
          name: 'Members',
          path: 'component/Members',
          component: () => import('@/views/dashboard/component/Members'),
        },
        // Maps
        {
          name: 'Public Website',
          path: 'component/Public-Website',
          component: () => import('@/views/dashboard/component/Public-Website'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
