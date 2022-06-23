class likedDestinationShowPresenter {
  constructor({ view, favoriteDestinations }) {
    this._view = view;
    this._favoriteDestinations = favoriteDestinations;

    this._showFavoriteDestinations();
  }

  async _showFavoriteDestinations() {
    const destinations = await this._favoriteDestinations.getAllDestinations();
    this._displayDestinations(destinations);
  }

  _displayDestinations(destinasi) {
    this._view.showFavoriteDestinations(destinasi);
  }
}

export default likedDestinationShowPresenter;
