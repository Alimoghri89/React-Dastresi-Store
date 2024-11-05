import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../App/styles.css';
import { Pagination,Autoplay } from 'swiper/modules';
import useSWR,{ useSWRConfig } from 'swr';

const MainSlider = () => {
  const { url} = useSWRConfig();
    const { data:mainSlider, error, isLoading } = useSWR(`${url}/mainSlider`);
    return (
        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
                delay: 3000, // 
                disableOnInteraction: false, 
              }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            {mainSlider?.map((item,index)=>{
                return (
                    <SwiperSlide key={index}><img className='w-full' src={`../../../${item.path}`} alt={item.alt} /></SwiperSlide>
                )
            })}

          </Swiper>
        </>
      );
}

export default MainSlider