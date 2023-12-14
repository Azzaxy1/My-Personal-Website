import shape from "../assets/shape.png";
import CardSkills from "./CardSkills";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-800 py-14">
      <div className="container px-6 mx-auto md:px-28 2xl:px-20">
        <div className="self-center w-full lg:w-[60%]">
          <div className="relative mb-2 lg:mb-5">
            <img
              data-aos="zoom-in"
              src={shape}
              width={80}
              className="absolute -z-0 bg-opacity-10 top-2 lg:top-5 lg:w-32 "
            />
            <h1
              data-aos="zoom-in-up"
              className="text-2xl font-bold text-left text-white lg:text-5xl"
            >
              🎯 Tech Stack
            </h1>
          </div>
          <p
            data-aos="fade-up-right"
            className="text-sm text-left text-gray-400 lg:text-xl 2xl:text-2xl"
          >
            I am someone who enjoys seeking challenges. Here are a few skills
            that I have developed and honed.
          </p>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <CardSkills />
        </div>
      </div>
    </section>
  );
}

export default Skills
