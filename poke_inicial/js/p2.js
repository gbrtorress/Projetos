const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

function esconderCartoesSlecionados() {
    const cartaSelecionada = document.querySelector(".selecionado")
    cartaSelecionada.classList.remove("selecionado");
}

function mostrarCartao(indicecartao) {
    cartoes[indicecartao].classList.add("selecionado")
}

btnAvancar.addEventListener("click", function() {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartoesSlecionados();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", function() {
    if (cartaoAtual === 0)return;

    esconderCartoesSlecionados();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});