import { API_URL_PHOTOS } from "./const.js";

// https://unsplash.com/documentation#like-a-photo

export const handlerLike = (photoLike) => {
  const url = new URL(`${API_URL_PHOTOS}/${photoLike.id}/like`);

  const toggleLike = (data) => {
    console.log('data: ', data);
    if (data.photo.liked_by_user) {
      photoLike.classList.remove('photo__like_o');
    } else {
      photoLike.classList.add('photo__like_o')
    }

    photoLike.likedByUser = data.photo.liked_by_user;
    photoLike.textContant = data.photo.likes;
  }
    fetch(url, {
    method: photoLike.likedByUser ? 'DELETE' : 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
    }
  })
  .then(response => response.json())
  .then(toggleLike);
  
  
};