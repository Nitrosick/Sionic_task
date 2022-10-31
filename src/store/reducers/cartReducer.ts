interface AddAction {
    type: 'ADD_TO_CART';
    payload: ICartItem;
}

interface RemoveAction {
    type: 'REMOVE_FROM_CART';
    payload: number;
}

interface IncreaseAction {
    type: 'INCREASE_COUNT';
    payload: number;
}

interface DecreaseAction {
    type: 'DECREASE_COUNT';
    payload: number;
}

interface ClearAction {
    type: 'CLEAR_CART';
}

export interface ICartItem {
    id: number;
    name: string;
    price: number;
    old_price: number;
    count: number;
    total: number;
}

const storageData = JSON.parse(localStorage.getItem('cart') as string);
const initialState = storageData || [];

type Action = AddAction | RemoveAction | IncreaseAction | DecreaseAction | ClearAction;

const reducer: any = (state: ICartItem[] = initialState, action: Action) => {
    const temp = state.slice();

    switch (action.type) {
        case 'ADD_TO_CART':
            for (let i=0; i<state.length; i++) {
                if (state[i].id === action.payload.id) {
                    temp[i].count++;
                    temp[i].total = temp[i].price * temp[i].count;
                    localStorage.setItem('cart', JSON.stringify(temp));
                    return temp;
                }
            }
            const result = [...state, action.payload];
            localStorage.setItem('cart', JSON.stringify(result));
            return result;
        case 'REMOVE_FROM_CART':
            for (let i=0; i<state.length; i++) {
                if (state[i].id === action.payload) {
                    temp.splice(i, 1);
                    return temp;
                }
            }
            return state;
        case 'INCREASE_COUNT':
            for (let i=0; i<state.length; i++) {
                if (state[i].id === action.payload) {
                    temp[i].count++;
                    temp[i].total = temp[i].price * temp[i].count;
                    return temp;
                }
            }
            return state;
        case 'DECREASE_COUNT':
            for (let i=0; i<state.length; i++) {
                if (state[i].id === action.payload && state[i].count > 1) {
                    temp[i].count--;
                    temp[i].total = temp[i].price * temp[i].count;
                    return temp;
                }
            }
            return state;
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

export default reducer;
