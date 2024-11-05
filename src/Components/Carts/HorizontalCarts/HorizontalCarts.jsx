import React from "react";

const HorizontalCarts = ({ product }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let path = "../../../.." + (product?.path || "");
  let discount = product?.discount;
  let name = product?.name;
  let price = product?.price;
  let alt = product?.alt;
  let mainPrice = price !== undefined ? numberWithCommas(price) : null;
  let discountAmount =
    discount && price !== undefined
      ? numberWithCommas((discount * price) / 100)
      : null;
  let finalPrice =
    discount && price !== undefined
      ? numberWithCommas(price - (discount * price) / 100)
      : mainPrice;

  return (
    <div className="w-full h-full p-4 rounded-2xl bg-white flex flex-row-reverse gap-4">
      <div className="w-full">
        <img className="w-full" src={path} alt={alt} />
      </div>
      <div className=" flex flex-col gap-4  justify-between md:justify-evenly lg:justify-between">
        <div className="font-shabnam-medium w-full" dir="rtl">
          <span dir="rtl" className="text-sm md:text-2xl lg:text-lg">
            {name}
          </span>
        </div>
        <div className="h-full flex flex-col justify-between md:justify-around lg:justify-between">
          {discount ? (
            <div className="flex flex-col-reverse items-center justify-between ">
              <div className="flex flex-row-reverse gap-1 items-center  text-light_red">
                <span className="font-shabnam-medium text-sm md:text-xl lg:text-sm">
                  {discountAmount}
                </span>
                <span className="font-shabnam-medium text-sm md:text-xl lg:text-sm">
                  تومان تخفیف
                </span>
              </div>
              <span className="font-shabnam-medium line-through text-sm md:text-2xl lg:text-sm text-dark_gray">
                {mainPrice}
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex flex-row-reverse items-center justify-end gap-1">
            <span className="font-shabnam-bold text-dark_blue text-lg md:text-3xl lg:text-xl">
              {finalPrice}
            </span>
            <span className="font-shabnam-medium  text-md md:text-xl lg:text-[10px] text-dark_gray ">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarts;
