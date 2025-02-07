const observadorSlideInCartao = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting === true) {
      setTimeout(() => {
        entrada.target.classList.add("mostrar-cartao");
      });
      return;
    }
  });
});


const cartaoComAnimacao = document.querySelectorAll(".esconde-cartao");

cartaoComAnimacao.forEach((elemento) =>{

observadorSlideInCartao.observe(elemento);

});

// ---------------------------------------------------------------------


const observadorSlideInEsquerda = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting === true) {
      entrada.target.classList.add("mostrar-slidein-esquerda");
    }else{
      return;
    }
  });
});


const animacaoSlideinEsquerda = document.querySelectorAll(".escondido-esquerda");

animacaoSlideinEsquerda.forEach((elemento) =>{

observadorSlideInEsquerda.observe(elemento);

});

//-----------------------------------------------------------------

const observadorSlideInDireita = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting === true) {
      entrada.target.classList.add("mostrar-slidein-direita");
    }else{
      return;
    }
  });
});


const animacaoSlideinDireita = document.querySelectorAll(".escondido-direita");

animacaoSlideinDireita.forEach((elemento) =>{

observadorSlideInDireita.observe(elemento);

});

// -----------------------------------------------------------------

const observadorFadeIn = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting === true) {
      entrada.target.classList.add("mostrar-fadein");
    }else{
      return;
    }
  });
});


const animacaoFadeIn = document.querySelectorAll(".escondido-fadein");

animacaoFadeIn.forEach((elemento) =>{

observadorFadeIn.observe(elemento);

});


