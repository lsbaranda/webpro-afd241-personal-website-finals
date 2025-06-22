import { createApp } from 'vue';
import App from './App.vue';
import Hiking from './components/galleryhiking.vue';
import OffRoad from './components/galleryoffroad.vue';
import GuestForm from './components/guestform.vue';
import GuestLog from './components/guestlog.vue';

import './css/flexbox-grid.css';
import './css/style.css';


const app = createApp(App)

app.component('galleryhiking', Hiking)
app.component('galleryoffroad', OffRoad)
app.component('guestform', GuestForm)
app.component('guestlog', GuestLog)

app.mount('#app')
