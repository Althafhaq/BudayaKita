const createBudayaList = (budaya) => `<div class="col-12 col-md-6 col-lg-3">
        <div class="card">
          <img src="${budaya.foto}" class="budaya-img" alt="">
          <div class="budaya-name d-flex justify-content-between">
            <a href="">${budaya.nama}</a>
            <a href=""><i class="fas fa-angle-right"></i></a>
          </div>
        </div>
      </div>
        `;

const createDestinasiContainer = () => `
        <!-- Destinasi -->
        <div class="container budaya">
            <h2 class="section-title text-center mb-3">Destinasi</h2>
            <div class="budaya-list row g-2" id="destinasi-list">

            </div>
        </div>
      </section>
`;

const createDestinasiList = (destinasi) => `<div class="col-12 col-md-6 col-lg-3">
        <div class="card">
            <img src="${destinasi.foto}" class="budaya-img" alt="">
            <div class="budaya-name d-flex justify-content-between">
            <a href="">${destinasi.nama}</a>
            <a href=""><i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        </div>
        `;

export { createBudayaList, createDestinasiList, createDestinasiContainer };
