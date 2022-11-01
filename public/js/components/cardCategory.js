const cardCategory = (data) => {
  const html = `
    <div class="col">
        <div class="card border-0">
            <a href="${data.link}" class="stretched-link"></a>
            <img src="${data.img}" class="card-img-top"
                alt="...">
            <div class="card-body p-2">
                <h6 class="card-title">${data.title}</h6>
            </div>
        </div>
    </div>
    `;
  return html;
};

export { cardCategory };
