import React from 'react';
import Image from './Pizza/Image';
import Selector from './Pizza/Selector';
import Bottom from './Pizza/Bottom';

const Pizza = (props) => {
    return (
        <div className="pizza-block">
            <Image src={props.src} />
            <h4 className="pizza-block__title">{props.title}</h4>
            <Selector
                name={props.title}
                taste={props.taste}
                radius={props.radius}
                number={props.number}
            />
            <p style={{ textAlign: 'center', fontSize: '12px' }}>
                Вес : {props.weight} гр.
            </p>
            <Bottom
                name={props.title}
                price={props.price}
                count={props.count}
                number={props.number}
                taste={props.taste}
                radius={props.radius}
            />
        </div>
    );
};

export default Pizza;
