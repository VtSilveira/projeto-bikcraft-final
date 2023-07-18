/* deixa o efeito de hover sempre ativo quando na página selecionada ------------- */
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href; // pega a url atual
  const href = link.href; // o link atual do forEach

  if (url.includes(href)) { // se forem iguais, i.e. está na página selecionada
    link.classList.add("ativo"); // adiciona a classe 'ativo' para a tag <a>
  }
}

links.forEach(ativarLink); // chamada da funcao para cada elemento '.header-menu a'
/* ------------------------------------------------------------------------------- */
/* ativar items do orcamento ----------------------------------------------------- */
const parametros = new URLSearchParams(location.search); // pega os parametros da url

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro); // como o parametro é igual ao id, é fácil usar o getElementById 
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
/* ------------------------------------------------------------------------------- */
/* perguntas frequentes ---------------------------------------------------------- */
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  pergunta.setAttribute('aria-expanded', resposta.classList.toggle("ativa"));
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
/* ------------------------------------------------------------------------------- */
/* galeria de imagens ------------------------------------------------------------ */
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens")

console.log(galeria, galeriaContainer);

function trocarImagem(event) {
  const img = event.currentTarget;
  galeriaContainer.prepend(img);
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);
/* ------------------------------------------------------------------------------- */
