// ==========================================================
// CONTROLE DO "GIRO" DO MAPA DO 1º ANDAR AO ALARGAR A TELA
// ==========================================================
// Quem realmente gira a imagem é a classe CSS ".rotacionar"
// (veja dimensões_png_primeiro_andar.css, dentro do
// @media (min-width: 768px)) — ela já fica fixa no <img> do
// primeiro_andar.html e o navegador aplica o giro sozinho
// quando a tela é larga o suficiente.
//
// Este arquivo só acompanha isso adicionando/removendo a classe
// "virada" no mapa conforme o tamanho da tela, para o caso de
// no futuro vocês quiserem estilizar algo de forma diferente
// especificamente quando o mapa está virado (bastaria criar uma
// regra ".mapa.virada" no CSS - hoje nenhuma regra usa essa
// classe, então ela não muda nada visualmente ainda).

function atualizarGiroMapa() {

    const img = document.querySelector(".mapa-container .mapa");

    if (!img) return;

    const telaGrande = window.innerWidth > 750;

    if (telaGrande) {
        img.classList.add("virada");
    } else {
        img.classList.remove("virada");
    }
}

document.addEventListener("DOMContentLoaded", atualizarGiroMapa);

window.addEventListener("resize", atualizarGiroMapa);
