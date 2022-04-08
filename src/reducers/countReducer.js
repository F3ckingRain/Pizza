const defaultState = {
    count: 0,
    price: 0
};

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA1':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA1':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };

        case 'ADD_PIZZA2':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA2':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA3':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA3':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA4':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA4':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA5':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA5':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA6':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA6':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA7':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA7':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA8':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA8':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price
            };
        case 'ADD_PIZZA9':
            return {
                ...state,
                count: state.count + action.payload.count,
                price: state.price + action.payload.price
            };
        case 'REMOVE_PIZZA9':
            return {
                ...state,
                count: state.count - action.payload.count,
                price: state.price - action.payload.price.price
            };
        case 'REMOVE_ALL':
            return defaultState;

        default:
            return state;
    }
};
