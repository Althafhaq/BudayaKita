import Home from '../views/pages/home';
import Budaya from '../views/pages/budaya';
import Destinasi from '../views/pages/destinasi';
import TentangKami from '../views/pages/tentang';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/budaya': Budaya,
  '/destinasi': Destinasi,
  '/tentang-kami': TentangKami,
  '/detail/:id': Detail,
};

export default routes;
