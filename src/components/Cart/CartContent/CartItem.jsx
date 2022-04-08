import React from 'react';
import MyButton from '../UI/MyButton';
import MyButtonRemove from '../UI/MyButtonRemove';

export const CartItem = ({ name, taste, radius, price, count , number, result}) => {
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>
                    {taste === 'slim'
                        ? 'тонкое тесто'
                        : 'традиционное тесто'}
                    , {radius} см.
                </p>
            </div>
            <div className="cart__item-count">
                <MyButton
                    name="plus"
                    taste={taste}
                    radius={radius}
                    price={price}
                    pizza = {name}
                    number = {number}
                />
                <b>{count}</b>
                <MyButton
                    name="minus"
                    taste={taste}
                    radius={radius}
                    price={price}
                    pizza = {name}
                    number = {number}
                />
            </div>
            <div className="cart__item-price">
                <b>{result}</b>
            </div>
            <MyButtonRemove
                name={name}
                taste={taste}
                radius={radius}
                price={price}
                number = {number}
                result = {result}
                count = {count}
            />
        </div>
    );
};
