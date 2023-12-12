import linkedIn from "../assets/linkedIn.webp";
import github from "../assets/github.webp";
import email from "../assets/email.webp";
import medium from "../assets/medium.webp";
import shape from "../assets/shape.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-white to-white "
    >
      <div className="text-center">
        <h3 className="text-2xl lg:text-5xl font-extrabold text-[#375878] ">
          Abdurrohman Azis.
        </h3>
        <h1 className="relative py-3 text-4xl font-bold lg:text-7xl text-primary">
          <img
            src={shape}
            loading="lazy"
            decoding="async"
            alt="shape header"
            className="absolute -z-10 w-36 left-10"
          />
          Frontend Engineer
        </h1>
        <p className="font-medium text-gray-500 lg:text-xl 2xl:text-2xl">
          <span className="font-semibold">
            2+ years of experience in front-end development,
          </span>
          using React.js for <br />
          developing a website and web applications.
        </p>
        <div className="flex items-center justify-center gap-6 lg:gap-11">
          <Link to="https://www.linkedin.com/in/azzaxy1/">
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 lg:w-24 mt-4 hover:transition-all hover:duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-105"
            />
          </Link>
          <Link to="https://github.com/Azzaxy1">
            <img
              src={github}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 lg:w-24 mt-20 hover:transition-all hover:duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-105"
            />
          </Link>
          <Link to="mailto:abdurrohmanazis@gmail.com">
            <img
              src={email}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 lg:w-24 mt-20 hover:transition-all hover:duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-105"
            />
          </Link>
          <Link to="https://medium.com/@azzaxy1">
            <img
              src={medium}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 lg:w-24 mt-4 hover:rotate-[15deg] hover:scale-105 hover:transition-all hover:duration-150 hover:ease-linear "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
