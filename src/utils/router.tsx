import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import HomePage from '@/pages/Home';
import ShopPage from '@/pages/Shop';
import { useSelector } from 'react-redux';
import { IProductList } from '@/store/store';

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
