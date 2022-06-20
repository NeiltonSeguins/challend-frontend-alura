let produtos = JSON.parse(localStorage.getItem('listaNovosProdutos')) ?? [];
const listaProdutos = document.getElementById('produtos-lista');

const createProduto = (produto) => {
  const novoProduto = document.createElement('li');
  novoProduto.classList.add('produtos__card');
  novoProduto.innerHTML = `
                  
  <img
  class="produtos__img"
  src="${produto.img}"
  alt=""
/>
<p class="produtos__description">${produto.titulo}</p>
<span class="produtos__valor">R$ ${produto.preco}</span>
<a class="produtos__link" href="#">Ver produto</a>
  `;

  listaProdutos.appendChild(novoProduto); //Adiciona a TR ao TBODY
};

window.onload = function () {
  produtos.forEach(createProduto);
};
