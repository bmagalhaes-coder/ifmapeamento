const botoesTerreo = [
    // x: da esquerda pro lado, y: do topo pra baixo, w: largura, h: altura, fs: tamanho da fonte (em pixels)
    { nome: "Sala de\nEstudos", x: 6.7, y: 35.5, w: 18, h: 10, fs: 3, link: "-" },
    { nome: "Refeitório", x: 36.5, y: 76.7, w: 70, h: 25, fs: 12, link: "-" },
    { nome: "Biblioteca", x: 10.48, y: 39, w: 70, h: 25, fs: 12, link: "-" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.mapa-container');

    botoesTerreo.forEach(info => {
        const btn = document.createElement('button');
        btn.className = 'ponto-mapa';
        btn.innerText = info.nome;

        // Posicionamento
        btn.style.left = `${info.x}%`;
        btn.style.top = `${info.y}%`;

        // Ajuste de Tamanho do Botão (Largura e Altura)
        if (info.w) btn.style.width = `${info.w}px`;
        if (info.h) btn.style.height = `${info.h}px`;

        // --- NOVO: Ajuste do Tamanho da Letra ---
        if (info.fs) {
            btn.style.fontSize = `${info.fs}px`;
        } else {
            btn.style.fontSize = `12px`; // Tamanho padrão caso esqueça de colocar no JS
        }

        btn.onclick = () => {
            if (info.link) window.location.href = info.link;
        };

        container.appendChild(btn);
    });
});