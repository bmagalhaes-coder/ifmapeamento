const botoesTerreo = [
    { nome: "Banheiro F.\ne Acessível",                  x: 23.5,  y: 91, w: 16, h: 4.5, fs: 2.33 },
    { nome: "Banheiro M.\ne Acessível",                  x: 23.5,  y: 9.3,w: 16, h: 4.5, fs: 2.33 },
    { nome: "Copa",                                      x: 42.3,  y: 91, w: 16, h: 3, fs: 2.33 },
    { nome: "Sala dos\nFuncionários\ne Servidores",      x: 60.33, y: 91, w: 16, h: 6, fs: 2.33 },
    { nome: "DAP",                                       x: 72.5,  y: 75, w: 16, h: 3, fs: 2.33 },
    { nome: "Sala de\nVivência dos\nServidores",         x: 45.6,  y: 75, w: 16, h: 6, fs: 2.33 },
    { nome: "Coordenação\nSuperior",                     x: 75.6,  y: 60.6, w: 17,h: 4.5,fs: 2.33 },
    { nome: "CGP",                                       x: 75.6,  y: 50.7, w: 16,h: 3,fs: 2.33 },
    { nome: "CAPI/SCDP\nBalcão Digital",                 x: 75.6,  y: 42, w: 17.5,h: 4.5,fs: 2.33 },
    { nome: "CCTTII\nCEEC\nCCSAQ",                       x: 79.5,  y: 32.5, w: 11,h: 6,fs: 2.33 },
    { nome: "Arquivo\nCGP",                              x: 65,    y: 33.9, w: 12,h: 4.5,fs: 2.33 },
    { nome: "Coordenações",                              x: 73,    y: 22, w: 18, h: 3, fs: 2.33 },
    { nome: "CTIC",                                      x: 69.5,  y: 13, w: 16,h: 3,  fs: 2.33 },
    { nome: "Servidor\nCTIC",                            x: 77.4,    y: 5.2, w: 12,h: 4.5,fs: 2.33 },
    { nome: "DDE/DAP",                                   x: 42.5,  y: 9.3, w: 13, h: 3, fs: 2.33 },
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