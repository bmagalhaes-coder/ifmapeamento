const salasTerreo = [
//corredores maiores
{ nome: "corredor que leva até a quadr", x: 75.3, y: 21, w: 2.2, h: 44, cor: "escura" },
{ nome: "corredor central que liga todo o campus", x: 19, y: 65, w: 75, h: 2.5, cor: "escura" },
{ nome: "corredor que vai do cineteatro até o bloco A", x: 14, y: 78.5, w: 40, h: 2.5, cor: "escura" },
//quadra
    { nome: "corredor 12", x: 26.5, y: 3, w: 28, h: 15, cor: "escura" },
    { nome: "corredor 13", x: 54, y: 4.9, w: 10, h: 12, cor: "escura" },
    { nome: "corredor 14", x: 64, y: 0.1, w: 20.76, h: 21, cor: "escura" },
    { nome: "piscina", x: 30.4, y: 6, w: 20, h: 9, cor: "clara" },
    { nome: "dispensa da quadra", x: 54.5, y: 5.8, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro feminino com chuveiro", x: 54.5, y: 9.05, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro masculino com chuveiro", x: 54.5, y: 12.2, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "quadra", x: 66.8, y: 0.1, w: 18, h: 18.7, cor: "clara" },

//bloco D
    { nome: "corredor 10", x: 91.5, y: 51.6, w: 8, h: 30.1, cor: "escura" },
    { nome: "blocoD", x: 93.4, y: 51.6, w: 6.1, h: 30.1, cor: "clara" },

//bloco C
    { nome: "corredor 9", x: 78.8, y: 49.64, w: 8, h: 33.2, cor: "escura" },
    { nome: "lab. de Produção Mecânica", x: 80.7, y: 49.64, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "SAA", x: 80.7, y: 53.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Soldagem", x: 80.7, y: 57.7, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 80.7, y: 61.8, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 80.7, y: 67.59, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Sala 58", x: 80.7, y: 70.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 59", x: 80.7, y: 74.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 60", x: 80.7, y: 78.5, w: 6.1, h: 4.3, cor: "clara" },

//bloco B
    { nome: "corredor 8", x: 64.5, y: 45.32, w: 8, h: 41.8, cor: "escura" },
    { nome: "Sala 46", x: 64.5, y: 45.32, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 47", x: 64.5, y: 49.4, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 48", x: 64.5, y: 53.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 49", x: 64.5, y: 57.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 64.5, y: 61.7, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 64.5, y: 67.59, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Sala 46", x: 64.5, y: 70.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 47", x: 64.5, y: 74.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 48", x: 64.5, y: 78.7, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 49", x: 64.5, y: 82.8, w: 6.1, h: 4.33, cor: "clara" },

//bloco A
    { nome: "corredor 7", x: 49, y: 43.89, w: 8.2, h: 44.45, cor: "escura" },
    { nome: "Lab. de Máquinas Elétricas", x: 49, y: 43.89, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Medidas Elétricas", x: 49, y: 48, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Física e Eletrônica", x: 49, y: 52.1, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática (superior)", x: 49, y: 56.2, w: 6.1, h: 4.4, cor: "clara" },
    { nome: "Fábrica de Inovações", x: 49, y: 60.4, w: 6.1, h: 4.4, cor: "clara" },
    { nome: "Lab. de química", x: 49, y: 67.59, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de biologia", x: 49, y: 71.66, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Desenho Técnico", x: 49, y: 75.76, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática", x: 49, y: 79.86, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática", x: 49, y: 83.95, w: 6.1, h: 4.3, cor: "clara" },

//locais entre cantina e refeitório
    { nome: "corredor 6", x: 26, y: 53.4, w: 15.68, h: 38.8, cor: "escura" },
    { nome: "Banheiro Feminino e Acessível", x: 27.52, y: 54.5, w: 3.5, h: 4.5, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 36.57, y: 54.5, w: 3.5, h: 4.5, cor: "clara" },
    { nome: "Cantina", x: 30.8, y: 54.5, w: 6.2, h: 4.5, cor: "clara" },
    { nome: "IFCast", x: 26, y: 68.4, w: 4.4, h: 3.4, cor: "clara" },
    { nome: "Incubadora", x: 26, y: 71.58, w: 4.4, h: 3.5, cor: "clara" },
    { nome: "Sala de línguas", x: 26, y: 74.77, w: 8, h: 2.78, cor: "clara" },
    { nome: "Robótica", x: 33.7, y: 74.77, w: 8, h: 2.78, cor: "clara" },
    { nome: "AEE/NAPNE", x: 37.3, y: 68.4, w: 4.4, h: 6.54, cor: "clara" },
    { nome: "Refeitório", x: 28.9, y: 80.8, w: 12.8, h: 11.4, cor: "clara" },

//áreas próximas ao hall e à escada para o primeiro andar
    { nome: "corredor 5", x: 0.5, y: 54.713, w: 18.5, h: 22.37, cor: "escura" },  
    { nome: "Banheiro Masculino e Acessível", x: 7.2, y:54.713, w: 3.5, h: 3, cor: "clara" },
    { nome: "E-Games", x: 10.5, y:54.713, w: 4, h: 3, cor: "clara" },
    { nome: "CAE", x: 14.3, y:54.713, w: 4.8, h: 3, cor: "clara" },
    { nome: "Serviço Social", x: 15.6, y:57.52, w: 3.5, h: 3, cor: "clara" },
    { nome: "Sala dos Professores", x: 15.6, y:60.05, w: 3.5, h: 3, cor: "clara" },
    { nome: "Protocolo com almoxarifado", x: 15.6, y:62.5, w: 3.5, h: 2.5, cor: "clara" },
    { nome: "DRCA/Controle Acadêmico", x: 15.6, y:67.4, w: 3.5, h: 2.5, cor: "clara" },
    { nome: "Fechada", x: 15.6, y:69.6, w: 3.5, h: 2.5, cor: "clara" },
    { nome: "Almoxarifado de Material de Expediente", x: 15.6, y:71.9, w: 3.5, h: 2.5, cor: "clara" },
    { nome: "Almoxarifado de Material de Expediente", x: 14.3, y:74.2, w: 4.8, h: 3, cor: "clara" },
    { nome: "Diretoria", x: 10.5, y:74.2, w: 4, h: 3, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 7.2, y:74.2, w: 3.5, h: 3, cor: "clara" },

//locais da biblioteca
    { nome: "corredor 4", x: 1.8, y: 50, w: 11.6, h: 4.65, cor: "escura" },
    { nome: "biblioteca", x: 1.8, y: 32, w: 11.6, h: 19.19, cor: "clara" },
    { nome: "sala de livros fora do sistema 1", x: 1.8, y: 32, w: 3.5, h: 3.1, cor: "clara" },
    { nome: "sala de livros fora do sistema 2", x: 1.8, y: 34.8, w: 3.5, h: 3, cor: "clara" },
    { nome: "sala de estudos", x: 1.8, y: 37.6, w: 3.5, h: 3, cor: "clara" },

];

function desenharSalasTerreo() {

    const wrapper = document.querySelector(".mapa-wrapper");

    if (!wrapper) return;

    let camada = document.querySelector(".camada-salas");

    if (!camada) {

        camada = document.createElement("div");
        camada.className = "camada-salas";

        wrapper.appendChild(camada);
    }

    salasTerreo.forEach(sala => {

        const div = document.createElement("div");

        div.className = `sala-mapa sala-${sala.cor}`;

        div.style.left = sala.x + "%";
        div.style.top = sala.y + "%";
        div.style.width = sala.w + "%";
        div.style.height = sala.h + "%";

        div.title = sala.nome;

        // z-index
        div.style.zIndex =
            sala.cor === "escura"
            ? "1"
            : "2";

        // Remover bordas específicas
        if (sala.semBorda) {

            if (sala.semBorda.includes("cima")) {
                div.style.borderTop = "none";
            }

            if (sala.semBorda.includes("direita")) {
                div.style.borderRight = "none";
            }

            if (sala.semBorda.includes("baixo")) {
                div.style.borderBottom = "none";
            }

            if (sala.semBorda.includes("esquerda")) {
                div.style.borderLeft = "none";
            }
        }

        camada.appendChild(div);

    });

}

document.addEventListener(
    "DOMContentLoaded",
    desenharSalasTerreo
);
