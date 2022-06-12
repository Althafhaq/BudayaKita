import CONFIG from './config';

const API_ENDPOINT = {
  BUDAYA: `${CONFIG.BASE_URL}/budaya?select=id,nama,imageUrl`,
  DESTINASI: `${CONFIG.BASE_URL}/destinasi?select=id,nama,imageUrl`,
  DETAILBUDAYA: (id) => `${CONFIG.BASE_URL}/budaya?id=eq.${id}&select=*`,
  DETAILDESTINASI: (id) => `${CONFIG.BASE_URL}/destinasi?id=eq.${id}&select=*`,
};

export default API_ENDPOINT;
