import AboutMe from "@/components/AboutMe";
import CertificateList from "@/components/CertificateList";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden overflow-y-hidden font-body">
      <Navbar />
      <Hero />
      <AboutMe />
      <Project section />
      <Skills />
      <Experience />
      <CertificateList section />
    </main>
  );
};

export default HomePage;
