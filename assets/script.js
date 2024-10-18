document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Calculate the width of each slide
    const slideWidth = slides[0].clientWidth;

    // Handle right arrow click (next)
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    // Handle left arrow click (previous)
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        navLinks.classList.toggle('glossy');
    });
});