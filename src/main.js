//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {Tabs, Tab} from 'vue3-tabs-component';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

app.use(router)
app.component('tabs', Tabs)
app.component('tab', Tab)
app.mount('#app')
