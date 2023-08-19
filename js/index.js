const slides = document.querySelectorAll(".slide");
const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

let currentSlide = 0;

prevSlide.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

nextSlide.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

slides.forEach(slide => {
  slide.addEventListener("transitionend", () => {
    slide.style.opacity = "1";
  })
})