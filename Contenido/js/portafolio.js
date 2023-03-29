const $app = document.getElementById('appFotos');

async function getImages() {
    const response = await fetch('Contenido/img/portfolio');
    const data = await response.json();
    return data;
  }

const Avatar = params => {
    const src = `Contenido/img/portfolio/COMPOSICIONES-${params.id}.jpg`;

    return `<div class="col-lg-4 col-md-6 portfolio-item filter-comp">
        <div class="portfolio-wrap">
            <img src="${src}" class="img-fluid" alt="">
                <div class="portfolio-info">
                    <div class="portfolio-links">
                         <a href="${src}" data-gallery="portfolioGallery" 
                         class="portfolio-lightbox"><i class="bx bx-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
            `
};

// función principal para cargar las imágenes
async function loadImages() {
    const images = await getImages();
    for (let i = 1; i <= images.length; i++) {
      $app.innerHTML += generateAvatar(i);
    }
  }
  
  // cargar las imágenes cuando se carga la página
  document.addEventListener('DOMContentLoaded', loadImages);

// $app.innerHTML += Avatar({id: 1});
// $app.innerHTML += Avatar({id: 2});
// $app.innerHTML += Avatar({id: 3});

// document.addEventListener("DOMContentLoaded", function() {
//     const gallery = GLightbox({
//         selector: '.portfolio-lightbox'
//     });
// });