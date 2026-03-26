// 1. Seleciona o container do seu mapa
const container = document.querySelector('.mapa-container');

/**
 * Função para criar um botão em uma coordenada específica
 * @param {number} x - Posição horizontal (em pixels)
 * @param {number} y - Posição vertical (em pixels)
 * @param {string} nome - Texto que aparecerá no botão
 */
function criarBotaoNoMapa(x, y, nome) {
    // Cria o elemento
    const btn = document.createElement('button');
    
    // Adiciona a classe que estilizamos no CSS
    btn.className = 'botao-sala';
    btn.innerText = nome;
    
    // Define a posição baseada nos parâmetros
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    // Adiciona uma ação de clique (exemplo)
    btn.onclick = () => alert(`Você clicou na ${nome}`);
    
    // Coloca o botão dentro do mapa
    container.appendChild(btn);
}

// 2. EXEMPLO: Criando botões em pontos específicos
// Você deve ajustar esses números (X, Y) conforme o seu desenho
criarBotaoNoMapa(150, 100, "Sala 01");

// FERRAMENTA DE AJUDA: Clique na imagem e veja a coordenada no console (F12)
container.addEventListener('click', function(e) {
    const rect = container.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    console.log(`Coordenada clicada: criarBotaoNoMapa(${x}, ${y}, "Nova Sala");`);
});