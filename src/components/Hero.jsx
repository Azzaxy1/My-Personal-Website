import { Link } from "react-router-dom";

import linkedIn from "../assets/linkedIn.webp";
import github from "../assets/github.webp";
import email from "../assets/email.webp";
import medium from "../assets/medium.webp";
import shape from "../assets/shape.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center md:pt-6 justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-white to-white "
    >
      <div className="text-center w-[95%] sm:w-[92%] md:w-[60%]">
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#375878] "
        >
          Abdurrohman Azis.
        </h3>
        <div className="relative">
          <h1
            data-aos="zoom-out-right"
            className="py-3 text-4xl font-bold sm:text-5xl md:text-5xl lg:text-7xl text-primary"
          >
            <img
              src={shape}
              loading="lazy"
              decoding="async"
              alt="shape header"
              className="absolute -z-10 w-36 md:w-52 left-10 sm:left-20 md:left-14 lg:left-1 xl:left-20 2xl:left-[17rem]"
            />
            Fullstack Engineer
          </h1>
        </div>
        <p
          data-aos="fade-left"
          className="text-base font-medium text-gray-500 sm:text-lg md:text-xl 2xl:text-2xl"
        >
          <span className="font-semibold">Interest in Web development,</span>{" "}
          using
          <span className="font-semibold">
            {" "}
            Next.Js, Express.Js and TypeScript
          </span>{" "}
          for developing a website and web applications.
        </p>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-6 lg:gap-11"
        >
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/abdurrohmanazis/"
          >
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 sm:w-20  lg:w-24 mt-4 active:-rotate-90 active:scale-50 active:duration-100 transition-all  duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-110"
            />
          </Link>
          <Link target="_blank" to="https://github.com/Azzaxy1">
            <img
              src={github}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 sm:w-20 lg:w-24 mt-20 active:-rotate-90 active:scale-50 active:duration-100 transition-all  duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-110"
            />
          </Link>
          <Link target="_blank" to="mailto:abdurrohmanazis@gmail.com">
            <img
              src={email}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 sm:w-20 lg:w-24 mt-20 active:-rotate-90 active:scale-50 active:duration-100 transition-all  duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-110"
            />
          </Link>
          <Link target="_blank" to="https://medium.com/@azzaxy1">
            <img
              src={medium}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-16 sm:w-20 lg:w-24 mt-4 active:-rotate-90 active:scale-50 active:duration-100 transition-all  duration-150 hover:ease-linear hover:rotate-[15deg] hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
