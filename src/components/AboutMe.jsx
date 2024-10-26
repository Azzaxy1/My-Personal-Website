import aboutIcons from "../assets/icons/about-img.svg";
import shape from "../assets/shape.png";
import CV from "@/assets/pdf/cv.pdf";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-start md:flex-row xl:justify-center">
        <div className="self-center w-full px-6 md:w-[54%]">
          <div className="relative mb-2 lg:mb-5">
            <img
              data-aos="zoom-in"
              src={shape}
              width={100}
              className="absolute -z-10 top-2 lg:w-48 "
            />
            <h1
              data-aos="zoom-in-right"
              className="font-bold text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#357998]"
            >
              🧑‍💻 About Me
            </h1>
          </div>
          <p
            data-aos="fade-up-right"
            className="text-sm text-left sm:text-base md:text-base lg:text-xl 2xl:text-2xl text-secondary"
          >
            I am a Bachelor of Informatics Engineering student at Banten Jaya
            University. I have a strong interest in{" "}
            <span className="font-semibold">Web Development</span>, using{" "}
            <span className="font-semibold">
              Next.Js, Express.Js and TypeScript
            </span>
            . My skills include problem solving, critical thinking, time work,
            time management, and a desire to explore new knowledge.
          </p>
          <a href={CV} download>
            <button
              data-aos="fade-up-right"
              className="px-4 py-2 mt-4 text-white rounded-xl bg-slate-700"
            >
              Download CV
            </button>
          </a>
        </div>
        <div data-aos="fade-up-left" className="px-6 lg:px-7">
          <img src={aboutIcons} alt="" width={350} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
