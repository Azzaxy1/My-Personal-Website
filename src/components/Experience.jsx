import shape from"../assets/shape.png"
import CardExperience from "./CardExperience";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-800  py-14">
      <div>
        <div className="flex justify-center mb-8">
          <div className="self-center px-6 lg:w-[70%]">
            <div className="relative flex justify-center mb-2 lg:mb-5">
              <img
                src={shape}
                width={100}
                className="absolute left-24 md:hidden top-2 lg:top-5 lg:w-32 "
              />
              <h1 className="z-10 text-3xl font-bold text-left text-white lg:text-5xl">
                🏢 Experience
              </h1>
            </div>
            <p className="text-sm text-center text-gray-400 lg:text-xl 2xl:text-2xl">
              I have gained valuable experience by actively contributing to the
              growth of an educational startup and interning at a reputable
              software house, where I worked as a skilled front-end engineer.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            <CardExperience />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience
