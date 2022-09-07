console.log('starting catalog.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { routes } from './utils/constants.js';
import { getWebParams } from './utils/webParams.js';
import { fetchGet } from './utils/fetchData.js';
import { fbUrls } from './utils/constants.js';

const { CATALOG_IMG, CATALOG_PDF_TEST } = fbUrls;
const pdfDownloadBtn = document.getElementById('downloadBtn');

const makeCarousel = async () => {
  const catalogImgJson = await fetchGet(CATALOG_IMG);

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
  const catalogPdfUrl = await fetchGet(CATALOG_PDF_TEST);
  pdfDownloadBtn.href = catalogPdfUrl;
  pdfDownloadBtn.classList.remove('disabled');
};

const setupAnalytics = async () => {
  const webParams = await getWebParams();
  if (!webParams.analytics_enabled) {
    console.log('analytics disabled');
    return;
  }

  console.log('analytics enabled');
  logEvent(analytics, events.CATALOG_VIEW, { timestamp: new Date() });

  pdfDownloadBtn.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_BTN_DOWNLOAD_CLICKED, {
      timestamp: new Date()
    });
  });
};

/************************ */

makeCarousel().catch((err) => console.log(err));
setupDwnPdfButton().catch((err) => console.log(err));
setupAnalytics().catch((err) => console.log(err));
