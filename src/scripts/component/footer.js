class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-footer py-3">
        <div class="container">
          <div class="d-flex flex-column align-items-center py-5">
            <div class="py-2">
              <a class="navbar-brand" href="#">
                <img src="assets/images/brand.png" alt="" width="32" height="32">
                BudayaKita
              </a>
            </div>
            <div class="py-2">
              <ul class="nav">
                <li class="nav-item"><a href="#/" class="nav-link-footer">Home</a></li>
                <li class="nav-item"><a href="#/budaya" class="nav-link-footer">Budaya</a></li>
                <li class="nav-item"><a href="#/destinasi" class="nav-link-footer">Destinasi</a></li>
                <li class="nav-item"><a href="#/tentang-kami" class="nav-link-footer">Tentang</a></li>
              </ul>
            </div>
          </div>
          <div class="pt-4 border-top text-white text-center">
            <p>Copyright <i class="fa fa-copyright"></i> 2022, CFSG-55</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
