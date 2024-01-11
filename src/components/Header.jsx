import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Header = ({ isMenu, setMenu }) => {
  return (
    <div className="bg-gainsboro maxW padX max-lg:fixed top-0 right-0 left-0 z-50 py-4 w-full">
      <Reveal width>
        <div className="flex items-start max-lg:items-center justify-between gap-x-2.5 font-neueMedium uppercase text-lg max-lg:text-base">
          <div className="text-2xl max-lg:text-xl max-sm:text-lg font-neueBold">
            Fortunate Ogodu
          </div>
          <div className="max-lg:hidden flex flex-col">
            <span>Ogodu4tunate@gmail.com</span>
            <span>Available for any frontend role / project</span>
          </div>
          <div className="lg:flex flex-col items-end hidden">
            <span>Based in Lagos,</span>
            <span>Nigeria</span>
          </div>
          <div
            className="lg:hidden font-neueMedium capitalize text-xl max-sm:text-lg cursor-pointer"
            onClick={() => setMenu(!isMenu)}
          >
            {isMenu === false && (
              <motion.span
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Menu
              </motion.span>
            )}
            {isMenu === true && (
              <motion.span
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              >
                Close
              </motion.span>
            )}
          </div>
        </div>
      </Reveal>
      {isMenu && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="bg-ygainsboro z-50 pt-3 pb-7"
        >
          <div className="flex flex-col items-start space-y-1.5 text-sm font-neueMedium uppercase">
            <span>Ogodu4tunate@gmail.com</span>
            <span>Available for any frontend role / project.</span>
            <span>Based in Lagos, Nigeria.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default Header;
