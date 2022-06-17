
import { createCardPhoto } from "./createCardFhoto.js";
import { createElem } from "./creatElem.js";

export const renderGalery = (wrapper, photos) => {
  const gallery = createElem('ul', {
    className: 'grid',
  });
  wrapper.append(gallery);

  // initialiser Masonry
  const grid = new Masonry(gallery, {
    gutter:10, //rasstoyanie megdy elemetami
    itemSelector: '.card',
    columnWidth: 200,
    isFitWidth: true, //center
  })
  const cards = photos.map(createCardPhoto);
  gallery.append(...cards);
  grid.appended(cards);//creer setky de photos
  
  
}