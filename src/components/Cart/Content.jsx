import React from 'react';
import CartTop from './CartContent/CartTop';
import { CartContent } from './CartContent/CartContent';
import { CartBottom } from './CartContent/CartBottom';

const Content = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    <CartTop/>
                    <CartContent/>
                    <CartBottom/>
                </div>
            </div>
        </div>
    );
};

export default Content;
