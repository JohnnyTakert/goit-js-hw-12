// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const newGallery = document.querySelector('.main-list');

let userDataLog = new SimpleLightbox('.main-list a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function onCreateGalleryPhoto(data, flag) {
  newGallery.insertAdjacentHTML('beforeend', onCreateData(data.hits));

  if (flag) {
    const elem = document.querySelector('.gallery-item');
    const rect = elem.getBoundingClientRect();
    console.log('rect.key');
    console.log(rect.height);
    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });
  }

  userDataLog.refresh();
}
function onCreateData(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${largeImageURL}>
                <img
                  class="gallery-image"
                  src=${webformatURL}
                  alt=${tags}

                />
              </a>
              <ul class="adds-list">
                <li class="info-item">
                  <p class="text-item text-item-name">Likes</p>
                  <p class="text-item">${likes}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Views</p>
                  <p class="text-item">${views}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${comments}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${downloads}</p>
                </li>
              </ul>
            </div>
          </li>`;
      }
    )
    .join('');
}
