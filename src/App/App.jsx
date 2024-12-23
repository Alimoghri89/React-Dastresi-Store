import React, { useState, useEffect } from "react";
import axios from "axios";
import  {SWRConfig}  from "swr";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Dashboard  from "../Pages/Dashboard/Dashboard";
import config from "../../config";
import CustomerClub from "../Pages/CustomerClub/CustomerClub";
function App() {
  let url = config.API
  const [moblieMenuPosition, setMoblieMenuPosition] = useState("-300px");
  const [containerWidth, setContainerWidh] = useState(
    window.innerWidth > 1640
      ? 1640
      : window.innerWidth - (window.innerWidth * 15) / 100
  );

  function getwidth() {
    let width = window.innerWidth - (window.innerWidth * 15) / 100;
    window.innerWidth > 1640 ? setContainerWidh(1640) : setContainerWidh(width);
  }
  useEffect(() => {
    window.addEventListener("resize", getwidth);
    return () => {
      window.removeEventListener("resize", getwidth);
    };
  }, []);
  const mobileMenuActive = () => {
    setMoblieMenuPosition("0");
  };
  const mobileMenuDeactive = () => {
    setMoblieMenuPosition("-300px");
  };
  
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
        containerWidth,
        moblieMenuPosition,
        mobileMenuActive,
        mobileMenuDeactive,
        url
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dashboard/*" element={<Dashboard/>}/>
          <Route path ="/CustomerClub" element={<CustomerClub/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
