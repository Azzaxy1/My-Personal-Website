import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
        <div className="font-body">
          <Hero />
          <AboutMe />
          <Project/>
        </div>
    </BrowserRouter>
  );
};

export default App;

