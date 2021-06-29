import { Product } from './../../interafaces';

export enum AllProductsAction {
    LOAD_ALL_PRODUCTS_BY_SUBS = "LOAD_ALL_PRODUCTS_BYSUBS",
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