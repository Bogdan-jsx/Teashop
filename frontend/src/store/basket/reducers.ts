import { BasketActions } from "./actions";

const initialState = {
    basketProducts: [],
    isLoading: false,
    isError: false,
}

export const basketReducer = (state = initialState, action: { type: BasketActions, payload: any }) => {
    switch (action.type) {
        case BasketActions.PUT_BASKET_PRODUCTS:
            return {
                ...state,
                basketProducts: action.payload,
            }
        case BasketActions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case BasketActions.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state;
    }
}