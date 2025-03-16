const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');  // Pegando o parâmetro 'nome'
alert(nome);
