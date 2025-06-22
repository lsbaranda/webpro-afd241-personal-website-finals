import { createApp } from 'vue';
import App from './App.vue';
import './css/main.css';
import hobint from './components/hobint.vue';

const app = createApp(App)
app.component('hobby-interest', hobint)
app.mount('#app')
