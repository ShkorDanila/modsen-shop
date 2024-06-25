import { createSlice } from '@reduxjs/toolkit';

export const isMenuOpenedSlice = createSlice({
  name: 'isMenuOpened',
  initialState: { value: false },
  reducers: {
    changeMenuState: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { changeMenuState } = isMenuOpenedSlice.actions;
