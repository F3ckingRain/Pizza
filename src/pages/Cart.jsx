import React from 'react';
import Wrapper from '../components/Cart/Wrapper';
import { EmptyCart } from '../components/Cart/EmptyCart/EmptyCart';
import { useSelector } from 'react-redux';

const Cart = () => {
    const select = useSelector((state) => state.pizzaReducer);
    const result = Object.entries(select).filter(
        (el) => el[1].count > 0
    );

    return result.length === 0 ? <EmptyCart /> : <Wrapper />;
};
export default Cart;
