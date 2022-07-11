function handleCarrinho() {
  const carrinho = document.querySelector('.carrinho');
  carrinho.classList.toggle('carrinho--ativo');
}

function fazerLogin() {
  const url = window.location.href;
  const telaLogin = 'https://challend-frontend-alura.vercel.app/login.html';
  if (url !== telaLogin) {
    window.location.assign(telaLogin);
  }
}

function calcularFrete() {
  const freteInput = document.querySelector('.frete__input');
  const valorInput = freteInput.value;
  const divFrete = document.querySelector('.frete__valor');

  let valorFrete = '';

  if (valorInput.match(/^(2|3|4)/)) {
    valorFrete = 'Frete = R$ 22,00';
  } else if (valorInput.match(/^(5|6|7)/)) {
    valorFrete = 'Frete = R$ 33,00';
  } else if (valorInput.match(/^(8|9)/)) {
    valorFrete = 'Frete = R$ 44,00';
  } else valorFrete = 'Frete grátis';

  divFrete.innerHTML = valorFrete;
}

var input = document.querySelector('.frete__input');
input.addEventListener('keydown', function (e) {
  console.log(e.code);
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    calcularFrete();
  }
});

const botaoCarrinho = document.querySelector('.button__carrinho');
const modal = document.querySelector('.modal');
const modalDark = document.querySelector('.modal__dark');
const carrinho = document.querySelector('.carrinho');
botaoCarrinho.addEventListener('click', () => {
  modal.classList.toggle('modal--ativo');
  modalDark.classList.toggle('modal__dark--ativo');
  carrinho.classList.toggle('carrinho--ativo');
});
modalDark.addEventListener('click', () => {
  modal.classList.toggle('modal--ativo');
  modalDark.classList.toggle('modal__dark--ativo');
});
