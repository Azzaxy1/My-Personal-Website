import { Link } from "react-router-dom";
import htmlIcons from "../assets/icons/html.png";
import bootstrapIcons from "../assets/bootstrap.png";
import tailwindIcons from "../assets/tailwind.png";
import reactIcons from "../assets/react.png";
import reduxIcons from "../assets/icons/redux.png";

import project1 from "../assets/img-project/project1.jpeg";
import project2 from "../assets/img-project/project2.jpeg";
import project3 from "../assets/img-project/project3.png";

const CardProject = () => {
  return (
    <>
      <div className="max-w-sm mx-6 my-6 overflow-hidden rounded-lg shadow-md cursor-pointer lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-150 hover:ease-linear">
        <Link to="https://rentalcar-azis.vercel.app/">
          <img
            src={project1}
            alt="Project1"
            className="p-3 border-gray-300 rounded-2xl"
          />
        </Link>
        <div className="px-4 py-4 border-t-4">
          <h1 className="text-xl font-bold">Rental Car</h1>
          <div className="flex items-center gap-3">
            <p className="text-base text-gray-700">Landing Page •</p>
            <img src={htmlIcons} width={30} alt="" />
            <img src={bootstrapIcons} width={30} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-6 my-6 overflow-hidden rounded-lg shadow-md cursor-pointer lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-150 hover:ease-linear">
        <Link to="https://todo-list-app-azis.vercel.app/">
          <img
            src={project2}
            alt="Project2"
            className="p-3 border-gray-300 rounded-2xl"
          />
        </Link>
        <div className="px-4 py-4 border-t-4">
          <h1 className="text-xl font-bold">Todo List</h1>
          <div className="flex items-center gap-3">
            <p className="text-base text-gray-700">Todo List App •</p>
            <img src={reactIcons} width={30} alt="" />
            <img src={tailwindIcons} width={30} alt="" />
          </div>
          <Link to="https://github.com/Azzaxy1/Ch1-RentalCar-Botstrapp">
            <p className="mt-3 text-base underline text-primary">Link Github</p>
          </Link>
        </div>
      </div>
      <div className="max-w-sm mx-6 my-6 overflow-hidden rounded-lg shadow-md cursor-pointer lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-150 hover:ease-linear">
        <Link to="https://project-6-team-6-redux.vercel.app/id">
          <img
            src={project3}
            alt="Project3"
            className="p-3 border-gray-300 rounded-2xl"
          />
        </Link>
        <div className="px-4 py-4 border-t-4">
          <h1 className="text-xl font-bold">MovieList</h1>
          <div className="flex items-center gap-3">
            <p className="text-base text-gray-700">Movie Rating Film •</p>
            <img src={reactIcons} width={30} alt="" />
            <img src={tailwindIcons} width={30} alt="" />
            <img src={reduxIcons} width={30} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-6 my-6 overflow-hidden rounded-lg shadow-md cursor-pointer lg:max-w-lg 2xl:max-w-xl hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-150 hover:ease-linear">
        <Link to="https://rentalcar-azis.vercel.app/">
          <img
            src={project1}
            alt="Project1"
            className="p-3 border-gray-300 rounded-2xl"
          />
        </Link>
          <div className="px-4 py-4 border-t-4">
            <h1 className="text-xl font-bold">Rental Car</h1>
            <div className="flex items-center gap-3">
              <p className="text-base text-gray-700">Landing Page •</p>
              <img src={htmlIcons} width={30} alt="" />
              <img src={bootstrapIcons} width={30} alt="" />
            </div>
          </div>
      </div>
    </>
  );
};

export default CardProject;
