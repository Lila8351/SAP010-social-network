export function feedHeader() {
  const header = document.createElement('header');
  header.setAttribute('class', 'feed-header');

  const templateHeader = `
  <section class="feed-header>
    <article class="config-account">
      <img src="./assets/woman-support.png">
        <!-- quando clicar, carrega tipo um spam de menu, com o select -->
        <!-- TODO add select 3*li p 
        "perfil" - (p editar), 
        "config de privacidade" - (o q inclui excluir a conta), 
        "logout"
        todas essas options devem ser âncoras que mudam #. 
        -->
    </article>
    <article class="search">
        <input type="text" class="search" id="search">
    </article>
    <article class="see-myPostsOrFeed"></article>
  </section>
  `;

  header.innerHTML = templateHeader;
  return header;
}
