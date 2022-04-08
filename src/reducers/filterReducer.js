const defaultState = {pizzas: 'Все', type: 'популярности'} ;

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SORT_PIZZAS':
            return {
                ...state,
                pizzas: state.pizzas = action.payload,
                type: state.type
            };
            case 'SORT_PIZZAS_BY_POPULARITY':
            return {
                ...state,
                pizzas: state.pizzas,
                type: state.type = action.payload
            };
            case 'SORT_PIZZAS_BY_PRICE':
            return {
                ...state,
                pizzas: state.pizzas ,
                type: state.type = action.payload
            };
            case 'SORT_PIZZAS_BY_ALPHABET':
            return {
                ...state,
                pizzas: state.pizzas ,
                type: state.type = action.payload
            };
        default:
            return state;
    }
};
