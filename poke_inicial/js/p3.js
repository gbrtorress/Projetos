const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartoesSelecionados() {
    const cartaSelecionada = document.querySelector(".selecionado");
    cartaSelecionada.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length -1)return;

    esconderCartoesSelecionados();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
  
    esconderCartoesSelecionados();
  
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
  });