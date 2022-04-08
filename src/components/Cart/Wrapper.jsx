import React from 'react';
import Content from '../Cart/Content';
import { CartHeader } from './CartHeader/CartHeader';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <CartHeader />
            <Content />
        </div>
    );
};

export default Wrapper;
