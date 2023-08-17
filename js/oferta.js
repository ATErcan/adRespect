import { data } from "./ofertaData.js";
const gridRow = document.getElementById("cardGridRow");

const createCardComponent = ( cardContent ) => {
  const gridCol = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardIcon = document.createElement("img");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("p");
  const cardLink = document.createElement("a");
  const vectorIcon = document.createElement("img");

  gridRow.appendChild(gridCol);
  gridCol.appendChild(cardContainer);
  cardContainer.appendChild(cardBody);
  cardBody.append(...[cardIcon, cardTitle, cardText, cardLink]);
  cardLink.appendChild(document.createTextNode("Dowiedz się więcej "));
  cardLink.appendChild(vectorIcon);
  
  gridCol.id = cardContent.id;
  cardIcon.src = cardContent.icon;
  cardIcon.alt = cardContent.title;
  vectorIcon.src = "./img/vector-right.svg";
  vectorIcon.alt = "Vector-right";
  cardLink.href = cardContent.link;

  gridCol.className = "col-12 col-md-6 col-lg-4"
  cardContainer.className = "card";
  cardBody.className = "card-body";
  cardIcon.className = "icon";
  cardTitle.className = "titles card-title";
  cardText.className = "texts small-texts card-text";
  cardLink.className = "texts fs-6 card-link";
  vectorIcon.className = "ms-2";

  if(cardContent.title === "Wizualizacje"){
    cardIcon.classList.add("py-2")
  }

  cardTitle.textContent = cardContent.title;
  cardText.textContent = cardContent.text;
}

data.map(cardContent => {
  return createCardComponent(cardContent);
})