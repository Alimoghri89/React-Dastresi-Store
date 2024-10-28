import React from "react";
import VerticalCarts from "../Carts/VerticalCarts/VerticalCarts.jsx";
import PercentIcon from "@mui/icons-material/Percent";
import useSWR, { useSWRConfig } from "swr";
import HorizontalCarts from "../Carts/HorizontalCarts/HorizontalCarts.jsx";

const Discount = () => {
  const { containerWidth } = useSWRConfig();
  const { url } = useSWRConfig();
  const { data, error, isLoading } = useSWR(url);
  if (!error && !isLoading) {
    let discountProducts = data?.products.map(item=> (item.discount !== null? item: null)).filter((item,index) =>  item !== null && index < 5 );
    return (
      <div
        className="bg-medium_gray p-4 md:p-8 flex flex-col gap-6 rounded-3xl"
        style={{ width: `${containerWidth}px` }}
      >
        <div className="w-full flex flex-row-reverse  items-center justify-between ">
          <div className="flex items-center">
            <h1 className="font-shabnam-bold text-sm md:text-2xl lg:text-5xl text-dark_gray">
              تخفیف های روزانه دسترسی
            </h1>
            <div className="text-xl md:text-3xl lg:text-7xl text-light_red">
              <PercentIcon fontSize="inherit" />
            </div>
          </div>
          <div>
            <span className="font-shabnam-bold text-dark_gray text-lg md:text-2xl lg:text-3xl">
              1233211
            </span>
          </div>
        </div>
        {containerWidth >= 768 ? (
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-1 justify-between gap-6 ">
            <div className=" grid grid-cols-1 grid-rows-3 gap-6">
              <div>
                <HorizontalCarts product={discountProducts?.at(0)} />
              </div>
              <div>
                <HorizontalCarts product={discountProducts?.at(1)} />
              </div>
              <div>
                <HorizontalCarts product={discountProducts?.at(2)} />
              </div>
            </div>
            <div>
              <VerticalCarts product={discountProducts?.at(3)} />
            </div>
            <div>
              <VerticalCarts product={discountProducts?.at(4)} />
            </div>
          </div>
        ) : (
          <div className=" grid grid-cols-1 grid-rows-5 gap-6">
            <div>
              <HorizontalCarts product={discountProducts?.at(0)} />
            </div>
            <div>
              <HorizontalCarts product={discountProducts?.at(1)} />
            </div>
            <div>
              <HorizontalCarts product={discountProducts?.at(2)} />
            </div>
            <div>
              <HorizontalCarts product={discountProducts?.at(3)} />
            </div>
            <div>
              <HorizontalCarts product={discountProducts?.at(4)} />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Discount;
