// Aplicar tema salvo ao abrir qualquer página
document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("modoEscuro") === "ativo") {
        ativarModoEscuro();
    }

    const btn = document.getElementById("btnModoEscuro");

    // Estilo do botão
    if (btn) {
        btn.style.width = "180px";
        btn.style.height = "45px";
        btn.style.backgroundColor = "#39d400";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "200px";
        btn.style.fontSize = "15px";
        btn.style.fontWeight = "bold";
        btn.style.cursor = "pointer";

        // Efeito ao passar o mouse
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#2fb300";
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "#39d400";
            btn.style.transform = "scale(1)";
        });

        btn.addEventListener("click", () => {

            if (localStorage.getItem("modoEscuro") === "ativo") {
                localStorage.setItem("modoEscuro", "desativado");
                location.reload();
            } else {
                localStorage.setItem("modoEscuro", "ativo");
                ativarModoEscuro();
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