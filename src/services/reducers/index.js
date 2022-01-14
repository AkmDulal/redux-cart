import { combineReducers } from 'redux';
import ProductsReducer from "./ProductsReducers";
const rootReducer = combineReducers({
    ProductsReducer,
});
export default rootReducer;