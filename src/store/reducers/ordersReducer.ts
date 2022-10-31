import moment from 'moment';
import { ICartItem } from "./cartReducer";

interface CreateAction {
    type: 'CREATE_ORDER';
    payload: { cart: ICartItem[], data: IOrderData };
}

export interface IOrder {
    number: number;
    date: string;
    time: string;
    status: string;
    items_count: number;
    total: number;
    address: string;
}

interface IOrderData {
    date: string;
    time: string;
    address: string;
    name: string;
    phone: string;
}

const storageData = JSON.parse(localStorage.getItem('orders') as string);
const initialState = storageData || [];

const reducer: any = (state: IOrder[] = initialState, action: CreateAction) => {
    switch (action.type) {
        case 'CREATE_ORDER':
            const cart = action.payload.cart;
            const data = action.payload.data;

            if (!cart.length) return state;

            const temp = {
                number: Math.floor(Math.random() * 1000),
                date: moment(data.date).format('DD.MM.YYYY'),
                time: data.time,
                status: 'Оплачен/Завершён',
                items_count: 0,
                total: 0,
                address: data.address
            };

            cart.forEach(el => {
                temp.items_count += el.count;
                temp.total += el.total;
            });

            const result = [...state, temp];
            localStorage.setItem('orders', JSON.stringify(result));
            return result;
        default:
            return state;
    }
};

export default reducer;
