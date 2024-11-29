// Supports weights 400-700
import '@fontsource-variable/caveat';
// Supports weights 100-900
import '@fontsource-variable/chivo';

import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');