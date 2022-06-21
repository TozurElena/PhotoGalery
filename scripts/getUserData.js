import { API_URL } from "./const.js"

// https://unsplash.com/documentation#get-the-users-profile
export const getUserData = () => {
  return fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
    }
  }).then(response => response.json())
}