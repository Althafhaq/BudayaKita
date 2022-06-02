class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-footer py-3">
        <div class="container">
          <div class="d-flex flex-row justify-content-between">
            <div class="py-5">
              <a class="navbar-brand" href="#">
                <img src="assets/images/brand.png" alt="" width="32" height="32">
                BudayaKita
              </a>
              <p class="text-white my-2">Jelajahi ragam budaya <br>dan destinasi wisata di <br>Jawa Barat!</p>
            </div>
            <div class="py-5 text-white">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link-footer p-0">Budaya</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link-footer p-0">Destinasi</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link-footer p-0">Tentang</a></li>
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
