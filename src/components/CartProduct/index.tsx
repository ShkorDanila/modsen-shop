import React from 'react';
import * as styled from "./styled"
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, removeFromCart } from '@/store/cartSlice';

const CartProduct = (product: IProduct) => {

    const dispatch = useDispatch()

    return (
        <>
            <styled.CartProductWrapper>
                <styled.InnerWrapper>
                    <styled.SmallImage url={product.image}></styled.SmallImage>
                    <styled.InfoSection>
                        <styled.ProductTitle>{product.title}</styled.ProductTitle>
                        <styled.ProductCost>{product.price}$</styled.ProductCost>
                        <styled.RemoveProductButton onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</styled.RemoveProductButton>
                    </styled.InfoSection>
                </styled.InnerWrapper>
            </styled.CartProductWrapper>
            <styled.Hr/>
        </>
    )
}
export default CartProduct;