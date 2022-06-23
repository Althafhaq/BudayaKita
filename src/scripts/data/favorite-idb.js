import { openDB } from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteIdb = {
  async getDestination(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDestinations() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putDestination(destination) {
    if (!destination.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, destination);
  },
  async deleteDestination(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async searchDestinations(query) {
    return (await this.getAllDestinations()).filter((destination) => {
      const loweredCaseDestinationName = (destination.name || '-').toLowerCase();
      const jammedRDestinationName = loweredCaseDestinationName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRDestinationName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteIdb;
