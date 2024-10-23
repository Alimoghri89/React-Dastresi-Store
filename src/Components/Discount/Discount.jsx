import React from "react";
import VerticalCarts from "../Carts/VerticalCarts/VerticalCarts.jsx";
import PercentIcon from "@mui/icons-material/Percent";
import useSWR, { useSWRConfig } from "swr";

const Discount = () => {
  const { containerWidth } = useSWRConfig();
  const { url } = useSWRConfig();
  const { data, error, isLoading } = useSWR(url);
  if (!error && !isLoading) {
    let discountProducts = data?.products
      .map((item, index) => (index < 5 ? item : null))
      .filter((item) => item !== null);
    console.log(discountProducts?.at(0));
    return (
      <div
        className="bg-medium_gray px-10"
        style={{ width: `${containerWidth}px` }}
      >
        <div className="w-full flex flex-row-reverse items-center justify-between ">
          <div className="flex items-center">
            <h1 className="font-shabnam-bold text-5xl text-dark_gray">
              تخفیف های روزانه دسترسی
            </h1>
            <div className="text-7xl text-light_red">
              <PercentIcon fontSize="inherit" />
            </div>
          </div>
          <div>
            <span className="font-shabnam-bold text-dark_gray text-3xl">
              1233211
            </span>
          </div>
        </div>
        <div className=" border-2 border-black grid grid-cols-3 grid-rows-1 justify-between gap-6">
          <div className=" grid grid-cols-1 grid-rows-3">
            <div>
              <VerticalCarts product={discountProducts?.at(0)}/>
            </div>
          </div>
          <div>
            {/* <VerticalCarts product = {discountProducts?.at(1)}/> */}
          </div>
          <div>{/* <VerticalCarts product={discountProducts?.at(2)}/> */}</div>
        </div>
      </div>
    );
  }
};

export default Discount;
