import { BasketActions } from "./actions";

const initialState = {
    basketProducts: [],
}

export const basketReducer = (state = initialState, action: { type: BasketActions, payload: any }) => {
    switch (action.type) {
        case BasketActions.PUT_BASKET_PRODUCTS:
            return {
                ...state,
                basketProducts: action.payload,
            }
        default:
            return state;
    }
}