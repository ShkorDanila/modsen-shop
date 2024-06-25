import { configureStore } from '@reduxjs/toolkit';

import { currentThemeSlice } from './currentThemeSlice';
import { isFilterOpenedSlice } from './isFilterOpenedSlice';
import { isMenuOpenedSlice } from './isMenuOpenedSlice';
import { productListSlice } from './productListSlice';
import { filterOptionsSlice } from './filterOptionsSlice';

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    isMenuOpened: isMenuOpenedSlice.reducer,
    productList: productListSlice.reducer,
    isFilterOpened: isFilterOpenedSlice.reducer,
    filterOptions: filterOptionsSlice.reducer
  },
});
