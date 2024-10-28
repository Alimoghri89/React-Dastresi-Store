import { SET_PRODUCTS, SET_LOADING, SET_ERROR } from "./ActionTypeProducts";
const initialState = {
  products: [],
  loading: true,
  error: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
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
export default productReducer;
