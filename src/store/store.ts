import { configureStore } from '@reduxjs/toolkit';

import { currentThemeSlice } from './currentThemeSlice';
import { isFilterOpenedSlice } from './isFilterOpenedSlice';
import { isMenuOpenedSlice } from './isMenuOpenedSlice';
import { productListSlice } from './productListSlice';
import { filterOptionsSlice } from './filterOptionsSlice';
import { cartSlice } from './cartSlice';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer)

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

export const persistor = persistStore(store)