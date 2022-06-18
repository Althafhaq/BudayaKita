import Home from '../views/pages/home';
import Budaya from '../views/pages/budaya';
import Destinasi from '../views/pages/destinasi';
import TentangKami from '../views/pages/tentang';
import DetailBudaya from '../views/pages/detail-budaya';
import DetailDestinasi from '../views/pages/detail-destinasi';
import Like from '../views/pages/like';

const routes = {
  '/': Home,
  '/budaya': Budaya,
  '/destinasi': Destinasi,
  '/tentang-kami': TentangKami,
  '/detail-budaya/:id': DetailBudaya,
  '/detail-destinasi/:id': DetailDestinasi,
  '/like': Like,
};

export default routes;
