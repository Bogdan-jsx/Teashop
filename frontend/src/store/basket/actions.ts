import { Product, BasketProductBasic } from './../../interafaces';

export enum BasketActions {
    PUT_BASKET_PRODUCTS = "PUT_BASKET_PRODUCTS",
    SET_IS_ERROR = "SET_IS_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_COUNT = "SET_COUNT",
    INCREASE_COUNT = "INCREASE_COUNT",
    DECREASE_COUNT = "DECREASE_COUNT",
}

export const putBasketProducts = (products: Product[]) => {
    return {
        type: BasketActions.PUT_BASKET_PRODUCTS,
        payload: products,
    }
}

export const loadBasketProducts = (productsBasic: BasketProductBasic[]) => async (dispatch: any) => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    let products: Product[] = [];
    for (const product of productsBasic) {
        await fetch(`http://localhost:3000/product/one/${product.id}`)
            .then(res => res.json())
            .then(json => {
                json.weight = product.weight;
                products.push(json);
            }).catch(e => dispatch(setIsError(true)))
    } 
    dispatch(putBasketProducts(products));
    dispatch(setIsLoading(false));
}

export const sendOrder = (basket: BasketProductBasic[], name: string, phone: string, comment: string, address: string) => (dispatch: any) => {
    fetch("http://localhost:3000/order/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({basket, name, phone, comment, address}),
    })
    dispatch(putBasketProducts([]));
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: BasketActions.SET_IS_LOADING,
        payload: isLoading,
    }
}

export const setIsError = (isError: boolean) => {
    return {
        type: BasketActions.SET_IS_ERROR,
        payload: isError,
    }
}

export const increaseBasketCount = () => {
    return {
        type: BasketActions.INCREASE_COUNT,
    }
}

export const decreaseBasketCount = () => {
    return {
        type: BasketActions.DECREASE_COUNT,
    }
}

export const setBasketCount = (count: number) => {
    return {
        type: BasketActions.SET_COUNT,
        payload: count,
    }
}