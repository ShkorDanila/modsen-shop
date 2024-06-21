import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Layout from '@/pages/Layout';
import ShopPage from '@/pages/Shop';

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
        children: [
          {
            path: ':id',
            element: <ShopPage></ShopPage>,
          },
        ],
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
