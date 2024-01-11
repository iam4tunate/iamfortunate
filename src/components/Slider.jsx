import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "swiper/css";
import Reveal from "./Reveal";
import { RiExternalLinkLine } from "react-icons/ri";

const Slider = ({ heading, data, website }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="pb-20 max-md:pb-16 last:pb-0">
      <div className="flex items-center justify-between pb-6">
        <Reveal>
          <div className="text-2xl font-neueMedium">{heading}</div>
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-x-5 max-sm:gap-x-2 z-10">
            <span
              ref={prevRef}
              className={`${isBegin && "opacity-20"} py-2 px-2 cursor-pointer`}
            >
              <IoArrowBackOutline className="text-2xl max-sm:text-xl" />
            </span>
            <span
              ref={nextRef}
              className={`${isEnd && "opacity-20"} py-2 px-2 cursor-pointer`}
            >
              <IoArrowForwardOutline className="text-2xl max-sm:text-xl" />
            </span>
          </div>
        </Reveal>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setIsBegin(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          onInit={() => setInit(true)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((project) => (
            <SwiperSlide key={project.id} className="">
              <div className="h-fit">
                <Reveal>
                  <img
                    src={project.img}
                    alt=""
                    className="w-full shadow-black rounded-md shadow-2xl"
                  />
                </Reveal>
                <div className="max-sm:flex-col items-start pt-2 px-2 flex justify-between">
                  <div className="max-sm:w-full space-y-0.5 w-[70%]">
                    <div className="flex items-center justify-between max-sm:pb-1 font-neueMedium text-xl max-sm:text-lg">
                      <Reveal>
                        <span>{project.name}</span>
                      </Reveal>
                      <Reveal>
                        <Link
                          to={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm:hidden flex items-center gap-x-1 font-neueMedium cursor-pointer max-sm:text-base"
                        >
                          <span>Preview</span>
                          <RiExternalLinkLine className="text-lg max-sm:text-base" />
                        </Link>
                      </Reveal>
                    </div>
                    <Reveal>
                      <p className="">{project.desc}</p>
                    </Reveal>
                  </div>
                  <Reveal>
                    <Link
                      to={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-sm:hidden flex items-center gap-x-1 font-neueMedium cursor-pointer max-sm:text-base"
                    >
                      <span>Preview</span>
                      <RiExternalLinkLine className="text-lg max-sm:text-base" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Reveal>
          {website && (
            <div className="text-sm font-neueMedium opacity-60 px-2 pt-6 sm:w-[80%] lg:w-[60%] w-full">
              Disclamer: I drew inspiration and incorporated design elements
              from the Figma community into some of these websites.
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
};
export default Slider;
