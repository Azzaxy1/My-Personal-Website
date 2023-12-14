import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full lg:w-[50%]  mx-auto bg-opacity-60">
      <div className="flex items-center justify-end px-4 py-5 bg-inherit md:px-16 md:py-7">
        <div
          className="cursor-pointer text-end lg:hidden"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <X /> : <Menu />}
        </div>
        {/* Desktop Navbar */}
        <div className="flex-row hidden gap-5 font-medium lg:flex">
          <a className="hover:text-sky-500" href="#home">
            Home
          </a>
          <a className="hover:text-sky-500" href="#about">
            About
          </a>
          <a className="hover:text-sky-500" href="#project">
            Project
          </a>
          <a className="hover:text-sky-500" href="#skills">
            Skills
          </a>
          <a className="hover:text-sky-500" href="#experience">
            Experience
          </a>
          <a className="hover:text-sky-500" href="#contact">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`${toggleNavbar ? "block" : "hidden"} xl:hidden bg-white text-center`}>
        <ul className="text-lg">
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a href="#project">Project</a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a href="#skills">Skills</a>
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
  );
};

export default Navbar;
