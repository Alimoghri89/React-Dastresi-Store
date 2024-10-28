import {createStore} from "redux";
import rootReducer from "./RootReducers";
let store = createStore(rootReducer)
export default store;