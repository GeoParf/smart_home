import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Elecrticity from '@/views/systems/electricity/Electricity.vue';
import SmartHouseSistem from '@/views/systems/smartHouseSystem/Smart-house-system.vue';
import CurtainsControle from '@/views/systems/curtainsControle/CurtainsControle.vue'
import WaterControle from '@/views/systems/waterControle/WaterControl.vue'
import ClimateControle from '@/views/systems/climateControle/ClimateControle.vue'
import AudioControle from '@/views/systems/audioControle/AudioControle.vue'
import Wifi from '@/views/systems/wi-fi/wi-fi.vue'
import VideoControle from '@/views/systems/videoControle/VideoControle.vue'
import AccessControle from '@/views/systems/accessControle/AccessControle.vue'
import AlertControle from '@/views/systems/alertControle/AlertControle.vue'
import News from '@/views/news/News.vue'
import Contacts from '@/views/contacts/Contacts.vue'
import Servises from '@/views/servises/Servises.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/shs',
    name: 'smart-hause-system',
    component: SmartHouseSistem,
  },

  {
    path: '/electrisity',
    name: 'electrisity',
    component: Elecrticity
  },

  {
    path: '/curtains-controle',
    name: 'curtains-controle',
    component: CurtainsControle
  },

  {
    path: '/water-controle',
    name: 'water-controle',
    component: WaterControle,
  },

  {
    path: '/climate-controle',
    name: 'climate-controle',
    component: ClimateControle,
  },

  {
    path: '/audio-controle',
    name: 'audio-controle',
    component: AudioControle,
  },

  {
    path: '/wi-fi',
    name: 'wi-fi',
    component: Wifi,
  },

  {
    path: '/video-controle',
    name: 'video-controle',
    component: VideoControle,
  },

  {
    path: '/access-controle',
    name: 'access-controle',
    component: AccessControle,
  },

  {
    path: '/alert-controle',
    name: 'alert-controle',
    component: AlertControle,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/servises',
    name: 'servises',
    component: Servises,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
