import { createElem } from "./creatElem.js";

export const renderPhoto  = (photoWrapper, photo) => {
  console.log(photo);
  const img = createElem('img', {
    class:'photo_picture',
    src:photo.urls.full,
    alt: photo.description,
    style: 'max-height: 80vh;'
  });

  const author = createElem('a', {
    className: 'photo__author',
    href: photo.user.links.html,
  });

  const avatarAuthor = createElem('img', {
    src: photo.user.profile_image.regular,
    alt: photo.user.bio,
    title: photo.user.name,
  });

  const userName = createElem('span', {
    textContent: photo.user.userName,
  });

  const photoControl = createElem('div', {
    className: "photo__control",
  });
  const photoLike = createElem('button', {
    id: photo.id,
    className: 'photo__like',
    textContent: photo.likes,
  });
  const photoDownload = createElem('a', {
    className: 'photo__download',
    download: 'true',
    href: photo.urls.raw,
    target: '_blank',
  });

  author.append(avatarAuthor, userName);
  photoControl.append(photoLike, photoDownload);
  photoWrapper.append(img, author, photoControl);
};

/*

  <div class="photo__control">
    <button id="JIqH1ps4eK8" class="photo__like">30</button>
    <a 
      class="photo__download" 
      download="true" 
      href="https://unsplash.com/photos/JIqH1ps4eK8/download?ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE" 
      target="_blank">
    </a>
  </div>
*/