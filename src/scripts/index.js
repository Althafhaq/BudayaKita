import 'regenerator-runtime';
import './component/navbar';
import './component/footer';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import './component/skip_link';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  const onScroll = document.querySelector('nav');
  onScroll.classList.toggle('onScroll', window.scrollY > 100);
});
