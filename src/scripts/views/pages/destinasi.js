import BudayakitaDbSource from '../../data/budayakitaDB';
import { createDestinasiList } from '../templates/template-creator';

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
          <div class="destinasi-list row g-2" id="destinasi">
            
          </div>
        </div>
      </section>
      <!-- End Destinasi -->
    `;
  },

  async afterRender() {
    const destinations = await BudayakitaDbSource.homeDestinasi();
    const destinationsContainer = document.querySelector('#destinasi');
    destinations.forEach((destination) => {
      destinationsContainer.innerHTML += createDestinasiList(destination);
    });
  },
};

export default Destinasi;
