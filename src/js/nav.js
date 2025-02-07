document.querySelectorAll('a[href^="#"]').forEach(escolheSecao=> {
    escolheSecao.addEventListener('click', function (elemento) {
      elemento.preventDefault();
  
      const pegaId = this.getAttribute('href').substring(1);
      const pegaElemento = document.getElementById(pegaId);
  
      if (pegaElemento) {
        window.scrollTo({
          top: pegaElemento.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });