import { ProductActions } from "./actions";

const initialState = {
    product: {},
}

export const productReducer = (state = initialState, action: { type: ProductActions, payload: any }) => {
    switch (action.type) {
        case ProductActions.PUT_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}