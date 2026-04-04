const botoesTerreo = [
    { nome: "Sala de\nEstudos", x: 4.93,  y: 39.1, w: 2.8,  h: 1.6,  fs: 0.6, link: "-" },
    { nome: "Refeitório",       x: 35.9, y: 86.3, w: 10,  h: 3.5,   fs:1.7, link: "-" },
    { nome: "Biblioteca",       x: 8.8, y: 43,  w: 9.5,  h: 3.5,   fs:1.7, link: "-" },
    { nome: "AEE/NAPNE",        x: 15.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "SAA",              x: 25.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Serviço Social",   x: 35.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Psicóloga",        x: 45.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Setor Médico",     x: 55.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Banheiros Femininos", x: 65.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Banheiros Masculinos", x: 75.0, y: 50.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Banheiros Femininos Acessíveis", x: 85.0, y: 50.0, w: 10, h: 3.5, fs: 0.9, link: "-" }, // Ajuste as coordenadas
    { nome: "Banheiros Masculinos Acessíveis", x: 4.93, y: 70.0, w: 10, h: 3.5, fs: 0.9, link: "-" }, // Ajuste as coordenadas
    { nome: "Cine Teatro",      x: 15.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Camarim",          x: 25.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "IFCast",           x: 35.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Lanchonete",       x: 45.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Quadra",           x: 55.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Dispensa da Quadra", x: 65.0, y: 70.0, w: 10, h: 3.5, fs: 0.9, link: "-" }, // Ajuste as coordenadas
    { nome: "Dispensa da Cozinha", x: 75.0, y: 70.0, w: 10, h: 3.5, fs: 0.9, link: "-" }, // Ajuste as coordenadas
    { nome: "Espaço Infantil",  x: 85.0, y: 70.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Máquinas Elétricas", x: 4.93, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Medidas Elétricas", x: 15.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Física e Eletrônica", x: 25.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Informática (Nível Superior)", x: 35.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Fábrica de Inovações", x: 45.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Química", x: 55.0, y: 85.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Biologia", x: 65.0, y: 85.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Desenho Técnico", x: 75.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratórios de Informática", x: 85.0, y: 85.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 46",          x: 4.93, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 47",          x: 15.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 48",          x: 25.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 49",          x: 35.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 50",          x: 45.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 51",          x: 55.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 52",          x: 65.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Sala 53",          x: 75.0, y: 95.0, w: 10, h: 3.5, fs: 1.7, link: "-" }, // Ajuste as coordenadas
    { nome: "Laboratório de Produção Mecânica", x: 85.0, y: 95.0, w: 10, h: 3.5, fs: 0.8, link: "-" }, // Ajuste as coordenadas
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
        btn.style.width  = `${info.w}%`;
        btn.style.height = `${info.h}%`;
        btn.style.fontSize = `${info.fs}vw`;

        // ALTERADO: Agora chama a função mostrarInfoSala
        btn.onclick = () => {
            // Verifica se a função mostrarInfoSala existe (está no pesquisa.js)
            if (typeof mostrarInfoSala === 'function') {
                mostrarInfoSala(info.nome);
            } else {
                console.error("Função mostrarInfoSala não encontrada! Verifique se o pesquisa.js foi carregado.");
                alert("Erro: Sistema de pop-ups não carregado.");
            }
        };

        wrapper.appendChild(btn);
    });
});
