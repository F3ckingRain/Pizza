import React from 'react';
import PizzaFilter from '../PizzaFilter';
import { useDispatch } from 'react-redux';

const Categories = () => {

    const dispatch = useDispatch();

    const makeSort = (name) => {
        dispatch({type: 'SORT_PIZZAS', payload: name})
    }

    const arr = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ];

    return (
        <div className="categories">
            <PizzaFilter arr={arr} sort = {makeSort}/>
        </div>
    );
};

export default Categories;
