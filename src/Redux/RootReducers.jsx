import {combineReducers} from "redux";
import mainSliderReducer from "./MainSlider/MainSliderReducers";
import productReducer from "./Products/productReducers";
import electedCategoryReducer from "./ElectedCategory/ElectedCategoryReducers";
let rootReducer = combineReducers({
    MainSlider: mainSliderReducer,
    Product : productReducer,
    electedCategory : electedCategoryReducer
})
export default rootReducer