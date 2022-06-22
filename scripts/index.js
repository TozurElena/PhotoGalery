import { authorisation } from "./authorisation.js";
import { getData } from "./getData.js";
import { renderGalery } from "./renderGalery.js";
import { renderPhoto } from "./renderPhoto.js";
import { handlerLike } from "./handlerLike.js"; 

const init = async ({
  selectorGalleryWrapper, 
  selectorPhotoWrapper,
  selectorAuthButton
}) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);
  // button pour autorisation
  const authButton = document.querySelector(selectorAuthButton);

  authorisation(authButton);
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
      const photoLike = renderPhoto(photoWrapper, photo);

      photoLike.addEventListener('click', () => {
        if (localStorage.getItem('Bearer')) {
          handlerLike(photoLike);
        }
      })
    }
  }

};

init({
  selectorGalleryWrapper: '.gallery__wrapper',
  selectorPhotoWrapper: '.photo__wrapper',
  selectorAuthButton: '.header__login-button'
});
