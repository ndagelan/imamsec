import { FaPaw, FaGithubSquare } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GoRepo } from "react-icons/go";
import { FcGallery, FcAbout } from "react-icons/fc";

import { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a angel lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <FaGithubSquare />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <FcAbout />,
        excerpt: "Something about this personal portfolio site..."
      },
      {
        id: "about-galery",
        title: "Gallery",
        file: "markdown/galery.md",
        icon: <FcGallery />,
        excerpt: "About galery of this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: []
  }
];

export default bear;
