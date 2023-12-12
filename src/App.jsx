import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
        <div className="font-body">
          <Hero />
          <AboutMe />
        </div>
    </BrowserRouter>
  );
};

export default App;

