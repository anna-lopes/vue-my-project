<template>
  <div class="imagens-container">
    <h1>Galeria de Imagens</h1>
    <div class="gallery">
      <img src="@/assets/foto1.jpg" alt="Chocolate ao Leite" class="gallery-item" loading="lazy">
      <img src="@/assets/foto2.jpg" alt="Morango" class="gallery-item" loading="lazy">
      <img src="@/assets/foto3.jpg" alt="Castanha do Pará" class="gallery-item" loading="lazy">
      <img src="@/assets/foto4.jpg" alt="Ninho" class="gallery-item" loading="lazy">
      <img src="@/assets/pantu.png" alt="Trufado" class="gallery-item" loading="lazy">
      <img src="@/assets/pantu2.png" alt="Caramelo Salgado" class="gallery-item" loading="lazy">
      <img src="@/assets/pantu3.png" alt="BARRA" class="gallery-item" loading="lazy">


      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagensDiversas'
}
</script>

<style scoped>
.imagens-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  width: 150px;
  height: auto;
  margin: 10px;
  border: 2px solid #42b983;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>
