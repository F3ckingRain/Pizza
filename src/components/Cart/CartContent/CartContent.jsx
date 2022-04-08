import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';

export const CartContent = () => {
    const pizza = useSelector((state) => state.pizzaReducer);
    const pizzas = Object.entries(pizza);
    const result = pizzas.filter((el) => el[1].count > 0);

    return (
        <div className="content__items">
            {result.map((el, index) => (
                <CartItem
                    key={`${el}_${index}`}
                    name={el[1].name}
                    radius={el[1].radius}
                    taste={el[1].taste}
                    price={el[1].price}
                    result={el[1].result}
                    count={el[1].count}
                    number={index + 1}
                />
            ))}
        </div>
    );
};
