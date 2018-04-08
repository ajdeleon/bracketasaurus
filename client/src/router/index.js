import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../components/Login'
import Home from '../components/Home'
import Current from '../components/Current'
import Closed from '../components/Closed'
import Sidebar from '../components/Sidebar'
import Guest from '../components/Guest'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/current',
      name: 'Current',
      component: Current
    },
    {
      path: '/closed',
      name: 'Closed',
      component: Closed
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
