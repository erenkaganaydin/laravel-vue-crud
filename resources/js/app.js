import './bootstrap';

window.Vue = require('vue');

import App from './components/App.vue';
import * as VueRouter from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
 
 

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
  });
 
  Vue.createApp(App).use(router).mount('#app');