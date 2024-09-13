import shape from "../assets/shape.png";
import CardProject from "./CardProject";
import { projects } from "@/utils";

const Project = () => {
  return (
    <section id="project" className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          {/* Text Project */}
          <div className="self-center px-6 lg:w-[70%]">
            <div
              data-aos="zoom-in-down"
              className="relative flex justify-center mb-2 text-center lg:mb-5"
            >
              <img
                src={shape}
                width={100}
                className="absolute left-16 lg:left-[156px] -z-10 top-2 lg:w-48 "
              />
              <h1 className="font-bold text-left text-2xl lg:text-5xl text-[#357998]">
                🚀 Highlight Project
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-sm text-center lg:text-xl 2xl:text-2xl text-secondary"
            >
              These are some of the projects I have created. These projects have
              not only helped me build my portfolio, but also enhanced the
              skills I have developed.
            </p>
          </div>
        </div>
        {/* Card Project */}
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              id={project.id}
              liveLink={project.liveLink}
              image={project.image}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
