import BudayakitaDbSource from '../../data/budayakitaDB';
import { createBudayaList } from '../templates/template-creator';

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
          <div class="budaya-list row g-2" id="budaya">
            
            </div>
          </div>
        </div>
      </section>
      <!-- End Kebudayaan -->
    `;
  },

  async afterRender() {
    const cultures = await BudayakitaDbSource.budayaPage();
    const culturesContainer = document.querySelector('#budaya');
    cultures.forEach((culture) => {
      culturesContainer.innerHTML += createBudayaList(culture);
    });
  },
};

export default Budaya;
