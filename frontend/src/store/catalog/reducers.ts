import { CategoryAction } from './actions';

const initialState = {
    categories: [],
    catalogProducts: [],
    isCategoriesError: false,
    isProductsError: false,
}

export const categoriesReducer = (state = initialState, action: { type: CategoryAction, payload: any }) => {
    switch (action.type) {
        case CategoryAction.PUT_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case CategoryAction.PUT_CATALOG_PRODUCTS:
            return {
                ...state,
                catalogProducts: action.payload,
            }
        case CategoryAction.SET_CATEGORIES_ERROR:
            return {
                ...state,
                isCategoriesError: action.payload,
            }
        case CategoryAction.SET_PRODUCTS_ERROR:
            return {
                ...state,
                isProductsError: action.payload,
            }
        default:
            return state
    }
}