import React from 'react';
import RadiusSelector from '../../UI/RadiusSelector';
import TypeSelector from '../../UI/TypeSelector';
import { useDispatch } from 'react-redux';

const Selector = ({ radius, taste, name }) => {
    const dispatch = useDispatch();

    const sort = (name, taste, radius) => {
        dispatch({
            type: `Pizza_${name}_${taste}_${radius}cm`
        });
    };

    return (
        <div className="pizza-block__selector">
            <TypeSelector sort={sort} name={name} radius={radius} />
            <RadiusSelector sort={sort} name={name} taste={taste} />
        </div>
    );
};

export default Selector;
