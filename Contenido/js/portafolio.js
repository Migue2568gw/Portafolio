const $app = document.getElementById('appFotos');

 function generateAvatar(id, categoria , filCate) {
  const src = `Contenido/img/portfolio/${categoria}-${id}.jpg`;

  return `
      <div class="col-lg-4 col-md-6 portfolio-item ${filCate}">
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
  let categorias = ['COMPOSICIONES', 'DOCUMENTAL', 'BODA_BAUTIZOS', 'BANDAS', 'PRODUCTO'];

  for (let i = 0; i < categorias.length; i++) {
    let filtro = '';
    let cantidadImg = 0;
    switch (categorias[i]) {
      case 'COMPOSICIONES':
        filtro = 'filter-comp';
        cantidadImg = 10;
        break;
      case 'DOCUMENTAL':
        filtro = 'filter-doc';
        cantidadImg = 15;
        break;
      case 'BODA_BAUTIZOS':
        filtro = 'filter-BdBa';
        cantidadImg = 5;
        break;
      case 'BANDAS':
        filtro = 'filter-BnMet';
        cantidadImg = 15;
        break;
      case 'PRODUCTO':
        filtro = 'filter-pro';
        cantidadImg = 6;
        break;
      default:
        filtro = 'filter-comp';
        break;
    }
    for (let j = 1; j <= cantidadImg ; j++) {
      try {
        const avatar = generateAvatar(j,categorias[i],filtro);    
          $app.innerHTML += avatar;
      } catch (error) {
        console.log(`No se pudo cargar la imagen ${categorias[i]}-${j}.jpg`);
      }
    }
  }
  const gallery = GLightbox({
    selector: '.portfolio-lightbox'
  });
}

document.addEventListener('DOMContentLoaded', loadImages);
