const salas = [
    "SAA", "Cine Teatro", "IFCast", "Refeitório", 
    "Lanchonete", "Biblioteca", "DRG", "NRH", 
    "DDE", "DGP/NGP", "Copa", "Serviço Social", 
    "Diretoria", "Lavabo", "Cozinha", "Sala 52"
];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

const normalizar = (txt) => txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

function renderizarSalas() {
    menuList.innerHTML = '';
    [...salas].sort().forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        btn.onclick = () => console.log(`Acessando: ${sala}`);
        menuList.appendChild(btn);
    });
}

function filtrar() {
    const termo = normalizar(searchInput.value);
    const botoes = document.querySelectorAll('.menu-item');
    let encontrados = 0;

    // Gerencia exibição do X (apenas se não for PC, onde ele deve sumir)
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
            msg.innerHTML = `Nenhum resultado para "<strong>${searchInput.value}</strong>"`;
            menuList.appendChild(msg);
        }
    } else if (erroExistente) {
        erroExistente.remove();
    }
}

clearBtn.onclick = () => {
    if (searchInput.value.length > 0) {
        searchInput.value = '';
        filtrar();
        searchInput.focus();
    } else {
        window.history.back();
    }
};

searchInput.oninput = filtrar;
document.addEventListener('DOMContentLoaded', renderizarSalas);
