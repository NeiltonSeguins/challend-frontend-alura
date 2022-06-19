const produtosDiv = document.querySelector('#produtos-page');
import { dados } from '../assets/api/database.js';

function paginaProduto(dados) {
  const url = window.location.search;
  const urlParam = new URLSearchParams(url);

  const id = parseInt(urlParam.get('id'));
  const categoria = urlParam.get('categoria');
  console.log(id, categoria);

  const tituloSecao = `
          <div class="produtos__header">
            <h2>Produtos similares</h2>
          </div>
        `;

  const produtosSimilares = document.createElement('div');
  produtosSimilares.classList.add('produtos__content', 'produtos');
  produtosSimilares.innerHTML = tituloSecao;

  const listaProdutos = document.createElement('ul');
  listaProdutos.classList.add('produtos__lista');

  dados.forEach((dado) => {
    dado.produtos.map((produto) => {
      if (produto.categoria === categoria) {
        montaHtmlDoProduto(produto, id);
        console.log(produto);

        const itemContent = `
          <img
            class="produtos__img"
            src="${produto.img_url}"
            alt="${produto.img_alt}"
          />
          <p class="produtos__description">${produto.titulo}</p>
          <span class="produtos__valor">R$ ${produto.preco},00</span>
          <a class="produtos__link" href="./produtos.html?id=${produto.id}&categoria=${produto.categoria}">Ver produto</a>
        `;
        const itemProduto = document.createElement('li');
        itemProduto.classList.add('produtos__card');
        itemProduto.innerHTML = itemContent;
        listaProdutos.appendChild(itemProduto);
      }
      produtosDiv.appendChild(produtosSimilares);
      produtosSimilares.appendChild(listaProdutos);
    });
  });
}

function montaHtmlDoProduto(produto, id) {
  if (produto.id === id) {
    const divTag = document.createElement('div');
    divTag.classList.add('produtos__page--align');

    const divContent = `
      <img
        class="produtos__page--img"
        src="${produto.img_url}"
        alt="${produto.img_alt}"
      />
      <div class="produtos__page--container">
        <h2>${produto.titulo}</h2>
        <span>R$ ${produto.preco},00</span>
        <p>${produto.descricao}</p>
      </div>
  `;

    divTag.innerHTML = divContent;
    produtosDiv.appendChild(divTag);
  }
}

paginaProduto(dados);
