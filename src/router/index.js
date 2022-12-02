import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/shs',
    name: 'smart-hause-system',
    component: () => import ('@/views/systems/smartHouseSystem/Smart-house-system.vue')//SmartHouseSistem,
  },

  {
    path: '/electrisity',
    name: 'electrisity',
    component: () => import ('@/views/systems/electricity/Electricity.vue')
  },

  {
    path: '/curtains-controle',
    name: 'curtains-controle',
    component: () => import ('@/views/systems/curtainsControle/CurtainsControle.vue')
  },

  {
    path: '/water-controle',
    name: 'water-controle',
    component: () => import ('../views/systems/waterControle/WaterControl.vue'),
  },

  {
    path: '/climate-controle',
    name: 'climate-controle',
    component: () => import ('../views/systems/climateControle/ClimateControle.vue'),
  },

  {
    path: '/audio-controle',
    name: 'audio-controle',
    component: () => import ('../views/systems/audioControle/AudioControle.vue'),
  },

  {
    path: '/wi-fi',
    name: 'wi-fi',
    component: () => import ('../views/systems/wi-fi/wi-fi.vue'),
  },

  {
    path: '/video-controle',
    name: 'video-controle',
    component: () => import ('../views/systems/videoControle/VideoControle.vue'),
  },

  {
    path: '/access-controle',
    name: 'access-controle',
    component: () => import ('../views/systems/accessControle/AccessControle.vue'),
  },

  {
    path: '/alert-controle',
    name: 'alert-controle',
    component: () => import ('../views/systems/alertControle/AlertControle.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import ('../views/news/News.vue'),
  },
  {
    path: '/servises',
    name: 'servises',
    component: () => import ('../views/servises/Servises.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import ('../views/contacts/Contacts.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
