import { Product } from './../../interafaces';

export enum ProductActions {
    PUT_PRODUCT = "PUT_PRODUCT",
    PUT_TYPE = "PUT_TYPE",
    PUT_YOU_CAN_LIKE = "PUT_YOU_CAN_LIKE",
}

export const putProduct = (product: object) => {
    return {
        type: ProductActions.PUT_PRODUCT,
        payload: product,
    }
}

export const loadProduct = (id: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/product/one/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putProduct(json));
            dispatch(loadType(json.subCategoryId));
        })
}

export const putType = (type: string) => {
    return {
        type: ProductActions.PUT_TYPE,
        payload: type,
    }
}

export const loadType = (subId: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/subCategory/one/${subId}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putType(json));
        })
}

export const putYouCanLike = (products: Array<Product>) => {
    return {
        type: ProductActions.PUT_YOU_CAN_LIKE,
        payload: products,
    }
}

export const loadYouCanLike = (subCategoryId: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/product/getManyBySub?from=0&to=4&subCategoryIds=${subCategoryId}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putYouCanLike(json));
        })
}