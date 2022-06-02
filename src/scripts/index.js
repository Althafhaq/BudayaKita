import 'regenerator-runtime';
import './component/navbar';
import './component/footer';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('scroll', () => {
  const onScroll = document.querySelector('nav');
  onScroll.classList.toggle('onScroll', window.scrollY > 100);
});
