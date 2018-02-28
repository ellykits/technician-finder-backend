import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import UpdateCompany from '@/components/UpdateCompany'
import RequestDetails from '@/components/RequestDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register/',
      name: 'Register',
      component: Register
    },
     {
      path: '/dashboard/:id',
      name: 'Dashboard',
      component: Dashboard,
    },
     {
      path: '/dashboard/:id/:rqid',
      name: 'RequestDetails',
      component: RequestDetails
    },
     {
      path: '/dashboard/:id/update',
      name: 'UpdateCompany',
      component: UpdateCompany
    }
  ]
})
