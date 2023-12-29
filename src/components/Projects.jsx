import { projectsData } from "../data";
import Project from "./Project";
import Reveal from "./Reveal";

const Projects = () => {
  console.log(projectsData);
  return (
    <div className="py-24">
      <div className="maxW padX flex items-start max-xs:flex-col pb-8 max-sm:pb-12">
        <div className="max-xs:order-2 max-xs:mt-5">
          <Reveal>
            <div className="select-wrapper w-32">
              <select
                name=""
                id=""
                className="border-2 border-black px-4 py-3 rounded-md bg-transparent outline-none cursor-pointer w-full"
              >
                <option value="">Web Apps</option>
                <option value="">Websites</option>
              </select>
            </div>
          </Reveal>
        </div>
        <div className="w-fit ml-auto max-xs:ml-0 max-xs:order-1 text-3xl flex flex-col font-neueMedium after:bg-black after:w-full after:h-0.5 after:block after:mt-1">
          <Reveal>Recent Projects</Reveal>
        </div>
      </div>
      <div className="space-y-24">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
