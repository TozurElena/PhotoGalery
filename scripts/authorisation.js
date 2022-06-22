import { ACCESS_KEY, API_URL_AUTH, API_URL_TOKEN, REDIRECT_URI, RESPONSE_TYPE, SCOPE, SECRET_KEY } from './const.js';
import { getUserData } from './getUserData.js';

const getToken = (code) => {
  const url = new URL(API_URL_TOKEN);
// https://unsplash.com/documentation/user-authentication-workflow
  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', 'authorization_code');
  
  return fetch(url, {method: 'POST'}) 
    .then(response => response.json())
    .then(data => {
      return data.access_token
      
    })

}

const checkLogin = async () => {
  const url = new URL(location.href);
  // de url prendre code
  const code = url.searchParams.get('code');
  if (code) {
    const token = await getToken(code);
    
    localStorage.setItem('Bearer', token);

    const url = new URL(location);
    url.searchParams.delete('code');
    // changer la barre d'adresse
    history.pushState(null, document.title, url);
    return true

  } else if (localStorage.getItem('Bearer')) {
    return true
  }
  return false;
}
// function pour autorisation
const login = () => {
  const url = new URL(API_URL_AUTH);

  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('response_type', RESPONSE_TYPE);	
// oblast vidimosty
  url.searchParams.append('scope', SCOPE);
  // pour pereiti de JS à URL mogno ispolzovat location
  location.href = url;
}

// function pour exit, deautorisation
const logout = (e) => {
  const btn = e.target;
  if (confirm('Vous êtes sure?')) {
    localStorage.removeItem('Bearer');
    btn.textContent = '';
    btn.style.backgroundImage = '';
  }
  
}

export const authorisation = async (btn) => {
  if (await checkLogin()) {
    // console.log('Autorisé');
    const dataUser = await getUserData();
    btn.textContent = dataUser.username;
    btn.style.backgroundImage = `url(${dataUser.profile_image.medium})`;
    btn.addEventListener('click', logout);
  } else {
    console.log('Pas Autorisé');
    btn.addEventListener('click', login);
  }
  
}