class AppBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
          
          <div class="header__inner">
                <h1 class="header__title">
                <img src="/images/navbarlogo.png" alt="" class="header_image">
                  </h1>  
          <a href="#" id="menu" class="header__menu">☰</a>
              <nav id="drawer" class="nav">
                  <ul class="nav__list">
                      <li class="nav__item"><a href="/">Budaya</a></li>
                      <li class="nav__item"><a href="#/like">Destinasi</a></li>
                      <li class="nav__item"><a href="" target="blank">About Us</a></li>
                  </ul>
              </nav>
          </div>
          `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  