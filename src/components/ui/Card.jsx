import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ children, id }) => {
  return (
    <div
      data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-easing="ease-in-sine"
      className="max-w-sm mx-6 my-6 overflow-hidden transition-all duration-300 rounded-lg shadow-md sm:max-w-lg md:max-w-xl lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:ease-linear"
    >
      {children}
    </div>
  );
};

const Header = ({ image, name }) => {
  return (
    <header>
      <img src={image} alt={name} className="p-3 border-gray-300 rounded-2xl" />
    </header>
  );
};

const Body = ({ description, technologies, githubLink, liveLink, name }) => {
  return (
    <footer className="flex justify-between px-4 py-4 border-t-4">
      <div>
        <h1 className="text-base font-bold md:text-xl">{name}</h1>
        <div className="flex gap-2">
          <p className="text-sm text-gray-700">{description} •</p>
          {technologies.map((tech, index) => (
            <div key={index} className="relative group">
              <img src={tech} width={25} alt={name} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <Link to={githubLink} target="_blank">
          <FaGithub className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] duration-75 hover:text-primary hover:transform hover:-translate-y-1 hover:transition-all" />
        </Link>
        <Link to={liveLink} target="_blank">
          <FaExternalLinkAlt className="w-[21px] h-[21px] duration-75 hover:transform hover:transition-all hover:-translate-y-1 text-[#357998] hover:text-primary" />
        </Link>
      </div>
    </footer>
  );
};

Card.Header = Header;
Card.Body = Body;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Body.propTypes = {
  liveLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Card;
