const botoesTerreo = [
    { nome: "Banheiro F.\ne Acessível",                  x: 23.5, y: 91, w: 16, h: 5, fs: 2.33 },
    { nome: "Banheiro M.\ne Acessível",                  x: 23.5, y: 9.3, w: 16, h: 5, fs: 2.33 },
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