console.log('hola en catalog');

const catalogImgUrl =
  'https://alcachofa-corazon-default-rtdb.firebaseio.com/catalog/img-pages.json';

const fetchGet = async (url) => {
  const response = await fetch(url);
  return response.json();
};

async function run() {
  console.log(await fetchGet(catalogImgUrl));
}
run();
