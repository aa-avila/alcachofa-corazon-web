const HOSTS = {
  IMAGES_PRIMARY: 'https://alcahofa-images.onrender.com',
  IMAGES_SECONDARY: 'https://alcahofa-images.up.railway.app'
};

const URLS = {
  WEB_PARAMS:
    'https://alcachofa-corazon-default-rtdb.firebaseio.com/web-page/params.json',

  CATALOG_CATEGORIES:
    'https://alcachofa-corazon-default-rtdb.firebaseio.com/catalog/categories.json',

  CATALOG_IMG_TEST: '/images?folder=alcachofa/catalogo-prueba-img&limit=100',
  CATALOG_PDF_TEST:
    'https://alcachofa-corazon-default-rtdb.firebaseio.com/catalog/pdf/test.json',

  CATALOG_IMG_CUENCOS:
    '/images?folder=alcachofa/catalog-img/CUENCOS-Y-BOWLS&limit=500',
  CATALOG_IMG_TAZAS:
    '/images?folder=alcachofa/catalog-img/TAZAS-Y-MATES&limit=500',
  CATALOG_IMG_PLATOS: '/images?folder=alcachofa/catalog-img/PLATOS&limit=500',
  CATALOG_IMG_TETERAS: '/images?folder=alcachofa/catalog-img/TETERAS&limit=500',
  CATALOG_IMG_MACETAS:
    '/images?folder=alcachofa/catalog-img/MACETITAS-Y-FLOREROS&limit=500',
  CATALOG_IMG_VARIOS: '/images?folder=alcachofa/catalog-img/VARIOS&limit=500',

  CATALOG_PDF_CUENCOS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_CUENCOS-Y-BOWLS.pdf?alt=media&token=46f753b1-cc27-44e3-a716-e954646abbcf',
  CATALOG_PDF_TAZAS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_TAZAS-Y-MATES.pdf?alt=media&token=f0321b9d-83ef-4067-82c5-dfa00abb08cd',
  CATALOG_PDF_PLATOS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_PLATOS.pdf?alt=media&token=dd9f6008-6b65-4e2e-ae7e-b06c58d217a6',
  CATALOG_PDF_TETERAS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_TETERAS.pdf?alt=media&token=a8204b14-f9b8-4c4f-8e02-8ea9315cfb8e',
  CATALOG_PDF_MACETAS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_MACETITAS-Y-FLOREROS.pdf?alt=media&token=18ca03bd-f1db-487c-a63f-beb86e4c30fe',
  CATALOG_PDF_VARIOS:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_VARIOS.pdf?alt=media&token=e80aaed1-32f4-4e3a-90c0-421e5b47bd97',
  CATALOG_PDF_FULL:
    'https://firebasestorage.googleapis.com/v0/b/alcachofa-corazon.appspot.com/o/catalog%2Fpdf%2FCATALOGO_COMPLETO.pdf?alt=media&token=4916552e-4c0e-4ef1-813b-c04963a15529',
};

const ROUTES = {
  HOME: '/index.html',
  ABOUT: '/public/pages/about.html',
  TALLERES: '/public/pages/talleres.html',
  CATALOG_INDEX: '/public/pages/catalog/index.html',
  CATALOG_CUENCOS: '/public/pages/catalog/cuencos.html',
  CATALOG_TAZAS: '/public/pages/catalog/tazas.html',
  CATALOG_PLATOS: '/public/pages/catalog/platos.html',
  CATALOG_TETERAS: '/public/pages/catalog/teteras.html',
  CATALOG_MACETAS: '/public/pages/catalog/macetas.html',
  CATALOG_VARIOS: '/public/pages/catalog/varios.html',
};

const SOCIAL_LINKS = {
  WHATSAPP: 'https://wa.me/5493513092821',
  INSTAGRAM: 'https://www.instagram.com/alcachofa.corazon/',
  EMAIL: 'alcachofa.corazon@gmail.com',
};

export { HOSTS, URLS, ROUTES, SOCIAL_LINKS };
