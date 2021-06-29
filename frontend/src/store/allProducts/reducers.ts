import { AllProductsAction } from "./actions";

const initialState = {
    allProductsInCatalog: [],
}

export const allProductsCatalogReducer = (state = initialState, action: { type: AllProductsAction, payload: any }) => {
    switch (action.type) {
        case AllProductsAction.LOAD_ALL_PRODUCTS_BY_SUBS:
            return {
                ...state,
                allProductsInCatalog: action.payload,
            }
        default:
            return state;
    }
}