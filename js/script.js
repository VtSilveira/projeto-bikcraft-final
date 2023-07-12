const links = document.querySelectorAll('.header-menu a');

/* deixa o efeito de hover sempre ativo quando na página selecionada ------------- */
function ativarLink(link) {
  const url = location.href; // pega a url atual
  const href = link.href; // o link atual do forEach

  if (url.includes(href)) { // se forem iguais, i.e. está na página selecionada
    link.classList.add("ativo"); // adiciona a classe 'ativo' para a tag <a>
  }
}

links.forEach(ativarLink); // chamada da funcao para cada elemento '.header-menu a'
/* ------------------------------------------------------------------------------- */
