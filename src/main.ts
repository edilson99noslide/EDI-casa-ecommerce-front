import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { Toaster } from 'vue-sonner'

const app = createApp(App)

app.component('Toaster', Toaster)

app.use(router)

app.mount('#app')
