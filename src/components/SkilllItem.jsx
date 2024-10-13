import PropTypes from "prop-types";

const SkillItem = ({ icon }) => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="flex flex-row mt-8 "
    >
      <div className="relative px-4 py-4 transition-all duration-500 rounded-md cursor-pointer group hover:-translate-y-4 hover:shadow-primary md:px-1 md:py-9">
        <span className="absolute top-[-15px] md:top-0 px-2 py-1 mb-2 text-xs text-center text-white transition-opacity transform -translate-x-1/2 bg-gray-700 rounded opacity-0 left-[2.8rem] group-hover:opacity-100 whitespace-nowrap">
          {icon.name}
        </span>
        <img
          src={icon.image}
          alt={icon.name}
          title={icon.name}
          width={50}
          className=" md:w-20"
        />
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default SkillItem;
