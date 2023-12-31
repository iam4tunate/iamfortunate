import { projectsData } from "../data";
import Project from "./Project";
import Reveal from "./Reveal";

const Projects = () => {
  console.log(projectsData);
  return (
    <div className="py-24">
      <div className="maxW padX pb-8 max-sm:pb-10">
        <div className="w-fit ml-auto text-3xl max-sm:text-2xl flex flex-col font-neueMedium after:bg-black after:w-full after:h-0.5 after:block after:mt-1">
          <Reveal>Recent Projects</Reveal>
        </div>
      </div>
      <div className="space-y-24">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
