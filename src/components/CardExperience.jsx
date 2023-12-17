import binarLogo from "../assets/binar-logo.png";

const CardExperience = () => {
  return (
    <section className="w-full px-6 md:px-28 2xl:px-64">
      <div
        data-aos="zoom-out"
        className="flex flex-col px-6 py-10 bg-purple-800 border-2 border-purple-400 bg-opacity-30 md:flex-row rounded-xl"
      >
        <div className="mb-6 md:mb-0 md:px-14">
          <img src={binarLogo} alt="binarLogo" width={60} className="md:w-56" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Binar Academy
          </h1>
          <h2 className="pt-[2px] text-lg text-fuchsia-400 md:text-xl">
            PT Lentera Benderang
          </h2>
          <p className="my-3 text-sm text-white md:text-lg">
            Agust 2023 - Des 2023
          </p>
          <p className="px-2 py-2 my-2 text-white rounded-lg w-fit bg-fuchsia-950">
            Frontend JavaScript
          </p>
          <div>
            <ul className="text-white w">
              <li className="mb-3">
                • Developed a ToDo List Website with CRUD capabilities utilizing
                Tailwind CSS and React Js to complete the task.
              </li>
              <li className="my-3">
                • Building a Movie Rating Website in collaboration using Git
                with the team. Using React Js and Tailwind CSS, integrating with
                the Restful API, and implementing Redux state management.
              </li>
              <li>
                • Collaborate in developing the Course Web using Git with the
                Front End and Back End teams. Used Tailwind CSS, React Js,
                implemented Redux state management, and integrated with APIs
                from the Backend team as part of the final project completion.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardExperience;
