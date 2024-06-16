import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/utils/router';
import { ThemeProvider } from 'styled-components';
import theme from './utils/static_theme';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
  <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </StrictMode>
);
