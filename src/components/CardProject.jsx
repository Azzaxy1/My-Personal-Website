import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardProject = ({
  id,
  liveLink,
  image,
  name,
  description,
  technologies,
  githubLink,
}) => {
  return (
    <>
      <div
        data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-easing="ease-in-sine"
        className="max-w-sm mx-6 my-6 overflow-hidden transition-all duration-300 rounded-lg shadow-md sm:max-w-lg md:max-w-xl lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:ease-linear"
      >
        <Link to={liveLink} target="_blank">
          <img
            src={image}
            alt={name}
            className="p-3 border-gray-300 cursor-pointer rounded-2xl"
          />
        </Link>
        <div className="px-4 py-4 border-t-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex items-center gap-3">
            <p className="text-base text-gray-700">{description} •</p>
            {technologies.map((tech, index) => (
              <div key={index} className="relative group">
                <img src={tech} width={25} alt={name} />
              </div>
            ))}
          </div>
          <Link to={githubLink} target="_blank">
            <p className="mt-3 text-base underline decoration-wavy text-primary">
              Link Github
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

CardProject.propTypes = {
  id: PropTypes.number.isRequired,
  liveLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default CardProject;
