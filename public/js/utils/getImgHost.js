import { HOSTS } from './constants.js';
// import { fetchGet } from './fetchData.js';

export const getImgHost = async () => HOSTS.IMAGES_PRIMARY;

// export const getImgHost = async () => {
//   const { data: primaryStatus } = await fetchGet(HOSTS.IMAGES_PRIMARY);
//   if (primaryStatus === 'OK') {
//     return HOSTS.IMAGES_PRIMARY;
//   }
//   return HOSTS.IMAGES_SECONDARY;
// };

