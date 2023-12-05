import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'

createApp(App).mixin(mixin).mount('#app')
