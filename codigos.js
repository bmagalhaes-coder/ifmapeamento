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

function renderizarSalas() {
    menuList.innerHTML = '';
    
    // Ordena as salas alfabeticamente para ficar mais organizado
    const salasOrdenadas = [...salas].sort();

    salasOrdenadas.forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        
        btn.onclick = () => {
            console.log(`Acessando: ${sala}`);
            // Exemplo: window.location.href = `mapas/${normalizar(sala)}.html`;
        };
        
        menuList.appendChild(btn);
    });
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

    // Mensagem amigável de erro
    const erroExistente = document.querySelector('.sem-resultados');
    if (encontrados === 0) {
        if (!erroExistente) {
            const msg = document.createElement('div');
            msg.className = 'sem-resultados';
            msg.innerHTML = `Nenhum resultado para "<strong>${searchInput.value}</strong>"`;
            menuList.appendChild(msg);
        }
    } else if (erroExistente) {
        erroExistente.remove();
    }
}

clearBtn.onclick = () => {
    searchInput.value = '';
    filtrar();
    searchInput.focus();
};

searchInput.oninput = filtrar;
document.addEventListener('DOMContentLoaded', renderizarSalas);