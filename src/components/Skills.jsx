import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import shape from "../assets/shape.png";
import CardSkills from "./CardSkills";
import { icons } from "@/utils";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 pt-14">
      <div className="container px-6 mx-auto md:px-28 2xl:px-20">
        <div className="self-center w-full lg:w-[60%]">
          <div className="relative mb-2 lg:mb-5">
            <img
              data-aos="zoom-in"
              src={shape}
              width={80}
              className="absolute -z-0 bg-opacity-10 top-2 lg:top-5 lg:w-32"
            />
            <h1
              data-aos="zoom-in-up"
              className="text-2xl font-bold text-left text-white lg:text-5xl sm:text-3xl md:text-4xl"
            >
              🎯 Tech Stack
            </h1>
          </div>
          <p
            data-aos="fade-up-right"
            className="text-sm text-left text-gray-400 lg:text-xl 2xl:text-2xl sm:text-base md:text-lg"
          >
            I am someone who enjoys seeking challenges. Here are a few skills
            that I have developed and honed.
          </p>
        </div>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={8}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <CardSkills icon={icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
