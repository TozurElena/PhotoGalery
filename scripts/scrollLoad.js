import { createCardPhoto } from "./createCardFhoto.js";
import { getData } from "./getData.js";

export const scrollLoad = (gallery, grid, endElement) => {
  let i = 1; //pour changer numbre de pages
  // observer - pattern; intro JS il est vstroenn
  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) {
        // poluchaem news photos
        const photos = await getData({ page: ++i, count: 30 });
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
