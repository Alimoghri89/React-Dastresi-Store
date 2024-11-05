import { configureStore } from "@reduxjs/toolkit";
import MainSliderReducer from "./MainSlider/MainSliderSlice";
import ProductsReducer from "./Products/ProductsSlice"
import ElectedCategoryReducer from "./ElectedCategory/ElectedCategorySlice"
import MenuReducer from "./Menu/MenuSlice"
const store = configureStore({
    reducer : {
        MainSlider : MainSliderReducer,
        Products : ProductsReducer,
        ElectedCategory : ElectedCategoryReducer,
        Menu : MenuReducer,
    },
})
export default store;