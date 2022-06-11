require('./bootstrap');

import {createApp} from 'vue'

import Home from './components/Home/index';
import navbar from './sharedcomponent/navbar.vue'; 
import router from './router' 



const app = createApp({});

app.component('navbar', navbar); 
app.use(router).mount('#app')