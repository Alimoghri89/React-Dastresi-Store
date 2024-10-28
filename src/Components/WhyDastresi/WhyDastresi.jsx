import React from "react";
import consultant from "../../../public/icon2.png";
import wallet from "../../../public/icon1.png";
import transport from "../../../public/icon3.png";
import onSite from "../../../public/icon4.png";
const WhyDastresi = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-center">
        <h1 className="font-shabnam-bold text-black text-xl md:text-2xl text-center">
          چرا دسترسی رو برای خرید انتخاب کنیم؟
        </h1>
      </div>
      <div className="grid  grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-2" dir="rtl">
        <div className="flex flex-col items-center justify-between">
          <img src={consultant} alt="consultant"/>
          <h4 className="font-shabnam-bold text-dark_gray text-lg">
            مشاوره تخصصی برای خرید محصول
          </h4>
          <span className="font-shabnam-medium text-black text-sm leading-8 text-center">
            برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو
            انجام دهید.
          </span>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img src={wallet} alt="wallet" />
          <h4 className="font-shabnam-bold text-dark_gray text-lg">
            قیمت مناسب با بالاترین کیفیت
          </h4>
          <span className="font-shabnam-medium text-black text-sm leading-8 text-center">
          گروه دسترسی در تلاش است که  کالای با کیفیت را با مناسب‌ترین قیمت به دست شما برساند.
          </span>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img src={transport} alt="transport" />
          <h4 className="font-shabnam-bold text-dark_gray text-lg">
            ارسال سریع
          </h4>
          <span className="font-shabnam-medium text-black text-sm leading-8 text-center">
          ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می گیرد.
          </span>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img src={onSite} alt="on-site" />
          <h4 className="font-shabnam-bold text-dark_gray text-lg">
          امکان خرید حضوری
          </h4>
          <span className="font-shabnam-medium text-black font-normal text-sm leading-8 text-center">
          مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت مراجعه نمایید.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyDastresi;
