const Destinasi = {
  async render() {
    return `
      <!-- Hero -->
      <section id="hero" class="hero-destinasi d-flex flex-column justify-content-center">
        <div class="container">
          <div class="hero-inner text-center">
            <h1 class="hero-title text-white">Ragam Destinasi</h1>
          </div>
        </div>
      </section>
      <!-- End Hero -->

      <!-- Destinasi -->
      <section class="container-fluid my-5">
        <div class="container budaya">
          <h2 class="section-title text-center mb-3">Destinasi</h2>
          <div class="budaya-list row g-2">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <img src="assets/images/destinasi-1.jpg" class="budaya-img" alt="">
                <div class="budaya-name d-flex justify-content-between">
                  <a href="">Green Canyon</a>
                  <a href=""><i class="fas fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Destinasi -->
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Destinasi;
