import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App/styles.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import useSWR, { useSWRConfig } from "swr";
const PopularBrands = () => {
  const { url } = useSWRConfig();
  const { data, error, isLoading } = useSWR(url);

  return (
      <Swiper
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
        slidesPerView={1}
        spaceBetween={10}
          navigation={true}
        style={{
          "--swiper-navigation-color": "#0A295A",
          "--swiper-navigation-size": "25px",
          "--swiper-navigation-sides-offset": "0px",
          "--swiper-pagination-color": "#0A295A",
          "--swiper-pagination-bottom": "0px",
          "padding" : "50px 0 50px 0",
        }}
        autoplay={{
          delay: 2000, //
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
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
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data?.popularBrands.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                padding: "0px",
                backgroundColor: "transparent",
                borderRadius: "10px",
              }}
            >
              <div className="w-40 h-20 overflow-hidden shadow-sm shadow-black/25 rounded-lg">
                <img className="h-full" src={item.path} alt={item.alt} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default PopularBrands;
