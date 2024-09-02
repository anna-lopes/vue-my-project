import { createRouter, createWebHistory } from 'vue-router';
import ImagemDiversas from './components/ImagemDiversas.vue';
import PaginaMenu from './components/PaginaMenu.vue';
import VideosDiversos from './components/VideosDiversos.vue';

const routes = [
  {
    path: '/',
    name: 'imagem-diversas',
    component: ImagemDiversas,
  },
  {
    path: '/menu',
    name: 'pagina-menu',
    component: PaginaMenu,
  },
  {
    path: '/videos',
    name: 'videos-diversos',
    component: VideosDiversos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
