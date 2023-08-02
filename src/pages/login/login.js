import { validadeLogin } from '../../lib/index.js';

export function login() {
  const paginaLogin = document.createElement('section');
  paginaLogin.setAttribute('class', 'login');

  const logar = `
    <article>
        <label for="email-login">Log</label>
        <input type="text" placeholder="e-mail" id=email-login>
        <label for="senha-login">senha</label>
        <input type="password" placeholder="senha" id="password-login">
        <input type="button" value="Login" id="start-login">
    </article>`;

  paginaLogin.innerHTML = logar;

  paginaLogin.querySelector('#start-login').addEventListener('click', () => {
    const email = paginaLogin.querySelector('#email-login').value;
    const password = paginaLogin.querySelector('#password-login').value;
    console.log(email, password);
    validadeLogin(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return user;
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log (error);
        console.log(errorMessage);
        return errorMessage + errorCode;
      });
    console.log(validadeLogin(email, password));
  });
  // TODO: verificar se a senha é forte e se o email é válido

  return paginaLogin;
}
