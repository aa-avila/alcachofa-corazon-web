console.log('starting catalog.index.js');
// import { logEvent, analytics } from './firebase/config.js';
// import { events } from './firebase/events.js';
import { routes } from './utils/constants.js';
// import { getWebParams } from './utils/webParams.js';
import { fetchGet } from './utils/fetchData.js';
import { fbUrls } from './utils/constants.js';
import { renderById } from './utils/renderById.js';
import { cardCategory } from './components/cardCategory.js';

const { CATALOG_CATEGORIES } = fbUrls;

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

createCards().catch((err) => console.log(err));
