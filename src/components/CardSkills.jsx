import { icons } from "@/utils";

const CardSkills = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="flex flex-wrap justify-center gap-20 mt-8 md:gap-16"
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          className="relative group px-6 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-6 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg"
        >
          <img
            src={icon.image}
            alt={icon.name}
            title="Next Js"
            width={70}
            className="md:w-20"
          />
          <span className="absolute px-2 py-1 mb-2 text-xs text-white transition-opacity transform -translate-x-1/2 bg-gray-700 rounded opacity-0 bottom-full left-1/2 group-hover:opacity-100 whitespace-nowrap">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardSkills;
