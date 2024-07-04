import { createBrowserRouter, Navigate } from 'react-router-dom';

import CartPage from '@/pages/Cart';
import { ContactUs } from '@/pages/ContactUs';
import ErrorPage from '@/pages/Error';
import HomePage from '@/pages/Home';
import Layout from '@/pages/Layout';
import ProductPage from '@/pages/Product';
import ShopPage from '@/pages/Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: '*',
        element: <Navigate to="404"></Navigate>,
      },
      {
        path: '404',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
