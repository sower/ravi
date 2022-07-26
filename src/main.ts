import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { setupNaive } from './plugins'


const app = createApp(App);
setupNaive(app)
app.mount('#app')
