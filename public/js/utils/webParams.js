import { fetchGet } from './fetchData.js';
import { fbUrls } from '/public/js/utils/constants.js';
const { WEB_PARAMS } = fbUrls;

const getWebParams = async () => {
  return await fetchGet(WEB_PARAMS);
};

export { getWebParams };
