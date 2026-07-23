const salas = [
    "DDE/DAP", "CTIC", "Servidor CTIC", "Coordenações", "Arquivo CGP", "NRH", "CGP", "CAPI/SCDP/Balcão Digital",
    "Sala de Vivência dos Servidores (em construção)", "CCTTII/CEEC/CCSAQ", "DAP", "Sala dos Funcionários e Servidores", 
    "SAA","Camarim", "IFCast", "Refeitório (em construção)", "Lanchonete", "Biblioteca", "DGP/NGP", "AEE/NAPNE", "Copa", 
    "Serviço Social", "Banheiro Feminino com Chuveiro", "Banheiro Masculino com Chuveiro", "Laboratório de Máquinas Elétricas", "Laboratório de Medidas Elétricas", 
    "Laboratório de Física e Eletrônica", "Laboratório de Informática (Nível Superior)", "Fábrica de Inovações", 
    "Laboratório de Química", "Laboratório de Biologia", "Laboratório de Desenho Técnico", "Cine Teatro", 
    "Laboratórios de Informática", "Sala 46", "Sala 47", "Sala 48", "Sala 49", "Sala 50", "Sala 51", "Sala 52",
    "Sala 53", "Laboratório de Produção Mecânica", "Laboratório de Soldagem", "Sala 58", "Sala 59", "Sala 60", "Quadra Poliesportiva", "Dispensa da Quadra", "Sala de Robótica",
    "Sala de Línguas", "Incubadora", "E - Games", "CAE","Protocolo com almoxarifado","DPG/NPGP",
    "DRCA/Controle Acadêmico", "Almoxarifado de Material de Expediente","Espaço Infantil", "Coordenação Superior", 
    "Sala dos Professores", "Bloco em Construção", "Banheiro Feminino com Chuveiro e Acessível", "Banheiro Masculino com Chuveiro e Acessível", "Banheiro Feminino e Acessível", "Banheiro Masculino e Acessível", "Diretoria", "Cantina", "Sala de Estudos", "Livros fora do sistema"
];

const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const clearBtn = document.getElementById('clearBtn');

const normalizar = (txt) => {
    return txt
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/\n/g, ' ')             // troca quebra de linha por espaço
        .replace(/\s+/g, ' ')            // remove espaços duplicados
        .trim();
};

// Mapeamento de dias da semana (inglês -> português)
const diasSemana = {
    'Sunday': 'Domingo', 'Monday': 'Segunda', 'Tuesday': 'Terça',
    'Wednesday': 'Quarta', 'Thursday': 'Quinta', 'Friday': 'Sexta', 'Saturday': 'Sábado'
};

const dadosSalas = {
// banheiros no primeiro andar e no térreo.
"Banheiro Feminino com Chuveiro e Acessível": {
        local: "1º Andar, bloco B e C, próximo à cantina e ao hall",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Local com 5 cabines normais com um vaso sanitário em cada e uma cabine com sanitário adaptado contendo barras de apoio e espaço para manobras com cadeiras de rodas.",
        equipamentos: "Papel higienico, sabonete líquido, álcool em gel, papeleiras e lixeira."
    },
"Banheiro Masculino com Chuveiro e Acessível": {
        local: "1º Andar, bloco B e C, próximo à cantina e ao hall",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Local com mictórios, cabines normais com um vaso sanitário em cada e uma cabine com sanitário adaptado contendo barras de apoio e espaço para manobras com cadeiras de rodas..",
        equipamentos: "Papel higienico, sabonete líquido, álcool em gel, papeleiras e lixeira."
    },
"Banheiro Feminino com Chuveiro": {
        local: "Próximo à quadra",
        horarios: { "Geral": "Aberto quando tem aula ou evento na quadra ou piscina" },
        descricao: "Sanitário feminino contendo 4 chuveiros, 2 pias e 2 cabines com um vaso sanitário em cada uma.",
        equipamentos: "Papel higienico, sabonete líquido, lixeira."
    },

"Banheiro Masculino com Chuveiro": {
        local: "Próximo à quadra",
        horarios: { "Geral": "Aberto quando tem aula ou evento na quadra ou piscina" },
        descricao: "Sanitário masculino contendo mictório, 4 chuveiros 2 pias e 2 cabines com um vaso sanitário em cada uma.",
        equipamentos: "Papel higienico, sabonete líquido, lixeira."
    },
"Banheiro Feminino e Acessível": {
        local: "1º Andar, bloco B e C, próximo à cantina e ao hall",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Local com 5 cabines normais com um vaso sanitário em cada e uma cabine com sanitário adaptado contendo barras de apoio e espaço para manobras com cadeiras de rodas.",
        equipamentos: "Papel higienico, sabonete líquido, álcool em gel, papeleiras e lixeira."
    },
"Banheiro Masculino e Acessível": {
        local: "1º Andar, bloco B e C, próximo à cantina e ao hall",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Local com mictórios, cabines normais com um vaso sanitário em cada e uma cabine com sanitário adaptado contendo barras de apoio e espaço para manobras com cadeiras de rodas..",
        equipamentos: "Papel higienico, sabonete líquido, álcool em gel, papeleiras e lixeira."
    },
// 1° ANDAR
"CCTTII CEEC CCSAQ": {
        local: "Sala 25 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "CCTTII (Coordenação de Curso Técnico em Informática) <br> CEEC (Coordenação de Especialização em Ensino de Ciências) <br> CCSAQ (Coordenação de Curso Superior em Análises Químicas).",
        equipamentos: "Computadores de gestão acadêmica e arquivos de planos de ensino."
    },
    "Copa": {
        local: "1° Andar",
        horarios: {
            "Domingo": "Fechado", "Segunda": "07:00 às 22:00",
            "Terça": "07:00 às 22:00", "Quarta": "07:00 às 22:00",
            "Quinta": "07:00 às 22:00", "Sexta": "07:00 às 22:00", "Sábado": "Fechado"
        },
        descricao: "Espaço destinado às refeições rápidas e descanso dos colaboradores, equipado para conservação e aquecimento de alimentos.",
        equipamentos: "Micro-ondas, geladeira, cafeteira, mesa de apoio e pias."
    },
    "DDE/DAP": {
        local: "Sala 20 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "O Departamento de Desenvolvimento Educacional (DDE) e o Departamento de Administração e Planejamento (DAP) coordenam as políticas pedagógicas e a gestão orçamentária do campus.",
        observacoes: "Atendimento administrativo central."
    },
    "CTIC": {
        local: "Sala 21 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Coordenadoria de Tecnologia da Informação e Comunicação - Setor responsável pelo suporte técnico, manutenção de equipamentos e sistemas institucionais.",
        observacoes: "Suporte para rede Wi-Fi e sistemas acadêmicos."
    },
    "Servidor CTIC": {
        local: "Sala 21 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Sala técnica que abriga o datacenter, servidores de rede e equipamentos de conectividade central do campus.",
        equipamentos: "Racks de servidores, switches core, nobreaks de alta capacidade e sistema de climatização de precisão."
    },
    "Arquivo CGP": {
        local: "Sala 24 - 1° Andar",
        horarios: { "Geral": "Aberto somente quando nescessário" },
        descricao: "Local de guarda e organização de documentos históricos e restritos.",
        equipamentos: "Arquivos deslizantes, estantes metálicas e mesas de consulta."
    },
    "CGP": {
        local: "Sala 24 - 1° Andar",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 17:00",
            "Terça": "08:00 às 17:00", "Quarta": "08:00 às 17:00",
            "Quinta": "08:00 às 17:00", "Sexta": "08:00 às 17:00", "Sábado": "Fechado"
        },
        descricao: "Coordenadoria de Gestão de Pessoas - Responsável pela vida funcional dos servidores, processos de contratação e capacitação.",
        equipamentos: "Computadores, impressoras e armários de arquivos funcionais."
    },
    "CAPI/SCDP Balcão Digital": {
        local: "Sala 26 - 1° Andar",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 17:00",
            "Terça": "08:00 às 17:00", "Quarta": "08:00 às 17:00",
            "Quinta": "08:00 às 17:00", "Sexta": "08:00 às 17:00", "Sábado": "Fechado"
        },
        descricao: "Núcleo de atendimento para Pesquisa, Inovação e suporte ao Sistema de Concessão de Diárias e Passagens, além de serviços digitais.",
        equipamentos: "Terminais de atendimento, impressoras e notebooks."
    },
    "Sala de Vivência dos Servidores\n(em construção)": {
        local: "1° Andar",
        horarios: {
            "Domingo": "Fechado", "Segunda": "07:00 às 22:00",
            "Terça": "07:00 às 22:00", "Quarta": "07:00 às 22:00",
            "Quinta": "07:00 às 22:00", "Sexta": "07:00 às 22:00", "Sábado": "Fechado"
        },
        descricao: "Espaço em fase de implementação destinado à integração, repouso e lazer dos servidores durante intervalos.",
        equipamentos: "Mobiliário básico em instalação (poltronas e mesas)."
    },
    "DAP": {
        local: "1° Andar",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 17:00",
            "Terça": "08:00 às 17:00", "Quarta": "08:00 às 17:00",
            "Quinta": "08:00 às 17:00", "Sexta": "08:00 às 17:00", "Sábado": "Fechado"
        },
        descricao: "Departamento de Administração e Planejamento - Gerencia as compras, contratos, patrimônio e finanças da instituição.",
        equipamentos: "Estações de trabalho, arquivos e sistemas de gestão orçamentária."
    },
    "Sala dos Funcionários e Servidores": {
        local: "1° Andar",
        horarios: { "Geral": "Sempre Aberto" },
        descricao: "Área de convivência e apoio para os funcionários terceirizados e servidores da instituição.",
        equipamentos: "Poltronas, sofás, micro-ondas, cafeteira, frigobar."
    },
    "Coordenações": {
        local: "Sala 23 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Espaço compartilhado entre coordenadores de diferentes eixos tecnológicos para planejamento e atendimento.",
        equipamentos: "Mesas de reunião, computadores e armários de documentos pedagógicos."
    },
    "NRH": {
        local: "1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Núcleo de Recursos Humanos - Responsável pela gestão de pessoal, férias, licenças e contracheques.",
        equipamentos: "Terminais de acesso ao SIAPE, impressoras e arquivos de fichas financeiras."
    },
    "DPG/NPGP": {
        local: "1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Diretoria de Planejamento e Núcleo de Planejamento e Gestão de Projetos.",
        equipamentos: "Quadros de monitoramento de projetos, computadores e mesas de reunião."
    },
    "CCTTII/CEEC/CCSAQ": {
        local: "Sala 25 - 1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "CCTTII (Coordenação de Curso Técnico em Informática) <br> CEEC (Coordenação de Especialização em Ensino de Ciências) <br> CCSAQ (Coordenação de Curso Superior em Análises Químicas).",
        equipamentos: "Computadores de gestão acadêmica e arquivos de planos de ensino."
    },
    "Coordenação Superior": {
        local: "1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Gabinete responsável pela articulação e gestão das coordenações de cursos de nível superior e pós-graduação.",
        observacoes: "Atendimento a coordenadores e docentes da graduação."
    },
    "DGP/NGP": {
        local: "1° Andar",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "Departamento de Gestão de Pessoas e Núcleo de Gestão de Pessoas.",
        observacoes: "Centralização de processos relativos à vida funcional do servidor."
    },
    /* TÉRREO */
    "Livros fora do sistema": {
        local: "Biblioteca",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Local onde são armazenados livros e materiais bibliográficos que ainda não estão disponíveis para consulta.",
    },
    "Sala de Estudos": {
        local: "Biblioteca",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Local onde alunos podem estudar em um local mais reservado.",
        equipamentos: "Uma mesa, quatro cadeiras e tomadas para uso de equipamentos eletrônicos."
    },
    "Bloco em Construção": {
    local: "Térreo",
    horarios: { "Geral": "Horário indefinido" },
    descricao: "Bloco com os futuros novos laboratórios para os cursos técnicos e superiores.",
    equipamentos: "-"
    },
    "Sala dos Professores": {
        local: "Sala 07 - Térreo",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "-",
        equipamentos: "-"
    },
    "AEE/NAPNE": {
        local: "Sala 66 - Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 12:00 e 14:00 às 19:00", "Terça": "08:00 às 12:00 e 14:00 às 19:00",
            "Quarta": "08:00 às 12:00 e 14:00 às 19:00", "Quinta": "08:00 às 12:00 e 14:00 às 19:00", "Sexta": "08:00 às 12:00 e 14:00 às 19:00", "Sábado": "Aberto em dias de de evento"
        },
        descricao: "NAPNE (Núcleo de Apoio às Pessoas com Necessidades Educacionais Específicas).",
        equipamentos: "Materiais pedagógicos adaptados, recursos de acessibilidade."
    },
    "SAA": {
        local: "Sala 55 - Bloco C - Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "07:00 às 22:00", "Terça": "07:00 às 22:00",
            "Quarta": "07:00 às 22:00", "Quinta": "07:00 às 22:00", "Sexta": "07:00 às 22:00", "Sábado": "Fechado"
        },
        descricao: "Responsável por prestar atendimento direto ao aluno assistindo-o e orientando-o em casos de indisciplina, saída antecipada e ocorrências diversas.",
        observacoes: "Local de armazenamento de itens perdidos no campus. Qualquer objeto achado de titular desconhecido deve ser entregue neste departamento."
    },
    "Serviço Social": {
        local: "Sala 06 - Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 12:00 e 15:00 às 21:00",
            "Terça": "09:00 às 13:00 e 14:00 às 22:00", "Quarta": "07:00 às 14:00 e 14:00 às 22:00",
            "Quinta": "07:00 às 12:00 e 14:00 às 22:00", "Sexta": "07:00 às 12:00 e 14:00 às 22:00", "Sábado": "Fechado"
        },
        descricao: "Setor voltado à garantia de direitos e bem-estar dos estudantes, realizando triagens para auxílios e programas de assistência.",
        equipamentos: "Mobiliário para atendimento individual sigiloso, computadores e telefone."
    },
    "CAE": {
        local: "Sala 03 - Térreo",
        cursos: [
            { nome: "Serviço de enfermagem", horarios: { "Domingo": "Fechado", "Segunda": "08:00 às 21:00", "Terça": "08:00 às 21:00", "Quarta": "08:00 às 21:00", "Quinta": "08:00 às 21:00", "Sexta": "09:00 às 21:00", "Sábado": "Fechado" } },
            { nome: "Serviço médico", horarios: { "Domingo": "Fechado", "Segunda": "08:00 às 13:00", "Terça": "-", "Quarta": "-", "Quinta": "-", "Sexta": "15:00 às 20:00", "Sábado": "Fechado" } },
            { nome: "Serviço de psicologia", horarios: { "Domingo": "Fechado", "Segunda": "08:00 às 20:00", "Terça": "08:00 às 14:00 e 15:00 às 21:00", "Quarta": "08:00 às 20:00", "Quinta": "08:00 às 19:00", "Sexta": "08:00 às 16:30", "Sábado": "Fechado" } }
        ],
        descricao: "O Centro de atendimento estudantil (CAE) foi criado para o atendimento médico básico e primeiros socorros, além disso, contém uma área de atendimento psicológico para estudantes e servidores.",
        equipamentos: "Maca, materiais de primeiros socorros, medicamentos básicos."
    },
    "Diretoria": {
        local: "Sala ? - Térreo",
        horarios: { "Geral": "Horário indefinido" },
        descricao: "-",
        equipamentos: "-"
    },
    "Cine Teatro": {
        local: "Próximo a lateral do hall de entrada (Térreo)",
        horarios: {
            "Geral": "Aberto em dias de evento, fora isso é necessário a autorização de um docente ou servidor."},
        descricao: "Espaço multiuso para apresentações, palestras, formaturas e eventos culturais com capacidade para 200 pessoas.",
        equipamentos: "Projetor, tela retrátil, sistema de som profissional, palco, iluminação cênica, camarins."
    },
    "Cabine de Controle": {
        local: "Próximo a lateral do hall de entrada (Térreo)",
       horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Espaço multiuso para apresentações, palestras, formaturas e eventos culturais com capacidade para 200 pessoas.",
        equipamentos: "Projetor, tela retrátil, sistema de som profissional, palco, iluminação cênica, camarins.",
    },
    "Camarim": {
        local: "Na lateral do palco do Cine Teatro (Térreo)",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Espaço para preparação dos artistas antes das apresentações no Cine Teatro.",
        equipamentos: "Espelhos iluminados, cabideiros, pia, bancada, cadeiras.",
    },
    "IFCast": {
        local: "Térreo",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Estúdio de podcast e produção de conteúdo audiovisual do campus.",
        equipamentos: "Microfones profissionais, mesa de som, computador para edição, câmeras, isolamento acústico."
    },
    "Refeitório (em construção)": {
        local: "Térreo",
        horarios: {"Geral": "Horário indefinido"},
        descricao: "Servirá lanches, almoço e jantar aos alunos e servidores.",
        equipamentos: "-"
    },
    "Cantina": {
        local: "Térreo",
        horarios: {"Geral": "Sempre Aberto"},
        descricao: "Serve lanches como misto, bolos, frutas (gratuitas), salgados e sucos aos alunos e servidores.",
        equipamentos: "Mesas coletivas, balcão de distribuição, geladeira, fogão e outros utensílios de cozinha."
    },
    "Lanchonete": {
        local: "Térreo, área externa coberta",
        horarios: {
            "Domingo": "Fechado", "Segunda": "07:00 às 21:00", "Terça": "07:00 às 21:00",
            "Quarta": "07:00 às 21:00", "Quinta": "07:00 às 21:00", "Sexta": "07:00 às 21:00", "Sábado": "Fechado"
        },
        descricao: "Lanchonete com venda de salgados, lanches, bebidas e doces.",
        equipamentos: "Mesas externas, balcão de atendimento, vitrine refrigerada."
    },
    "Biblioteca": {
        local: "Térreo, bloco principal",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 21:00", "Terça": "08:00 às 21:00",
            "Quarta": "08:00 às 21:00", "Quinta": "08:00 às 21:00", "Sexta": "08:00 às 21:00", "Sábado": "Fechado"
        },
        descricao: "Acervo bibliográfico físico, sala de estudos individual e em grupo.",
        equipamentos: "Computadores, cadeiras, mesas, estantes, acervo de livros, periódicos e TCCs.",
        observacoes: "Mantenha o silêncio, sem ruídos altos para não retirar a concentração dos outros."
    },
    "Quadra Poliesportiva": {
        local: "Área Externa",
        horarios: { "Geral": "Conforme cronograma de aulas de Educação Física" },
        descricao: "Quadra coberta para diversas aulas práticas de educação física, treinos e eventos esportivos.",
        observacoes: "Discentes só podem adentrar o local se um docente também estiver na quadra."
    },
    "Dispensa da Quadra": {
        local: "Área Externa",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Depósito de materiais esportivos e equipamentos da quadra.",
        equipamentos: "Bolas, coletes, cones, apitos, redes, etc."
    },
    "Espaço Infantil": {
        local: "Local atrás da escada - Térreo",
        horarios: { "Geral": "Sempre aberto" },
        descricao: "Espaço lúdico para atendimento e acolhimento de crianças, sejam filhos de discentes ou de docentes.",
        equipamentos: "Brinquedos educativos, livros infantis, mesas e cadeiras infantis."
    },

    //Laboratórios do bloco A
    "Laboratório de Máquinas Elétricas": {
        local: "Sala 36 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Espaço para práticas com máquinas elétricas e instalações.",
        equipamentos: "Motores elétricos, geradores, transformadores, painéis de comando, instrumentos de medição."
    },
    "Laboratório de Medidas Elétricas": {
        local: "Sala 37 - Bloco A (Térreo)",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Práticas com instrumentos de medição elétrica e calibração.",
        equipamentos: "Multímetros, osciloscópios, geradores de função, fontes de alimentação, pontas de prova diversas."
    },
    "Laboratório de Física e Eletrônica": {
        local: "Sala 38 - Bloco A (Térreo)",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Criado para experimentos de física e circuitos de potência.",
        equipamentos: "Bancadas para experimentos de física, componentes eletrônicos de potência, dissipadores, fontes de alta corrente."
    },
    "Laboratório de Informática (Nível Superior)": {
        local: "Sala 39 - Bloco A (Térreo)",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Usado para programação, projetos e pesquisas.",
        equipamentos: "Computadores, televisão, cadeiras, mesas, mouses e gabinetes."
    },
    "Fábrica de Inovações": {
        local: "Sala 40 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Fábrica de Inovações - Espaço de criatividade e inovação para desenvolvimento de projetos interdisciplinares.",
        equipamentos: "Televisão, jogos de caráter lúdico, mesas, cadeiras, gavetas, materiais para prototipagem."
    },
    "Laboratório de Química": {
        local: "Sala 41 - Bloco A (Térreo)",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Criado para práticas de química geral, orgânica e analítica.",
        equipamentos: "Capelas, bancadas com pontos de água e gás, vidrarias diversas, balanças analíticas, reagentes, mesas e cadeiras."
    },
    "Laboratório de Biologia": {
        local: "Sala 42 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Criado para estudos de microbiologia, botânica, zoologia, anatomia, etc.",
        equipamentos: "Microscópios ópticos, lâminas preparadas, modelos anatômicos, estufa, geladeira para amostras."
    },
    "Laboratório de Desenho Técnico": {
        local: "Sala 43 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Ambiente equipado com pranchas apropriadas para o desenvolvimento de projetos gráficos e desenhos industriais manuais.",
        equipamentos: "Pranchas de desenho com réguas paralelas, banquetas, luminárias articuladas e projetor multimídia."
    },
    "Laboratório de Informática": {
        local: "Sala 44 e 45 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Laboratórios de Informática para aulas práticas de informática e programação.",
        equipamentos: "Computadores, televisões, gabinetes, mouses e teclados em ambas as salas, totalizando aproximadamente 80 máquinas."
    },
    "Laboratórios de Informática": {
        local: "Sala 44 e 45 - Bloco A - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Laboratórios de Informática para aulas práticas de informática e programação.",
        equipamentos: "Computadores, televisões, gabinetes, mouses e teclados em ambas as salas, totalizando aproximadamente 80 máquinas."
    },
    

    // Salas de aula do bloco B e C
    "Sala 46": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Administração 2026", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Ciências Biológicas 2024.1", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Ciências Biológicas 2025.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (aproximadamente 40 lugares) ."
    },
    "Sala 47": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Edificações 2026", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Ciências Biológicas 2026.1", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Ciências Biológicas 2023.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (aproximadamente 40 lugares) ."
    },
    "Sala 48": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Eletromecânica 2026", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Tec. Sistemas para Internet 2025.1", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Tec. Sistemas para Internet 2024.2", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 49": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Eletroeletrônica 2025", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Eletromecânica 2025", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Tec. Sistemas para Internet 2026.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 50": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Informática 2025", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Administração 2025", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Sala Extra", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 51": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica",
        cursos: [
            { nome: "Administração 2024", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Edificações 2025", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Edificações Sub. 2025.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 52": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Eletromecânica 2024", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Eletroeletrônica 2024", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "PROEJA 2026", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 53": {
        local: "Bloco B - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Edificações 2024", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Informática 2024", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "PROEJA 2025", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Laboratório de Produção Mecânica": {
        local: "Sala 54 - Bloco C - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Laboratório de Produção Mecânica - Práticas de usinagem, soldagem e processos de fabricação mecânica.",
        equipamentos: "Tornos mecânicos, fresadoras, furadeiras de bancada, esmerilhadeiras, máquinas de solda, instrumentos de medição."
    },
    "Laboratório de Soldagem": {
        local: "Sala 56 - Bloco C - Térreo",
        horarios: { "Geral": "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Laboratório de Soldagem - Práticas de processos de soldagem e corte.",
        equipamentos: "Máquinas de solda MIG/MAG, TIG, eletrodo revestido, equipamentos de proteção, bancadas, exaustores."
    },
    "Sala 58": {
        local: "Bloco C - Térreo",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Educação Física", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 18:20", "Terça": "07:10 às 18:20", "Quarta": "07:10 às 18:20", "Quinta": "07:10 às 18:20", "Sexta": "07:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Tec. Gestão Comercial 2025.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 59": {
        local: "Bloco C (Térreo)",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Sala Extra", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Eletroeletrônica 2026", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Tec. Gestão Comercial 2026.1", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala 60": {
        local: "Bloco C (Térreo)",
        descricao: "Sala de aula teórica.",
        cursos: [
            { nome: "Sala Extra", horarios: { "Domingo": "Fechado", "Segunda": "07:10 às 12:30", "Terça": "07:10 às 12:30", "Quarta": "07:10 às 12:30", "Quinta": "07:10 às 12:30", "Sexta": "07:10 às 12:30", "Sábado": "Fechado" } },
            { nome: "Informática 2026", horarios: { "Domingo": "Fechado", "Segunda": "13:10 às 18:20", "Terça": "13:10 às 18:20", "Quarta": "13:10 às 18:20", "Quinta": "13:10 às 18:20", "Sexta": "13:10 às 18:20", "Sábado": "Fechado" } },
            { nome: "Especialização", horarios: { "Domingo": "Fechado", "Segunda": "18:20 às 22:50", "Terça": "18:20 às 22:50", "Quarta": "18:20 às 22:50", "Quinta": "18:20 às 22:50", "Sexta": "18:20 às 22:50", "Sábado": "Fechado" } }
        ],
        equipamentos: "Televisão, quadro branco, ar-condicionado, carteiras (40 lugares) ."
    },
    "Sala de Robótica": {
        local: "Sala 64 - Térreo",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Laboratório de Robótica Educacional - Desenvolvimento de projetos com robôs e automação.",
        equipamentos: "Kits de robótica (Lego, Arduino, etc.), computadores, impressoras 3D, componentes eletrônicos."
    },
    "Sala de Línguas": {
        local: "Sala 65 - Térreo",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Centro de Línguas - Espaço para ensino e prática de idiomas.",
    },
    "Incubadora": {
        local: "Sala 68 - Térreo",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Incubadora de Empresas - Apoio a startups e empreendedorismo.",
        equipamentos: "Salas para empresas incubadas, espaço de coworking, salas de reunião, internet de alta velocidade."
    },
    "E - Games": {
        local: "Sala 02 - Térreo",
        horarios: { Geral: "Entrada permitida só com a autorização de um docente ou servidor." },
        descricao: "Espaço de jogos e gameficação - Projetos e pesquisa em jogos digitais.",
        equipamentos: "Computadores gamers, consoles de videogame, óculos de realidade virtual, acervo de jogos."
    },
    "Protocolo com almoxarifado": {
        local: "Sala 08 - Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 12:00 e 14:00 às 18:00",
            "Terça": "08:00 às 12:00 e 14:00 às 18:00", "Quarta": "08:00 às 12:00 e 14:00 às 18:00",
            "Quinta": "08:00 às 12:00 e 14:00 às 18:00", "Sexta": "08:00 às 12:00 e 14:00 às 18:00", "Sábado": "Fechado"
        },
        descricao: "Setor de protocolo e almoxarifado - Recebimento e expedição de documentos e materiais.",
        equipamentos: "Estantes para arquivamento, balcão de atendimento."
    },
    "DRCA/Controle Acadêmico": {
        local: "Sala 10 - Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 12:00 e 14:00 às 18:00",
            "Terça": "08:00 às 12:00 e 14:00 às 18:00", "Quarta": "08:00 às 12:00 e 14:00 às 18:00",
            "Quinta": "08:00 às 12:00 e 14:00 às 18:00", "Sexta": "08:00 às 12:00 e 14:00 às 18:00", "Sábado": "Fechado"
        },
        descricao: "Diretoria de Registro e Controle Acadêmico - Emissão de documentos, matrículas e histórico escolar, qualquer problema com documentação deve ser resolvido aqui, como no caso da entrega de boletins e históricos escolares.",
    },
    "Almoxarifado de Material de Expediente": {
        local: "Térreo",
        horarios: {
            "Domingo": "Fechado", "Segunda": "08:00 às 12:00 e 14:00 às 18:00",
            "Terça": "08:00 às 12:00 e 14:00 às 18:00", "Quarta": "08:00 às 12:00 e 14:00 às 18:00",
            "Quinta": "08:00 às 12:00 e 14:00 às 18:00", "Sexta": "08:00 às 12:00 e 14:00 às 18:00", "Sábado": "Fechado"
        },
        descricao: "Armazenamento e distribuição de materiais de expediente para os setores do campus.",
        equipamentos: "Prateleiras, estoque de papel, canetas, pastas e materiais diversos."
    },
  
};
const dadosSalasNormalizados = {};

for (const nome in dadosSalas) {
    dadosSalasNormalizados[normalizar(nome)] = dadosSalas[nome];
}
//FUNÇÕES DE INICIALIZAÇÃO E FILTRO
function renderizarSalas() {
    menuList.innerHTML = '';
    // Ordena as salas em ordem alfabética
    [...salas].sort().forEach(sala => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.textContent = sala;
        btn.onclick = () => mostrarInfoSala(sala);
        menuList.appendChild(btn);
    });
}

function filtrar() {
    const termo = normalizar(searchInput.value.trim());
    const botoes = document.querySelectorAll('.menu-item');
    let encontrados = 0;

    botoes.forEach(btn => {
        const nomeSala = btn.textContent;
        const dados = dadosSalas[nomeSala] || {};

        // Junta TODOS os textos pesquisáveis
        let textoPesquisa = nomeSala;

        // descrição
        if (dados.descricao) {
            textoPesquisa += ' ' + dados.descricao;
        }

        // equipamentos
        if (dados.equipamentos) {
            textoPesquisa += ' ' + dados.equipamentos;
        }

        // observações
        if (dados.observacoes) {
            textoPesquisa += ' ' + dados.observacoes;
        }

        // localização
        if (dados.local) {
            textoPesquisa += ' ' + dados.local;
        }

        // cursos
        if (dados.cursos) {
            dados.cursos.forEach(curso => {
                textoPesquisa += ' ' + curso.nome;
            });
        }

        // horários
        if (dados.horarios) {
            for (let dia in dados.horarios) {
                textoPesquisa += ' ' + dia + ' ' + dados.horarios[dia];
            }
        }

        // normaliza tudo
        textoPesquisa = normalizar(textoPesquisa);

        // verifica busca
        if (textoPesquisa.includes(termo)) {
            btn.classList.remove('hidden');
            encontrados++;
        } else {
            btn.classList.add('hidden');
        }
    });

    // mensagem de nenhum resultado
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
// FUNÇÕES AUXILIARES DE DATA
function getDiaAtual() {
    const hoje = new Date();
    const diaIngles = hoje.toLocaleDateString('en-US', { weekday: 'long' });
    return diasSemana[diaIngles];
}

// FUNÇÃO DO POP-UP (MODAL)
function mostrarInfoSala(nomeSala) {
    const dados = dadosSalasNormalizados[normalizar(nomeSala)] || {
        local: "Informações não disponíveis",
        horarios: {},
        descricao: "Detalhes deste local serão atualizados em breve.",
        observacoes: "-",
        equipamentos: "-"
    };

    const diaHoje = getDiaAtual();
    
    // Lógica de estilização dos badges
    if (dados.horarios && dados.horarios["Geral"]) {
        const valorOriginal = dados.horarios["Geral"];
        const valorGeral = valorOriginal.toLowerCase();

        if (valorGeral === "sempre aberto") {
            horariosHTML = `<div class="badge-aberto">🟢 Sempre Aberto</div>`;

        } else if (valorGeral.includes("indefinido")) {

            horariosHTML = `<div class="badge-aberto" style="background: rgba(41, 171, 2, 0.3);">🕒 ${valorOriginal}</div>`;

        } else if (valorGeral.includes("autoriza") || valorGeral.includes("fechado")) {
            
            // Mantém o Laranja para avisos de acesso restrito
            if (valorGeral.includes("dias de evento")) {
                horariosHTML = `<div class="badge-aberto" style="background: rgba(21, 184, 0, 0.29);">📅 ${valorOriginal}</div>`;
            } else {
                horariosHTML = `<div class="badge-aberto" style="background: rgba(41, 171, 2, 0.3);">🔒 ${valorOriginal}</div>`;
            }

        } else {
            horariosHTML = `<p>${valorOriginal}</p>`;
        }
    }
    // Se tem cursos
    else if (dados.cursos && dados.cursos.length > 0) {
        horariosHTML = '<div class="cursos-container">';
        dados.cursos.forEach(curso => {
            horariosHTML += `<div class="curso-card"><h4>${curso.nome}</h4><ul>`;
            for (let dia in curso.horarios) {
                const classeHoje = (dia === diaHoje) ? 'dia-atual' : '';
                horariosHTML += `<li class="${classeHoje}"><strong>${dia}:</strong> ${curso.horarios[dia]}</li>`;
            }
            horariosHTML += `</ul></div>`;
        });
        horariosHTML += '</div>';
    }
    // Se tem horários semanais
    else if (dados.horarios && Object.keys(dados.horarios).length > 0 && !dados.horarios["Geral"]) {
        horariosHTML = '<ul>';
        for (let dia in dados.horarios) {
            const classeHoje = (dia === diaHoje) ? 'dia-atual' : '';
            horariosHTML += `<li class="${classeHoje}"><strong>${dia}:</strong> ${dados.horarios[dia]}</li>`;
        }
        horariosHTML += '</ul>';
    }
    // Fallback
    else {
        horariosHTML = `<div class="badge-aberto" style="background:#607d8b;">🕒 Horário não definido</div>`;
    }

    // O restante do código do modal (Equipamentos, Localização, etc) permanece IGUAL
    let equipamentosHTML = '';
    if (dados.equipamentos && dados.equipamentos !== '-') {
        equipamentosHTML = `
            <div class="modal-section">
                <h3>🔧 EQUIPAMENTOS</h3>
                <p>${dados.equipamentos}</p>
            </div>
        `;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';

    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>${nomeSala}</h2>
            <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>📍 LOCALIZAÇÃO</h3>
                <p class="local">${dados.local}</p>
            </div>
            <div class="modal-section">
                <h3>📝 DESCRIÇÃO</h3>
                <p>${dados.descricao}</p>
            </div>
            ${equipamentosHTML}
            <div class="modal-section">
                <h3>⏰ HORÁRIOS</h3>
                ${horariosHTML}
            </div>
            ${dados.observacoes && dados.observacoes !== '' ? `
            <div class="modal-section">
                <h3>⚠️ OBSERVAÇÕES</h3>
                <p>${dados.observacoes}</p>
            </div>
            ` : ''}
        </div>
    </div>
`;

    document.body.appendChild(modal);
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
}

// EVENTOS
searchInput.addEventListener('input', filtrar);
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filtrar();
    searchInput.focus();
});

// Inicializar
renderizarSalas();
