console.log('starting index.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { routes, socialLinks } from './utils/constants.js';
import { getWebParams } from './utils/webParams.js';

const btnCatalog = document.getElementById('btn-catalog');
const btnWp = document.getElementById('btn-wp');

const setupAnalytics = async () => {
  const webParams = await getWebParams();
  if (!webParams.analytics_enabled) {
    console.log('analytics disabled');
    return;
  }

  console.log('analytics enabled');
  logEvent(analytics, events.HOME_VIEW, { timestamp: new Date() });

  btnCatalog.addEventListener('click', () => {
    logEvent(analytics, events.HOME_BTN_CATALOG_CLICKED, {
      timestamp: new Date()
    });
  });

  btnWp.addEventListener('click', () => {
    logEvent(analytics, events.HOME_BTN_WP_CLICKED, {
      timestamp: new Date()
    });
  });
};

/************************ */

btnCatalog.addEventListener('click', () => {
  window.location.assign(routes.CATALOG);
});

btnWp.addEventListener('click', () => {
  window.location.assign(socialLinks.WHATSAPP);
});

setupAnalytics().catch((err) => console.log(err));
