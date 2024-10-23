import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../../public/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import{ useSWRConfig } from 'swr';
const Footer = () => {
  const { containerWidth } = useSWRConfig();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" w-full bg-medium_gray flex justify-center">
        <div
          className="flex lg:flex-row g:gap-0 lg:items-center lg:justify-between lg:px-0 py-4 flex-col gap-4 px-4"
          style={
            containerWidth > 1024
              ? { width: `${containerWidth}px` }
              : { width: "100%" }
          }
          dir="rtl"
        >
          <div className="flex gap-1 items-center text-nowrap">
            <PhoneEnabledIcon className="text-dark_gray " />

            <span className="font-shabnam-medium text-dark_gray">
              021-33902646
            </span>
          </div>

          <div className="flex gap-1 items-center lg:text-nowrap">
            <AccessTimeFilledIcon className="text-dark_gray" />
            <span className="font-shabnam-medium text-dark_gray">
              شنبه تا پنج شنبه از ساعت 10 صبح الی ساعت 18
            </span>
          </div>
          <div className="flex gap-1 items-center lg:text-nowrap">
            <LocationOnIcon className="text-dark_gray" />
            <span className="font-shabnam-medium text-dark_gray">
              تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه
              بدیع
            </span>
          </div>
          <button
            onClick={scrollToTop}
            dir="rtl"
            className="text-dark_gray font-shabnam-medium w-[100px] h-[50px] shadow-black/25 shadow-sm bg-light_gray rounded-[12px] hidden xl:flex xl:items-center xl:justify-center"
          >
            برو بالا <KeyboardArrowUpIcon />
          </button>
        </div>
      </div>
      <div
        className="w-full  flex  justify-center "
        dir="rtl"
      >
        <div
          className="flex lg:flex-row flex-col items-center "
          style={
            containerWidth > 1024
              ? { width: `${containerWidth}px` }
              : { width: "100%" }
          }
        >
          <div className=" lg:w-[300px] w-full flex flex-col lg:justify-center items-center gap-16 py-10 px-10  flex-nowrap shrink-0">
            <img src={logo} alt="" className="lg:w-full w-[50%] " />
            <div className=" lg:w-fit flex lg:justify-between lg:gap-2  w-full  justify-center items-center gap-10">
              <span className="font-shabnam-medium text-black text-xl">
                با ما در ارتباط باشید:
              </span>
              <InstagramIcon className="text-black" fontSize="large" />
            </div>
          </div>
          <div className="lg:w-[800px] w-full  py-4 px-4 flex flex-col justify-center gap-4">
            <h1 className="font-shabnam-bold text-2xl">فروشگاه اینترنتی دسترسی</h1>
            <span className="text-justify font-shabnam-medium text-dark_gray leading-8">
              فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا
              در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال
              1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه
              کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد
              بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق
              سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی
              دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی
              فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت
              هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه،
              تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه میدهد.
            </span>
          </div>
          <div className="lg:w-auto w-full  py-4 px-4 flex flex-col gap-4 ">
            <h1 className="text-2xl font-shabnam-bold">دسترسی سریع</h1>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">باشگاه مشتریان</a>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">سوالات متداول</a>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">بلاگ</a>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">شرایط و قوانین</a>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">ارتباط با ما</a>
            <a href="#" className="text-dark_gray font-shabnam-medium hover:text-black transition-all divide-neutral-300">درباره ی ما</a>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark_blue flex justify-center py-4 px-4">
        <span dir="rtl" className="font-shabnam-medium text-white text-center">تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.</span>
      </div>
    </div>
  );
};

export default Footer;
