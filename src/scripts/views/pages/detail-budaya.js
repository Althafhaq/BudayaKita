import UrlParser from '../../routes/url-parser';
import BudayakitaDbSource from '../../data/budayakitaDB';
import { createBudayaDetail, createBudayaDetailHero } from '../templates/template-creator';

const DetailBudaya = {
  async render() {
    return `
      <section id="hero-detail"></section>
      <section id="budaya" class="container-fluid my-5"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const culture = await BudayakitaDbSource.budayaDetail(url.id);
    const heroContainer = document.querySelector('#hero-detail');
    heroContainer.innerHTML = createBudayaDetailHero(culture);

    const cultureContainer = document.querySelector('#budaya');
    cultureContainer.innerHTML = createBudayaDetail(culture);
  },
};

export default DetailBudaya;
