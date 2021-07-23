import { WebsitesData } from "../types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Blog",
        img: "https://zxh.io/img/avatar.jpg",
        link: "https://zxh.io/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Renovamen"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/xiaohan-zou"
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
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://www.bilibili.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "arxiv",
        title: "arXiv",
        img: "img/sites/arxiv.png",
        link: "https://arxiv.org/"
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
