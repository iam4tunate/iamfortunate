import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const Project = ({ id, name, note, techStack, images, url }) => {
  return (
    <div className="project bg-blac maxW padX">
      <div className="space-y-4 mb-2">
        <Reveal>
          <div className="text-3xl font-neueMedium">
            <span className="text-2xl">{id}</span>. {name}
          </div>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
            {note}
          </p>
        </Reveal>
        <Reveal>
          <ul className="flex items-center flex-wrap gap-x-2 gap-y-3 text-sm font-neueMedium opacity-90">
            {techStack?.map((stack) => (
              <li
                key={stack}
                className="border border-gray-400 py-1.5 px-3.5 rounded-md"
              >
                {stack}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="w-fit ml-auto ">
          <Reveal>
            <Link
              to={url}
              target="_blank"
              className="text-xl max-md:text-lg max-sm:text-base flex items-center gap-x-1 font-neueMedium animate-pulse cursor-pointer"
            >
              Live Preview <GoArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </div>
      <Reveal width>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            800: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt=""
                className="object-cover h-[35rem] w-full object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </div>
  );
};
export default Project;
