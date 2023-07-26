export function login() {
  const paginaLogin = document.createElement('section');
  paginaLogin.setAttribute('class', 'login');

  const logar = `
    <article>
        <input type="text" placeholder="e-mail" id=email-login>
        <input type="password" placeholder="senha" id=senha-login>
    </article>`;

  // TODO: verificar se a senha é forte e se o email é válido

  paginaLogin.innerHTML = logar;
  return paginaLogin;
}
