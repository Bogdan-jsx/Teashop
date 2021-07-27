import { Product } from './../../interafaces';

export enum ProductActions {
    PUT_PRODUCT = "PUT_PRODUCT",
    PUT_TYPE = "PUT_TYPE",
    PUT_YOU_CAN_LIKE = "PUT_YOU_CAN_LIKE",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_IS_ERROR = "SET_IS_ERROR",
    SET_IS_CAN_LIKE_LOADING = "SET_IS_CAN_LIKE_LOADING",
    SET_IS_CAN_LIKE_ERROR = "SET_IS_CAN_LIKE_ERROR",
}

export const putProduct = (product: object) => {
    return {
        type: ProductActions.PUT_PRODUCT,
        payload: product,
    }
}

export const loadProduct = (id: string) => async (dispatch: any) => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    await fetch(`http://localhost:3000/product/one/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putProduct(json));
            dispatch(loadType(json.subCategoryId));
        }).catch(e => dispatch(setIsError(true)))
    dispatch(setIsLoading(false));
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

export const loadYouCanLike = (subCategoryId: string) => async (dispatch: any) => {
    dispatch(setIsCanLikeError(false));
    dispatch(setIsCanLikeLoading(true));
    await fetch(`http://localhost:3000/product/getManyBySub?from=0&to=4&subCategoryIds=${subCategoryId}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putYouCanLike(json));
        }).catch(e => dispatch(setIsCanLikeError(true)))
    dispatch(setIsCanLikeLoading(false));
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: ProductActions.SET_IS_LOADING,
        payload: isLoading,
    }
}

export const setIsError = (isError: boolean) => {
    return {
        type: ProductActions.SET_IS_ERROR,
        payload: isError,
    }
}

export const setIsCanLikeLoading = (isLoading: boolean) => {
    return {
        type: ProductActions.SET_IS_CAN_LIKE_LOADING,
        payload: isLoading,
    }
}

export const setIsCanLikeError = (isError: boolean) => {
    return {
        type: ProductActions.SET_IS_CAN_LIKE_ERROR,
        payload: isError,
    }
}