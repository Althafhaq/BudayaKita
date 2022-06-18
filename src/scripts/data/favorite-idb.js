/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME, DATABASE_VERSION, OBJECT_BUDAYA_NAME, OBJECT_DESTINASI_NAME,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_BUDAYA_NAME, { keyPath: 'id' });
    database.createObjectStore(OBJECT_DESTINASI_NAME, { keyPath: 'id' });
  },
});

const FavoriteIdb = {
  async getBudaya(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_BUDAYA_NAME, id);
  },
  async getAllBudayas() {
    return (await dbPromise).getAll(OBJECT_BUDAYA_NAME);
  },
  async putBudaya(culture) {
    if (!culture.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_BUDAYA_NAME, culture);
  },
  async deleteBudaya(id) {
    return (await dbPromise).delete(OBJECT_BUDAYA_NAME, id);
  },

  async getDestination(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_DESTINASI_NAME, id);
  },
  async getAllDestinations() {
    return (await dbPromise).getAll(OBJECT_DESTINASI_NAME);
  },
  async putDestination(destination) {
    if (!destination.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_DESTINASI_NAME, destination);
  },
  async deleteDestination(id) {
    return (await dbPromise).delete(OBJECT_DESTINASI_NAME, id);
  },
};

export default FavoriteIdb;
