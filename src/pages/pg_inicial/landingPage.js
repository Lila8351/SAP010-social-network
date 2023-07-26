export default () => {
  const container = document.createElement('header');

  const landingPage = `
      <section class="img-container">
          <img class="title-lp" src="./assets/my_project-2.gif">
          <!-- TODO: setTimeout p criar botton de login ->
      </section>
      `;

  container.innerHTML = landingPage;

  return container;
};
