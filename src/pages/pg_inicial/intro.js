// export function inicio() {
//   const addElementos = document.querySelectorAll('#root');
//   const section1 = document.createElement('section');
//   section1.setAttribute('class', 'apresentacao');
//   section1.setAttribute('id', 'apresentacao');

//   const apresentacao = `
//     <img class="img-s1" src="./assets/woman-support.png">
//     <article class="apresentacao">
//      <p>Essa é uma rede feita de mulheres incríveis como você!<br>
//         Um lugar seguro e acolhedor, onde você pode explorar sua sexualidade,<br>
//         discutir saúde íntima, compartilhar experiências, dúvidas, buscar e oferecer suporte.<br>
//         Viva o poder da sororidade!<br>
//         Entre e sinta-se em casa.</p>
//      <p><a href="/#comecar">
//      <img "class="button-coffee" id="start-coffee" src="./assets/coffee.gif">
//      </p>
//     </article>
//   `;
//   section1.innerHTML = apresentacao;
//   addElementos.appendChild(section1);

//   window.addEventListener('hashchange', () => {
//     if (window.location.hash === '#comecar') {
//       // appendChild da pagina de login
//     }
//   });

//   return section1;
// }

// export function cadastrar() {
//   const sectionInit = document.createElement('section');
//   sectionInit.setAttribute('class', 'cadastro');

//   const criarCdastro = `
//   <article>
//   <input type="button" class="cadastrar" value="cadastre-se">
//       <div>
//           <p>Já tem uma conta?</p>
//           <p><input type="button" class="singin" value="log in"></p>
//       </div>
// </article>
// `;

//   sectionInit.innerHTML = criarCdastro;
//   return sectionInit;
// }
