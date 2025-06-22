import { createApp } from 'vue';
import App from './App.vue';
import './css/flexbox-grid.css';
import './css/style.css';
import HobbyInterest from './components/hobint.vue';

const app = createApp(App)
app.component('hobby-interest', HobbyInterest)
app.mount('#app')
