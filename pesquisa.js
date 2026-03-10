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

// Mapeamento de dias da semana em português
const diasSemana = {
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terça',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sábado'
};

// Dados das salas
const dadosSalas = {
    "SAA": {
        local: "Sala 55 - Bloco C",
        horarios: {
            "Domingo": "Fechado",
            "Segunda": "07:00 às 22:00",
            "Terça": "07:00 às 22:00",
            "Quarta": "07:00 às 23:00",
            "Quinta": "07:00 às 22:00",
            "Sexta": "07:00 às 22:00",
            "Sábado": "Fechado"
        },
        descricao: "Responsável por prestar atendimento direto ao aluno assistindo-o e orientando-o em casos de indisciplina, saída antecipada e ocorrências diversas que acontecem no decorrer da jornada letiva.",
        observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento."
    },
    "Cine Teatro": {
        local: "Bloco A - Térreo",
        horarios: {
            "Segunda a Sexta": "08:00 às 22:00",
            "Sábado": "Fechado",
            "Domingo": "Fechado"
        },
        descricao: "Espaço cultural para apresentações teatrais, exibições de filmes e eventos acadêmicos.",
        capacidade: "200 lugares"
    },
    "IFCast": {
        local: "Bloco D - Sala 12",
        descricao: "Estúdio de podcast e produção de conteúdo audiovisual do campus.",
        equipamentos: "Microfones, mesa de som, câmeras e iluminação profissional"
    },
    "Refeitório": {
        local: "Bloco C - Térreo",
        horarios: {
            "Segunda a Sexta": "11:00 às 14:00 e 17:00 às 20:00",
            "Sábado": "11:00 às 14:00",
            "Domingo": "Fechado"
        },
        descricao: "Refeitório com refeições balanceadas para alunos e servidores."
    },
    "Lanchonete": {
        local: "Bloco B - Térreo",
        horarios: {
            "Segunda a Sexta": "07:00 às 22:00",
            "Sábado": "08:00 às 18:00",
            "Domingo": "Fechado"
        },
        descricao: "Lanches rápidos, salgados, doces e bebidas."
    },
    "Biblioteca": {
        local: "Bloco A - 2º andar",
        horarios: {
            "Segunda a Sexta": "08:00 às 21:00",
            "Sábado": "08:00 às 12:00",
            "Domingo": "Fechado"
        },
        descricao: "Acervo com livros, periódicos, computadores para pesquisa e espaço de estudo."
    },
    "DRG": {
        local: "Bloco Administrativo - Sala 10",
        descricao: "Diretoria de Registros Acadêmicos - Documentação e registros escolares."
    },
    "NRH": {
        local: "Bloco Administrativo - Sala 12",
        descricao: "Núcleo de Recursos Humanos - Assuntos relacionados a servidores."
    },
    "DDE": {
        local: "Bloco Administrativo - Sala 15",
        descricao: "Diretoria de Desenvolvimento Educacional - Coordenação pedagógica."
    },
    "DGP/NGP": {
        local: "Bloco Administrativo - Sala 18",
        descricao: "Diretoria de Gestão de Pessoas / Núcleo de Gestão de Pessoas."
    },
    "Copa": {
        local: "Bloco C - Próximo ao refeitório",
        descricao: "Copa para uso de servidores e alunos."
    },
    "Serviço Social": {
        local: "Bloco B - Sala 5",
        horarios: {
            "Segunda a Sexta": "09:00 às 17:00",
            "Sábado": "Fechado",
            "Domingo": "Fechado"
        },
        descricao: "Apoio e orientação social para alunos e familiares."
    },
    "Diretoria": {
        local: "Bloco Administrativo - 3º andar",
        descricao: "Gabinete da Direção Geral do campus."
    },
    "Lavabo": {
        local: "Bloco A - Próximo ao auditório",
        descricao: "Banheiros e lavabos para eventos."
    },
    "Cozinha": {
        local: "Bloco C - Anexo ao refeitório",
        descricao: "Cozinha industrial do campus."
    },
    "Sala 52": {
        local: "Bloco B - 2º andar",
        descricao: "Sala de aula padrão",
        capacidade: "40 alunos",
        equipamentos: "Projetor, quadro branco, ar condicionado"
    }
};

function renderizarSalas() {
    menuList.innerHTML = '';
    [...salas].sort().forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        btn.onclick = () => mostrarInfoSala(sala);
        menuList.appendChild(btn);
    });
}

function filtrar() {
    const termo = normalizar(searchInput.value);
    const botoes = document.querySelectorAll('.menu-item');
    let encontrados = 0;

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
    if (encontrados === 0 && searchInput.value.length > 0) {
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

// Função para obter o dia atual em português
function getDiaAtual() {
    const hoje = new Date();
    const diaIngles = hoje.toLocaleDateString('en-US', { weekday: 'long' });
    return diasSemana[diaIngles];
}

// Função para mostrar informações da sala em pop-up
function mostrarInfoSala(nomeSala) {
    const dados = dadosSalas[nomeSala] || {
        local: "Informações não disponíveis",
        descricao: "Detalhes desta sala serão atualizados em breve."
    };
    
    // Criar o modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalInfo';
    
    // Construir conteúdo do modal
    let horariosHTML = '';
    if (dados.horarios) {
        horariosHTML = '<div class="modal-section"><h3>📅 Horários de Funcionamento</h3><ul>';
        for (const [dia, horario] of Object.entries(dados.horarios)) {
            // Verifica se é o dia atual para destacar em vermelho
            const diaAtual = getDiaAtual();
            const isDiaAtual = dia.includes(diaAtual) || (diaAtual.includes('Segunda') && dia === 'Segunda a Sexta');
            
            if (isDiaAtual) {
                horariosHTML += `<li style="color: #ff0000; font-weight: bold;"><strong style="color: #ff0000;">${dia}:</strong> ${horario}</li>`;
            } else {
                horariosHTML += `<li><strong>${dia}:</strong> ${horario}</li>`;
            }
        }
        horariosHTML += '</ul></div>';
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${nomeSala}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>📍 Localização</h3>
                    <p><span class="info-label">Sala:</span> ${dados.local}</p>
                </div>
                
                ${horariosHTML}
                
                <div class="modal-section">
                    <h3>ℹ️ Sobre</h3>
                    <p>${dados.descricao}</p>
                </div>
                
                ${dados.observacoes ? `
                <div class="modal-section">
                    <h3>📌 Observações</h3>
                    <p>${dados.observacoes}</p>
                </div>
                ` : ''}
                
                ${dados.capacidade ? `
                <div class="modal-section">
                    <h3>👥 Capacidade</h3>
                    <p>${dados.capacidade}</p>
                </div>
                ` : ''}
                
                ${dados.equipamentos ? `
                <div class="modal-section">
                    <h3>🖥️ Equipamentos</h3>
                    <p>${dados.equipamentos}</p>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Mostrar o modal
    modal.style.display = 'flex';
    
    // Fechar modal ao clicar no X
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };
    
    // Fechar modal ao clicar fora dele
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
    
    // Fechar com tecla ESC
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Botão X agora sempre volta para a página anterior (Mapa)
clearBtn.onclick = () => {
    window.history.back();
};

searchInput.oninput = filtrar;
document.addEventListener('DOMContentLoaded', renderizarSalas);
