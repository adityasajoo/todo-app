import { getLocalStorage } from "../utils/helper";

export const initialState = {
    user :  getLocalStorage(),
    todos : [{id:1,"name":"play"}]
}

export const actionTypes = {
    SET_USER : "SET_USER",
    REMOVE_USER:"REMOVE_USER"
}

const reducer = (state,action) =>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user:action.user,
            };
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }
}

export default reducer;