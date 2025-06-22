import { createApp } from 'vue';
import App from './App.vue';
import './css/main.css';
import HobbyInterest from './components/hobint.vue';
import References from './components/references.vue';

const app = createApp(App)
app.component('hobby-interest', HobbyInterest)
app.component('references', References)
app.mount('#app')
