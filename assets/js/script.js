(async function () {
    document.querySelector(".filmes").innerHTML = "Carregando...";
    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    montarBlog(json);
 
  function montarBlog(lista) {
    let html = "";

    for (let i in lista) {
      html +=
        `<div class="col-md-4  bg-light p-3"><div class="filme"><img class="img-thumbnail"src="${lista[i].avatar}"/><h5 class="mb-3 mt-1 text-primary text-center">${lista[i].titulo}</h5></div></div>`;
    }
    document.querySelector(".filmes").innerHTML = html;
  }
})();