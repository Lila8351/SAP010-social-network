export function criarCdastro() {
  const section = document.createElement('section');
  section.setAttribute('class', 'criarCdastro');

  const cadastro = `
  <label for="nick">Apelido: </label>
  <input type="text" id="nick" name="nick">
  <!-- como vincular um id para cada nick, que nao pode se repetir? -->
  <label for="idGenero">Identidade de gênero: </label>
  <input type="radio" id="idGenero" name="idGenero">
  <label for="faixaEtaria">Idade: </label>
  <input type="text" id="fname" name="fname">
  <!-- aqui pode ser select, e assim determina a faixa de idade, ou pode ser input mas ai tem que aceitar so numeros restritos de 0 a 130 anos -->
  <input type="button" value="ok">
  `;

  section.innerHTML = cadastro;
  return section;
}
