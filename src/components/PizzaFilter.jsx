import React, { useState } from 'react';

const PizzaFilter = ({ arr, sort }) => {
    const [active, setActive] = useState(0);

    const isActive = (id, name) => {
        setActive(id);
        sort(name);
    };

    return (
        <ul>
            {arr.map((name, index) => (
                <li
                    className={active === index ? 'active' : ''}
                    onClick={() => isActive(index, name)}
                    key={`${name}_${index}`}
                >
                    {name}
                </li>
            ))}
        </ul>
    );
};

export default PizzaFilter;
