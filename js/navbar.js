import { data } from "./navbarData.js";

const searchIcon = document.getElementById('searchIcon');
let screenWidth = window.innerWidth;

const navbar = document.getElementById("navbar-nav");

const toggleSearchBar = (searchElement) => {
  searchElement.classList.add('slide-animation');
  if(searchElement.classList.contains('search-input-hidden')) {
    searchElement.classList.replace('search-input-hidden', 'search-input-visible');
    searchElement.classList.add('px-2')
  } else {
    searchElement.classList.remove('px-2')
    searchElement.classList.replace('search-input-visible', 'search-input-hidden');
  }
}

searchIcon.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput')
  if(screenWidth >= 992) {
    toggleSearchBar(searchInput)
  }
})

window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;
  if (newScreenWidth !== screenWidth) {
    screenWidth = newScreenWidth;
  }
});

const createNavLink = (container, data) => {
  const listElement = document.createElement("li");
  const navLink = document.createElement("a");

  container.appendChild(listElement);
  listElement.appendChild(navLink);

  listElement.className = "nav-item texts small-texts px-lg-3";
  navLink.className = "nav-link";

  listElement.id = data.id;
  navLink.href = data.link;
  navLink.textContent = data.name;
}

const createDropdownItem = (menu, item) => {
  const listElement = document.createElement("li");
  const dropdownItem = document.createElement("a");

  menu.appendChild(listElement);
  listElement.appendChild(dropdownItem);

  listElement.id = item.id;
  dropdownItem.className = "dropdown-item";
  dropdownItem.href = item.link;
  dropdownItem.textContent = item.name;
}

const createDropdownNavLink = (container, data) => {
  const listElement = document.createElement("li");
  const dropdownLink = document.createElement("a");
  const dropdownList = document.createElement("ul");

  container.appendChild(listElement);
  listElement.append(...[dropdownLink, dropdownList]);

  data.items.map(item => {
    return createDropdownItem(dropdownList, item);
  })

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

data.map(item => {
  return item.type === "dropdown"
  ? createDropdownNavLink(navbar, item)
  : createNavLink(navbar, item)
})

