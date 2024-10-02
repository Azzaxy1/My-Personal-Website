import htmlIcons from "../assets/icons/html.png";
import cssIcons from "../assets/icons/css.svg";
import jsIcons from "../assets/icons/javascript.svg";
import bootstrapIcons from "../assets/icons/bootstrap.svg";
import tailwindIcons from "../assets/icons/tailwind.svg";
import reactIcons from "../assets/icons/react.svg";
import react from "../assets/react.png";
import reduxIcons from "../assets/icons/redux.svg";
import postmanIcons from "../assets/icons/postman.svg";
import figmaIcons from "../assets/icons/figma.svg";
import npmIcons from "../assets/icons/npm.svg";
import TSIcons from "../assets/icons/typescript.svg";
import NextIcons from "../assets/icons/next-js.png";
import NodeIcons from "../assets/icons/node-js.svg";
import ExpressIcons from "../assets/icons/express.svg";
import NextUIIcon from "../assets/icons/next-ui.png";
import CypressIcon from "../assets/icons/cypress.webp";
import MongoDB from "../assets/mongo.png";

import BinarLogo from "../assets/binar-logo.png";
import DicodingLogo from "../assets/dicoding.webp";

import project1 from "../assets/img-project/project1.jpeg";
import KKM01 from "../assets/img-project/kkm01.png";
import DiscusZone from "../assets/img-project/discus-zone.png";
import PersonalWeb from "../assets/img-project/personal-web.png";
import Azis from "../assets/img-project/abdurrohman-azis.png";
import NotesHive from "../assets/img-project/note-hive.png";
import JobFinder from "../assets/img-project/job-finder.png";
import project2 from "../assets/img-project/project2.jpeg";
import project3 from "../assets/img-project/project3.png";
import project4 from "../assets/img-project/last-king.png";

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
  { id: 10, image: MongoDB, name: "Mongo DB" },
  { id: 11, image: postmanIcons, name: "Postman" },
  { id: 12, image: figmaIcons, name: "Figma" },
  { id: 13, image: npmIcons, name: "npm" },
];

const projects = [
  {
    id: 1,
    name: "Job Finder",
    image: JobFinder,
    description: "Job Portal",
    technologies: [react, NextUIIcon, reduxIcons],
    liveLink: "https://job-finder-beige.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/fe-job-finder",
  },
  {
    id: 2,
    name: "Last King Academy",
    image: project4,
    description: "Web Course",
    technologies: [react, tailwindIcons, reduxIcons],
    liveLink: "https://last-king-academy.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Last-King-Academy",
  },
  {
    id: 3,
    name: "KKM 01 Desa Panyabrangan",
    image: KKM01,
    description: "Landing Page",
    technologies: [NextIcons, NextUIIcon, TSIcons],
    liveLink: "https://kkm01-desa-panyabrangan.vercel.app/",
    githubLink: "https://github.com/azzaxy1/kkm01-profile",
  },
  {
    id: 4,
    name: "MOVIELIST",
    image: project3,
    description: "Movie Rating Film",
    technologies: [react, tailwindIcons, reduxIcons],
    liveLink: "https://project-6-team-6-redux.vercel.app/id",
    githubLink: "https://github.com/Azzaxy1/Ch7-MovieApp-React-Redux",
  },
  {
    id: 5,
    name: "Discus Zone",
    image: DiscusZone,
    description: "Discus App",
    technologies: [react, tailwindIcons, reduxIcons, CypressIcon],
    liveLink: "https://discus-zone.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/discus-zone",
  },
  {
    id: 6,
    name: "Notes Hive",
    image: NotesHive,
    description: "Notes App",
    technologies: [react, tailwindIcons],
    liveLink: "https://notes-hive.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/notes-hive",
  },
  {
    id: 7,
    name: "Todo List",
    image: project2,
    description: "Todo List App",
    technologies: [react, tailwindIcons],
    liveLink: "https://todo-list-app-azis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Ch3-TodoList-App-React",
  },
  {
    id: 8,
    name: "Abdurrohman Azis",
    image: PersonalWeb,
    description: "Personal Website",
    technologies: [htmlIcons, cssIcons],
    liveLink: "https://azis-personal-website.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Belajar-Dasar-Pemrograman-Web",
  },
  {
    id: 9,
    name: "Rental Car",
    image: project1,
    description: "Landing Page",
    technologies: [htmlIcons, bootstrapIcons],
    liveLink: "https://rentalcar-azis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Ch1-RentalCar-Botstrapp",
  },
  {
    id: 10,
    name: "Abdurrohman Azis",
    image: Azis,
    description: "Personal Website",
    technologies: [react, tailwindIcons],
    liveLink: "https://abdurrohmanazis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Portfolio-ReactTailwind",
  },
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

export { experience, icons, projects };
