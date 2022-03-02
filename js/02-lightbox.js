import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

console.log(galleryItems);
function createGalleryItem() {
    return galleryItems.map(item => `<a class="gallery__item" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            
        />
    </a>`).join('');    
}

gallery.innerHTML = createGalleryItem();
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});

gallery.addEventListener("click", fullImg);

function fullImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return lightbox;
    }
    
}

