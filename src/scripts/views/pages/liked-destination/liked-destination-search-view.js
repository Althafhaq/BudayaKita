import { createDestinasiList } from '../../templates/template-creator';

class likedDestinationSearchView {
  getTemplate() {
    return `
      <!-- Hero -->
      <section id="hero" class="hero-favorite d-flex flex-column justify-content-center">
        <div class="container">
          <div class="hero-inner text-center">
            <h1 class="hero-title text-white">Destinasi Favorit</h1>
          </div>
        </div>
      </section>
      <!-- End Hero -->

      <section class="container-fluid my-5">
      <div class="container">
        <form class="d-flex justify-content-end search-container">
          <input id="query" class="form-control me-2 search-input" type="search" placeholder="Search..." aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
      </section>

      <!-- Destinasi Favorit Section -->
      <section class="container-fluid my-5">
        <div class="container">
          <div class="row g-2" id="destinasi-list"> 
          
          </div>
        </div>
      </section>
      <!-- End Destinasi Favorit Section -->
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (e) => {
      callback(e.target.value);
    });
  }

  showFavoriteDestinations(destinasi = []) {
    let html;
    if (destinasi.length) {
      html = destinasi.reduce((carry, destination) => carry.concat(createDestinasiList(destination)), '');
    } else {
      html = this._getEmptyDestinasiList();
    }
    document.getElementById('destinasi-list').innerHTML = html;

    document.getElementById('destinasi-list').dispatchEvent(new Event('destinasi:updated'));
  }

  _getEmptyDestinasiList() {
    return `
      <div class="alert alert-light d-flex flex-column align-items-center justify-content-center my-5 text-secondary" role="alert">
        <div class="warning-icon">
          <i class="fas fa-exclamation-triangle"></i>
        </div>  
        <div>
          <p>Destinasi tidak ditemukan</p>
        </div>
      </div>
    `;
  }
}

export default likedDestinationSearchView;
