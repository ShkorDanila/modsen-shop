import theme from '@/utils/static_theme';
import { configureStore, createSlice } from '@reduxjs/toolkit';

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

export const { switchTheme } = currentThemeSlice.actions;
export const { changeMenuState } = isMenuOpenedSlice.actions;

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    isMenuOpened: isMenuOpenedSlice.reducer,
  },
});
