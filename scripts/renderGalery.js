
import { createCardPhoto } from "./createCardFhoto.js";

export const renderGalery = (photos) => {
  const gallery = document.querySelector('.grid');
  const cards = photos.map(createCardPhoto);
  gallery.append(...cards)
  
}