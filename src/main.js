import "./styles/header.css";
import "./styles/main.css";
import "./styles/elements.css";
import "./styles/invis-fichers.css";
import "./styles/news.css";
import "./styles/servises.css";
import "./styles/style.css";
import "./styles/system-sh.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
