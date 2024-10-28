import { SET_PRODUCTS, SET_LOADING, SET_ERROR } from "./ActionTypeProducts";
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
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
