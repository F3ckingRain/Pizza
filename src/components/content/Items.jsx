import React from 'react';
import { useSelector } from 'react-redux';
import Pizza from './Pizza';

const Items = () => {
    const count = useSelector((state) => ({
        count1: state.pizzaReducer.pizza1.count,
        count2: state.pizzaReducer.pizza2.count,
        count3: state.pizzaReducer.pizza3.count,
        count4: state.pizzaReducer.pizza4.count,
        count5: state.pizzaReducer.pizza5.count,
        count6: state.pizzaReducer.pizza6.count,
        count7: state.pizzaReducer.pizza7.count,
        count8: state.pizzaReducer.pizza8.count,
        count9: state.pizzaReducer.pizza9.count
    }));

    const weight = useSelector((state) => ({
        weight1: state.pizzaReducer.pizza1.weight,
        weight2: state.pizzaReducer.pizza2.weight,
        weight3: state.pizzaReducer.pizza3.weight,
        weight4: state.pizzaReducer.pizza4.weight,
        weight5: state.pizzaReducer.pizza5.weight,
        weight6: state.pizzaReducer.pizza6.weight,
        weight7: state.pizzaReducer.pizza7.weight,
        weight8: state.pizzaReducer.pizza8.weight,
        weight9: state.pizzaReducer.pizza9.weight
    }));

    const price = useSelector((state) => ({
        price1: state.pizzaReducer.pizza1.price,
        price2: state.pizzaReducer.pizza2.price,
        price3: state.pizzaReducer.pizza3.price,
        price4: state.pizzaReducer.pizza4.price,
        price5: state.pizzaReducer.pizza5.price,
        price6: state.pizzaReducer.pizza6.price,
        price7: state.pizzaReducer.pizza7.price,
        price8: state.pizzaReducer.pizza8.price,
        price9: state.pizzaReducer.pizza9.price
    }));

    const radius = useSelector((state) => ({
        radius1: state.pizzaReducer.pizza1.radius,
        radius2: state.pizzaReducer.pizza2.radius,
        radius3: state.pizzaReducer.pizza3.radius,
        radius4: state.pizzaReducer.pizza4.radius,
        radius5: state.pizzaReducer.pizza5.radius,
        radius6: state.pizzaReducer.pizza6.radius,
        radius7: state.pizzaReducer.pizza7.radius,
        radius8: state.pizzaReducer.pizza8.radius,
        radius9: state.pizzaReducer.pizza9.radius
    }));

    const taste = useSelector((state) => ({
        taste1: state.pizzaReducer.pizza1.taste,
        taste2: state.pizzaReducer.pizza2.taste,
        taste3: state.pizzaReducer.pizza3.taste,
        taste4: state.pizzaReducer.pizza4.taste,
        taste5: state.pizzaReducer.pizza5.taste,
        taste6: state.pizzaReducer.pizza6.taste,
        taste7: state.pizzaReducer.pizza7.taste,
        taste8: state.pizzaReducer.pizza8.taste,
        taste9: state.pizzaReducer.pizza9.taste
    }));

    const pizzaArray = [
        {
            title: 'Чизбургер-пицца',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price1,
            weight: weight.weight1,
            count: count.count1,
            radius: radius.radius1,
            taste: taste.taste1,
            type: ['Закрытые', 'Мясные']
        },
        {
            title: 'Супер пицца',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price2,
            weight: weight.weight2,
            count: count.count2,
            radius: radius.radius2,
            taste: taste.taste2,
            type: ['Острые', 'Гриль', 'Мясные']
        },
        {
            title: 'Супер-пупер пицца',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price3,
            weight: weight.weight3,
            count: count.count3,
            radius: radius.radius3,
            taste: taste.taste3,
            type: ['Мясные', 'Закрытые', 'Острые']
        },
        {
            title: 'Гипер пицца',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price4,
            weight: weight.weight4,
            count: count.count4,
            radius: radius.radius4,
            taste: taste.taste4,
            type: ['Вегетаринские', 'Закрытые']
        },
        {
            title: 'Тархун чел',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price5,
            weight: weight.weight5,
            count: count.count5,
            radius: radius.radius5,
            taste: taste.taste5,
            type: ['Вегетарианские']
        },
        {
            title: 'Пицца с ебейшей начинкой',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price6,
            weight: weight.weight6,
            count: count.count6,
            radius: radius.radius6,
            taste: taste.taste6,
            type: ['Мясные', 'Острые', 'Гриль', 'Закрытые']
        },
        {
            title: 'Пицца для всех',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price7,
            weight: weight.weight7,
            count: count.count7,
            radius: radius.radius7,
            taste: taste.taste7,
            type: ['']
        },
        {
            title: 'Пицца за касарь',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price8,
            weight: weight.weight8,
            count: count.count8,
            radius: radius.radius8,
            taste: taste.taste8,
            type: ['Гриль', 'Мясные']
        },
        {
            title: 'Пицца для бомжей',
            src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            price: price.price9,
            weight: weight.weight9,
            count: count.count9,
            radius: radius.radius9,
            taste: taste.taste9,
            type: ['Вегетарианские']
        }
    ];

    const sortPizzas = useSelector(
        (state) => state.filterReducer.pizzas
    );

    const sortType = useSelector((state) => state.filterReducer.type);

    let sortedPizzaArray = [];
    if (sortType === 'популярности') {
        sortedPizzaArray = pizzaArray.sort((a, b) => a - b);
    } else if (sortType === 'цене') {
        sortedPizzaArray = pizzaArray.sort(
            (a, b) => a.price - b.price
        );
    } else {
        sortedPizzaArray = pizzaArray.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    const result = sortedPizzaArray.filter((el) =>
        el.type.includes(sortPizzas)
    );

    return (
        <div className="content__items">
            {sortPizzas === 'Все' || sortPizzas === undefined
                ? sortedPizzaArray.map((el, index) => (
                      <Pizza
                          key={`${el}_${index}`}
                          title={el.title}
                          price={el.price}
                          src={el.src}
                          weight={el.weight}
                          radius={el.radius}
                          taste={el.taste}
                          count={el.count}
                          number={index + 1}
                      />
                  ))
                : result.map((el, index) => (
                      <Pizza
                          key={`${el}_${index}`}
                          title={el.title}
                          price={el.price}
                          src={el.src}
                          weight={el.weight}
                          radius={el.radius}
                          taste={el.taste}
                          count={el.count}
                          number={index + 1}
                      />
                  ))}
        </div>
    );
};

export default Items;
