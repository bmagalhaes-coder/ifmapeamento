// ==========================================================
// QUADRADINHOS (SALAS E CORREDORES) DO MAPA DO 1º ANDAR
// ==========================================================
// Mesma ideia do arquivo do térreo
// (quadradinhos_que_simbolizam_salas_e_corredores_terreo.js):
// cada item desenha um retângulo em cima do mapa.
//
// x/y = posição do CANTO SUPERIOR ESQUERDO do retângulo (em %
// da largura/altura do mapa), w/h = largura/altura (em %).
// cor: "clara" = sala (bege claro) | "escura" = corredor (bege escuro).
// "nome" só aparece como dica ao passar o mouse.
//
// Como o mapa do 1º andar gira -90° em telas grandes (veja
// dimensões_png_primeiro_andar.css), existem duas listas, igual
// acontece com os botões verdes:
// - "salasPrimeiroAndar"       -> celular (mapa na vertical)
// - "salasPrimeiroAndarGirado" -> tablet/PC (mapa deitado)

const salasPrimeiroAndar = [

    // corredores
    { nome: "corredor", x: 58, y: 2,  w: 30, h: 64, cor: "escura" },
    { nome: "corredor", x: 15, y: 71, w: 66, h: 23, cor: "escura" },

    // salas
    { nome: "Banheiro Feminino e Acessível",        x: 15.5,  y: 88.75, w: 16,   h: 4.5, cor: "clara" },
    { nome: "Banheiro Masculino e Acessível",       x: 15.5,  y: 7.05,  w: 16,   h: 4.5, cor: "clara" },
    { nome: "Copa",                                  x: 34.3,  y: 89.5,  w: 16,   h: 3,   cor: "clara" },
    { nome: "Sala dos Funcionários e Servidores",    x: 52.33, y: 88,    w: 16,   h: 6,   cor: "clara" },
    { nome: "DAP",                                   x: 64.5,  y: 73.5,  w: 16,   h: 3,   cor: "clara" },
    { nome: "Sala de Vivência dos Servidores",       x: 35.1,  y: 71.75, w: 21,   h: 6.5, cor: "clara" },
    { nome: "Coordenação Superior",                  x: 67.1,  y: 58.35, w: 17,   h: 4.5, cor: "clara" },
    { nome: "CGP",                                   x: 67.6,  y: 49.2,  w: 16,   h: 3,   cor: "clara" },
    { nome: "CAPI/SCDP Balcão Digital",              x: 66.85, y: 39.75, w: 17.5, h: 4.5, cor: "clara" },
    { nome: "CCTTII/CEEC/CCSAQ",                     x: 74,    y: 29.5,  w: 11,   h: 6,   cor: "clara" },
    { nome: "Arquivo CGP",                           x: 59,    y: 31.65, w: 12,   h: 4.5, cor: "clara" },
    { nome: "Coordenações",                          x: 64,    y: 20.5,  w: 18,   h: 3,   cor: "clara" },
    { nome: "CTIC",                                  x: 61.5,  y: 11.5,  w: 16,   h: 3,   cor: "clara" },
    { nome: "Servidor CTIC",                         x: 71.4,  y: 2.95,  w: 12,   h: 4.5, cor: "clara" },
    { nome: "DDE/DAP",                               x: 36,    y: 7.8,   w: 13,   h: 3,   cor: "clara" },
];

const salasPrimeiroAndarGirado = [

    // corredores
    { nome: "corredor", x: -34.3, y: 29.1, w: 113.8, h: 16.8, cor: "escura" },
    { nome: "corredor", x: 88.3,  y: 33,   w: 40.9,  h: 37,   cor: "escura" },

    // salas
    { nome: "Banheiro Feminino e Acessível",        x: 115,    y: 63.2,  w: 16,   h: 4,   cor: "clara" },
    { nome: "Banheiro Masculino e Acessível",       x: -30.5,  y: 63.2,  w: 16,   h: 4,   cor: "clara" },
    { nome: "Copa",                                  x: 117,    y: 53,    w: 12,   h: 3,   cor: "clara" },
    { nome: "Sala dos Funcionários e Servidores",    x: 114.5,  y: 41.55, w: 17,   h: 5.5, cor: "clara" },
    { nome: "DAP",                                   x: 89,     y: 36,    w: 12,   h: 3,   cor: "clara" },
    { nome: "Sala de Vivência dos Servidores",       x: 85.5,   y: 49.75, w: 17,   h: 5.5, cor: "clara" },
    { nome: "Coordenação Superior",                  x: 61,     y: 33.6,  w: 17,   h: 4,   cor: "clara" },
    { nome: "CGP",                                    x: 45.1,   y: 34.1,  w: 12,   h: 3,   cor: "clara" },
    { nome: "CAPI/SCDP Balcão Digital",              x: 29.17,  y: 32.85, w: 13,   h: 5.5, cor: "clara" },
    { nome: "CCTTII/CEEC/CCSAQ",                     x: 12.5,   y: 30.5,  w: 12,   h: 6,   cor: "clara" },
    { nome: "Arquivo CGP",                           x: 16.45,  y: 39.25, w: 10.5, h: 4.5, cor: "clara" },
    { nome: "Coordenações",                          x: -7.7,   y: 36,    w: 15.8, h: 3,   cor: "clara" },
    { nome: "CTIC",                                  x: -28.5,  y: 41.5,  w: 12,   h: 3,   cor: "clara" },
    { nome: "Servidor CTIC",                         x: -35.57, y: 33,    w: 12,   h: 4,   cor: "clara" },
    { nome: "DDE/DAP",                               x: -30,    y: 52.6,  w: 15,   h: 3,   cor: "clara" },
];

function desenharSalasPrimeiroAndar() {

    const wrapper = document.querySelector(".mapa-wrapper");

    if (!wrapper) return;

    // remove a camada antiga (se existir) para redesenhar do zero
    const antiga = wrapper.querySelector(".camada-salas");
    if (antiga) antiga.remove();

    const camada = document.createElement("div");
    camada.className = "camada-salas";
    wrapper.appendChild(camada);

    // verifica se tela é maior que 750px (mesmo limite usado
    // pelos botões verdes, em botões_verdes_primeiro_andar.js)
    const telaGrande = window.innerWidth > 750;

    const lista = telaGrande
        ? salasPrimeiroAndarGirado
        : salasPrimeiroAndar;

    lista.forEach(sala => {

        const div = document.createElement("div");

        div.className = `sala-mapa sala-${sala.cor}`;

        div.style.left = sala.x + "%";
        div.style.top = sala.y + "%";
        div.style.width = sala.w + "%";
        div.style.height = sala.h + "%";

        div.title = sala.nome;
        div.dataset.sala = sala.nome;
        div.style.zIndex =
            sala.cor === "escura"
            ? "1"
            : "2";

        camada.appendChild(div);

    });

}

document.addEventListener("DOMContentLoaded", desenharSalasPrimeiroAndar);

window.addEventListener("resize", desenharSalasPrimeiroAndar);
