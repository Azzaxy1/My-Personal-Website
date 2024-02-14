import htmlIcons from "../assets/icons/html.svg";
import cssIcons from "../assets/icons/css.svg";
import jsIcons from "../assets/icons/javascript.svg";
import bootstrapIcons from "../assets/icons/bootstrap.svg";
import tailwindIcons from "../assets/icons/tailwind.svg";
import reactIcons from "../assets/icons/react.svg";
import reduxIcons from "../assets/icons/redux.svg";
import postmanIcons from "../assets/icons/postman.svg";
import figmaIcons from "../assets/icons/figma.svg";
import gitIcons from "../assets/icons/git.svg";
import vsCodeIcons from "../assets/icons/vscode.svg";
import githubIcons from "../assets/icons/github.svg";
import npmIcons from "../assets/icons/npm.svg";

const CardSkills = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="flex flex-wrap justify-center mt-8 gap-11 md:gap-16"
    >
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={htmlIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={cssIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={jsIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img
          src={bootstrapIcons}
          alt="htmlIcons"
          width={50}
          className="md:w-20"
        />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img
          src={tailwindIcons}
          alt="htmlIcons"
          width={50}
          className="md:w-20"
        />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={reactIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={reduxIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={figmaIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img
          src={postmanIcons}
          alt="htmlIcons"
          width={50}
          className="md:w-20"
        />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={vsCodeIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={gitIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={githubIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
      <div className="px-4 hover:-translate-y-4 hover:shadow-primary cursor-pointer transition-all duration-500 py-4 md:px-9 md:py-9 rounded-md shadow-black bg-[#192d3e] shadow-lg">
        <img src={npmIcons} alt="htmlIcons" width={50} className="md:w-20" />
      </div>
    </div>
  );
};

export default CardSkills;
