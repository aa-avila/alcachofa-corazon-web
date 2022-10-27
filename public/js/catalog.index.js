console.log('starting catalog.index.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { getWebParams } from './utils/webParams.js';
import { ROUTES } from './utils/constants.js';
import { fetchGet } from './utils/fetchData.js';
import { URLS } from './utils/constants.js';
import { renderById } from './utils/renderById.js';
import { cardCategory } from './components/cardCategory.js';

const { CATALOG_CATEGORIES, CATALOG_PDF_FULL } = URLS;
const pdfDownloadBtn = document.getElementById('download-btn');

const createCards = async () => {
  let { cuencos, tazas, platos, teteras, macetas, varios } = await fetchGet(
    CATALOG_CATEGORIES
  );

  cuencos.link = ROUTES.CATALOG_CUENCOS;
  tazas.link = ROUTES.CATALOG_TAZAS;
  platos.link = ROUTES.CATALOG_PLATOS;
  teteras.link = ROUTES.CATALOG_TETERAS;
  macetas.link = ROUTES.CATALOG_MACETAS;
  varios.link = ROUTES.CATALOG_VARIOS;

  const categories = [cuencos, tazas, platos, teteras, macetas, varios];

  const htmlCards = categories
    .map((item) => {
      return cardCategory(item);
    })
    .join('');

  renderById('cards-container', htmlCards);
};

const setupDwnPdfButton = async () => {
  pdfDownloadBtn.href = CATALOG_PDF_FULL;
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
