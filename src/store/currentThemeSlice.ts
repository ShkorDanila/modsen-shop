import { createSlice } from '@reduxjs/toolkit';

import { THEME } from '@/constants/staticTheme';

export const currentThemeSlice = createSlice({
  name: 'currentTheme',
  initialState: { value: THEME.light },
  reducers: {
    switchTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchTheme } = currentThemeSlice.actions;
