import { BasketActions } from "./actions";

const initialState = {
    basketProducts: [],
    isLoading: false,
    isError: false,
    basketCount: 0,
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
        case BasketActions.INCREASE_COUNT:
            return {
                ...state,
                basketCount: state.basketCount + 1,
            }
        case BasketActions.DECREASE_COUNT:
            return {
                ...state,
                basketCount: state.basketCount - 1,
            }
        case BasketActions.SET_COUNT:
            return {
                ...state,
                basketCount: action.payload,
            }
        default:
            return state;
    }
}