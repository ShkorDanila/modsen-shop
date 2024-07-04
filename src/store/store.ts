import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartSlice } from './cartSlice';
import { currentThemeSlice } from './currentThemeSlice';
import { filterOptionsSlice } from './filterOptionsSlice';
import { isFilterOpenedSlice } from './isFilterOpenedSlice';
import { isMenuOpenedSlice } from './isMenuOpenedSlice';
import { productListSlice } from './productListSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    isMenuOpened: isMenuOpenedSlice.reducer,
    productList: productListSlice.reducer,
    isFilterOpened: isFilterOpenedSlice.reducer,
    filterOptions: filterOptionsSlice.reducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
