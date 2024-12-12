import shape from "../assets/shape.png";
import PropTypes from "prop-types";

import { certificate } from "@/utils";
import Card from "./ui/Card";
import { Link } from "react-router-dom";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

const CertificateList = ({ section }) => {
  const sliceCertificate = certificate.slice(0, 6);

  return (
    <section
      id="certificate"
      className={` ${section ? "py-16" : "container mx-auto pb-16 pt-8 "}`}
    >
      <div
        className={`px-6 mx-auto  md:px-28 2xl:px-20 ${
          section && "2xl:px-[250px]"
        }`}
      >
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
              className="text-2xl font-bold text-left text-[#357998] lg:text-5xl sm:text-3xl md:text-4xl"
            >
              🎖️🏅 Certificate
            </h1>
          </div>
          <p
            data-aos="fade-up-right"
            className="text-sm text-left sm:text-base md:text-base lg:text-xl 2xl:text-2xl text-secondary"
          >
            These certifications showcase my commitment to continuous learning
            and skill enhancement. They validate my proficiency in various
            areas, helping to solidify the foundation of my professional
            expertise.
          </p>
        </div>
        <div className="flex flex-wrap justify-center ">
          {section
            ? sliceCertificate.map((cert, index) => (
                <Card
                  key={index}
                  id={cert.id}
                  classname="mx-2 bg-white"
                  dataAosEven="zoom-in-up"
                  dataAosOdd="zoom-in-down"
                >
                  <Card.Header
                    image={cert.image}
                    name={cert.name}
                    classname="w-[320px] sm:w-[320px] 2xl:w-[442px]"
                  />
                </Card>
              ))
            : certificate.map((cert, index) => (
                <Card
                  key={index}
                  id={cert.id}
                  classname="mx-2 bg-white"
                  dataAosEven="zoom-in-up"
                  dataAosOdd="zoom-in-down"
                >
                  <Card.Header
                    image={cert.image}
                    name={cert.name}
                    classname="w-[320px] sm:w-[330px] 2xl:w-[442px] object-cover "
                  />
                </Card>
              ))}
        </div>
        <div data-aos="fade-out" className={`mt-2 text-center`}>
          <Link
            to={!section ? "/" : "/certification"}
            className="flex justify-center"
          >
            <button className="flex items-center justify-center px-4 py-2 text-white rounded-xl bg-[#318bb4] hover:bg-[#357998]">
              {!section ? (
                <>
                  <LuArrowBigLeft
                    width={25}
                    height={25}
                    className="inline-block text-white w-[28px] h-[28px]"
                  />
                  Back to Home
                </>
              ) : (
                <>
                  More Certificate
                  <LuArrowBigRight
                    width={25}
                    height={25}
                    className="inline-block text-white w-[28px] h-[28px]"
                  />
                </>
              )}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

CertificateList.propTypes = {
  section: PropTypes.bool,
};

export default CertificateList;
