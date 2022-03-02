import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryItem() {
    return galleryItems.map(item => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
    </a>
</div>`).join('');    
}

gallery.innerHTML = createGalleryItem();

gallery.addEventListener('click', getImg);

function getImg(event) {
    event.preventDefault();
       
     if (event.target.nodeName !== "IMG") {
    return;
     }
    
    const selectedImg = event.target.dataset.source;
    console.log(selectedImg);
    const modal = basicLightbox.create(`<img src="${selectedImg}">
`);
    modal.show();

 document.addEventListener('keydown', function(e) {
     if (e.key === 'Escape') {
         modal.close();
     }
 });
 }




