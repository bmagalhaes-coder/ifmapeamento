const botoesTerreo = [
    // A
    { nome: "Livros fora\ndo sistema",      x: 3.35, y: 33.6, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Livros fora\ndo sistema",      x: 3.35, y: 36.3, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Sala de\nEstudos",             x: 3.35, y: 39.1, w: 2.8, h: 1.6, fs: 0.6 },
    { nome: "Biblioteca",                   x: 7.3, y: 43.0, w: 9.7, h: 3.5, fs: 1.7 },

    // Próximo a quadra
    { nome: "Quadra\nPoliesportiva",        x: 75.75, y: 10.0, w: 12.7, h: 4.5, fs: 1.7 },
    { nome: "Dispensa\nda Quadra",          x: 59.1,  y: 7.45, w: 8,    h: 2.25, fs: 1.05 },
    { nome: "Banheiro F.\ncom chuveiro",    x: 59.1,  y: 14.2, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Banheiro M.\ncom chuveiro",    x: 59.1,  y: 10.66, w: 8,    h: 2.5,  fs: 1.05 },
    { nome: "Piscina",                      x: 39.5,  y: 10.7, w: 9.7,  h: 4,    fs: 1.7 },

    { nome: "Cine Teatro",                  x: 7.3, y: 91, w: 9.7, h: 3.5, fs: 1.5 },
    { nome: "Cabine de Controle",           x: 7.15, y: 83.2, w: 6, h: 1, fs: 0.6 }, 
    { nome: "Camarim",                      x: 15.3, y: 97.8, w: 3.5, h: 1.2, fs: 0.7 },

    { nome: "Sala de Línguas",              x: 29.7, y: 76.54, w: 6.7, h: 1.8, fs: 0.8 },
    { nome: "Sala de\nrobótica",            x: 35.59, y: 76.45, w: 3.8, h: 1.8, fs: 0.8 },
    { nome: "AEE\nNAPNE",                   x: 39.59, y: 71.15, w: 3.1, h: 1.8, fs: 0.7 },
    
    // - é uma gambiarra porque esqueci de um espaço que simboliza a porta do AEE/NAPNE no desenho
    { nome: "-",                            x: 38.7, y: 72.7, w: 0.1, h: 0.1,fs: 0.0},
    
    { nome: "Incubadora",                   x: 27.9, y: 73.9, w: 2.99, h: 1.8, fs: 0.8 },
    { nome: "Refeitório",                   x: 35.33, y: 86.7, w: 10.0, h: 3.5, fs: 1.7 },
    { nome: "IFCast",                       x: 27.9, y: 71, w: 2.99, h: 1.8, fs: 0.9 },

    // Bloco A
    { nome: "Lab. de\nMáquinas\nElétricas",     x: 53.88, y: 46.4, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Lab. de\nMedidas\nElétricas",      x: 53.88, y: 50.35, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Lab. de\nFísica e\nEletrônica",    x: 53.88, y: 54.6, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Lab. de\nInformática\n(Superior)", x: 53.88, y: 58.8, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Fábrica de\nInovações",            x: 53.88, y: 63,   w: 5.1, h: 3.3, fs: 0.9 },
    { nome: "Lab. de\nQuímica",                 x: 53.88, y: 70.15, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Lab. de\nBiologia",                x: 53.88, y: 74.3, w: 5.1, h: 3., fs: 0.9 },
    { nome: "Lab. de\nDesenho\nTécnico",         x: 53.88, y: 78.3, w: 5.1, h: 3.5, fs: 0.9 },
    { nome: "Lab. de\nInformática",             x: 53.88, y: 82.6, w: 5.1, h: 3, fs: 0.9 },
    { nome: "Lab. de\nInformática",             x: 53.88, y: 87.2, w: 5.1, h: 3, fs: 0.9 },

    // Bloco B
    { nome: "Sala 46",                      x: 67.37, y: 47.63, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 47",                      x: 67.37, y: 51.81, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 48",                      x: 67.37, y: 56.,   w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 49",                      x: 67.37, y: 60.11, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 50",                      x: 67.37, y: 73.1,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 51",                      x: 67.37, y: 77.53, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 52",                      x: 67.37, y: 81.75, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 53",                      x: 67.37, y: 85.9,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Banheiro F.\ne Acessível",     x: 67.37, y: 69.39, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Banheiro M.\ne Acessível",     x: 67.37, y: 63.53, w: 5, h: 2.3, fs: 0.9 },

    // Bloco C
    { nome: "Lab. de\nProdução\nMecânica",  x: 83.77, y: 52,    w: 5, h: 3.5, fs: 0.9 },
    { nome: "SAA",                          x: 83.77, y: 55.87, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Lab. de\nSoldagem",            x: 83.77, y: 59.9,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 58",                      x: 83.77, y: 72.9,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 59",                      x: 83.77, y: 77.1,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Sala 60",                      x: 83.77, y: 81.3,  w: 5, h: 2.3, fs: 0.9 },
    { nome: "Banheiro F.\ne Acessível",     x: 83.77, y: 69.28, w: 5, h: 2.3, fs: 0.9 },
    { nome: "Banheiro M.\ne Acessível",     x: 83.77, y: 63.53, w: 5, h: 2.3, fs: 0.9 },
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