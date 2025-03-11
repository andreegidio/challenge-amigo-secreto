//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let posicaoSoteada = 0;

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    let listaAmigos = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    if (amigo === '') {
        alert('Digite o nome do amigo!');
        return;
    }
    if (amigo.length < 3) {
        alert('Digite o nome completo do amigo!');
        return;
    }
    item.textContent = amigo;
    listaAmigos.appendChild(item);
    limparCampo();
}

function gerarPosicaoAleatorio(posicaoMaximo) {
    let posicao = parseInt(Math.random() * posicaoMaximo + 1);
    console.log('Sorteio:');
    console.log(posicao);
    if (posicao > posicaoMaximo) {
        return gerarPosicaoAleatorio(posicaoMaximo);
    }
    return posicao;
}

function sortearAmigo() {
    let resultadoElement = document.getElementById('resultado');
    let itens = listaAmigos.children;  

    posicaoSoteada = gerarPosicaoAleatorio(itens.length) - 1;

    console.log('Sorteio Final:');   
    console.log(posicaoSoteada);

    let resultado = itens[posicaoSoteada].textContent;

    resultadoElement.textContent = resultado;

    console.log(resultado);
}
