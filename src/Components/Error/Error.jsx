import React from "react";
import notFound from "../../../public/funny-404.gif";
const Error = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-8 px-2">
      <img src={notFound} alt="404" />
      <div dir="rtl">
      <h1 className="font-shabnam-bold text-[30px]">صفحه‌ی مورد نظرت یافت نشد!</h1>
      <ul className="list-disc px-10">
        <li>یا از سرچ بالای سایت استفاده کنید.</li>
        <li>یا از منوهای اصلی به قسمت مورد نظر خود بروید.</li>
        <li>یا به صفحه اصلی سایت برگردید و دوباره شروع کنید.</li>
      </ul>
      </div>
    </div>
  );
};

export default Error;
