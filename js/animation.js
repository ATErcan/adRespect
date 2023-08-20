const fadeLeft = document.querySelectorAll(".fade-in-left");
const fadeRight = document.querySelectorAll(".fade-in-right");
const fadeUp = document.querySelectorAll(".fade-up");
const backInDown = document.querySelectorAll(".back-in-down");
const flipInY = document.querySelectorAll(".card-animate");
const socials = document.querySelectorAll(".socials");
const hoverEffect = document.querySelectorAll(".hover-effect");

const createObserver = (aniClass) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add(aniClass);
        observer.unobserve(entry.target);
      }
    })
  })
  return observer;
}

const addAnimation = (list, aniClass) => {
  list.forEach(element => {
    createObserver(aniClass).observe(element);
  })
}

addAnimation(fadeLeft, "animate__fadeInLeft");
addAnimation(fadeRight, "animate__fadeInRight");
addAnimation(backInDown, "animate__backInDown");
addAnimation(fadeUp, "animate__fadeInDown");

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.classList.add("animate__flipInY");
        cardObserver.unobserve(entry.target);
      }, index * 500);
    }
  });
})

flipInY.forEach(element => {
  cardObserver.observe(element);
})

const socialObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animate__jello");
        socialObserver.unobserve(entry.target);
      }, index * 500)
    }
  })
})

socials.forEach(element => {
  socialObserver.observe(element);
})

hoverEffect.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("animate__pulse");
  })
  element.addEventListener("mouseleave", () => {
    element.classList.remove("animate__pulse");
  })
})