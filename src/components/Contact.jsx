import { Mail } from "lucide-react";

import myPhoto from "../assets/my-photo.jpg";

const Contact = () => {
  return (
    <section id="contact" className="px-6 bg-gray-800 py-14 md:px-28 2xl:px-64">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex flex-col"
      >
        <h1 className="mb-8 text-2xl font-semibold text-white md:text-5xl ">
          👋 Lets get Connected!
        </h1>
        <p className="pb-5 text-5xl font-semibold text-white md:text-7xl 2xl:text-8xl">
          Have any project ideas?
        </p>
        <p className="text-5xl font-semibold text-white md:text-7xl 2xl:text-8xl">
          Ask something?
        </p>
      </div>
      <figure
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex flex-col gap-5 mt-24 md:mt-16"
      >
        <img
          src={myPhoto}
          alt="myPhoto"
          width={100}
          className="h-auto max-w-full align-middle border-none shadow md:w-32 rounded-3xl"
        />
        <figcaption className="text-xl text-white">Contact me via :</figcaption>
        <div className="flex items-center gap-3 pb-3 border-b-2 border-white w-fit">
          <Mail className="text-white " />
          <a
            className="-mt-1 text-lg text-white"
            href="mailto:abdurrohmanazis@gmail.com"
          >
            abdurrohmanazis@gmail.com
          </a>
        </div>
      </figure>
    </section>
  );
};

export default Contact;
