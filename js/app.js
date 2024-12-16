let resultadoGlobal = 0;
listaVazia();
totalvazio();

function adicionar() {
    addProduto();
}

function limpar() {
    resultadoGlobal = 0;
    totalvazio();
    listaVazia();
}

function addProduto() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valor = parseInt(produto.split("R$")[1]);
    let qtde = (document.getElementById("quantidade"));
    let quantidade = qtde.value;
    let resultado = valor * quantidade;
    resultadoGlobal = resultadoGlobal + resultado;
    quantidade == 0 ? alert("Erro, nenhum produto selecionado") :
        listaProdutos(quantidade, nomeProduto, valor);
    selecionaTotal(resultadoGlobal);
    document.getElementById("quantidade").value = 0;
}

function listaProdutos(quantidade, nomeProduto, valor) {
    addcarrinho = document.getElementById("lista-produtos");
    addcarrinho.innerHTML = addcarrinho.innerHTML + (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${valor}</span>
        </section>`);
}

function listaVazia() {
    addcarrinho = document.getElementById("lista-produtos");

    addcarrinho.innerHTML = addcarrinho = document.getElementById("lista-produtos");
    addcarrinho.innerHTML = ("");
}

function selecionaTotal(resultadoGlobal) {
    textoTotal = document.querySelector("p");
    textoTotal.innerHTML = (`Total: R$${resultadoGlobal}`);
}

function totalvazio() {
    textoTotal = document.querySelector("p");
    textoTotal.innerHTML = (`<span class="texto-azul" ">R$0</span>`)
}