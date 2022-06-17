import { getData } from "./getData.js";
import { renderGalery } from "./renderGalery.js";

const init = async (selectorWrapper) => {
  const wrapper = document.querySelector(selectorWrapper)
  const photos = await getData();
  renderGalery(wrapper, photos);
};

init('.gallery__wrapper');
