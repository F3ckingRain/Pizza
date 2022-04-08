import React, { useState } from 'react';

const RadiusSelector = ({name, taste, sort }) => {
    const [active, setActive] = useState(0);

    const radiusArray = ['26', '30', '40'];

    const makeSort = (name, taste, radius ,index) => {
        setActive(index);
        sort(name, taste, radius);
    };

    return (
        <ul>
            {radiusArray.map((radius, index) => (
                <li
                    key={`${radius}_${index}`}
                    className={active === index ? 'active' : ''}
                    onClick={() => makeSort(name, taste, radius, index)}
                >
                    {radius} см.
                </li>
            ))}
        </ul>
    );
};

export default RadiusSelector;
