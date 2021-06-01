import { CategoryAction } from './actions';

const initialState = {
    categories: [],
    catalogProducts: [],
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
        default:
            return state
    }
}