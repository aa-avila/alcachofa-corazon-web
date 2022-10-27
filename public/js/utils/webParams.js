import { fetchGet } from './fetchData.js';
import { URLS } from '/public/js/utils/constants.js';
const { WEB_PARAMS } = URLS;

const getWebParams = async () => {
  return await fetchGet(WEB_PARAMS);
};

export { getWebParams };
