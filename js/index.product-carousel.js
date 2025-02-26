const slides = [
  '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
  '<div><img src="img/banana.svg" alt="Banana"></div>',
  '<div><img src="img/girl.svg" alt="Girl"></div>',
  '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentSlideIdx = 0;

function renderCarousel(slides) {
  const carouselContainer = document.querySelector(
    ".products-carousel__slides"
  );
  carouselContainer.innerHTML = slides[currentSlideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = (currentSlideIdx + 1) % slides.length;
    carouselContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx = (secondSlideIdx + 1) % slides.length;
      carouselContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  renderCarousel(slides);
}

function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  renderCarousel(slides);
}

renderCarousel(slides);

// setInterval(nextSlide, 3000);

const nextButton = document.querySelector(".products-carousel__button--next");
const prevButton = document.querySelector(".products-carousel__button--prev");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", () => {
  renderCarousel(slides);
});
