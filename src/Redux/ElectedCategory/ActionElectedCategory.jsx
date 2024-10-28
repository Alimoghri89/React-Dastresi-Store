import {SET_ELECTEDCATEGORY,SET_LOADING,SET_ERROR} from "./ActionTypeElectedCategory";
export const  setElectedCategory = (electedCategory) => {
    return {
        type: SET_ELECTEDCATEGORY,
        payload:electedCategory
    }
}
export const  setLoading = (state) => {
    return {
        type: SET_LOADING,
        payload:state
    }
}
export const  setError = (error) => {
    return {
        type: SET_ERROR,
        payload:error
    }
}