import './lib/wheel.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './route'
import 'github-markdown-css'
import Markdown from './components/doc/Markdown.vue'
const app = createApp(App)
app.use(router)
app.component('Markdown', Markdown)
app.mount('#app')