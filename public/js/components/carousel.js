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
  const imagesData = await fetchGet(imagesUrl);
  const imgUrls = imagesData.data.images.map((item) => item.transform.w400);

  const firstSlide = slideActive(imgUrls[0]);

  imgUrls.splice(0, 1);

  const slides = imgUrls.map((url) => slide(url)).join('');

  return firstSlide + slides;
};

export { carousel };
