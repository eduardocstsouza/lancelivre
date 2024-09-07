function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById
    ('resultados-pesquisa');


  let campoPesquisa = document.getElementById
    ('campo-pesquisa').value
    if(campoPesquisa == "" ){

      section.innerHTML = "<p> Digite algo para encontrar resultados </p>"
      return 

    }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Cria uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let nome = '';
  let descricao ='';
  let tags = '';

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){

      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;

    }
    console.log(dado.nome.includes(campoPesquisa))
    // Cria uma nova div para cada resultado
    
  }

  if (!resultados){
    resultados = '<p> Nenhum resultado para a pesquisa. </p>'

  }

  // Insere os resultados na seção HTML
  section.innerHTML = resultados;
}