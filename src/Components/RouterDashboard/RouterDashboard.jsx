import React from "react";
import { Route, Routes } from "react-router-dom";
import EditMainSlider from "../EditMainSlider/EditMainSlider";
import EditProducts from "../EditProducts/EditProducts";
import EditCategory from "../EditCategory/EditCategory";
import { Provider } from "react-redux";
import store from "../../Redux/Store"

const RouterDashboard = () => {

  return (
    <Provider store = {store} >
      <Routes>
        <Route path="/mainslider" element={<EditMainSlider />} />
        <Route path="/products" element={<EditProducts />} />
        <Route path="/category" element={<EditCategory />} />
      </Routes>
    </Provider>
  );
};

export default RouterDashboard;
