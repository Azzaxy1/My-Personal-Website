import { Link, useNavigate } from "react-router-dom";
import shape from "../assets/shape.png";
import CardProject from "./CardProject";
import { projects } from "@/utils";
import PropTypes from "prop-types";
import { ArrowBigLeft } from "lucide-react";

const Project = ({ section }) => {
  const navigate = useNavigate();
  const sliceProject = projects.slice(0, 4);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section id="project" className={` ${section ? "py-16" : "pb-16 pt-8 "}`}>
      <div className="container mx-auto">
        <div className="px-32 ">
          {!section && (
            <button onClick={handleBack}>
              <ArrowBigLeft
                width={40}
                height={40}
                className="text-primary hover:text-[#318bb4]"
              />
            </button>
          )}
        </div>
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
          {section
            ? sliceProject.map((project, index) => (
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
              ))
            : projects.map((project, index) => (
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
        <div
          data-aos="fade-out"
          className={`mt-2 text-center ${section ? "block" : "hidden"}`}
        >
          <Link to="/project">
            <button className="px-4 py-2 text-white rounded-xl bg-primary hover:bg-[#318bb4]">
              More Project
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  section: PropTypes.bool,
};

export default Project;
