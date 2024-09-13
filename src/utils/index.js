import jsIcons from "../assets/icons/javascript.svg";
import bootstrapIcons from "../assets/icons/bootstrap.svg";
import tailwindIcons from "../assets/icons/tailwind.svg";
import reactIcons from "../assets/icons/react.svg";
import reduxIcons from "../assets/icons/redux.svg";
import postmanIcons from "../assets/icons/postman.svg";
import figmaIcons from "../assets/icons/figma.svg";
import npmIcons from "../assets/icons/npm.svg";
import TSIcons from "../assets/icons/typescript.svg";
import NextIcons from "../assets/icons/next-js.png";
import NodeIcons from "../assets/icons/node-js.svg";
import ExpressIcons from "../assets/icons/express.svg";

import BinarLogo from "../assets/binar-logo.png";
import DicodingLogo from "../assets/dicoding.webp";

const icons = [
  { id: 1, image: jsIcons, name: "JavaScript" },
  { id: 2, image: TSIcons, name: "TypeScript" },
  { id: 3, image: bootstrapIcons, name: "Bootstrap" },
  { id: 4, image: tailwindIcons, name: "Tailwind CSS" },
  { id: 5, image: reactIcons, name: "React" },
  { id: 6, image: reduxIcons, name: "Redux" },
  { id: 7, image: NextIcons, name: "Next.js" },
  { id: 8, image: NodeIcons, name: "Node.js" },
  { id: 9, image: ExpressIcons, name: "Express.js" },
  { id: 10, image: postmanIcons, name: "Postman" },
  { id: 11, image: figmaIcons, name: "Figma" },
  { id: 12, image: npmIcons, name: "npm" },
];

const experience = [
  {
    id: 1,
    name: "Binar Academy",
    image: BinarLogo,
    companyName: "PT Lentera Benderang",
    date: "Agust 2023 - Des 2023",
    position: "Frontend JavaScript",
    description: [
      "Developed a ToDo List Website with CRUD capabilities utilizing Tailwind CSS and React Js to complete the task.",
      "Building a Movie Rating Website in collaboration using Git with the team. Using React Js and Tailwind CSS, integrating with the Restful API, and implementing Redux state management.",
      "Collaborate in developing the Course Web using Git with the Front End and Back End teams. Used Tailwind CSS, React Js, implemented Redux state management, and integrated with APIs from the Backend team as part of the final project completion.",
    ],
  },
  {
    id: 2,
    name: "Dicoding Indonesia",
    image: DicodingLogo,
    companyName: "PT Presentologics",
    date: "Feb 2024 - Jun 2024",
    position: "React dan Back End",
    description: [
      "Learn and apply the material learned by doing the assignment at the end of the module.",
      "Develop a React-powered NotesApp SPA website and incorporate APIs.",
      "Build a ForumApp website using Redux and React, and connect it with APIs.",
      "Collaborated in developing a Job Finder Platform for Job Portal sites using Git with Back End. Used Next UI, React Js, implemented Redux state management, and integrated with APIs from the Backend team as part of the Capstone Project completion.",
    ],
  },
];

export { experience, icons };
