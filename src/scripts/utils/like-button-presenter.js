/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import FavoriteIdb from '../data/favorite-idb';

const LikeButtonBudayaPresenter = {
  async init({ likeButtonContainer, favoriteBudayas, culture }) {
    this._likeButtonContainer = likeButtonContainer;
    this._culture = culture;
    this._favoriteBudayas = favoriteBudayas;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._culture;

    if (await this._isBudayaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isBudayaExist(id) {
    const culture = await this._favoriteBudayas.getBudaya(id);
    return !!culture;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteBudayas.putBudaya(this._culture);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.deleteBudaya(this._culture.id);
      this._renderButton();
    });
  },
};

const LikeButtonDestinationPresenter = {
  async init({ likeButtonContainer, favoriteDestinations, destination }) {
    this._likeButtonContainer = likeButtonContainer;
    this._destination = destination;
    this._favoriteDestinations = favoriteDestinations;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._destination;

    if (await this._isDestinationExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDestinationExist(id) {
    const destination = await this._favoriteDestinations.getDestination(id);
    return !!destination;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteDestinations.putDestination(this._destination);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.deleteDestination(this._destination.id);
      this._renderButton();
    });
  },
};

export { LikeButtonBudayaPresenter, LikeButtonDestinationPresenter };
