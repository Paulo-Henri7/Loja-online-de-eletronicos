let totalDeTudo = 0;
limpar();
function adicionar() {
    let quantidade = document.getElementById("quantidade").value;
    let item = document.getElementById("produto").value;
    if (quantidade == 0) {
        alert("ERRO não é possivel adicionar nada");
        return;
    }
    let preco = parseInt(fatiar(item, "R$", 1));
    let itemSozinho = fatiar(item, "-", 0)
    document.getElementById("quantidade").value = "";
    console.log(`Quantidade desejada: ${quantidade} Item desejado: ${item}`);
    let totalProduto = calculoProduto(quantidade, preco);
    totalDeTudo += totalProduto;
    console.log(totalProduto);
    console.log(`O total é :${totalDeTudo} `);

    //elemetos que aparecem na tela
    let listaDeProdutosCarrinho = document.getElementById("lista-produtos");
    listaDeProdutosCarrinho.innerHTML = listaDeProdutosCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${itemSozinho}<span class="texto-azul">R$${preco}</span>
        </section>`;
    let valorTotalNaTela = document.getElementById("valor-total");
    valorTotalNaTela.innerHTML = "R$" + totalDeTudo;
}

function calculoProduto(quantidade, preco) {
    return quantidade * preco
}

function fatiar(item, tag1, tag2) {
    let guarda;
    let retorno;
    guarda = item.split(tag1)
    return retorno = guarda[tag2]
}

function limpar() {
    totalDeTudo = 0;
    let valorTotalNaTela = document.getElementById("valor-total");
    valorTotalNaTela.innerHTML = "R$" + totalDeTudo;
    let listaDeProdutosCarrinho = document.getElementById("lista-produtos");
    listaDeProdutosCarrinho.innerHTML = "";
}