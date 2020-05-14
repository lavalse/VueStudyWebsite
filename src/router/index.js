import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import About from '@/components/pages/About'
import Members from '@/components/pages/Members'
import Researches from '@/components/pages/Researches'
import Works from '@/components/pages/Works'
import Join from '@/components/pages/Join'
import Person from "@/components/pages/Person"
import Onework from "@/components/pages/Onework"

import Xu from '@/components/members/Xu'

import Resium from '@/components/works/Resium'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/members/:id',
      component: Person
    },
    {
      path: '/researches',
      name: 'Researches',
      component: Researches
    },
    {
      path: '/researches/:id',
      component: Onework
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/works/:id',
      component: Onework
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Xu',
      name: 'Xu',
      component: Xu
    },
    {
      path: '/Resium',
      name: 'Resium',
      component: Resium
    }
  ]
})
