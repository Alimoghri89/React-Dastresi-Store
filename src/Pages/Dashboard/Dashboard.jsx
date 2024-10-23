import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import { Link } from "react-router-dom"; 
import RouterDashboard from "../../Components/RouterDashboard/RouterDashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-dark_blue">
      <div className="w-full h-[60px] flex items-center px-8 justify-between">
        <div className="w-auto flex flex-row gap-8">
          <Link
            to="/dashboard/notifications"
            className="flex flex-col relative group"
          >
            <NotificationsIcon className="text-white" fontSize="large" />
            <hr className="w-full border-2 absolute -bottom-[8px] right-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-sm" />
          </Link>
          <Link to="/dashboard/chat" className="flex flex-col relative group">
            <ChatBubbleIcon className="text-white" fontSize="large" />
            <hr className="w-full border-2 absolute -bottom-[8px] right-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-sm" />
          </Link>
          <Link to="/" className="flex flex-col relative group">
            <HomeIcon className="text-white" fontSize="large" />
            <hr className="w-full border-2 absolute -bottom-[8px] right-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-sm" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-shabnam-bold text-white text-[14px] hidden lg:block">
            خوش آمدید علی مقری
          </span>
          <AccountCircleIcon className="text-white" fontSize="large" />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="w-[100px] lg:w-[300px] bg-dark_blue h-[calc(100vh-60px)] self-end flex flex-col py-28 items-center divide-y-[1px]">
          <Link
            to="/dashboard/mainslider"
            className="w-full py-4 px-4 text-white text-[20px] font-shabnam-bold flex flex-row-reverse items-center justify-between gap-4 transition-all duration-300 hover:bg-medium_gray hover:text-dark_blue"
          >
            <div className="flex gap-2 items-center">
              <span className="hidden lg:block">اسلایدر اصلی</span>
              <WebStoriesIcon fontSize="large" />
            </div>
            <ArrowLeftIcon />
          </Link>
          <Link
            to="/dashboard/products"
            className="w-full py-4 px-4 text-white text-[20px] font-shabnam-bold flex flex-row-reverse items-center justify-between gap-4 transition-all duration-300 hover:bg-medium_gray hover:text-dark_blue"
          >
            <div className="flex gap-2 items-center">
              <span className="hidden lg:block" >محصولات</span>
              <WidgetsIcon fontSize="large" />
            </div>
            <ArrowLeftIcon />
          </Link>
          <Link
            to="/dashboard/brands"
            className="w-full py-4 px-4 text-white text-[20px] font-shabnam-bold flex flex-row-reverse items-center justify-between gap-4 transition-all duration-300 hover:bg-medium_gray hover:text-dark_blue"
          >
            <div className="flex gap-2 items-center">
              <span className="hidden lg:block">برند ها</span>
              <PhotoFilterIcon fontSize="large" />
            </div>
            <ArrowLeftIcon />
          </Link>
        </div>
        <div className="w-[calc(100vw-100px)] lg:w-[calc(100vw-300px)]  h-[calc(100vh-60px)] bg-light_gray  rounded-se-2xl ">
          <RouterDashboard/>
        </div>
        
        
      </div>
    </div>
  );
};

export default Dashboard;
