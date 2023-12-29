import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <div className="">
        <Marquee
          className="relative cursor-pointer text-2xl uppercase bg-black text-gainsboro py-4 z-10 transform skew-y-"
          pauseOnHover={true}
          speed={50}
        >
          <div className="space-x-20 flex items-center transform -skew-y-0">
            <span className="">
              html&css (Vanilla css / Tailwindcss / Sass)
            </span>
            <span className="">
              JavaScript (React / Redux-Toolkit / React Query / Context-API)
            </span>
            <span className=" after: pr-20">
              Firebase
            </span>
          </div>
        </Marquee>
      <div className="transform -skew-y-3 bg-black bg-opacity-30 h-16 w-full -translate-y-16 absolute"></div>
    </div>
  );
};
export default TechStack;
