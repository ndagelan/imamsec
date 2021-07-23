import { WebsitesData } from "../types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Blog",
        img: "https://zxh.io/img/avatar.jpg",
        link: "https://imamsec.org",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/ndagelan"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/imam.walks"
      },
      {
        id: "my-instagram",
        title: "Instagram",
        img: "img/sites/Instagram.svg",
        link: "https://www.instagram.com/imam_walks/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:syechrulimam@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "Tokopedia",
        title: "Tokopedia",
        img: "img/sites/Tokopedia.svg",
        link: "https://tokopedia.com/"
      }
    ]
  }
};

export default websites;
