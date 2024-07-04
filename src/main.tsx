import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "@/store/store"
import emailjs from "@emailjs/browser"
import router from '@/routes/router';

import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

emailjs.init({
  publicKey: 'nWaQlV1p9_rd9OH5H',
  // Do not allow headless browsers
  blockHeadless: true,
})

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
