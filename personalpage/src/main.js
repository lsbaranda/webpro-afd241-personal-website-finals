import { createApp } from 'vue';
import App from './App.vue';
import './css/main.css';
import HobbyInterest from './components/hobint.vue';

const app = createApp(App)
app.component('hobbyinterest', HobbyInterest)
app.mount('#app')
