document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnModoEscuro");

    // Aplica o tema salvo (se a última visita tiver sido no modo escuro)
    if (localStorage.getItem("modoEscuro") === "ativo") {
        ativarModoEscuro();
        if (btn) btn.classList.add("ativo");
    }

    if (btn) {
        btn.addEventListener("click", () => {

            if (localStorage.getItem("modoEscuro") === "ativo") {
                localStorage.setItem("modoEscuro", "desativado");
                location.reload();
            } else {
                localStorage.setItem("modoEscuro", "ativo");
                ativarModoEscuro();
                btn.classList.add("ativo");
            }

        });
    }

});

function ativarModoEscuro() {
    document.body.classList.add("modo-escuro");
    document.querySelectorAll(".pesquisa").forEach(el => {
        el.style.backgroundColor = "#1e1e1e";
    });
}