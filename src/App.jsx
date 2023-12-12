import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
        <div className="font-body">
          <Hero />
        </div>
    </BrowserRouter>
  );
};

export default App;

