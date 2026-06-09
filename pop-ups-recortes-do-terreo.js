
// ==========================================
// BOTÕES SOBRE OS RECORTES DO MAPA DO TÉRREO 
// B, AB, CD e ci estão do tamanho correto, só falta diminuir fonte das letras
// ==========================================

const botoesparaverpopup = [

    { nome:"B",  x:7.55, y:41.7,  w:12,   h:20,   scale: 1.4, scalecelular: 1, imagem:"imagens/biblioteca.png" },
    { nome:"Q",  x:55.85,y:9.9,   w:58.7, h:20.3, scale: 1.4, scalecelular: 1, imagem:"imagens/quadra.png" },
    { nome:"ci", x:9.99, y:90.4,  w:16.5, h:20,   scale: 1.2, scalecelular: 0.9, imagem:"imagens/cineteatro.png" },
    { nome:"H",  x:9.8,  y:65.86, w:19.5, h:23,   scale: 1.26,scalecelular: 0.9, imagem:"imagens/hall.png" },
    { nome:"Ca", x:34,   y:65.89, w:16.5, h:25,   scale: 1.2, scalecelular: 0.9, imagem:"imagens/cantina.png" },
    { nome:"Ca", x:34,   y:65.89, w:16.5, h:25,   scale: 1.2, scalecelular: 0.9, imagem:"imagens/cantina.png" },
    { nome:"R",  x:35,   y:86.5,  w:14,   h:11.5, scale: 1.4, scalecelular: 0.9, imagem:"imagens/refeitorio.png" },
    { nome:"AB", x:60.7, y:66.6,  w:24,   h:45.6, scale: 1,   scalecelular: 0.9, imagem:"imagens/blocoAeB.png" },
    { nome:"CD", x:89.5, y:66.5,  w:23,   h:33,   scale: 1,   scalecelular: 1, imagem:"imagens/blocoCeD.png" },

];

// ====================================================
// BOTÕES DAS SALAS SOBRE OS RECORTES DO MAPA DO TERREO
// ====================================================

const botoesDosPopups = {

    "imagens/cineteatro.png": [
        { nome:"Cine Teatro",            x:40.5, y:53, w:36, h:9, fs:24 },
        { nome:"Camarim",                x:78.8, y:89.9, w:14, h:6, fs:12 },
        { nome:"Cabine de Controle",     x:40.1, y:14.44, w:32, h:5, fs:12 },
    ],

    "imagens/biblioteca.png": [
        { nome:"Biblioteca",                x:48, y:55, w:46, h:9, fs:24 },
        { nome:"Livros fora\ndo sistema",   x:19, y:10.3, w:21, h:7, fs:10 },
        { nome:"Livros fora\ndo sistema",   x:19, y:23.5, w:21, h:7, fs:10 },
        { nome:"Sala de\nEstudos",          x:19, y:37, w:21.1, h:7, fs:10 },
    ],

    "imagens/blocoAeB.png": [

        {
            nome:"Lab. de\nMáquinas\nElétricas",
            pesquisa:"Laboratório de Máquinas Elétricas",
            x:22.87, y:6.5, w:20, h:6.5, fs:11
        },

        {
            nome:"Lab. de\nMedidas\nElétricas",
            pesquisa:"Laboratório de Medidas Elétricas",
            x:22.87, y:15.25, w:20, h:6.5, fs:11
        },

        {
            nome:"Lab. de\nFísica e\nEletrônica",
            pesquisa:"Laboratório de Física e Eletrônica",
            x:22.87, y:24.1, w:20, h:6.5, fs:11
        },

        {
            nome:"Lab. de\nInformática\n(Superior)",
            pesquisa:"Laboratório de Informática",
            x:22.87, y:33.1, w:20, h:6.5, fs:11
        },

        {
            nome:"Fábrica de\nInovações",
            x:22.87, y:42, w:20, h:4.5, fs:11
        },

        {
            nome:"Lab. de\nQuímica",
            pesquisa:"Laboratório de Química",
            x:22.87, y:57.1, w:20, h:4.5, fs:11
        },

        {
            nome:"Lab. de\nBiologia",
            pesquisa:"Laboratório de Biologia",
            x:22.87, y:65.7, w:20, h:4.5, fs:11
        },

        {
            nome:"Lab. de\nDesenho\nTécnico",
            pesquisa:"Laboratório de Desenho Técnico",
            x:22.87, y:74.3, w:20, h:6.5, fs:11
        },

        {
            nome:"Lab. de\nInformática",
            pesquisa:"Laboratório de Informática",
            x:22.87, y:83.5, w:20, h:4.5, fs:11
        },

        {
            nome:"Lab. de\nInformática",
            pesquisa:"Laboratório de Informática",
            x:22.87, y:93.1, w:20, h:4.5, fs:11
        },

        { nome:"Sala 46", x:77, y:9.5, w:17, h:3, fs:11 },
        { nome:"Sala 47", x:77, y:18.5, w:17, h:3, fs:11 },
        { nome:"Sala 48", x:77, y:27.2, w:17, h:3, fs:11 },
        { nome:"Sala 49", x:77, y:35.9, w:17, h:3, fs:11 },

        { nome:"Banheiro M.\ne Acessível", x:77, y:43.1, w:20, h:4.75, fs:11 },
        { nome:"Banheiro F.\ne Acessível", x:77, y:55.6, w:20, h:4.75, fs:11 },

        { nome:"Sala 50", x:77, y:63.56, w:17, h:3, fs:11 },
        { nome:"Sala 51", x:77, y:72.5, w:17, h:3, fs:11 },
        { nome:"Sala 52", x:77, y:81.6, w:17, h:3, fs:11 },
        { nome:"Sala 53", x:77, y:90.6, w:17, h:3, fs:11 },
    ],

    "imagens/blocoCeD.png": [

        {
            nome:"Lab. de\nProdução\nMecânica",
            pesquisa:"Laboratório de Produção Mecânica",
            x:25.09, y:8, w:20, h:7.8, fs:14
        },

        {
            nome:"SAA",
            x:25.09, y:18.7, w:20, h:4.5, fs:14
        },

        {
            nome:"Lab. de\nSoldagem",
            pesquisa:"Laboratório de Soldagem",
            x:25.09, y:31, w:20, h:6.5, fs:14
        },

        {
            nome:"Banheiro M.\ne Acessível",
            x:25.09, y:40.9, w:21, h:6.5, fs:14
        },

        {
            nome:"Banheiro F.\ne Acessível",
            x:25.09, y:57.32, w:21, h:6.5, fs:14
        },

        {
            nome:"Sala 58",
            x:25.09, y:67.6, w:20, h:4.5, fs:14
        },

        {
            nome:"Sala 59",
            x:25.09, y:79.45, w:20, h:4.5, fs:14
        },

        {
            nome:"Sala 60",
            x:25.09, y:92, w:20, h:4.5, fs:14
        },

        {
            nome:"B\nL\nO\nC\nO\n \nE\nM\n \nC\nO\nN\nS\nT\nR\nU\nÇ\nÃ\nO",
            x:82.4, y:50.5, w:12, h:67, fs:18.5
        },
    ],

    "imagens/refeitorio.png": [
        { nome:"Refeitório\n(em construção)", x:58, y:50.6, w:49, h:20, fs:20 },
    ],

    "imagens/quadra.png": [
        { nome:"Quadra\nPoliesportiva",     x:82.4, y:50.6, w:20.5, h:20.5, fs:12 },
        { nome:"Dispensa\nda Quadra",       x:55.91, y:36.2, w:13, h:10, fs:7 },
        { nome:"Banheiro F.\ncom chuveiro", x:55.91, y:49.7, w:13, h:10, fs:7 },
        { nome:"Banheiro M.\ncom chuveiro", x:55.91, y:64.5, w:13, h:10, fs:7 },
        { nome:"Piscina",                   x:24.5, y:50.3, w:14, h:14, fs:12 },
    ],

    "imagens/hall.png": [
        { nome:"Banheiro M.\ne Acessível", x:44.7, y:10, w:15, h:4, fs:7 },
        { nome:"E - Games", x:62.1, y:10, w:12, h:3, fs:7 },
        { nome:"Psicóloga", x:83.2, y:10, w:15, h:3, fs:7 },
        { nome:"Setor Médico", x:83.2, y:10, w:15, h:3, fs:7 },
        { nome:"Serviço Social", x:86.9, y:22, w:15, h:3, fs:7 },

        {
            nome:"Sala dos Professores/DERI/\nPRONATEC/NPPG",
            x:86.98, y:31.45, w:16, h:6, fs:7
        },

        {
            nome:"Protocolo com\nalmoxarifado",
            x:86.9, y:41, w:15, h:4, fs:7
        },

        {
            nome:"DRCA/Controle\nAcadêmico",
            x:86.9, y:62.4, w:15, h:4, fs:7
        },

        { nome:"Fechada", x:86.9, y:72, w:10, h:3, fs:7 },

        {
            nome:"Almoxarifado\nde Material\nde Expediente",
            x:83.2, y:90, w:16, h:5.6, fs:7
        },

        { nome:"Diretoria", x:62.2, y:90, w:11, h:3, fs:7 },

        {
            nome:"Banheiro F.\ne Acessível",
            x:44.7, y:90, w:15, h:4, fs:7
        },
    ],

    "imagens/cantina.png": [
        { nome:"Cantina", x:49.5, y:15, w:26, h:4.9, fs:20 },

        {
            nome:"Sala de Línguas",
            x:59.97, y:89.66, w:21, h:6.5, fs:14
        },

        {
            nome:"Sala de Robótica",
            x:26.3, y:89.66, w:37, h:5.5, fs:14
        },

        {
            nome:"AEE/\nNAPNE",
            x:83.48, y:67.7, w:20, h:8, fs:14
        },

        {
            nome:"Incubadora",
            x:16.65, y:78.4, w:20.7, h:4.9, fs:12
        },

        {
            nome:"IFCast",
            x:16.65, y:65.9, w:20, h:4.9, fs:14
        },

        {
            nome:"Banheiro F.\ne Acessível",
            x:22.2, y:15, w:16, h:4, fs:8
        },

        {
            nome:"Banheiro M.\ne Acessível",
            x:76.4, y:15, w:16, h:4, fs:8
        },
    ],

};

// ======================================
// INÍCIO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.mapa-container');
    const img = document.querySelector('.mapa');

    // wrapper
    const wrapper = document.createElement('div');

    wrapper.className = 'mapa-wrapper';

    img.parentNode.insertBefore(wrapper, img);

    wrapper.appendChild(img);

    // popup
    const popup = document.createElement('div');

    popup.className = 'popup-mapa';

    popup.innerHTML = `
        <div class="popup-conteudo">

            <button class="fechar-popup">X</button>

            <img class="imagem-popup">

        </div>
    `;

    document.body.appendChild(popup);

    const imagemPopup = popup.querySelector('.imagem-popup');
    const popupConteudo = popup.querySelector('.popup-conteudo');

    // ======================================
    // FECHAR POPUP
    // ======================================

    popup.querySelector('.fechar-popup')
        .addEventListener('click', () => {

            popup.classList.remove('ativo');

        });

    popup.addEventListener('click', e => {

        if(e.target === popup){

            popup.classList.remove('ativo');

        }

    });

    // ======================================
    // FUNÇÃO CRIAR BOTÃO
    // ======================================

    function criarBotao(info, classe){

        const btn = document.createElement('button');

        btn.className = classe;

        btn.innerText = info.nome;

        btn.style.left = `${info.x}%`;
        btn.style.top = `${info.y}%`;
        btn.style.width = `${info.w}%`;
        btn.style.height = `${info.h}%`;

        if(info.fs){
            btn.style.fontSize = `${info.fs}px`;
        }

        btn.style.fontWeight = 'bold';

        return btn;
    }

    // ======================================
    // BOTÕES DO MAPA
    // ======================================

    botoesparaverpopup.forEach(info => {

        const btn = criarBotao(
            info,
            'ponto-mapa ponto-mapa-terreo'
        );

        btn.addEventListener('click', () => {

            imagemPopup.src = info.imagem;

            // ESCALA DO POPUP EM DESKTOP / CELULAR

const escalaDesktop = info.scale || 1;
const escalaCelular = info.scalecelular || escalaDesktop;

const escalaFinal =
    window.innerWidth <= 700
    ? escalaCelular
    : escalaDesktop;

popupConteudo.style.transform =
    `scale(${escalaFinal})`;

popupConteudo.style.transformOrigin =
    'center center';

            // remove antigos
            popup.querySelectorAll('.botao-popup')
                .forEach(btn => btn.remove());

            // pega botões da imagem
            const botoes = botoesDosPopups[info.imagem];

            // cria botões do popup
            if (botoes) {

                botoes.forEach(infoBtn => {

                    const novoBotao = criarBotao(
                        infoBtn,
                        'botao-popup'
                    );

                    novoBotao.addEventListener('click', (e) => {

                        e.stopPropagation();

                        mostrarInfoSala(
                            infoBtn.pesquisa || infoBtn.nome
                        );

                    });

                    popupConteudo.appendChild(novoBotao);

                });

            }

            popup.classList.add('ativo');

        });

        wrapper.appendChild(btn);

    });

});

