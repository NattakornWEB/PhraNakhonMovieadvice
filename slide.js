const track = document.querySelector('.carousel-track');
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * (slideWidth + 30)}px)`;
}

function moveLeft() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
}

function moveRight() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);