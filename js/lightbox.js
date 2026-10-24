
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('.lightbox-trigger').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const thumbnail = this.querySelector('img');
    lightboxImage.src = this.href;
    lightboxImage.alt = thumbnail.alt;
    lightbox.hidden = false;
    closeButton.focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
}

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});
