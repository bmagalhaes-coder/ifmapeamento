// destaque_quadradinho_sala.js
(function() {
    'use strict';

    // Lista de nomes de salas destacadas
    let destaques = [];

    // Referência ao botão "Voltar ao normal"
    let btnVoltar = null;

    // ------------------------------------------------------------
    // Cria o botão "Voltar ao normal" (fixo no canto esquerdo)
    // ------------------------------------------------------------
    function criarBotaoVoltar() {
        if (btnVoltar) return;
        btnVoltar = document.createElement('button');
        btnVoltar.id = 'btnVoltarNormal';
        btnVoltar.textContent = '← Voltar ao normal';
        btnVoltar.style.position = 'fixed';
        btnVoltar.style.top = '15px';
        btnVoltar.style.left = '15px';
        btnVoltar.style.zIndex = '1000';
        btnVoltar.style.padding = '10px 18px';
        btnVoltar.style.border = 'none';
        btnVoltar.style.borderRadius = '30px';
        btnVoltar.style.backgroundColor = '#6a0dad';
        btnVoltar.style.color = 'white';
        btnVoltar.style.fontWeight = 'bold';
        btnVoltar.style.cursor = 'pointer';
        btnVoltar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        btnVoltar.style.transition = 'all 0.3s ease';
        btnVoltar.style.display = 'none';
        btnVoltar.addEventListener('click', limparDestaques);
        document.body.appendChild(btnVoltar);
    }

    // ------------------------------------------------------------
    // Aplica / remove a classe de destaque em todos os quadradinhos
    // ------------------------------------------------------------
    function aplicarDestaques() {
        const quadradinhos = document.querySelectorAll('.sala-mapa[data-sala]');
        quadradinhos.forEach(function(el) {
            const nomeSala = el.getAttribute('data-sala');
            if (destaques.includes(nomeSala)) {
                el.classList.add('destaque-roxo');
            } else {
                el.classList.remove('destaque-roxo');
            }
        });
        atualizarVisibilidadeBotao();
    }

    // ------------------------------------------------------------
    // Mostra/esconde o botão "Voltar ao normal"
    // ------------------------------------------------------------
    function atualizarVisibilidadeBotao() {
        if (!btnVoltar) return;
        btnVoltar.style.display = (destaques.length > 0) ? 'block' : 'none';
    }

    // ------------------------------------------------------------
    // Função pública: destacar uma sala
    // ------------------------------------------------------------
    function destacarSala(nomeSala) {
        if (!nomeSala) return;
        if (!destaques.includes(nomeSala)) {
            destaques.push(nomeSala);
            aplicarDestaques();
        }
        // Fecha todos os pop-ups abertos
        fecharTodosPopups();
    }

    // ------------------------------------------------------------
    // Função pública: limpar todos os destaques
    // ------------------------------------------------------------
    function limparDestaques() {
        destaques = [];
        aplicarDestaques();
    }

    // ------------------------------------------------------------
    // Fecha modais e popups do térreo
    // ------------------------------------------------------------
    function fecharTodosPopups() {
        // Fecha o modal principal (pesquisa.js)
        const modal = document.querySelector('.modal');
        if (modal) modal.style.display = 'none';
        // Fecha o popup do térreo (foto do bloco)
        const popupMapa = document.querySelector('.popup-mapa.ativo');
        if (popupMapa) popupMapa.classList.remove('ativo');
    }

    // ------------------------------------------------------------
    // Função pública para adicionar o botão "Destacar" dentro do modal
    // (deve ser chamada a partir do pesquisa.js após criar o modal)
    // ------------------------------------------------------------
    function adicionarBotaoDestacarAoModal(modalBody, nomeSala) {
        if (!modalBody) return;
        // Evita duplicar o botão
        if (modalBody.querySelector('.btn-destacar-mapa')) return;

        const container = document.createElement('div');
        container.style.marginTop = '15px';
        container.style.textAlign = 'center';

        const btn = document.createElement('button');
        btn.className = 'btn-destacar-mapa';
        btn.textContent = '🔦 Destacar no mapa';
        btn.style.backgroundColor = '#6a0dad';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.padding = '10px 20px';
        btn.style.fontWeight = 'bold';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'background 0.2s';
        btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        btn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#7b1fa2';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#6a0dad';
        });
        btn.addEventListener('click', function() {
            destacarSala(nomeSala);
        });

        container.appendChild(btn);
        modalBody.appendChild(container);
    }

    // ------------------------------------------------------------
    // Inicialização
    // ------------------------------------------------------------
    function init() {
        criarBotaoVoltar();
        aplicarDestaques(); // garante que nenhum destaque fique ativo
        // Expõe funções globalmente
        window.destaqueSala = destacarSala;
        window.limparDestaques = limparDestaques;
        window.adicionarBotaoDestacarAoModal = adicionarBotaoDestacarAoModal;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
