class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/images/brand.png" alt="" width="32" height="32">
            BudayaKita
          </a>
          <button class="navbar-drawer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="#/">Home</a>
                <a class="nav-link" href="#/budaya">Budaya</a>
                <a class="nav-link" href="#/destinasi">Destinasi</a>
                <a class="nav-link" href="#/tentang-kami">Tentang</a>
              </div>
            </div>
          </div>
        </div>
      </nav>  
    `;
  }
}

customElements.define('app-bar', AppBar);
