// ==========================================
// BOTÕES SOBRE OS RECORTES DO MAPA DO TÉRREO
// ==========================================

const botoesparaverpopup = [

    { nome:"B",  x:7.55, y:41.7,  w:12,   h:20,   imagem:"imagens/biblioteca.png" },
    { nome:"Q",  x:55.85,y:9.9,   w:58.7, h:20.3, imagem:"imagens/quadra.png" },
    { nome:"ci", x:9.99, y:90.4,  w:16.5, h:20,   imagem:"imagens/cineteatro.png" },
    { nome:"H",  x:9.8,  y:65.86, w:19.5, h:23,   imagem:"imagens/hall.png" },
    { nome:"Ca", x:34,   y:65.89, w:16.5, h:25,   imagem:"imagens/cantina.png" },
    { nome:"R",  x:35,   y:86.5,  w:14,   h:11.5, imagem:"imagens/refeitorio.png" },
    { nome:"AB", x:60.7, y:66.6,  w:24,   h:45.6, imagem:"imagens/blocoAeB.png" },
    { nome:"CD", x:89.5, y:66.5,  w:23,   h:34,   imagem:"imagens/blocoCeD.png" },

];

// ====================================================
// BOTÕES DAS SALAS SOBRE OS RECORTES DO MAPA DO TERREO 
// ====================================================

const botoesDosPopups = {

    "imagens/cineteatro.png": [
        { nome:"Cine Teatro",            x:40.5, y:53, w:36, h:9, fs:24 },
        { nome:"Camarim",                x:78.8, y:89.9, w:15, h:6, fs:13 },
        { nome:"Cabine de Controle",     x:40.1, y:14.44, w:32, h:5, fs:13 },
    ],

    "imagens/biblioteca.png": [
        { nome:"Biblioteca",                x:48, y:55, w:46, h:9, fs:24 },
        { nome: "Livros fora\ndo sistema",  x: 19, y: 10.3, w: 21, h: 7, fs: 10},
        { nome: "Livros fora\ndo sistema",  x: 19, y: 23.5, w: 21, h: 7, fs: 10},
        { nome: "Sala de\nEstudos",         x: 19, y: 37, w: 21.1, h: 7, fs: 10},
    ],

    "imagens/blocoAeB.png": [
        { nome:"Lab. de\nMáquinas\nElétricas",           x:22.87, y:6.5, w:20, h:6.5, fs:12 },
        { nome:"Lab. de\nMedidas\nElétricas",            x:22.87, y:15.25, w:20, h:6.5, fs:12 },
        { nome:"Lab. de\nFísica e\nEletrônica",          x:22.87, y:24.1, w:20, h:6.5, fs:12 },
        { nome:"Lab. de\nInformática\n(Superior)",       x:22.87, y:33.1, w:20, h:6.5, fs:12 },
        { nome:"Fábrica de\nInovações",                  x:22.87, y:42, w:20, h:4.5, fs:12},
        { nome:"Lab. de\nQuímica",                       x:22.87, y:57.1, w:20, h:4.5, fs:12 },
        { nome:"Lab. de\nBiologia",                      x:22.87, y:65.7, w:20, h:4.5, fs:12 },
        { nome:"Lab. de\nDesenho\nTécnico",              x:22.87, y:74.3, w:20, h:4.5, fs:12 },
        { nome:"Lab. de\nInformática",                   x:22.87, y:83.5, w:20, h:4.5, fs:12 },
        { nome:"Lab. de\nInformática",                   x:22.87, y:93.1, w:20, h:4.5, fs:12},

        { nome:"Sala 46",                       x:77, y:9.5, w:17, h:3, fs:12},
        { nome:"Sala 47",                       x:77, y:18.5, w:17, h:3, fs:12},
        { nome:"Sala 48",                       x:77, y:27.2, w:17, h:3, fs:12},
        { nome:"Sala 49",                       x:77, y:35.9, w:17, h:3, fs:12},
        { nome:"Banheiro M.\ne Acessível",      x:77, y:43.1, w:20, h:4.75, fs:12},
        { nome:"Banheiro F.\ne Acessível",      x:77, y:55.6, w:20, h:4.75, fs:12},
        { nome:"Sala 50",                       x:77, y:63.56, w:17, h:3, fs:12},
        { nome:"Sala 51",                       x:77, y:72.5, w:17, h:3, fs:12},
        { nome:"Sala 52",                       x:77, y:81.6, w:17, h:3, fs:12},
        { nome:"Sala 53",                       x:77, y:90.6, w:17, h:3, fs:12},
    ],

    "imagens/blocoCeD.png": [
        { nome:"Lab. de\nProdução\nMecânica",  x:25.09, y:8, w:20, h:7.8, fs:15 },
        { nome:"SAA",                          x:25.09, y:18.7, w:20, h:4.5, fs:15 },
        { nome:"Lab. de\nSoldagem",            x:25.09, y:31, w:20, h:6.5, fs:15 },
        { nome:"Banheiro M.\ne Acessível",     x:25.09, y:40.9, w:21, h:6.5, fs:15 },
        { nome:"Banheiro F.\ne Acessível",     x:25.09, y:57.32, w:21, h:6.5, fs:15 },
        { nome:"Sala 58",                      x:25.09, y:67.6, w:20, h:4.5, fs:15 },
        { nome:"Sala 59",                      x:25.09, y:79.45, w:20, h:4.5, fs:15 },
        { nome:"Sala 60",                      x:25.09, y:92, w:20, h:4.5, fs:15 },
        { nome: "B\nL\nO\nC\nO\n \nE\nM\n \nC\nO\nN\nS\nT\nR\nU\nÇ\nÃ\nO",     x:82.4, y:50.5, w:12, h:67, fs:20},
    ],

    "imagens/refeitorio.png": [
        { nome: "Refeitório",     x:58, y:50.6, w:49, h:20, fs:30},
    ],

    "imagens/quadra.png": [
        { nome: "-",     x:58, y:50.6, w:49, h:20, fs:30},
    ],

    "imagens/hall.png": [
        { nome: "-",     x:58, y:50.6, w:49, h:20, fs:30},
    ],

    "imagens/cantina.png": [
        { nome: "-",     x:58, y:50.6, w:49, h:20, fs:30},
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

            // remove antigos
            popup.querySelectorAll('.botao-popup')
                .forEach(btn => btn.remove());

            // pega botões da imagem
            const botoes = botoesDosPopups[info.imagem];

            // cria botões do popup
            if(botoes){

                botoes.forEach(infoBtn => {

                    const novoBotao = criarBotao(
                        infoBtn,
                        'botao-popup'
                    );

                    popupConteudo.appendChild(novoBotao);

                });

            }

            popup.classList.add('ativo');

        });

        wrapper.appendChild(btn);

    });

});


/*const botoesTerreo = [ 
    // a esquerda do hall
    { nome: "Livros fora\ndo sistema",      x: 3.6, y: 33.6, w: 2.8, h: 1.6, fs: 0.5 },
    { nome: "Livros fora\ndo sistema",      x: 3.6, y: 36.3, w: 2.8, h: 1.6, fs: 0.5 },
    { nome: "Sala de\nEstudos",             x: 3.6, y: 39.1, w: 2.8, h: 1.6, fs: 0.5 },
    { nome: "Biblioteca",                   x: 7.6, y: 43.0, w: 9.7, h: 3.5, fs: 1.7 },

    // Próximo a quadra
    { nome: "Quadra\nPoliesportiva",        x: 75.7, y: 9.9, w: 12.7, h: 4.5, fs: 1.7 },
    { nome: "Dispensa\nda Quadra",          x: 59.1,  y: 7.344, w: 8,    h: 2.25, fs: 1.05 },
    { nome: "Banheiro F.\ncom chuveiro",    x: 59.1,  y: 14.13, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Banheiro M.\ncom chuveiro",    x: 59.1,  y: 10.54, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Piscina",                      x: 39.7,  y: 10.6, w: 9.7,  h: 4,    fs: 1.7 },

    //a direita do hall
    { nome: "Cine Teatro",                  x: 7.6, y: 91, w: 9.7, h: 3.5, fs: 1.5 },
    { nome: "Cabine de Controle",           x: 7.44, y: 83.15, w: 6, h: 1, fs: 0.6 }, 
    { nome: "Camarim",                      x: 15.5, y: 97.75, w: 3.5, h: 1.2, fs: 0.7 },

    //a frente do hall
    { nome: "Sala de Línguas",              x: 29.9, y: 76.54, w: 6.7, h: 1.8, fs: 0.8 },
    { nome: "Sala de\nrobótica",            x: 35.71, y: 76.45, w: 3.8, h: 1.8, fs: 0.8 },
    { nome: "AEE\nNAPNE",                   x: 39.7, y: 71.15, w: 3.1, h: 1.8, fs: 0.7 },
    { nome: "Incub-\nadora",                   x: 28.1, y: 73.9, w: 2.99, h: 1.8, fs: 0.8 },
    { nome: "Refeitório",                   x: 35.31, y: 86.7, w: 10.0, h: 3.5, fs: 1.7 },
    { nome: "IFCast",                       x: 28.11, y: 71, w: 2.99, h: 1.8, fs: 0.9 },

    // Bloco A
    { nome: "Lab. de\nMáquinas\nElétricas",     x: 53.88, y: 46.25, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Lab. de\nMedidas\nElétricas",      x: 53.88, y: 50.36, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Lab. de\nFísica e\nEletrônica",    x: 53.88, y: 54.5, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Lab. de\nInformática\n(Superior)", x: 53.88, y: 58.76, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Fábrica de\nInovações",            x: 53.88, y: 62.9,   w: 5.1, h: 3.3, fs: 0.8 },
    { nome: "Lab. de\nQuímica",                 x: 53.88, y: 70.03, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Lab. de\nBiologia",                x: 53.88, y: 74.19, w: 5.1, h: 3., fs: 0.8 },
    { nome: "Lab. de\nDesenho\nTécnico",         x: 53.88, y: 78.19, w: 5.1, h: 3.5, fs: 0.8 },
    { nome: "Lab. de\nInformática",             x: 53.88, y: 82.55, w: 5.1, h: 3, fs: 0.8 },
    { nome: "Lab. de\nInformática",             x: 53.88, y: 87.1, w: 5.1, h: 3, fs: 0.8 },

    // Bloco B
    { nome: "Sala 46",                      x: 67.32, y: 47.65, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 47",                      x: 67.32, y: 51.8, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 48",                      x: 67.32, y: 56.,   w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 49",                      x: 67.32, y: 60.11, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 50",                      x: 67.32, y: 73.1,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 51",                      x: 67.32, y: 77.4, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 52",                      x: 67.32, y: 81.75, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 53",                      x: 67.32, y: 85.9,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Banheiro F.\ne Acessível",     x: 67.32, y: 69.39, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Banheiro M.\ne Acessível",     x: 67.32, y: 63.53, w: 5, h: 2.3, fs: 0.8 },

    // Bloco C
    { nome: "Lab. de\nProdução\nMecânica",  x: 83.59, y: 51.94,    w: 5, h: 3.5, fs: 0.8 },
    { nome: "SAA",                          x: 83.59, y: 55.87, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Lab. de\nSoldagem",            x: 83.59, y: 59.9,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 58",                      x: 83.59, y: 72.9,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 59",                      x: 83.59, y: 77.1,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Sala 60",                      x: 83.59, y: 81.3,  w: 5, h: 2.3, fs: 0.8 },
    { nome: "Banheiro F.\ne Acessível",     x: 83.59, y: 69.28, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Banheiro M.\ne Acessível",     x: 83.59, y: 63.53, w: 5, h: 2.3, fs: 0.8 },
    { nome: "Banheiro F.\ncom chuveiro",    x: 28.11, y: 71, w: 2.99, h: 1.8, fs: 0.9 }, 
    { nome: "Banheiro M.\ncom chuveiro",     x: 83.59, y: 63.53, w: 5, h: 2.3, fs: 0.8 },


    //Bloco D
    { nome: "B\nL\nO\nC\nO\n \nE\nM\n \nC\nO\nN\nS\nT\nR\nU\nÇ\nÃ\nO",     x: 96.2, y: 66.85, w: 3, h: 28, fs: 1.2 },
];*/