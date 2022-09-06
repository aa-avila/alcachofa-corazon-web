console.log('starting catalog.js');

import { fetchGet } from '/public/js/utils/fetchData.js';
import { CATALOG_IMG_URL } from '/public/js/utils/constants.js';
import { CATALOG_PDF_TEST_URL } from '/public/js/utils/constants.js';

const makeCarousel = async () => {
  const catalogImgJson = await fetchGet(CATALOG_IMG_URL);

  const htmlFirstSlide = `
    <div class="carousel-item active">
      <img src="${catalogImgJson[1]}" class="d-block w-100" alt="...">
    </div>`;

  const makeSlide = (imgUrl) => {
    const html = `
    <div class="carousel-item">
      <img src="${imgUrl}" class="d-block w-100" alt="...">
    </div>`;
    return html;
  };

  catalogImgJson.splice(0, 2);

  let htmlSlides = '';

  catalogImgJson.forEach((url) => {
    htmlSlides = htmlSlides + ' ' + makeSlide(url);
  });

  document.getElementById('carousel-catalog').innerHTML =
    htmlFirstSlide + htmlSlides;
};

const setupDwnPdfButton = async () => {
  const button = document.getElementById('downloadBtn');
  const catalogPdfUrl = await fetchGet(CATALOG_PDF_TEST_URL);
  button.href = catalogPdfUrl;
  button.classList.remove('disabled');
};

/************************ */

const run = async () => {
  makeCarousel();
  setupDwnPdfButton();
};

run();
