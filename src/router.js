import { createRouter, createWebHistory } from 'vue-router';  // Importar as funções corretas do Vue Router
import ImagemDiversas from './components/ImagemDiversas.vue';
import PaginaMenu from './components/PaginaMenu.vue';
import VideosDiversos from './components/VideosDiversos.vue';

// Crie uma instância do roteador
const router = createRouter({
  history: createWebHistory(),  // Use createWebHistory para o Vue 3.x
  routes: [
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
    // Outras rotas, se houver
  ],
});

export default router;
