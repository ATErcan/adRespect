import { data } from "./helpers/navbarData.js";
import { createListLink } from "./functions.js";

const searchIcon = document.getElementById('searchIcon');
let screenWidth = window.innerWidth;

const navbar = document.getElementById("navbar-nav");
const navLinkClass = "nav-link";
const navListClass = "nav-item texts small-texts px-lg-3";
const navLinkTarget = "_self";

const createDropdownNavLink = (container, data) => {
  const listElement = document.createElement("li");
  const dropdownLink = document.createElement("a");
  const dropdownList = document.createElement("ul");

  container.appendChild(listElement);
  listElement.append(...[dropdownLink, dropdownList]);

  const dropdownItemClass = "dropdown-item";
  data.items.forEach(item => {
    createListLink(dropdownList, item, dropdownItemClass);
  });

  listElement.className = "nav-item dropdown px-lg-3";
  dropdownLink.className = "nav-link dropdown-toggle texts small-texts";
  dropdownList.className = "dropdown-menu";

  listElement.id = data.id;
  dropdownLink.textContent = data.name;

  dropdownLink.href = data.link;
  dropdownLink.setAttribute("role", "button");
  dropdownLink.setAttribute("data-bs-toggle", "dropdown");
  dropdownLink.setAttribute("aria-expanded", "false");
}

data.forEach(item => {
  item.type === "dropdown"
  ? createDropdownNavLink(navbar, item)
  : createListLink(navbar, item, navLinkClass, navLinkTarget, navListClass)
});

const toggleSearchBar = (searchElement) => {
  searchElement.classList.add('slide-animation');
  if(searchElement.classList.contains('search-input-hidden')) {
    searchElement.classList.replace('search-input-hidden', 'search-input-visible');
    searchElement.classList.add('px-2');
  } else {
    searchElement.classList.remove('px-2');
    searchElement.classList.replace('search-input-visible', 'search-input-hidden');
  }
}

searchIcon.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput');
  if(screenWidth >= 992) {
    searchIcon.classList.toggle("animate__swing");
    toggleSearchBar(searchInput);
  }
});

window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;
  if (newScreenWidth !== screenWidth) {
    screenWidth = newScreenWidth;
  }
});

