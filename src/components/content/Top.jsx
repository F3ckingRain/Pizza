import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaFilter from '../PizzaFilter';
import Categories from '../UI/Categories';

const Top = () => {
    const [state, setState] = useState(true);

    const sortType = useSelector((state) => state.filterReducer.type);

    const sortArray = ['популярности', 'цене', 'алфавиту'];

    const sortUp = () => {
        state === true ? setState(false) : setState(true);
    };
    const dispatch = useDispatch();
    const sortDown = () => { 
        setState(true);
    }

    const makeSort = (name) => {
        if (name === 'популярности') {
            dispatch({
                type: `SORT_PIZZAS_BY_POPULARITY`,
                payload: name
            });
        } else if (name === 'цене') {
            dispatch({ type: `SORT_PIZZAS_BY_PRICE`, payload: name });
        } else {
            dispatch({
                type: `SORT_PIZZAS_BY_ALPHABET`,
                payload: name
            });
        }
    };

    return (
        <div className="content__top">
            <Categories />
            <div className="sort">
                <div className="sort__label">
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span onClick={() => sortUp()}>{sortType}</span>
                </div>
                <div
                    className="sort__popup"
                    hidden={state === true ? true : false}
                    onClick = {() => sortDown()}
                >
                    <PizzaFilter arr={sortArray} sort={makeSort} />
                </div>
            </div>
        </div>
    );
};

export default Top;
