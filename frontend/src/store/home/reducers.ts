import { stat } from "fs"
import { HomeActions } from "./actions"

const initialState = {
    mainProducts: [],
}

export const homeReducer = (state = initialState, action: { type: HomeActions, payload: any }) => {
    switch (action.type) {
        case HomeActions.PUT_MAIN_PRODUCTS:
            return {
                ...state,
                mainProducts: state?.mainProducts.length < 2 ? [...state?.mainProducts, action.payload] : [action.payload],
            }
        default:
            return state
    }
}