import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className="fixed left-0 lg:left-[25%] md:flex md:justify-center z-10 w-full md:w-[50%]  mx-auto bg-opacity-60">
      <div className="flex items-center justify-end px-4 py-5 md:shadow-md hover:md:shadow-xl md:bg-white md:rounded-full md:mt-5 md:bg-opacity-90 md:px-16 md:py-5">
        <div
          className="cursor-pointer pe-4 lg:pe-0 lg:hidden"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <X /> : <Menu />}
        </div>
        {/* Desktop Navbar */}
        <div className="flex-row hidden gap-10 font-medium lg:flex">
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#about"
          >
            About
          </a>
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#project"
          >
            Project
          </a>
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-secondary text-opacity-70 hover:text-sky-500"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`${
          toggleNavbar ? "block" : "hidden"
        } xl:hidden bg-white text-center`}
      >
        <ul className="text-lg">
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#home">
              Home
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#about">
              About
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#project">
              Project
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#skills">
              Skills
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#experience">
              Experience
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className="text-secondary text-opacity-70" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
