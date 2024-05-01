document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona a imagem pelo class name 'img_title'
    const imgTitle = document.querySelector('.img_title');
  
    // Define uma flag para controlar a posição da imagem
    let isOnLeft = true;
  
    // Adiciona um event listener para 'click' na imagem
    imgTitle.addEventListener('click', () => {
      // Move a imagem para a direita ou volta para a esquerda
      if (isOnLeft) {
        imgTitle.style.transform = 'translateX(-670px)';
      } else {
        imgTitle.style.transform = 'translateX(0px)';
      }
      // Alterna a flag para mudar a posição no próximo clique
      isOnLeft = !isOnLeft;
    });
});


window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var logo = document.querySelector('header img');
  var menu = document.querySelector('.menu');
  var link = document.querySelector('.link');

  header.style.transition = '0.6s ease-in-out';
  logo.style.transition = '0.6s ease-in-out';
  menu.style.transition = '0.6s ease-in-out';

  // Verifica se a página foi rolada para baixo
  if (window.scrollY > 1) {
      logo.style.opacity = '0'; // Esconde a imagem do logo
      logo.style.marginLeft = '0px'
      logo.style.width = '10px'
      header.style.justifyContent = 'center'; // Centraliza a barra de navegação
      menu.style.marginRight = '50px'
  } else {
      logo.style.opacity = '1';  // Mostra a imagem do logo
      logo.style.display ='block'
      logo.style.width = '110px'
      logo.style.marginLeft = '150px'
      header.style.justifyContent = 'space-between';// Retorna a barra de navegação para o inícioa  
  }
});
  