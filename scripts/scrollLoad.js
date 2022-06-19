import { createCardPhoto } from "./createCardFhoto.js";
import { getData } from "./getData.js";

export const scrollLoad = (gallery, grid, endElement) => {
  // observer - pattern; intro JS il est vstroenn
  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) {
        // poluchaem news photos
        const photos = await getData('data.json');
        // perebiraem photos, creer les cards
        const cards = photos.map(createCardPhoto);

        Promise.all(cards)
          .then(cards => {
            gallery.append(...cards);
            grid.appended(cards);//creer setky de photos
            
          });
      }
    }, 
    {
      rootMargin: '150px',
    },
  );

  // sledim za endElem
  observer.observe(endElement)
};
