import { useState } from "react";
import hamburgerActive from "../assets/hamburger-active.svg";
import hamburgerNonActive from "../assets/hamburger-non-active.svg";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <>
      <nav className="">
        <div className="container flex items-center justify-between px-4 py-5 mx-auto md:px-16 md:py-7">
          <div>
            <h1 className="text-2xl font-semibold text-sky-500">
              Abdurrohman Azis
            </h1>
          </div>
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
          >
            <img
              src={toggleNavbar ? hamburgerActive : hamburgerNonActive}
              alt="toggle"
            />
          </div>
          {/* Desktop Navbar */}
          <div className="flex-row hidden gap-5 font-medium xl:flex">
            <a className=" hover:text-sky-500" href="#home">
              Home
            </a>
            <a className=" hover:text-sky-500" href="#about">
              About
            </a>
            <a className=" hover:text-sky-500" href="#skills">
              Skills
            </a>
            <a className=" hover:text-sky-500" href="#projects">
              Project
            </a>
            <a className=" hover:text-sky-500" href="#experience">
              Experience
            </a>
            <a className=" hover:text-sky-500" href="#contact">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className={`${toggleNavbar ? "block" : "hidden"} xl:hidden`}>
          <ul className="text-lg ">
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#projects">Project</a>
            </li>
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#experience">Experience</a>
            </li>
            <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
