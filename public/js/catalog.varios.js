console.log('starting catalog.varios.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { getWebParams } from './utils/webParams.js';
import { URLS } from './utils/constants.js';
import { carousel } from './components/carousel.js';
import { renderById } from './utils/renderById.js';
import { getImgHost } from './utils/getImgHost.js';

const imgHost = await getImgHost();

const { CATALOG_IMG_VARIOS, CATALOG_PDF_VARIOS } = URLS;
const pdfDownloadBtn = document.getElementById('download-btn');
const wpFloatBtn = document.getElementById('wp-float-btn');
const backBtnTop = document.getElementById('back-btn-top');
const navbarBrand = document.getElementsByClassName('navbar-brand');
const homeNavbarLink = document.getElementById('home-navbar-link');
const wpNavbarLink = document.getElementById('wp-navbar-link');

const createCarousel = async () => {
  const htmlCarousel = await carousel(`${imgHost}${CATALOG_IMG_VARIOS}`);
  renderById('carousel-catalog', htmlCarousel);
};

const setupDwnPdfButton = async () => {
  pdfDownloadBtn.href = CATALOG_PDF_VARIOS;
  pdfDownloadBtn.classList.remove('disabled');
};

const setupAnalytics = async () => {
  const webParams = await getWebParams();
  if (!webParams.analytics_enabled) {
    console.log('analytics disabled');
    return;
  }

  console.log('analytics enabled');
  logEvent(analytics, events.CATALOG_VARIOS_VIEW, { timestamp: new Date() });

  pdfDownloadBtn.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_VARIOS_BTN_DOWNLOAD_CLICKED, {
      timestamp: new Date()
    });
    logEvent(analytics, events.DOWNLOAD_CATALOG_PARTIAL, {
      timestamp: new Date()
    });
  });

  wpFloatBtn.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_VARIOS_BTN_WP_CLICKED, {
      timestamp: new Date()
    });
    logEvent(analytics, events.GO_TO_WHATSAPP, {
      timestamp: new Date()
    });
  });

  backBtnTop.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_VARIOS_BTN_BACK_TOP_CLICKED, {
      timestamp: new Date()
    });
  });

  navbarBrand[0].addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_INDEX_NAVBRAND_CLICKED, {
      timestamp: new Date()
    });
  });

  homeNavbarLink.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_INDEX_NAVLINK_HOME_CLICKED, {
      timestamp: new Date()
    });
  });

  wpNavbarLink.addEventListener('click', () => {
    logEvent(analytics, events.CATALOG_INDEX_NAVLINK_WP_CLICKED, {
      timestamp: new Date()
    });
    logEvent(analytics, events.GO_TO_WHATSAPP, {
      timestamp: new Date()
    });
  });
};

/************************ */
createCarousel().catch((err) => console.log(err));
setupDwnPdfButton().catch((err) => console.log(err));
setupAnalytics().catch((err) => console.log(err));
