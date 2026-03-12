const salas = [
    "SAA", "Cine Teatro", "Camarim", "IFCast", "Refeitório", "Lanchonete", "Biblioteca", 
    "DRG", "NRH", "DDE", "DGP/NGP", "AEE", "Copa", "Serviço Social", "Diretoria", 
    "Banheiro Feminino", "Banheiro Masculino", "Banheiro Feminino Assescivel", "Banheiro Masculino Assescivel", "Sala 36", "Sala 37", "Sala 38", "Sala 39", "Sala 40", 
    "Sala 41", "Sala 42", "Sala 43", "Sala 44", "Sala 45", "Sala 46", "Sala 47", 
    "Sala 48", "Sala 49", "Sala 50", "Sala 51", "Sala 52", "Sala 53", "Sala 54", 
    "Sala 55", "Sala 56", "Sala 58", "Sala 59", "Sala 60", "Psicologia", "Setor Médico", "Quadra", "Dispensa da Quadra"
];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

const normalizar = (txt) => txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const diasSemana = {
    'Sunday': 'Domingo', 'Monday': 'Segunda', 'Tuesday': 'Terça',
    'Wednesday': 'Quarta', 'Thursday': 'Quinta', 'Friday': 'Sexta', 'Saturday': 'Sábado'
};

const dadosSalas = {
    "SAA": {
        local: "Sala 55 - Bloco C",
        horarios: {
            "Domingo": "Fechado", "Segunda": "07:00 às 22:00", "Terça": "07:00 às 22:00",
            "Quarta": "07:00 às 23:00", "Quinta": "07:00 às 22:00", "Sexta": "07:00 às 22:00", "Sábado": "Fechado"
        },
        descricao: "Responsável por prestar atendimento direto ao aluno assistindo-o e orientando-o em casos de indisciplina, saída antecipada e ocorrências diversas.",
        observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento."
    },
    "Sala 53": {
        local: "Bloco C",
        descricao: "Sala de aula compartilhada por dois cursos técnicos e turmas do Proeja.",
        observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento.",
        cursos: [
            { nome: "Edificações 2024", horarios: ["Segunda: 07:10 às 12:30", "Terça: 07:10 às 18:20", "Quarta: 07:10 às 12:30", "Quinta: 07:10 às 12:30", "Sexta: 07:10 às 12:30"] },
            { nome: "Informática 2024", horarios: ["Segunda: 13:10 às 18:20", "Terça: 13:10 às 18:20", "Quarta: 13:10 às 18:20", "Quinta: 07:10 às 18:20", "Sexta: 13:10 às 18:20"] },
            { nome: "Proeja 2025", horarios: ["Segunda: 18:20 às 22:50", "Terça: 18:20 às 22:50", "Quarta: 18:20 às 22:50", "Quinta: 18:20 às 22:50", "Sexta: 18:20 às 22:50"] }
        ],
        equipamentos: "Televisão, quadro, ar condicionado"
    },
    "Cine Teatro": { local: "Bloco A - Térreo", horarios: { "Segunda a Sexta": "08:00 às 22:00" }, descricao: "Espaço cultural para apresentações.", equipamentos: "Projetor, Som, Poltronas" },
    "IFCast": { local: "Bloco D - Sala 12", horarios: { "Agendado": "Consultar DDE" }, descricao: "Estúdio de podcast.", equipamentos: "Microfones, Mesa de som" },
    "Refeitório": { local: "Bloco C - Térreo", horarios: { "Segunda a Sexta": "11:00 às 14:00 / 17:00 às 20:00" }, descricao: "Alimentação escolar.", equipamentos: "Mesas, Balcões térmicos" },
    "Lanchonete": { local: "Bloco B - Térreo", horarios: { "Segunda a Sexta": "07:00 às 22:00" }, descricao: "Venda de lanches.", equipamentos: "Estufas, Geladeiras" },
    "Biblioteca": { local: "Bloco A - 2º andar", horarios: { "Segunda a Sexta": "08:00 às 21:00" }, descricao: "Pesquisa e estudo.", equipamentos: "Computadores, Mesas" },
    "DRG": { local: "Administrativo", horarios: { "Comercial": "08:00 às 18:00" }, descricao: "Diretoria Geral.", equipamentos: "Computadores" },
    "NRH": { local: "Administrativo", horarios: { "Comercial": "08:00 às 18:00" }, descricao: "Recursos Humanos.", equipamentos: "Arquivos" },
    "DDE": { local: "Administrativo", horarios: { "Comercial": "08:00 às 18:00" }, descricao: "Diretoria de Ensino.", equipamentos: "Computadores" },
    "DGP/NGP": { local: "Administrativo", horarios: { "Comercial": "08:00 às 18:00" }, descricao: "Gestão de Pessoas.", equipamentos: "Computadores" },
    "Copa": { local: "Bloco C", horarios: { "Livre": "Uso comum" }, descricao: "Espaço para refeições rápidas.", equipamentos: "Micro-ondas, Geladeira" },
    "Serviço Social": { local: "Bloco B", horarios: { "Segunda a Sexta": "09:00 às 17:00" }, descricao: "Apoio ao estudante.", equipamentos: "Mesa de atendimento" },
    "Diretoria": { local: "Administrativo", horarios: { "Comercial": "08:00 às 18:00" }, descricao: "Gabinete.", equipamentos: "Mesa de reunião" },
    "Lavabo": { local: "Bloco A", horarios: { "Livre": "Período letivo" }, descricao: "Sanitários.", equipamentos: "Pias, Espelhos" },
    "Cozinha": { local: "Bloco A", horarios: { "Restrito": "Funcionários" }, descricao: "Preparo de alimentos.", equipamentos: "Fogão industrial" },
    "Psicologia": { local: "Bloco B", horarios: { "Agendado": "Ver coordenação" }, descricao: "Atendimento psicológico.", equipamentos: "Divã, Mesa" },
    "Setor Médico": { local: "Bloco A", horarios: { "Segunda a Sexta": "07:00 às 19:00" }, descricao: "Primeiros socorros.", equipamentos: "Maca, Maleta médica" },
    "Sala 36": { local: "A preencher", horarios: { "A preencher": "--" }, descricao: "A preencher" },
    "Sala 52": { local: "A preencher", horarios: { "A preencher": "--" }, descricao: "A preencher" },
    "Sala 60": { local: "A preencher", horarios: { "A preencher": "--" }, descricao: "A preencher" }
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

function getDiaAtual() {
    const hoje = new Date();
    const diaIngles = hoje.toLocaleDateString('en-US', { weekday: 'long' });
    return diasSemana[diaIngles];
}

function isDiaAtual(horario) {
    const diaAtual = getDiaAtual();
    return horario.startsWith(diaAtual);
}

function mostrarInfoSala(nomeSala) {
    const dados = dadosSalas[nomeSala] || {
        local: "Informações não disponíveis",
        descricao: "Detalhes desta sala serão atualizados em breve."
    };
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalInfo';
    
    let horariosHTML = '';
    if (dados.horarios) {
        horariosHTML = '<div class="modal-section"><h3>📅 Horários de Funcionamento</h3><ul>';
        for (const [dia, horario] of Object.entries(dados.horarios)) {
            const diaAtual = getDiaAtual();
            const isHoje = dia.includes(diaAtual) || (diaAtual !== 'Sábado' && diaAtual !== 'Domingo' && dia === 'Segunda a Sexta');
            horariosHTML += `<li class="${isHoje ? 'dia-atual' : ''}"><strong>${dia}:</strong> ${horario}</li>`;
        }
        horariosHTML += '</ul></div>';
    }
    
    let cursosHTML = '';
    if (dados.cursos) {
        cursosHTML = '<div class="modal-section"><h3>📚 Cursos e Horários</h3>';
        dados.cursos.forEach(curso => {
            cursosHTML += `<div class="curso-card"><h4>${curso.nome}</h4><ul>`;
            curso.horarios.forEach(h => {
                cursosHTML += `<li class="${isDiaAtual(h) ? 'dia-atual' : ''}">${isDiaAtual(h) ? '🔴' : '🕒'} ${h}</li>`;
            });
            cursosHTML += '</ul></div>';
        });
        cursosHTML += '</div>';
    }

    let obsHTML = dados.observacoes ? `
        <div class="modal-section">
            <h3>📌 Observações</h3>
            <p>${dados.observacoes}</p>
        </div>` : '';

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
                ${cursosHTML}
                <div class="modal-section">
                    <h3>ℹ️ Sobre</h3>
                    <p>${dados.descricao}</p>
                </div>
                ${obsHTML}
                ${dados.equipamentos ? `
                <div class="modal-section">
                    <h3>🖥️ Equipamentos</h3>
                    <p>${dados.equipamentos}</p>
                </div>` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
}

clearBtn.onclick = () => {
    searchInput.value = '';
    filtrar();
};

searchInput.oninput = filtrar;
document.addEventListener('DOMContentLoaded', renderizarSalas);
