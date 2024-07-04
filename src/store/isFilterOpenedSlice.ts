import { createSlice } from '@reduxjs/toolkit';

export const isFilterOpenedSlice = createSlice({
  name: 'isFilterOpened',
  initialState: { value: false },
  reducers: {
    changeFilterState: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { changeFilterState } = isFilterOpenedSlice.actions;
