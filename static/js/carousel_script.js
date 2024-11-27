document.addEventListener('DOMContentLoaded', function() {
        const carouselImages = document.querySelector('.carousel-images');
        const images = carouselImages.querySelectorAll('img');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselImages.style.transform = `translateX(${offset}%)`;
        }

        function nextImage() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }

        function prevImage() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1;
            }
            updateCarousel();
        }

        document.querySelector('.carousel-button.right').addEventListener('click', nextImage);
        document.querySelector('.carousel-button.left').addEventListener('click', prevImage);
    });