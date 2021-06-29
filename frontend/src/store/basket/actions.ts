import { Product, BasketProductBasic } from './../../interafaces';

export enum BasketActions {
    PUT_BASKET_PRODUCTS = "PUT_BASKET_PRODUCTS",
}

export const putBasketProducts = (products: Product[]) => {
    return {
        type: BasketActions.PUT_BASKET_PRODUCTS,
        payload: products,
    }
}

export const loadBasketProducts = (productsBasic: BasketProductBasic[]) => async (dispatch: any) => {
    let products: Product[] = [];
    for (const product of productsBasic) {
        await fetch(`http://localhost:3000/product/one/${product.id}`)
            .then(res => res.json())
            .then(json => {
                json.weight = product.weight;
                console.log("1: ", json)
                products.push(json);
            })
    }
    console.log("2: ", products)
    dispatch(putBasketProducts(products));
}