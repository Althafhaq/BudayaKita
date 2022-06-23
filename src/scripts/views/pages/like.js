import FavoriteIdb from '../../data/favorite-idb';
import { createDestinasiList } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <!-- Hero -->
    <section id="hero" class="hero-destinasi d-flex flex-column justify-content-center">
      <div class="container">
        <div class="hero-inner text-center">
          <h1 class="hero-title text-white">Destinasi Favorit</h1>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Destinasi Section -->
    <section class="container-fluid my-5">
      <div class="container">
        <h2 class="section-title text-center mb-3">Destinasi</h2>
        <div class="row g-2" id="destinasi-list"> 
        
        </div>
      </div>
    </section>
    <!-- End Destinasi Section -->
    `;
  },

  async afterRender() {
    const destinations = await FavoriteIdb.getAllDestinations();
    const destinationContainer = document.querySelector('#destinasi-list');
    if (destinations.length === 0) {
      destinationContainer.innerHTML += `<div class="destinasi-item__not__found">
      <p>Tidak ada untuk ditampilkan</p></div> `;
    }
    destinations.forEach((destination) => {
      destinationContainer.innerHTML += createDestinasiList(destination);
    });
  },
};

export default Like;
