import { imageCompanies, imageProjects, imageTech } from "@/assets/image";

const icons = [
  { id: 1, image: imageTech.jsIcons, name: "JavaScript" },
  { id: 2, image: imageTech.TSIcons, name: "TypeScript" },
  { id: 3, image: imageTech.bootstrapIcons, name: "Bootstrap" },
  { id: 4, image: imageTech.tailwindIcons, name: "Tailwind CSS" },
  { id: 5, image: imageTech.reactIcons, name: "React" },
  { id: 6, image: imageTech.reduxIcons, name: "Redux" },
  { id: 7, image: imageTech.NextIcons, name: "Next.js" },
  { id: 8, image: imageTech.NodeIcons, name: "Node.js" },
  { id: 9, image: imageTech.ExpressIcons, name: "Express.js" },
  { id: 10, image: imageTech.MongoDB, name: "Mongo DB" },
  { id: 11, image: imageTech.postmanIcons, name: "Postman" },
  { id: 12, image: imageTech.figmaIcons, name: "Figma" },
  { id: 13, image: imageTech.npmIcons, name: "npm" },
];

const projects = [
  {
    id: 1,
    name: "Job Finder",
    image: imageProjects.JobFinder,
    description: "Job Portal",
    technologies: [imageTech.react, imageTech.NextUIIcon, imageTech.reduxIcons],
    liveLink: "https://job-finder-beige.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/fe-job-finder",
  },
  {
    id: 2,
    name: "Last King Academy",
    image: imageProjects.LastKingAcademy,
    description: "Web Course",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
    ],
    liveLink: "https://last-king-academy.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Last-King-Academy",
  },
  {
    id: 3,
    name: "KKM 01 Desa Panyabrangan",
    image: imageProjects.KKM01,
    description: "Landing Page",
    technologies: [
      imageTech.NextIcons,
      imageTech.NextUIIcon,
      imageTech.TSIcons,
    ],
    liveLink: "https://kkm01-desa-panyabrangan.vercel.app/",
    githubLink: "https://github.com/azzaxy1/kkm01-profile",
  },
  {
    id: 4,
    name: "MOVIELIST",
    image: imageProjects.MovieApp,
    description: "Movie Rating Film",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
    ],
    liveLink: "https://project-6-team-6-redux.vercel.app/id",
    githubLink: "https://github.com/Azzaxy1/Ch7-MovieApp-React-Redux",
  },
  {
    id: 5,
    name: "Discus Zone",
    image: imageProjects.DiscusZone,
    description: "Discus App",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
      imageTech.CypressIcon,
    ],
    liveLink: "https://discus-zone.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/discus-zone",
  },
  {
    id: 6,
    name: "Notes Hive",
    image: imageProjects.NotesHive,
    description: "Notes App",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://notes-hive.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/notes-hive",
  },
  {
    id: 7,
    name: "TodoZen",
    image: imageProjects.TodoZen,
    description: "Todo List App",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://todo-list-app-azis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Ch3-TodoList-App-React",
  },
  {
    id: 8,
    name: "Abdurrohman Azis",
    image: imageProjects.PersonalWeb,
    description: "Personal Website",
    technologies: [imageTech.htmlIcons, imageTech.cssIcons],
    liveLink: "https://azis-personal-website.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Belajar-Dasar-Pemrograman-Web",
  },
  {
    id: 9,
    name: "Rental Car",
    image: imageProjects.CarRental,
    description: "Landing Page",
    technologies: [imageTech.htmlIcons, imageTech.bootstrapIcons],
    liveLink: "https://rentalcar-azis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Ch1-RentalCar-Botstrapp",
  },
  {
    id: 10,
    name: "Abdurrohman Azis",
    image: imageProjects.Azis,
    description: "Personal Website",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://abdurrohmanazis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Portfolio-ReactTailwind",
  },
];

const experience = [
  {
    id: 1,
    name: "Binar Academy",
    image: imageCompanies.BinarLogo,
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
    image: imageCompanies.DicodingLogo,
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

// const certifications = [];

export { experience, icons, projects };
