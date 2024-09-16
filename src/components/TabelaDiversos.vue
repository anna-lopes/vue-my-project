<template>
  <div class="hello">
  <bemvindo>Bem-vindo ao meu Primeiro Projeto Front-End - Desenvolvimento Responsivo</bemvindo>
  <h1>PANTUFAS</h1>
  <h2>Edição 2024</h2>

<!--Primeira imagem com largura de 800px-->
<!--<div style="width: 100%;border: 2px solid green;">-->
  <img class="" src="@/assets/img/pantu.png" alt="" width="100%"> <br> 


<!--<div style="width: 50%;border: 2px solid green;">
<div style="width: 50%;border: 2px solid green;">-->
    <img class="" src="@/assets/img/pantu2.png" alt="" width="49%">

 <!-- <div style="width: 50%;border: 2px solid green; text-align: right;">-->
  <img class="" src="@/assets/img/pantu3.png" alt="" width="49%"> 

<div class="video">
    <video controls autoplay>
      <source src="assets/video/trote.mp4" type="video/mp4">
    </video></div><br><br><br>


   <table class="custom-table">
    <thead>
      <tr>
        <th>Item</th>
                <th>Nome do Produto</th>
                <th>Preço</th>
                <th>Imagem</th>
      </tr>
    </thead>
    <tbody><tr>
                <td>1</td>
                <td>Pantufa Stitch</td>
                <td>R$159,90</td>
                <td><img class="" src="assets/img/pantu.png" class="imgTabela" alt=""></td>
            </tr>
            <tr>
              <td>2</td>
                <td>Pantufa Minnie</td>
                <td>R$119,90</td>
                <td><img class="" src="assets/img/pantu2.png" class="imgTabela" alt=""></td>
            </tr>
            <tr>
              <td>3</td>
                <td>Pantufa Monstro</td>
                <td>R$259,50</td>
                <td><img class="" src="assets/img/pantu3.png" class="imgTabela" alt=""></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Pantufa Stitch</td>
                <td>R$159,90</td>
                <td><img class="" src="assets/img/pantu.png" class="imgTabela" alt=""></td>
            </tr>
            <tr>
              <td>2</td>
                <td>Pantufa Minnie</td>
                <td>R$119,90</td>
                <td><img class="" src="assets/img/pantu2.png" class="imgTabela" alt=""></td>
            </tr>
            <tr>
              <td>3</td>
                <td>Pantufa Monstro</td>
                <td>R$259,50</td>
                <td><img class="" src="assets/img/pantu3.png" class="imgTabela" alt=""></td>
            </tr>
    </tbody>
  </table>



</div>

</template>  

<script>
export default {
  name: 'TabelaDiversos'
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 40px;
  color: #42b983;
  margin-bottom: 10px;
}

.header h2 {
  font-size: 28px;
  color: #333;
}

.logo {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 2px solid #42b983;
  border-radius: 8px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.custom-table th {
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
}

.custom-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.img-tabela {
  height: 100px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
