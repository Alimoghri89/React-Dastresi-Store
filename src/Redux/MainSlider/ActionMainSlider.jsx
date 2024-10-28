import { SET_MAINSLIDER, SET_LOADING, SET_ERROR } from "./ActionTypeMainSlider";

export const setMainSlider = (mainSlider) => {
  return {
    type: SET_MAINSLIDER,
    payload: mainSlider
  };
};
export const setLoading = (state) => {
  return {
    type: SET_LOADING,
    payload: state
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error
  };
};
