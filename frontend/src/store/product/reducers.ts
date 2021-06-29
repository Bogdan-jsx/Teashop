import { ProductActions } from "./actions";

const initialState = {
    product: {},
    youCanLike: [],
}

export const productReducer = (state = initialState, action: { type: ProductActions, payload: any }) => {
    switch (action.type) {
        case ProductActions.PUT_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        case ProductActions.PUT_TYPE:
            return {
                ...state,
                product: {...state.product, type: action.payload.name},
            }
        case ProductActions.PUT_YOU_CAN_LIKE:
            return {
                ...state,
                youCanLike: action.payload,
            }
        default:
            return state
    }
}