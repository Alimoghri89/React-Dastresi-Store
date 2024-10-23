import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MainSlider from "../../Components/MainSlider/MainSlider";
import { useSWRConfig } from "swr";
import Discount from "../../Components/Discount/Discount";
const Home = () => {
  const { containerWidth} = useSWRConfig();

  return (
    <div className="flex flex-col items-center gap-8">
      <Navbar />
      <div style={{width:`${containerWidth}px`}} className="rounded-3xl overflow-hidden"><MainSlider/></div>
      <Discount/>
      <Footer />
    </div>
  );
};

export default Home;
