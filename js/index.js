const slider = document.getElementById("slider");
const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

const sliderData = [
  {
    id: "slide1",
    title: "Nowoczesna aranżacja Twojego ogrodu",
    text: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.",
    image: "../img/hero-img.jpeg",
  },
  {
    id: "slide2",
    title: "Nowoczesna aranżacja Twojego ogrodu",
    text: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.",
    image: "../img/o-firmie.png",
  },
  {
    id: "slide3",
    title: "Nowoczesna aranżacja Twojego ogrodu",
    text: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.",
    image: "../img/hero-img.jpeg",
  },
]

const createSlide = (item) => {
  const slide = document.createElement("div");
  const heroLeft = document.createElement("div");
  const heroRight = document.createElement("div");
  const textContainer = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const btnWrapper = document.createElement("div");
  const contactBtn = document.createElement("a");
  const realisationBtn = document.createElement("a");
  const vectorIcon = document.createElement("img");

  slider.appendChild(slide);
  slide.append(...[heroLeft, heroRight])
  heroLeft.appendChild(textContainer);
  textContainer.append(...[title, text, btnWrapper]);
  btnWrapper.append(...[contactBtn, realisationBtn]);

  slide.className = "slide";
  heroLeft.className = "hero-left";
  heroRight.className = "hero-right d-none d-md-block";
  textContainer.className = "hero-text-container d-flex flex-column justify-content-center row-gap-5";
  title.className = "titles main-title";
  text.className = "texts fs-6 hero-text";
  btnWrapper.className = "d-flex flex-wrap row-gap-2 column-gap-3 column-gap-5-lg";
  contactBtn.className = "texts fs-6 btn-style btn-hover hero-buttons contact-btn animate__animated hover-effect";
  realisationBtn.className = "texts fs-6 btn-style btn-hover hero-buttons realisation-btn d-flex align-items-center column-gap-2 animate__animated hover-effect";

  contactBtn.href = "https://adrespect.pl/kontakt/#dzial";
  realisationBtn.href = "#realizacje";
  vectorIcon.src = "./img/vector-down.svg";
  vectorIcon.alt = "Vector-down";

  slide.id = item.id;
  heroRight.style.backgroundImage = `url(${item.image})`;
  title.textContent = item.title;
  text.textContent = item.text;

  contactBtn.textContent = "Skontaktuj się z nami";
  realisationBtn.appendChild(document.createTextNode("Zobacz nasze realizacje "));
  realisationBtn.appendChild(vectorIcon);
}

sliderData.map(item => {
  return createSlide(item);
})

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

const updateSlidePositions = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

const slideLeft = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  
  updateSlidePositions();
}

prevSlide.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  updateSlidePositions();
});

nextSlide.addEventListener("click", () => {
  slideLeft();
});

setInterval(slideLeft, 5000);