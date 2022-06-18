import UrlParser from '../../routes/url-parser';
import BudayakitaDbSource from '../../data/budayakitaDB';
import { LikeButtonDestinationPresenter } from '../../utils/like-button-presenter';
import FavoriteIdb from '../../data/favorite-idb';
import { createDestinasiDetail, createDestinasiDetailHero } from '../templates/template-creator';

const DetailDestinasi = {
  async render() {
    return `
      <section id="hero-detail"></section>
      <section id="destinasi" class="container-fluid my-5"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const destination = await BudayakitaDbSource.destinasiDetail(url.id);

    const heroContainer = document.querySelector('#hero-detail');
    heroContainer.innerHTML = createDestinasiDetailHero(destination);

    const destinationContainer = document.querySelector('#destinasi');
    destinationContainer.innerHTML = createDestinasiDetail(destination);
    LikeButtonDestinationPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteDestinations: FavoriteIdb,
      destination: {
        id: destination.id,
        nama: destination.nama,
        imageUrl: destination.imageUrl,
      },
    });
  },
};

export default DetailDestinasi;
