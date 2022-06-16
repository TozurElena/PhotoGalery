import { getData } from "./getData.js";
import { renderGalery } from "./renderGalery.js";

const init = async () => {
  const photos = await getData();
  renderGalery(photos);
};

init();