const salas = [
    "SAA", "CINE TEATRO", "IFCast", "REFEITÓRIO", 
    "LANCHONETE", "BIBLIOTECA", "DRG", "NRH", 
    "DDE", "DGP/NGP", "COPA", "SERVIÇO SOCIAL", 
    "DIRETORIA", "LAVABO", "COZINHA"
];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

// Função para remover acentos para busca precisa
function normalizar(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// 1. Criar os botões ao carregar a página
function renderizarSalas() {
    menuList.innerHTML = ''; // Limpa a lista
    
    salas.forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        
        btn.addEventListener('click', () => {
            alert("Navegando para: " + sala);
            // Aqui você pode usar: window.location.href = `mapa.html?sala=${sala}`;
        });
        
        menuList.appendChild(btn);
    });
}

// 2. Lógica do Filtro
function filtrar() {
    const termo = normalizar(searchInput.value);
    const botoes = document.querySelectorAll('.menu-item');
    let encontrados = 0;

    // Mostrar/esconder botão de limpar (X)
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';

    botoes.forEach(btn => {
        const nomeSala = normalizar(btn.textContent);
        
        if (nomeSala.includes(termo)) {
            btn.classList.remove('hidden');
            encontrados++;
        } else {
            btn.classList.add('hidden');
        }
    });

    // Gerenciar mensagem de "Nada encontrado"
    const erroExistente = document.querySelector('.sem-resultados');
    if (encontrados === 0) {
        if (!erroExistente) {
            const msg = document.createElement('div');
            msg.className = 'sem-resultados';
            msg.textContent = 'Nenhuma sala encontrada.';
            menuList.appendChild(msg);
        }
    } else if (erroExistente) {
        erroExistente.remove();
    }
}

// 3. Limpar busca
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filtrar();
    searchInput.focus();
});

// Eventos
searchInput.addEventListener('input', filtrar);
document.addEventListener('DOMContentLoaded', renderizarSalas);