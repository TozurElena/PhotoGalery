import { getData } from "./getData.js";
import { renderGalery } from "./renderGalery.js";
import { renderPhoto } from "./renderPhoto.js";

const init = async ({selectorGalleryWrapper, selectorPhotoWrapper}) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);

if (galleryWrapper) {
  // budem poluchat 30 photos
  const photos = await getData({ count: 30 });
  renderGalery(galleryWrapper, photos);
}

if (photoWrapper) {
  const url = new URL(location.href);
  const idPhoto = url.searchParams.get('photo');

  if (idPhoto) {
    const photo = await getData({idPhoto});
    renderPhoto(photoWrapper, photo);
  }
}

};

init({
  selectorGalleryWrapper: '.gallery__wrapper',
  selectorPhotoWrapper: '.photo__wrapper',
});
