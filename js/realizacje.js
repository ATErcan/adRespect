const masonryGrid = document.querySelector('.grid');
const expandBtn = document.querySelector('.expand-btn');

let masonry;
let page = 1;

const createGridItem = (src, alt, id) => {
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");

  masonryGrid.appendChild(imageDiv);
  imageDiv.appendChild(image);

  imageDiv.id = id;
  imageDiv.className = "grid-item";

  image.src = src;
  image.alt = alt;

  image.addEventListener('load', () => {
    masonry.layout();
  });
}

const getImages = (page = 1) => {
  const key = "YqILCJyi8ozoQyApRj5AZ2HQkOQSfwExW4GvpsKfYJw"
  const url = `https://api.unsplash.com/photos?client_id=${key}&page=${page}`
  try {
    fetch(url).then(res => res.json()).then(data => {
      console.log(data)
      data.map((item) => {
        const imgUrl = 
        item.urls.regular
        ?? "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=1380&t=st=1692369396~exp=1692369996~hmac=e07c889690be317cda5c6fafa06e7ef8595a704dc83bd97ed76a407f4ea6c884";
        const imgAlt = item.alt_description ?? "unsplash-image";
        return createGridItem(imgUrl, imgAlt, item.id);
      })

      masonry = new Masonry(masonryGrid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        fitWidth: true,
      });
    })
  } catch (error) {
    console.log(error)
  }
}

window.onload = () => {
  getImages();
}

expandBtn.addEventListener("click", (e) => {
  page += 1;
  getImages(page);
})
