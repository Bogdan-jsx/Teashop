export enum CategoryAction {
    PUT_CATEGORIES = "PUT_CATEGORIES",
    PUT_CATALOG_PRODUCTS = "PUT_CATALOG_PRODUCTS",
}

export const putCategories = (categories: Array<object>) => {
    return {
        type: CategoryAction.PUT_CATEGORIES,
        payload: categories,
    }
}

export const loadCategories = () => (dispatch: any) => {
    fetch("http://localhost:3000/category/")
        .then(res => res.json())
        .then(json => {
            dispatch(putCategories(json))
        })
}

export const putCatalogProducts = (products: Array<object>) => {
    return {
        type: CategoryAction.PUT_CATALOG_PRODUCTS,
        payload: products,
    }
}

export const loadCatalogProducts = () => (dispatch: any) => {
    fetch("http://localhost:3000/product/getMany?from=0&to=2")
        .then(res => res.json())
        .then(json => {
            dispatch(putCatalogProducts(json));
        })
}