const botoesTerreo = [
    // A
    { nome: "Livros fora\ndo sistema",      x: 3.6, y: 33.6, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Livros fora\ndo sistema",      x: 3.6, y: 36.3, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Sala de\nEstudos",             x: 3.6, y: 39.1, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Biblioteca",                   x: 7.6, y: 43.0, w: 9.7, h: 3.5, fs: 1.7 },

    // Próximo a quadra
    { nome: "Quadra\nPoliesportiva",        x: 75.7, y: 9.9, w: 12.7, h: 4.5, fs: 1.7 },
    { nome: "Dispensa\nda Quadra",          x: 59.1,  y: 7.344, w: 8,    h: 2.25, fs: 1.05 },
    { nome: "Banheiro F.\ncom chuveiro",    x: 59.1,  y: 14.13, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Banheiro M.\ncom chuveiro",    x: 59.1,  y: 10.54, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Piscina",                      x: 39.7,  y: 10.6, w: 9.7,  h: 4,    fs: 1.7 },

    { nome: "Cine Teatro",                  x: 7.6, y: 91, w: 9.7, h: 3.5, fs: 1.5 },
    { nome: "Cabine de Controle",           x: 7.44, y: 83.15, w: 6, h: 1, fs: 0.6 }, 
    { nome: "Camarim",                      x: 15.5, y: 97.75, w: 3.5, h: 1.2, fs: 0.7 },

    { nome: "Sala de Línguas",              x: 29.9, y: 76.54, w: 6.7, h: 1.8, fs: 0.8 },
    { nome: "Sala de\nrobótica",            x: 35.71, y: 76.45, w: 3.8, h: 1.8, fs: 0.8 },
    { nome: "AEE\nNAPNE",                   x: 39.7, y: 71.15, w: 3.1, h: 1.8, fs: 0.7 },
    { nome: "Incubadora",                   x: 28.1, y: 73.9, w: 2.99, h: 1.8, fs: 0.8 },
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
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.mapa-container');
    const img = container.querySelector('.mapa');

    // Cria o wrapper para conter a imagem e os botões
    const wrapper = document.createElement('div');
    wrapper.className = 'mapa-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    botoesTerreo.forEach(info => {
        const btn = document.createElement('button');
        btn.className = 'ponto-mapa';
        btn.innerText = info.nome;

        // Lógica para o botão bege específico
        if (info.nome === "-") {
            btn.id = "botao-bege";
        }

        // Posicionamento e dimensões
        btn.style.left = `${info.x}%`;
        btn.style.top = `${info.y}%`;
        btn.style.width = `${info.w}%`;
        btn.style.height = `${info.h}%`;
        btn.style.fontSize = `${info.fs}vw`;

        // Evento de clique
        btn.onclick = () => {
            if (typeof mostrarInfoSala === 'function') {
                mostrarInfoSala(info.nome);
            } else {
                console.error("Função mostrarInfoSala não encontrada!");
            }
        };

        wrapper.appendChild(btn);
    });
});