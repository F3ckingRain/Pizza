import React from 'react';
import { useSelector } from 'react-redux';
import Pizza from './Pizza';

const Items = () => {
    const count1 = useSelector((state) => state.pizza1_count);
    const count2 = useSelector((state) => state.pizza2_count);
    const count3 = useSelector((state) => state.pizza3_count);
    const count4 = useSelector((state) => state.pizza4_count);
    const count5 = useSelector((state) => state.pizza5_count);
    const count6 = useSelector((state) => state.pizza6_count);
    const count7 = useSelector((state) => state.pizza7_count);
    const count8 = useSelector((state) => state.pizza8_count);
    const count9 = useSelector((state) => state.pizza9_count);

    return (
        <div className="content__items">
            <Pizza
                title="Чизбургер-пицца"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={395}
                number={1}
                count={count1}
            />
            <Pizza
                title="Супер пицца"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={450}
                number={2}
                count={count2}
            />
            <Pizza
                title="Супер-пупер пицца"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={580}
                number={3}
                count={count3}
            />
            <Pizza
                title="Гипер пицца"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={700}
                number={4}
                count={count4}
            />
            <Pizza
                title="Тархун чел"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={228}
                number={5}
                count={count5}
            />
            <Pizza
                title="Пицца с ебейшей начинкой"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={666}
                number={6}
                count={count6}
            />
            <Pizza
                title="Пицца для всех"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={555}
                number={7}
                count={count7}
            />
            <Pizza
                title="Пицца за касарь"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={1000}
                number={8}
                count={count8}
            />
            <Pizza
                title="Пицца для бомжей"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                price={100}
                number={9}
                count={count9}
            />
        </div>
    );
};

export default Items;
