import Reveal from "./Reveal";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ isMenu, setMenu }) => {
  return (
    <Reveal width>
      <div className="flex items-start max-lg:items-center justify-between gap-x-2.5 font-neueMedium uppercase text-lg max-lg:text-base">
        <div className="text-2xl max-lg:text-xl font-neueBold">
          Fortunate Ogodu
        </div>
        <div className="max-lg:hidden flex flex-col">
          <span>Ogodu4tunate@gmail.com</span>
          <span>Available for any frontend related gig👨‍💻</span>
        </div>
        <div className="lg:flex flex-col items-end hidden">
          <div className="hidden max-lg:flex flex-col items-end">
            <span>Ogodu4tunate@gmail.com</span>
            <span>Available for any frontend related gig👨‍💻</span>
          </div>
          <span>Based in Lagos,</span>
          <span>Nigeria</span>
        </div>
        <div
          className="lg:hidden font-neueMedium capitalize text-xl cursor-pointer"
          onClick={() => setMenu(!isMenu)}
        >
          Menu
        </div>
      </div>
    </Reveal>
  );
};
export default Header;
