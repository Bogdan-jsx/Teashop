import { Product } from './../../interafaces';

export enum AllProductsAction {
    LOAD_ALL_PRODUCTS_BY_SUBS = "LOAD_ALL_PRODUCTS_BY_SUBS",
    PUT_SEARCH_RESULT = "PUT_SEARCH_RESULT",
}

export const putAllProductsBySubs = (products: Product[]) => {
    return {
        type: AllProductsAction.LOAD_ALL_PRODUCTS_BY_SUBS,
        payload: products,
    }
}

export const loadAllProductsBySubs = (subCategories: string[], sortBy: "cheap" | "expensive" | "popular") => (dispatch: any) => {
    let subCategoriesArray = "";
    if (subCategories[0]) {
        for (const sub of subCategories) {
            subCategoriesArray += `&subCategoryIds=${sub}`;
        }
    }
    fetch(`http://localhost:3000/product/getManyBySub?from=0&to=40&sortBy=${sortBy}${subCategoriesArray}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putAllProductsBySubs(json));
        })
}   

export const putSearchResult = (products: Product[]) => {
    return {
        type: AllProductsAction.PUT_SEARCH_RESULT,
        payload: products,
    }
}

export const loadSearchResult = (searchReq: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/product/getManyByName?from=0&to=15&searchReq=${searchReq}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putSearchResult(json));
        })
}