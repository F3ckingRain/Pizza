import { combineReducers, createStore } from 'redux';
import { countReducer } from './reducers/countReducer';
import { pizzaReducer } from './reducers/pizzaReducer';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
    countReducer,
    pizzaReducer,
    filterReducer,
});
export const store = createStore(rootReducer);
