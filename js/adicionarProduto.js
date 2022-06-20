// import { dados } from '../assets/api/database';


var vizu = document.getElementById('vizualizacao');
var selectImagem = document.getElementById('select');
var formulario = document.querySelector('[data-form]');
var camposForm = document.querySelectorAll('.valida');


function ExibirMensagemSucesso() {
  const msg = document.getElementById('mensagem');

  msg.innerHTML = "Cadastrado com sucesso";
  msg.classList.add('mansagemONSucesso');
  setTimeout(() => {
    msg.classList.remove('mansagemONSucesso');
    msg.innerHTML = "";
  }, 1500);
}
function ExibirMensagemErro() {
  const msg = document.getElementById('mensagem');

  msg.innerHTML = "Falta preencher algum campo";
  msg.classList.add('mansagemONErro');
  setTimeout(() => {
    msg.classList.remove('mansagemONErro');
    msg.innerHTML = "";
  }, 1500);
}

document.getElementById('select').addEventListener('change', (e) => {
  let reader = new FileReader();

  reader.onload = () => {
    vizu.src = reader.result;
  }
  reader.readAsDataURL(selectImagem.files[0]);
})

function carregar() {
  conteudo = {
    categoria: document.getElementById('categoria').value,
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value,
    preco: document.getElementById('preco').value,
    img: vizu.src
  }

}


function limparCampos() {
  document.getElementById('categoria').value = "";
  document.getElementById('titulo').value = "";
  document.getElementById('descricao').value = "";
  document.getElementById('preco').value = "";
  vizu.src = "assets/img/adicionar.png";
}

document.getElementById("enviar").addEventListener('click', (e) => {
  e.preventDefault();
    carregar();
   
      if(formulario.reportValidity()){
        adicionar(conteudo);
        ExibirMensagemSucesso();
      }else{
        ExibirMensagemErro();
      }
   limparCampos();
})

var lista = [];
var itemList = localStorage.getItem('listaNovosProdutos')
  ? JSON.parse(localStorage.getItem('listaNovosProdutos'))
  : [];

function adicionar(dados) {

  itemList.push(dados);

  localStorage.setItem('listaNovosProdutos', JSON.stringify(itemList));

}



