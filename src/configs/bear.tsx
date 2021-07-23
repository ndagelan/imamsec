import { FaPaw } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { HiFire } from "react-icons/hi";

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
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "flint",
        title: "Flint",
        file:
          "https://raw.githubusercontent.com/Renovamen/flint/main/README.md",
        icon: <HiFire />,
        excerpt: "A deep learning framework implemented in Numpy...",
        link: "https://github.com/Renovamen/flint"
      },
      {
        id: "metallic",
        title: "Metallic",
        file:
          "https://raw.githubusercontent.com/Renovamen/metallic/master/README.md",
        icon: <GiJumpingDog />,
        excerpt: "A meta-learning library base on PyTorch...",
        link: "https://github.com/Renovamen/metallic"
      }
    ]
  }
];

export default bear;
