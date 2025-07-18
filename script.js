// Simple image slider
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
});
