import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CustomerIMG from "../../../public/customers.jpg";
import Bronz from "../../../public/bronz-medal.jpg";
import silver from "../../../public/silver-medal.jpg";
import golden from "../../../public/golden-medal.jpg";
import { useSWRConfig } from "swr";
const CustomerClub = () => {
  const { containerWidth } = useSWRConfig();
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div
        className=" flex flex-col gap-2"
        style={{ width: `${containerWidth}px` }}
      >
        <div className="bg-white  rounded-xl mt-6 px-6 py-6">
          <div className="w-full h-fit flex flex-col gap-4">
            <h1 className="flex font-shabnam-bold text-lg md:text-4xl text-dark_gray justify-end">
              باشگاه مشتریان
            </h1>
            <img
              className="w-full rounded-xl"
              src={CustomerIMG}
              alt="customers"
            />
            <p dir="rtl" className="font-shabnam-medium text-black text-xs md:text-md">
              باشگاه مشتریان فروشگاه دسترسی در راستای حمایت از مشتریان وفادار
              سایت ایجاد شده است. به این ترتیب که هر فرد با توجه به تعداد و
              مبلغی که تا الان از فروشگاه دسترسی خرید نموده و امتیازی که جمع
              کرده است، میتوانید به یکی از سطوح برنزی، نقره ای و یا طلایی برسد.
            </p>
            <p dir="rtl" className="font-shabnam-medium text-black text-xs md:text-md">
              برای مثال برای اینکه به اولین سطح که برنزی است برسید باید حداقل 10
              فاکتور خرید و در کل مبلغ 15 میلیون تومان از طریق سایت خرید کرده
              باشید.
            </p>
            <p dir="rtl" className="font-shabnam-medium text-black text-xs md:text-md">
              ویژگی هر کدام از این سطوح در زیر توضیح داده شده است
            </p>
          </div>
        </div>
        <div className="bg-white  rounded-xl mt-6 px-6 py-6">
          <div className="w-full flex flex-col  md:flex-row gap-6 h-auto md:h-40 " dir="rtl">
            <div className="flex justify-center">
            {containerWidth < 400? 
            <img className="w-1/2" src={Bronz} alt="bronze" />
            :
            <img className="h-full" src={Bronz} alt="bronze" />
            }
            </div>
            <div className="flex flex-col gap-4 p-2 items-center md:items-start">
              <h1 className="font-shabnam-bold text-bronze text-2xl">سطح برنزی</h1>
              <p className="font-shabnam-medium text-dark_gray texd-sm text-center md:text-start">
                در این سطح
                <br></br>
                - محصولات سایت ( به غیر از کالاهای فروش ویژه) با 2 درصد
                تخفیف به شما نشان داده خواهد شد.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white  rounded-xl mt-6 px-6 py-6">
        <div className="w-full flex flex-col  md:flex-row gap-6 h-auto md:h-40 " dir="rtl">
            <div className="flex justify-center">
            {containerWidth < 400? 
            <img className="w-1/2" src={silver} alt="silver" />
            :
            <img className="h-full" src={silver} alt="silver" />
            }
            </div>
            <div className="flex flex-col gap-4 p-2 items-center md:items-start">
              <h1 className="font-shabnam-bold text-silver text-2xl">سطح نقره ایی</h1>
              <p className="font-shabnam-medium text-dark_gray texd-sm text-center md:text-start">
                در این سطح
                <br></br>
                - محصولات سایت ( به غیر از کالاهای فروش ویژه) با 3 درصد تخفیف به شما نشان داده خواهد شد.
                <br></br>
                - 4 کد نخفیف 30 هزار تومانی در ابتدای هر فصل در پنلتان شارژ میشود.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl mt-6 px-6 py-6">
        <div className="w-full flex flex-col  md:flex-row gap-6 h-auto md:h-40 " dir="rtl">
            <div className="flex justify-center">
            {containerWidth < 400? 
            <img className="w-1/2" src={golden} alt="golden" />
            :
            <img className="h-full" src={golden} alt="golden" />
            }
            </div>
            <div className="flex flex-col gap-4 p-2 items-center md:items-start">
              <h1 className="font-shabnam-bold text-golden text-2xl">سطح طلایی</h1>
              <p className="font-shabnam-medium text-dark_gray texd-sm text-center md:text-start">
                در این سطح
                <br></br>
                - محصولات سایت ( به غیر از کالاهای فروش ویژه) با 6 درصد تخفیف به شما نشان داده خواهد شد.
                <br></br>
                - 4 کد نخفیف 50 هزار تومانی در ابتدای هر فصل در پنلتان شارژ میشود.
                <br></br>
                - کالاهای فروش ویژه اختصاصی در پنل سایت به صورت هفتگی که فقط برای شما نشان داده میشود.
              </p>
            </div>
          </div>
        </div>
        <button className="flex font-shabnam-bold text-white bg-navi_blue w-fit p-4 text-nowrap rounded-lg self-center mt-6 mb-8">
          مشاهده وضعیت و ارتقای سطح باشگاه
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerClub;
