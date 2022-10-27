console.log('starting catalog.cuencos.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { getWebParams } from './utils/webParams.js';
import { URLS } from './utils/constants.js';
import { carousel } from './components/carousel.js';
import { renderById } from './utils/renderById.js';

const { CATALOG_IMG_CUENCOS, CATALOG_PDF_CUENCOS } = URLS;
const pdfDownloadBtn = document.getElementById('download-btn');

const createCarousel = async () => {
  const htmlCarousel = await carousel(CATALOG_IMG_CUENCOS);
  renderById('carousel-catalog', htmlCarousel);
};

const setupDwnPdfButton = async () => {
  pdfDownloadBtn.href = CATALOG_PDF_CUENCOS;
  pdfDownloadBtn.classList.remove('disabled');
};

const setupAnalytics = async () => {
  const webParams = await getWebParams();
  if (!webParams.analytics_enabled) {
    console.log('analytics disabled');
    return;
  }

  console.log('analytics enabled');
  logEvent(analytics, events.CATALOG_CUENCOS_VIEW, { timestamp: new Date() });

  pdfDownloadBtn.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_BTN_DOWNLOAD_CLICKED, {
      timestamp: new Date()
    });
  });
};

/************************ */
createCarousel().catch((err) => console.log(err));
setupDwnPdfButton().catch((err) => console.log(err));
setupAnalytics().catch((err) => console.log(err));
