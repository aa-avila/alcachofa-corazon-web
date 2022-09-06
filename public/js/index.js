console.log('starting index.js');

import { logEvent, analytics } from './firebase/config.js';

logEvent(analytics, 'home_view', { timestamp: new Date() });

const btnCatalog = document.getElementById('btn-catalog');
const btnWp = document.getElementById('btn-wp');

btnCatalog.addEventListener('click', () => {
  logEvent(analytics, 'home_btn_catalog_clicked', { timestamp: new Date() });

  window.location.assign('/public/pages/catalog.html');
});

btnWp.addEventListener('click', () => {
  logEvent(analytics, 'home_btn_wp_clicked', { timestamp: new Date() });

  window.location.assign('https://wa.me/5493513092821');
});
