import FavoriteIdb from '../../data/favorite-idb';
import likedDestinationSearchView from './liked-destination/liked-destination-search-view';
import likedDestinationSearchPresenter from './liked-destination/liked-destination-search-presenter';
import likedDestinationShowPresenter from './liked-destination/liked-destination-show-presenter';

const view = new likedDestinationSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new likedDestinationShowPresenter({ view, favoriteDestinations: FavoriteIdb });
    new likedDestinationSearchPresenter({ view, favoriteDestinations: FavoriteIdb });
  },
};

export default Like;
