console.log('hola en catalog');

const catalogImgUrl =
  'https://alcachofa-corazon-default-rtdb.firebaseio.com/catalog/img-pages.json';

const fetchGet = async (url) => {
  const response = await fetch(url);
  return response.json();
};

async function run() {
  const catalogImgJson = await fetchGet(catalogImgUrl);
  console.log(catalogImgJson);

  //   document.getElementById(
  //     'imgTest'
  //   ).innerHTML = `<img id="imgTest" src="${catalogImgJson[2]}" class="card-img-top" alt="...">`;

  const htmlFirstSlide = `
    <div class="carousel-item active">
      <img src="${catalogImgJson[1]}" class="d-block w-100" alt="...">
    </div>`;

  const makeSlide = (imgUrl) => {
    const html = `
    <div class="carousel-item">
      <img src="${imgUrl}" class="d-block w-100" alt="...">
    </div>`;
    return html;
  };

  catalogImgJson.splice(0, 2);
  console.log(catalogImgJson);

  let htmlSlides = '';

  catalogImgJson.forEach((url) => {
    htmlSlides = htmlSlides + ' ' + makeSlide(url);
  });

  document.getElementById('carousel-catalog').innerHTML =
    htmlFirstSlide + ' ' + htmlSlides;
}
run();
