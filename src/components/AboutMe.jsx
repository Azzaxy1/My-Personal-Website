import Aos from "aos";
import "aos/dist/aos.css";

import aboutIcons from "../assets/about-img.svg";
import shape from "../assets/shape.png";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-start xl:justify-center">
          <div className="self-center w-full px-6 lg:w-[54%]">
            <div className="relative mb-2 lg:mb-5">
              <img 
                data-aos="zoom-in"
                src={shape}
                width={100}
                className="absolute -z-10 top-2 lg:w-48 "
              />
              <h1 data-aos="zoom-in-up" className="font-bold text-left text-2xl lg:text-5xl text-[#357998]">
                🧑‍💻 About Me
              </h1>
            </div>
            <p
              data-aos="fade-up-right"
              className="text-sm text-left lg:text-xl 2xl:text-2xl text-secondary"
            >
              Hello, I&#39;m Azis, I&#39;m dedicated to continuously expanding
              my knowledge and skills in front-end development and learning new
              technologies. I&#39;m able to develop web applications, consume
              APIs and strive to deliver high-quality code.
            </p>
          </div>
          <div data-aos="fade-up-left" className="px-6 lg:px-7">
            <img src={aboutIcons} alt="" width={350} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
