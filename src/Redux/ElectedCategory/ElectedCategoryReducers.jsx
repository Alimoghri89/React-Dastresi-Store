import{SET_ELECTEDCATEGORY,SET_LOADING,SET_ERROR} from "./ActionTypeElectedCategory";
const initialState = {
    electedCategory : [],
    loading:true,
    error:""
}
const electedCategoryReducer = (state = initialState,action)=>{
    switch(action.type){
        case SET_ELECTEDCATEGORY:{
            return {...state, electedCategory:action.payload}
        }
        case SET_LOADING:{
            return {...state, loading:action.payload}
        }
        case SET_ERROR:{
            return {...state, error:action.payload}
        }
        default:{
            return state
        }
    }
}
export default electedCategoryReducer;