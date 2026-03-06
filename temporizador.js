 // Após 3 segundos começa o fade out
 setTimeout(() => {
    const logo = document.querySelector('.logo');
    logo.style.transition = 'opacity 1s ease'; // duração 1 segundo
    logo.style.opacity = '0';
    }, 3700);

  //Após 5 segundos, redireciona para mapa1.html
  setTimeout(() => {
    window.location.href = "mapa1.html";
    }, 5000);

  // Redireciona imediatamente se clicar na tela
  document.body.addEventListener('click', () => {
  clearTimeout(redirectTimeout);
  redirectToMapa();
  });
