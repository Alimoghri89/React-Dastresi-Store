import React from "react";

const VerticalCarts = ({ product }) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(product)
  let path = "../../../.."
   path += product?.path
  let discount = product?.discount;
  let name = product?.name;
  let price = product?.price;
  let mainPrice = numberWithCommas(price);
  let discountAmount = numberWithCommas((discount * price) / 100);
  let finalPrice = numberWithCommas(price - (discount * price) / 100);

  return (
    <div className="w-full h-full p-4 rounded-2xl bg-white flex flex-col gap-4">
      <div className="w-full">
        <img className="w-full" src={path} alt="" />
      </div>
      <div className=" flex flex-col gap-4">
        <div className="font-shabnam-medium w-full" dir="rtl">
          <span dir="rtl">{name}</span>
        </div>
        <div className=" flex justify-between">
          <div className="flex flex-row-reverse gap-1 items-center text-light_red">
            <span className="font-shabnam-medium text-[12px]">
              {discountAmount}
            </span>
            <span className="font-shabnam-medium text-[12px]">تومان تخفیف</span>
          </div>
          <span className="font-shabnam-medium line-through text-dark_gray">
            {mainPrice}
          </span>
        </div>
        <div className="flex flex-row-reverse  items-center justify-end gap-1">
          <span className="font-shabnam-bold text-dark_blue text-xl">
            {finalPrice}
          </span>
          <span className="font-shabnam-medium text-[10px] text-dark_gray ">
            تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarts;
