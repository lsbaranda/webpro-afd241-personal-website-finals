import { createApp } from 'vue';
import App from './App.vue';
import HobbyInterest from './components/hobint.vue';

import './css/flexbox-grid.css';
import './css/style.css';


const app = createApp(App)
app.component('hobbyinterest', HobbyInterest)

app.mount('#app')
