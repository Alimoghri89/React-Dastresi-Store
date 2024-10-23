import logo from "../../../public/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuBar from "../MenuBar/MenuBar";
import { useSWRConfig } from 'swr';
import { Link } from "react-router-dom"; 
const SearchBar = () => {
  const { containerWidth,mobileMenuActive } = useSWRConfig();
  if (containerWidth > 1024) {
    return (
      <div className="w-screen flex  justify-center bg-white font-shabnam-medium text-sm shadow-sm shadow-black/25">
        <div
          className="flex flex-col items-center"
          style={
            containerWidth > 1024
              ? { width: `${containerWidth}px`, height: "130px" }
              : { width: "100%" }
          }
        >
          <div className="nav w-full h-[70%] pt-5 pb-5 flex  justify-between ">
            <div className="buttons flex gap-[10%] w-[20%]  h-full">
              <div className="register w-fit px-4  shadow-sm shadow-black/25 rounded-lg bg-dark_blue h-full">
                <Link
                  to = "dashboard"
                  className="h-full w-full flex text-white justify-center items-center  text-nowrap"
                >
                  ورود به داشبورد
                </Link>
              </div>
              <div className="register w-fit px-4 rounded-lg bg-light_gray shadow-sm shadow-black/25 h-full  text-xl text-light_red relative">
                <span className="bg-light_red w-[20px] h-[20px] rounded-[10px] text-white flex justify-center items-center text-[10px] absolute -top-2 -right-2">
                  0
                </span>
                <a
                  href="#"
                  className="flex justify-center items-center w-full h-full"
                >
                  <ShoppingCartIcon className="hover:text-black transition-all duration-200" />
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-8 justify-start flex-row-reverse ">
              <img src={logo} alt="" className="h-full" />
              <div className="w-[35%] h-full relative pl-2 pr-2 ">
                <div className="absolute right-3 top-2 text-2xl text-dark_gray h-[80%] ">
                  <SearchIcon fontSize="large" />
                </div>
                <input
                  className="w-full h-full rounded-xl bg-light_gray font-shabnam-bold text-[16px] pl-2 pr-10 placeholder-dark_gray shadow-sm shadow-black/25"
                  placeholder="جستجوی محصولات"
                  dir="rtl"
                ></input>
              </div>

              <div className="headLink w-auto h-full flex flex-row-reverse gap-4  items-center text-dark_gray/50 transition-all">
                <a
                  href="#"
                  className="text-nowrap hover:text-black  duration-300"
                >
                  باشگاه مشتریان
                </a>
                <a
                  href="#"
                  className="text-nowrap hover:text-black duration-300"
                >
                  بلاگ
                </a>
                <a
                  href="#"
                  className="text-nowrap hover:text-black duration-300"
                >
                  ارتباط با ما
                </a>
                <a
                  href="#"
                  className="text-nowrap hover:text-black duration-300"
                >
                  درباره ی ما
                </a>
              </div>
            </div>
          </div>
        <MenuBar />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-center justify-between bg-medium_gray h-[60px] px-4">
        <div className="flex gap-4 w-fit">
          <div className="register w-fit  h-fit  text-xl relative">
            <span className="bg-light_red w-[18px] h-[18px] rounded-[10px] text-white flex justify-center items-center text-[10px] absolute -top-2 -right-2">
              0
            </span>
            <a
              href="#"
              className="flex justify-center items-center w-full h-full"
            >
              <ShoppingCartIcon className="text-dark_gray hover:text-black transition-all duration-200" />
            </a>
          </div>
          <div>
            <PersonIcon className="text-dark_gray" />
          </div>
          <div>
            <SearchIcon className="text-dark_gray" />
          </div>
        </div>
        <div className="flex items-center gap-4  h-full  py-4">
          <div className="w-fit h-full ">
            <img src={logo} alt="" className="h-full" />
          </div>
          <MenuIcon onClick = {mobileMenuActive} className="text-dark_gray " />
        </div>
        <MenuBar/>
      </div>
    );
  }
};

export default SearchBar;
