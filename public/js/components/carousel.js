import { fetchGet } from '../utils/fetchData.js';

const slideActive = (imgUrl) => {
  const html = `
    <div class="carousel-item active">
      <img src="${imgUrl}" class="d-block w-100" alt="...">
    </div>`;
  return html;
};

const slide = (imgUrl) => {
  const html = `
    <div class="carousel-item">
      <img src="${imgUrl}" class="d-block w-100" alt="...">
    </div>`;
  return html;
};

const carousel = async (imagesUrl) => {
  const imgUrls = await fetchGet(imagesUrl);

  const firstSlide = slideActive(imgUrls[1]);

  imgUrls.splice(0, 2);

  const slides = imgUrls.map((url) => slide(url)).join('');

  return firstSlide + slides;
};

export { carousel };
