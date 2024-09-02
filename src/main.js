// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';

// const app = createApp(App);
// app.use(router);
// app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import { Lazyload } from 'vue-lazyload';

const app = createApp(App);
app.use(Lazyload);
app.mount('#app');