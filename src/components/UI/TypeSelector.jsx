import React, { useState } from 'react';

const TypeSelector = ({ sort,name ,radius }) => {
    const [active, setActive] = useState(0);

    const typeArray = ['тонкое', 'традиционное'];

    const makeSort = (name, taste, radius, index) => {
        taste === 'тонкое' ? taste = 'slim' : taste = 'traditional'
        setActive(index);
        sort(name, taste, radius);
    };

    return (
        <ul>
            {typeArray.map((taste, index) => (
                <li
                    key={`${taste}_${index}`}
                    className={active === index ? 'active' : ''}
                    onClick={() => makeSort(name, taste, radius,index)}
                >
                    {taste}
                </li>
            ))}
        </ul>
    );
};

export default TypeSelector;
