
import { createCardPhoto } from "./createCardFhoto.js";
import { createElem } from "./creatElem.js";
import { scrollLoad } from "./scrollLoad.js";

export const renderGalery = (wrapper, photos) => {
  const gallery = createElem('ul', {
    className: 'grid',
  });

  const endElem = createElem('div');

  wrapper.append(gallery);

  // initialiser Masonry
  const grid = new Masonry(gallery, {
    gutter:10, //rasstoyanie megdy elemetami
    itemSelector: '.card',
    columnWidth: 200,
    isFitWidth: true, //center
  })
  // peredaem createCardPhoto comme callback function, a ne visivaem ee
  const cards = photos.map(createCardPhoto);

  Promise.all(cards)
    .then(cards => {
      gallery.append(...cards);
      grid.appended(cards);//creer setky de photos
      wrapper.append(endElem);
      scrollLoad(gallery, grid,endElem);
    })

  
  
  
  
}