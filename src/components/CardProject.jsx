import { Link } from "react-router-dom";

import { projects } from "@/utils";

const CardProject = () => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="max-w-sm mx-6 my-6 overflow-hidden transition-all duration-300 rounded-lg shadow-md lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:ease-linear"
        >
          <Link to={project.liveLink} target="_blank">
            <img
              src={project.image}
              alt="Project1"
              className="p-3 border-gray-300 cursor-pointer rounded-2xl"
            />
          </Link>
          <div className="px-4 py-4 border-t-4">
            <h1 className="text-xl font-bold">{project.name}</h1>
            <div className="flex items-center gap-3">
              <p className="text-base text-gray-700">{project.description} •</p>
              {project.technologies.map((tech, index) => (
                <div key={index} className="relative group">
                  <img src={tech} width={25} alt={project.name} />
                </div>
              ))}
            </div>
            <Link to={project.githubLink} target="_blank">
              <p className="mt-3 text-base underline decoration-wavy text-primary">
                Link Github
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProject;
