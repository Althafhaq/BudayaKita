class likedDestinationSearchPresenter {
  constructor({ favoriteDestinations, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteDestinations = favoriteDestinations;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchDestinations(latestQuery);
    });
  }

  async _searchDestinations(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundDestinations;
    if (this.latestQuery.length > 0) {
      foundDestinations = await this._favoriteDestinations.searchDestinations(this.latestQuery);
    } else {
      foundDestinations = await this._favoriteDestinations.getAllDestinations();
    }

    this._showFoundDestinations(foundDestinations);
  }

  _showFoundDestinations(destinasi) {
    this._view.showFavoriteDestinations(destinasi);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default likedDestinationSearchPresenter;
