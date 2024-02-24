import { webApps, websites } from "../data";
import Reveal from "./Reveal";
import Slider from "./Slider";

const Projects = () => {
  return (
    <div className="maxW padX py-24">
      <div className="w-fit ml-auto ">
        <Reveal>
          <div className="pb-8 max-sm:pb-10 text-3xl max-sm:text-2xl flex flex-col font-neueMedium after:bg-black after:w-full after:h-0.5 after:block after:mt-1">
            Featured Projects
          </div>
        </Reveal>
      </div>
      <Slider heading="WebApps" data={webApps}/>
      <Slider heading="Websites" data={websites} website />
    </div>
  );
};
export default Projects;
