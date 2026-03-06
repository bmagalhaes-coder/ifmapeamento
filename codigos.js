
  // Lista completa de salas baseada na imagem fornecida
const salas = [
    "SAA",
    "CINE TEATRO",
    "IFCast",
    "REFEITÓRIO",
    "LANCHONETE",
    "BIBLIOTECA",
    "DRG",
    "NRH",
    "DDE",
    "DGP/NGP",
    "COPA",
    "SERVIÇO SOCIAL",
    "DIRETORIA",
    "LAVABO",
    "COZINHA"
];

// Elementos do DOM
const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s]/g, ''); // Remove caracteres especiais, mantém letras, números e espaços
}

// Função para criar os botões do menu
function criarBotoesMenu() {
    menuList.innerHTML = '';
    
    salas.forEach(sala => {
        const button = document.createElement('button');
        button.className = 'menu-item';
        button.textContent = sala;
        button.setAttribute('data-sala', sala);
        button.setAttribute('data-normalizado', normalizarTexto(sala));
        
        // Adicionar evento de clique em cada botão
        button.addEventListener('click', function() {
            const nomeSala = this.textContent;
            // Simula navegação ou ação ao clicar na sala
            alert(`🔍 Você selecionou: ${nomeSala}\n(Em desenvolvimento: redirecionar para mapa1.html com informações da sala)`);
            
            // Aqui futuramente você pode redirecionar para mapa1.html com parâmetros
            // window.location.href = `mapa1.html?sala=${encodeURIComponent(nomeSala)}`;
        });
        
        menuList.appendChild(button);
    });
}

// Função para filtrar as salas
function filtrarSalas() {
    const termoPesquisa = searchInput.value.trim();
    const termoNormalizado = normalizarTexto(termoPesquisa);
    
    // Mostrar ou esconder o botão de limpar
    if (termoPesquisa.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    
    // Selecionar todos os botões do menu
    const botoes = document.querySelectorAll('.menu-item');
    
    let contadorEncontrados = 0;
    
    // Filtrar botões baseado no termo de pesquisa
    botoes.forEach(botao => {
        const textoNormalizado = botao.getAttribute('data-normalizado') || normalizarTexto(botao.textContent);
        
        if (textoNormalizado.includes(termoNormalizado)) {
            botao.classList.remove('nao-filtrado');
            botao.classList.add('filtrado');
            contadorEncontrados++;
        } else {
            botao.classList.add('nao-filtrado');
            botao.classList.remove('filtrado');
        }
    });
    
    // Verificar se encontrou resultados
    const semResultadosExistente = document.querySelector('.sem-resultados');
    
    if (contadorEncontrados === 0 && termoPesquisa.length > 0) {
        // Se não existir mensagem de sem resultados, criar uma
        if (!semResultadosExistente) {
            const mensagem = document.createElement('div');
            mensagem.className = 'sem-resultados';
            mensagem.textContent = `Nenhuma sala encontrada para "${termoPesquisa}"`;
            menuList.appendChild(mensagem);
        } else {
            semResultadosExistente.textContent = `Nenhuma sala encontrada para "${termoPesquisa}"`;
        }
    } else {
        // Remover mensagem de sem resultados se existir
        if (semResultadosExistente) {
            semResultadosExistente.remove();
        }
    }
}

// Função para limpar a pesquisa
function limparPesquisa() {
    searchInput.value = '';
    searchInput.focus();
    filtrarSalas();
}

// Função para lidar com a tecla ESC
function handleEscKey(event) {
    if (event.key === 'Escape') {
        limparPesquisa();
    }
}

// Função para inicializar a aplicação
function init() {
    // Criar os botões do menu
    criarBotoesMenu();
    
    // Esconder o botão de limpar inicialmente
    clearBtn.classList.add('hidden');
    
    // Adicionar event listeners
    searchInput.addEventListener('input', filtrarSalas);
    clearBtn.addEventListener('click', limparPesquisa);
    document.addEventListener('keydown', handleEscKey);
    
    // Garantir que os atributos normalizados estejam em todos os botões
    const botoes = document.querySelectorAll('.menu-item');
    botoes.forEach(botao => {
        if (!botao.hasAttribute('data-normalizado')) {
            botao.setAttribute('data-normalizado', normalizarTexto(botao.textContent));
        }
    });
    
    console.log('Aplicação inicializada com sucesso!');
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);