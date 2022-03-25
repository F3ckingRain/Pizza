import { createStore } from 'redux';

const defaultState = {
    count: 0,
    price: 0,
    pizza1_count: 0,
    pizza2_count: 0,
    pizza3_count: 0,
    pizza4_count: 0,
    pizza5_count: 0,
    pizza6_count: 0,
    pizza7_count: 0,
    pizza8_count: 0,
    pizza9_count: 0
};

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA1':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza1_count: state.pizza1_count + 1
            };
        case 'REMOVE_PIZZA1':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza1_count: state.pizza1_count - 1
            };
        case 'ADD_PIZZA2':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza2_count: state.pizza2_count + 1
            };
        case 'REMOVE_PIZZA2':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza2_count: state.pizza2_count - 1
            };
        case 'ADD_PIZZA3':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza3_count: state.pizza3_count + 1
            };
        case 'REMOVE_PIZZA3':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza3_count: state.pizza3_count - 1
            };
        case 'ADD_PIZZA4':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza4_count: state.pizza4_count + 1
            };
        case 'REMOVE_PIZZA4':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza4_count: state.pizza4_count - 1
            };
        case 'ADD_PIZZA5':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza5_count: state.pizza5_count + 1
            };
        case 'REMOVE_PIZZA5':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza5_count: state.pizza5_count - 1
            };
        case 'ADD_PIZZA6':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza6_count: state.pizza6_count + 1
            };
        case 'REMOVE_PIZZA6':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza6_count: state.pizza6_count - 1
            };
        case 'ADD_PIZZA7':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza7_count: state.pizza7_count + 1
            };
        case 'REMOVE_PIZZA7':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza7_count: state.pizza7_count - 1
            };
        case 'ADD_PIZZA8':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza8_count: state.pizza8_count + 1
            };
        case 'REMOVE_PIZZA8':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza8_count: state.pizza8_count - 1
            };
        case 'ADD_PIZZA9':
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload,
                pizza9_count: state.pizza9_count + 1
            };
        case 'REMOVE_PIZZA9':
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload,
                pizza9_count: state.pizza9_count - 1
            };
        default:
            return state;
    }
};
export const store = createStore(countReducer);
