const slideContainer = document.querySelector(".slides");
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  slideContainer.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}
