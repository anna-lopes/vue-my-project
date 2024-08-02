<template>
  <div>
    <h1>Pagina Menu</h1>
    <!-- Link de navegação usando <router-link> -->
    <router-link to="/imagem-diversas">Ir para Imagem Diversas</router-link>

    <!-- Ou um botão para navegação programática -->
    <button @click="navigateToImagemDiversas">Ir para Imagem Diversas</button>
  </div>
</template>

<script>
export default {
  name: 'PaginaMenu',
  methods: {
    navigateToImagemDiversas() {
      this.$router.push({ name: 'imagem-diversas' });
    }
  }
};
</script>

<style>

</style>
