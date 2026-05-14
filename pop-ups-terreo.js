const botoesparaverpopup = [
    { nome: "B",      x: 7.6, y: 43.0, w: 9.7, h: 3.5}, //biblioteca
    { nome: "Q",      x: 75.7, y: 9.9, w: 12.7, h: 4.5}, //quadra, dispensa, banheiros com chuveiros e piscina
    { nome: "c",      x: 7.6, y: 91, w: 9.7, h: 3.5}, //cine teatro e camarim
    { nome: "H",      x: 7.44, y: 83.15, w: 6, h: 1}, //salas proximas ao hall e a escada que leva ao segundo andar
    { nome: "C",      x: 29.9, y: 76.54, w: 6.7, h: 1.8}, //cantina até sala de lingua e de robotica
    { nome: "R",      x: 35.31, y: 86.7, w: 10.0, h: 3.5}, //refeitorio
    { nome: "AB",     x: 60.7, y: 66.6, w: 24, h: 45.6}, //bloco A e B
    { nome: "CD",     x: 89.5, y: 66.5, w: 23, h: 34}, //bloco C e D
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.mapa-container');
    const img = container.querySelector('.mapa');

    // Cria o wrapper para conter a imagem e os botões
    const wrapper = document.createElement('div');
    wrapper.className = 'mapa-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    botoesparaverpopup.forEach(info => {
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