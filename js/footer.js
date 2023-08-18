import { data } from "./footerData.js";
import { createListLink } from "./functions.js";

const socialMediaList = document.getElementById("socialMediaList");

const createSocialMediaLinks = (container, data) => {
  const linkClass = "texts small-texts";
  const target = "_blank"

  data.map(item => {
    return createListLink(container, item, linkClass, target);
  })
}

createSocialMediaLinks(socialMediaList, data);
