import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Layout from '@/pages/Layout';
import ShopPage from '@/pages/Shop';
import ProductPage from '@/pages/Product';
import CartPage from '@/pages/Cart';
import { ContactUs } from '@/pages/ContactUs';
import ErrorPage from '@/pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home"/>,
      },
      {
        path: 'home',
        element: <HomePage/>,
      },
      {
        path: 'shop',
        element: <ShopPage/>,
      },
      {
        path: 'product/:id',
        element: <ProductPage/>,
      },
      {
        path: 'cart',
        element: <CartPage/>,
      },
      {
        path: 'contact',
        element: <ContactUs/>,
      },
      {
        path: '*',
        element: <Navigate to="404"></Navigate>,
      },
      {
        path: "404",
        element: <ErrorPage/>,
      },
    ],
  },
]);

export default router;
