import React from 'react';
import Image from './Pizza/Image';
import Selector from './Pizza/Selector';
import Bottom from './Pizza/Bottom';

const Pizza = (props) => {
    const count = props.count;

    return (
        <div className="pizza-block">
            <Image src={props.src} />
            <h4 className="pizza-block__title">{props.title}</h4>
            <Selector
                radius_1="26 см."
                radius_2="30 см."
                radius_3="40 см."
            />
            <Bottom
                price={props.price}
                number={props.number}
                count={count}
            />
        </div>
    );
};

export default Pizza;
