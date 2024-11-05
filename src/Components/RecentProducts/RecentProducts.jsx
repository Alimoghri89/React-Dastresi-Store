import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VerticalCarts from "../Carts/VerticalCarts/VerticalCarts";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App/styles.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import useSWR, { useSWRConfig } from "swr";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const RecentProducts = () => {
  const { url } = useSWRConfig();
  const { data:products, error, isLoading } = useSWR(`${url}/products`);
  let recentProducts = products?.filter(item => item.price !== null && item.price !== "")
  return (
    <div className=" p-4 md:p-8 bg-medium_gray flex flex-col gap-4  h-[650px]">
        <div className=" flex items-center justify-between flex-col-reverse gap-2 md:gap-0 md:flex-row">
            <span className="flex items-center gap-2 text-dark_gray text-md font-shabnam-medium">
                <div className="w-fit h-fit  rounded-lg border-2 border-dark_gray"><ArrowLeftIcon fontSize="small"/></div>
                مشاهده همه ی محصولات
            </span>
            <span className="font-shabnam-bold text-dark_gray text-2xl">...همین الان موجود شد</span>
        </div>
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
          "padding" : "0 0 50px 0",
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {recentProducts?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                padding: "0px",
                backgroundColor: "transparent",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div className="w-full h-full">
                <VerticalCarts product={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecentProducts;
