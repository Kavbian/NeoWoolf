const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function updateCarousel() {
    const width = images[currentIndex].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);

