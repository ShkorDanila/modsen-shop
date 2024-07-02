import React from 'react';
import { useSelector } from 'react-redux';

const CartPage:React.FC = () => {

    const cart = useSelector((state: any) => state.cart.value)

    return (
        <div>Hello world</div>
    )
}
export default CartPage;