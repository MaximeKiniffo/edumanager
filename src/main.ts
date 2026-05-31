import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import { seedDatabase } from './utils/seed'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)

seedDatabase()

app.mount('#app')
