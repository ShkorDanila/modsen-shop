import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Layout from '@/pages/Layout';
import ShopPage from '@/pages/Shop';
import ProductPage from '@/pages/Product';
import CartPage from '@/pages/Cart';
import { ContactUs } from '@/pages/ContactUs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: 'home',
        element: <HomePage></HomePage>,
      },
      {
        path: 'shop',
        element: <ShopPage></ShopPage>,
      },
      {
        path: 'product/:id',
        element: <ProductPage></ProductPage>,
      },
      {
        path: 'cart',
        element: <CartPage></CartPage>,
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '*',
        element: <ShopPage></ShopPage>,
      },
    ],
  },
]);

export default router;
