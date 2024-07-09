<template>
  <div class="hello">
  
<h1 style="text-align: center;">Tipos de Pantufas</h1>
<h5 style="text-align: center;">Pantufas fofinhass</h5>

  <!--Primeira imagem com largura de 800px-->
  <!--<div style="width: 100%;border: 2px solid green;">-->
    <img class="" src="assets/img/pantu.png" alt="" width="100%"> <br> 
 

  <!--<div style="width: 50%;border: 2px solid green;">
  <div style="width: 50%;border: 2px solid green;">-->
      <img class="" src="assets/img/pantu2.png" alt="" width="49%">

   <!-- <div style="width: 50%;border: 2px solid green; text-align: right;">-->
    <img class="" src="assets/img/pantu3.png" alt="" width="49%"> 

<div class="video">
      <video controls autoplay>
        <source src="assets/video/trote.mp4" type="video/mp4">
      </video></div><br><br><br>


      <table class="tabela">
          <thead>
              <tr>
                  <th>Item</th>
                  <th>Nome do Produto</th>
                  <th>Preço</th>
                  <th>Imagem</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Pantufa Stitch</td>
                  <td>R$159,90</td>
                  <td><img class="" src="assets/img/pantu.png" width="150px"></td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Pantufa Minnie</td>
                  <td>R$119,90</td>
                  <td><img class="" src="assets/img/pantu2.png" width="150px"></td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>Pantufa Monstro</td>
                  <td>R$259,50</td>
                  <td><img class="" src="assets/img/pantu3.png" width="150px"></td>
              </tr>                                    
            

          </tbody>
      </table>


  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
bemvindo{
  color: green;
  font-size: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
