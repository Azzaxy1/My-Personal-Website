import { Link } from "react-router-dom";
import shape from "../assets/shape.png";
import { projects } from "@/utils";
import PropTypes from "prop-types";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";
import Card from "./ui/Card";

const Project = ({ section }) => {
  const sliceProject = projects.slice(0, 4);

  return (
    <section id="project" className={` ${section ? "py-16" : "pb-16 pt-8 "}`}>
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <div className="self-center px-6 lg:w-[70%]">
            <div
              data-aos="zoom-in-down"
              className="relative flex justify-center mb-2 text-center lg:mb-5"
            >
              <img
                src={shape}
                width={100}
                className="absolute left-16 sm:left-40 md:left-52 lg:left-28 xl:left-48 2xl:left-72 -z-10 top-2 lg:w-48 "
              />
              <h1 className="font-bold text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#357998]">
                🚀 Highlight Project
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-sm text-center sm:text-base md:text-base lg:text-xl 2xl:text-2xl text-secondary"
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
                <Card key={index} id={project.id}>
                  <Card.Header image={project.image} name={project.name} />
                  <Card.Body
                    name={project.name}
                    description={project.description}
                    githubLink={project.githubLink}
                    technologies={project.technologies}
                    liveLink={project.liveLink}
                  />
                </Card>
              ))
            : projects.map((project, index) => (
                <Card key={index} id={project.id}>
                  <Card.Header image={project.image} name={project.name} />
                  <Card.Body
                    name={project.name}
                    description={project.description}
                    githubLink={project.githubLink}
                    technologies={project.technologies}
                    liveLink={project.liveLink}
                  />
                </Card>
              ))}
        </div>
        <div data-aos="fade-out" className={`mt-2 text-center`}>
          <Link
            to={!section ? "/" : "/project"}
            className="flex justify-center"
          >
            <button className="flex items-center justify-center px-4 py-2 text-white rounded-xl bg-[#318bb4] hover:bg-[#357998]">
              {!section ? (
                <>
                  <LuArrowBigLeft
                    width={25}
                    height={25}
                    className="inline-block text-white w-[28px] h-[28px]"
                  />
                  Back to Home
                </>
              ) : (
                <>
                  More Project
                  <LuArrowBigRight
                    width={25}
                    height={25}
                    className="inline-block text-white w-[28px] h-[28px]"
                  />
                </>
              )}
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
