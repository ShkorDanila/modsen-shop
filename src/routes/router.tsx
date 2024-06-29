import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Layout from '@/pages/Layout';
import ShopPage from '@/pages/Shop';
import ProductPage from '@/pages/Product';

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
        element: <ShopPage></ShopPage>,
      },
      {
        path: 'contact',
        element: <ShopPage></ShopPage>,
      },
      {
        path: '*',
        element: <ShopPage></ShopPage>,
      },
    ],
  },
]);

export default router;
