export enum CategoryAction {
    PUT_CATEGORIES = "PUT_CATEGORIES",
    PUT_CATALOG_PRODUCTS = "PUT_CATALOG_PRODUCTS",
    SET_CATEGORIES_ERROR = "SET_CATEGORIES_ERROR",
    SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR",
}

export const putCategories = (categories: Array<object>) => {
    return {
        type: CategoryAction.PUT_CATEGORIES,
        payload: categories,
    }
}

export const loadCategories = () => async (dispatch: any) => {
    dispatch(setCategoriesError(false));
    await fetch("http://localhost:3000/category/")
        .then(res => res.json())
        .then(json => {
            dispatch(putCategories(json))
        }).catch(e => dispatch(setCategoriesError(true)))
}

export const putCatalogProducts = (products: Array<object>) => {
    return {
        type: CategoryAction.PUT_CATALOG_PRODUCTS,
        payload: products,
    }
}

export const loadCatalogProducts = () => (dispatch: any) => {
    dispatch(setProductsError(false));
    fetch("http://localhost:3000/product/getMany?from=0&to=2")
        .then(res => res.json())
        .then(json => {
            dispatch(putCatalogProducts(json));
        }).catch(e => dispatch(setProductsError(true)))
}

export const setCategoriesError = (isError: boolean) => {
    return {
        type: CategoryAction.SET_CATEGORIES_ERROR,
        payload: isError,
    }
}

export const setProductsError = (isError: boolean) => {
    return {
        type: CategoryAction.SET_PRODUCTS_ERROR,
        payload: isError,
    }
}