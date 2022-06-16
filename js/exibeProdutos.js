const sectionProdutos = document.querySelector('#produtos');

export function exibeProdutos(dados) {
  dados.map((dado) => {
    const categoriaContent = `
        <div class="produtos__header">
            <h2>${dado.categoria}</h2>
            <a href="./produtos-home.html">Ver tudo <i>&RightArrow;</i></a>
        </div>
    `;

    const divContent = document.createElement('div');
    divContent.classList.add('produtos__content');
    divContent.innerHTML = categoriaContent;

    const listaProdutos = document.createElement('ul');
    listaProdutos.classList.add('produtos__lista');

    dado.produtos.map((produto) => {
      const itemContent = `
            <img
                class="produtos__img"
                src="${produto.img_url}"
                alt="${produto.img_alt}"
            />
            <p class="produtos__description">${produto.titulo}</p>
            <span class="produtos__valor">R$ ${produto.preco},00</span>
            <a class="produtos__link" href="./produto.html?id=${produto.id}&&categoria=${produto.categoria}">Ver produto</a>
        `;

      const itemProduto = document.createElement('li');
      itemProduto.classList.add('produtos__card');

      if (produto.categoria === dado.categoria) {
        itemProduto.innerHTML = itemContent;
      }
      listaProdutos.appendChild(itemProduto);
      divContent.appendChild(listaProdutos);
    });

    sectionProdutos.appendChild(divContent);
  });
}
