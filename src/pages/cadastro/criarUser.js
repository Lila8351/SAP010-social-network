import { createUser } from '../../lib/index.js';

export function newUser() {
  const section = document.createElement('section');
  section.setAttribute('class', 'create-user');

  const newUserHTML = `
    <label for="email">E-mail: </label>
    <input type="text" id="email" name="nick">
    <label for="senha">Senha: </label>
    <input type="password" id="senha" name="senha">
    <label for="confirmPassword">Confirme sua senha: </label>
    <input type="password" id="confirmPassword" name="password>
    <input type="button" id="btnCreateUser">
    `;

  section.innerHTML = newUserHTML;

  section.querySelector('#btnCreateUser').addEventListener('click', () => {
    const email = section.querySelector('#email').value;
    const password = section.querySelector('#password').value;
    const confirmPassword = section.querySelector('#confirmPassword').value;

    if (password === confirmPassword) {
      createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
        .catch ((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log (error);
					console.log(errorMessage);
          return errorMessage + errorCode;
        });
    }
  });
}
