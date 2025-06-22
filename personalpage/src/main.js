import { createApp } from 'vue';
import App from './App.vue';
import './css/flexbox-grid.css';
import './css/style.css';
import Selection from './components/selection.vue';

const app = createApp(App)
app.component('selection', Selection)
app.mount('#app')
