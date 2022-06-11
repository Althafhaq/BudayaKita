const TentangKami = {
  async render() {
    return `
      <!-- Hero -->
      <section id="hero" class="hero-tentang d-flex flex-column justify-content-center">
        <div class="container">
          <div class="hero-inner text-center">
            <h1 class="hero-title text-white">Tentang Kami</h1>
          </div>
        </div>
      </section>
      <!-- End Hero -->

      <section class="container-fluid my-5">
        <div class="container">
          <h2 class="section-title text-center mb-3">Tentang BudayaKita</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium esse ad nulla, dolores vel facilis, officia non aliquid molestiae, sapiente dolor quae nisi maxime quam impedit voluptatibus consequuntur commodi. Facilis.</p>
        </div>
      </section>

      <section class="container-fluid my-5">
        <div class="container">
          <h2 class="section-title text-center mb-3">Tim Kami</h2>
          <div class="budaya-list row g-2">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/foto.JPG" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Althaf Haq Dhaifulloh</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Universitas Bina Insani</h6>
                  <a href="https://www.instagram.com/rai_sin1/" target="_blank" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/Althafhaq" target="_blank" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="#" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/blank-profile.png" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Alwan Dwi Putra</h5>
                  <h6 class="card-subtitle mb-2 text-muted">STT Nurul Fikri</h6>
                  <a href="https://instagram.com/alwandp" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/alwandp" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="https://linkedin.com/in/alwandwiputra" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/blank-profile.png" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Dimas Budi Utomo</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Nama Univ</h6>
                  <a href="#" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="#" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/blank-profile.png" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Farach Ghanisa Damayanti</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Nama Univ</h6>
                  <a href="#" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="#" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default TentangKami;
