import { ActionType } from "../constant/actionType";

const initialState = {
    products : []
}

export const productReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:
            return {...state, products: payload};
        default:
           return state;
    }
}