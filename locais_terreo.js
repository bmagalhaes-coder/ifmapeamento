const salasTerreo = [
//quadra
    { nome: "corredor11", x: 75.3, y: 21, w: 2.2, h: 44, cor: "escura" },
    { nome: "corredor12", x: 26.5, y: 3, w: 28, h: 15, cor: "escura" },
    { nome: "corredor13", x: 54, y: 4.9, w: 10, h: 12, cor: "escura" },
    { nome: "corredor14", x: 64, y: 0.1, w: 20.9, h: 21, cor: "escura" },
    { nome: "piscina", x: 30.4, y: 6, w: 20, h: 9, cor: "clara" },
    { nome: "dispensa da quadra", x: 54.5, y: 5.8, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro feminino com chuveiro", x: 54.5, y: 9.05, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "banheiro masculino com chuveiro", x: 54.5, y: 12.2, w: 9.3, h: 3.5, cor: "clara" },
    { nome: "quadra", x: 66.8, y: 0.1, w: 18, h: 18.7, cor: "clara" },
//bloco D
    { nome: "corredor10", x: 91.3, y: 51.6, w: 8, h: 30.1, cor: "escura" },
    { nome: "blocoD", x: 93.2, y: 51.6, w: 6.1, h: 30.1, cor: "clara" },

//bloco C
    { nome: "corredor9", x: 78.8, y: 49.66, w: 8, h: 33.9, cor: "escura" },
    { nome: "lab. de Produção Mecânica", x: 80.7, y: 49.66, w: 6.1, h: 4.5, cor: "clara" },
    { nome: "SAA", x: 80.7, y: 53.8, w: 6.1, h: 4.5, cor: "clara" },
    { nome: "Lab. de Soldagem", x: 80.7, y: 57.9, w: 6.1, h: 4.5, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível", x: 80.7, y: 62, w: 6.1, h: 2.8, cor: "clara" },
    { nome: "Banheiro Feminino e Acessível", x: 80.7, y: 67.5, w: 6.1, h: 2.8, cor: "clara" },
    { nome: "Sala58", x: 80.7, y: 70, w: 6.1, h: 4.5, cor: "clara" },





//bloco B

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
