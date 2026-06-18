const salasTerreo = [
//quadra
    { nome: "corredor 11", x: 75.3, y: 21, w: 2.2, h: 44, cor: "escura" },
    { nome: "corredor 12", x: 26.5, y: 3, w: 28, h: 15, cor: "escura" },
    { nome: "corredor 13", x: 54, y: 4.9, w: 10, h: 12, cor: "escura" },
    { nome: "corredor 14", x: 64, y: 0.1, w: 20.9, h: 21, cor: "escura" },
    { nome: "piscina", x: 30.4, y: 6, w: 20, h: 9, cor: "clara" },
    { nome: "dispensa da quadra", x: 54.5, y: 5.8, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro feminino com chuveiro", x: 54.5, y: 9.05, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro masculino com chuveiro", x: 54.5, y: 12.2, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "quadra", x: 66.8, y: 0.1, w: 18, h: 18.7, cor: "clara" },
//bloco D
    { nome: "corredor 10", x: 91.5, y: 51.6, w: 8, h: 30.1, cor: "escura" },
    { nome: "blocoD", x: 93.4, y: 51.6, w: 6.1, h: 30.1, cor: "clara" },

//bloco C
    { nome: "corredor 9", x: 78.8, y: 49.64, w: 8, h: 33.35, cor: "escura" },
    { nome: "lab. de Produção Mecânica", x: 80.7, y: 49.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "SAA", x: 80.7, y: 53.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Soldagem", x: 80.7, y: 57.7, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 80.7, y: 61.8, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 80.7, y: 67.59, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Sala 58", x: 80.7, y: 79, w: 6.1, h: 4.3, cor: "escura" },
    { nome: "Sala 59", x: 80.7, y: 74.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 60", x: 80.7, y: 78.8, w: 6.1, h: 4.3, cor: "clara" },
//bloco B
    { nome: "corredor 8", x: 64.5, y: 45.32, w: 8, h: 41.85, cor: "escura" },
    { nome: "Sala 46", x: 64.5, y: 45.32, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 47", x: 64.5, y: 49.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 48", x: 64.5, y: 53.7, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 49", x: 64.5, y: 57.8, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 64.5, y: 61.8, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 64.5, y: 67.4, w: 6.1, h: 3.2, cor: "clara" },
    { nome: "Sala 46", x: 64.5, y: 70.5, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 47", x: 64.5, y: 74.6, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 48", x: 64.5, y: 78.8, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Sala 49", x: 64.5, y: 83, w: 6.1, h: 4.3, cor: "clara" },
//bloco A
    { nome: "corredor 7", x: 49, y: 43.89, w: 8, h: 44.5, cor: "escura" },
    { nome: "Lab. de Máquinas Elétricas", x: 49, y: 43.89, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Medidas Elétricas", x: 49, y: 48.07, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Física e Eletrônica", x: 49, y: 52.25, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática (superior)", x: 49, y: 56.43, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Fábrica de Inovações", x: 49, y: 60.61, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de química", x: 49, y: 67.4, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de biologia", x: 49, y: 71.58, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Desenho Técnico", x: 49, y: 75.76, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática", x: 49, y: 79.94, w: 6.1, h: 4.3, cor: "clara" },
    { nome: "Lab. de Informática", x: 49, y: 84.12, w: 6.1, h: 4.3, cor: "clara" },
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
