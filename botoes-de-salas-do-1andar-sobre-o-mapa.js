const botoesGirado = [
    { nome: "Banheiro F.\ne Acessível", x: 123, y: 65.2, w: 16, h: 4, fs: 0.8 },
    { nome: "Banheiro M.\ne Acessível", x: -22.5, y: 65.2, w: 16, h: 4, fs: 0.8 },
    { nome: "Copa", x: 123, y: 54.5, w: 12, h: 3, fs: 0.8 },
    { nome: "Sala dos\nFuncionários\ne Servidores", x: 123, y: 44.3, w: 17, h: 6, fs: 0.8 },
    { nome: "DAP", x: 95, y: 37.5, w: 12, h: 3, fs: 0.8 },
    { nome: "Sala de\nVivência dos\nServidores", x: 94, y: 52.5, w: 15, h: 5.5, fs: 0.8 },
    { nome: "Coordenação\nSuperior", x: 69.5, y: 35.6, w: 17, h: 4, fs: 0.8 },
    { nome: "CGP", x: 51.1, y: 35.6, w: 12, h: 3, fs: 0.8 },
    { nome: "CAPI/SCDP\nBalcão\nDigital", x: 35.67, y: 35.6, w: 13, h: 5.5, fs: 0.8 },
    { nome: "CCTTII\nCEEC\nCCSAQ", x: 18.5, y: 33.5, w: 12, h: 6, fs: 0.8 },
    { nome: "Arquivo\nCGP", x: 21.7, y: 41.5, w: 10.5, h: 4.5, fs: 0.8 },
    { nome: "Coordenações", x: 0.2, y: 37.5, w: 15.8, h: 3, fs: 0.8 },
    { nome: "CTIC", x: -22.5, y: 43, w: 12, h: 3, fs: 0.8 },
    { nome: "Servidor\nCTIC", x: -29.57, y: 35, w: 12, h: 4, fs: 0.8 },
    { nome: "DDE/DAP", x: -22.5, y: 54.1, w: 15, h: 3, fs: 0.8 },
];

const botoesTerreo = [
    { nome: "Banheiro F.\ne Acessível", x: 23.5, y: 91, w: 16, h: 4.5, fs: 2.3 },
    { nome: "Banheiro M.\ne Acessível", x: 23.5, y: 9.3, w: 16, h: 4.5, fs: 2.3 },
    { nome: "Copa", x: 42.3, y: 91, w: 16, h: 3, fs: 2.3 },
    { nome: "Sala dos\nFuncionários\ne Servidores", x: 60.33, y: 91, w: 16, h: 6, fs: 2.3 },
    { nome: "DAP", x: 72.5, y: 75, w: 16, h: 3, fs: 2.3 },
    { nome: "Sala de\nVivência dos\nServidores", x: 45.6, y: 75, w: 16, h: 6, fs: 2.3 },
    { nome: "Coordenação\nSuperior", x: 75.6, y: 60.6, w: 17, h: 4.5, fs: 2.3 },
    { nome: "CGP", x: 75.6, y: 50.7, w: 16, h: 3, fs: 2 },
    { nome: "CAPI/SCDP\nBalcão Digital", x: 75.6, y: 42, w: 17.5, h: 4.5, fs: 2.3 },
    { nome: "CCTTII\nCEEC\nCCSAQ", x: 79.5, y: 32.5, w: 11, h: 6, fs: 2.3 },
    { nome: "Arquivo\nCGP", x: 65, y: 33.9, w: 12, h: 4.5, fs: 2.3 },
    { nome: "Coordenações", x: 73, y: 22, w: 18, h: 3, fs: 2 },
    { nome: "CTIC", x: 69.5, y: 13, w: 16, h: 3, fs: 2 },
    { nome: "Servidor\nCTIC", x: 77.4, y: 5.2, w: 12, h: 4.5, fs: 2.3 },
    { nome: "DDE/DAP", x: 42.5, y: 9.3, w: 13, h: 3, fs: 2.3 },
];

function renderBotoes(wrapper, img) {

    // remove botões antigos
    wrapper.querySelectorAll(".ponto-mapa").forEach(botao => {
        botao.remove();
    });

    // verifica se tela é maior que 750px
    const telaGrande = window.innerWidth > 750;

    // gira automaticamente
    if (telaGrande) {
        img.classList.add("virada");
    } else {
        img.classList.remove("virada");
    }

    // escolhe quais botões mostrar
    const lista = telaGrande
        ? botoesGirado
        : botoesTerreo;

    // cria os botões
    lista.forEach(info => {

        const btn = document.createElement("button");

        btn.className = "ponto-mapa";

        btn.innerText = info.nome;

        btn.style.left = `${info.x}%`;
        btn.style.top = `${info.y}%`;
        btn.style.width = `${info.w}%`;
        btn.style.height = `${info.h}%`;
        btn.style.fontSize = `${info.fs}vw`;

        btn.onclick = () => {

            if (typeof mostrarInfoSala === "function") {
                mostrarInfoSala(info.nome);
            }

        };

        wrapper.appendChild(btn);

    });

}

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".mapa-container");

    const img = container.querySelector(".mapa");

    const wrapper = container.querySelector(".mapa-wrapper");

    // render inicial
    renderBotoes(wrapper, img);

    // atualiza ao redimensionar tela
    window.addEventListener("resize", () => {
        renderBotoes(wrapper, img);
    });

});