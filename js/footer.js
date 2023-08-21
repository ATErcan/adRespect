import { data } from "./helpers/footerData.js";
import { createListLink } from "./functions.js";

const socialMediaList = document.getElementById("socialMediaList");

const createSocialMediaLinks = (container, data) => {
  const linkClass = "texts small-texts btn-hover animate__animated socials";
  const target = "_blank";

  data.forEach(item => {
    createListLink(container, item, linkClass, target);
  });
}

createSocialMediaLinks(socialMediaList, data);
