import { fetchGet } from '../utils/fetchData.js';

const makeCarousel = async (imagesUrl) => {
  const imagesJson = await fetchGet(imagesUrl);

  const firstSlide = `
      <div class="carousel-item active">
        <img src="${imagesJson[1]}" class="d-block w-100" alt="...">
      </div>`;

  const makeSlide = (imgUrl) => {
    const html = `
      <div class="carousel-item">
        <img src="${imgUrl}" class="d-block w-100" alt="...">
      </div>`;
    return html;
  };

  imagesJson.splice(0, 2);

  // TODO: refactor para usar .map
  let htmlSlides = '';
  imagesJson.forEach((url) => {
    htmlSlides = htmlSlides + ' ' + makeSlide(url);
  });

  return firstSlide + htmlSlides;
};

export { makeCarousel };
