import Vue from "vue";
import VueRouter from "vue-router";

import Main from '@/views/Main'
import About from '@/views/About'
import Members from '@/views/Members'
import Researches from '@/views/Researches'
import Works from '@/views/Works'
import Join from '@/views/Join'
import Person from "@/views/Person"
import Onework from "@/views/Onework"

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  routes
});

export default router;
