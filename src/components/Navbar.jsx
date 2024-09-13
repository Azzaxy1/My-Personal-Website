import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.1, 0.25, 0.5, 0.75] } // Monitor beberapa tingkat visibilitas
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (id) =>
    activeSection === id ? "text-sky-500" : "text-secondary text-opacity-70";

  return (
    <nav className="fixed left-0 lg:left-[25%] md:flex md:justify-center z-50 w-full md:w-[50%]  mx-auto bg-opacity-60">
      <div className="flex items-center justify-end px-4 py-5 md:shadow-md hover:md:shadow-xl md:bg-white md:rounded-full md:mt-5 md:bg-opacity-90 md:px-16 md:py-5">
        <div
          className="px-2 py-2 bg-white border-2 rounded-lg cursor-pointer border-primary me-4 lg:pe-0 lg:hidden"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <X /> : <Menu />}
        </div>
        {/* Desktop Navbar */}
        <div className="flex-row hidden gap-10 font-medium lg:flex">
          <a className={`${isActive("home")} hover:text-sky-500`} href="#home">
            Home
          </a>
          <a
            className={`${isActive("about")} hover:text-sky-500`}
            href="#about"
          >
            About
          </a>
          <a
            className={`${isActive("project")} hover:text-sky-500`}
            href="#project"
          >
            Project
          </a>
          <a
            className={`${isActive("skills")} hover:text-sky-500`}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={`${isActive("experience")} hover:text-sky-500`}
            href="#experience"
          >
            Experience
          </a>
          <a
            className={`${isActive("contact")} hover:text-sky-500`}
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
            <a className={`${isActive("home")}`} href="#home">
              Home
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className={`${isActive("about")}`} href="#about">
              About
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className={`${isActive("project")}`} href="#project">
              Project
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className={`${isActive("skills")}`} href="#skills">
              Skills
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className={`${isActive("experience")}`} href="#experience">
              Experience
            </a>
          </li>
          <li className="mx-4 px-2 rounded-lg md:px-16 py-[10px] hover:bg-sky-200 cursor-pointer">
            <a className={`${isActive("contact")}`} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
