import { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Syechrul Imam, now an intern at CETC and a research
              assistant at Peking University.
            </div>
            <div className="mt-1">
              I got my bachelor's degree in Software Engineering at Tongji
              University in 2020. I'm now waiting for starting my graduate
              study.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Machine Learning / Deep Learning / Continual Learning / Meta-Learning / Reinforcement Learning / Natural Language Processing"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm open to research / algorithm engineer internships for summer 2021 (base in China) lol."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:syechrulimam@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                syechrulimam@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="mailto:syechrulimam@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                syechrulimam@hotmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ndagelan"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/ndagelan
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                className="text-blue-300"
                href="https://www.instagram.com/imam_walks"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/imam_walks
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://imamsec.org"
                target="_blank"
                rel="noreferrer"
              >
                https://imamsec.org
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
