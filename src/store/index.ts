import { combineReducers } from "redux";
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/ordersReducer';

const reducers = combineReducers({
    cart: cartReducer,
    orders: ordersReducer
})

export default reducers;
export type State = ReturnType<typeof reducers>
