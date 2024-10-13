import { useEffect } from "react";
import Project from "@/components/Project";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Project />
    </div>
  );
};

export default ProjectPage;
