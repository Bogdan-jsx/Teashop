export enum HomeActions {
    PUT_MAIN_PRODUCTS = "PUT_MAIN_PRODUCTS",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_IS_ERROR = "SET_IS_ERROR",
}

export const putMain = (main: object[]) => {
    return {
        type: HomeActions.PUT_MAIN_PRODUCTS,
        payload: main,
    }
}

export const loadMain = (subCategoryIds: string[]) => async (dispatch: any) => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    let sections: object[] = [];
    for (const id of subCategoryIds) {
        await fetch(`http://localhost:3000/product/getSection?subCategoryId=${id}&from=0&to=4`)
            .then((res) => res.json())
            .then((json) => {
                sections.push(json);
            }).catch(e => dispatch(setIsError(true)))
    }
    dispatch(putMain(sections));
    dispatch(setIsLoading(false));
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: HomeActions.SET_IS_LOADING,
        payload: isLoading,
    }
}

export const setIsError = (isError: boolean) => {
    return {
        type: HomeActions.SET_IS_ERROR,
        payload: isError,
    }
}