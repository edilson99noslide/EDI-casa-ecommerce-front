import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import { Toaster } from 'vue-sonner'

const app = createApp(App)

const pinia = createPinia()

app.component('Toaster', Toaster)
app.use(router)
app.use(pinia)
app.mount('#app')
