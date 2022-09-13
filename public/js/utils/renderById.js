const renderById = (elementId, innerHtml) => {
  try {
    document.getElementById(elementId).innerHTML = innerHtml;
  } catch (error) {
    console.log(error);
  }
};

export { renderById };
