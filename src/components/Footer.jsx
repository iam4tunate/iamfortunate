import { BsSendFill } from "react-icons/bs";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="bg-black text-gainsboro py-12">
      <div className="maxW padX">
        <div className="w-[60%] max-md:w-[70%] max-sm:w-[90%] max-xs:w-full">
          <Reveal>
            <div className="text-3xl font-neueMedium">
              I&apos;d love to hear from you
            </div>
          </Reveal>
          <Reveal>
            <p className="pt-3 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              a excepturi atque earum! Iusto placeat nisi deserunt sequi
              recusandae.
            </p>
          </Reveal>
          <Reveal width>
            <form className="flex flex-col gap-y-4 text-sm">
              <input
                type="text"
                placeholder="Email Address"
                className="py-3 px-4 outline-none border border-gainsboro bg-transparent rounded-md"
              />
              <textarea
                placeholder="Message"
                className="resize-none h-52 outline-none py-3 px-4 border border-gainsboro bg-transparent rounded-md"
              />
              <div className="border bg-gainsboro text-black py-3.5 px-4 flex items-center justify-between rounded-md cursor-pointer">
                <span className="font-neueMedium">Send Message</span>
                <BsSendFill className="text-black text-xl" />
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
