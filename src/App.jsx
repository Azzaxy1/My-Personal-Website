import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
        <main className="font-body">
          <Navbar/>
          <Hero />
          <AboutMe />
          <Project/>
          <Skills/>
          <Experience/>
          <Contact/>
        </main>
    </BrowserRouter>
  );
};

export default App;

