import logo from "../../../public/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useSWR, { useSWRConfig } from "swr";
import { NavLink, useNavigate } from "react-router-dom";
const MenuBar = () => {
  const { url } = useSWRConfig();
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path); 
  };
  const { data:menu, error, isLoading } = useSWR(`${url}/menu`);
  const { containerWidth, moblieMenuPosition, mobileMenuDeactive } =
    useSWRConfig();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!error && !isLoading) {
    if (containerWidth > 1024) {
      return (
        <div className="menu w-full h-[30%]  text-dark_gray relative flex flex-row-reverse justify-between items-center transition-all z-10">
          {menu?.map((item, index) => {
            if (item.submenu) {
              if (item.title !== "برند ها") {
                return (
                  <span
                    href="#"
                    className="flex gap-2 h-full items-center hover:text-light_red duration-200 relative group transition-all text-nowrap cursor-default "
                    key={index}
                  >
                    <div>
                      <ArrowDropDownIcon />
                    </div>
                    {item.title}
                    <ul
                      className="w-[300px] h-[0] bg-white shadow-sm shadow-black/25 absolute top-[40px] duration-100  right-0 group-hover:h-fit group-hover:py-4"
                      dir="rtl"
                    >
                      {item.submenu?.map((elem, id) => (
                        <li
                          className="hidden w-full h-fit  py-4 px-2 text-[12px] font-shabnam-medium text-dark_gray group-hover:flex hover:text-dark_blue duration-100 hover:bg-light_gray"
                          key={id}
                        >
                          <NavLink className=" h-full w-full" to="#">
                            {elem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </span>
                );
              } else {
                return (
                  <span
                    href="#"
                    className="flex gap-2 h-full items-center hover:text-light_red duration-200  group transition-all text-nowrap cursor-cell"
                    key={index}
                  >
                    <div>
                      <ArrowDropDownIcon />
                    </div>
                    {item.title}
                    <div className="h-[0] shadow-sm shadow-black/25 bg-white absolute top-10 duration-100  right-0 group-hover:h-fit ">
                      <ul
                        id="brandsContainer"
                        className=" grid grid-cols-5 grid-rows-1  "
                        dir="rtl"
                        style={{ width: `${containerWidth}px` }}
                      >
                        {item.submenu?.map((elem, id) => (
                          <li
                            className="hidden w-full h-fit transition-all border-l border-r py-2 px-2 text-[10px] font-shabnam-medium text-dark_gray group-hover:flex hover:text-dark_blue  duration-300 hover:bg-light_gray"
                            key={id}
                          >
                            <NavLink
                              to="#"
                              className=" flex w-full h-full justify-between"
                            >
                              {elem?.map((brand, brandId) => (
                                <span className="text-[12px]" key={brandId}>
                                  {brand}
                                </span>
                              ))}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                      <div
                        className="hidden py-2 w-fullh-fit border-t-2 group-hover:flex group-hover:flex-row transition-all duration-200 items-center text-[12px] px-2 font-shabnam-medium text-light_red"
                        dir="rtl"
                      >
                        <div className=" hover:cursor-pointer hover:text-dark_blue w-fit">
                          <NavLink to="#">مشاهده ی دیگر برند ها</NavLink>
                          <NavigateBeforeIcon />
                        </div>
                      </div>
                    </div>
                  </span>
                );
              }
            } else {
              return (
                <NavLink
                  to={item.title === "خانه"? "/home":"#"}
                  className={(navDate)=>navDate.isActive ? 
                    "flex gap-2 h-full items-center text-light_red duration-200  transition-all text-nowrap border-b-2 border-light_red"
                  :
                    "flex gap-2 h-full items-center hover:text-light_red duration-200  transition-all text-nowrap"
              }
                  key={index}
                >
                  {item.title}
                </NavLink>
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div
          className="w-[300px] transition-all h-screen duration-300 shadow-sm shadow-black/25  absolute top-0  bg-mainBody z-10 "
          style={{ right: `${moblieMenuPosition}` }}
        >
          <div className="flex  flex-col items-center h-[100%] relative">
            <button onClick={()=>{mobileMenuDeactive()}} className="mt-2 ml-2">
              <CloseIcon
                className="text-light_red absolute top-1 left-1"
                fontSize="large"
              />
            </button>
            <div className="p-4 w-[70%] flex  justify-center ">
              <img src={logo} alt="" className="h-full" />
            </div>
            <div className="headLink w-full text-[12px] p-2  flex flex-row-reverse justify-between border-t-[1px] border-b-[1px] border-medium_gray items-center text-dark_gray/50 transition-all">
              <NavLink
                to="/CustomerClub"
                className="text-nowrap hover:text-black  duration-300"
                onClick={()=>{mobileMenuDeactive()}}
              >
                باشگاه مشتریان
              </NavLink>
              <NavLink
                to="#"
                className="text-nowrap hover:text-black duration-300"
              >
                بلاگ
              </NavLink>
              <NavLink
                to="#"
                className="text-nowrap hover:text-black duration-300"
              >
                ارتباط با ما
              </NavLink>
              <NavLink
                to="#"
                className="text-nowrap hover:text-black duration-300"
              >
                درباره ی ما
              </NavLink>
            </div>
            <div className="flex flex-col  w-full h-full overflow-y-scroll">
              {menu?.map((item, index) => {
                if (item.submenu) {
                  return (
                    <div key={index} dir="rtl">
                      <h2
                        className={`${
                          openIndex === index ? "bg-navi_blue" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200"
                          aria-expanded={openIndex === index}
                          aria-controls={`accordion-collapse-body-${index}`}
                        >
                          <span
                            className={`text-[16px] font-shabnam-bold ${
                              openIndex === index ? "text-white" : ""
                            }`}
                          >
                            {item.title}
                          </span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${
                              openIndex === index
                                ? "rotate-180 text-white "
                                : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={`accordion-collapse-body-${index}`}
                        className={`overflow-hidden transition-all duration-200 ${
                          openIndex === index ? "max-h-screen" : "max-h-0"
                        }`}
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                      >
                        <div className="border bg-medium_gray ">
                          {item.submenu?.map((elem, id) => (
                            <button
                              className="w-full px-5 flex  transition-all duration-300 justify-start hover:bg-dark_gray  text-dark_gray items-center border h-14  hover:text-white"
                              key={id}
                            >
                              {elem}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} dir="rtl">
                      <h2>
                        <button
                          type="button"
                          onClick={() => {toggleAccordion(index)}}
                          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200"
                          aria-expanded={openIndex === index}
                          aria-controls={`accordion-collapse-body-${index}`}
                        >
                          <NavLink
                          to={item.title === "خانه" ? "/home" : "#"}
                          onClick={()=>{mobileMenuDeactive()}}
                          className="text-[16px] font-shabnam-bold">
                            {item.title}
                          </NavLink>
                          <svg
                            className="w-3 h-3 -rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-full py-4 px-4">
              <button 
              onClick={()=> handleButtonClick("/dashboard/mainslider")}
              className="w-full h-[50px] rounded-[15px]  bg-navi_blue text-white font-shabnam-medium">
                ورود به داشبورد
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default MenuBar;
