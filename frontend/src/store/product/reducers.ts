import { ProductActions } from "./actions";

const initialState = {
    product: {},
    youCanLike: [],
    isLoading: false,
    isError: false,
    isCanLikeLoading: false,
    isCanLikeError: false,
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
        case ProductActions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case ProductActions.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        case ProductActions.SET_IS_CAN_LIKE_LOADING:
            return {
                ...state,
                isCanLikeLoading: action.payload,
            }
        case ProductActions.SET_IS_CAN_LIKE_ERROR:
            return {
                ...state,
                isCanLikeError: action.payload,
            }
        default:
            return state
    }
}