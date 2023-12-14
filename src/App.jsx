import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
        <div className="font-body">
          <Navbar/>
          <Hero />
          <AboutMe />
          <Project/>
        </div>
    </BrowserRouter>
  );
};

export default App;

