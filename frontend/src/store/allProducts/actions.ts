import { Product } from './../../interafaces';

export enum AllProductsAction {
    LOAD_ALL_PRODUCTS_BY_SUBS = "LOAD_ALL_PRODUCTS_BY_SUBS",
    PUT_SEARCH_RESULT = "PUT_SEARCH_RESULT",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_IS_ERROR = "SET_IS_ERROR",
}

export const putAllProductsBySubs = (products: Product[]) => {
    return {
        type: AllProductsAction.LOAD_ALL_PRODUCTS_BY_SUBS,
        payload: products,
    }
}

export const loadAllProductsBySubs = (subCategories: string[], sortBy: "cheap" | "expensive" | "popular") => async (dispatch: any) => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    let subCategoriesArray = "";
    if (subCategories[0]) {
        for (const sub of subCategories) {
            subCategoriesArray += `&subCategoryIds=${sub}`;
        }
    }
    await fetch(`http://localhost:3000/product/getManyBySub?from=0&to=40&sortBy=${sortBy}${subCategoriesArray}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putAllProductsBySubs(json));
        }).catch(e => dispatch(setIsError(true)))
    dispatch(setIsLoading(false));
}   

export const putSearchResult = (products: Product[]) => {
    return {
        type: AllProductsAction.PUT_SEARCH_RESULT,
        payload: products,
    }
}

export const loadSearchResult = (searchReq: string) => async (dispatch: any) => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    await fetch(`http://localhost:3000/product/getManyByName?from=0&to=15&searchReq=${searchReq}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putSearchResult(json));
        }).catch(e => dispatch(setIsError(true)));
    dispatch(setIsLoading(false));
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: AllProductsAction.SET_IS_LOADING,
        payload: isLoading,
    }
}

export const setIsError = (isError: boolean) => {
    return {
        type: AllProductsAction.SET_IS_ERROR,
        payload: isError,
    }
}