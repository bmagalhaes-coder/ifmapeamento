const salas = [
    "SAA", "CINE TEATRO", "IFCast", "REFEITÓRIO", 
    "LANCHONETE", "BIBLIOTECA", "DRG", "NRH", 
    "DDE", "DGP/NGP", "COPA", "SERVIÇO SOCIAL", 
    "DIRETORIA", "LAVABO", "COZINHA", "SALA 53"
];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

// Normaliza texto: remove acentos e deixa minúsculo
const normalizar = (txt) => txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

// Aplica as classes de grid no container
function aplicarEstiloGrid() {
    menuList.style.display = 'grid';
    menuList.style.gap = '12px';
    // Padrão Mobile: 1 coluna
    menuList.style.gridTemplateColumns = '1fr';
    
    // Tablet: 3 colunas (usando matchMedia para responsividade via JS)
    if (window.matchMedia("(min-width: 768px)").matches) {
        menuList.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
    // PC: 6 colunas
    if (window.matchMedia("(min-width: 1024px)").matches) {
        menuList.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
}

function renderizarSalas() {
    menuList.innerHTML = '';
    
    const salasOrdenadas = [...salas].sort();

    salasOrdenadas.forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        
        btn.onclick = () => {
            console.log(`Acessando: ${sala}`);
        };
        
        menuList.appendChild(btn);
    });
    
    aplicarEstiloGrid();
}

function filtrar() {
    const termo = normalizar(searchInput.value);
    const botoes = document.querySelectorAll('.menu-item');
    let encontrados = 0;

    // Gerencia o botão de limpar (X)
    clearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';

    botoes.forEach(btn => {
        const nomeSala = normalizar(btn.textContent);
        
        if (nomeSala.includes(termo)) {
            btn.classList.remove('hidden');
            encontrados++;
        } else {
            btn.classList.add('hidden');
        }
    });

    const erroExistente = document.querySelector('.sem-resultados');
    if (encontrados === 0) {
        if (!erroExistente) {
            const msg = document.createElement('div');
            msg.className = 'sem-resultados';
            msg.style.gridColumn = "1 / -1"; // Faz a mensagem ocupar a linha toda
            msg.innerHTML = `Nenhum resultado para "<strong>${searchInput.value}</strong>"`;
            menuList.appendChild(msg);
        }
    } else if (erroExistente) {
        erroExistente.remove();
    }
}

// Alteração solicitada: Botão volta para a página anterior
clearBtn.onclick = () => {
    if (searchInput.value.length > 0) {
        searchInput.value = '';
        filtrar();
        searchInput.focus();
    } else {
        // Redireciona para o histórico anterior
        window.history.back();
    }
};

searchInput.oninput = filtrar;
document.addEventListener('DOMContentLoaded', () => {
    renderizarSalas();
    window.addEventListener('resize', aplicarEstiloGrid);
});
