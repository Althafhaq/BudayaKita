import BudayakitaDbSource from '../../data/budayakitaDB';
import { createBudayaList, createDestinasiList } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!-- Hero -->
    <section id="hero" class="hero-home d-flex flex-column justify-content-center">
      <div class="container">
        <div class="hero-inner hero-inner-home">
          <h1 class="hero-title text-white"><span>Jelajahi</span> <br>Ragam Budaya Kita!</h1>
        </div>
      </div>
    </section>
    <!-- End Hero -->
     
    <!-- Highlight -->
    <section class="container-fluid my-5">
      <div class="container highlight">
        <h2 class="section-title text-center mb-3">Highlight</h2>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner text-center">
            <div class="carousel-item active" data-bs-interval="4000">
              <div class="card bg-dark text-white">
                <img src="assets/images/highlight-1.webp" class="highlight-img lazyload" alt="...">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title card-highlight-title mb-2">Explore Amazing Culturation Together</h5>
                  <a href="#/budaya" class="btn btn-highlight mt-2"><i class="fas fa-eye"></i> Let's See</a>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <div class="card bg-dark text-white">
                <img src="assets/images/highlight-2.webp" class="highlight-img lazyload" alt="...">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title card-highlight-title mb-2">Explore Amazing Places Together</h5>
                  <a href="#/destinasi" type="button" class="btn btn-highlight mt-2"><i class="fas fa-eye"></i> Let's See</a>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    <!-- End Highlight -->
   
    <!-- Kebudayaan Section -->
    <section class="container-fluid my-5">
      <div class="container">
        <h2 class="section-title text-center mb-3">Kebudayaan</h2>
        <div class="row g-2" id="budaya"> 
        
        </div>
      </div>
    </section>
    <!-- End Kebudayaan Section -->

    <!-- Destinasi Section -->
    <section class="container-fluid my-5">
      <div class="container">
        <h2 class="section-title text-center mb-3">Destinasi</h2>
        <div class="row g-2" id="destinasi"> 
        
        </div>
      </div>
    </section>
    <!-- End Destinasi Section -->
    `;
  },

  async afterRender() {
    const cultures = await BudayakitaDbSource.homeBudaya();
    const culturesContainer = document.querySelector('#budaya');
    cultures.forEach((culture) => {
      culturesContainer.innerHTML += createBudayaList(culture);
    });

    const destinations = await BudayakitaDbSource.homeDestinasi();
    const destinationsContainer = document.querySelector('#destinasi');
    destinations.forEach((destination) => {
      destinationsContainer.innerHTML += createDestinasiList(destination);
    });
  },
};

export default Home;
