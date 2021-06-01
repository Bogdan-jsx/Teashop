import { combineReducers } from "redux";
import { categoriesReducer } from './catalog/reducers';
import { homeReducer } from './home/reducers';


export default combineReducers({
    categoriesReducer,
    homeReducer,
})