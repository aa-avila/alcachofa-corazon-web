console.log('starting catalog.index.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { getWebParams } from './utils/webParams.js';
import { routes } from './utils/constants.js';
import { fetchGet } from './utils/fetchData.js';
import { fbUrls } from './utils/constants.js';
import { renderById } from './utils/renderById.js';
import { cardCategory } from './components/cardCategory.js';

const { CATALOG_CATEGORIES, CATALOG_PDF_TEST } = fbUrls;
const pdfDownloadBtn = document.getElementById('download-btn');

const createCards = async () => {
  let { cuencos, macetas, tazas, varios } = await fetchGet(CATALOG_CATEGORIES);

  cuencos.link = routes.CATALOG_CUENCOS;
  macetas.link = routes.CATALOG_MACETAS;
  tazas.link = routes.CATALOG_TAZAS;
  varios.link = routes.CATALOG_VARIOS;

  const categories = [cuencos, macetas, tazas, varios];

  const htmlCards = categories
    .map((item) => {
      return cardCategory(item);
    })
    .join('');

  renderById('cards-container', htmlCards);
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
  logEvent(analytics, events.CATALOG_INDEX_VIEW, { timestamp: new Date() });

  pdfDownloadBtn.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_BTN_DOWNLOAD_CLICKED, {
      timestamp: new Date()
    });
  });
};

/************************ */
createCards().catch((err) => console.log(err));
setupDwnPdfButton().catch((err) => console.log(err));
setupAnalytics().catch((err) => console.log(err));
