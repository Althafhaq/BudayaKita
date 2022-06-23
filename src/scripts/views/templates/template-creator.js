const createBudayaList = (culture) => `
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
      <img src="${culture.imageUrl}" class="card-image lazyload" alt="">
      <div class="card-name d-flex justify-content-between">
        <a href="${`/#/detail-budaya/${culture.id}`}">${culture.nama}</a>
        <a href="${`/#/detail-budaya/${culture.id}`}"><i class="fas fa-angle-right"></i></a>
      </div>
    </div>
  </div>
`;

const createBudayaDetailHero = (culture) => `
  <img class="hero-detail-bg lazyload" src="${culture.imageUrl}">
  <div class="container">
    <div class="hero-detail-inner d-flex flex-column justify-content-center align-items-center">
      <h2 class="hero-title text-white">${culture.nama}</h2>
    </div>
  </div>
`;

const createBudayaDetail = (culture) => `
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/">Home</a></li>
        <li class="breadcrumb-item"><a href="#/budaya">Budaya</a></li>
        <li class="breadcrumb-item active" aria-current="page">${culture.nama}</li>
      </ol>
    </nav>
    <div>
      <div class="detail-budaya-info py-3">
        <div class="d-flex flex-row">
          <div class="detail-icon d-flex flex-column justify-content-center">
            <i class="fas fa-tag"></i>
          </div>
          <div class="detail-text d-flex flex-column justify-content-center detail-kategori px-2">
            <h4>Kategori</h4>
            <p>${culture.kategori}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Deskripsi</h3>
        <p>${culture.deskripsi}</p>
      </div>
      <div>
        <h3>Sejarah</h3>
        <p>${culture.sejarah}</p>
      </div>
    </div>
  </div>
`;

const createDestinasiList = (destination) => `
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
        <img src="${destination.imageUrl}" class="card-image lazyload" alt="">
        <div class="card-name d-flex justify-content-between">
        <a href="#/detail-destinasi/${destination.id}">${destination.nama}</a>
        <a href="#/detail-destinasi/${destination.id}"><i class="fas fa-angle-right"></i></a>
        </div>
    </div>
  </div>
`;

const createDestinasiDetailHero = (destination) => `
  <img class="hero-detail-bg lazyload" src="${destination.imageUrl}">
  <div class="container">
    <div class="hero-detail-inner d-flex flex-column justify-content-center align-items-center">
      <h2 class="hero-title text-white">${destination.nama}</h2>
    </div>
  </div>
`;

const createDestinasiDetail = (destination) => `
  <div class="container">
  <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="my-1">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item"><a href="#/destinasi">Destinasi</a></li>
            <li class="breadcrumb-item active" aria-current="page">${destination.nama}</li>
          </ol>
        </nav>
      </div>
      <div id="likeButtonContainer" class="my-1"></div>
    </div>
    <div class="detail-destinasi">
      <div class="py-3">
        <div class="d-flex flex-row py-2">
          <div class="detail-icon d-flex flex-column justify-content-center">
            <i class="fas fa-building"></i>
          </div>
          <div class="detail-text d-flex flex-column justify-content-center px-2">
            <h4>Kota</h4>
            <p>${destination.kota}</p>
          </div>
        </div>
        <div class="d-flex flex-row py-2">
          <div class="detail-icon d-flex flex-column justify-content-center">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="detail-text flex-column justify-content-center detail-kategori px-2">
            <h4>Alamat</h4>
            <p>${destination.alamat}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Deskripsi</h3>
        <p>${destination.deskripsi}</p>
      </div>
    </div>
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="unlike this Content" id="likeButton" class="btn btn-outline-primary like">
    Like <i class="far fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="like this Content" id="likeButton" class="btn btn-primary like">
    Like <i class="fas fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
  createBudayaList,
  createBudayaDetailHero,
  createBudayaDetail,
  createDestinasiList,
  createDestinasiDetailHero,
  createDestinasiDetail,
  createLikedButtonTemplate,
  createLikeButtonTemplate,
};
