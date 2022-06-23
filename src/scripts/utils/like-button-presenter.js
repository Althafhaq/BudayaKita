import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import FavoriteIdb from '../data/favorite-idb';

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

export default LikeButtonDestinationPresenter;
