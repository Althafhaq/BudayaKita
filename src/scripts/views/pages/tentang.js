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

      <section class="container-fluid py-5">
        <div class="container">
          <div class="d-lg-flex flex-row">
            <div class="d-lg-flex flex-column justify-content-center">
              <img src="assets/images/undraw_Team_collaboration_re_ow29.webp" class="img-fluid" alt="...">
            </div>
            <div class="about-description d-lg-flex flex-column justify-content-center">
              <h2 class="section-title mb-3">Tentang BudayaKita</h2>
              <p>
              BudayaKita adalah sebuah platform yang memberikan informasi menarik mengenai berbagai kebudayaan dan destinasi wisata dari Provinsi Jawa Barat yang begitu penuh makna
              dan sangat menarik untuk diketahui oleh bangsa kita.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid py-5 mb-5">
        <div class="container">
          <h2 class="section-title text-center mb-3">Tim Kami</h2>
          <div class="row g-2">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/fotoA.webp" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Althaf Haq Dhaifulloh</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Universitas Bina Insani</h6>
                  <a href="https://www.instagram.com/rai_sin1/" target="_blank" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/Althafhaq" target="_blank" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/althaf-haq/" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="https://media-exp2.licdn.com/dms/image/C5103AQFTu42vml6AOg/profile-displayphoto-shrink_800_800/0/1584885458710?e=1660780800&v=beta&t=EpOegWirA2EsS_epghBMqhaJC2zEVifo52x-my_1nmE" class="img-team rounded-circle mx-auto d-block" alt="...">
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
                <img src="assets/images/fotoC.webp" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Dimas Budi Utomo</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Universitas Pamulang</h6>
                  <a href="https://www.instagram.com/dbu_708/" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/dimas708" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/dimas708/" class="card-link"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card card-team">
                <img src="assets/images/fotoB.webp" class="img-team rounded-circle mx-auto d-block" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title card-team-title">Farach Ghanisa Damayanti</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Universitas Gunadarma</h6>
                  <a href="https://instagram.com/farachghanisa" class="card-link"><i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/farachghanisa" class="card-link"><i class="fab fa-github"></i></a>
                  <a href="https://linkedin.com/in/farachghanisa" class="card-link"><i class="fab fa-linkedin"></i></a>
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
