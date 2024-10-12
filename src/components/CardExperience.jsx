import PropTypes from "prop-types";

const CardExperience = ({
  image,
  companyName,
  name,
  date,
  position,
  description,
}) => {
  return (
    <section className="w-full px-6 md:px-28 2xl:px-64">
      <div
        data-aos="zoom-out"
        className={`flex flex-col px-6 py-10  border-2 ${
          name === "Dicoding Indonesia"
            ? "bg-slate-700 border-slate-400"
            : "bg-purple-800 border-purple-400"
        }  bg-opacity-30 md:flex-row rounded-xl`}
      >
        <div className="mb-6 md:mb-0 md:px-14">
          <img
            src={image}
            alt="binarLogo"
            width={60}
            className="rounded-full md:w-56"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">{name}</h1>
          <h2
            className={`pt-[2px] text-lg ${
              name === "Dicoding Indonesia"
                ? "text-slate-400"
                : "text-fuchsia-400"
            } md:text-xl`}
          >
            {companyName}
          </h2>
          <p className="my-3 text-sm text-white sm:text-base md:text-lg">
            {date}
          </p>
          <p
            className={`px-2 py-2 my-2 text-white rounded-lg w-fit ${
              name === "Dicoding Indonesia" ? "bg-gray-900" : "bg-fuchsia-950"
            }`}
          >
            {position}
          </p>
          <div>
            {description.map((desc, index) => (
              <ul className="text-white" key={index}>
                <li className="mb-3 text-sm md:text-base ">• {desc}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CardExperience.propTypes = {
  image: PropTypes.string,
  companyName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardExperience;
