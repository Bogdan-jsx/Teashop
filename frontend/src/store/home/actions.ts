export enum HomeActions {
    PUT_MAIN_PRODUCTS = "PUT_MAIN_PRODUCTS",
}

export const putMain = (main: Object) => {
    return {
        type: HomeActions.PUT_MAIN_PRODUCTS,
        payload: main,
    }
}

export const loadMain = (subCategoryId: string) => (dispatch: any) => {
    fetch(`http://localhost:3000/product/getManyBySub?subCategoryId=${subCategoryId}&from=0&to=4`)
        .then(res => res.json())
        .then(json => {
            dispatch(putMain(json));
        })
}