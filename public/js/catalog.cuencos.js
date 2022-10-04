console.log('starting catalog.cuencos.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { routes } from './utils/constants.js';
import { getWebParams } from './utils/webParams.js';
import { fetchGet } from './utils/fetchData.js';
import { fbUrls } from './utils/constants.js';
import { carousel } from './components/carousel.js';
import { renderById } from './utils/renderById.js';

const { CATALOG_IMG_TEST, CATALOG_PDF_TEST } = fbUrls;
const pdfDownloadBtn = document.getElementById('download-btn');

const createCarousel = async () => {
  const htmlCarousel = await carousel(CATALOG_IMG_TEST);
  renderById('carousel-catalog', htmlCarousel);
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
