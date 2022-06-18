import FavoriteIdb from '../../data/favorite-idb';
import { createDestinasiList, createBudayaList } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <!-- Hero -->
    <section id="hero" class="hero-destinasi d-flex flex-column justify-content-center">
      <div class="container">
        <div class="hero-inner text-center">
          <h1 class="hero-title text-white">Destinasi dan Budaya Favorite</h1>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Kebudayaan Section -->
    <section class="container-fluid my-5">
      <div class="container">
        <h2 class="section-title text-center mb-3">Kebudayaan</h2>
        <div class="row g-2" id="budaya-list"> 
        
        </div>
      </div>
    </section>
    <!-- End Kebudayaan Section -->

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
    const budayas = await FavoriteIdb.getAllBudayas();
    const budayaContainer = document.querySelector('#budaya-list');
    if (budayas.length === 0) {
      budayaContainer.innerHTML += `<div class="budaya-item__not__found">
      <p>Tidak ada untuk ditampilkan</p></div> `;
    }
    budayas.forEach((culture) => {
      budayaContainer.innerHTML += createBudayaList(culture);
    });

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
