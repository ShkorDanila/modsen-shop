import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Shop from '@/pages/Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'shop',
        element: <Shop></Shop>,
      },
      {
        path: 'cart',
        element: <Shop></Shop>,
      },
      {
        path: 'contact',
        element: <Shop></Shop>,
      },
      {
        path: '*',
        element: <Shop></Shop>,
      },
    ],
  },
]);

export default router;
