import { useState } from "react";
import PASSPORT from "../assets/passport.jpg";
import { IoClose } from "react-icons/io5";
import Header from "./Header";
import Reveal from "./Reveal";

const Hero = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <div className="maxW padX pt-8 pb-12">
      {isMenu && (
        <div className="bg-gainsboro z-50 fixed top-0 left-0 right-0">
          <div className="maxW padX py-8 flex items-start justify-between gap-x-2.5 font-neueMedium uppercase text-lg max-lg:text-base">
            <div className="space-y-3">
              <span className="font-neueBold text-xl">Fortunate Ogodu</span>
              <div className="flex flex-col items-start space-y-1">
                <span>Ogodu4tunate@gmail.com</span>
                <span>Available for any frontend related gig👨‍💻</span>
                <span>Based in Lagos,</span>
                <span>Nigeria</span>
              </div>
            </div>
            <span onClick={() => setMenu(!isMenu)} className="cursor-pointer">
              close
            </span>
          </div>
        </div>
      )}
      <Header isMenu={isMenu} setMenu={setMenu} />
      <div className="font-neueMedium mt-16 uppercase">
        <div className="pb-2 text-[13vw] lg:text-[9rem] leading-[0.9] whitespace-nowrap">
          <Reveal>
            <span>{`<Frontend `}</span>
          </Reveal>
          <Reveal>
            <span>{`Developer />`}</span>
          </Reveal>
        </div>
        <Reveal>
          <img
            src={PASSPORT}
            alt=""
            className="grayscale h-[15rem] max-sm:h-[13rem] sm:w-[30rem] max-sm:w-[100vw] object-cover object-top mt-4"
          />
        </Reveal>
        <div className="sm:w-[90%] md:w-[80%] lg:w-[70%] w-full ml-auto leading-snug pt-12 space-y-5 text-[35px] max-lg:text-3xl max-md:text-2xl max-lg:leading-normal">
          <Reveal>
            <span className="pt-3 pb-1">
              Crafting immersive web experiences through clean code. Passionate
              about creating user-friendly interfaces that leave a lasting
              impression.
            </span>
          </Reveal>
          <Reveal>
            <span className="block">
              Also constantly trying to improve my expertise in Web development.
            </span>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
export default Hero;
