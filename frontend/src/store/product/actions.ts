export enum ProductActions {
    PUT_PRODUCT = "PUT_PRODUCT",
}

export const putProduct = (product: object) => {
    return {
        type: ProductActions.PUT_PRODUCT,
        payload: product,
    }
}

export const loadProduct = (id: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/product/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(putProduct(json));
        })
}