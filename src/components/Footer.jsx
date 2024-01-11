import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Footer = () => {
  const emailAddress = "ogodu4tunate@gmail.com";
  const whatsappLink = "https://wa.me/+2348061754564";
  const mailtoLink = `mailto:${emailAddress}}`;
  const resumeLink =
    "https://drive.google.com/file/d/1l-7BieKzcuXazYwhz95_MS0x-w-btZhj/view?usp=drive_link";

  return (
    <footer className="bg-black text-gainsboro">
      <div className="py-4 maxW padX grid grid-cols-3 items-center max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-8 max-lg:gap-y-5 max-sm:gap-y-7 max-sm:px-6 text-sm uppercase">
        <div className="text-lg font-neueMedium">
          <Reveal>I&apos;d Love to hear from you.</Reveal>
        </div>

        <div className="max-lg:col-start-1 max-lg:col-end-2 max-sm:row-start-2 max-sm:row-end-3">
          <Reveal>
            <ul className="flex items-center gap-x-8">
              <li className="after:w-full after:h-[1px] after:inline-block after:bg-gainsboro flex flex-col gap-y-0.5">
                <Link to={mailtoLink} target="_blank" rel="noopener noreferrer">
                  Email
                </Link>
              </li>
              <li className="after:w-full after:h-[1px] after:inline-block after:bg-gainsboro flex flex-col gap-y-0.5">
                <Link
                  to={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </Link>
              </li>
              <li className="after:w-full after:h-[1px] after:inline-block after:bg-gainsboro flex flex-col gap-y-0.5">
                <Link to={resumeLink} target="_blank" rel="noopener noreferrer">
                  Resume
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="max-lg:col-start-2 max-lg:col-end-3 max-sm:row-start-3 max-sm:row-end-4 max-sm:col-start-1 max-sm:col-end-2 flex justify-end max-sm:justify-start max-sm:text-xs">
          <Reveal>
            <div className="flex items-center gap-x-2">
              <span>iamfortunate</span>
              <span className="w-4 h-[1px] bg-gainsboro inline-block" />
              <span>2024</span>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
