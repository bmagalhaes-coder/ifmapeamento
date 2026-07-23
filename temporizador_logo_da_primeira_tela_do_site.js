// =====================================================
// TEMPO QUE A LOGO FICA NA TELA
// =====================================================
// Para mudar quanto tempo a logo demora a começar a sumir,
// troque o número 2700 (em milissegundos, 1000 = 1 segundo).
 setTimeout(() => {
    const logo = document.querySelector('.logo');
    logo.style.transition = 'opacity 1s ease'; // duração do fade out (1 segundo)
    logo.style.opacity = '0';
    }, 2700);

  // Para mudar quanto tempo demora até ir para a tela do térreo,
  // troque o número 4000 (em milissegundos).
  setTimeout(() => {
    window.location.href = "terreo.html";
    }, 4000);

  // Redireciona imediatamente se clicar na tela
  document.body.addEventListener('click', () => {
  clearTimeout(redirectTimeout);
  redirectToMapa();
  });
