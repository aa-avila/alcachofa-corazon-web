console.log('starting index.js');
import { logEvent, analytics } from './firebase/config.js';
import { events } from './firebase/events.js';
import { routes, socialLinks } from './utils/constants.js';
import { webParams } from './utils/webParams.js';

const btnCatalog = document.getElementById('btn-catalog');
const btnWp = document.getElementById('btn-wp');

btnCatalog.addEventListener('click', () => {
  window.location.assign(routes.CATALOG);
});

btnWp.addEventListener('click', () => {
  window.location.assign(socialLinks.WHATSAPP);
});

if (webParams.analytics_enabled) {
  console.log('analytics enabled');
  logEvent(analytics, events.HOME_VIEW, { timestamp: new Date() });

  btnCatalog.addEventListener('click', () => {
    logEvent(analytics, events.HOME_BTN_CATALOG_CLICKED, {
      timestamp: new Date()
    });
  });

  btnWp.addEventListener('click', () => {
    logEvent(analytics, events.HOME_BTN_WP_CLICKED, { timestamp: new Date() });
  });
}
