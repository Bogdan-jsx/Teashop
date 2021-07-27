import { HomeActions } from "./actions"

const initialState = {
    mainProducts: [],
    isLoading: false,
    isError: false,
}

export const homeReducer = (state = initialState, action: { type: HomeActions, payload: any }) => {
    switch (action.type) {
        case HomeActions.PUT_MAIN_PRODUCTS:
            return {
                ...state,
                mainProducts: action.payload,
            }
        case HomeActions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case HomeActions.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state
    }
}