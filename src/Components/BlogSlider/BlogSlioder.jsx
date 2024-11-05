import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App/styles.css";
import { Autoplay} from "swiper/modules";
import useSWR, { useSWRConfig } from "swr";
const BlogSlider = () => {
  const { url } = useSWRConfig();
  const { data:blogsPosts, error, isLoading } = useSWR(`${url}/blogsPosts`);
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        style={{
          "padding" : "30px 0 30px 0",
        }}
        autoplay={{
          delay: 3000, //
          disableOnInteraction: false,
        }}

        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {blogsPosts?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                padding: "0px",
                backgroundColor: "transparent",
                borderRadius: "10px",
              }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm shadow-black/25 flex flex-col pb-4">
                <img src={item.path} alt={item.alt} />
                <span className="font-shabnam-medium text-xs mt-5 text-nowrap">{item.title}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default BlogSlider;
