import React from "react";

const VerticalCarts = ({ product }) => {
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
    <div className="w-full h-full p-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="w-full ">
        <img className="w-full" src={path} alt={alt} />
      </div>
      <div className=" flex flex-col gap-4  justify-between h-full ">
        <div className="font-shabnam-medium w-full text-lg " dir="rtl">
          <span dir="rtl">{name}</span>
        </div>
        {price ? (
          <div>
            {discount ? (
              <div className=" flex justify-between  ">
                <div className="flex flex-row-reverse gap-1 items-center text-light_red">
                  <span className="font-shabnam-medium text-lg">
                    {discountAmount}
                  </span>
                  <span className="font-shabnam-medium text-lg">
                    تومان تخفیف
                  </span>
                </div>
                <span className="font-shabnam-medium line-through text-lg text-dark_gray">
                  {mainPrice}
                </span>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-row-reverse  items-center justify-end gap-1">
              <span className="font-shabnam-bold text-dark_blue text-3xl">
                {finalPrice}
              </span>
              <span className="font-shabnam-medium text-lg text-dark_gray ">
                تومان
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full h-[70px] absolute bottom-0 right-0 bg-warning flex justify-center items-center">
            <span className="font-shabnam-medium text-lg text-danger ">
              ناموجود
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalCarts;
