import { SET_MAINSLIDER, SET_LOADING, SET_ERROR } from "./ActionTypeMainSlider";
const initialState = {
  mainSlider: [],
  loading: true,
  error: "",
};
const mainSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAINSLIDER: {
      return { ...state, mainSlider: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default mainSliderReducer; 