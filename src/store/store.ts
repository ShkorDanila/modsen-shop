import theme from '@/utils/static_theme';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface IProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const productListInitial: IProductList[] = [];

const currentThemeSlice = createSlice({
  name: 'currentTheme',
  initialState: { value: theme.light },
  reducers: {
    switchTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

const isMenuOpenedSlice = createSlice({
  name: 'isMenuOpened',
  initialState: { value: false },
  reducers: {
    changeMenuState: (state, action) => {
      state.value = !state.value;
    },
  },
});

const productListSlice = createSlice({
  name: 'productList',
  initialState: { value: productListInitial },
  reducers: {
    setProductList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchTheme } = currentThemeSlice.actions;
export const { changeMenuState } = isMenuOpenedSlice.actions;
export const { setProductList } = productListSlice.actions;

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    isMenuOpened: isMenuOpenedSlice.reducer,
    productList: productListSlice.reducer,
  },
});
