// ==========================================================
// QUADRADINHOS (SALAS E CORREDORES) DENTRO DOS POP-UPS DOS
// RECORTES DO TÉRREO (biblioteca, quadra, cineteatro, hall,
// cantina, refeitório, blocos A/B e C/D)
// ==========================================================
// Mesma lógica dos quadradinhos do mapa grande: cada item desenha
// um retângulo em cima da FOTO que abre no pop-up daquele recorte.
// x/y = canto superior esquerdo do quadradinho (em % da largura/
// altura da FOTO), w/h = largura/altura (em %).
// cor: "clara" = sala | "escura" = corredor.
// Ajuste x, y, w, h e cor de cada quadradinho depois, até encaixar
// em cima da sala/corredor certo.

const quadradinhosDosPopups = {

    "imagens/biblioteca.png": [
{ nome: "biblioteca", x: 1.8, y: 32, w: 11.6, h: 19.19, cor: "clara", semBorda: "direita" },
    ],

    "imagens/quadra.png": [
    ],

    "imagens/cineteatro.png": [
    ],

    "imagens/hall.png": [
    ],

    "imagens/cantina.png": [
    ],

    "imagens/refeitorio.png": [
    ],

    "imagens/blocoAeB.png": [
    ],

    "imagens/blocoCeD.png": [
    ],

};

// ======================================
// DESENHA OS QUADRADINHOS DA FOTO ABERTA NO POP-UP
// ======================================
function desenharQuadradinhosDoPopup(imagemSrc) {

    const popupConteudo = document.querySelector(".popup-conteudo");
    if (!popupConteudo) return;

    // remove os quadradinhos da foto anterior
    const antiga = popupConteudo.querySelector(".camada-salas-popup");
    if (antiga) antiga.remove();

    const lista = quadradinhosDosPopups[imagemSrc];
    if (!lista || lista.length === 0) return;

    const camada = document.createElement("div");
    camada.className = "camada-salas-popup";
    camada.style.position = "absolute";
    camada.style.inset = "0";
    camada.style.zIndex = "5"; // fica acima da foto, abaixo dos botões-popup (z-index 10000)
    camada.style.pointerEvents = "none";

    lista.forEach(sala => {

        const div = document.createElement("div");

        div.style.position = "absolute";
        div.style.boxSizing = "border-box";
        div.style.pointerEvents = "none";
        div.style.left = sala.x + "%";
        div.style.top = sala.y + "%";
        div.style.width = sala.w + "%";
        div.style.height = sala.h + "%";
        div.title = sala.nome || "";

        if (sala.cor === "escura") {
            div.style.background = "#e7e693";
            div.style.border = "none";
        } else {
            div.style.background = "#faf8c0";
            div.style.border = "1px solid #111";
        }

        camada.appendChild(div);

    });

    popupConteudo.appendChild(camada);

}

// ======================================
// LIGA O DESENHO AO CLIQUE DE CADA BOTÃO VERDE DO TÉRREO
// (precisa ser carregado DEPOIS de botões_verdes_terreo.js)
// ======================================
document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".ponto-mapa-terreo");

    botoes.forEach((btn, i) => {

        const info = botoesparaverpopup[i];
        if (!info) return;

        btn.addEventListener("click", () => {
            desenharQuadradinhosDoPopup(info.imagem);
        });

    });

});