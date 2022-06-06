import BudayakitaDbSource from '../../data/budayakitaDB';
import { createBudayaList, createDestinasiContainer } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!-- Hero -->
    <section id="hero" class="hero-home d-flex flex-column justify-content-center">
       <div class="container">
         <div class="hero-inner hero-inner-home">
           <h1 class="hero-title text-white"><span>Jelajahi</span> <br>Ragam Budaya Kita!</h1>
         </div>
       </div>
     </section>
     <!-- End Hero -->
     
     <!-- Highlight -->
     <section class="container-fluid my-5">
       <div class="container highlight">
         <h2 class="section-title text-center mb-3">Highlight</h2>
         <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-inner text-center">
             <div class="carousel-item active" data-bs-interval="4000">
               <div class="card bg-dark text-white">
                 <img src="assets/images/highlight-1.jpg" class="highlight-img" alt="...">
                 <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                   <h5 class="card-title card-highlight-title mb-2">Explore Amazing Culturation Together</h5>
                   <a href="#/budaya" class="btn btn-highlight mt-2"><i class="fas fa-eye"></i> Let's See</a>
                 </div>
               </div>
             </div>
             <div class="carousel-item" data-bs-interval="4000">
               <div class="card bg-dark text-white">
                 <img src="assets/images/highlight-2.jpg" class="highlight-img" alt="...">
                 <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                   <h5 class="card-title card-highlight-title mb-2">Explore Amazing Places Together</h5>
                   <a href="#/destinasi" type="button" class="btn btn-highlight mt-2"><i class="fas fa-eye"></i> Let's See</a>
                 </div>
               </div>
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
       </div>
     </section>
     <!-- End Highlight -->
   
     <!-- Kebudayaan -->
     <section class="container-fluid my-5">
       <div class="container budaya">
         <h2 class="section-title text-center mb-3">Kebudayaan</h2>
         <div class="budaya-list row g-2" id="budaya"> 
          
         </div>
       </div>
     </section>
     <!-- End Kebudayaan -->
     <section class="container-fluid my-5" id="destinasi">
    `;
  },

  async afterRender() {
    const budayakita = await BudayakitaDbSource.homeBudaya();
    const budayaContainer = document.querySelector('#budaya');
    budayakita.forEach((budaya) => {
      budayaContainer.innerHTML += createBudayaList(budaya);
    });

    const destinasiSection = document.querySelector('#destinasi');
    destinasiSection.innerHTML += createDestinasiContainer();

    const destinasikita = await BudayakitaDbSource.homeDestinasi();
    const destinasiContainer = document.querySelector('#destinasi-list');
    destinasikita.forEach((destinasi) => {
      destinasiContainer.innerHTML += createBudayaList(destinasi);
    });
  },
};

export default Home;
