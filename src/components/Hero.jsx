import linkedIn from "../assets/linkedIn.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-white to-white "
    >
      <div className="text-center ">
        <h3 className="text-xl font-extrabold xl:text-5xl text-">
          Abdurrohman Azis.
        </h3>
        <div className="relative">
          <img
            src="/img/shape_header.png"
            loading="lazy"
            decoding="async"
            alt="shape header"
            className="absolute -z-10 md:bottom-0 bottom-1.5 xl:w-auto md:w-80 w-28"
          />
          <h1 className="py-3 text-3xl font-bold xl:text-8xl text-sky-500">
            Frontend Engineer
          </h1>
        </div>
        <p className="font-medium text-gray-500 xl:text-2xl">
          <span className="font-semibold">
            2+ years of experience in front-end development,
          </span>{" "}
          using React.js for <br />
          developing a website and web applications.
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-16 md:m-0">
          <a href="#">
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-24 mt-4"
            />
          </a>
          <a href="#">
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-24 mt-20"
            />
          </a>
          <a href="#">
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-24 mt-20"
            />
          </a>
          <a href="#">
            <img
              src={linkedIn}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="w-24"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
