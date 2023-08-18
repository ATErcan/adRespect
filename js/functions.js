export const createListLink = (container, data, linkClass, target="_self", listClass = "") => {
  const listElement = document.createElement("li");
  const linkElement = document.createElement("a");

  container.appendChild(listElement);
  listElement.appendChild(linkElement);

  listElement.className = listClass;
  linkElement.className = linkClass;

  listElement.id = data.id;
  linkElement.href = data.link;
  linkElement.target = target;
  linkElement.textContent = data.name;
}