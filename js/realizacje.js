import { data as realizacjeData } from "./helpers/relizacjeData.js";

const masonryGrid = document.querySelector('.grid');
const expandBtn = document.querySelector('.expand-btn');
const modalImg = document.querySelector(".modal-img");
const prevImg = document.getElementById("prevButton");
const nextImg = document.getElementById("nextButton");

let masonry;
let page = 0;
let activeIndex;
let images = [];

const createGridItem = (src, alt, id) => {
  const imageDiv = document.createElement("div");
  const link = document.createElement("a");
  const image = document.createElement("img");

  masonryGrid.appendChild(imageDiv);
  imageDiv.appendChild(link);
  link.appendChild(image);

  imageDiv.className = "grid-item";
  link.href = `#photoGallery`;
  link.dataset.bsToggle = "modal";
  link.dataset.bsTarget = `#photoGallery`;

  image.src = src;
  image.alt = alt;

  image.addEventListener('load', () => {
    masonry.layout();
  });

  image.addEventListener("click", () => {
    modalImg.src = src;
    modalImg.alt = alt;
    modalImg.id = id;
    activeIndex = images.findIndex(item => item.id === modalImg.id);
  })
}

const masonryLayout = () => {
  masonry = new Masonry(masonryGrid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    fitWidth: true,
    gutter: 40,
  });
}

const getImages = (page = 1) => {
  const url = `https://api.unsplash.com/photos?client_id=${key}&page=${page}`
  try {
    fetch(url).then(res => res.json()).then(data => {
      gridExpandStyle(data);
      data.map((item) => {
        const imgUrl = 
          item.urls.regular
          ?? "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=1380&t=st=1692369396~exp=1692369996~hmac=e07c889690be317cda5c6fafa06e7ef8595a704dc83bd97ed76a407f4ea6c884";
        const imgAlt = item.alt_description ?? "unsplash-image";
        addImagesToArray(item.id, imgUrl, imgAlt)
        return createGridItem(imgUrl, imgAlt, item.id);
      })

      masonryLayout();
    })
  } catch (error) {
    console.log(error)
  }
}

const gridExpandStyle = (data) => {
  if(data.length > 0){
    masonryGrid.classList.add("grid-expand")
  } else {
    masonryGrid.classList.remove("grid-expand");
    expandBtn.classList.add("d-none");
  }
}

const addImagesToArray = (id, url, alt) => {
  const imgObj = {
    id: id,
    url: url,
    alt: alt,
  }
  images.push(imgObj);
}

const swipeImage = (index) => {
  modalImg.style.opacity = 0.8;
  setTimeout(() => {
    modalImg.id = images[index].id;
    modalImg.src = images[index].url;
    modalImg.alt = images[index].alt;

    modalImg.style.opacity = 1;

    modalImg.addEventListener('transitionend', () => {
      modalImg.style.opacity = '';
    }, { once: true });
  }, 300); 
}

prevImg.addEventListener("click", () => {
  activeIndex = activeIndex === 0
  ? images.length - 1
  : activeIndex - 1;
  swipeImage(activeIndex);
})

nextImg.addEventListener("click", () => {
  activeIndex = activeIndex === images.length - 1
  ? 0
  : activeIndex + 1;
  swipeImage(activeIndex);
})

window.onload = () => {
  realizacjeData.map(item => {
    addImagesToArray(item.id, item.src, item.alt);
    masonryGrid.classList.add("grid-expand")
    return createGridItem(item.src, item.alt, item.id)
  })
  masonryLayout();
}

expandBtn.addEventListener("click", (e) => {
  page += 1;
  getImages(page);
})
