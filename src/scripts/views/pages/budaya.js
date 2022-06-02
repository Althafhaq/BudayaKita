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

      <section class="container-fluid my-5">
        <div class="container">
          <h2 class="section-title text-center">Budaya</h2>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Budaya;
