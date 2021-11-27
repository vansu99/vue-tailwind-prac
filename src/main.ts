import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/index'
import './assets/styles/index.css'
import 'nprogress/nprogress.css';

const app = createApp(App)

app.use(routes)
app.mount('#app')
