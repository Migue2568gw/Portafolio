const $app = document.getElementById('appFotos');

function generateAvatar(id) {
    const src = `Contenido/img/portfolio/COMPOSICIONES-${id}.jpg`;
    return `
      <div class="col-lg-4 col-md-6 portfolio-item filter-comp">
        <div class="portfolio-wrap">
          <img src="${src}" class="img-fluid" alt="">
          <div class="portfolio-info">
            <div class="portfolio-links">
              <a href="${src}" data-gallery="portfolioGallery" class="portfolio-lightbox"><i class="bx bx-search"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
}

async function loadImages() {
    const images = 10;

    for (let i = 1; i <= images; i++) {
        $app.innerHTML += generateAvatar(i);
    }
    const gallery = GLightbox({
        selector: '.portfolio-lightbox'
    });
}

document.addEventListener('DOMContentLoaded', loadImages);
