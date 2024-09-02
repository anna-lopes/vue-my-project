<template>
  <div>
    <h1>Imagem Diversas</h1>
    <!-- Conteúdo do componente -->
    <img v-lazy="require('@/assets/your-image.jpg')" alt="Descrição da Imagem">
    <img v-lazy="require('@/assets/img/foto1.jpg')" alt="Descrição da Imagem 1">
    <img v-lazy="require('@/assets/img/foto2.jpg')" alt="Descrição da Imagem 2">
    <img v-lazy="require('@/assets/img/foto3.jpg')" alt="Descrição da Imagem 3">
    <img v-lazy="require('@/assets/img/foto4.jpg')" alt="Descrição da Imagem 4">
  </div>
</template>

<script>
export default {
  name: 'ImagemDiversas',
  props: {
    msg: String
  }
}
</script>

<style scoped>
/* Adicione estilos aqui se necessário */
</style>
