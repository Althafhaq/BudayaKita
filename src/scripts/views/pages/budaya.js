const Budaya = {
  async render() {
    return `
      <!-- Hero -->
      <section id="hero" class="hero-budaya d-flex flex-column justify-content-center">
        <div class="container">
          <div class="hero-inner text-center">
            <h1 class="hero-title text-white">Ragam Kebudayaan</h1>
          </div>
        </div>
      </section>
      <!-- End Hero -->

      <!-- Kebudayaan -->
      <section class="container-fluid my-5">
        <div class="container budaya">
          <h2 class="section-title text-center mb-3">Kebudayaan</h2>
          <div class="budaya-list row g-2">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <img src="assets/images/kebudayaan-1.jpg" class="budaya-img" alt="">
                <div class="budaya-name d-flex justify-content-between">
                  <a href="">Batik</a>
                  <a href=""><i class="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <img src="assets/images/kebudayaan-2.jpg" class="budaya-img" alt="">
                <div class="budaya-name d-flex justify-content-between">
                  <a href="">Angklung</a>
                  <a href=""><i class="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <img src="assets/images/kebudayaan-3.jpg" class="budaya-img" alt="">
                <div class="budaya-name d-flex justify-content-between">
                  <a href="">Tari Merak</a>
                  <a href=""><i class="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <img src="assets/images/kebudayaan-4.jpg" class="budaya-img" alt="">
                <div class="budaya-name d-flex justify-content-between">
                  <a href="">Wayang Golek</a>
                  <a href=""><i class="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Kebudayaan -->
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Budaya;
