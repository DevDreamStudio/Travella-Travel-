import { createApp } from 'vue';
import App from './App.vue';

import './assets/style/main.scss';
import router from './router/router.ts';
createApp(App).use(router).mount('#app');
