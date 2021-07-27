import { AllProductsAction } from "./actions";

const initialState = {
    allProductsInCatalog: [],
    searchResultProducts: [],
    isLoading: false,
    isError: false,
}

export const allProductsCatalogReducer = (state = initialState, action: { type: AllProductsAction, payload: any }) => {
    switch (action.type) {
        case AllProductsAction.LOAD_ALL_PRODUCTS_BY_SUBS:
            return {
                ...state,
                allProductsInCatalog: action.payload,
            }
        case AllProductsAction.PUT_SEARCH_RESULT:
            return {
                ...state,
                searchResultProducts: action.payload,
            }
        case AllProductsAction.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case AllProductsAction.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state;
    }
}