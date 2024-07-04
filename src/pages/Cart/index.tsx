import CartProduct from '@/components/CartProduct';
import { IProduct, setCart } from '@/store/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styled from "./styled"
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const CartPage:React.FC = () => {

    const cart = useSelector((state: any) => state.cart.value)
    const dispatch = useDispatch()
    const [invoiceCart, setInvoiceCart] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        setInvoiceCart(cart.map((product: IProduct) => {return {title: product.title, price: product.price}}))
    }, [cart])

    const sendInvoice = () => {
        emailjs.send('service_kts1md9', 'template_8tllynt', {orderId: 1, orderHolder: "danila2004shckor@gmail.com", products: invoiceCart}).then(
            (response) => {
                alert("Заказ успешно оформлен! Чек выслан на указанную почту.")
                dispatch(setCart([]))
                navigate("/")
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };

    return (<>
        <styled.CartWrapper {...{isEmpty: cart.length <=0}}>
            <div>
            {cart.map((product: IProduct) => {
                return <CartProduct {...product}/>
            })}
            </div>
            
            <styled.SubmitSection>
            <styled.EmailInput placeholder='Email to send Invoice' type='email' required></styled.EmailInput>
            <styled.SubmitCartButton onClick={sendInvoice} disabled={cart.length <= 0}>Submit</styled.SubmitCartButton>
            </styled.SubmitSection>
        </styled.CartWrapper>
        <styled.EmptyPage {...{isEmpty: cart.length <=0}}>
            <styled.EmptyTitle>Cart Is Empty</styled.EmptyTitle>
            <styled.ToShopButton onClick={() => navigate('../shop')}>Shop</styled.ToShopButton>
        </styled.EmptyPage>
        </>
    )
}
export default CartPage;