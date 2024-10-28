import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MainSlider from "../../Components/MainSlider/MainSlider";
import { useSWRConfig } from "swr";
import Discount from "../../Components/Discount/Discount";
import ElectedCategory from "../../Components/ElectedCategory/ElectedCategory";
import RecentProducts from "../../Components/RecentProducts/RecentProducts";
import WhyDastresi from "../../Components/WhyDastresi/WhyDastresi";
import MostSaleProducts from "../../Components/MostSaleProducts/MostSaleProducts";
import PopularBrands from "../../Components/PopularBrands/PopularBrands";
import BlogSlider from "../../Components/BlogSlider/BlogSlioder";
const Home = () => {
  const { containerWidth} = useSWRConfig();

  return (
    <div className="flex flex-col items-center gap-8">
      <Navbar />
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden"><MainSlider/></div>
      <Discount/>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden ">
        <div className="flex flex-col gap-4">
          <h1 className="flex w-full justify-center text-black text-xl md:text-3xl font-shabnam-bold">دسته بندی های منتخب</h1>
          <ElectedCategory/>
        </div>
      </div>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden "><RecentProducts/></div>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden "><WhyDastresi/></div>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden "><MostSaleProducts/></div>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden "><PopularBrands/></div>
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden "><BlogSlider/></div>
      <Footer />
    </div>
  );
};

export default Home;
