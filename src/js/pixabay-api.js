// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const paramsPix = {
  key: '48322824-27a37556f84a2ff5b53428f9b',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export function onGetPhotoByText(query) {
  const API_KEY = '48322824-27a37556f84a2ff5b53428f9b';
  const targetUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${paramsPix.image_type}&orientation=${paramsPix.orientation}&safesearch=${paramsPix.safesearch}`;
  return fetch(targetUrl).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
export function onFetchError() {
  iziToast.show({
    backgroundColor: '#ef4040',
    message:
      'Sorry, there are no images matching </br> your search query. Please, try again!',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
  });
}
