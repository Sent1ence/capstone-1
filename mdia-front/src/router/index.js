import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Board from '../views/Board.vue'
import Equipment from '../views/Equipment.vue'
import AddEquipment from '../views/CreateEquipment.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile-page',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Board-members',
    name: 'Board',
    component: Board
  },
  {
    path: '/Equipment',
    name: 'Equipment',
    component: Equipment
  },
  {
    path: '/Equipment/Create',
    name: 'AddEquipment', 
    component: AddEquipment
  },  
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  routes
})

export default router