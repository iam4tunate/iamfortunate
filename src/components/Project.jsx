import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Reveal from "./Reveal";

const Project = (prop) => {
  const { id, name, note, techStack, images } = prop.project;

  return (
    <div className="project bg-blac maxW padX">
      <div className="space-y-4 mb-8">
        <Reveal>
          <div className="text-3xl font-neueMedium">
            {id}. {name}
          </div>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">{note}</p>
        </Reveal>
        <Reveal>
          <ul className="flex items-center flex-wrap gap-x-4 gap-y-3">
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
      </div>
      <Reveal width>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper"
          autoplay={{
            delay: 5000,
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
