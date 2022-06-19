import { getData } from "./getData.js";
import { renderGalery } from "./renderGalery.js";

const init = async ({selectorGalleryWrapper, selectorPhotoyWrapper}) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoyWrapper);
if (galleryWrapper) {
  const photos = await getData('data.json');
  renderGalery(galleryWrapper, photos);
}

if (photoWrapper) {
  const url = new URL(location.href);

  const photo = await getData('photo.json');
  renderPhoto(photoWrapper, photo);
}
};

init({
  selectorGalleryWrapper: '.gallery__wrapper',
  selectorPhotoyWrapper: '.photo__wrapper'
});
