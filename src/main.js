// Este es el punto de entrada de tu aplicacion
// aqui exportaras las funciones que necesites

// import { myFunction } from './lib/index.js';
import landingPage from './pages/pg_inicial/landingPage.js';
import { entrarRede } from './pages/pg_inicial/comecar.js';
import { criarCadastro } from './pages/cadastro/cadastro.js';
import { login } from './pages/login/login.js';
import { feedHeader } from './pages/feed/feed.js';
// myFunction();

const addElementos = document.querySelector('#root');
let carregouForm = false;
let carregouLogin = false;

function intro() {
  const section1 = document.createElement('section');
  section1.setAttribute('class', 'apresentacao');
  section1.setAttribute('id', 'apresentacao');

  const apresentacao = `
    <img class="img-s1" src="./assets/woman-support.png">
    <article class="apresentacao">
    <p>Essa é uma rede feita de mulheres incríveis como você!<br>
        Um lugar seguro e acolhedor, onde você pode explorar sua sexualidade,<br>
        discutir saúde íntima, compartilhar experiências, dúvidas, buscar e oferecer suporte.<br>
        Viva o poder da sororidade!<br>
        Entre e sinta-se em casa.</p>
    <p><a href="/#comecar"><img "class="button-coffee" id="start-coffee" src="./assets/coffee.gif"></a></p>
    </article> `;

  section1.innerHTML = apresentacao;
  return section1;
}

function addIntro() {
  addElementos.appendChild(intro());

  window.addEventListener('hashchange', () => {
    if (carregouForm === false || carregouLogin === false) {
      switch (window.location.hash) {
        case ' ':
          break;
        case '#comecar':
          addElementos.innerHTML = '';
          addElementos.appendChild(entrarRede());
          break;
        case '#login':
          addElementos.innerHTML = '';
          addElementos.appendChild(login());
          carregouLogin = true;

          break;
        case '#criar-cadastro':
          addElementos.innerHTML = '';
          addElementos.appendChild(criarCadastro());
          carregouForm = true;
          break;
        default:
          addElementos.appendChild(landingPage());
          setTimeout(addIntro, 2500);
          break;
      }
    }
  });
}

window.addEventListener('load', () => {
  addElementos.appendChild(landingPage());
  setTimeout(addIntro, 2000);
  // routes();
});
