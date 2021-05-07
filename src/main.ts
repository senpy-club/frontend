import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'normalize.css/normalize.css';
import 'sakura.css/scss/sakura-dark.scss';
import './styles/main.scss';

createApp(App).use(router).mount('#app');
