const salas = [
    "Sala de Reunião", "NTI/Atendimento", "NTI/RACK", "NEOF/NLCC/SCDP/Contabilidade", "Arquivo", "NRH", "Recpção/Espera", "DPG/NPGP", "Lavabo", "DRG", "Sala de Estudos Para Professores",
    "Sala de Estar Para Professores", "SAA", "Cine Teatro", "Camarim", "IFCast", "Refeitório", "Lanchonete", "Biblioteca", "DRG", "NRH", "DDE", "DGP/NGP", "66 - AEE", "Copa", 
    "Serviço Social", "Diretoria", "Banheiro Feminino", "Banheiro Masculino", "Banheiro Feminino Acessivel", "Banheiro Masculino Acessivel", "Sala 36", "Sala 37", "Sala 38", 
    "Sala 39", "Sala 40", "Sala 41", "Sala 42", "Sala 43", "Sala 44", "Sala 45", "Sala 46", "Sala 47", "Sala 48", "Sala 49", "Sala 50", "Sala 51", "Sala 52", "Sala 53", "Sala 54", 
    "Sala 55", "Sala 56", "Sala 58", "Sala 59", "Sala 60", "Psicologia", "Setor Médico", "Quadra", "Dispensa da Quadra", "Dispensa da Cozinha", "64 - Robótica", "65 - Línguas", 
    "68 - Incubadora", "02 - Games", "03 - CAE", "03 - Psicóloga", "03 - Sertor Médico", "06 - Serviço Social", "07 - Sala dos Professores/DERI/PRONATEC/NPPG", 
    "08 - Protocolo com almoxarifado", "10 - DRCA/Controle Acadêmico", "Almoxarifado de Material de Expediente", "Diretoria", "Espaço Infantil" ];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

const normalizar = (txt) => txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const diasSemana = {
    'Sunday': 'Domingo', 'Monday': 'Segunda', 'Tuesday': 'Terça',
    'Wednesday': 'Quarta', 'Thursday': 'Quinta', 'Friday': 'Sexta', 'Saturday': 'Sábado'
};

const dadosSalas = {

/* --- 1° ANDAR / TÉRREO --- */

"SAA": {
    local: "Sala 55 - Bloco C - Térreo",
    horarios: {
        "Domingo": "Fechado", "Segunda": "07:00 às 22:00", "Terça": "07:00 às 22:00",
        "Quarta": "07:00 às 23:00", "Quinta": "07:00 às 22:00", "Sexta": "07:00 às 22:00", "Sábado": "Fechado"
    },
    descricao: "Responsável por prestar atendimento direto ao aluno assistindo-o e orientando-o em casos de indisciplina, saída antecipada e ocorrências diversas.",
    observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento." },

"Sala de Reunião": {
    local: "Bloco Administrativo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"NTI/Atendimento": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Núcleo de Tecnologia da Informação",
    observacoes: "-"
},
"NTI/RACK": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Sala técnica de redes",
    observacoes: "Acesso restrito"
},
"Arquivo": {
    local: "Bloco Administrativo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Arquivo central",
    observacoes: "-"
},
"Recpção/Espera": {
    local: "Entrada Principal",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Lavabo": {
    local: "Geral",
    horarios: { "Domingo": "Fechado", "Segunda": "Período Letivo", "Terça": "Período Letivo", "Quarta": "Período Letivo", "Quinta": "Período Letivo", "Sexta": "Período Letivo", "Sábado": "Fechado" },
    descricao: "Lavatórios",
    observacoes: "-"
},
"Sala de Estudos Para Professores": {
    local: "Bloco de Professores",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Sala de Estar Para Professores": {
    local: "Bloco de Professores",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Camarim": {
    local: "Anexo Cine Teatro",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"66 - AEE": {
    local: "Bloco C",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Atendimento Educacional Especializado",
    observacoes: "-"
},
"Copa": {
    local: "Geral",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Serviço Social": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Banheiro Feminino": {
    local: "Geral",
    horarios: { "Domingo": "Fechado", "Segunda": "Período Letivo", "Terça": "Período Letivo", "Quarta": "Período Letivo", "Quinta": "Período Letivo", "Sexta": "Período Letivo", "Sábado": "Fechado" },
    descricao: "Sanitário Feminino",
    observacoes: "-"
},
"Banheiro Masculino": {
    local: "Geral",
    horarios: { "Domingo": "Fechado", "Segunda": "Período Letivo", "Terça": "Período Letivo", "Quarta": "Período Letivo", "Quinta": "Período Letivo", "Sexta": "Período Letivo", "Sábado": "Fechado" },
    descricao: "Sanitário Masculino",
    observacoes: "-"
},
"Banheiro Feminino Acessivel": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "Período Letivo", "Terça": "Período Letivo", "Quarta": "Período Letivo", "Quinta": "Período Letivo", "Sexta": "Período Letivo", "Sábado": "Fechado" },
    descricao: "Sanitário Feminino Adaptado",
    observacoes: "-"
},
"Banheiro Masculino Acessivel": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "Período Letivo", "Terça": "Período Letivo", "Quarta": "Período Letivo", "Quinta": "Período Letivo", "Sexta": "Período Letivo", "Sábado": "Fechado" },
    descricao: "Sanitário Masculino Adaptado",
    observacoes: "-"
},

/* --- SALAS DE AULA (TÉRREO) --- */
"Sala 36": { local: "Bloco A", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 37": { local: "Bloco A", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 38": { local: "Bloco A", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 39": { local: "Bloco A", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 40": { local: "Bloco A", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 41": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 42": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 43": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 44": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 45": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 46": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 47": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 48": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 49": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 50": { local: "Bloco B", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 51": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 52": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },

"Sala 53": {
    local: "Bloco C - Térreo",
    descricao: "Sala de aula compartilhada por dois cursos técnicos e turmas do Proeja.",
    observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento.",
    cursos: [
        { nome: "Edificações 2024", horarios: ["Segunda: 07:10 às 12:30", "Terça: 07:10 às 18:20", "Quarta: 07:10 às 12:30", "Quinta: 07:10 às 12:30", "Sexta: 07:10 às 12:30"] },
        { nome: "Informática 2024", horarios: ["Segunda: 13:10 às 18:20", "Terça: 13:10 às 18:20", "Quarta: 13:10 às 18:20", "Quinta: 07:10 às 18:20", "Sexta: 13:10 às 18:20"] },
        { nome: "Proeja 2025", horarios: ["Segunda: 18:20 às 22:50", "Terça: 18:20 às 22:50", "Quarta: 18:20 às 22:50", "Quinta: 18:20 às 22:50", "Sexta: 18:20 às 22:50"] } ],
    equipamentos: "Televisão, quadro, ar condicionado"},

"Sala 54": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 55": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 56": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 58": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 59": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },
"Sala 60": { local: "Bloco C", horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" }, descricao: "A preencher", observacoes: "-" },

"Psicologia": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Setor Médico": {
    local: "Térreo",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Quadra": {
    local: "Área Externa",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Dispensa da Quadra": {
    local: "Área Externa",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"Dispensa da Cozinha": {
    local: "Anexo Cozinha",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},

/* --- 2° ANDAR --- */

"NEOF/NLCC/SCDP/Contabilidade": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Setores financeiros e contábeis",
    observacoes: "-"
},
"NRH": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Núcleo de Recursos Humanos",
    observacoes: "-"
},
"DPG/NPGP": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "A preencher",
    observacoes: "-"
},
"DRG": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Diretoria Geral",
    observacoes: "-"
},
"DDE": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Diretoria de Ensino",
    observacoes: "-"
},
"DGP/NGP": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Gestão de Pessoas",
    observacoes: "-"
},
"Diretoria": {
    local: "2° Andar",
    horarios: { "Domingo": "Fechado", "Segunda": "-", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "-", "Sábado": "Fechado" },
    descricao: "Gabinete da Diretoria",
    observacoes: "-"
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
    modal
