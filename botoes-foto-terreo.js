const botoesTerreo = [
    { nome: "Sala de\nEstudos", x: 4.93,  y: 39.1, w: 2.8,  h: 1.6,  fs: 0.6, link: "-" },
    { nome: "Refeitório",       x: 35.9, y: 86.3, w: 10,  h: 3.5,   fs:1.7, link: "-" },
    { nome: "Biblioteca",       x: 8.8, y: 43,  w: 9.5,  h: 3.5,   fs:1.7, link: "-" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.mapa-container');
    const img = container.querySelector('.mapa');

    // Cria um wrapper que vai cobrir exatamente a imagem
    const wrapper = document.createElement('div');
    wrapper.className = 'mapa-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    botoesTerreo.forEach(info => {
        const btn = document.createElement('button');
        btn.className = 'ponto-mapa';
        btn.innerText = info.nome;

        btn.style.left   = `${info.x}%`;
        btn.style.top    = `${info.y}%`;
        btn.style.width  = `${info.w}%`;   // % da largura do wrapper (= imagem)
        btn.style.height = `${info.h}%`;   // % da altura do wrapper (= imagem)
        btn.style.fontSize = `${info.fs}vw`; // vw escala com a tela

        btn.onclick = () => {
            if (info.link) window.location.href = info.link;
        };

        wrapper.appendChild(btn);
    });
});