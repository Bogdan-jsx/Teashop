import { combineReducers } from "redux";
import { categoriesReducer } from './catalog/reducers';
import { homeReducer } from './home/reducers';
import { productReducer } from "./product/reducers";
import { allProductsCatalogReducer } from './allProducts/reducers';


export default combineReducers({
    categoriesReducer,
    homeReducer,
    productReducer,
    allProductsCatalogReducer,
})