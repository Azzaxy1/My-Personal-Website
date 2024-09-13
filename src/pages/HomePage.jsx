import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden font-body">
      <Navbar />
      <Hero />
      <AboutMe />
      <Project section={true} />
      <Skills />
      <Experience />
    </main>
  );
};

export default HomePage;
