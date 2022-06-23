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
          <div class="row">
            <div class="col">
              <h2 class="section-title text-center mb-3">Tentang BudayaKita</h2>
              <p class="tentang-description">
                BudayaKita adalah salah satu website yang memberikan informasi menarik mengenai berbagai kebudayaan dan wisata dari Provinsi Jawa Barat yang begitu penuh makna
                dan sangat menarik untuk diketahui oleh bangsa kita saat ini. 
                <br>
                Berangkat dari kegelisahan kami terhadap warisan budaya Nusantara yang sangat unik dan menarik ini,
                kami mencoba mendokumentasikan dan merangkum informasi yang saya kumpulkan dari berbagai sumber. Dengan dibuatnya website BudayaKita, harapan kami semoga 
                informasi-informasi yang ada pada website ini dapat menambah rasa cinta dan bangga terhadap kebudayaan dari Provinsi Jawa Barat.
              </p>
            </div>
            <div class="col">
            <img src="assets/images/undraw_Best_place_re_lne9.webp" class="img" alt="...">
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid my-5">
        <div class="container">
          <h2 class="section-title text-center mb-3">Tim Kami</h2>
          <div class="budaya-list row g-2">
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
